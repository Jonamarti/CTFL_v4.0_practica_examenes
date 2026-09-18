/* examen-1.js — Datos del EXAMEN DE PRÁCTICA 1 (CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-1',
    titulo: 'EXAMEN DE PRÁCTICA 1',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un objetivo de la prueba de software?',
        opciones: [
          { letra: 'a', texto: 'Encontrar tantos fallos como sea posible para demostrar que el software funciona', correcta: false,
            explicacion: 'No. La prueba no intenta demostrar que el software funciona; de hecho, las pruebas demuestran la presencia de defectos, no su ausencia. Además, el objetivo no es "maximizar fallos", sino proporcionar información sobre la calidad.' },
          { letra: 'b', texto: 'Ofrecer datos objetivos sobre la calidad del software que se está probando', correcta: true,
            explicacion: 'Correcto. Uno de los objetivos principales de la prueba es evaluar los productos de trabajo y aportar datos objetivos sobre su calidad, que se usan para decidir, generar confianza, prevenir y detectar defectos.' },
          { letra: 'c', texto: 'Garantizar que el software está libre de defectos antes de la entrega', correcta: false,
            explicacion: 'No. Garantizar la ausencia total de defectos contradice el principio de que la prueba muestra la presencia, no la ausencia de defectos. Las pruebas exhaustivas son imposibles.' },
          { letra: 'd', texto: 'Demostrar la ausencia total de defectos en el sistema', correcta: false,
            explicacion: 'No. Es imposible demostrar la ausencia total de defectos: siempre pueden existir defectos no detectados (principio de las pruebas exhaustivas imposibles).' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es la diferencia principal entre probar y depurar?',
        opciones: [
          { letra: 'a', texto: 'Probar encuentra defectos; depurar localiza y corrige la causa raíz de los fallos', correcta: true,
            explicacion: 'Correcto. Probar se centra en detectar defectos mediante la ejecución/análisis; depurar es la actividad de los desarrolladores que localiza, analiza y corrige la causa raíz del defecto que provocó el fallo.' },
          { letra: 'b', texto: 'Probar y depurar son exactamente lo mismo', correcta: false,
            explicacion: 'No. Son actividades diferentes: probar puede desencadenar fallos, pero es depurar quien los diagnostica y corrige su causa raíz.' },
          { letra: 'c', texto: 'Depurar encuentra defectos; probar los corrige', correcta: false,
            explicacion: 'No. Es al revés: la prueba es quien detecta los defectos; la depuración los localiza y corrige.' },
          { letra: 'd', texto: 'Probar solo lo hacen los testers; depurar solo lo hacen los desarrolladores', correcta: false,
            explicacion: 'No. Aunque depurar la suele hacer quien desarrolla, los testers también pueden probar y contribuir al análisis; la distinción no es de "quién" lo hace, sino de qué actividad es cada una.' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: 'Un programador se distrae y escribe una condición incorrecta en un bucle. Más tarde, durante la ejecución, el sistema muestra resultados incorrectos. Según la terminología ISTQB, ¿cómo se denomina cada elemento?',
        opciones: [
          { letra: 'a', texto: 'La distracción es un error, la condición incorrecta es un defecto, el resultado incorrecto es un fallo', correcta: true,
            explicacion: 'Correcto. Según ISTQB: una persona comete un error (la distracción) que introduce un defecto (la condición incorrecta en el código, también llamado bug o fault); al ejecutarlo en condiciones concretas se manifiesta como un fallo (los resultados incorrectos).' },
          { letra: 'b', texto: 'La distracción es un fallo, la condición incorrecta es un error, el resultado incorrecto es un defecto', correcta: false,
            explicacion: 'No. Mezcla los términos: el fallo no es la distracción (causa humana), la condición incorrecta no es un "error" en el código (es el defecto) y el resultado incorrecto es la manifestación (fallo), no el defecto.' },
          { letra: 'c', texto: 'La distracción es un defecto, la condición incorrecta es un fallo, el resultado incorrecto es un error', correcta: false,
            explicacion: 'No. La distracción es una acción humana (error) que crea el defecto; la condición incorrecta es el defecto y el resultado incorrecto es el fallo observable.' },
          { letra: 'd', texto: 'La distracción es una causa raíz, la condición incorrecta es un fallo, el resultado incorrecto es un error', correcta: false,
            explicacion: 'No. La causa raíz es el origen último del defecto (podría rastrearse hasta la distracción, pero no es la denominación estándar del elemento), y fallo/error están intercambiados.' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes principios de prueba establece que las pruebas exhaustivas son imposibles?',
        opciones: [
          { letra: 'a', texto: 'La paradoja del pesticida', correcta: false,
            explicacion: 'No. La paradoja del pesticida se refiere a que repetir las mismas pruebas hace que dejen de descubrir defectos nuevos, no a la imposibilidad de probar todo.' },
          { letra: 'b', texto: 'La agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación de defectos afirma que un pequeño número de módulos contiene la mayoría de defectos (Pareto), no que probar todo sea imposible.' },
          { letra: 'c', texto: 'Las pruebas exhaustivas son imposibles', correcta: true,
            explicacion: 'Correcto. Es uno de los siete principios: probar todas las combinaciones de entradas, estados y precondiciones es imposible; hay que priorizar los esfuerzos según el riesgo.' },
          { letra: 'd', texto: 'La prueba depende del contexto', correcta: false,
            explicacion: 'No. Ese principio indica que la estrategia de prueba debe adaptarse al contexto (una app web no se prueba igual que un sistema crítico), pero no habla de la imposibilidad de probarlo todo.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: 'Según el principio de "agrupación de defectos", ¿qué afirma la experiencia en la mayoría de los proyectos?',
        opciones: [
          { letra: 'a', texto: 'Todos los módulos tienen la misma cantidad de defectos', correcta: false,
            explicacion: 'No. La experiencia muestra justo lo contrario: los defectos no se reparten de forma uniforme entre los módulos.' },
          { letra: 'b', texto: 'Un pequeño número de módulos contiene la mayoría de los defectos', correcta: true,
            explicacion: 'Correcto. El principio de agrupación de defectos (basado en la ley de Pareto) afirma que una pequeña parte de las áreas o módulos concentra la mayoría de los defectos encontrados.' },
          { letra: 'c', texto: 'Los defectos se distribuyen uniformemente entre todos los módulos', correcta: false,
            explicacion: 'No. Contradice el principio: la distribución de defectos no es uniforme, sino concentrada en unas pocas áreas.' },
          { letra: 'd', texto: 'Los módulos más grandes siempre tienen más defectos', correcta: false,
            explicacion: 'No. El tamaño no determina por sí solo la cantidad de defectos: la complejidad, la frecuencia de cambios y la densidad de código influyen más.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes NO es una actividad del proceso de prueba según ISTQB?',
        opciones: [
          { letra: 'a', texto: 'Planificación de la prueba', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta. La planificación sí es una actividad del proceso de prueba (definir objetivos, estrategia, recursos y cronograma).' },
          { letra: 'b', texto: 'Análisis y diseño de la prueba', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta. El análisis (identificar condiciones de prueba) y el diseño (crear casos de prueba) son actividades del proceso.' },
          { letra: 'c', texto: 'Codificación del software', correcta: true,
            explicacion: 'Correcto. La codificación es una actividad de desarrollo, no de prueba. El proceso de prueba incluye: planificación, monitorización y control, análisis, diseño, implementación, ejecución y compleción.' },
          { letra: 'd', texto: 'Compleción de la prueba', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta. La compleción es la última actividad del proceso (cerrar y reportar, garantizar que quedó documentado).' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué aporta la trazabilidad que vincula la base de prueba con los productos de prueba?',
        opciones: [
          { letra: 'a', texto: 'Garantiza que todos los defectos serán encontrados', correcta: false,
            explicacion: 'No. La trazabilidad no garantiza encontrar todos los defectos; eso contradice el principio de que las pruebas muestran la presencia, no la ausencia de defectos.' },
          { letra: 'b', texto: 'Permite evaluar el impacto de los cambios y determinar la cobertura alcanzada', correcta: true,
            explicacion: 'Correcto. La trazabilidad conecta base de prueba, condiciones, casos y resultados; permite evaluar el impacto de los cambios, determinar la cobertura alcanzada y analizar el riesgo residual.' },
          { letra: 'c', texto: 'Asegura que el presupuesto del proyecto no se exceda', correcta: false,
            explicacion: 'No. La trazabilidad no controla el presupuesto; eso es parte de la gestión del proyecto/prueba.' },
          { letra: 'd', texto: 'Elimina la necesidad de realizar pruebas de regresión', correcta: false,
            explicacion: 'No. Al contrario, la trazabilidad ayuda a determinar QUÉ re-probar ante un cambio, pero no elimina la necesidad de la regresión.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un nivel de prueba según ISTQB?',
        opciones: [
          { letra: 'a', texto: 'Prueba de código', correcta: false,
            explicacion: 'No. "Prueba de código" no es un nivel de prueba ISTQB. Los niveles son: componente, integración de componentes, sistema, integración de sistemas y aceptación.' },
          { letra: 'b', texto: 'Prueba de sistema', correcta: true,
            explicacion: 'Correcto. La prueba de sistema es un nivel de prueba: verifica el comportamiento del sistema completo, tanto funcional como no funcional.' },
          { letra: 'c', texto: 'Prueba de base de datos', correcta: false,
            explicacion: 'No. Probar la base de datos es un tipo de prueba sobre una tecnología concreta; no es un nivel de prueba ISTQB.' },
          { letra: 'd', texto: 'Prueba de interfaz de usuario', correcta: false,
            explicacion: 'No. La interacción por UI es un tema de prueba o tipo, no un nivel de prueba dentro de la clasificación ISTQB.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K1',
        enunciado: '¿Qué tipo de prueba se centra en probar las interfaces entre componentes del sistema?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La prueba de componente prueba componentes aislados, no sus interfaces con otros componentes.' },
          { letra: 'b', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La prueba de sistema prueba el sistema completo, incluyendo el comportamiento global, no solo las interfaces entre componentes.' },
          { letra: 'c', texto: 'Prueba de integración de componentes', correcta: true,
            explicacion: 'Correcto. La prueba de integración de componentes (o de ensamblaje) se centra en las interacciones e interfaces entre componentes del sistema.' },
          { letra: 'd', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La prueba de aceptación valida que el sistema satisface las necesidades del usuario/negocio, no las interfaces internas entre componentes.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: 'La prueba de confirmación se realiza para:',
        opciones: [
          { letra: 'a', texto: 'Verificar que un cambio no ha introducido defectos en otras partes del sistema', correcta: false,
            explicacion: 'No. Eso es la prueba de regresión, no la de confirmación.' },
          { letra: 'b', texto: 'Confirmar que un defecto original ha sido corregido con éxito', correcta: true,
            explicacion: 'Correcto. La prueba de confirmación (o re-prueba) vuelve a ejecutar las pruebas que fallaban para verificar que el defecto corregido ya no se manifiesta.' },
          { letra: 'c', texto: 'Probar el sistema completo antes de la entrega', correcta: false,
            explicacion: 'No. Eso es propio de la prueba de sistema o de aceptación, no de la prueba de confirmación.' },
          { letra: 'd', texto: 'Evaluar el rendimiento del sistema bajo carga', correcta: false,
            explicacion: 'No. Eso corresponde a una prueba no funcional de rendimiento.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una ventaja de DevOps para la prueba?',
        opciones: [
          { letra: 'a', texto: 'Elimina la necesidad de pruebas manuales por completo', correcta: false,
            explicacion: 'No. DevOps no elimina las pruebas manuales; automatiza muchas, pero el criterio y la exploración manual siguen siendo necesarios.' },
          { letra: 'b', texto: 'Proporciona retroalimentación rápida sobre la calidad del código', correcta: true,
            explicacion: 'Correcto. Al integrar pruebas y despliegue en tuberías CI/CD, DevOps aporta retroalimentación rápida y continua sobre la calidad, mayor visibilidad y automatización de pruebas repetitivas.' },
          { letra: 'c', texto: 'Reduce la necesidad de integración continua', correcta: false,
            explicacion: 'No. DevOps se basa precisamente en integración continua y entrega continua; no la reduce.' },
          { letra: 'd', texto: 'Aumenta la necesidad de pruebas repetitivas manuales', correcta: false,
            explicacion: 'No. DevOps tiende a automatizar las pruebas repetitivas para que sean rápidas y frecuentes.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: 'El enfoque de "desplazamiento a la izquierda" (shift-left) en la prueba significa:',
        opciones: [
          { letra: 'a', texto: 'Retrasar las pruebas hasta que todo el código esté escrito', correcta: false,
            explicacion: 'No. Retrasar las pruebas es lo contrario del desplazamiento a la izquierda.' },
          { letra: 'b', texto: 'Realizar las pruebas de forma temprana en el ciclo de vida de desarrollo', correcta: true,
            explicacion: 'Correcto. El shift-left busca probar y revisar lo antes posible (revisiones de especificaciones, pruebas estáticas, CI temprano) para ahorrar tiempo y dinero al reducir el coste de corregir.' },
          { letra: 'c', texto: 'Probar solo el lado izquierdo de la interfaz de usuario', correcta: false,
            explicacion: 'No. Es una interpretación literal errónea; "izquierda" se refiere a moverse hacia el inicio del ciclo de vida, no a la UI.' },
          { letra: 'd', texto: 'Reducir el número de pruebas en los niveles inferiores', correcta: false,
            explicacion: 'No. Al contrario, desplazar a la izquierda implica más actividades de verificación tempranas (niveles inferiores y análisis estático).' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué tipo de prueba evalúa atributos como eficiencia de desempeño, usabilidad y seguridad?',
        opciones: [
          { letra: 'a', texto: 'Prueba funcional', correcta: false,
            explicacion: 'No. La prueba funcional evalúa QUÉ hace el sistema (funciones y reglas de negocio), no "cómo se comporta".' },
          { letra: 'b', texto: 'Prueba no funcional', correcta: true,
            explicacion: 'Correcto. La prueba no funcional evalúa atributos de calidad como eficiencia de desempeño, usabilidad, fiabilidad, seguridad, compatibilidad y mantenibilidad.' },
          { letra: 'c', texto: 'Prueba estructural', correcta: false,
            explicacion: 'No. La prueba estructural (caja blanca) valora la estructura interna del código (cobertura de sentencias/ramas), no estos atributos de comportamiento.' },
          { letra: 'd', texto: 'Prueba de caja blanca', correcta: false,
            explicacion: 'No. La caja blanca se basa en la estructura interna del código; los atributos mencionados son no funcionales.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una diferencia entre la prueba estática y la dinámica?',
        opciones: [
          { letra: 'a', texto: 'La prueba estática solo se aplica al código fuente', correcta: false,
            explicacion: 'No. La prueba estática puede aplicarse a CUALQUIER producto de trabajo, incluidos requisitos, diseño y documentación, no solo al código.' },
          { letra: 'b', texto: 'La prueba estática también examina artefactos de trabajo que no se ejecutan', correcta: true,
            explicacion: 'Correcto. La prueba estática no ejecuta el software y, por tanto, sirve para especificaciones, diseños y documentación (revisiones y análisis estático).' },
          { letra: 'c', texto: 'La prueba dinámica no requiere ejecución del software', correcta: false,
            explicacion: 'No. Al contrario: la prueba dinámica ejecuta el software y requiere casos de prueba con resultados esperados.' },
          { letra: 'd', texto: 'La prueba estática siempre encuentra más defectos que la dinámica', correcta: false,
            explicacion: 'No. La cantidad depende del contexto; la estática es muy eficaz en paredes de defectos tempranos y en medición de mantenibilidad, pero no "siempre" más que la dinámica.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál es el orden correcto de las actividades del proceso de revisión según ISO/IEC 20246?',
        opciones: [
          { letra: 'a', texto: 'Inicio, Planificación, Revisión individual, Comunicación y análisis, Corrección', correcta: false,
            explicacion: 'No. El inicio va después de la planificación: primero se definen alcance, criterios y roles.' },
          { letra: 'b', texto: 'Planificación, Inicio, Revisión individual, Comunicación y análisis, Corrección', correcta: true,
            explicacion: 'Correcto. El proceso genérico de revisión ISO/IEC 20246 es: Planificación, Inicio (kick-off), Revisión individual, Comunicación y análisis, Corrección y cierre.' },
          { letra: 'c', texto: 'Revisión individual, Planificación, Inicio, Comunicación, Corrección', correcta: false,
            explicacion: 'No. No se puede revisar individualmente antes de planificar la revisión y hacer el inicio.' },
          { letra: 'd', texto: 'Planificación, Revisión individual, Inicio, Corrección, Comunicación', correcta: false,
            explicacion: 'No. El inicio debe preceder a la revisión individual, y la comunicación/análisis debe ocurrir antes de corregir.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es el tipo de revisión MÁS formal?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La revisión informal es la menos formal: sin proceso definido, no necesita reunión ni documentación.' },
          { letra: 'b', texto: 'Revisión guiada (walkthrough)', correcta: false,
            explicacion: 'No. La guiada suele dirigirla el autor para educar y generar consenso; más formal que la informal pero menos que la inspección.' },
          { letra: 'c', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. Es formal y la realiza un equipo técnico, pero la inspección es aún más formal.' },
          { letra: 'd', texto: 'Inspección', correcta: true,
            explicacion: 'Correcto. La inspección es el tipo de revisión más formal: sigue el proceso completo, con roles definidos (el autor no es revisor), métricas y datos del proceso.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: 'En una revisión, ¿quién se asegura de que las reuniones se desarrollen de forma ordenada y eficaz?',
        opciones: [
          { letra: 'a', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor crea el producto de trabajo y corrige las anomalías; no dirige la reunión.' },
          { letra: 'b', texto: 'El moderador', correcta: true,
            explicacion: 'Correcto. El moderador (o líder de revisión) gestiona la reunión y asegura que la revisión discurra de forma eficaz y ordenada, sin evaluar a las personas.' },
          { letra: 'c', texto: 'El gestor', correcta: false,
            explicacion: 'No. El gestor decide qué se revisa y aporta recursos; no dirige la reunión de revisión.' },
          { letra: 'd', texto: 'El escriba', correcta: false,
            explicacion: 'No. El escriba registra las anomalías y decisiones; no modera.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un factor de éxito para las revisiones?',
        opciones: [
          { letra: 'a', texto: 'Realizar revisiones de todo el documento de una sola vez', correcta: false,
            explicacion: 'No. Es un factor de fracaso: conviene revisar fragmentos pequeños y manejables en lugar de revisar todo de una vez.' },
          { letra: 'b', texto: 'Dar a los revisores margen para repasar el material con antelación', correcta: true,
            explicacion: 'Correcto. Dar tiempo de preparación, objetivos claros, formación, fragmentos pequeños y apoyo de la dirección son factores que favorecen el éxito de una revisión.' },
          { letra: 'c', texto: 'Evaluar el desempeño de los participantes durante la revisión', correcta: false,
            explicacion: 'No. Evaluar a las personas en la revisión genera un clima de "culpa" y reduce la eficacia; la revisión debe centrarse en el producto de trabajo.' },
          { letra: 'd', texto: 'No proporcionar formación a los participantes', correcta: false,
            explicacion: 'No. La formación de los participantes en técnicas de revisión es un factor de éxito, no de fracaso.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿En qué se diferencian las técnicas de caja negra de las técnicas de caja blanca?',
        opciones: [
          { letra: 'a', texto: 'Las de caja negra se basan en la estructura interna; las de caja blanca en la especificación', correcta: false,
            explicacion: 'No. Está invertido: la caja negra se apoya en la especificación y las de caja blanca en la estructura interna.' },
          { letra: 'b', texto: 'Las de caja negra se basan en la especificación; las de caja blanca en la estructura interna', correcta: true,
            explicacion: 'Correcto. Las técnicas de caja negra derivan valores de prueba de la especificación/requisitos sin mirar la implementación; las de caja blanca se basan en el código o arquitectura interna.' },
          { letra: 'c', texto: 'Las de caja negra solo las usan desarrolladores; las de caja blanca solo los testers', correcta: false,
            explicacion: 'No. No están restringidas por rol; la elección depende de la técnica y el nivel de prueba, no de quién la aplica.' },
          { letra: 'd', texto: 'No hay diferencia, son términos intercambiables', correcta: false,
            explicacion: 'No. Son categorías distintas: se diferencian en la fuente de información (especificación vs estructura interna) de la que derivan los casos de prueba.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        enunciado: 'Un campo de entrada acepta valores del 1 al 100 inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores que debe probar?',
        nota: 'Particiones: inválida <1 → 0, válida → 1 y 100, inválida >100 → 101',
        opciones: [
          { letra: 'a', texto: '0, 50, 101', correcta: false,
            explicacion: 'No. Faltan representantes de los límites de la partición válida (1 y 100) y, tal y como se valora aquí, los límites deben quedar cubiertos al elegir representantes de la partición válida.' },
          { letra: 'b', texto: '1, 100', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las particiones inválidas (menor que 1, mayor que 100), que también deben probarse.' },
          { letra: 'c', texto: '0, 1, 50, 100, 101', correcta: false,
            explicacion: 'No. Incluye de más: la partición válida basta con representarla (por ejemplo con 1 y 100); el 50 es redundante para el conjunto mínimo según el criterio seguido en este examen.' },
          { letra: 'd', texto: '0, 1, 100, 101', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: una inválida por debajo (<1 → 0), la válida representada por sus límites (1 y 100) y una inválida por encima (>100 → 101). Con un valor por partición es suficiente.' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        enunciado: 'Para el mismo campo del 1 al 100, aplicando análisis del valor frontera de 2 valores, ¿cuáles son los valores a probar?',
        nota: 'AVF 2 valores: justo debajo y el límite: 0,1 y 100,101',
        opciones: [
          { letra: 'a', texto: '0, 1, 100, 101', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: para cada frontera se prueba el valor justo fuera (0 y 101) y el límite de la partición válida (1 y 100). Resultado: 0,1,100,101.' },
          { letra: 'b', texto: '1, 2, 99, 100', correcta: false,
            explicacion: 'No. Son valores internos a las particiones, pero con AVF de 2 valores no se incluyen los justamente fuera de los límites (0 y 101).' },
          { letra: 'c', texto: '0, 1, 50, 100, 101', correcta: false,
            explicacion: 'No. Incluye el 50 de más; el AVF no necesita representantes intermedios.' },
          { letra: 'd', texto: '0, 1, 2, 99, 100, 101', correcta: false,
            explicacion: 'No. Ese conjunto corresponde al AVF de 3 valores (límite-1, límite, límite+1); para 2 valores basta con el justo fuera y el límite.' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        enunciado: 'Aplicando análisis del valor frontera de 3 valores para el rango 1-100, ¿cuál es el conjunto MÍNIMO?',
        nota: 'AVF 3 valores: límite-1, límite, límite+1 → 0,1,2 y 99,100,101',
        opciones: [
          { letra: 'a', texto: '0, 1, 2, 99, 100, 101', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores usa para cada frontera límite-1, límite y límite+1. Frontera inferior: 0,1,2. Frontera superior: 99,100,101.' },
          { letra: 'b', texto: '1, 2, 99, 100', correcta: false,
            explicacion: 'No. Con 3 valores faltan los adyacentes exteriores (0 y 101).' },
          { letra: 'c', texto: '0, 50, 100', correcta: false,
            explicacion: 'No. Mezcla partición de equivalencia con valores sueltos; le faltan los valores frontera +1 de ambas fronteras.' },
          { letra: 'd', texto: '0, 1, 100, 101', correcta: false,
            explicacion: 'No. Ese es el conjunto de AVF de 2 valores; el de 3 valores añade 2 y 99.' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        enunciado: 'Un sistema tiene dos condiciones: "Cliente premium" (sí/no) y "Compra > 100€" (sí/no). La acción es "Envío gratuito" si es premium O la compra > 100€. ¿Cuántas reglas tiene la tabla de decisión completa?',
        nota: '2 condiciones × 2 valores = 4 reglas',
        opciones: [
          { letra: 'a', texto: '2', correcta: false,
            explicacion: 'No. El número de reglas no es el número de condiciones, sino el producto de los valores de cada condición.' },
          { letra: 'b', texto: '4', correcta: true,
            explicacion: 'Correcto. Cada condición booleana tiene 2 valores. Reglas completas = 2 × 2 = 4 combinaciones únicas.' },
          { letra: 'c', texto: '6', correcta: false,
            explicacion: 'No. 6 no resulta de multiplicar los valores de dos condiciones booleanas.' },
          { letra: 'd', texto: '8', correcta: false,
            explicacion: 'No. 8 sería el resultado con TRES condiciones booleanas (2^3); con dos condiciones son 2^2 = 4.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        enunciado: '¿Qué cobertura es más fuerte (subsume a la otra)?',
        opciones: [
          { letra: 'a', texto: 'Cobertura de sentencia', correcta: false,
            explicacion: 'No. La cobertura de sentencia es la más débil: solo exige ejecutar cada sentencia al menos una vez.' },
          { letra: 'b', texto: 'Cobertura de rama', correcta: true,
            explicacion: 'Correcto. La cobertura de rama exige probar todos los resultados de cada decisión (verdadero/falso) y, al hacerlo, ejecuta todas las sentencias: por tanto subsume a la cobertura de sentencia (100% rama implica 100% sentencia).' },
          { letra: 'c', texto: 'Ambas son equivalentes', correcta: false,
            explicacion: 'No. La cobertura de rama es más exigente y subsume a la de sentencia; no son equivalentes.' },
          { letra: 'd', texto: 'Depende del lenguaje de programación', correcta: false,
            explicacion: 'No. La relación de subsumptión entre cobertura de rama y de sentencia es un concepto de la técnica, independiente del lenguaje.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba basada en la experiencia utiliza sesiones de prueba no predefinidas donde el tester aprende y prueba simultáneamente?',
        opciones: [
          { letra: 'a', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores usa la experiencia para anticipar defectos típicos y diseñar pruebas dirigidas a ellos, pero las sesiones no están tan libres.' },
          { letra: 'b', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. Se apoya en una lista (checklist) de aspectos a probar; el recorrido está guiado por la lista, no es libre.' },
          { letra: 'c', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria usa sesiones no predefinidas: el tester aprende el sistema mientras prueba, guiado por un "contrato de prueba" (charter) con un objetivo y límites de tiempo.' },
          { letra: 'd', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. La partición de equivalencia es una técnica de caja negra (basada en especificación), no basada en la experiencia.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: 'En el desarrollo guiado por prueba de aceptación (ATDD), ¿de dónde se derivan los casos de prueba?',
        opciones: [
          { letra: 'a', texto: 'Del código fuente', correcta: false,
            explicacion: 'No. Derivar del código sería una técnica de caja blanca; ATDD parte de ejemplos de comportamiento acordados.' },
          { letra: 'b', texto: 'De los criterios de aceptación', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de prueba de aceptación se derivan de los criterios de aceptación de la historia de usuario, ANTES de escribir el código.' },
          { letra: 'c', texto: 'De la estructura interna del sistema', correcta: false,
            explicacion: 'No. Eso es caja blanca; ATDD es un enfoque colaborativo centrado en el comportamiento observable.' },
          { letra: 'd', texto: 'De las herramientas de automatización', correcta: false,
            explicacion: 'No. Las herramientas automatizan, pero no son la fuente de la que se derivan los casos de prueba.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué formato se utiliza comúnmente para escribir criterios de aceptación?',
        opciones: [
          { letra: 'a', texto: 'Como/quiero/para', correcta: false,
            explicacion: 'No. Ese formato es para historias de usuario ("Como [rol] quiero [función] para [beneficio]"), no para los criterios de aceptación.' },
          { letra: 'b', texto: 'Dado/cuando/entonces (Given/When/Then)', correcta: true,
            explicacion: 'Correcto. Los criterios de aceptación suelen escribirse en formato Given/When/Then: precondiciones, acción y resultado esperado observable.' },
          { letra: 'c', texto: 'Si/entonces/sino', correcta: false,
            explicacion: 'No. "Si/entonces/sino" es una estructura de programación condiciona, no el formato estándar de criterios de aceptación.' },
          { letra: 'd', texto: 'Para/cuando/por qué', correcta: false,
            explicacion: 'No. No es un formato estándar reconocido para criterios de aceptación.' }
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K3',
        enunciado: 'Una máquina expendedora tiene estados: [Esperando], [MonedaInsertada], [ProductoSeleccionado], [Entregado]. Si el usuario puede insertar moneda, seleccionar producto, cancelar y recibir cambio, ¿cuántas transiciones válidas básicas existen como mínimo?',
        nota: 'Esperando→Moneda, Moneda→Producto, Producto→Entregado, Moneda→Esperando, Producto→Esperando = 5',
        opciones: [
          { letra: 'a', texto: '3', correcta: false,
            explicacion: 'No. Con 3 transiciones faltarían, por ejemplo, las de cancelación y las secuencias de entrega.' },
          { letra: 'b', texto: '4', correcta: false,
            explicacion: 'No. El flujo feliz (3 transiciones) más las cancelaciones dan más de 4 transiciones mínimas válidas.' },
          { letra: 'c', texto: '5', correcta: true,
            explicacion: 'Correcto. Transiciones válidas básicas: Esperando→MonedaInsertada, MonedaInsertada→ProductoSeleccionado, ProductoSeleccionado→Entregado, MonedaInsertada→Esperando (cancelar), ProductoSeleccionado→Esperando (cancelar) = 5.' },
          { letra: 'd', texto: '6', correcta: false,
            explicacion: 'No. Contar "recibir cambio" como transición extra o duplicar el flujo daría 6, pero las válidas mínimas básicas son 5.' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un riesgo de producto?',
        opciones: [
          { letra: 'a', texto: 'La dirección traslada a dos probadores a otro proyecto', correcta: false,
            explicacion: 'No. Eso es un riesgo de proyecto: afecta a la disponibilidad de recursos y a la planificación.' },
          { letra: 'b', texto: 'Falta de presupuesto para herramientas de prueba', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto: amenaza la ejecución y la financiación, no a la calidad del producto.' },
          { letra: 'c', texto: 'El sistema tarda en responder más de lo pactado con el usuario', correcta: true,
            explicacion: 'Correcto. Es un riesgo de producto: amenaza la calidad del propio sistema (incumplimiento de un requisito no funcional de rendimiento).' },
          { letra: 'd', texto: 'Los implicados tienen expectativas imprecisas', correcta: false,
            explicacion: 'No. Las expectativas imprecisas de los implicados son un riesgo de proyecto (pueden cambiar el alcance y generar retrabajo).' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un riesgo de proyecto?',
        opciones: [
          { letra: 'a', texto: 'El sistema incumple las normas de seguridad exigidas', correcta: false,
            explicacion: 'No. Incumplir estándares de seguridad es un riesgo de producto: afecta a la calidad y aceptación del sistema.' },
          { letra: 'b', texto: 'Las personas discapacitadas tienen problemas al usar el sistema', correcta: false,
            explicacion: 'No. Es un riesgo de producto (deficiencia de usabilidad/accesibilidad del propio sistema).' },
          { letra: 'c', texto: 'El tiempo de respuesta supera los requisitos', correcta: false,
            explicacion: 'No. El rendimiento insuficiente es un riesgo de producto, no de proyecto.' },
          { letra: 'd', texto: 'Los implicados tienen expectativas imprecisas', correcta: true,
            explicacion: 'Correcto. Es un riesgo de proyecto: afecta a la planificación, el alcance y las posibilidades de entregar a tiempo; no es una amenaza directa a la calidad del producto.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        enunciado: 'Se estima una tarea con: optimista = 2 h, más probable = 11 h, pesimista = 14 h. ¿Cuál es la estimación según el método de tres puntos?',
        nota: 'E = (2 + 4×11 + 14) / 6 = (2+44+14)/6 = 60/6 = 10',
        opciones: [
          { letra: 'a', texto: '9 horas', correcta: false,
            explicacion: 'No. 9 no es el resultado de la fórmula: (2 + 4·11 + 14)/6 = 60/6 = 10.' },
          { letra: 'b', texto: '10 horas', correcta: true,
            explicacion: 'Correcto. Estimación de tres puntos: E = (O + 4M + P)/6 = (2 + 4×11 + 14)/6 = 60/6 = 10.' },
          { letra: 'c', texto: '11 horas', correcta: false,
            explicacion: 'No. 11 es el valor "más probable" directamente, pero el método de tres puntos pondera con los valores optimista y pesimista.' },
          { letra: 'd', texto: '14 horas', correcta: false,
            explicacion: 'No. 14 es el pesimista; la fórmula pondera y combina los tres valores.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K3',
        enunciado: 'Usando los mismos datos (O=2, M=11, P=14), ¿cuál es la desviación estándar?',
        nota: 'SD = (14-2)/6 = 12/6 = 2',
        opciones: [
          { letra: 'a', texto: '1', correcta: false,
            explicacion: 'No. SD = (P - O)/6 = (14 - 2)/6 = 2, no 1.' },
          { letra: 'b', texto: '2', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (14 - 2)/6 = 12/6 = 2.' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. 3 no resulta de (14-2)/6.' },
          { letra: 'd', texto: '4', correcta: false,
            explicacion: 'No. 4 sería la semidiferencia (P-O)/3; la fórmula correcta divide entre 6.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de prueba, ¿qué tipo de pruebas debería haber en MAYOR cantidad?',
        opciones: [
          { letra: 'a', texto: 'Pruebas de sistema', correcta: false,
            explicacion: 'No. La cúspide de la pirámide (menos cantidad) corresponde a las pruebas de sistema/E2E.' },
          { letra: 'b', texto: 'Pruebas de aceptación', correcta: false,
            explicacion: 'No. Las pruebas de aceptación están arriba en la pirámide: pocas y lentas.' },
          { letra: 'c', texto: 'Pruebas de componente (unitarias)', correcta: true,
            explicacion: 'Correcto. La base de la pirámide son las pruebas de componente/unitarias: muchas, rápidas y baratas; hacia arriba van decreciendo hasta las pocas E2E.' },
          { letra: 'd', texto: 'Pruebas de integración de sistemas', correcta: false,
            explicacion: 'No. Están en un nivel intermedio de la pirámide, en menor cantidad que las unitarias.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de calidad de producto?',
        opciones: [
          { letra: 'a', texto: 'Número de casos de prueba ejecutados', correcta: false,
            explicacion: 'No. Es una métrica de avance de la prueba (progreso del esfuerzo), no de la calidad del producto.' },
          { letra: 'b', texto: 'Número de defectos encontrados', correcta: false,
            explicacion: 'No. Contar defectos es una métrica de defectos/proceso; dice poco de la calidad del producto por sí sola.' },
          { letra: 'c', texto: 'Tiempo medio entre fallos (MTBF)', correcta: true,
            explicacion: 'Correcto. El MTBF (disponibilidad, fiabilidad) mide la calidad del producto en funcionamiento; es una métrica de calidad de producto.' },
          { letra: 'd', texto: 'Horas invertidas en pruebas', correcta: false,
            explicacion: 'No. Las horas son una métrica de esfuerzo, no de la calidad del producto.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K1',
        enunciado: '¿Qué documento se produce al finalizar las actividades de prueba de un proyecto?',
        opciones: [
          { letra: 'a', texto: 'Informe de avance de la prueba', correcta: false,
            explicacion: 'No. El informe de avance se emite DURANTE la prueba para reportar el estado, no al finalizarla.' },
          { letra: 'b', texto: 'Informe de compleción de la prueba', correcta: true,
            explicacion: 'Correcto. Al finalizar las actividades de prueba se entrega el informe de compleción: resumen de pruebas, métricas, defectos no resueltos, riesgos no mitigados y lecciones aprendidas.' },
          { letra: 'c', texto: 'Plan de prueba', correcta: false,
            explicacion: 'No. El plan de prueba se elabora al INICIO, antes de ejecutar las pruebas.' },
          { letra: 'd', texto: 'Informe de defectos', correcta: false,
            explicacion: 'No. El informe de defectos describe defectos individuales a lo largo del proceso; no es el documento de cierre de la prueba.' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes opciones describe la gestión de la configuración en el contexto de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Definir los objetivos de prueba del proyecto', correcta: false,
            explicacion: 'No. Definir objetivos es parte de la planificación de la prueba, no de la gestión de configuración.' },
          { letra: 'b', texto: 'Controlar las versiones de los productos de prueba y asegurar que todos trabajan con la versión correcta', correcta: true,
            explicacion: 'Correcto. La gestión de configuración identifica, versiona y controla los productos de prueba (planes, casos, scripts, datos) y garantiza que todos trabajan con la versión correcta.' },
          { letra: 'c', texto: 'Estimar el esfuerzo necesario para las pruebas', correcta: false,
            explicacion: 'No. Estimar es una técnica de planificación (tres puntos, póker), no gestión de configuración.' },
          { letra: 'd', texto: 'Identificar los riesgos del proyecto', correcta: false,
            explicacion: 'No. Identificar riesgos es parte de la gestión de riesgos.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué información NO debería faltar en un informe de defecto?',
        opciones: [
          { letra: 'a', texto: 'El nombre del desarrollador que debe corregirlo', correcta: false,
            explicacion: 'No es lo esencial. El desarrollador se asigna posteriormente en el triaje; lo imprescindible es el contenido que permite reproducir y entender el defecto.' },
          { letra: 'b', texto: 'Pasos para reproducir el defecto y resultado esperado vs real', correcta: true,
            explicacion: 'Correcto. Un informe de defecto debe incluir, como mínimo, pasos para reproducir, resultado esperado vs real, entorno, título y evidencias; la asignación del desarrollador se decide después.' },
          { letra: 'c', texto: 'El salario del tester que lo reporta', correcta: false,
            explicacion: 'No. Es un dato sin relación con el defecto y de carácter personal; no forma parte del informe.' },
          { letra: 'd', texto: 'El nombre del proyecto completo', correcta: false,
            explicacion: 'No es lo esencial. Puede aparecer como contexto, pero no es la información crítica para reproducir el defecto.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es SonarQube?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de ejecución de pruebas', correcta: false,
            explicacion: 'No. Las herramientas de ejecución ejecutan casos de prueba (Selenium, JUnit, pytest); SonarQube no ejecuta pruebas.' },
          { letra: 'b', texto: 'Herramienta de prueba estática (análisis estático de código)', correcta: true,
            explicacion: 'Correcto. SonarQube analiza el código fuente sin ejecutarlo (análisis estático): detecta violaciones de estándares, código duplicado, malos olores y problemas de mantenibilidad.' },
          { letra: 'c', texto: 'Herramienta de gestión de pruebas', correcta: false,
            explicacion: 'No. Las herramientas de gestión (Jira, TestRail) administran casos, ejecuciones y defectos; no analizan código.' },
          { letra: 'd', texto: 'Herramienta de pruebas de rendimiento', correcta: false,
            explicacion: 'No. Las herramientas de rendimiento (como JMeter) inducen carga y miden tiempos; SonarQube no hace eso.' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un riesgo potencial de la automatización de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Reduce el tiempo de ejecución de las pruebas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja: la automatización reduce el tiempo de ejecución de pruebas repetitivas.' },
          { letra: 'b', texto: 'Puede no dedicarse suficiente esfuerzo al mantenimiento de las pruebas automatizadas', correcta: true,
            explicacion: 'Correcto. Un riesgo real de la automatización es descuidar el mantenimiento de los scripts (que exigen actualizaciones constantes), lo que erosiona su valor.' },
          { letra: 'c', texto: 'Aumenta la cobertura de pruebas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja: la automatización puede aumentar la cobertura al ejecutar más pruebas en menos tiempo.' },
          { letra: 'd', texto: 'Proporciona retroalimentación más rápida', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja: la automatización da retroalimentación más rápida y consistente.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes herramientas se asocia con DevOps y CI/CD?',
        opciones: [
          { letra: 'a', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium es una herramienta de ejecución/automatización de pruebas web, no una herramienta de CD/CI en sí.' },
          { letra: 'b', texto: 'Jenkins', correcta: true,
            explicacion: 'Correcto. Jenkins es un servidor de integración continua/entrega continua (CI/CD) típico de entornos DevOps.' },
          { letra: 'c', texto: 'Jira', correcta: false,
            explicacion: 'No. Jira es una herramienta de gestión de proyectos/anomalías, no de integración continua.' },
          { letra: 'd', texto: 'TestRail', correcta: false,
            explicacion: 'No. TestRail es una herramienta de gestión de pruebas, no una herramienta de CI/CD.' }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);