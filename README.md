# Práctica ISTQB CTFL v4.0

Banco de exámenes de práctica para preparar la certificación **ISTQB Certified
Tester Foundation Level (CTFL) v4.0**, con una **web interactiva** donde puedes
responder, finalizar y revisar cada pregunta con la explicación de por qué cada
opción es correcta o incorrecta.

## Funcionalidades de la web

- **6 exámenes de práctica** de 40 preguntas cada uno, con la distribución
  oficial por capítulos y niveles K (K1/K2/K3).
- Soporte de preguntas de **una opción** (radio) y **"Seleccionar DOS opciones"**
  (casillas que validan exactamente 2 respuestas).
- **Nada se revela al responder**: la corrección solo aparece al pulsar
  **Finalizar**.
- Al finalizar: resumen de **correctas / incorrectas / sin responder / totales**,
  porcentaje y desglose por capítulo.
- **Revisión pregunta a pregunta**: se marca en verde la respuesta correcta, en
  rojo las selecciones incorrectas y se explica por qué la correcta es correcta y
  por qué cada incorrecta no lo es.
- **Temporizador opcional** seleccionable (sin temporizador / 60 min / 75 min).
- **Autoguardado** (localStorage): si cierras la pestaña, retomas donde estabas.
- Pura **HTML+CSS+JS estático**: funciona sin servidor ni instalaciones.

## Cómo usar

### Localmente
Abre `web/index.html` en cualquier navegador (doble clic). Sin build, sin
dependencias.

### En línea (GitHub Pages)
El repositorio incluye un workflow de GitHub Actions que publica la web
automáticamente en GitHub Pages.

## Tests de validación de datos

El workflow de CI (`.github/workflows/validacion.yaml`) valida la integridad de
los datos en cada push/PR. También puedes ejecutarlo localmente:

```bash
npm install
npm test
```

El test comprueba, por cada examen: 40 preguntas, pesos por capítulo esperados,
una única opción correcta en preguntas de una opción y exactamente dos en las de
"Seleccionar DOS", letras secuenciales, y textos y explicaciones no vacíos.

### Regenerar los `.txt`

Los `EXAMEN_PRACTICA_4.txt`, `_5.txt` y `_6.txt` se generan desde los datos de
la web para evitar divergencias:

```bash
node scripts/generar-txt.js
```

## Estructura

```
web/
├─ index.html                → listado, pantalla de examen y resultados
├─ css/estilos.css
├─ js/app.js                 → lógica de la web
└─ js/examenes/examen-N.js   → datos de cada examen (enunciados + explicaciones)
scripts/
├─ validar-examenes.js       → tests de integridad de los datos
└─ generar-txt.js            → genera los .txt desde los datos
EXAMEN_PRACTICA_N.txt        → exámenes en texto plano (mismos contenidos)
SINTESIS_CTFL_v4.0.md        → resumen del temario usado para las explicaciones
```

## Licencia y reconocimiento de propiedad intelectual

Este proyecto se publica bajo **licencia MIT** (ver `LICENSE`).

**ISTQB** es el propietario de la propiedad intelectual del syllabus, las marcas
registradas y los materiales oficiales de sus exámenes, incluidos los exámenes
de muestra. Los exámenes de práctica de este repositorio son **material original
con fines educativos**, generados a partir del programa de estudio público CTFL
v4.0 y tomando como referencia exámenes oficiales resueltos y material de
estudio oficial como guía para redactarla. **No se redistribuye material oficial
de ISTQB en este repositorio**, y este proyecto **no está afiliado, respaldado
ni certificado por ISTQB**.