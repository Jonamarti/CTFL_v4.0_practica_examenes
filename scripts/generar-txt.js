'use strict';

/**
 * Genera los EXÁMENES .txt a partir de los datos de la web (web/js/examenes/*.js)
 * para evitar divergencias entre la web y los textos planos.
 *
 * Por defecto regenera solo los exámenes 4, 5 y 6 (los 1-3 se mantienen como
 * fuente original). Usa '--todos' para regenerarlos todos.
 *
 * Uso:
 *   node scripts/generar-txt.js
 *   node scripts/generar-txt.js --todos
 */

const fs = require('fs');
const path = require('path');

const ANCHO = 100;
const SOLO_EXAMENES = process.argv.includes('--todos') ? null : new Set(['examen-4', 'examen-5', 'examen-6']);

function loadExamenes() {
  const dir = path.join(__dirname, '..', 'web', 'js', 'examenes');
  const archivos = fs.readdirSync(dir).filter((f) => /^examen-\d+\.js$/.test(f)).sort();
  for (const archivo of archivos) {
    require(path.join(dir, archivo));
  }
  return globalThis.EXAMENES;
}

function envolver(texto, ancho, sangria) {
  const palabras = texto.replace(/\s+/g, ' ').trim().split(' ');
  const lineas = [];
  let actual = '';
  for (const palabra of palabras) {
    if (actual === '') {
      actual = palabra;
    } else if ((actual + ' ' + palabra).length <= ancho) {
      actual += ' ' + palabra;
    } else {
      lineas.push(actual);
      actual = palabra;
    }
  }
  if (actual !== '') lineas.push(actual);
  return lineas.length > 1
    ? lineas[0] + '\n' + lineas.slice(1).map((l) => ' '.repeat(sangria) + l).join('\n')
    : texto;
}

function numeroExamen(id) {
  return id.replace('examen-', '');
}

function generar(examen) {
  const n = numeroExamen(examen.id);
  const titulo = examen.titulo || `EXAMEN DE PRÁCTICA ${n}`;
  let out = '';

  const separador = '='.repeat(79);

  out += separador + '\n';
  out += titulo + ' - ISTQB CTFL v4.0\n';
  out += separador + '\n';
  out += 'Instrucciones: 40 preguntas, 1 punto cada una.\n';
  out += 'Duración recomendada: ' + (examen.duracionRecomendada || 60) + ' minutos.\n';
  out += 'Seleccione UNA opción salvo que se indique "Seleccionar DOS opciones".\n';
  out += '\n';
  out += separador + '\n';
  out += 'PREGUNTAS\n';
  out += separador + '\n';
  out += '\n';

  for (const p of examen.preguntas) {
    out += `Pregunta ${String(p.numero).padStart(2, '0')} (Cap${p.capitulo} - ${p.nivel})\n`;
    out += envolver(p.enunciado, ANCHO, 0) + '\n';
    for (const op of p.opciones) {
      out += `${op.letra}) ${envolver(op.texto, ANCHO - 4, 3)}\n`;
    }
    out += '\n';
  }

  out += separador + '\n';
  out += `RESPUESTAS - ${titulo}\n`;
  out += separador + '\n';
  out += '\n';

  for (const p of examen.preguntas) {
    const correctas = p.opciones.filter((op) => op.correcta).map((op) => op.letra).join(', ');
    const nota = p.nota ? '  (' + p.nota + ')' : '';
    out += `${String(p.numero).padStart(2, '0')}: ${correctas}${nota}\n`;
  }

  return out;
}

function main() {
  const examenes = loadExamenes().filter((e) => !SOLO_EXAMENES || SOLO_EXAMENES.has(e.id));
  if (examenes.length === 0) {
    console.error('No hay exámenes que generar.');
    process.exit(1);
  }
  let escritos = 0;
  for (const examen of examenes) {
    const destino = path.join(__dirname, '..', `EXAMEN_PRACTICA_${numeroExamen(examen.id)}.txt`);
    fs.writeFileSync(destino, generar(examen), 'utf8');
    console.log(`Generado: ${path.basename(destino)}`);
    escritos++;
  }
  console.log(`\n${escritos} archivo(s) TXT generado(s).`);
}

main();