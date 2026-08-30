/* examen-2.js — Datos del EXAMEN DE PRÁCTICA 2 (ISTQB CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-2',
    titulo: 'EXAMEN DE PRÁCTICA 2',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes NO es un objetivo de la prueba de software?',
        opciones: [
          { letra: 'a', texto: 'Prevenir defectos', correcta: false,
            explicacion: 'Sí es un objetivo (no es la respuesta). Prevenir defectos, mediante el análisis de la base de prueba y las actividades tempranas, es uno de los objetivos de la prueba.' },
          { letra: 'b', texto: 'Generar confianza en el nivel de calidad', correcta: false,
            explicacion: 'Sí es un objetivo (no es la respuesta). La prueba aporta información para generar confianza en el nivel de calidad del objeto de prueba.' },
          { letra: 'c', texto: 'Garantizar que el software no tenga defectos', correcta: true,
            explicacion: 'Correcto. Garantizar la ausencia total de defectos NO es un objetivo (de hecho es imposible): la prueba muestra la presencia, no la ausencia de defectos.' },
          { letra: 'd', texto: 'Evaluar productos de trabajo', correcta: false,
            explicacion: 'Sí es un objetivo (no es la respuesta). Evaluar productos de trabajo (requisitos, casos de uso, diseño, código) es uno de los objetivos de la prueba.' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es la relación entre aseguramiento de la calidad (QA) y prueba?',
        opciones: [
          { letra: 'a', texto: 'Son exactamente lo mismo', correcta: false,
            explicacion: 'No. QA y prueba son actividades distintas, aunque complementarias.' },
          { letra: 'b', texto: 'QA se centra en los procesos; la prueba se centra en detectar defectos en el producto', correcta: true,
            explicacion: 'Correcto. La gestión de calidad (QA) apunta a los procesos para prevenir defectos; la prueba se centra en el producto, detectando defectos y evaluándolo. La prueba es una medida importante del nivel de calidad.' },
          { letra: 'c', texto: 'La prueba se centra en procesos; QA se centra en productos', correcta: false,
            explicacion: 'No. Está invertido: QA se ocupa de los procesos; la prueba, del producto.' },
          { letra: 'd', texto: 'No están relacionados', correcta: false,
            explicacion: 'No. Están relacionados: la prueba contribuye a alcanzar la calidad del proceso y del producto, y sus resultados alimentan las decisiones de calidad.' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: 'Complete la secuencia: ______ → ______ → ______',
        opciones: [
          { letra: 'a', texto: 'Fallo → Error → Defecto', correcta: false,
            explicacion: 'No. La secuencia comienza con la acción humana (error), no con el fallo observable.' },
          { letra: 'b', texto: 'Error → Defecto → Fallo', correcta: true,
            explicacion: 'Correcto. Una persona comete un error que introduce un defecto en el código; al ejecutarlo en las condiciones adecuadas se produce un fallo observable.' },
          { letra: 'c', texto: 'Defecto → Error → Fallo', correcta: false,
            explicacion: 'No. El defecto no "causa" un error; es el error humano el que crea el defecto.' },
          { letra: 'd', texto: 'Fallo → Defecto → Error', correcta: false,
            explicacion: 'No. El fallo es la manifestación final del defecto, no el punto de partida.' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué principio de prueba advierte que repetir las mismas pruebas una y otra vez termina siendo ineficaz para encontrar nuevos defectos?',
        opciones: [
          { letra: 'a', texto: 'Pruebas exhaustivas son imposibles', correcta: false,
            explicacion: 'No. Ese principio se refiere a que no se puede probar todo y hay que priorizar por riesgo.' },
          { letra: 'b', texto: 'Paradoja del pesticida', correcta: true,
            explicacion: 'Correcto. La paradoja del pesticida: repetir las mismas pruebas "envenena" la eficacia de búsqueda; con el tiempo dejan de encontrar defectos nuevos y hay que revisarlas/ampliarlas.' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación de defectos afirma que los defectos se concentran en unas pocas áreas.' },
          { letra: 'd', texto: 'Falacia de ausencia de errores', correcta: false,
            explicacion: 'No. Esa falacia indica que no sirve de nada encontrar y corregir defectos si el sistema no satisface las necesidades del usuario.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: 'El principio de "falacia de ausencia de errores" establece que:',
        opciones: [
          { letra: 'a', texto: 'Si el sistema no es usable ni satisface las necesidades del usuario, encontrar y corregir defectos no sirve de nada', correcta: true,
            explicacion: 'Correcto. La falacia de ausencia de errores: un sistema sin defectos detectados puede seguir siendo inútil si el usuario no puede usarlo o no cubre sus necesidades.' },
          { letra: 'b', texto: 'Siempre hay errores en el software', correcta: false,
            explicacion: 'No. El principio no afirma que siempre existan errores, sino que "que no se encuentren" no equivale a "es útil".' },
          { letra: 'c', texto: 'Las pruebas pueden demostrar que no hay errores', correcta: false,
            explicacion: 'No. Justamente al revés: las pruebas demuestran la presencia de defectos, nunca su ausencia.' },
          { letra: 'd', texto: 'Los errores son imposibles de prevenir', correcta: false,
            explicacion: 'No. La prevención de defectos es posible (mejora de procesos, pruebas tempranas); la falacia trata de otra cosa.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿En qué actividad del proceso de prueba se identifican las condiciones de prueba?',
        opciones: [
          { letra: 'a', texto: 'Planificación de la prueba', correcta: false,
            explicacion: 'No. En la planificación se definen objetivos, estrategia, recursos y cronograma; no se identifican aún las condiciones de prueba.' },
          { letra: 'b', texto: 'Análisis de la prueba', correcta: true,
            explicacion: 'Correcto. En el análisis de la prueba se examina la base de prueba y se identifican las condiciones de prueba (qué hay que probar).' },
          { letra: 'c', texto: 'Implementación de la prueba', correcta: false,
            explicacion: 'No. En la implementación se crean procedimientos y se organizan los ciclos; las condiciones ya se identificaron antes.' },
          { letra: 'd', texto: 'Ejecución de la prueba', correcta: false,
            explicacion: 'No. En la ejecución se ejecutan los casos de prueba y se comparan resultados con los esperados.' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es una ventaja de tener un equipo de prueba independiente?',
        opciones: [
          { letra: 'a', texto: 'Mayor comunicación con los desarrolladores', correcta: false,
            explicacion: 'No. El aumento de independencia suele reducir la cercanía/comunicación con quienes desarrollan; esa es, de hecho, una desventaja potencial.' },
          { letra: 'b', texto: 'Menor coste del proyecto', correcta: false,
            explicacion: 'No. La independencia no garantiza menor coste; puede incluso incrementarlo por duplicar roles.' },
          { letra: 'c', texto: 'Menor sesgo y mayor objetividad al evaluar el producto', correcta: true,
            explicacion: 'Correcto. La independencia aporta menor sesgo y mayor objetividad: quien no participó en la creación del producto ve los defectos con más claridad.' },
          { letra: 'd', texto: 'Eliminación de la necesidad de desarrolladores', correcta: false,
            explicacion: 'No. La prueba independiente complementa al equipo de desarrollo; nunca lo sustituye.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba se centra en validar que el sistema satisface las necesidades de negocio del usuario?',
        opciones: [
          { letra: 'a', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La prueba de sistema verifica el comportamiento global del sistema frente a sus especificaciones técnicas/funcionales.' },
          { letra: 'b', texto: 'Prueba de integración', correcta: false,
            explicacion: 'No. La integración verifica las interfaces entre componentes o sistemas, no las necesidades de negocio finales.' },
          { letra: 'c', texto: 'Prueba de aceptación', correcta: true,
            explicacion: 'Correcto. La prueba de aceptación valida que el sistema satisface las necesidades del negocio/usuario y está listo para su uso (UAT, alfa, beta, contractual, regulatoria).' },
          { letra: 'd', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La prueba de componente verifica un componente aislado en el nivel más bajo, no las necesidades de negocio.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K1',
        enunciado: 'En el modelo V de desarrollo, ¿cuándo se debe comenzar a planificar las pruebas?',
        opciones: [
          { letra: 'a', texto: 'Después de escribir el código', correcta: false,
            explicacion: 'No. Planificar después de escribir el código es reactivo y más caro; contradice el modelo V.' },
          { letra: 'b', texto: 'Al mismo tiempo que las actividades de desarrollo correspondientes', correcta: true,
            explicacion: 'Correcto. En el modelo V, cada nivel de prueba se planifica en paralelo con su nivel de desarrollo correspondiente, desde el inicio del proyecto.' },
          { letra: 'c', texto: 'Solo después de completar todas las actividades de desarrollo', correcta: false,
            explicacion: 'No. Eso retrasaría las pruebas y aumentaría el coste; la planificación de prueba empieza desde el principio.' },
          { letra: 'd', texto: 'Durante la fase de mantenimiento', correcta: false,
            explicacion: 'No. La planificación de pruebas comienza al inicio del desarrollo, no en mantenimiento.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una desventaja o riesgo de DevOps?',
        opciones: [
          { letra: 'a', texto: 'Retroalimentación rápida sobre calidad del código', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja clave de DevOps.' },
          { letra: 'b', texto: 'Las herramientas CI/CD deben ser introducidas y mantenidas', correcta: true,
            explicacion: 'Correcto. DevOps requiere instalar, configurar y mantener la infraestructura de CI/CD y la automatización, lo que supone un esfuerzo y riesgo reales.' },
          { letra: 'c', texto: 'Automatización de pruebas repetitivas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de DevOps.' },
          { letra: 'd', texto: 'Mayor visibilidad de características de calidad no funcionales', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja: DevOps da mayor visibilidad de la calidad no funcional.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué diferencia hay entre prueba de confirmación y prueba de regresión?',
        opciones: [
          { letra: 'a', texto: 'Son el mismo concepto con diferente nombre', correcta: false,
            explicacion: 'No. Son conceptos distintos con propósitos diferentes.' },
          { letra: 'b', texto: 'La confirmación verifica que un defecto fue corregido; la regresión verifica que no se introdujeron nuevos defectos', correcta: true,
            explicacion: 'Correcto. La prueba de confirmación re-ejecuta las pruebas que fallaban para verificar la corrección; la regresión verifica que los cambios no rompieron otras partes del sistema.' },
          { letra: 'c', texto: 'La confirmación se hace al inicio; la regresión al final del proyecto', correcta: false,
            explicacion: 'No. Ambas se hacen tras un cambio/corrección a lo largo de todo el proyecto.' },
          { letra: 'd', texto: 'La confirmación es automática; la regresión es manual', correcta: false,
            explicacion: 'No. Ninguna de las dos está ligada a una modalidad automática o manual; ambas pueden automatizarse.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes tipos de prueba evalúa "lo bien que se comporta el sistema"?',
        opciones: [
          { letra: 'a', texto: 'Prueba funcional', correcta: false,
            explicacion: 'No. La prueba funcional valida QUÉ hace el sistema (funciones buscadas), no cómo de bien se comporta.' },
          { letra: 'b', texto: 'Prueba no funcional', correcta: true,
            explicacion: 'Correcto. La prueba no funcional evalúa cómo se comporta el sistema: rendimiento, usabilidad, fiabilidad, seguridad, etc.' },
          { letra: 'c', texto: 'Prueba de caja blanca', correcta: false,
            explicacion: 'No. La caja blanca se basa en la estructura interna del código, no en el comportamiento percibido.' },
          { letra: 'd', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario, no específicamente "lo bien que se comporta" en atributos no funcionales.' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿En qué consiste la prueba de mantenimiento?',
        opciones: [
          { letra: 'a', texto: 'Probar el sistema durante su desarrollo inicial', correcta: false,
            explicacion: 'No. Esa es la prueba de los niveles de desarrollo, no de mantenimiento.' },
          { letra: 'b', texto: 'Probar los cambios realizados en un sistema ya en producción, incluyendo migraciones', correcta: true,
            explicacion: 'Correcto. La prueba de mantenimiento se aplica a sistemas en producción cuando se hacen actualizaciones, correcciones, migraciones de datos o retiro, evaluando su impacto.' },
          { letra: 'c', texto: 'Solo probar la documentación del sistema', correcta: false,
            explicacion: 'No. El mantenimiento implica probar el sistema y sus cambios, no solo la documentación.' },
          { letra: 'd', texto: 'Probar el rendimiento del sistema', correcta: false,
            explicacion: 'No. Probar el rendimiento es un tipo de prueba no funcional, no la definición de prueba de mantenimiento.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes defectos es MÁS fácil de encontrar mediante prueba estática que mediante prueba dinámica?',
        opciones: [
          { letra: 'a', texto: 'Defectos de rendimiento', correcta: false,
            explicacion: 'No. Los defectos de rendimiento requieren ejecución y medición (prueba dinámica no funcional).' },
          { letra: 'b', texto: 'Defectos de usabilidad', correcta: false,
            explicacion: 'No. La usabilidad se evalúa interactuando con el sistema (dinámica); la estática no lo captura.' },
          { letra: 'c', texto: 'Desviaciones de los estándares de codificación', correcta: true,
            explicacion: 'Correcto. Las desviaciones de estándares de codificación se detectan sin ejecutar el código, mediante análisis estático y revisiones.' },
          { letra: 'd', texto: 'Defectos de seguridad en tiempo de ejecución', correcta: false,
            explicacion: 'No. Los defectos de seguridad que se manifiestan en ejecución requieren prueba dinámica.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué actividades incluye el proceso de revisión según ISO/IEC 20246?',
        opciones: [
          { letra: 'a', texto: 'Codificación, prueba, despliegue', correcta: false,
            explicacion: 'No. Codificación, prueba y despliegue son actividades de desarrollo/cierre, no del proceso de revisión.' },
          { letra: 'b', texto: 'Planificación, inicio, revisión individual, comunicación y análisis, corrección', correcta: true,
            explicacion: 'Correcto. El proceso genérico de revisión ISO/IEC 20246 consta de: planificación, inicio, revisión individual, comunicación y análisis, y corrección y cierre.' },
          { letra: 'c', texto: 'Requisitos, diseño, implementación, verificación', correcta: false,
            explicacion: 'No. Esas son fases del desarrollo de software, no actividades del proceso de revisión.' },
          { letra: 'd', texto: 'Análisis, diseño, ejecución, cierre', correcta: false,
            explicacion: 'No. Mezcla actividades del proceso de prueba con otras; la secuencia correcta de revisión es la que indica la opción b.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué rol en una revisión es responsable de decidir qué se va a revisar y de proporcionar recursos?',
        opciones: [
          { letra: 'a', texto: 'El moderador', correcta: false,
            explicacion: 'No. El moderador lidera y facilita la reunión de revisión, pero no decide el alcance ni aporta recursos.' },
          { letra: 'b', texto: 'El gestor', correcta: true,
            explicacion: 'Correcto. El gestor decide qué se revisa, asigna recursos y decide si las acciones correctoras se aplican.' },
          { letra: 'c', texto: 'El revisor', correcta: false,
            explicacion: 'No. El revisor examina el producto de trabajo e identifica anomalías; no decide el alcance.' },
          { letra: 'd', texto: 'El escriba', correcta: false,
            explicacion: 'No. El escriba registra información y anomalías durante la revisión; no decide ni asigna recursos.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué tipo de revisión es dirigida por el autor y tiene como objetivo educar a los revisores y obtener consenso?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La informal no tiene proceso definido ni roles; no educa formalmente.' },
          { letra: 'b', texto: 'Revisión guiada (walkthrough)', correcta: true,
            explicacion: 'Correcto. En el walkthrough el autor guía a los participantes por el producto de trabajo para educarlos, generar ideas y alcanzar consenso.' },
          { letra: 'c', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. La revisión técnica la lidera un moderador y la realizan expertos para tomar decisiones técnicas; el objetivo no es educar.' },
          { letra: 'd', texto: 'Inspección', correcta: false,
            explicacion: 'No. La inspección es la más formal, con métricas y reglas estrictas; su objetivo es detectar defectos, no educar.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K1',
        enunciado: 'En una inspección, ¿quién NO puede actuar como revisor?',
        opciones: [
          { letra: 'a', texto: 'El moderador', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: el moderador SÍ puede (y suele) actuar como revisor en una inspección.' },
          { letra: 'b', texto: 'El autor', correcta: true,
            explicacion: 'Correcto. En una inspección el autor NO puede actuar como revisor ni (normalmente) como escriba, para mantener la objetividad. El autor solo aclara dudas y corrige.' },
          { letra: 'c', texto: 'El escriba', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: el escriba puede actuar también como revisor.' },
          { letra: 'd', texto: 'El gestor', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: el gestor podría participar como revisor si no decidió el alcance de esa revisión.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué clasificación tienen las técnicas de prueba de partición de equivalencia, análisis del valor frontera, tabla de decisión y transición de estado?',
        opciones: [
          { letra: 'a', texto: 'Técnicas de caja blanca', correcta: false,
            explicacion: 'No. Las de caja blanca se basan en la estructura interna (sentencias, ramas, condiciones).' },
          { letra: 'b', texto: 'Técnicas basadas en la experiencia', correcta: false,
            explicacion: 'No. Esas técnicas (predicción de errores, exploratoria, listas) se apoyan en el conocimiento del tester, no en la especificación.' },
          { letra: 'c', texto: 'Técnicas de caja negra', correcta: true,
            explicacion: 'Correcto. PE, AVF, tabla de decisión y transición de estado derivan sus casos de prueba de la especificación de comportamiento: son técnicas de caja negra.' },
          { letra: 'd', texto: 'Técnicas estructurales', correcta: false,
            explicacion: 'No. "Estructurales" es sinónimo de caja blanca; estas técnicas son de especificación.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        enunciado: 'Un sistema acepta edades de 18 a 65 años inclusive. Usando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        nota: 'Particiones: <18→17, 18-65→18 y 65, >65→66',
        opciones: [
          { letra: 'a', texto: '17, 18, 30, 65, 66', correcta: false,
            explicacion: 'No. Incluye el 30 de más: la partición válida se representa con sus límites (18 y 65).' },
          { letra: 'b', texto: '17, 18, 65, 66', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida por debajo (17), válida representada por sus límites (18 y 65) e inválida por encima (66).' },
          { letra: 'c', texto: '18, 65', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las particiones inválidas (menor de 18 y mayor de 65).' },
          { letra: 'd', texto: '0, 18, 65, 100', correcta: false,
            explicacion: 'No. El 0 y el 100 son válidos como inválidos, pero el examen exige representantes directos de las fronteras de la partición válida y del exterior inmediato (17 y 66).' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        enunciado: 'Para el mismo rango de edad (18-65), aplicando AVF de 2 valores, ¿cuáles son los valores a probar?',
        nota: 'AVF 2 valores: 17,18 y 65,66',
        opciones: [
          { letra: 'a', texto: '17, 18, 64, 66', correcta: false,
            explicacion: 'No. Mezcla fronteras: para la frontera inferior son 17 y 18; para la superior, 65 y 66. El 64 no es frontera de este rango.' },
          { letra: 'b', texto: '18, 19, 64, 65', correcta: false,
            explicacion: 'No. Son valores internos; el AVF de 2 valores usa los límites y los inmediatamente exteriores (17 y 66).' },
          { letra: 'c', texto: '17, 18, 19, 64, 65, 66', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores (límite-1, límite, límite+1).' },
          { letra: 'd', texto: '17, 18, 65, 66', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: para cada frontera, el valor justo fuera y el límite: 17,18 (inferior) y 65,66 (superior).' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        enunciado: 'Para el rango 18-65 con AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        nota: 'AVF 3 valores: 17,18,19 y 64,65,66',
        opciones: [
          { letra: 'a', texto: '17, 18, 19, 64, 65, 66', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 para cada frontera: 17,18,19 y 64,65,66.' },
          { letra: 'b', texto: '18, 19, 64, 65', correcta: false,
            explicacion: 'No. Faltan los valores exteriores a los límites (17 y 66) que exige el AVF de 3 valores.' },
          { letra: 'c', texto: '17, 18, 66', correcta: false,
            explicacion: 'No. Le faltan los límites +1 (19 y 65) y le sobra rigor: es un conjunto incompleto.' },
          { letra: 'd', texto: '17, 18, 19, 65, 66', correcta: false,
            explicacion: 'No. Para la frontera superior, con 3 valores hace falta 64 (límite-1): 64, 65, 66.' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        enunciado: 'Un sistema tiene 3 condiciones booleanas (A, B, C). ¿Cuántas reglas tiene la tabla de decisión completa?',
        nota: '3 condiciones × 2 = 8 reglas',
        opciones: [
          { letra: 'a', texto: '4', correcta: false,
            explicacion: 'No. 4 sería el resultado con dos condiciones booleanas (2^2).' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. El número de reglas es el producto de los valores de todas las condiciones, no la suma ni un valor intermedio.' },
          { letra: 'c', texto: '8', correcta: true,
            explicacion: 'Correcto. Cada condición tiene 2 valores; reglas completas = 2 × 2 × 2 = 8 combinaciones únicas.' },
          { letra: 'd', texto: '12', correcta: false,
            explicacion: 'No. 12 no es resultado de combinar tres condiciones booleanas.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K2',
        enunciado: 'Si se alcanza un 100% de cobertura de rama en un programa, ¿qué se puede afirmar sobre la cobertura de sentencia?',
        opciones: [
          { letra: 'a', texto: 'También será del 100%', correcta: true,
            explicacion: 'Correcto. La cobertura de rama subsume a la de sentencia: si se ejecutan todas las ramas (ambos resultados de cada decisión), todas las sentencias se ejecutan, por lo que la cobertura de sentencia será del 100%.' },
          { letra: 'b', texto: 'Será como máximo del 50%', correcta: false,
            explicacion: 'No. Será como mínimo igual; nunca un tope del 50%.' },
          { letra: 'c', texto: 'No se puede determinar', correcta: false,
            explicacion: 'No. Sí se puede afirmar: 100% de rama implica 100% de sentencia (relación de subsumption).' },
          { letra: 'd', texto: 'Será del 0%', correcta: false,
            explicacion: 'No. Al ejecutar todas las ramas se ejecutan también todas las sentencias, luego nunca será 0%.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba basada en la experiencia se apoya en el conocimiento del tester sobre defectos típicos en sistemas similares?',
        opciones: [
          { letra: 'a', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. La de lista de comprobación usa una checklist de aspectos, no el conocimiento de defectos típicos pasados.' },
          { letra: 'b', texto: 'Prueba exploratoria', correcta: false,
            explicacion: 'No. La exploratoria es de aprendizaje y ejecución conjuntas; no se basa en predecir defectos típicos.' },
          { letra: 'c', texto: 'Predicción de errores', correcta: true,
            explicacion: 'Correcto. La predicción de errores (error guessing) usa la experiencia y conocimiento del tester para anticipar dónde suelen aparecer defectos y diseñar pruebas dirigidas.' },
          { letra: 'd', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. La partición de equivalencia es una técnica de caja negra basada en la especificación, no en la experiencia.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: 'En el contexto ágil, ¿quién participa en la creación de historias de usuario?',
        opciones: [
          { letra: 'a', texto: 'Solo los representantes de negocio', correcta: false,
            explicacion: 'No. Si solo participa el negocio, se pierde la perspectiva de desarrollo y prueba.' },
          { letra: 'b', texto: 'Solo los desarrolladores', correcta: false,
            explicacion: 'No. Las historias de usuario no se crean solo entre desarrolladores.' },
          { letra: 'c', texto: 'Representantes de negocio, desarrolladores y probadores (enfoque colaborativo)', correcta: true,
            explicacion: 'Correcto. El enfoque colaborativo de equipo completo implica que negocio, desarrollo y prueba colaboran para escribir y concretar historias de usuario.' },
          { letra: 'd', texto: 'Solo los probadores', correcta: false,
            explicacion: 'No. La creación de historias es colaborativa; no corresponde solo a prueba.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué significa el acrónimo INVEST en el contexto de historias de usuario?',
        opciones: [
          { letra: 'a', texto: 'Un conjunto de criterios de calidad para historias de usuario', correcta: true,
            explicacion: 'Correcto. INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) es un conjunto de criterios de calidad que debe cumplir una buena historia de usuario.' },
          { letra: 'b', texto: 'Una técnica de estimación', correcta: false,
            explicacion: 'No. INVEST se aplica a la calidad de las historias de usuario, no a la estimación (esa función la cubren el póker de planificación o los story points).' },
          { letra: 'c', texto: 'Un tipo de prueba estática', correcta: false,
            explicacion: 'No. INVEST no es una técnica de prueba.' },
          { letra: 'd', texto: 'Una herramienta de automatización', correcta: false,
            explicacion: 'No. INVEST no es una herramienta.' }
        ]
      },
      {
        numero: 28, capitulo: 5, nivel: 'K2',
        enunciado: 'En la gestión de riesgos, ¿qué significa "mitigar" un riesgo?',
        opciones: [
          { letra: 'a', texto: 'Aceptar el riesgo sin tomar acciones', correcta: false,
            explicacion: 'No. Aceptar sin acciones es otra respuesta al riesgo (aceptación), distinta de mitigar.' },
          { letra: 'b', texto: 'Transferir el riesgo a un tercero', correcta: false,
            explicacion: 'No. Transferir es otra respuesta (p. ej., contratar un seguro); mitigar implica reducir.' },
          { letra: 'c', texto: 'Implementar acciones para reducir la probabilidad o el impacto del riesgo', correcta: true,
            explicacion: 'Correcto. Mitigar consiste en aplicar medidas de prueba y de control que reduzcan la probabilidad o el impacto del riesgo.' },
          { letra: 'd', texto: 'Ignorar el riesgo por completo', correcta: false,
            explicacion: 'No. Ignorar el riesgo no es una respuesta válida en la gestión de riesgos.' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un ejemplo de riesgo de proyecto?',
        opciones: [
          { letra: 'a', texto: 'El sistema es inseguro', correcta: false,
            explicacion: 'No. Es un riesgo de producto: amenaza directa a la calidad del sistema.' },
          { letra: 'b', texto: 'El rendimiento es insuficiente', correcta: false,
            explicacion: 'No. Es un riesgo de producto (el sistema no cumple un requisito no funcional).' },
          { letra: 'c', texto: 'El presupuesto de prueba es insuficiente', correcta: true,
            explicacion: 'Correcto. Es un riesgo de proyecto: la falta de recursos y presupuesto amenaza la ejecución y planificación del trabajo de prueba.' },
          { letra: 'd', texto: 'La usabilidad es deficiente', correcta: false,
            explicacion: 'No. La usabilidad deficiente es un riesgo de producto.' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K3',
        enunciado: 'Se estima una tarea con O=5, M=10, P=21. ¿Cuál es la estimación de tres puntos?',
        nota: 'E = (5 + 4×10 + 21)/6 = (5+40+21)/6 = 66/6 = 11',
        opciones: [
          { letra: 'a', texto: '10', correcta: false,
            explicacion: 'No. 10 es el valor "más probable"; la fórmula pondera también O y P.' },
          { letra: 'b', texto: '11', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (5 + 4×10 + 21)/6 = 66/6 = 11.' },
          { letra: 'c', texto: '12', correcta: false,
            explicacion: 'No. 12 no es el resultado de la fórmula.' },
          { letra: 'd', texto: '15', correcta: false,
            explicacion: 'No. 15 sería la media simple (5+10+21)/3 ≈ 12, ni siquiera eso; la fórmula de tres puntos da 11.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        enunciado: 'Con los datos O=5, M=10, P=21, ¿cuál es la desviación estándar?',
        nota: 'SD = (21-5)/6 = 16/6 = 2,67',
        opciones: [
          { letra: 'a', texto: '2,0', correcta: false,
            explicacion: 'No. 2,0 surgiría con P-O = 12; aquí P-O = 16.' },
          { letra: 'b', texto: '2,67', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (21 - 5)/6 = 16/6 = 2,67.' },
          { letra: 'c', texto: '3,0', correcta: false,
            explicacion: 'No. La mitad de 16 es 8 y /3 daría 5,33; en ningún caso 3,0.' },
          { letra: 'd', texto: '4,0', correcta: false,
            explicacion: 'No. 4,0 correspondería a (P-O)=24; aquí es 16/6 = 2,67.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué mide la pirámide de prueba en términos de cantidad de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Muchas pruebas E2E, pocas unitarias', correcta: false,
            explicacion: 'No. Es la pirámide invertida, un anti-patrón.' },
          { letra: 'b', texto: 'Muchas pruebas unitarias, algunas de integración, pocas E2E', correcta: true,
            explicacion: 'Correcto. La pirámide de prueba: base con muchas pruebas de componente/unitarias, luego integración y, en la cúspide, pocas pruebas E2E.' },
          { letra: 'c', texto: 'Igual número de cada tipo', correcta: false,
            explicacion: 'No. La pirámide establece cantidades decrecientes hacia arriba.' },
          { letra: 'd', texto: 'Solo pruebas de sistema', correcta: false,
            explicacion: 'No. La pirámide contempla varios niveles, no solo sistema.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de avance de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Disponibilidad del sistema', correcta: false,
            explicacion: 'No. La disponibilidad es una métrica de calidad de producto.' },
          { letra: 'b', texto: 'Tiempo medio entre fallos', correcta: false,
            explicacion: 'No. El MTBF es una métrica de fiabilidad/calidad del producto.' },
          { letra: 'c', texto: 'Porcentaje de casos de prueba ejecutados', correcta: true,
            explicacion: 'Correcto. El porcentaje de casos ejecutados y de cobertura alcanzada son métricas de avance de las actividades de prueba.' },
          { letra: 'd', texto: 'Coste total del proyecto', correcta: false,
            explicacion: 'No. Es una métrica económica del proyecto, no de avance de la prueba.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué información debería incluirse en un informe de compleción de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Solo el número total de defectos encontrados', correcta: false,
            explicacion: 'No. El informe de compleción es más amplio: resume resultados, métricas y conclusiones.' },
          { letra: 'b', texto: 'Resumen de pruebas realizadas, métricas, defectos no resueltos y riesgos no mitigados', correcta: true,
            explicacion: 'Correcto. El informe de compleción resume las pruebas realizadas, las métricas de la prueba, los defectos pendientes, los riesgos no mitigados y las lecciones aprendidas.' },
          { letra: 'c', texto: 'Solo los casos de prueba que pasaron', correcta: false,
            explicacion: 'No. Debe informar también de los que fallaron y del estado global.' },
          { letra: 'd', texto: 'El presupuesto del proyecto', correcta: false,
            explicacion: 'No. El presupuesto no es contenido propio del informe de compleción de pruebas.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un criterio de entrada para comenzar un nivel de prueba?',
        opciones: [
          { letra: 'a', texto: 'Todos los defectos han sido corregidos', correcta: false,
            explicacion: 'No. Que no queden defectos es un criterio de SALIDA metáfora de fin, no de entrada.' },
          { letra: 'b', texto: 'El entorno de prueba está listo y disponible', correcta: true,
            explicacion: 'Correcto. Disponer de un entorno de prueba disponible, de datos y de las pruebas preparadas son criterios de entrada típicos para comenzar un nivel.' },
          { letra: 'c', texto: 'El 100% de las pruebas han pasado', correcta: false,
            explicacion: 'No. Eso es un criterio de salida (no se entra a un nivel porque ya hayan pasado todas las pruebas).' },
          { letra: 'd', texto: 'El informe de compleción ha sido entregado', correcta: false,
            explicacion: 'No. El informe de compleción se entrega al FINALIZAR el nivel, no para empezarlo.' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué proceso asegura que los productos de prueba estén identificados, versionados y controlados?',
        opciones: [
          { letra: 'a', texto: 'Gestión de la configuración', correcta: true,
            explicacion: 'Correcto. La gestión de configuración identifica, versiona y controla los productos de prueba (planes, casos, scripts y datos) y garantiza el uso de las versiones correctas.' },
          { letra: 'b', texto: 'Gestión de riesgos', correcta: false,
            explicacion: 'No. La gestión de riesgos identifica, analiza y responde a los riesgos; no controla versiones.' },
          { letra: 'c', texto: 'Gestión de defectos', correcta: false,
            explicacion: 'No. La gestión de defectos administra el ciclo de vida de los defectos, no las versiones de productos.' },
          { letra: 'd', texto: 'Gestión de la comunicación', correcta: false,
            explicacion: 'No. La comunicación gestiona la información entre implicados, no el versionado.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué diferencia hay entre prioridad y severidad de un defecto?',
        opciones: [
          { letra: 'a', texto: 'Son sinónimos', correcta: false,
            explicacion: 'No. Son dos atributos distintos del defecto.' },
          { letra: 'b', texto: 'Prioridad es urgencia de corrección; severidad es impacto en el sistema', correcta: true,
            explicacion: 'Correcto. La prioridad indica con qué urgencia debe corregirse; la severidad mide el impacto (gravedad) del defecto en el sistema. Un defecto puede ser muy severo y de baja prioridad, o al revés.' },
          { letra: 'c', texto: 'Prioridad es impacto; severidad es urgencia', correcta: false,
            explicacion: 'No. Está invertido: la severidad es impacto y la prioridad es urgencia.' },
          { letra: 'd', texto: 'Prioridad la asigna el tester; severidad el desarrollador', correcta: false,
            explicacion: 'No. Ambos atributos pueden asignarse de forma colaborativa; no hay una regla estricta por rol.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es JMeter?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de gestión de pruebas', correcta: false,
            explicacion: 'No. JMeter no administra casos de prueba ni defectos.' },
          { letra: 'b', texto: 'Herramienta de prueba estática', correcta: false,
            explicacion: 'No. JMeter ejecuta pruebas con carga real; no analiza código estáticamente.' },
          { letra: 'c', texto: 'Herramienta de pruebas no funcionales (rendimiento)', correcta: true,
            explicacion: 'Correcto. JMeter es una herramienta de pruebas de rendimiento/carga: genera peticiones masivas y mide tiempos de respuesta, entre otras métricas no funcionales.' },
          { letra: 'd', texto: 'Herramienta de colaboración', correcta: false,
            explicacion: 'No. JMeter no es una herramienta de colaboración (Slack, Teams, etc.).' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un riesgo de la automatización de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Reduce el tiempo de ejecución', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de la automatización.' },
          { letra: 'b', texto: 'Expectativas poco realistas sobre lo que la automatización puede lograr', correcta: true,
            explicacion: 'Correcto. Un riesgo típico es esperar que la automatización encuentre muchos defectos nuevos o que sustituya todo el esfuerzo; esas expectativas poco realistas generan frustración.' },
          { letra: 'c', texto: 'Aumenta la cobertura de pruebas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja potencial.' },
          { letra: 'd', texto: 'Mejora la consistencia de las pruebas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja: las pruebas automatizadas se ejecutan siempre de la misma manera.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de los siguientes son tipos de herramientas de apoyo a la prueba?',
        nota: 'a y c (diseño/implementación y gestión); las demás no son tipos de herramientas de prueba',
        opciones: [
          { letra: 'a', texto: 'Herramientas de diseño e implementación de pruebas', correcta: true,
            explicacion: 'Correcto. Diseño e implementación es uno de los grupos de herramientas de apoyo a la prueba (generadores de casos y datos de prueba).' },
          { letra: 'b', texto: 'Herramientas de nómina', correcta: false,
            explicacion: 'No. Las de nómina son herramientas de negocio factual, no de soporte a la prueba.' },
          { letra: 'c', texto: 'Herramientas de gestión de pruebas', correcta: true,
            explicacion: 'Correcto. La gestión de pruebas (p. ej., Jira, TestRail) es un tipo de herramienta de apoyo a la prueba.' },
          { letra: 'd', texto: 'Herramientas de edición de video', correcta: false,
            explicacion: 'No. Edición de video no es un tipo de herramienta de apoyo a la prueba.' },
          { letra: 'e', texto: 'Herramientas de retoque fotográfico', correcta: false,
            explicacion: 'No. Las de retoque fotográfico no pertenecen a los grupos de herramientas de apoyo a la prueba.' }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);