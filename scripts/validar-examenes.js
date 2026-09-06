'use strict';

/**
 * Valida la integridad de los datos de los exámenes (web/js/examenes/*.js).
 * Uso: node scripts/validar-examenes.js
 * Se ejecuta en local y en GitHub Actions (CI). Exit code != 0 si hay errores.
 */

const fs = require('fs');
const path = require('path');
const { EXAMENES } = loadExamenes();

const PESOS_ESPERADOS = {
  'examen-1': { 1: 7, 2: 6, 3: 5, 4: 10, 5: 9, 6: 3 },
  'examen-2': { 1: 7, 2: 6, 3: 5, 4: 9, 5: 10, 6: 3 },
  'examen-3': { 1: 7, 2: 6, 3: 5, 4: 9, 5: 10, 6: 3 },
  'examen-4': { 1: 7, 2: 6, 3: 5, 4: 16, 5: 5, 6: 1 },
  'examen-5': { 1: 7, 2: 6, 3: 5, 4: 16, 5: 5, 6: 1 },
  'examen-6': { 1: 7, 2: 6, 3: 5, 4: 16, 5: 5, 6: 1 },
  'examen-7': { 1: 7, 2: 6, 3: 5, 4: 10, 5: 9, 6: 3 },
  'examen-8': { 1: 7, 2: 6, 3: 5, 4: 10, 5: 9, 6: 3 },
  'examen-9': { 1: 7, 2: 6, 3: 5, 4: 10, 5: 9, 6: 3 },
  'examen-10': { 1: 7, 2: 6, 3: 5, 4: 10, 5: 9, 6: 3 }
};

const NIVELES_VALIDOS = ['K1', 'K2', 'K3'];
const LETRAS = ['a', 'b', 'c', 'd', 'e'];
const TOTAL_PREGUNTAS = 40;

function loadExamenes() {
  const dir = path.join(__dirname, '..', 'web', 'js', 'examenes');
  const archivos = fs.readdirSync(dir).filter((f) => /^examen-\d+\.js$/.test(f)).sort();
  for (const archivo of archivos) {
    require(path.join(dir, archivo));
  }
  if (!Array.isArray(globalThis.EXAMENES) || globalThis.EXAMENES.length === 0) {
    throw new Error('No se encontraron exámenes. globalThis.EXAMENES está vacío.');
  }
  return { EXAMENES: globalThis.EXAMENES };
}

function main() {
  const errores = [];
  const idsVistos = new Set();

  for (const examen of EXAMENES) {
    const ctx = examen.id || '(sin id)';
    const bien = '  [OK]';
    const mal = '  [ERROR]';

    if (idsVistos.has(examen.id)) errores.push(`${ctx}: id duplicado.`);
    idsVistos.add(examen.id);

    const pesos = PESOS_ESPERADOS[examen.id];
    if (!pesos) {
      errores.push(`${ctx}: no hay pesos esperados definidos para este id.`);
    }

    if (typeof examen.duracionRecomendada !== 'number' || examen.duracionRecomendada <= 0) {
      errores.push(`${ctx}: 'duracionRecomendada' debe ser un número positivo.`);
    }

    // --- Preguntas ---
    if (!Array.isArray(examen.preguntas) || examen.preguntas.length !== TOTAL_PREGUNTAS) {
      errores.push(`${ctx}: debe tener exactamente ${TOTAL_PREGUNTAS} preguntas (tiene ${examen.preguntas.length}).`);
    } else {
      const porCapitulo = {};
      const nums = [];

      examen.preguntas.forEach((p, i) => {
        const q = `P${i + 1}`;

        if (p.numero !== i + 1) errores.push(`${ctx} ${q}: 'numero' debe ser ${i + 1}.`);
        if (typeof p.capitulo !== 'number' || p.capitulo < 1 || p.capitulo > 6) {
          errores.push(`${ctx} ${q}: 'capitulo' debe estar entre 1 y 6.`);
        } else {
          porCapitulo[p.capitulo] = (porCapitulo[p.capitulo] || 0) + 1;
          nums.push(p.capitulo);
        }
        if (!NIVELES_VALIDOS.includes(p.nivel)) {
          errores.push(`${ctx} ${q}: 'nivel' debe ser K1, K2 o K3 (es '${p.nivel}').`);
        }
        if (typeof p.enunciado !== 'string' || p.enunciado.trim() === '') {
          errores.push(`${ctx} ${q}: 'enunciado' vacío.`);
        }

        if (!Array.isArray(p.opciones) || p.opciones.length < 4 || p.opciones.length > 5) {
          errores.push(`${ctx} ${q}: debe tener 4 o 5 opciones (tiene ${p.opciones && p.opciones.length}).`);
        } else {
          p.opciones.forEach((op, j) => {
            const letraEsperada = LETRAS[j];
            if (op.letra !== letraEsperada) {
              errores.push(`${ctx} ${q}: la opción ${j + 1} debe tener letra '${letraEsperada}'.`);
            }
            if (typeof op.texto !== 'string' || op.texto.trim() === '') {
              errores.push(`${ctx} ${q}${letraEsperada}): 'texto' vacío.`);
            }
            if (typeof op.explicacion !== 'string' || op.explicacion.trim() === '') {
              errores.push(`${ctx} ${q}${letraEsperada}): falta 'explicacion'.`);
            }
          });

          const correctas = p.opciones.filter((op) => op.correcta).length;
          const deseadas = p.seleccionar || 1;
          if (typeof p.seleccionar === 'number') {
            if (p.seleccionar < 2) errores.push(`${ctx} ${q}: 'seleccionar' debe ser >= 2.`);
          }
          if (correctas !== deseadas) {
            errores.push(`${ctx} ${q}: debe haber exactamente ${deseadas} opción(es) correcta(s) (hay ${correctas}).`);
          }
          for (const o of p.opciones) {
            if (typeof o.correcta !== 'boolean') {
              errores.push(`${ctx} ${q}: 'correcta' debe ser booleano en todas las opciones.`);
              break;
            }
          }
          if (typeof p.seleccionar === 'number') {
            const duplicadas = p.opciones.filter((o, idx) => p.opciones.findIndex((x) => x.texto === o.texto) !== idx).length;
            if (duplicadas > 0) errores.push(`${ctx} ${q}: hay opciones con texto duplicado.`);
          }
        }
      });

      // --- Pesos por capítulo ---
      if (pesos) {
        for (const cap of Object.keys(pesos)) {
          if ((porCapitulo[cap] || 0) !== pesos[cap]) {
            errores.push(`${ctx}: el capítulo ${cap} debe tener ${pesos[cap]} preguntas (hay ${porCapitulo[cap] || 0}).`);
          }
        }
      }
    }

    if (errores.length === 0) {
      console.log(`${bien} ${ctx}: ${examen.preguntas.length} preguntas, pesos correctos, opciones y explicaciones completas.`);
    } else {
      console.log(`${mal} ${ctx}: hay problemas.`);
    }
  }

  if (errores.length > 0) {
    console.log('\nSe encontraron errores:');
    for (const e of errores) console.log(`  - ${e}`);
    process.exit(1);
  } else {
    console.log(`\nValidación correcta: ${EXAMENES.length} exámenes, ${EXAMENES.reduce((n, e) => n + e.preguntas.length, 0)} preguntas.`);
  }
}

main();