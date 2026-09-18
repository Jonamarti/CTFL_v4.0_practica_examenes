/* examen-4.js — Datos del EXAMEN DE PRÁCTICA 4 (CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-4',
    titulo: 'EXAMEN DE PRÁCTICA 4',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un objetivo de la prueba de software?',
        opciones: [
          { letra: 'a', texto: 'Reemplazar los procesos de mejora de la calidad del proyecto', correcta: false,
            explicacion: 'No. La prueba complementa, pero no reemplaza, los procesos de aseguramiento de la calidad.' },
          { letra: 'b', texto: 'Detectar defectos y proporcionar información sobre el nivel de calidad', correcta: true,
            explicacion: 'Correcto. Los objetivos de la prueba incluyen detectar defectos, evaluar productos de trabajo, proporcionar información sobre la calidad, generar confianza y prevenir defectos.' },
          { letra: 'c', texto: 'Corregir la causa raíz de los defectos encontrados', correcta: false,
            explicacion: 'No. Corregir la causa raíz es depurar, no probar. La prueba detecta y reporta; quien corrige es desarrollo.' },
          { letra: 'd', texto: 'Demostrar que el software funciona en todas las situaciones posibles', correcta: false,
            explicacion: 'No. Es imposible probar todas las situaciones (pruebas exhaustivas imposibles); la prueba muestra la presencia, no la ausencia de defectos.' },
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: 'Durante la ejecución de una prueba, el sistema muestra resultados incorrectos en un informe. El analista descubre que la condición del informe fue escrita al revés por quien la programó. Según la terminología ISTQB, ¿cómo se denomina cada elemento?',
        opciones: [
          { letra: 'a', texto: 'Condición al revés = fallo; resultados incorrectos = defecto', correcta: false,
            explicacion: 'No. La condición invertida es el defecto (en el código); los resultados incorrectos son el fallo.' },
          { letra: 'b', texto: 'Quien la programó = defecto; condición al revés = error', correcta: false,
            explicacion: 'No. Quien programa es la fuente del error; el defecto es la condición incorrecta en el producto de trabajo.' },
          { letra: 'c', texto: 'Condición escrita al revés = defecto; resultados incorrectos = fallo; quien la programó = error', correcta: true,
            explicacion: 'Correcto. El programador comete un error (acción humana), que introduce un defecto (la condición invertida en el código); al ejecutarse se manifiesta como un fallo (resultados incorrectos).' },
          { letra: 'd', texto: 'Resultados incorrectos = defecto; condición al revés = fallo; quien la programó = causa raíz', correcta: false,
            explicacion: 'No. Los términos están intercambiados: el defecto está en el código, el fallo es el resultado observable y el error es la acción humana.' },
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: 'Un proyecto repite el mismo conjunto de pruebas en cada iteración y deja de encontrar defectos nuevos. ¿Qué principio de prueba recomienda revisar y ampliar el conjunto de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación de defectos trata sobre la concentración de defectos en pocas áreas, no sobre la pérdida de eficacia de pruebas repetidas.' },
          { letra: 'b', texto: 'Pruebas tempranas', correcta: false,
            explicacion: 'No. El principio de pruebas tempranas aconseja probar pronto para ahorrar costes.' },
          { letra: 'c', texto: 'Falacia de ausencia de errores', correcta: false,
            explicacion: 'No. Esa falacia señala que no basta con encontrar y corregir defectos si el sistema no satisface al usuario.' },
          { letra: 'd', texto: 'Paradoja del pesticida', correcta: true,
            explicacion: 'Correcto. La paradoja del pesticida: las pruebas repetidas una y otra vez dejan de detectar defectos nuevos; hay que revisarlas, actualizarlas y ampliarlas.' },
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes NO es una actividad del proceso de prueba?',
        opciones: [
          { letra: 'a', texto: 'Codificación del software', correcta: true,
            explicacion: 'Correcto. Codificar es una actividad de desarrollo. Las actividades de prueba son: planificación, monitorización y control, análisis, diseño, implementación, ejecución y compleción.' },
          { letra: 'b', texto: 'Ejecución de la prueba', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: la ejecución sí es una actividad del proceso de prueba.' },
          { letra: 'c', texto: 'Monitorización y control', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: la monitorización y el control sí son actividades del proceso de prueba.' },
          { letra: 'd', texto: 'Análisis y diseño de la prueba', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: análisis y diseño son actividades del proceso, junto con implementación, ejecución y compleción.' },
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué utilidad tiene la trazabilidad que conecta la base de prueba con los productos de prueba?',
        opciones: [
          { letra: 'a', texto: 'Para sustituir la documentación de diseño', correcta: false,
            explicacion: 'No. La trazabilidad es un vínculo entre artefactos, no un sustituto de la documentación.' },
          { letra: 'b', texto: 'Para evaluar el impacto de los cambios y determinar la cobertura alcanzada', correcta: true,
            explicacion: 'Correcto. La trazabilidad conecta base de prueba, condiciones, casos y resultados; sirve para evaluar el impacto de los cambios, medir la cobertura y analizar el riesgo residual.' },
          { letra: 'c', texto: 'Para garantizar la ausencia total de defectos', correcta: false,
            explicacion: 'No. Ninguna técnica garantiza la ausencia de defectos; eso contradice los principios de la prueba.' },
          { letra: 'd', texto: 'Para eliminar la necesidad de prueba de regresión', correcta: false,
            explicacion: 'No. Al contrario, la trazabilidad ayuda a decidir QUÉ re-probar, pero no elimina la regresión.' },
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué diferencia principal hay entre aseguramiento de la calidad (QA) y prueba?',
        opciones: [
          { letra: 'a', texto: 'QA detecta defectos; la prueba mejora los procesos', correcta: false,
            explicacion: 'No. Está invertido: la prueba detecta defectos en el producto; QA mejora los procesos.' },
          { letra: 'b', texto: 'No tienen ninguna relación', correcta: false,
            explicacion: 'No. Están relacionadas: la prueba es una medida importante del nivel de calidad y sus resultados alimentan las decisiones de QA.' },
          { letra: 'c', texto: 'QA se centra en los procesos; la prueba se centra en el producto', correcta: true,
            explicacion: 'Correcto. QA orienta sus actividades a mejorar los procesos para prevenir defectos; la prueba se enfoca en el producto, detectando y evaluando defectos.' },
          { letra: 'd', texto: 'Son exactamente lo mismo', correcta: false,
            explicacion: 'No. Son complementarias pero distintas: QA es proactiva sobre procesos; la prueba evalúa el producto.' },
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es una desventaja potencial de aumentar la independencia del equipo de prueba?',
        opciones: [
          { letra: 'a', texto: 'Aumenta el sesgo al evaluar el producto', correcta: false,
            explicacion: 'No. La independencia reduce el sesgo, no lo aumenta.' },
          { letra: 'b', texto: 'Se elimina la necesidad de probar', correcta: false,
            explicacion: 'No. Seguir probando es imprescindible; la independencia cambia quién prueba, no si se prueba.' },
          { letra: 'c', texto: 'Se pierden los datos de rendimiento de la prueba', correcta: false,
            explicacion: 'No. La independencia no hace desaparecer las métricas.' },
          { letra: 'd', texto: 'Puede reducirse la colaboración y la comunicación con quienes desarrollan', correcta: true,
            explicacion: 'Correcto. Cuanta más independencia, menor sesgo y mayor objetividad, pero como contrapartida puede empeorar la comunicación y la colaboración con el equipo de desarrollo.' },
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba se centra en las interfaces entre el sistema bajo prueba y los sistemas externos?',
        opciones: [
          { letra: 'a', texto: 'Prueba de integración de sistemas', correcta: true,
            explicacion: 'Correcto. La integración de sistemas verifica las interfaces y el comportamiento entre el sistema completo y sus homólogos externos.' },
          { letra: 'b', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La de componente prueba un componente aislado, sin sistemas externos.' },
          { letra: 'c', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario/negocio; no se centra en interfaces técnicas externas.' },
          { letra: 'd', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La de sistema prueba el sistema completo funcional y no funcionalmente; las interfaces externas corresponden a la integración de sistemas.' },
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K1',
        enunciado: 'En el modelo V de desarrollo, ¿qué actividad de prueba se realiza en paralelo con la definición de los requisitos?',
        opciones: [
          { letra: 'a', texto: 'El análisis estático del código', correcta: false,
            explicacion: 'No. El análisis estático del código requiere código; con requisitos aún no lo hay.' },
          { letra: 'b', texto: 'La planificación de la prueba de los niveles correspondientes', correcta: true,
            explicacion: 'Correcto. En el modelo V cada nivel de prueba se planifica de forma paralela a su nivel de desarrollo: la planificación de la prueba de aceptación/sistema comienza con los requisitos.' },
          { letra: 'c', texto: 'La ejecución de la prueba de sistema', correcta: false,
            explicacion: 'No. La ejecución se realiza al final, cuando el sistema está construido.' },
          { letra: 'd', texto: 'La prueba de aceptación con usuarios finales', correcta: false,
            explicacion: 'No. La aceptación se ejecuta al final del ciclo, aunque se planifique al inicio.' },
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un riesgo de DevOps para una organización?',
        opciones: [
          { letra: 'a', texto: 'Recibir retroalimentación rápida sobre la calidad', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de DevOps.' },
          { letra: 'b', texto: 'La disminución de la visibilidad de la calidad', correcta: false,
            explicacion: 'No. DevOps suele AUMENTAR la visibilidad de la calidad, no disminuirla.' },
          { letra: 'c', texto: 'La necesidad de introducir y mantener las herramientas y tuberías de CI/CD', correcta: true,
            explicacion: 'Correcto. DevOps implica mantener infraestructura y scripts de integración y entrega continuas, lo que exige esfuerzo y conocimientos; es un riesgo típico.' },
          { letra: 'd', texto: 'La automatización de pruebas repetitivas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de DevOps.' },
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué práctica pertenece al enfoque de desplazamiento a la izquierda (shift-left) en la prueba?',
        opciones: [
          { letra: 'a', texto: 'Probar únicamente en el entorno de producción', correcta: false,
            explicacion: 'No. Probar solo en producción es tardío y arriesgado; es lo contrario del shift-left.' },
          { letra: 'b', texto: 'Programar todas las funcionalidades antes de revisar ninguna', correcta: false,
            explicacion: 'No. Retrasar la revisión hasta tener todo el código es un enfoque tardío.' },
          { letra: 'c', texto: 'Detectar la mayoría de defectos en las pruebas tardías', correcta: false,
            explicacion: 'No. El objetivo es detectar defectos TEMPRANO, no tarde.' },
          { letra: 'd', texto: 'Examinar los requisitos con una mirada de probador antes de programar', correcta: true,
            explicacion: 'Correcto. El shift-left adelanta actividades: revisar requisitos y diseño con visión de prueba, usar análisis estático e integrar temprano, para abaratar la corrección.' },
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: 'La prueba de confirmación se utiliza para verificar:',
        opciones: [
          { letra: 'a', texto: 'Que el defecto reportado se ha corregido con éxito', correcta: true,
            explicacion: 'Correcto. La prueba de confirmación (o re-prueba) vuelve a ejecutar las pruebas que fallaban para comprobar que el defecto fue corregido.' },
          { letra: 'b', texto: 'Que ningún otro módulo se ha visto afectado por el cambio', correcta: false,
            explicacion: 'No. Eso es la prueba de regresión, no la de confirmación.' },
          { letra: 'c', texto: 'Que el presupuesto de la prueba no se ha desviado', correcta: false,
            explicacion: 'No. Eso es monitorización de la gestión, no una prueba de corregido.' },
          { letra: 'd', texto: 'Que el sistema cumple requisitos no funcionales', correcta: false,
            explicacion: 'No. Eso corresponde a pruebas no funcionales.' },
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿En qué consiste la prueba de mantenimiento?',
        opciones: [
          { letra: 'a', texto: 'En corregir defectos sin realizar pruebas', correcta: false,
            explicacion: 'No. Corregir sin probar no es prueba de mantenimiento; toda corrección debe probarse.' },
          { letra: 'b', texto: 'En probar modificaciones, migraciones de datos y retiro del sistema en producción', correcta: true,
            explicacion: 'Correcto. La prueba de mantenimiento se aplica a sistemas en producción ante actualizaciones, migraciones y retiro, evaluando el impacto de los cambios.' },
          { letra: 'c', texto: 'En probar solo el código nuevo añadido', correcta: false,
            explicacion: 'No. Debe probarse la interacción del cambio con el sistema existente, no solo lo nuevo.' },
          { letra: 'd', texto: 'En la prueba de aceptación al final del proyecto', correcta: false,
            explicacion: 'No. La aceptación se hace antes del despliegue inicial, no es prueba de mantenimiento.' },
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de estas afirmaciones sobre la prueba estática es CORRECTA?',
        opciones: [
          { letra: 'a', texto: 'Solo se puede aplicar al código fuente', correcta: false,
            explicacion: 'No. Se aplica a cualquier producto de trabajo: requisitos, diseño, documentación, código, etc.' },
          { letra: 'b', texto: 'Sustituye por completo a la prueba dinámica', correcta: false,
            explicacion: 'No. Son complementarias: la estática no detecta defectos de ejecución como rendimiento o tiempo de respuesta.' },
          { letra: 'c', texto: 'No requiere ejecutar el software y puede examinar productos como requisitos o diseño', correcta: true,
            explicacion: 'Correcto. La prueba estática no ejecuta el software; mediante revisiones y análisis estático examina requisitos, diseño, documentación y código.' },
          { letra: 'd', texto: 'Requiere siempre ejecutar el software', correcta: false,
            explicacion: 'No. Por definición, la prueba estática NO ejecuta el software; eso es la dinámica.' },
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: 'Según ISO/IEC 20246, ¿cuál es la PRIMERA actividad del proceso de revisión?',
        opciones: [
          { letra: 'a', texto: 'Inicio', correcta: false,
            explicacion: 'No. El inicio (kick-off) es la segunda actividad, tras la planificación.' },
          { letra: 'b', texto: 'Revisión individual', correcta: false,
            explicacion: 'No. La revisión individual es la tercera actividad.' },
          { letra: 'c', texto: 'Corrección', correcta: false,
            explicacion: 'No. La corrección y cierre es la última actividad.' },
          { letra: 'd', texto: 'Planificación', correcta: true,
            explicacion: 'Correcto. El proceso de revisión comienza con la planificación: definir objetivos, alcance, criterios de entrada/salida y roles.' },
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué rol en una revisión asegura el buen funcionamiento de la reunión de revisión?',
        opciones: [
          { letra: 'a', texto: 'El moderador', correcta: true,
            explicacion: 'Correcto. El moderador gestiona la reunión y garantiza que sea eficaz y ordenada, sin juzgar a las personas.' },
          { letra: 'b', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor presenta el producto de trabajo y aclara dudas; no modera.' },
          { letra: 'c', texto: 'El escriba', correcta: false,
            explicacion: 'No. El escriba registra anomalías y decisiones; no modera.' },
          { letra: 'd', texto: 'El gestor', correcta: false,
            explicacion: 'No. El gestor decide qué se revisa y aporta recursos; no dirige la reunión.' },
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K1',
        enunciado: '¿Cuál es el tipo de revisión MÁS formal?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La informal es la menos formal.' },
          { letra: 'b', texto: 'Inspección', correcta: true,
            explicacion: 'Correcto. La inspección es la revisión más formal: proceso completo, roles definidos (el autor no es revisor), métricas y datos de proceso.' },
          { letra: 'c', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. La técnica es formal y con moderador, pero menos que la inspección.' },
          { letra: 'd', texto: 'Walkthrough', correcta: false,
            explicacion: 'No. La guiada es de formalidad media, dirigida por el autor.' },
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un factor de ÉXITO de las revisiones?',
        opciones: [
          { letra: 'a', texto: 'Revisar todo el documento de una sola vez', correcta: false,
            explicacion: 'No. Revisar todo a la vez es ineficaz; conviene dividir en fragmentos.' },
          { letra: 'b', texto: 'No definir criterios de salida', correcta: false,
            explicacion: 'No. Definir criterios de salida claros es esencial en revisiones formales.' },
          { letra: 'c', texto: 'Revisar fragmentos pequeños y dar tiempo de preparación a los participantes', correcta: true,
            explicacion: 'Correcto. Fragmentos pequeños, tiempo de preparación, objetivos y criterios claros, formación y cultura de revisión favorecen el éxito.' },
          { letra: 'd', texto: 'Juzgar a los participantes por los defectos que encuentren', correcta: false,
            explicacion: 'No. La revisión debe centrarse en el producto, no en evaluar personas; culpar reduce su eficacia.' },
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿A qué categoría de técnicas pertenecen la partición de equivalencia (PE) y el análisis del valor frontera (AVF)?',
        opciones: [
          { letra: 'a', texto: 'Caja blanca', correcta: false,
            explicacion: 'No. La caja blanca usa la estructura interna del código.' },
          { letra: 'b', texto: 'Basadas en la experiencia', correcta: false,
            explicacion: 'No. Las basadas en experiencia (exploratoria, predicción de errores, listas) se apoyan en el conocimiento del tester.' },
          { letra: 'c', texto: 'Colaborativas', correcta: false,
            explicacion: 'No. Las colaborativas (ATDD, historias) se orientan a acordar el comportamiento deseado.' },
          { letra: 'd', texto: 'Caja negra', correcta: true,
            explicacion: 'Correcto. Ambas derivan sus valores de prueba de la especificación del sistema, independientemente de la implementación: son técnicas de caja negra.' },
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <10→9, 10-50→10 y 50, >50→51',
        enunciado: 'Un sistema acepta un código de descuento con valores de 10 a 50 inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        opciones: [
          { letra: 'a', texto: '9, 10, 50, 51', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida inferior (9), válida representada por sus límites (10 y 50) e inválida superior (51).' },
          { letra: 'b', texto: '9, 10, 51', correcta: false,
            explicacion: 'No. Omite el límite superior 50 de la partición válida; el conjunto mínimo con ambos límites es 9, 10, 50, 51.' },
          { letra: 'c', texto: '10, 50', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las inválidas.' },
          { letra: 'd', texto: '9, 10, 25, 50, 51', correcta: false,
            explicacion: 'No. El 25 es redundante en el conjunto mínimo.' },
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: 9,10 y 50,51',
        enunciado: 'Para el mismo rango de descuento (10-50), aplicando análisis del valor frontera de 2 valores, ¿cuáles son los valores a probar?',
        opciones: [
          { letra: 'a', texto: '9, 10, 51', correcta: false,
            explicacion: 'No. Para la frontera superior falta el límite 50.' },
          { letra: 'b', texto: '9, 10, 50, 51', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera. Frontera inferior: 9,10. Frontera superior: 50,51.' },
          { letra: 'c', texto: '10, 11, 49, 50', correcta: false,
            explicacion: 'No. Son valores interiores; le faltan los inmediatamente exteriores (9 y 51).' },
          { letra: 'd', texto: '9, 10, 11, 49, 50, 51', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores.' },
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        nota: 'AVF 3 valores: 9,10,11 y 49,50,51',
        enunciado: 'Para el rango 10-50, aplicando AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        opciones: [
          { letra: 'a', texto: '10, 11, 49, 50', correcta: false,
            explicacion: 'No. Le faltan los exteriores a los límites (9 y 51).' },
          { letra: 'b', texto: '9, 10, 51, 49, 50', correcta: false,
            explicacion: 'No. Para la frontera inferior le falta el 11 (límite+1).' },
          { letra: 'c', texto: '9, 10, 11, 49, 50, 51', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 por frontera: 9,10,11 y 49,50,51.' },
          { letra: 'd', texto: '9, 10, 50, 51', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores.' },
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '2 condiciones × 2 = 4 reglas',
        enunciado: 'Un club tiene dos condiciones: "Socio activo" (sí/no) y "Invitado" (sí/no). La entrada es libre si el asistente es socio o invitado. ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. 6 no resulta de combinar dos condiciones booleanas.' },
          { letra: 'b', texto: '8', correcta: false,
            explicacion: 'No. 8 correspondería a tres condiciones (2^3).' },
          { letra: 'c', texto: '2', correcta: false,
            explicacion: 'No. 2 es el número de condiciones, no de reglas.' },
          { letra: 'd', texto: '4', correcta: true,
            explicacion: 'Correcto. Cada condición booleana aporta 2 valores: reglas = 2 × 2 = 4 combinaciones.' },
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: 'Inicio→Jugando, Jugando→EnPausa, EnPausa→Jugando, Jugando→Fin, EnPausa→Fin = 5',
        enunciado: 'Una aplicación de juego tiene estados [Inicio], [Jugando], [EnPausa] y [Fin]. El jugador puede iniciar partida, pausar, reanudar y finalizar. ¿Cuántas transiciones válidas básicas existen como mínimo?',
        opciones: [
          { letra: 'a', texto: '5', correcta: true,
            explicacion: 'Correcto. Transiciones válidas: Inicio→Jugando, Jugando→EnPausa, EnPausa→Jugando, Jugando→Fin y EnPausa→Fin: 5 en total.' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. No hay una sexta transición básica válida adicional (Inicio no vuelve a Inicio ni Fin continúa).' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. Con 3 transiciones faltarían las de pausa/reanudación y las de finalización desde pausa.' },
          { letra: 'd', texto: '4', correcta: false,
            explicacion: 'No. El flujo con pausa y dos formas de finalizar da más de 4 transiciones.' },
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K3',
        enunciado: '¿Qué cobertura es MÁS fuerte y subsume a la otra?',
        opciones: [
          { letra: 'a', texto: 'La de sentencia subsume a la de rama', correcta: false,
            explicacion: 'No. Es al revés: rama subsumee a sentencia.' },
          { letra: 'b', texto: 'Cobertura de rama', correcta: true,
            explicacion: 'Correcto. La cobertura de rama exige probar todos los resultados de cada decisión y, al hacerlo, ejecuta todas las sentencias: subsume a la de sentencia.' },
          { letra: 'c', texto: 'Cobertura de sentencia', correcta: false,
            explicacion: 'No. La de sentencia es la más débil: no garantiza probar ambos resultados de una decisión.' },
          { letra: 'd', texto: 'Son equivalentes', correcta: false,
            explicacion: 'No. La de rama impone más condiciones que la de sentencia.' },
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K3',
        enunciado: 'Si se alcanza un 100% de cobertura de sentencia, ¿qué se puede afirmar de la cobertura de rama del programa?',
        opciones: [
          { letra: 'a', texto: 'Será del 0%', correcta: false,
            explicacion: 'No. Si se ejecutan sentencias, las ramas también se ejecutan parcialmente.' },
          { letra: 'b', texto: 'No se podrá ejecutar nada más', correcta: false,
            explicacion: 'No. Se pueden añadir pruebas para alcanzar las ramas restantes.' },
          { letra: 'c', texto: 'Puede ser inferior al 100%', correcta: true,
            explicacion: 'Correcto. Ejecutar todas las sentencias no garantiza probar ambos resultados de cada decisión; por tanto, la cobertura de rama puede quedar por debajo del 100%.' },
          { letra: 'd', texto: 'Será también del 100%', correcta: false,
            explicacion: 'No. Solo la implicación contraria se cumple (100% rama implica 100% sentencia), no esta.' },
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba basada en la experiencia se organiza en sesiones guiadas por un contrato (charter) con una misión y un límite de tiempo?',
        opciones: [
          { letra: 'a', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores se basa en anticipar defectos típicos, no en sesiones con charter.' },
          { letra: 'b', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. Sigue una checklist predefinida.' },
          { letra: 'c', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. Es una técnica de caja negra, no basada en la experiencia.' },
          { letra: 'd', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria usa sesiones con un charter que define la misión, el área de exploración y el tiempo; el tester aprende y prueba a la vez.' },
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica se apoya en el conocimiento del tester para anticipar defectos típicos en sistemas similares?',
        opciones: [
          { letra: 'a', texto: 'Predicción de errores', correcta: true,
            explicacion: 'Correcto. La predicción de errores (error guessing) usa la experiencia en sistemas parecidos para adivinar dónde suelen aparecer defectos y dirigir pruebas.' },
          { letra: 'b', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. El AVF deriva valores de las fronteras de las particiones, no de la experiencia.' },
          { letra: 'c', texto: 'Cobertura de rama', correcta: false,
            explicacion: 'No. La cobertura de rama es estructural (caja blanca).' },
          { letra: 'd', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión se construye a partir de la lógica de negocio.' },
        ]
      },
      {
        numero: 29, capitulo: 4, nivel: 'K2',
        enunciado: 'En el desarrollo guiado por prueba de aceptación (ATDD), ¿de dónde se obtienen los casos de prueba de aceptación?',
        opciones: [
          { letra: 'a', texto: 'De las herramientas de CI', correcta: false,
            explicacion: 'No. Las herramientas ejecutan, no originan, los casos de prueba.' },
          { letra: 'b', texto: 'De los criterios de aceptación de la historia de usuario', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de prueba se escriben ANTES de codificar, derivados de los criterios de aceptación acordados por el equipo.' },
          { letra: 'c', texto: 'Del código fuente', correcta: false,
            explicacion: 'No. El código no existe aún cuando se definen los casos en ATDD.' },
          { letra: 'd', texto: 'De la base de datos', correcta: false,
            explicacion: 'No. Los casos de aceptación describen comportamiento, no esquemas de base de datos.' },
        ]
      },
      {
        numero: 30, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué formato se emplea habitualmente para escribir historias de usuario?',
        opciones: [
          { letra: 'a', texto: 'Si/entonces/sino', correcta: false,
            explicacion: 'No. No es el formato estándar de historias de usuario.' },
          { letra: 'b', texto: 'Título + lista de criterios sin formato', correcta: false,
            explicacion: 'No. Aunque se use un título, el formato recomendado es el de tres partes: rol, función, beneficio.' },
          { letra: 'c', texto: 'Como [rol] quiero [función] para [beneficio]', correcta: true,
            explicacion: 'Correcto. La estructura clásica de historia de usuario es "Como [rol] quiero [funcionalidad] para [beneficio]".' },
          { letra: 'd', texto: 'Dado/cuando/entonces', correcta: false,
            explicacion: 'No. Ese formato es para criterios de aceptación.' },
        ]
      },
      {
        numero: 31, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué representa INVEST en el contexto de las historias de usuario?',
        opciones: [
          { letra: 'a', texto: 'La necesidad de invertir más presupuesto en pruebas', correcta: false,
            explicacion: 'No. INVEST no habla de presupuesto.' },
          { letra: 'b', texto: 'Un conjunto de herramientas de automatización', correcta: false,
            explicacion: 'No. No es una lista de herramientas.' },
          { letra: 'c', texto: 'Una técnica de estimación de esfuerzo', correcta: false,
            explicacion: 'No. La estimación usa póker de planificación o puntos de historia, no INVEST.' },
          { letra: 'd', texto: 'Un conjunto de criterios de calidad que debe cumplir una historia de usuario', correcta: true,
            explicacion: 'Correcto. INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable; son criterios de calidad de las historias de usuario.' },
        ]
      },
      {
        numero: 32, capitulo: 4, nivel: 'K2',
        enunciado: '¿En qué formato se expresan habitualmente los criterios de aceptación?',
        opciones: [
          { letra: 'a', texto: 'Dado/cuando/entonces (Given/When/Then)', correcta: true,
            explicacion: 'Correcto. Los criterios de aceptación se escriben en Given/When/Then: precondiciones, acción y resultado observable.' },
          { letra: 'b', texto: 'Como/quiero/para', correcta: false,
            explicacion: 'No. Ese es el formato de la historia de usuario, no de sus criterios de aceptación.' },
          { letra: 'c', texto: 'Si/entonces/sino', correcta: false,
            explicacion: 'No. Es una estructura de programación, no el estándar de criterios.' },
          { letra: 'd', texto: 'Start/stop/continue', correcta: false,
            explicacion: 'No. Eso es un formato de retrospectiva, no de criterios de aceptación.' },
        ]
      },
      {
        numero: 33, capitulo: 4, nivel: 'K3',
        nota: '3 condiciones × 2 = 8 reglas',
        enunciado: 'Un sistema de seguros calcula la prima según 3 condiciones booleanas: "edad > 65", "conductor novel" y "tiene siniestros previos". ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. El número de reglas es el producto de los valores (2^3 = 8).' },
          { letra: 'b', texto: '8', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 × 2 = 8 combinaciones únicas de las tres condiciones.' },
          { letra: 'c', texto: '12', correcta: false,
            explicacion: 'No. 12 no resulta de combinar tres condiciones booleanas.' },
          { letra: 'd', texto: '3', correcta: false,
            explicacion: 'No. 3 es el número de condiciones, no de reglas.' },
        ]
      },
      {
        numero: 34, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba basada en la experiencia recorre una lista predefinida de aspectos a comprobar?',
        opciones: [
          { letra: 'a', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. Se basa en anticipar defectos por experiencia, no en una checklist.' },
          { letra: 'b', texto: 'Caja blanca', correcta: false,
            explicacion: 'No. La caja blanca se apoya en la estructura del código.' },
          { letra: 'c', texto: 'Prueba basada en lista de comprobación (checklist)', correcta: true,
            explicacion: 'Correcto. La técnica basada en una lista de comprobación (conocida también como checklist) guía al probador por una serie de puntos o criterios ya fijados.' },
          { letra: 'd', texto: 'Prueba exploratoria', correcta: false,
            explicacion: 'No. La exploratoria es libre y guiada por un charter, no por una lista fija.' },
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un riesgo de PRODUCTO?',
        opciones: [
          { letra: 'a', texto: 'Falta de financiación para las pruebas', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto.' },
          { letra: 'b', texto: 'El equipo de prueba pierde a un miembro', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (recursos).' },
          { letra: 'c', texto: 'Los implicados tienen expectativas imprecisas', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto.' },
          { letra: 'd', texto: 'El sistema no cumple los requisitos de rendimiento', correcta: true,
            explicacion: 'Correcto. Incumplir un requisito de rendimiento amenaza la calidad del propio sistema: es un riesgo de producto.' },
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K3',
        nota: 'E = (4 + 4×9 + 20)/6 = (4+36+20)/6 = 60/6 = 10',
        enunciado: 'Se estima una tarea con O=4, M=9, P=20. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '10', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (4 + 36 + 20)/6 = 60/6 = 10.' },
          { letra: 'b', texto: '11', correcta: false,
            explicacion: 'No. 11 no surge de dividir 60 entre 6.' },
          { letra: 'c', texto: '8', correcta: false,
            explicacion: 'No. E = (4 + 4×9 + 20)/6 = 60/6 = 10, no 8.' },
          { letra: 'd', texto: '9', correcta: false,
            explicacion: 'No. El 9 es simplemente el valor "más probable"; la fórmula pondera O y P.' },
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K3',
        nota: 'SD = (20-4)/6 = 16/6 = 2,67',
        enunciado: 'Con los mismos datos (O=4, M=9, P=20), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '2,00', correcta: false,
            explicacion: 'No. SD = (P - O)/6 = 16/6 = 2,67.' },
          { letra: 'b', texto: '2,67', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (20 - 4)/6 = 16/6 = 2,67.' },
          { letra: 'c', texto: '3,33', correcta: false,
            explicacion: 'No. 3,33 surgiría de dividir 20 entre 6; la fórmula usa (P - O).' },
          { letra: 'd', texto: '4,00', correcta: false,
            explicacion: 'No. 4,00 no resulta de 16/6.' },
        ]
      },
      {
        numero: 38, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de prueba, ¿en qué cantidad deberían estar las pruebas de extremo a extremo (E2E)?',
        opciones: [
          { letra: 'a', texto: 'En la misma cantidad que las unitarias', correcta: false,
            explicacion: 'No. La pirámide indica muchas unitarias y pocas E2E.' },
          { letra: 'b', texto: 'Solo como pruebas de aceptación manuales', correcta: false,
            explicacion: 'No. Las E2E pueden automatizarse; no se limitan a la aceptación manual.' },
          { letra: 'c', texto: 'En cantidad mínima, en la cúspide', correcta: true,
            explicacion: 'Correcto. En la pirámide, la cúspide tiene pocas pruebas E2E (lentas y costosas); la base la forman muchas pruebas unitarias.' },
          { letra: 'd', texto: 'En la base, en gran cantidad', correcta: false,
            explicacion: 'No. La base son las pruebas de componente/unitarias.' },
        ]
      },
      {
        numero: 39, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué debe incluir el informe de compleción de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Solo los casos de prueba que pasaron', correcta: false,
            explicacion: 'No. Debe informar también de los fallidos y del estado global.' },
          { letra: 'b', texto: 'Únicamente el presupuesto invertido', correcta: false,
            explicacion: 'No. El presupuesto no es el contenido central de este informe.' },
          { letra: 'c', texto: 'El código fuente del sistema', correcta: false,
            explicacion: 'No. El código no forma parte del informe de compleción.' },
          { letra: 'd', texto: 'Resumen de las pruebas realizadas y de los defectos no resueltos', correcta: true,
            explicacion: 'Correcto. El informe de compleción resume las pruebas realizadas, métricas, defectos no resueltos, riesgos no mitigados y lecciones aprendidas.' },
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        nota: 'b y c (Jenkins y GitLab CI son CI/CD; Jira y TestRail son de gestión; Selenium es de ejecución web)',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de las siguientes son herramientas de integración continua y entrega continua (CI/CD)?',
        opciones: [
          { letra: 'a', texto: 'TestRail', correcta: false,
            explicacion: 'No. TestRail es de gestión de pruebas, no CI/CD.' },
          { letra: 'b', texto: 'Jenkins', correcta: true,
            explicacion: 'Correcto. Jenkins es un servidor de integración continua/entrega continua típico de DevOps.' },
          { letra: 'c', texto: 'GitLab CI', correcta: true,
            explicacion: 'Correcto. GitLab CI es una plataforma de integración continua/entrega continua integrada en GitLab.' },
          { letra: 'd', texto: 'Jira', correcta: false,
            explicacion: 'No. Jira es una herramienta de gestión de proyectos/defectos, no CI/CD.' },
          { letra: 'e', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium automatiza pruebas de interfaz web; no es una herramienta de CI/CD.' },
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
