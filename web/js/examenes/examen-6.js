/* examen-6.js — Datos del EXAMEN DE PRÁCTICA 6 (CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-6',
    titulo: 'EXAMEN DE PRÁCTICA 6',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de las siguientes es una razón correcta para probar el software?',
        opciones: [
          { letra: 'a', texto: 'Probar todas las combinaciones posibles siempre', correcta: false,
            explicacion: 'No. La prueba exhaustiva es imposible en la práctica; se prioriza por riesgo.' },
          { letra: 'b', texto: 'Sustituir el aseguramiento de la calidad', correcta: false,
            explicacion: 'No. La prueba complementa al QA centrado en procesos; no lo reemplaza.' },
          { letra: 'c', texto: 'Encontrar fallos antes de la entrega', correcta: true,
            explicacion: 'Correcto. La prueba busca detectar defectos y fallos lo antes posible para reducir el coste y el riesgo.' },
          { letra: 'd', texto: 'Eliminar la necesidad de escribir código', correcta: false,
            explicacion: 'No. La prueba no sustituye al desarrollo del código.' },
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K1',
        enunciado: '¿Qué actividad pertenece a la depuración y no a la prueba de software?',
        opciones: [
          { letra: 'a', texto: 'Diseñar casos de prueba', correcta: false,
            explicacion: 'No. Diseñar casos es una actividad del proceso de prueba.' },
          { letra: 'b', texto: 'Ejecutar los casos de prueba', correcta: false,
            explicacion: 'No. La ejecución es una actividad propia de la prueba.' },
          { letra: 'c', texto: 'Reportar los fallos observados', correcta: false,
            explicacion: 'No. Registrar y comunicar los fallos es tarea de la prueba.' },
          { letra: 'd', texto: 'Localizar y corregir la causa raíz de un defecto', correcta: true,
            explicacion: 'Correcto. La depuración encuentra, analiza y corrige la causa del defecto; la prueba lo detecta y reporta.' },
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K1',
        enunciado: '¿Qué principio de prueba afirma que probar en etapas tempranas reduce el coste de corrección?',
        opciones: [
          { letra: 'a', texto: 'Pruebas tempranas (early testing)', correcta: true,
            explicacion: 'Correcto. Cuanto antes se empiece a probar, antes se detectan defectos y más barato es corregirlos.' },
          { letra: 'b', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. Describe la concentración de defectos en pocas áreas.' },
          { letra: 'c', texto: 'Falacia de ausencia de errores', correcta: false,
            explicacion: 'No. Advierte de que un sistema sin errores conocidos puede seguir siendo inadecuado.' },
          { letra: 'd', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. Se refiere a que las pruebas repetidas dejan de encontrar defectos nuevos.' },
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: 'El sistema cumple todos los requisitos funcionales y no tiene defectos conocidos, pero el usuario final lo rechaza por inutilizable. ¿Qué principio de prueba describe esta situación?',
        opciones: [
          { letra: 'a', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. Esa paradoja habla de pruebas repetidas que pierden eficacia.' },
          { letra: 'b', texto: 'Falacia de ausencia de errores', correcta: true,
            explicacion: 'Correcto. Encontrar y corregir defectos no sirve si el sistema no satisface las necesidades del usuario: sin errores no implica sistema utilizable.' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación trata de la concentración de defectos, no de la utilidad del sistema.' },
          { letra: 'd', texto: 'Pruebas exhaustivas imposibles', correcta: false,
            explicacion: 'No. Aquí el problema no es la cantidad de pruebas, sino la adecuación al usuario.' },
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué función cumplen los resultados de la prueba respecto a la gestión del riesgo?',
        opciones: [
          { letra: 'a', texto: 'Eliminar la necesidad de supervisión del proyecto', correcta: false,
            explicacion: 'No. La prueba no sustituye a la gestión del proyecto.' },
          { letra: 'b', texto: 'Ser irrelevante para las decisiones de liberación', correcta: false,
            explicacion: 'No. Los resultados de la prueba son clave para decidir si liberar.' },
          { letra: 'c', texto: 'Permitir decisiones informadas sobre el riesgo residual', correcta: true,
            explicacion: 'Correcto. La información de las pruebas ayuda a evaluar el riesgo residual y a decidir si el producto está listo.' },
          { letra: 'd', texto: 'Garantizar la ausencia total de riesgos', correcta: false,
            explicacion: 'No. El riesgo residual siempre existe; la prueba solo lo reduce o lo hace visible.' },
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes refleja correctamente la relación entre aseguramiento de la calidad (QA) y prueba?',
        opciones: [
          { letra: 'a', texto: 'Son exactamente lo mismo', correcta: false,
            explicacion: 'No. Son complementarias pero distintas en foco y actividades.' },
          { letra: 'b', texto: 'La prueba mejora los procesos; QA evalúa los productos', correcta: false,
            explicacion: 'No. Está invertido: la prueba evalúa el producto y QA orienta los procesos.' },
          { letra: 'c', texto: 'Nunca se relacionan entre sí', correcta: false,
            explicacion: 'No. La prueba es una fuente de información valiosa para las decisiones de QA.' },
          { letra: 'd', texto: 'QA mejora los procesos para prevenir defectos; la prueba evalúa el producto', correcta: true,
            explicacion: 'Correcto. QA es proactiva sobre los procesos de desarrollo y entrega; la prueba, producto o sistema, evalúa mediante su ejecución y análisis.' },
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué nivel de independencia suele aportar MÁS objetividad a la prueba?',
        opciones: [
          { letra: 'a', texto: 'Un tester independiente externo a la organización', correcta: true,
            explicacion: 'Correcto. La máxima independencia (probadores externos) reduce el sesgo y aporta la mayor objetividad, aunque puede comprometer la colaboración.' },
          { letra: 'b', texto: 'El propio desarrollador que escribió el código', correcta: false,
            explicacion: 'No. Es el nivel de menor independencia y el más expuesto al sesgo.' },
          { letra: 'c', texto: 'Un desarrollador del mismo equipo', correcta: false,
            explicacion: 'No. Aporta cierta independencia, pero menos que un tester externo.' },
          { letra: 'd', texto: 'Ninguna: la independencia no influye en la objetividad', correcta: false,
            explicacion: 'No. La independencia influye directamente en el sesgo de la evaluación.' },
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué actividad del proceso de prueba produce las condiciones de prueba y los casos de prueba de alto nivel?',
        opciones: [
          { letra: 'a', texto: 'Planificación de la prueba', correcta: false,
            explicacion: 'No. La planificación define alcance, recursos y calendario, no las condiciones de prueba.' },
          { letra: 'b', texto: 'Análisis y diseño de la prueba', correcta: true,
            explicacion: 'Correcto. En el análisis y diseño se estudia la base de prueba, se definen condiciones de prueba y se diseñan casos y procedimientos.' },
          { letra: 'c', texto: 'Ejecución de la prueba', correcta: false,
            explicacion: 'No. La ejecución pone en marcha los casos ya diseñados y registra resultados.' },
          { letra: 'd', texto: 'Compleción de la prueba', correcta: false,
            explicacion: 'No. La compleción cierra el proceso y resume lo realizado.' },
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K2',
        enunciado: '¿En qué nivel de prueba se verifica que los componentes, ya probados por separado, funcionan correctamente al combinarse dentro del sistema?',
        opciones: [
          { letra: 'a', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario y el negocio.' },
          { letra: 'b', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La de componente prueba cada módulo de forma aislada, antes de la integración.' },
          { letra: 'c', texto: 'Prueba de integración de componentes', correcta: true,
            explicacion: 'Correcto. La integración de componentes comprueba las interacciones e interfaces entre componentes unidos.' },
          { letra: 'd', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La de sistema prueba el sistema completo como un todo.' },
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba evalúa la aplicación completa, verificando atributos como rendimiento, fiabilidad y seguridad del sistema como un todo?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La de componente se limita a un módulo aislado.' },
          { letra: 'b', texto: 'Prueba de integración de componentes', correcta: false,
            explicacion: 'No. Se centra en las interfaces entre módulos, no en el todo.' },
          { letra: 'c', texto: 'Prueba de humo', correcta: false,
            explicacion: 'No. La prueba de humo es un chequeo rápido de funciones principales, no una evaluación completa.' },
          { letra: 'd', texto: 'Prueba de sistema', correcta: true,
            explicacion: 'Correcto. La prueba de sistema contrasta el sistema completo con los requisitos funcionales y no funcionales acordados.' },
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué es una prueba de humo (smoke test)?',
        opciones: [
          { letra: 'a', texto: 'Un conjunto limitado de pruebas sobre las funciones principales para decidir si se continúa probando', correcta: true,
            explicacion: 'Correcto. La prueba de humo verifica rápidamente que el build o nueva versión es lo bastante estable como para seguir con la prueba detallada.' },
          { letra: 'b', texto: 'Una prueba que simula miles de usuarios concurrentes', correcta: false,
            explicacion: 'No. Eso describe una prueba de carga o estrés.' },
          { letra: 'c', texto: 'Una revisión del código fuente por pares', correcta: false,
            explicacion: 'No. Es una actividad estática, no una prueba de humo.' },
          { letra: 'd', texto: 'La prueba de aceptación final del usuario', correcta: false,
            explicacion: 'No. La prueba de humo se realiza al inicio, antes de una validación formal.' },
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuándo resulta más barato corregir un defecto, en general?',
        opciones: [
          { letra: 'a', texto: 'Solo se reduce si la prueba es automatizada', correcta: false,
            explicacion: 'No. La automatización ayuda, pero el principio de detección temprana aplica siempre.' },
          { letra: 'b', texto: 'Cuanto antes se detecte en el ciclo de vida', correcta: true,
            explicacion: 'Correcto. El coste de corrección crece cuanto más tarde se detecta: pasa de ser mínimo en requisitos a máximo en producción.' },
          { letra: 'c', texto: 'Cuanto más tarde se detecte', correcta: false,
            explicacion: 'No. Retrasar la detección encarece la corrección (reclamos, entornos, re-trabajo).' },
          { letra: 'd', texto: 'El coste es idéntico en cualquier fase', correcta: false,
            explicacion: 'No. El coste varía notablemente según la fase.' },
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K1',
        enunciado: '¿Qué tipo de prueba no funcional evalúa la facilidad con la que los usuarios aprenden y utilizan el sistema?',
        opciones: [
          { letra: 'a', texto: 'Prueba de rendimiento', correcta: false,
            explicacion: 'No. El rendimiento mide tiempos de respuesta y recursos.' },
          { letra: 'b', texto: 'Prueba de capacidad de recuperación', correcta: false,
            explicacion: 'No. Se ocupa de la reanudación del servicio ante interrupciones o desastres.' },
          { letra: 'c', texto: 'Prueba de usabilidad', correcta: true,
            explicacion: 'Correcto. La usabilidad mide qué tan fácil resulta entender, aprender y operar el sistema.' },
          { letra: 'd', texto: 'Prueba de seguridad', correcta: false,
            explicacion: 'No. La seguridad evalúa la protección ante accesos o ataques no deseados.' },
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K1',
        enunciado: '¿Qué analiza una prueba estática?',
        opciones: [
          { letra: 'a', texto: 'El comportamiento del código en ejecución', correcta: false,
            explicacion: 'No. Eso es prueba dinámica.' },
          { letra: 'b', texto: 'Únicamente el código fuente', correcta: false,
            explicacion: 'No. También se aplica a requisitos, documentación, especificaciones de diseño, etc.' },
          { letra: 'c', texto: 'El desempeño del sistema en producción', correcta: false,
            explicacion: 'No. Medir producción requiere ejecutar el sistema.' },
          { letra: 'd', texto: 'Los productos de trabajo (requisitos, diseño, código) sin ejecutarlos', correcta: true,
            explicacion: 'Correcto. La prueba estática analiza y revisa productos de trabajo sin ejecutar el software.' },
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: 'En una revisión formal, ¿quién convoca y dirige la reunión, asegurando que el debate se mantenga ordenado y en el tema?',
        opciones: [
          { letra: 'a', texto: 'El moderador', correcta: true,
            explicacion: 'Correcto. El moderador planifica y dirige la reunión de la revisión, gestiona la participación y garantiza el cumplimiento del proceso.' },
          { letra: 'b', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor escribe el producto de trabajo y corrige los defectos; no modera.' },
          { letra: 'c', texto: 'El escribano', correcta: false,
            explicacion: 'No. El escribano registra los hallazgos y acciones, no modera.' },
          { letra: 'd', texto: 'El gestor del proyecto', correcta: false,
            explicacion: 'No. El gestor decide sobre la ejecución de la revisión, pero no la modera.' },
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál es la diferencia clave entre una inspección y una revisión técnica?',
        opciones: [
          { letra: 'a', texto: 'Son idénticas en formalidad', correcta: false,
            explicacion: 'No. La inspección supera en formalidad y rigor documental a la revisión técnica.' },
          { letra: 'b', texto: 'La inspección es más formal, con roles, listas de verificación, métricas y un proceso riguroso', correcta: true,
            explicacion: 'Correcto. La inspección es la revisión más formal; la técnica es formal en menor grado, centrada en el contenido técnico.' },
          { letra: 'c', texto: 'La revisión técnica no utiliza expertos', correcta: false,
            explicacion: 'No. La revisión técnica reúne precisamente a expertos, aunque con menos formalismo que la inspección.' },
          { letra: 'd', texto: 'La inspección siempre detecta defectos de rendimiento', correcta: false,
            explicacion: 'No. La inspección es estática y no ejecuta; no mide rendimiento.' },
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál es un beneficio del testing estático?',
        opciones: [
          { letra: 'a', texto: 'Medir los tiempos de respuesta de la aplicación', correcta: false,
            explicacion: 'No. Requiere ejecución.' },
          { letra: 'b', texto: 'Generar casos de prueba automáticamente desde la ejecución', correcta: false,
            explicacion: 'No. El testing estático no ejecuta código ni genera casos por sí mismo.' },
          { letra: 'c', texto: 'Detectar defectos en los requisitos antes de empezar a codificar', correcta: true,
            explicacion: 'Correcto. Revisar los requisitos evita propagar defectos de especificación al diseño y al código.' },
          { letra: 'd', texto: 'Ejecutar pruebas de carga contra el servicio web', correcta: false,
            explicacion: 'No. La carga es una prueba dinámica.' },
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué defecto se descubre típicamente mediante una prueba estática y NO en una prueba dinámica?',
        opciones: [
          { letra: 'a', texto: 'Un error de lógica que se manifiesta solo al ejecutar', correcta: false,
            explicacion: 'No. Ese tipo de defecto se observa típicamente durante la ejecución de la prueba.' },
          { letra: 'b', texto: 'Una respuesta lenta bajo mucha carga', correcta: false,
            explicacion: 'No. El rendimiento requiere prueba dinámica de carga.' },
          { letra: 'c', texto: 'Una fuga de memoria tras muchas peticiones', correcta: false,
            explicacion: 'No. La fuga de memoria solo se evidencia tras ejecutar el sistema.' },
          { letra: 'd', texto: 'La omisión de un requisito de negocio en la especificación', correcta: true,
            explicacion: 'Correcto. La omisión de un requisito se detecta revisando la especificación antes de codificar; una prueba dinámica difícilmente la descubriría.' },
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿A qué categoría de técnicas de caja negra pertenece la transición de estados?',
        opciones: [
          { letra: 'a', texto: 'Técnicas basadas en la especificación', correcta: true,
            explicacion: 'Correcto. La transición de estados deriva sus casos del modelo de estados definido en la especificación: es una técnica de caja negra.' },
          { letra: 'b', texto: 'Técnicas estructurales (caja blanca)', correcta: false,
            explicacion: 'No. La caja blanca usa la estructura interna del código.' },
          { letra: 'c', texto: 'Técnicas basadas en la experiencia', correcta: false,
            explicacion: 'No. La experiencia (exploratoria, error guessing) no requiere modelo de estados.' },
          { letra: 'd', texto: 'Técnicas de colaboración', correcta: false,
            explicacion: 'No. Las colaborativas (historias, ATDD) acuerdan el comportamiento, pero no modelan transiciones.' },
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <100→99, 100-500→100 y 500, >500→501',
        enunciado: 'Un programa de fidelidad otorga puntos de 100 a 500 inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        opciones: [
          { letra: 'a', texto: '100, 101, 499, 500', correcta: false,
            explicacion: 'No. Faltan la inválida inferior (99) y la inválida superior (501).' },
          { letra: 'b', texto: '99, 100, 500, 501', correcta: true,
            explicacion: 'Correcto. Un valor por partición: inválida inferior (99), válida con sus límites (100 y 500) e inválida superior (501).' },
          { letra: 'c', texto: '100, 500', correcta: false,
            explicacion: 'No. Sólo cubre la partición válida y omite las particiones inválidas.' },
          { letra: 'd', texto: '99, 100, 101, 499, 500, 501', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores; para partición de equivalencia basta un representante por clase.' },
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: 99,100 y 500,501',
        enunciado: 'Para el mismo rango (100-500) aplicando análisis del valor frontera de 2 valores, ¿qué valores se deben probar?',
        opciones: [
          { letra: 'a', texto: '99, 100, 101, 499, 500, 501', correcta: false,
            explicacion: 'No. Eso corresponde al AVF de 3 valores.' },
          { letra: 'b', texto: '99, 100, 500', correcta: false,
            explicacion: 'No. Falta el 501, el vecino exterior de la frontera superior.' },
          { letra: 'c', texto: '99, 100, 500, 501', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera: (99, 100) y (500, 501).' },
          { letra: 'd', texto: '100, 101, 499, 500', correcta: false,
            explicacion: 'No. Son los valores interiores; faltan los inmediatamente exteriores 99 y 501.' },
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        nota: 'AVF 3 valores: 99,100,101 y 499,500,501',
        enunciado: 'Para el rango 100-500 y aplicando análisis del valor frontera de 3 valores, ¿cuál es el conjunto de valores?',
        opciones: [
          { letra: 'a', texto: '99, 101, 499, 501', correcta: false,
            explicacion: 'No. Omite los límites 100 y 500, que son esenciales en la frontera.' },
          { letra: 'b', texto: '99, 100, 500, 501', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores.' },
          { letra: 'c', texto: '100, 499', correcta: false,
            explicacion: 'No. Solo dos valores sin los vecinos de los límites.' },
          { letra: 'd', texto: '99, 100, 101, 499, 500, 501', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 por frontera: (99,100,101) y (499,500,501).' },
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '2 × 2 = 4 reglas',
        enunciado: 'El acceso VIP de un hotel depende de dos condiciones booleanas: "tiene reserva" y "es huésped VIP". ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '4', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 = 4 combinaciones de las dos condiciones booleanas.' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. 6 no resulta del producto de dos condiciones booleanas.' },
          { letra: 'c', texto: '8', correcta: false,
            explicacion: 'No. 8 correspondería a tres condiciones (2^3).' },
          { letra: 'd', texto: '2', correcta: false,
            explicacion: 'No. 2 es el número de condiciones, no de reglas.' },
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: 'Activa→Pausada, Pausada→Activa, Activa→Cancelada, Pausada→Cancelada = 4',
        enunciado: 'Una cuenta de streaming puede estar [Activa], [Pausada] o [Cancelada]. Las acciones posibles son pausar, reanudar y cancelar (desde los estados activos). ¿Cuántas transiciones válidas hay?',
        opciones: [
          { letra: 'a', texto: '3', correcta: false,
            explicacion: 'No. Tres transiciones dejarían fuera un estado o una acción.' },
          { letra: 'b', texto: '4', correcta: true,
            explicacion: 'Correcto. Transiciones válidas: Activa→Pausada, Pausada→Activa, Activa→Cancelada y Pausada→Cancelada: 4.' },
          { letra: 'c', texto: '5', correcta: false,
            explicacion: 'No. No hay una quinta transición: una cuenta cancelada no se puede reactivar ni pausar.' },
          { letra: 'd', texto: '6', correcta: false,
            explicacion: 'No. Eso asumiría conexiones entre los tres estados en ambos sentidos, incluidas las de una cuenta cancelada.' },
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué se necesita para alcanzar el 100 % de cobertura de sentencia en un conjunto de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Probar todos los valores de las particiones', correcta: false,
            explicacion: 'No. Se refiere a datos de entrada, no a la estructura del código.' },
          { letra: 'b', texto: 'Ejecutar únicamente las ramas de error', correcta: false,
            explicacion: 'No. Deben ejecutarse también las sentencias de las ramas normales.' },
          { letra: 'c', texto: 'Ejecutar cada sentencia ejecutable del código al menos una vez', correcta: true,
            explicacion: 'Correcto. La cobertura de sentencia se alcanza cuando cada línea ejecutable se recorre al menos en una ejecución.' },
          { letra: 'd', texto: 'Probar todos los caminos posibles del programa', correcta: false,
            explicacion: 'No. Eso es más exigente que la cobertura de sentencia.' },
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: 'Si un conjunto de pruebas alcanza el 100 % de cobertura de rama, ¿qué afirmación es correcta?',
        opciones: [
          { letra: 'a', texto: 'Es posible que ninguna sentencia se haya ejecutado', correcta: false,
            explicacion: 'No. Ambas ramas de una decisión contienen sentencias; deben haberse ejecutado.' },
          { letra: 'b', texto: 'Se habrá probado exactamente la mitad de las sentencias', correcta: false,
            explicacion: 'No. No existe una proporción fija entre ambas métricas.' },
          { letra: 'c', texto: 'Equivale a no haber probado el código', correcta: false,
            explicacion: 'No. 100 % de rama es una cobertura estructural exigente.' },
          { letra: 'd', texto: 'También se habrán ejecutado todas las sentencias', correcta: true,
            explicacion: 'Correcto. Recorrer el resultado verdadero y falso de cada decisión ejecuta toda sentencia: la cobertura de rama subsume a la de sentencia.' },
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica se caracteriza por diseñar y ejecutar las pruebas de forma simultánea, sin casos predefinidos redactados de antemano?',
        opciones: [
          { letra: 'a', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria diseña y ejecuta al mismo tiempo: los casos surgen a medida que se explora el sistema, guiados por un charter.' },
          { letra: 'b', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. La lista define de antemano qué comprobar.' },
          { letra: 'c', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. Proviene de la especificación, no de la exploración.' },
          { letra: 'd', texto: 'Cobertura de sentencia', correcta: false,
            explicacion: 'No. Es una medida estructural, no una técnica exploratoria.' },
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: 'El conocimiento de defectos típicos de las aplicaciones web (campos vacíos, entradas malformadas, inyección) se usa para dirigir casos a esas zonas. ¿Qué técnica de prueba es?',
        opciones: [
          { letra: 'a', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. Se centra en límites de particiones, no en defectos típicos aprendidos.' },
          { letra: 'b', texto: 'Predicción de errores', correcta: true,
            explicacion: 'Correcto. La predicción de errores aprovecha la experiencia sobre defectos típicos para enfocar las pruebas en las áreas de mayor probabilidad.' },
          { letra: 'c', texto: 'Cobertura de rama', correcta: false,
            explicacion: 'No. Es estructural y deriva del código.' },
          { letra: 'd', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. Se basa en la lógica de negocio especificada.' },
        ]
      },
      {
        numero: 29, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué defectos ayuda a encontrar especialmente la prueba basada en listas de comprobación construidas con experiencia previa?',
        opciones: [
          { letra: 'a', texto: 'Degradación del rendimiento bajo carga', correcta: false,
            explicacion: 'No. La carga es una prueba no funcional dinámica.' },
          { letra: 'b', texto: 'Problemas de cifrado en las comunicaciones', correcta: false,
            explicacion: 'No. Susceptible a pruebas técnicas específicas, no a una checklist general.' },
          { letra: 'c', texto: 'Omisiones e inconsistencias respecto a la especificación', correcta: true,
            explicacion: 'Correcto. Las listas de comprobación ayudan a detectar omisiones y fallos de consistencia cubriendo áreas repetidamente probadas.' },
          { letra: 'd', texto: 'Fugas de memoria en tareas prolongadas', correcta: false,
            explicacion: 'No. Eso requiere pruebas dinámicas de larga ejecución.' },
        ]
      },
      {
        numero: 30, capitulo: 4, nivel: 'K2',
        enunciado: 'En ATDD, ¿qué práctica permite automatizar la verificación de los criterios de aceptación?',
        opciones: [
          { letra: 'a', texto: 'Medir la cobertura de rama al final del proyecto', correcta: false,
            explicacion: 'No. La cobertura de rama se mide sobre el código, no valida aceptación.' },
          { letra: 'b', texto: 'Realizar la prueba de carga manual de la historia', correcta: false,
            explicacion: 'No. La aceptación no se prueba con carga manual.' },
          { letra: 'c', texto: 'Analizar estáticamente el código sin ejecutarlo', correcta: false,
            explicacion: 'No. La verificación de criterios de aceptación requiere ejecutar.' },
          { letra: 'd', texto: 'Escribir las pruebas con la técnica de caja negra y del comportamiento esperado antes de implementar cada historia', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de aceptación se definen y, a menudo, se automatizan antes de codificar para guiar la implementación.' },
        ]
      },
      {
        numero: 31, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué información detalla una historia de usuario de buena calidad?',
        opciones: [
          { letra: 'a', texto: 'Quién (rol), qué (función) y para qué (beneficio)', correcta: true,
            explicacion: 'Correcto. La historia responde a quién la necesita, qué necesita y qué beneficio obtiene: "Como [rol] quiero [función] para [beneficio]".' },
          { letra: 'b', texto: 'Cada línea de código a implementar', correcta: false,
            explicacion: 'No. La historia describe el valor de negocio, no la implementación.' },
          { letra: 'c', texto: 'El esquema físico de la base de datos', correcta: false,
            explicacion: 'No. Es un detalle de diseño técnico, no propio de la historia.' },
          { letra: 'd', texto: 'La estrategia de despliegue en producción', correcta: false,
            explicacion: 'No. La historia describe funcionalidad, no infraestructura de despliegue.' },
        ]
      },
      {
        numero: 32, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué significa la letra "T" del acrónimo INVEST?',
        opciones: [
          { letra: 'a', texto: 'Transaccional', correcta: false,
            explicacion: 'No. No es uno de los criterios INVEST.' },
          { letra: 'b', texto: 'Testable (probable)', correcta: true,
            explicacion: 'Correcto. INVEST: Independent, Negotiable, Valuable, Estimable, Small y Testable; la T es Testable (que se puede probar).' },
          { letra: 'c', texto: 'Terrible', correcta: false,
            explicacion: 'No. No forma parte del acrónimo.' },
          { letra: 'd', texto: 'Temporal', correcta: false,
            explicacion: 'No. INVEST no habla de duración.' },
        ]
      },
      {
        numero: 33, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué se entiende por criterios de aceptación en una historia de usuario?',
        opciones: [
          { letra: 'a', texto: 'Los nombres de las herramientas de integración continua', correcta: false,
            explicacion: 'No. La herramienta no define la aceptación de la funcionalidad.' },
          { letra: 'b', texto: 'El número de horas estimadas para desarrollarla', correcta: false,
            explicacion: 'No. El esfuerzo estimado no verifica el comportamiento.' },
          { letra: 'c', texto: 'Las condiciones que deben cumplirse para que la historia se considere completa y correcta', correcta: true,
            explicacion: 'Correcto. Los criterios de aceptación definen las condiciones verificables que marcan cuándo la historia satisface lo pedido.' },
          { letra: 'd', texto: 'El presupuesto asignado a la historia', correcta: false,
            explicacion: 'No. El coste no es un criterio de aceptación funcional.' },
        ]
      },
      {
        numero: 34, capitulo: 4, nivel: 'K2',
        enunciado: 'En el ciclo de vida del defecto, ¿quién suele verificar la corrección y cerrar la incidencia una vez arreglada?',
        opciones: [
          { letra: 'a', texto: 'El responsable de ventas siempre', correcta: false,
            explicacion: 'No. La verificación técnica corresponde al equipo de prueba.' },
          { letra: 'b', texto: 'El autor de la documentación técnica', correcta: false,
            explicacion: 'No. Documentar no conlleva cerrar defectos.' },
          { letra: 'c', texto: 'Cualquier usuario final sin ejecutar pruebas', correcta: false,
            explicacion: 'No. Para cerrarlo hay que verificar la corrección ejecutando la prueba.' },
          { letra: 'd', texto: 'La persona que reportó el defecto, re-ejecutando la prueba en la nueva versión', correcta: true,
            explicacion: 'Correcto. El tester que lo reportó verifica la corrección en la versión que la contiene y, si procede, cierra la incidencia.' },
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una amenaza al PRODUCTO (riesgo de producto)?',
        opciones: [
          { letra: 'a', texto: 'La aplicación no tolera los picos de carga previstos', correcta: true,
            explicacion: 'Correcto. La incapacidad de soportar la carga esperada amenaza la calidad del propio sistema: es un riesgo de producto.' },
          { letra: 'b', texto: 'El cronograma del proyecto se retrasa', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto.' },
          { letra: 'c', texto: 'Falta presupuesto para las herramientas', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (recursos).' },
          { letra: 'd', texto: 'El equipo carece de experiencia en la tecnología', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto.' },
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K3',
        nota: 'E = (2 + 4×5 + 14)/6 = (2+20+14)/6 = 36/6 = 6',
        enunciado: 'Se estima una tarea con O=2, M=5 y P=14. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '5', correcta: false,
            explicacion: 'No. El 5 es el valor "más probable"; la fórmula pondera también lo optimista y lo pesimista.' },
          { letra: 'b', texto: '6', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (2 + 20 + 14)/6 = 36/6 = 6.' },
          { letra: 'c', texto: '7', correcta: false,
            explicacion: 'No. 7 no resulta de dividir 36 entre 6.' },
          { letra: 'd', texto: '8', correcta: false,
            explicacion: 'No. Eso correspondería a otra combinación de pesos.' },
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K3',
        nota: 'SD = (14-2)/6 = 12/6 = 2',
        enunciado: 'Con los mismos datos (O=2, M=5, P=14), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '4', correcta: false,
            explicacion: 'No. 4 no resulta de 12/6.' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. 6 es la estimación esperada E, no la desviación.' },
          { letra: 'c', texto: '2', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (14 - 2)/6 = 12/6 = 2.' },
          { letra: 'd', texto: '3', correcta: false,
            explicacion: 'No. Equivale a dividir 18 entre 6; la fórmula usa (P - O).' },
        ]
      },
      {
        numero: 38, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de pruebas, ¿qué relación de cantidad y velocidad guardan las pruebas unitarias respecto a las pruebas E2E?',
        opciones: [
          { letra: 'a', texto: 'Las E2E son más numerosas', correcta: false,
            explicacion: 'No. Es al contrario: las E2E son las menos numerosas.' },
          { letra: 'b', texto: 'Hay la misma cantidad', correcta: false,
            explicacion: 'No. La pirámide indica proporciones muy distintas.' },
          { letra: 'c', texto: 'Las unitarias son más lentas', correcta: false,
            explicacion: 'No. Las unitarias son las más rápidas de la base.' },
          { letra: 'd', texto: 'Son mucho más numerosas y rápidas de ejecutar', correcta: true,
            explicacion: 'Correcto. En la base de la pirámide hay muchas pruebas unitarias, baratas y rápidas; en la cúspide, pocas E2E lentas.' },
        ]
      },
      {
        numero: 39, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué informe se genera durante la ejecución para comunicar el progreso real frente al plan?',
        opciones: [
          { letra: 'a', texto: 'El informe de progreso de la prueba', correcta: true,
            explicacion: 'Correcto. El informe de progreso se elabora periódicamente y compara lo ejecutado con lo planificado, apoyado en métricas.' },
          { letra: 'b', texto: 'La estimación de tres puntos', correcta: false,
            explicacion: 'No. Es una técnica de estimación previa, no un informe de progreso.' },
          { letra: 'c', texto: 'El informe de compleción', correcta: false,
            explicacion: 'No. Ese informe se elabora al término del proceso, no durante.' },
          { letra: 'd', texto: 'El charter de la sesión exploratoria', correcta: false,
            explicacion: 'No. El charter planifica la misión de una sesión, no reporta el progreso del plan.' },
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        nota: 'd y e (Selenium y Cypress automatizan UI; Jenkins, TestRail y GitLab CI no)',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de las siguientes son herramientas de AUTOMATIZACIÓN de pruebas de interfaz de usuario (UI)?',
        opciones: [
          { letra: 'a', texto: 'Jenkins', correcta: false,
            explicacion: 'No. Jenkins es un servidor de integración continua; orquesta la ejecución pero no automatiza la UI.' },
          { letra: 'b', texto: 'TestRail', correcta: false,
            explicacion: 'No. TestRail es una herramienta de gestión de casos y resultados, no de automatización de UI.' },
          { letra: 'c', texto: 'GitLab CI', correcta: false,
            explicacion: 'No. GitLab CI es una plataforma de integración continua/entrega; no automatiza la interfaz de usuario.' },
          { letra: 'd', texto: 'Selenium', correcta: true,
            explicacion: 'Correcto. Selenium es un framework ampliamente usado para automatizar las pruebas de interfaz web.' },
          { letra: 'e', texto: 'Cypress', correcta: true,
            explicacion: 'Correcto. Cypress es una herramienta moderna de automatización de pruebas de interfaz (UI) web.' },
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
