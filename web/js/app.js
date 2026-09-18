'use strict';

(function () {
  const EXAMENES = window.EXAMENES || [];

  const MENSAJES_CAP = {
    1: 'Cap 1 · Fundamentos',
    2: 'Cap 2 · CVDS',
    3: 'Cap 3 · Prueba estática',
    4: 'Cap 4 · Análisis y diseño',
    5: 'Cap 5 · Gestión',
    6: 'Cap 6 · Herramientas'
  };

  const DURACIONES = [
    { valor: 'sin', etiqueta: 'Sin temporizador', minutos: 0 },
    { valor: '60', etiqueta: '60 minutos', minutos: 60 },
    { valor: '75', etiqueta: '75 minutos', minutos: 75 }
  ];

  const APROBADO = 0.65;

  const claveGuardado = (id) => 'ctfl_respuestas_' + id;

  let estado = null;      // { exam, respuestas{}, modo, restante, epoch }
  let temporizadorId = null;

  const $ = (sel) => document.querySelector(sel);

  // ------------------------------------------------------------------
  // Utilidades
  // ------------------------------------------------------------------

  function guardar() {
    if (!estado || !estado.exam) return;
    const guardado = {
      respuestas: estado.respuestas,
      modo: estado.modo,
      restante: estado.restante,
      epoch: Date.now()
    };
    try { localStorage.setItem(claveGuardado(estado.exam.id), JSON.stringify(guardado)); } catch (e) { /* sin espacio */ }
  }

  function leerGuardado(id) {
    try {
      const datos = localStorage.getItem(claveGuardado(id));
      return datos ? JSON.parse(datos) : null;
    } catch (e) { return null; }
  }

  function borrarGuardado(id) {
    try { localStorage.removeItem(claveGuardado(id)); } catch (e) { /* noop */ }
  }

  function letrasCorrectas(pregunta) {
    return pregunta.opciones.filter((o) => o.correcta).map((o) => o.letra);
  }

  function esRespondida(pregunta) {
    const sel = estado && estado.respuestas[pregunta.numero];
    const necesarias = pregunta.seleccionar || 1;
    return Array.isArray(sel) && sel.length === necesarias;
  }

  function mostrarVista(nombre) {
    ['listado', 'examen', 'resultados'].forEach((v) => {
      $('#vista-' + v).classList.toggle('activa', v === nombre);
    });
    window.scrollTo(0, 0);
  }

  function mostrarModal(titulo, mensajeHTML, botones) {
    $('#modal-titulo').textContent = titulo;
    $('#modal-mensaje').innerHTML = mensajeHTML;
    const cont = $('#modal-acciones');
    cont.innerHTML = '';
    botones.forEach((b) => {
      const btn = document.createElement('button');
      btn.className = 'btn ' + (b.clase || '');
      btn.textContent = b.texto;
      btn.addEventListener('click', b.onClick);
      cont.appendChild(btn);
    });
    $('#modal').classList.remove('oculto');
  }

  function cerrarModal() { $('#modal').classList.add('oculto'); }

  function formatoTiempo(seg) {
    if (seg == null || seg < 0) seg = 0;
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  // ------------------------------------------------------------------
  // Listado
  // ------------------------------------------------------------------

  function renderListado() {
    const cont = $('#lista-examenes');
    cont.innerHTML = '';

    EXAMENES.forEach((ex, idx) => {
      const caps = [...new Set(ex.preguntas.map((p) => p.capitulo))].sort();
      const multi = ex.preguntas.filter((p) => p.seleccionar).length;
      const minimoAprobar = Math.ceil(ex.preguntas.length * APROBADO);
      const card = document.createElement('article');
      card.className = 'tarjeta-examen';

      const opcionesDur = DURACIONES
        .map((d) => `<option value="${d.valor}">${d.etiqueta}</option>`)
        .join('');

      card.innerHTML =
        '<h3>' + ex.titulo + '</h3>' +
        '<div class="meta">' +
          '<span>' + ex.preguntas.length + ' preguntas</span>' +
          '<span>aprobado: ' + minimoAprobar + '/' + ex.preguntas.length + '</span>' +
          (multi ? '<span>' + multi + ' de "seleccionar dos"</span>' : '') +
        '</div>' +
        '<div class="meta">Capítulos: ' + caps.map((c) => 'Cap ' + c).join(' · ') + '</div>' +
        '<div class="duracion-seleccion">' +
          'Temporizador <select data-duracion="' + idx + '">' + opcionesDur + '</select>' +
        '</div>' +
        '<div class="acciones">' +
          '<button class="btn btn-primario" data-empezar="' + idx + '">Comenzar</button>' +
          '<button class="btn" data-borrar="' + idx + '" title="Borrar avance guardado">Borrar avance</button>' +
        '</div>';

      cont.appendChild(card);
    });
  }

  function alClicListado(ev) {
    const empezar = ev.target.closest('[data-empezar]');
    const borrar = ev.target.closest('[data-borrar]');
    if (empezar) atenderEmpezar(parseInt(empezar.dataset.empezar, 10));
    if (borrar) {
      const ex = EXAMENES[parseInt(borrar.dataset.borrar, 10)];
      borrarGuardado(ex.id);
      ev.target.textContent = 'Avance borrado';
      setTimeout(() => { ev.target.textContent = 'Borrar avance'; }, 1500);
    }
  }

  function duracionSeleccionada(idx) {
    const sel = document.querySelector('[data-duracion="' + idx + '"]');
    const valor = sel ? sel.value : 'sin';
    const duracion = DURACIONES.find((d) => d.valor === valor);
    return duracion.duracion || duracion;
  }

  function atenderEmpezar(idx) {
    const ex = EXAMENES[idx];
    const guardado = leerGuardado(ex.id);
    const dur = duracionSeleccionada(idx);

    if (guardado && Object.keys(guardado.respuestas).length > 0) {
      mostrarModal(
        'Examen en curso',
        'Hay un avance guardado para <b>' + ex.titulo + '</b>. ¿Qué deseas hacer?',
        [
          { texto: 'Continuar', clase: 'btn-primario', onClick: () => { cerrarModal(); iniciarExamen(idx, dur.valor, guardado); } },
          { texto: 'Empezar de nuevo', clase: '', onClick: () => { borrarGuardado(ex.id); cerrarModal(); iniciarExamen(idx, dur.valor, null); } },
          { texto: 'Cancelar', clase: '', onClick: cerrarModal }
        ]
      );
    } else {
      iniciarExamen(idx, dur.valor, null);
    }
  }

  // ------------------------------------------------------------------
  // Inicio / render del examen
  // ------------------------------------------------------------------

  function iniciarExamen(idx, modo, guardado) {
    detenerTemporizador();
    const ex = EXAMENES[idx];
    const duracion = DURACIONES.find((d) => d.valor === modo) || DURACIONES[0];

    if (guardado) {
      estado = {
        exam: ex,
        respuestas: guardado.respuestas || {},
        modo: guardado.modo || 'sin',
        restante: duracion.minutos > 0 ? duracion.minutos * 60 : 0,
        epoch: Date.now()
      };
      if (guardado.modo && guardado.modo === duracion.valor && duracion.minutos > 0 && guardado.restante != null) {
        const transcurrido = Math.floor((Date.now() - guardado.epoch) / 1000);
        estado.restante = Math.max(0, guardado.restante - transcurrido);
      }
    } else {
      estado = {
        exam: ex,
        respuestas: {},
        modo: duracion.valor,
        restante: duracion.minutos > 0 ? duracion.minutos * 60 : 0,
        epoch: Date.now()
      };
    }

    mostrarVista('examen');
    renderBarraExamen();
    renderPreguntas();
    renderNavegador();
    iniciarTemporizador();
    guardar();
  }

  function renderBarraExamen() {
    const ex = estado.exam;
    const barra = $('#barra-examen');
    const conTemporizador = estado.modo !== 'sin';
    barra.innerHTML =
      '<div>' +
        '<div class="info-titulo">' + ex.titulo + '</div>' +
        '<div class="info-meta">' + ex.preguntas.length + ' preguntas · las respuestas se corrigen al pulsar Finalizar</div>' +
      '</div>' +
      (conTemporizador ? '<div class="temporizador" id="temporizador">--:--</div>' : '') +
      '<div class="progreso-respuestas" id="progreso-respuestas"></div>' +
      '<div class="acciones">' +
        '<button class="btn btn-primario" id="btn-finalizar">Finalizar</button>' +
        '<button class="btn" id="btn-reiniciar" title="Empezar de nuevo este examen">Reiniciar</button>' +
        '<button class="btn" id="btn-salir">Salir</button>' +
      '</div>';

    $('#btn-finalizar').addEventListener('click', confirmarFinalizar);
    $('#btn-reiniciar').addEventListener('click', () => iniciarExamen(
      EXAMENES.findIndex((e) => e.id === estado.exam.id), estado.modo, null));
    $('#btn-salir').addEventListener('click', salirAlListado);
  }

  function renderPreguntas() {
    const cont = $('#contenedor-preguntas');
    cont.innerHTML = '';

    estado.exam.preguntas.forEach((p) => {
      const tarjeta = document.createElement('article');
      tarjeta.className = 'pregunta';
      tarjeta.id = 'pregunta-' + p.numero;

      const chipClase = 'cap' + p.capitulo;
      const cabecera = document.createElement('div');
      cabecera.className = 'pregunta-cabecera';
      cabecera.innerHTML =
        '<span class="pregunta-titulo">Pregunta ' + p.numero + '</span>' +
        '<span class="chip ' + chipClase + '">' + MENSAJES_CAP[p.capitulo] + '</span>' +
        '<span class="chip">' + (p.nivel || '') + '</span>';

      const enunciado = document.createElement('p');
      enunciado.className = 'enunciado';
      enunciado.textContent = p.enunciado;

      tarjeta.appendChild(cabecera);
      tarjeta.appendChild(enunciado);

      const opciones = document.createElement('div');
      opciones.className = 'opciones';
      const grupo = 'q' + p.numero;

      p.opciones.forEach((op) => {
        const etiqueta = document.createElement('label');
        etiqueta.className = 'opcion';
        const seleccionadas = estado.respuestas[p.numero] || [];

        let input;
        if (p.seleccionar) {
          input = document.createElement('input');
          input.type = 'checkbox';
          input.name = grupo;
          input.value = op.letra;
          input.checked = seleccionadas.includes(op.letra);
        } else {
          input = document.createElement('input');
          input.type = 'radio';
          input.name = grupo;
          input.value = op.letra;
          input.checked = seleccionadas.includes(op.letra);
        }
        input.addEventListener('change', () => cambiarRespuesta(p, input));

        const letra = document.createElement('span');
        letra.className = 'opcion-letra';
        letra.textContent = op.letra + ')';

        const texto = document.createElement('span');
        texto.className = 'opcion-texto';
        texto.textContent = op.texto;

        etiqueta.appendChild(input);
        etiqueta.appendChild(letra);
        etiqueta.appendChild(texto);
        opciones.appendChild(etiqueta);
      });

      tarjeta.appendChild(opciones);
      cont.appendChild(tarjeta);
    });
  }

  function cambiarRespuesta(pregunta, input) {
    const grupo = 'q' + pregunta.numero;
    let seleccionadas = estado.respuestas[pregunta.numero] || [];

    if (pregunta.seleccionar) {
      if (input.checked) {
        if (!seleccionadas.includes(input.value)) {
          seleccionadas = seleccionadas.concat(input.value);
        }
        if (seleccionadas.length > pregunta.seleccionar) {
          input.checked = false;
          seleccionadas = seleccionadas.filter((v) => v !== input.value);
        }
      } else {
        seleccionadas = seleccionadas.filter((v) => v !== input.value);
      }
    } else {
      seleccionadas = input.checked ? [input.value] : [];
    }

    if (seleccionadas.length > 0) {
      estado.respuestas[pregunta.numero] = seleccionadas;
    } else {
      delete estado.respuestas[pregunta.numero];
    }

    actualizarNavegadorYProgreso();
    guardar();
  }

  // ------------------------------------------------------------------
  // Navegador y progreso
  // ------------------------------------------------------------------

  function renderNavegador() {
    const nav = $('#navegador-preguntas');
    nav.innerHTML = '<h4>Preguntas</h4>';
    const grid = document.createElement('div');
    grid.className = 'navegador-grid';

    estado.exam.preguntas.forEach((p, i) => {
      const num = document.createElement('button');
      num.type = 'button';
      num.className = 'nav-num';
      num.textContent = p.numero;
      num.dataset.ir = p.numero;
      num.addEventListener('click', () => {
        document.querySelector('#pregunta-' + p.numero).scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      grid.appendChild(num);
    });

    nav.appendChild(grid);
    nav.innerHTML +=
      '<div class="leyenda-navegador">' +
        '<span class="punto respondida"></span> respondida' +
        '&nbsp;&nbsp;<span class="punto sin"></span> sin responder' +
      '</div>';

    actualizarNavegadorYProgreso();
  }

  function actualizarNavegadorYProgreso() {
    if (!estado) return;
    const navNums = document.querySelectorAll('.nav-num');
    const respondidas = [];
    estado.exam.preguntas.forEach((p, i) => {
      if (esRespondida(p)) respondidas.push(p.numero);
      if (navNums[i]) {
        navNums[i].classList.toggle('respondida', esRespondida(p));
      }
    });

    const progreso = $('#progreso-respuestas');
    if (progreso) {
      progreso.textContent = respondidas.length + '/' + estado.exam.preguntas.length + ' respondidas';
    }
  }

  // ------------------------------------------------------------------
  // Temporizador
  // ------------------------------------------------------------------

  function iniciarTemporizador() {
    detenerTemporizador();
    if (estado.modo === 'sin') return;
    pintarTemporizador();
    temporizadorId = setInterval(() => {
      estado.restante--;
      pintarTemporizador();
      if (estado.restante <= 0) {
        detenerTemporizador();
        pintarTemporizador();
        mostrarModal(
          'Tiempo agotado',
          'Se ha agotado el tiempo. Puedes finalizar para corregir el examen.',
          [
            { texto: 'Finalizar examen', clase: 'btn-primario', onClick: () => { cerrarModal(); finalizar(); } }
          ]
        );
      }
    }, 1000);
  }

  function detenerTemporizador() {
    if (temporizadorId) { clearInterval(temporizadorId); temporizadorId = null; }
  }

  function pintarTemporizador() {
    const el = $('#temporizador');
    if (!el) return;
    el.textContent = formatoTiempo(estado.restante);
    el.classList.toggle('urgente', estado.restante <= 60);
  }

  // ------------------------------------------------------------------
  // Finalizar y corrección
  // ------------------------------------------------------------------

  function confirmarFinalizar() {
    const sinResponder = estado.exam.preguntas.filter((p) => !esRespondida(p));
    if (sinResponder.length === 0) {
      finalizar();
      return;
    }
    mostrarModal(
      'Preguntas sin responder',
      'Hay <b>' + sinResponder.length + '</b> pregunta(s) sin respuesta completa. Estas contarán como incorrectas. ¿Finalizar de todos modos?',
      [
        { texto: 'Finalizar de todos modos', clase: 'btn-primario', onClick: () => { cerrarModal(); finalizar(); } },
        { texto: 'Seguir respondiendo', clase: '', onClick: cerrarModal }
      ]
    );
  }

  function finalizar() {
    detenerTemporizador();

    const resultados = estado.exam.preguntas.map((p) => {
      const sel = estado.respuestas[p.numero] || [];
      const correctas = letrasCorrectas(p);
      const respondida = esRespondida(p);
      const acierto = respondida &&
        sel.slice().sort().join('') === correctas.slice().sort().join('');
      return {
        pregunta: p,
        seleccionadas: sel,
        correctas,
        respondida,
        correcta: acierto
      };
    });

    renderResultados(estado.exam, resultados);

    const guardado = leerGuardado(estado.exam.id);
    if (guardado) {
      guardado.respuestas = {};
      guardado.terminado = true;
      try { localStorage.setItem(claveGuardado(estado.exam.id), JSON.stringify(guardado)); } catch (e) { /* noop */ }
    }
    mostrarVista('resultados');
  }

  // ------------------------------------------------------------------
  // Resultados
  // ------------------------------------------------------------------

  function renderResultados(exam, resultados) {
    const cont = $('#contenedor-resultados');
    const total = resultados.length;
    const correctas = resultados.filter((r) => r.correcta).length;
    const incorrectas = resultados.filter((r) => r.respondida && !r.correcta).length;
    const sinResponder = resultados.filter((r) => !r.respondida).length;
    const porcien = Math.round((correctas / total) * 100);
    const aprueba = correctas / total >= APROBADO;

    const porCapitulo = {};
    resultados.forEach((r) => {
      const c = r.pregunta.capitulo;
      porCapitulo[c] = porCapitulo[c] || { total: 0, ok: 0 };
      porCapitulo[c].total++;
      if (r.correcta) porCapitulo[c].ok++;
    });

    let html = '';
    html += '<h2 class="resultado-titulo">Resultado · ' + exam.titulo + '</h2>';
    html += '<p class="resultado-sub">' + (aprueba
      ? 'Aprobado (>= ' + Math.round(APROBADO * 100) + '%)'
      : 'No alcanza el mínimo (' + Math.round(APROBADO * 100) + '% para aprobar)') + '</p>';

    html += '<div class="resumen-cards">' +
      '<div class="resumen-card total"><div class="num">' + total + '</div><div class="etiq">Totales</div></div>' +
      '<div class="resumen-card ok"><div class="num">' + correctas + '</div><div class="etiq">Correctas</div></div>' +
      '<div class="resumen-card fall"><div class="num">' + incorrectas + '</div><div class="etiq">Incorrectas</div></div>' +
      '<div class="resumen-card vacio"><div class="num">' + sinResponder + '</div><div class="etiq">Sin responder</div></div>' +
      '<div class="resumen-card total"><div class="num">' + porcien + '%</div><div class="etiq">Acierto</div></div>' +
      '</div>';

    // Desglose por capítulo
    html += '<div class="panel-cap"><h3>Acierto por capítulo</h3><table><thead><tr>' +
      '<th>Capítulo</th><th>Preguntas</th><th>Correctas</th><th>Acierto</th></tr></thead><tbody>';
    Object.keys(porCapitulo).sort((a, b) => a - b).forEach((c) => {
      const d = porCapitulo[c];
      const pct = Math.round((d.ok / d.total) * 100);
      html += '<tr><td>' + MENSAJES_CAP[c] + '</td><td>' + d.total + '</td><td>' + d.ok + '</td><td>' + pct + '%</td></tr>';
    });
    html += '</tbody></table></div>';

    // Botones globales
    html += '<div class="acciones" style="margin: 0 0 20px;">' +
      '<button class="btn btn-verde" id="btn-reintentar">Reintentar</button>' +
      '<button class="btn" id="btn-volver">Volver al listado</button>' +
      '</div>';

    html += '<h2 class="resultado-titulo">Revisión pregunta a pregunta</h2>';

    resultados.forEach((r, i) => {
      const p = r.pregunta;
      const badge = r.correcta
        ? '<span class="badge-estado ok">Correcta</span>'
        : (r.respondida ? '<span class="badge-estado fall">Incorrecta</span>' : '<span class="badge-estado vacio">Sin responder</span>');

      html += '<article class="pregunta" id="revision-' + (i + 1) + '">';
      html += '<div class="pregunta-cabecera">' +
        '<span class="pregunta-titulo">Pregunta ' + p.numero + '</span>' +
        badge +
        '<span class="chip cap' + p.capitulo + '">' + MENSAJES_CAP[p.capitulo] + '</span>' +
        '<span class="chip">' + (p.nivel || '') + '</span>' +
        '</div>';
      html += '<p class="enunciado">' + escap(p.enunciado) + '</p>';
      html += '<div class="opciones">';

      p.opciones.forEach((op) => {
        const fueSeleccionada = r.seleccionadas.includes(op.letra);
        let clase = 'opcion';
        if (op.correcta) clase += ' correcta';
        else if (fueSeleccionada) clase += ' incorrecta';
        else if (!r.respondida) clase += ' sin-respuesta';
        else clase += ' sin-respuesta';

        const marcador = (op.correcta ? 'Si ' : '') + (fueSeleccionada ? 'Tu respuesta ' : op.correcta ? 'Correcta ' : '');
        const etiquetaExpl = op.correcta
          ? '<b>Por qué es CORRECTA:</b> '
          : '<b>Por qué es INCORRECTA:</b> ';
        const claseExpl = op.correcta ? 'por-que-correcta' : 'por-que-incorrecta';

        html += '<div class="' + clase + '">' +
          '<span class="opcion-letra">' + op.letra + ')&nbsp;</span>' +
          '<span class="opcion-texto">' + escap(op.texto) +
          (op.correcta && !fueSeleccionada ? ' <i>(correcta, no seleccionada)</i>' : '') +
          '</span>' +
          '</div>';

        html += '<div class="explicacion mostrar ' + claseExpl + '">' + etiquetaExpl + escap(op.explicacion) + '</div>';
      });

      html += '</div></article>';
    });

    cont.innerHTML = html;

    $('#btn-reintentar').addEventListener('click', () => {
      borrarGuardado(exam.id);
      iniciarExamen(EXAMENES.findIndex((e) => e.id === exam.id), 'sin', null);
    });
    $('#btn-volver').addEventListener('click', salirAlListado);
  }

  function escap(texto) {
    return String(texto).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ------------------------------------------------------------------
  // Navegación
  // ------------------------------------------------------------------

  function salirAlListado() {
    detenerTemporizador();
    estado = null;
    mostrarVista('listado');
  }

  // ------------------------------------------------------------------
  // Arranque
  // ------------------------------------------------------------------

  function init() {
    if (EXAMENES.length === 0) {
      $('#lista-examenes').innerHTML =
        '<p>No hay exámenes cargados. Comprueba que los archivos js/examenes/examen-N.js están presentes.</p>';
      return;
    }
    $('#lista-examenes').addEventListener('click', alClicListado);
    renderListado();
  }

  init();
})();