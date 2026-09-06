/* examen-10.js — Datos del EXAMEN DE PRÁCTICA 10 (ISTQB CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-10',
    titulo: 'EXAMEN DE PRÁCTICA 10',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un objetivo de la prueba de software?',
        opciones: [
          { letra: 'a', texto: 'Prevenir defectos mediante actividades de prueba tempranas', correcta: true,
            explicacion: 'Correcto. Prevenir defectos, mediante reviews de especificación, análisis y actividades tempranas, es uno de los objetivos de la prueba.' },
          { letra: 'b', texto: 'Garantizar la ausencia total de defectos en el software', correcta: false,
            explicacion: 'No. La prueba muestra la presencia, no la ausencia de defectos; es imposible demostrar ausencia total.' },
          { letra: 'c', texto: 'Reemplazar al equipo de desarrollo', correcta: false,
            explicacion: 'No. La prueba complementa al desarrollo, no lo sustituye.' },
          { letra: 'd', texto: 'Probar todas las combinaciones posibles de entradas', correcta: false,
            explicacion: 'No. Las pruebas exhaustivas son imposibles; se prioriza por riesgo.' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: 'Un tester ejecuta un caso de prueba y el sistema entrega un resultado distinto al parámetro esperado. Según ISTQB, ¿qué representa ese resultado distinto?',
        opciones: [
          { letra: 'a', texto: 'Un defecto', correcta: false,
            explicacion: 'No. El resultado distinto es la manifestación observable (fallo); el defecto está en el código.' },
          { letra: 'b', texto: 'Un fallo', correcta: true,
            explicacion: 'Correcto. El fallo es el comportamiento erróneo observable del sistema durante la ejecución; el defecto es la causa en el código.' },
          { letra: 'c', texto: 'Un error', correcta: false,
            explicacion: 'No. El error es la acción humana; el resultado incorrecto es el fallo.' },
          { letra: 'd', texto: 'Una causa raíz', correcta: false,
            explicacion: 'No. La causa raíz es el origen último del defecto, no la manifestación observable.' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué principio de prueba establece que la estrategia de prueba debe adaptarse al tipo de sistema y al contexto?',
        opciones: [
          { letra: 'a', texto: 'La prueba depende del contexto', correcta: true,
            explicacion: 'Correcto. Este principio indica que la estrategia y técnicas de prueba se adaptan al contexto: no se prueba igual una app web crítica que un sistema bancario o un juego.' },
          { letra: 'b', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación describe la concentración de defectos en pocas áreas.' },
          { letra: 'c', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. La paradoja del pesticida habla de pruebas repetidas que pierden eficacia.' },
          { letra: 'd', texto: 'Pruebas tempranas', correcta: false,
            explicacion: 'No. Las pruebas tempranas recomiendan probar pronto para abaratar correcciones.' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K1',
        enunciado: 'El proceso de prueba según ISTQB incluye, entre otras, la actividad de:',
        opciones: [
          { letra: 'a', texto: 'Compleción de la prueba', correcta: true,
            explicacion: 'Correcto. La compleción es una de las actividades del proceso: cierre y reporte, garantizando que todo quedó documentado.' },
          { letra: 'b', texto: 'Definición de la arquitectura del software', correcta: false,
            explicacion: 'No. La arquitectura es del desarrollo, no del proceso de prueba.' },
          { letra: 'c', texto: 'Codificación del módulo', correcta: false,
            explicacion: 'No. Codificar es del desarrollo.' },
          { letra: 'd', texto: 'Diseño de la interfaz de usuario', correcta: false,
            explicacion: 'No. El diseño de UI es del desarrollo.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: 'Una organización con un equipo de prueba independiente muy separado del desarrollo observa que los defectos se comunican tarde y los tiempos de entrega aumentan. ¿Qué desventaja de la independencia está manifestándose?',
        opciones: [
          { letra: 'a', texto: 'Menor objetividad', correcta: false,
            explicacion: 'No. La mayor independencia aporta objetividad, no la reduce.' },
          { letra: 'b', texto: 'Reducción del sesgo', correcta: false,
            explicacion: 'No. Eso es una ventaja, no una desventaja.' },
          { letra: 'c', texto: 'Menor colaboración y comunicación con el desarrollo', correcta: true,
            explicacion: 'Correcto. Aumentar la independencia puede reducir la colaboración, comunicación y la cercanía con el equipo de desarrollo, ralentizando la resolución de defectos.' },
          { letra: 'd', texto: 'Eliminación de pruebas manuales', correcta: false,
            explicacion: 'No. La independencia no elimina las pruebas manuales.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué proporciona la trazabilidad entre los productos de prueba y la base de prueba?',
        opciones: [
          { letra: 'a', texto: 'La garantía de que no existen defectos', correcta: false,
            explicacion: 'No. La trazabilidad no garantiza ausencia de defectos.' },
          { letra: 'b', texto: 'La capacidad de evaluar el impacto de los cambios y la cobertura alcanzada', correcta: true,
            explicacion: 'Correcto. La trazabilidad conecta base de prueba, condiciones, casos y resultados, permitiendo evaluar el impacto de cambios y medir la cobertura.' },
          { letra: 'c', texto: 'El control del presupuesto del proyecto', correcta: false,
            explicacion: 'No. El presupuesto se controla en la gestión de proyecto.' },
          { letra: 'd', texto: 'La automatización automática de las pruebas', correcta: false,
            explicacion: 'No. La trazabilidad es un vínculo entre artefactos, no automatiza pruebas.' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: 'En un análisis de código se encuentra que una variable se usa sin haber sido inicializada. Este hallazgo se detectó mediante:',
        opciones: [
          { letra: 'a', texto: 'Prueba de carga', correcta: false,
            explicacion: 'No. La carga es una prueba dinámica no funcional.' },
          { letra: 'b', texto: 'Análisis estático', correcta: true,
            explicacion: 'Correcto. El uso de una variable sin inicializar se detecta mediante análisis estático (sin ejecutar el código).' },
          { letra: 'c', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación es una prueba dinámica del usuario.' },
          { letra: 'd', texto: 'Prueba de usabilidad', correcta: false,
            explicacion: 'No. La usabilidad es una prueba no funcional dinámica.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba se centra en verificar componentes individuales de forma aislada?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: true,
            explicacion: 'Correcto. La prueba de componente (unitaria) verifica componentes o módulos individuales de forma aislada, usando stubs y drivers si es necesario.' },
          { letra: 'b', texto: 'Prueba de integración de componentes', correcta: false,
            explicacion: 'No. La integración de componentes prueba las interfaces entre componentes ya integrados.' },
          { letra: 'c', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La de sistema prueba el sistema completo.' },
          { letra: 'd', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K1',
        enunciado: 'En el modelo V de desarrollo, ¿qué prueba se planifica en paralelo con la definición de requisitos del usuario?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La prueba de componente se planifica con el diseño detallado.' },
          { letra: 'b', texto: 'Prueba de integración de componentes', correcta: false,
            explicacion: 'No. Se planifica con el diseño del componente.' },
          { letra: 'c', texto: 'Prueba de aceptación', correcta: true,
            explicacion: 'Correcto. La prueba de aceptación se planifica con los requisitos del usuario, verificando que el sistema satisface esas necesidades.' },
          { letra: 'd', texto: 'Prueba de integración de sistemas', correcta: false,
            explicacion: 'No. Se planifica con el diseño del sistema.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una desventaja o riesgo de DevOps?',
        opciones: [
          { letra: 'a', texto: 'Retroalimentación rápida de calidad', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de DevOps.' },
          { letra: 'b', texto: 'Las tuberías CI/CD y la automatización requieren mantenimiento constante', correcta: true,
            explicacion: 'Correcto. Mantener las herramientas, los scripts y las tuberías de CI/CD exige esfuerzo y conocimientos; es un riesgo real de DevOps.' },
          { letra: 'c', texto: 'Mayor visibilidad de características no funcionales', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja.' },
          { letra: 'd', texto: 'Automatización de pruebas repetitivas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué es la prueba de humo (smoke test)?',
        opciones: [
          { letra: 'a', texto: 'Una prueba exhaustiva de todas las funciones', correcta: false,
            explicacion: 'No. La prueba de humo es limitada y rápida, no exhaustiva.' },
          { letra: 'b', texto: 'Un conjunto limitado de pruebas de las funciones principales para decidir si continuar probando', correcta: true,
            explicacion: 'Correcto. La prueba de humo verifica rápidamente las funciones clave para determinar si el build es estable y merece continuar con pruebas más detalladas.' },
          { letra: 'c', texto: 'Una prueba de rendimiento bajo carga', correcta: false,
            explicacion: 'No. La carga es una prueba no funcional de rendimiento.' },
          { letra: 'd', texto: 'Una prueba de seguridad del sistema', correcta: false,
            explicacion: 'No. La seguridad es una prueba no funcional específica.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba verifica el comportamiento del sistema completo, incluyendo la colaboración con sistemas externos?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La de componente prueba módulos aislados.' },
          { letra: 'b', texto: 'Prueba de integración de sistemas', correcta: false,
            explicacion: 'No. La integración de sistemas se centra en las interfaces con sistemas externos, no en el comportamiento global.' },
          { letra: 'c', texto: 'Prueba de sistema', correcta: true,
            explicacion: 'Correcto. La prueba de sistema verifica el comportamiento funcional y no funcional del sistema completo como un todo integrado.' },
          { letra: 'd', texto: 'Prueba de aceptación alfa', correcta: false,
            explicacion: 'No. La aceptación valida la preparación para el despliegue, no el comportamiento del sistema completo.' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un ejemplo de prueba no funcional?',
        opciones: [
          { letra: 'a', texto: 'Verificar que al hacer clic en "Guardar" se guarda el registro', correcta: false,
            explicacion: 'No. Esa es una prueba funcional.' },
          { letra: 'b', texto: 'Medir el tiempo de respuesta del sistema con 10.000 usuarios concurrentes', correcta: true,
            explicacion: 'Correcto. Medir el rendimiento bajo carga es una prueba no funcional.' },
          { letra: 'c', texto: 'Comprobar que la lógica de descuentos funciona correctamente', correcta: false,
            explicacion: 'No. Es una prueba funcional de reglas de negocio.' },
          { letra: 'd', texto: 'Validar que una historia de usuario cumple los criterios de aceptación', correcta: false,
            explicacion: 'No. Esa es una prueba de aceptación de comportamiento funcional.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál es un beneficio de la prueba estática sobre la dinámica?',
        opciones: [
          { letra: 'a', texto: 'Puede detectar defectos en los requisitos antes de que se codifiquen', correcta: true,
            explicacion: 'Correcto. La prueba estática (revisiones, análisis) examina requisitos y diseño antes de la codificación, evitando defectos tempranos y caros.' },
          { letra: 'b', texto: 'Ejecuta el sistema y mide su rendimiento', correcta: false,
            explicacion: 'No. La estática no ejecuta; el rendimiento es dinámico.' },
          { letra: 'c', texto: 'Sustituye por completo a la prueba dinámica', correcta: false,
            explicacion: 'No. Son complementarias; cada una encuentra defectos que la otra no.' },
          { letra: 'd', texto: 'Solo puede aplicarse al código compilado', correcta: false,
            explicacion: 'No. Se aplica a cualquier producto de trabajo.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes actividades pertenece al proceso de revisión según ISO/IEC 20246?',
        opciones: [
          { letra: 'a', texto: 'Planificación', correcta: true,
            explicacion: 'Correcto. Las actividades son: planificación, inicio, revisión individual, comunicación y análisis, y corrección y cierre.' },
          { letra: 'b', texto: 'Codificación', correcta: false,
            explicacion: 'No. Codificar es desarrollo.' },
          { letra: 'c', texto: 'Ejecución de pruebas', correcta: false,
            explicacion: 'No. La ejecución es dinámica, no parte de la revisión estática.' },
          { letra: 'd', texto: 'Despliegue en producción', correcta: false,
            explicacion: 'No. El despliegue es de liberación.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un tipo de revisión formado por varios tipos y que se caracteriza por su formalidad?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La informal es la de menor formalidad.' },
          { letra: 'b', texto: 'Revisión guiada (walkthrough)', correcta: false,
            explicacion: 'No. El walkthrough es de formalidad media.' },
          { letra: 'c', texto: 'Inspección', correcta: true,
            explicacion: 'Correcto. La inspección es el tipo de revisión más formal según ISO/IEC 20246, con roles, métricas y reunión de decisión.' },
          { letra: 'd', texto: 'Revisión de código por pares', correcta: false,
            explicacion: 'No. La revisión por pares es un caso de revisión informal o ligera.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: 'En una revisión, ¿qué rol decide sobre la ejecución de la revisión y asigna los recursos?',
        opciones: [
          { letra: 'a', texto: 'El gestor', correcta: true,
            explicacion: 'Correcto. El gestor decide qué se revisa, aporta los recursos, define quién participa y decide si se aplican las acciones correctoras.' },
          { letra: 'b', texto: 'El moderador', correcta: false,
            explicacion: 'No. El moderador dirige la reunión, no asigna recursos.' },
          { letra: 'c', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor corrige defectos y aclara dudas.' },
          { letra: 'd', texto: 'El escribano', correcta: false,
            explicacion: 'No. El escribano registra hallazgos, no asigna recursos.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál es el propósito del análisis estático en el contexto de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Ejecutar el código para medir su cobertura', correcta: false,
            explicacion: 'No. La cobertura se mide con herramientas de ejecución dinámica.' },
          { letra: 'b', texto: 'Examinar el código y otros artefactos sin ejecutarlos para detectar defectos', correcta: true,
            explicacion: 'Correcto. El análisis estático examina el código y otros productos sin ejecutarlos, detectando defectos de mantenibilidad, estándares y lógica.' },
          { letra: 'c', texto: 'Simular usuarios concurrentes', correcta: false,
            explicacion: 'No. Eso es prueba de carga dinámica.' },
          { letra: 'd', texto: 'Probar la interfaz de usuario', correcta: false,
            explicacion: 'No. La UI requiere interacción dinámica.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿A qué categoría de técnicas pertenece la cobertura de rama?',
        opciones: [
          { letra: 'a', texto: 'Caja negra', correcta: false,
            explicacion: 'No. La caja negra se basa en la especificación.' },
          { letra: 'b', texto: 'Basada en la experiencia', correcta: false,
            explicacion: 'No. Se apoya en la estructura interna del código.' },
          { letra: 'c', texto: 'Caja blanca', correcta: true,
            explicacion: 'Correcto. La cobertura de rama es una técnica de caja blanca que se basa en la estructura interna del código (los resultados de las decisiones).' },
          { letra: 'd', texto: 'Colaborativa', correcta: false,
            explicacion: 'No. Las colaborativas (ATDD) acuerdan comportamiento, no miden estructura.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <-50→-51, -50 a 50→-50 y 50, >50→51',
        enunciado: 'Un sistema de sensores acepta lecturas de -50 a 50 inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        opciones: [
          { letra: 'a', texto: '-50, 0, 50', correcta: false,
            explicacion: 'No. El 0 es redundante si la partición válida se representa con sus límites.' },
          { letra: 'b', texto: '-51, -50, 0, 50, 51', correcta: false,
            explicacion: 'No. El 0 es de más en el conjunto mínimo.' },
          { letra: 'c', texto: '-50, 50', correcta: false,
            explicacion: 'No. Cubre la válida pero omite las inválidas.' },
          { letra: 'd', texto: '-51, -50, 50, 51', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida inferior (-51), válida con sus límites (-50 y 50) e inválida superior (51).' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: -51,-50 y 50,51',
        enunciado: 'Para el rango de sensores (-50 a 50), aplicando AVF de 2 valores, ¿cuáles son los valores a probar?',
        opciones: [
          { letra: 'a', texto: '-51, -50, 50, 51', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera: (-51,-50) y (50,51).' },
          { letra: 'b', texto: '-50, -49, 49, 50', correcta: false,
            explicacion: 'No. Son valores interiores; faltan los exteriores (-51 y 51).' },
          { letra: 'c', texto: '-51, -50, -49, 49, 50, 51', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores.' },
          { letra: 'd', texto: '-50, 50, 51', correcta: false,
            explicacion: 'No. Falta el -51, el vecino exterior de la frontera inferior.' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        nota: 'AVF 3 valores: -51,-50,-49 y 49,50,51',
        enunciado: 'Para el rango -50 a 50, aplicando AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        opciones: [
          { letra: 'a', texto: '-51, -50, 50, 51', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores; le faltan -49 y 49.' },
          { letra: 'b', texto: '-50, -49, 49, 50', correcta: false,
            explicacion: 'No. Le faltan los exteriores (-51 y 51).' },
          { letra: 'c', texto: '-52, -51, -50, 50, 51, 52', correcta: false,
            explicacion: 'No. Los extremos -52 y 52 están fuera del rango inmediato de las fronteras.' },
          { letra: 'd', texto: '-51, -50, -49, 49, 50, 51', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 por frontera: (-51,-50,-49) y (49,50,51).' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '3 condiciones × 2 = 8 reglas',
        enunciado: 'Un sistema de suscripciones tiene 3 condiciones: "Tiene tarjeta" (sí/no), "Cobertura premium" (sí/no) y "Región soportada" (sí/no). ¿Cuántas reglas produce la tabla de decisión 100% cubierta?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. El número de reglas es el producto de los valores (2^3 = 8).' },
          { letra: 'b', texto: '8', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 × 2 = 8 combinaciones únicas de las tres condiciones.' },
          { letra: 'c', texto: '12', correcta: false,
            explicacion: 'No. 12 no resulta de combinar tres condiciones booleanas.' },
          { letra: 'd', texto: '3', correcta: false,
            explicacion: 'No. 3 es el número de condiciones, no de reglas.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: 'Abierto→EnProceso, EnProceso→Resuelto, EnProceso→Abierto, Resuelto→Cerrado = 4',
        enunciado: 'Un sistema de incidencias tiene estados [Abierto], [EnProceso], [Resuelto] y [Cerrado]. Un ticket se abre, se asigna a un técnico y se resuelve. El técnico puede reabrir si el problema persiste. ¿Cuántas transiciones válidas básicas existen como mínimo?',
        opciones: [
          { letra: 'a', texto: '5', correcta: false,
            explicacion: 'No. Según el flujo descrito, hay 4 transiciones: no hay reapertura desde Cerrado.' },
          { letra: 'b', texto: '4', correcta: true,
            explicacion: 'Correcto. Transiciones: Abierto→EnProceso, EnProceso→Resuelto, EnProceso→Abierto (reabrir si persiste) y Resuelto→Cerrado: 4.' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. Con 3 transiciones faltaría la de reapertura o alguna otra.' },
          { letra: 'd', texto: '6', correcta: false,
            explicacion: 'No. Un ticket cerrado no se reabre (según el enunciado), por lo que no hay sexta transición.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué cobertura es MÁS fuerte (subsume a la otra)?',
        opciones: [
          { letra: 'a', texto: 'Cobertura de rama', correcta: true,
            explicacion: 'Correcto. La cobertura de rama exige probar ambos resultados de cada decisión y, al hacerlo, ejecuta todas las sentencias: subsume a la cobertura de sentencia.' },
          { letra: 'b', texto: 'Cobertura de sentencia', correcta: false,
            explicacion: 'No. La de sentencia es la más débil: no garantiza probar ambas ramas de cada decisión.' },
          { letra: 'c', texto: 'Ambas son equivalentes', correcta: false,
            explicacion: 'No. La de rama impone más condiciones.' },
          { letra: 'd', texto: 'Depende del tamaño del programa', correcta: false,
            explicacion: 'No. La relación de subsumption es un concepto técnico independiente del tamaño.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba basada en la experiencia se caracteriza por usar un "charter" que define la misión y el límite de tiempo de una sesión?',
        opciones: [
          { letra: 'a', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria organiza sesiones con un charter que define la misión, el área y el tiempo; el tester decide cómo explorar dentro de esa guía.' },
          { letra: 'b', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión es una técnica de caja negra.' },
          { letra: 'c', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores no usa charters.' },
          { letra: 'd', texto: 'Cobertura de rama', correcta: false,
            explicacion: 'No. Es una técnica de caja blanca.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: 'En ATDD, ¿qué relación existe entre los criterios de aceptación y los casos de prueba?',
        opciones: [
          { letra: 'a', texto: 'Los casos de prueba se derivan de los criterios de aceptación', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de prueba de aceptación se derivan directamente de los criterios de aceptación de la historia de usuario, antes de implementar.' },
          { letra: 'b', texto: 'Los criterios de aceptación se derivan de los casos de prueba', correcta: false,
            explicacion: 'No. Es al revés: los casos de prueba provienen de los criterios.' },
          { letra: 'c', texto: 'No hay relación entre ambos', correcta: false,
            explicacion: 'No. Los casos de prueba son la materialización verificable de los criterios.' },
          { letra: 'd', texto: 'Solo los desarrolladores crean los criterios', correcta: false,
            explicacion: 'No. En ATDD los criterios se acuerdan colaborativamente entre negocio, desarrollo y prueba.' }
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué evalúa la cobertura de sentencia en un conjunto de pruebas?',
        opciones: [
          { letra: 'a', texto: 'El porcentaje de sentencias ejecutables del código que se ejecutaron al menos una vez', correcta: true,
            explicacion: 'Correcto. La cobertura de sentencia mide cuántas sentencias ejecutables se recorrieron al menos una vez durante las pruebas.' },
          { letra: 'b', texto: 'El porcentaje de ramas de decisión probadas', correcta: false,
            explicacion: 'No. Eso es la cobertura de rama.' },
          { letra: 'c', texto: 'El número total de defectos encontrados', correcta: false,
            explicacion: 'No. La cobertura no mide defectos; mide ejecución de código.' },
          { letra: 'd', texto: 'El porcentaje de requisitos cumplidos', correcta: false,
            explicacion: 'No. Eso es cobertura de requisitos, no de sentencia.' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un riesgo de proyecto?',
        opciones: [
          { letra: 'a', texto: 'La aplicación no es lo bastante fiable', correcta: false,
            explicacion: 'No. Es un riesgo de producto (fiabilidad).' },
          { letra: 'b', texto: 'El cronograma del proyecto se retrasa por falta de recursos', correcta: true,
            explicacion: 'Correcto. Los retrasos y la falta de recursos son riesgos de proyecto: afectan a la planificación y ejecución.' },
          { letra: 'c', texto: 'El sistema no cumple los requisitos de rendimiento', correcta: false,
            explicacion: 'No. Es un riesgo de producto.' },
          { letra: 'd', texto: 'Los usuarios tienen problemas de accesibilidad', correcta: false,
            explicacion: 'No. Es un riesgo de producto.' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de avance de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Número de defectos pendientes', correcta: false,
            explicacion: 'No. Es una métrica de defectos.' },
          { letra: 'b', texto: 'Cobertura de rama alcanzada', correcta: true,
            explicacion: 'Correcto. La cobertura alcanzada y el porcentaje de casos ejecutados son métricas de avance de las actividades de prueba.' },
          { letra: 'c', texto: 'Disponibilidad del sistema', correcta: false,
            explicacion: 'No. Es una métrica de calidad de producto.' },
          { letra: 'd', texto: 'Tiempo medio de resolución de defectos', correcta: false,
            explicacion: 'No. Es una métrica de eficiencia de la gestión de defectos, no de avance de la prueba.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        nota: 'E = (2 + 4×7 + 12)/6 = (2+28+12)/6 = 42/6 = 7',
        enunciado: 'Se estima una tarea con O=2, M=7 y P=12. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. 6 no resulta de dividir 42 entre 6.' },
          { letra: 'b', texto: '7', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (2 + 28 + 12)/6 = 42/6 = 7.' },
          { letra: 'c', texto: '8', correcta: false,
            explicacion: 'No. 8 no es el resultado de la fórmula.' },
          { letra: 'd', texto: '9', correcta: false,
            explicacion: 'No. 9 no surge de la fórmula de tres puntos.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K3',
        nota: 'SD = (12-2)/6 = 10/6 = 1,67',
        enunciado: 'Con los mismos datos (O=2, M=7, P=12), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '1', correcta: false,
            explicacion: 'No. 1 no resulta de dividir 10 entre 6.' },
          { letra: 'b', texto: '2', correcta: false,
            explicacion: 'No. 2 no resulta de dividir 10 entre 6.' },
          { letra: 'c', texto: '1,67', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (12 - 2)/6 = 10/6 = 1,67.' },
          { letra: 'd', texto: '3,33', correcta: false,
            explicacion: 'No. 3,33 surgiría de dividir P entre 3, no es la fórmula correcta.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de prueba, ¿qué tipo de pruebas se ubican en la cúspide y en MENOR cantidad?',
        opciones: [
          { letra: 'a', texto: 'Pruebas E2E', correcta: true,
            explicacion: 'Correcto. En la cúspide de la pirámide están las pruebas de extremo a extremo (E2E), en menor cantidad por ser lentas y costosas.' },
          { letra: 'b', texto: 'Pruebas unitarias', correcta: false,
            explicacion: 'No. Las unitarias están en la base, en mayor cantidad.' },
          { letra: 'c', texto: 'Pruebas estáticas', correcta: false,
            explicacion: 'No. La pirámide describe niveles de prueba dinámica, no estática.' },
          { letra: 'd', texto: 'Pruebas de API', correcta: false,
            explicacion: 'No. Las de API están en una capa intermedia, no en la cúspide.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué documento detalla los pasos, datos y resultados esperados para probar una condición específica?',
        opciones: [
          { letra: 'a', texto: 'Plan de prueba', correcta: false,
            explicacion: 'No. El plan es el documento de planificación global.' },
          { letra: 'b', texto: 'Caso de prueba', correcta: true,
            explicacion: 'Correcto. Un caso de prueba especifica los pasos, los datos de entrada, las condiciones y los resultados esperados para verificar una condición concreta.' },
          { letra: 'c', texto: 'Informe de compleción', correcta: false,
            explicacion: 'No. Ese informe resume el cierre de las pruebas.' },
          { letra: 'd', texto: 'Informe de defecto', correcta: false,
            explicacion: 'No. El informe de defecto describe un fallo, no los pasos de prueba.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué significa "mitigar" un riesgo de prueba?',
        opciones: [
          { letra: 'a', texto: 'Ignorarlo hasta que ocurra', correcta: false,
            explicacion: 'No. Ignorar un riesgo no es una respuesta válida.' },
          { letra: 'b', texto: 'Implementar acciones que reduzcan la probabilidad o el impacto del riesgo', correcta: true,
            explicacion: 'Correcto. Mitigar implica tomar medidas (pruebas adicionales, más personal, mejor entorno) para reducir la probabilidad o el impacto del riesgo.' },
          { letra: 'c', texto: 'Transferirlo a un tercero', correcta: false,
            explicacion: 'No. Transferir es otra respuesta al riesgo, distinta de mitigar.' },
          { letra: 'd', texto: 'Eliminar todas las consecuencias del riesgo', correcta: false,
            explicacion: 'No. Mitigar no elimina por completo; reduce la probabilidad o el impacto.' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un ejemplo de criterio de SALIDA de una prueba?',
        opciones: [
          { letra: 'a', texto: 'Que la base de prueba esté disponible', correcta: false,
            explicacion: 'No. Eso es un criterio de entrada.' },
          { letra: 'b', texto: 'Que se alcance el nivel de cobertura definido', correcta: true,
            explicacion: 'Correcto. Alcanzar el nivel de cobertura, ejecutar los casos planificados y que los defectos críticos estén resueltos son criterios de salida.' },
          { letra: 'c', texto: 'Que haya un entorno de prueba disponible', correcta: false,
            explicacion: 'No. Eso es un criterio de entrada.' },
          { letra: 'd', texto: 'Que se disponga de los datos de prueba', correcta: false,
            explicacion: 'No. Es un criterio de entrada.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K1',
        enunciado: '¿Qué técnica de estimación de tres puntos se usa para estimar el esfuerzo de una tarea de prueba?',
        opciones: [
          { letra: 'a', texto: 'Calcular E = (O + 4M + P) / 6', correcta: true,
            explicacion: 'Correcto. El método de tres puntos calcula E = (Optimista + 4×Más probable + Pesimista) / 6, dando una estimación ponderada.' },
          { letra: 'b', texto: 'Calcular E = (O + M + P) / 3', correcta: false,
            explicacion: 'No. Eso es la media simple; el método de tres puntos pondera el valor más probable con factor 4.' },
          { letra: 'c', texto: 'Usar solo el valor más probable', correcta: false,
            explicacion: 'No. El método pondera los tres valores, no solo el más probable.' },
          { letra: 'd', texto: 'Usar solo el valor optimista', correcta: false,
            explicacion: 'No. Ignorar lo pesimista y lo más probable da una estimación irreal.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es Selenium?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de gestión de pruebas', correcta: false,
            explicacion: 'No. Selenium no gestiona casos ni defectos.' },
          { letra: 'b', texto: 'Herramienta de automatización de pruebas de interfaz web', correcta: true,
            explicacion: 'Correcto. Selenium es un framework ampliamente usado para automatizar pruebas sobre la interfaz web (UI).' },
          { letra: 'c', texto: 'Herramienta de análisis estático', correcta: false,
            explicacion: 'No. Selenium ejecuta pruebas, no analiza código estáticamente.' },
          { letra: 'd', texto: 'Herramienta de pruebas de rendimiento', correcta: false,
            explicacion: 'No. El rendimiento se mide con herramientas como JMeter o Gatling.' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un beneficio de usar herramientas de gestión de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Automatizan automáticamente la ejecución de todas las pruebas', correcta: false,
            explicacion: 'No. La gestión de pruebas administra casos y resultados, no ejecuta pruebas automáticamente.' },
          { letra: 'b', texto: 'Facilitan la trazabilidad y el seguimiento de casos, ejecuciones y defectos', correcta: true,
            explicacion: 'Correcto. Las herramientas de gestión centralizan planes, casos, ejecuciones y defectos, facilitando trazabilidad, informes y colaboración.' },
          { letra: 'c', texto: 'Eliminan la necesidad de probadores', correcta: false,
            explicacion: 'No. Son herramientas de apoyo; los probadores siguen siendo necesarios.' },
          { letra: 'd', texto: 'Garantizan que no hay defectos', correcta: false,
            explicacion: 'No. Ninguna herramienta garantiza ausencia de defectos.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de las siguientes son herramientas de gestión de pruebas?',
        opciones: [
          { letra: 'a', texto: 'TestRail', correcta: true,
            explicacion: 'Correcto. TestRail es una herramienta especializada en la gestión de casos de prueba, planes y ejecuciones.' },
          { letra: 'b', texto: 'SonarQube', correcta: false,
            explicacion: 'No. SonarQube es una herramienta de análisis estático de código.' },
          { letra: 'c', texto: 'GitLab CI', correcta: false,
            explicacion: 'No. GitLab CI es una plataforma de CI/CD, no de gestión de pruebas.' },
          { letra: 'd', texto: 'Zephyr', correcta: true,
            explicacion: 'Correcto. Zephyr es un complemento de gestión de pruebas integrado con Jira, para planificar y rastrear pruebas.' },
          { letra: 'e', texto: 'JMeter', correcta: false,
            explicacion: 'No. JMeter es una herramienta de pruebas de rendimiento.' }
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
