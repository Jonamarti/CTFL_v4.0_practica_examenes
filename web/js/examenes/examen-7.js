/* examen-7.js — Datos del EXAMEN DE PRÁCTICA 7 (CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-7',
    titulo: 'EXAMEN DE PRÁCTICA 7',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un objetivo de la prueba de software según ISTQB?',
        opciones: [
          { letra: 'a', texto: 'Probar que el software funciona correctamente en todas las circunstancias', correcta: false,
            explicacion: 'No. Las pruebas exhaustivas son imposibles; no se puede demostrar que funciona en todas las circunstancias.' },
          { letra: 'b', texto: 'Evaluar productos de trabajo y proporcionar información sobre la calidad', correcta: true,
            explicacion: 'Correcto. Evaluar productos de trabajo (requisitos, diseño, código) y aportar información objetiva sobre la calidad son objetivos clave de la prueba.' },
          { letra: 'c', texto: 'Reemplazar al equipo de desarrollo en la corrección de errores', correcta: false,
            explicacion: 'No. La prueba detecta y reporta; la corrección es responsabilidad del desarrollo (depuración).' },
          { letra: 'd', texto: 'Asegurar que el software se entregará antes del plazo previsto', correcta: false,
            explicacion: 'No. La prueba no garantiza plazos; su función es evaluar la calidad y reducir el riesgo.' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: 'Un tester ejecuta una prueba y obtiene un resultado distinto al esperado. Reporta el problema. Un desarrollador encuentra que la causa es un cálculo erróneo en una función. Según ISTQB, ¿qué relación hay entre el resultado incorrecto y el cálculo erróneo?',
        opciones: [
          { letra: 'a', texto: 'El resultado incorrecto es el defecto; el cálculo erróneo es el fallo', correcta: false,
            explicacion: 'No. Está invertido: el defecto está en el código (cálculo erróneo) y el fallo es el resultado observable (resultado incorrecto).' },
          { letra: 'b', texto: 'El cálculo erróneo es el defecto; el resultado incorrecto es el fallo', correcta: true,
            explicacion: 'Correcto. El defecto es la anomalía en el código (cálculo erróneo); el fallo es la manifestación observable del defecto durante la ejecución (resultado incorrecto).' },
          { letra: 'c', texto: 'Ambos son la misma cosa: un defecto', correcta: false,
            explicacion: 'No. Son conceptos distintos: uno está en el producto (defecto) y el otro es observable al ejecutar (fallo).' },
          { letra: 'd', texto: 'El cálculo errócono es un error humano; el resultado incorrecto es un defecto', correcta: false,
            explicacion: 'No. El error humano es la acción que creó el defecto; el defecto está en el código y el fallo es observable.' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué principio de prueba se basa en la ley de Pareto y señala que la mayoría de defectos se concentran en un pequeño número de módulos?',
        opciones: [
          { letra: 'a', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. La paradoja del pesticida habla de la pérdida de eficacia de las pruebas repetidas.' },
          { letra: 'b', texto: 'Falacia de ausencia de errores', correcta: false,
            explicacion: 'No. La falacia advierte que un sistema sin errores conocidos puede no ser utilizable.' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: true,
            explicacion: 'Correcto. El principio de agrupación de defectos (basado en la ley de Pareto 80/20) establece que un pequeño porcentaje de módulos contiene la mayoría de los defectos.' },
          { letra: 'd', texto: 'Pruebas dependientes del contexto', correcta: false,
            explicacion: 'No. Ese principio indica que la estrategia de prueba varía según el contexto (aplicación web vs sistema crítico).' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es una característica de una buena práctica de prueba?',
        opciones: [
          { letra: 'a', texto: 'Ejecutar las mismas pruebas una y otra vez hasta encontrar todos los defectos', correcta: false,
            explicacion: 'No. Repetir las mismas pruebas es ineficaz por la paradoja del pesticida; hay que actualizarlas.' },
          { letra: 'b', texto: 'Incluir tanto prueba dinámica como estática durante el ciclo de vida', correcta: true,
            explicacion: 'Correcto. Las buenas prácticas combinan ambas: la estática (revisiones, análisis) para defectos tempranos y la dinámica (ejecución) para defectos de comportamiento.' },
          { letra: 'c', texto: 'Realizar todas las pruebas al final del proyecto', correcta: false,
            explicacion: 'No. Las pruebas al final son tardías y caras; el enfoque recomendado es el shift-left.' },
          { letra: 'd', texto: 'Evitar documentar los resultados de la prueba', correcta: false,
            explicacion: 'No. La documentación es esencial para trazabilidad, comunicación y aprendizaje del proyecto.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué nivel de independencia de la prueba aporta la mayor objetividad y menor sesgo?',
        opciones: [
          { letra: 'a', texto: 'El desarrollador que escribió el código se prueba a sí mismo', correcta: false,
            explicacion: 'No. Es el nivel de menor independencia y mayor sesgo.' },
          { letra: 'b', texto: 'Un par del mismo equipo de desarrollo', correcta: false,
            explicacion: 'No. Aporta cierta independencia, pero menos que un rol externo.' },
          { letra: 'c', texto: 'Un tester independiente externo a la organización', correcta: true,
            explicacion: 'Correcto. Un tester externo es el nivel con máxima independencia, menor sesgo y mayor objetividad.' },
          { letra: 'd', texto: 'El director del proyecto que supervisa la prueba', correcta: false,
            explicacion: 'No. El director puede tener conflictos de interés entre calidad y plazos/presupuesto.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: 'Un equipo de prueba ejecuta 500 casos de prueba y encuentra 15 defectos. Sin embargo, la dirección se sorprende cuando los usuarios reportan 30 defectos más en producción. ¿Qué afirmación es más coherente con la situación?',
        opciones: [
          { letra: 'a', texto: 'Las pruebas exhaustivas son imposibles; siempre puede haber defectos no detectados', correcta: true,
            explicacion: 'Correcto. Este escenario ilustra que probarlo todo es imposible y siempre existe un riesgo residual de defectos no detectados, especialmente en áreas no cubiertas por las pruebas.' },
          { letra: 'b', texto: 'La prueba de aceptación siempre detecta todos los defectos', correcta: false,
            explicacion: 'No. Ninguna fase de prueba garantiza la detección completa de defectos.' },
          { letra: 'c', texto: 'Los usuarios finales no deberían encontrar defectos', correcta: false,
            explicacion: 'No. Es normal que los usuarios encuentren defectos que las pruebas formales no cubrieron.' },
          { letra: 'd', texto: 'Los 15 defectos encontrados invalidan todo el trabajo de prueba', correcta: false,
            explicacion: 'No. La prueba reduce el riesgo, pero no lo elimina; encontrar defectos es parte del proceso normal.' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes describe correctamente la relación entre los defectos encontrados y el coste de corrección a lo largo del ciclo de vida?',
        opciones: [
          { letra: 'a', texto: 'El coste es el mismo en cualquier fase del desarrollo', correcta: false,
            explicacion: 'No. El coste de corrección crece exponencialmente cuanto más tarde se detecta el defecto.' },
          { letra: 'b', texto: 'Es más barato corregir defectos detectados en producción que en fase de requisitos', correcta: false,
            explicacion: 'No. Es al revés: en producción el coste es máximo por cambios, retrabajo y daños colaterales.' },
          { letra: 'c', texto: 'El coste de corrección crece cuanto más tarde se detecta el defecto', correcta: true,
            explicacion: 'Correcto. La curva de coste de corrección muestra que un defecto detectado en requisitos cuesta mucho menos que uno detectado en producción.' },
          { letra: 'd', texto: 'Detectar defectos tempranos siempre es más caro que detectarlos tarde', correcta: false,
            explicacion: 'No. Es al revés: detectar temprano reduce el coste de corrección, re-trabajo y daños colaterales.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba verifica que los componentes individuales funcionan correctamente antes de integrarlos?',
        opciones: [
          { letra: 'a', texto: 'Prueba de integración de componentes', correcta: false,
            explicacion: 'No. La integración de componentes prueba las interfaces entre componentes ya integrados.' },
          { letra: 'b', texto: 'Prueba de componente', correcta: true,
            explicacion: 'Correcto. La prueba de componente (o unitaria) valida cada componente de forma aislada, antes de integrarlos con otros.' },
          { letra: 'c', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La de sistema prueba el conjunto completo, no componentes aislados.' },
          { letra: 'd', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario, no componentes individuales.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K2',
        enunciado: 'En el modelo V de desarrollo, ¿qué relación existe entre los niveles de desarrollo y los niveles de prueba?',
        opciones: [
          { letra: 'a', texto: 'Los niveles de prueba no se relacionan con los de desarrollo', correcta: false,
            explicacion: 'No. En el modelo V cada nivel de prueba se alinea con su nivel de desarrollo correspondiente.' },
          { letra: 'b', texto: 'Cada nivel de desarrollo se prueba en un nivel de prueba superior', correcta: false,
            explicacion: 'No. Cada nivel de desarrollo se verifica en su nivel de prueba correspondiente, no en uno superior.' },
          { letra: 'c', texto: 'Cada nivel de desarrollo tiene su nivel de prueba correspondiente en el lado derecho del V', correcta: true,
            explicacion: 'Correcto. El modelo V asocia cada fase de desarrollo con su fase de prueba correspondiente: requisitos→aceptación, diseño→sistema, etc.' },
          { letra: 'd', texto: 'Solo existe un nivel de prueba al final del modelo V', correcta: false,
            explicacion: 'No. El modelo V contempla múltiples niveles de prueba en paralelo con las fases de desarrollo.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una característica de la prueba de aceptación beta?',
        opciones: [
          { letra: 'a', texto: 'Se realiza en las instalaciones del desarrollador con usuarios simulados', correcta: false,
            explicacion: 'No. Esa descripción corresponde a la aceptación alfa.' },
          { letra: 'b', texto: 'La realizan usuarios finales en su propio entorno real', correcta: true,
            explicacion: 'Correcto. La aceptación beta se ejecuta en el entorno real del usuario final, con datos y escenarios reales, para validar la preparación del sistema.' },
          { letra: 'c', texto: 'Solo valida requisitos no funcionales de rendimiento', correcta: false,
            explicacion: 'No. La beta valida tanto requisitos funcionales como no funcionales.' },
          { letra: 'd', texto: 'Es una prueba del equipo de desarrollo', correcta: false,
            explicacion: 'No. La beta la ejecutan los usuarios finales, no el equipo de desarrollo.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué diferencia hay entre la prueba funcional y la no funcional?',
        opciones: [
          { letra: 'a', texto: 'La funcional se aplica solo en producción; la no funcional solo en desarrollo', correcta: false,
            explicacion: 'No. Ambas pueden aplicarse en cualquier fase del ciclo de vida.' },
          { letra: 'b', texto: 'La funcional evalúa QUÉ hace el sistema; la no funcional evalúa CÓMO se comporta', correcta: true,
            explicacion: 'Correcto. La funcional valida el comportamiento funcional (requisitos, reglas de negocio); la no funcional evalúa atributos como rendimiento, seguridad y usabilidad.' },
          { letra: 'c', texto: 'Son exactamente lo mismo con diferentes nombres', correcta: false,
            explicacion: 'No. Evalúan aspectos distintos del sistema: funcionalidad vs calidad no funcional.' },
          { letra: 'd', texto: 'La funcional solo la hacen los testers; la no funcional solo los desarrolladores', correcta: false,
            explicacion: 'No. Ambas pueden ser ejecutadas por cualquier rol con la preparación adecuada.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuándo se realiza la prueba de regresión?',
        opciones: [
          { letra: 'a', texto: 'Solo cuando se detecta un defecto crítico', correcta: false,
            explicacion: 'No. La regresión se ejecuta tras cualquier cambio relevante, no solo ante defectos críticos.' },
          { letra: 'b', texto: 'Después de cada cambio, para verificar que no se han introducido defectos en áreas previamente funcionales', correcta: true,
            explicacion: 'Correcto. La prueba de regresión se ejecuta tras cada cambio (corrección, funcionalidad nueva, refactor) para comprobar que no se rompieron partes existentes del sistema.' },
          { letra: 'c', texto: 'Solo antes de la entrega final del proyecto', correcta: false,
            explicacion: 'No. La regresión debe hacerse de forma continua, no solo al final.' },
          { letra: 'd', texto: 'Nunca, si las pruebas de confirmación son exitosas', correcta: false,
            explicacion: 'No. La confirmación verifica el defecto corregido; la regresión cubre el resto del sistema. Una no sustituye a la otra.' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué tipo de prueba no funcional evalúa la capacidad del sistema para resistir ataques no autorizados?',
        opciones: [
          { letra: 'a', texto: 'Prueba de usabilidad', correcta: false,
            explicacion: 'No. La usabilidad evalúa la facilidad de uso, no la resistencia a ataques.' },
          { letra: 'b', texto: 'Prueba de fiabilidad', correcta: false,
            explicacion: 'No. La fiabilidad mide la continuidad del servicio, no la protección ante ataques.' },
          { letra: 'c', texto: 'Prueba de seguridad', correcta: true,
            explicacion: 'Correcto. La prueba de seguridad evalúa la resistencia del sistema ante accesos no autorizados, vulnerabilidades y ataques.' },
          { letra: 'd', texto: 'Prueba de compatibilidad', correcta: false,
            explicacion: 'No. La compatibilidad verifica que el sistema funciona en distintos entornos, no su seguridad.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una diferencia clave entre la revisión informal y la inspección?',
        opciones: [
          { letra: 'a', texto: 'La inspección es menos formal que la revisión informal', correcta: false,
            explicacion: 'No. Es al revés: la inspección es la más formal; la informal es la menos formal.' },
          { letra: 'b', texto: 'La revisión informal sigue un proceso definido con roles y métricas; la inspección no', correcta: false,
            explicacion: 'No. La inspección sí tiene proceso, roles y métricas; la informal no tiene proceso estructurado.' },
          { letra: 'c', texto: 'La inspección sigue un proceso riguroso con roles definidos y métricas; la informal no tiene proceso establecido', correcta: true,
            explicacion: 'Correcto. La inspección es la más formal (proceso completo, roles, métricas); la informal es ad-hoc, sin proceso establecido ni roles definidos.' },
          { letra: 'd', texto: 'Ambas son exactamente iguales en formalidad', correcta: false,
            explicacion: 'No. Hay un espectro de formalidad: informal < guiada < técnica < inspección.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: 'En una inspección, ¿qué rol es responsable de decidir si el producto de trabajo necesita correcciones y de asignar las acciones correctoras?',
        opciones: [
          { letra: 'a', texto: 'El moderador', correcta: false,
            explicacion: 'No. El moderador dirige la reunión, pero no decide sobre las correcciones.' },
          { letra: 'b', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor implementa las correcciones, pero no decide sobre ellas.' },
          { letra: 'c', texto: 'El gestor', correcta: true,
            explicacion: 'Correcto. El gestor decide sobre la ejecución de la revisión, asigna recursos y determina si las acciones correctoras se aplican.' },
          { letra: 'd', texto: 'El escriba', correcta: false,
            explicacion: 'No. El escriba registra los hallazgos, pero no decide sobre correcciones.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un factor de FRACASO para las revisiones?',
        opciones: [
          { letra: 'a', texto: 'Dar tiempo suficiente de preparación a los participantes', correcta: false,
            explicacion: 'No. Dar tiempo de preparación es un factor de éxito.' },
          { letra: 'b', texto: 'Revisar fragmentos pequeños del producto de trabajo', correcta: false,
            explicacion: 'No. Los fragmentos pequeños son un factor de éxito.' },
          { letra: 'c', texto: 'Evaluar el desempeño de los participantes durante la revisión', correcta: true,
            explicacion: 'Correcto. Evaluar a las personas en la revisión genera un clima negativo y reduce la eficacia; la revisión debe centrarse en el producto, no en las personas.' },
          { letra: 'd', texto: 'Definir objetivos y criterios de salida claros', correcta: false,
            explicacion: 'No. Los objetivos claros son un factor de éxito.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué tipo de prueba estática se aplica al código fuente para detectar violaciones de estándares de codificación sin ejecutarlo?',
        opciones: [
          { letra: 'a', texto: 'Prueba de humo', correcta: false,
            explicacion: 'No. La de humo es una prueba dinámica rápida.' },
          { letra: 'b', texto: 'Análisis estático', correcta: true,
            explicacion: 'Correcto. El análisis estático examina el código sin ejecutarlo, detectando violaciones de estándares, código muerto, complejidad cicломática y otros problemas.' },
          { letra: 'c', texto: 'Prueba de regresión', correcta: false,
            explicacion: 'No. La regresión es una prueba dinámica que re-ejecuta pruebas existentes.' },
          { letra: 'd', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación es una prueba dinámica que valida necesidades del usuario.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un beneficio de detectar defectos en etapas tempranas del ciclo de vida?',
        opciones: [
          { letra: 'a', texto: 'Aumenta el coste total del proyecto', correcta: false,
            explicacion: 'No. Detectar temprano reduce el coste, no lo aumenta.' },
          { letra: 'b', texto: 'Reduce el coste de corrección porque los defectos se encuentran antes de que se propaguen', correcta: true,
            explicacion: 'Correcto. Corregir un defecto en requisitos o diseño es mucho más barato que corregirlo en código compilado o en producción.' },
          { letra: 'c', texto: 'Elimina la necesidad de probar más adelante', correcta: false,
            explicacion: 'No. La detección temprana reduce el coste, pero no elimina la necesidad de pruebas posteriores.' },
          { letra: 'd', texto: 'Garantiza que no habrá defectos en producción', correcta: false,
            explicacion: 'No. Reducir el coste no elimina el riesgo de defectos en producción.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes técnicas de caja negra se basa en modelar el comportamiento del sistema como una serie de estados y transiciones?',
        opciones: [
          { letra: 'a', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. La partición de equivalencia divide el dominio de entrada en clases.' },
          { letra: 'b', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. El AVF se centra en los límites de las particiones.' },
          { letra: 'c', texto: 'Transición de estados', correcta: true,
            explicacion: 'Correcto. La transición de estados modela el sistema como un conjunto de estados con transiciones entre ellos; los casos de prueba se derivan de transiciones válidas e inválidas.' },
          { letra: 'd', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión modela combinaciones de condiciones y acciones, no estados y transiciones.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <-5→-6, -5 a 25→-5 y 25, >25→26',
        enunciado: 'Un sistema de control de acceso acepta temperaturas de -5°C a 25°C inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        opciones: [
          { letra: 'a', texto: '-6, -5, 10, 25, 26', correcta: false,
            explicacion: 'No. El 10 es redundante en el conjunto mínimo; basta con representar la partición válida con sus límites.' },
          { letra: 'b', texto: '-5, 25', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las particiones inválidas (menor de -5 y mayor de 25).' },
          { letra: 'c', texto: '-6, -5, 25, 26', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida inferior (-6), válida representada por sus límites (-5 y 25) e inválida superior (26).' },
          { letra: 'd', texto: '-10, 0, 30', correcta: false,
            explicacion: 'No. Los valores son inválidos pero no representan las fronteras de la partición válida de forma directa.' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: -6,-5 y 25,26',
        enunciado: 'Para el mismo rango de temperatura (-5 a 25), aplicando AVF de 2 valores, ¿cuáles son los valores a probar?',
        opciones: [
          { letra: 'a', texto: '-5, 0, 25', correcta: false,
            explicacion: 'No. No incluye los valores inmediatamente exteriores a las fronteras (-6 y 26).' },
          { letra: 'b', texto: '-6, -5, -4, 24, 25, 26', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores (límite-1, límite, límite+1).' },
          { letra: 'c', texto: '-6, -5, 25, 26', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera: (-6,-5) y (25,26).' },
          { letra: 'd', texto: '-5, -4, 24, 25', correcta: false,
            explicacion: 'No. Son valores interiores; faltan los inmediatamente exteriores (-6 y 26).' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        nota: 'AVF 3 valores: -6,-5,-4 y 24,25,26',
        enunciado: 'Para el rango -5 a 25, aplicando AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        opciones: [
          { letra: 'a', texto: '-6, -5, 25, 26', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores; le faltan -4 y 24.' },
          { letra: 'b', texto: '-5, -4, 24, 25', correcta: false,
            explicacion: 'No. Le faltan los valores exteriores (-6 y 26).' },
          { letra: 'c', texto: '-6, -5, -4, 24, 25, 26', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 por frontera: (-6,-5,-4) y (24,25,26).' },
          { letra: 'd', texto: '-7, -6, -5, 25, 26, 27', correcta: false,
            explicacion: 'No. Los extremos -7 y 27 están fuera del rango inmediato de las fronteras.' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '2 × 2 = 4 reglas',
        enunciado: 'Un sistema deStreaming tiene dos condiciones: "Suscriptor activo" (sí/no) y "Menor de edad" (sí/no). El contenido se bloquea si es menor de edad Y no es suscriptor. ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '8', correcta: false,
            explicacion: 'No. 8 correspondería a tres condiciones (2^3).' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. 6 no resulta de combinar dos condiciones booleanas.' },
          { letra: 'c', texto: '4', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 = 4 combinaciones únicas de las dos condiciones booleanas.' },
          { letra: 'd', texto: '2', correcta: false,
            explicacion: 'No. 2 es el número de condiciones, no de reglas.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: 'Inicio→Reproduciendo, Reproduciendo→Pausado, Pausado→Reproduciendo, Reproduciendo→Detenido, Pausado→Detenido = 5',
        enunciado: 'Un reproductor de música tiene estados [Inicio], [Reproduciendo], [Pausado] y [Detenido]. Las acciones son: reproducir, pausar, reanudar y detener. ¿Cuántas transiciones válidas básicas existen como mínimo?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. No hay una sexta transición válida (Inicio no se conecta con Pausado ni Detenido directamente).' },
          { letra: 'b', texto: '4', correcta: false,
            explicacion: 'No. Con 4 transiciones faltaría una de las acciones disponibles.' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. Con 3 transiciones no se cubren todas las acciones posibles.' },
          { letra: 'd', texto: '5', correcta: true,
            explicacion: 'Correcto. Transiciones: Inicio→Reproduciendo, Reproduciendo→Pausado, Pausado→Reproduciendo, Reproduciendo→Detenido, Pausado→Detenido: 5 en total.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué afirmación es CORRECTA sobre la cobertura de rama y la cobertura de sentencia?',
        opciones: [
          { letra: 'a', texto: 'La cobertura de sentencia subsume a la de rama', correcta: false,
            explicacion: 'No. Es al revés: la de rama es más exigente.' },
          { letra: 'b', texto: '100% de cobertura de rama implica 100% de cobertura de sentencia', correcta: true,
            explicacion: 'Correcto. Al ejecutar ambos resultados de cada decisión (rama), se ejecutan todas las sentencias; por tanto, 100% de rama implica 100% de sentencia.' },
          { letra: 'c', texto: 'La cobertura de rama solo es aplicable a lenguajes procedimentales', correcta: false,
            explicacion: 'No. La cobertura de rama se aplica a cualquier lenguaje con decisiones (if, switch, bucles).' },
          { letra: 'd', texto: 'Ambas coberturas siempre tienen el mismo valor', correcta: false,
            explicacion: 'No. La de rama puede ser menor que la de sentencia si no se ejecutan ambas ramas de alguna decisión.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba basada en la experiencia se apoya en listas de comprobación (checklists) construidas a partir de la experiencia previa del equipo?',
        opciones: [
          { letra: 'a', texto: 'Prueba exploratoria', correcta: false,
            explicacion: 'No. La exploratoria usa charters, no listas de comprobación.' },
          { letra: 'b', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores anticipa defectos típicos, no usa una lista de verificación.' },
          { letra: 'c', texto: 'Prueba basada en lista de comprobación', correcta: true,
            explicacion: 'Correcto. La prueba basada en lista de comprobación usa una checklist de aspectos a verificar, construida a partir de la experiencia previa en proyectos similares.' },
          { letra: 'd', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. El AVF es una técnica de caja negra basada en la especificación.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: 'En el contexto de historias de usuario, ¿qué significa que una historia sea "Negotiable" según INVEST?',
        opciones: [
          { letra: 'a', texto: 'Que se puede implementar de forma independiente', correcta: false,
            explicacion: 'No. Eso corresponde a Independent (la I de INVEST).' },
          { letra: 'b', texto: 'Que los detalles de la implementación se pueden negociar entre negocio y desarrollo', correcta: true,
            explicacion: 'Correcto. Negotiable significa que la historia no es un contrato fijo; los detalles de implementación se pueden discutir y negociar entre las partes.' },
          { letra: 'c', texto: 'Que tiene un valor comercial medible', correcta: false,
            explicacion: 'No. Eso se refiere más a Valuable (la V de INVEST).' },
          { letra: 'd', texto: 'Que se puede probar de forma verificable', correcta: false,
            explicacion: 'No. Eso corresponde a Testable (la T de INVEST).' }
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué característica define una buena historia de usuario según el acrónimo INVEST?',
        opciones: [
          { letra: 'a', texto: 'Que contenga todos los detalles técnicos de implementación', correcta: false,
            explicacion: 'No. Una buena historia es Negociable y no debe contener todos los detalles técnicos.' },
          { letra: 'b', texto: 'Que sea lo bastante pequeña como para completarse en una iteración', correcta: true,
            explicacion: 'Correcto. La S de INVEST es Small: una historia debe ser lo bastante pequeña para estimarla y completarla dentro de una iteración.' },
          { letra: 'c', texto: 'Que dependa de otras historias para poder implementarse', correcta: false,
            explicacion: 'No. La I de INVEST es Independent: las historias deben ser lo más independientes posible.' },
          { letra: 'd', texto: 'Que tenga un plazo de entrega fijo e inamovible', correcta: false,
            explicacion: 'No. INVEST no habla de plazos fijos; las historias deben ser Negotiables.' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una amenaza al PRODUCTO (riesgo de producto)?',
        opciones: [
          { letra: 'a', texto: 'Falta de experiencia del equipo en la tecnología utilizada', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (recursos y competencia).' },
          { letra: 'b', texto: 'El sistema no cumple los requisitos de accesibilidad', correcta: true,
            explicacion: 'Correcto. Incumplir requisitos de accesibilidad amenaza la calidad del propio sistema: es un riesgo de producto.' },
          { letra: 'c', texto: 'El cronograma del proyecto se retrasa', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (plazos).' },
          { letra: 'd', texto: 'El presupuesto de las herramientas de prueba es insuficiente', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (recursos).' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de avance de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Tiempo medio entre fallos (MTBF)', correcta: false,
            explicacion: 'No. El MTBF es una métrica de calidad de producto (fiabilidad).' },
          { letra: 'b', texto: 'Porcentaje de casos de prueba ejecutados respecto al total planificado', correcta: true,
            explicacion: 'Correcto. El porcentaje de casos ejecutados, cobertura de requisitos y defectos abiertos son métricas de avance de las actividades de prueba.' },
          { letra: 'c', texto: 'Número total de requisitos del sistema', correcta: false,
            explicacion: 'No. Es un dato del alcance, no de avance de la prueba.' },
          { letra: 'd', texto: 'Coste total del desarrollo del software', correcta: false,
            explicacion: 'No. Es una métrica económica del proyecto, no de avance de la prueba.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        nota: 'E = (1 + 4×8 + 17)/6 = (1+32+17)/6 = 50/6 = 8,33',
        enunciado: 'Se estima una tarea con O=1, M=8 y P=17. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '8', correcta: false,
            explicacion: 'No. 8 es el valor "más probable"; la fórmula pondera también lo optimista y lo pesimista.' },
          { letra: 'b', texto: '8,33', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (1 + 32 + 17)/6 = 50/6 = 8,33.' },
          { letra: 'c', texto: '9', correcta: false,
            explicacion: 'No. 9 no resulta de dividir 50 entre 6.' },
          { letra: 'd', texto: '10', correcta: false,
            explicacion: 'No. 10 no corresponde al resultado de la fórmula de tres puntos.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K3',
        nota: 'SD = (17-1)/6 = 16/6 = 2,67',
        enunciado: 'Con los mismos datos (O=1, M=8, P=17), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '2', correcta: false,
            explicacion: 'No. 2 surgiría con P-O = 12; aquí P-O = 16.' },
          { letra: 'b', texto: '2,67', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (17 - 1)/6 = 16/6 = 2,67.' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. 3 no resulta de dividir 16 entre 6.' },
          { letra: 'd', texto: '4', correcta: false,
            explicacion: 'No. 4 correspondería a (P-O) = 24.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué documento describe el contexto, los objetivos, el alcance, la estrategia y los recursos de las actividades de prueba?',
        opciones: [
          { letra: 'a', texto: 'Informe de compleción', correcta: false,
            explicacion: 'No. El informe de compleción se elabora al finalizar las pruebas.' },
          { letra: 'b', texto: 'Plan de prueba', correcta: true,
            explicacion: 'Correcto. El plan de prueba define el contexto, objetivos, alcance, enfoque/estrategia, recursos y cronograma de las actividades de prueba.' },
          { letra: 'c', texto: 'Caso de prueba', correcta: false,
            explicacion: 'No. Un caso de prueba es un conjunto de pasos y resultados esperados para una condición concreta.' },
          { letra: 'd', texto: 'Informe de defectos', correcta: false,
            explicacion: 'No. El informe de defectos describe un defecto individual, no el plan global.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué información debería incluir un informe de defecto bien documentado?',
        opciones: [
          { letra: 'a', texto: 'Solo el nombre del tester que lo encontró', correcta: false,
            explicacion: 'No. Lo fundamental es la información técnica que permite reproducir y entender el defecto.' },
          { letra: 'b', texto: 'Pasos para reproducir, resultado esperado vs real, evidencias y severidad', correcta: true,
            explicacion: 'Correcto. Un buen informe incluye: título, pasos de reproducción, resultado esperado y actual, evidencias, severidad, prioridad y trazabilidad.' },
          { letra: 'c', texto: 'El código fuente corregido', correcta: false,
            explicacion: 'No. El informe describe el defecto; la corrección es responsabilidad del desarrollador.' },
          { letra: 'd', texto: 'La fecha del informe sin más detalles', correcta: false,
            explicacion: 'No. La fecha sola no permite reproducir ni diagnosticar el defecto.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes describe la gestión de riesgos en el contexto de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Identificar, analizar, priorizar y gestionar los riesgos del producto y del proyecto', correcta: true,
            explicacion: 'Correcto. La gestión de riesgos en prueba implica identificar riesgos de producto y proyecto, analizar su probabilidad e impacto, priorizarlos y definir respuestas (mitigar, transferir, aceptar, evitar).' },
          { letra: 'b', texto: 'Ejecutar todas las pruebas posibles para eliminar el riesgo', correcta: false,
            explicacion: 'No. Las pruebas exhaustivas son imposibles; la gestión de riesgos prioriza, no elimina todo el riesgo.' },
          { letra: 'c', texto: 'Ignorar los riesgos hasta que se materialicen', correcta: false,
            explicacion: 'No. Ignorar los riesgos es una mala práctica de gestión.' },
          { letra: 'd', texto: 'Asignar todos los riesgos a un solo responsable', correcta: false,
            explicacion: 'No. Los riesgos se distribuyen entre los implicados según su naturaleza y capacidad de mitigación.' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué es el "riesgo residual" en la gestión de riesgos de prueba?',
        opciones: [
          { letra: 'a', texto: 'El riesgo que queda después de aplicar todas las acciones de mitigación previstas', correcta: true,
            explicacion: 'Correcto. El riesgo residual es el nivel de riesgo que permanece después de implementar las acciones de mitigación (por ejemplo, tras ejecutar las pruebas planificadas).' },
          { letra: 'b', texto: 'El riesgo identificado al inicio del proyecto antes de cualquier acción', correcta: false,
            explicacion: 'No. Eso es el riesgo inherente o inicial, no el residual.' },
          { letra: 'c', texto: 'El riesgo transferido a un proveedor externo', correcta: false,
            explicacion: 'No. Transferir es una forma de responder al riesgo, distinta del concepto de residual.' },
          { letra: 'd', texto: 'El riesgo que solo afecta al equipo de desarrollo', correcta: false,
            explicacion: 'No. El riesgo residual puede afectar a cualquier área del producto o proyecto.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué proceso de gestión asegura que los productos de prueba estén versionados y que todos trabajen con la versión correcta?',
        opciones: [
          { letra: 'a', texto: 'Gestión de la comunicación', correcta: false,
            explicacion: 'No. La comunicación gestiona la información entre implicados, no las versiones.' },
          { letra: 'b', texto: 'Gestión de riesgos', correcta: false,
            explicacion: 'No. La gestión de riesgos identifica y prioriza amenazas, no versiona productos.' },
          { letra: 'c', texto: 'Gestión de la configuración', correcta: true,
            explicacion: 'Correcto. La gestión de configuración identifica, versiona y controla los productos de prueba y garantiza que todos usan la versión correcta.' },
          { letra: 'd', texto: 'Gestión de defectos', correcta: false,
            explicacion: 'No. La gestión de defectos administra el ciclo de vida de los defectos, no las versiones de productos.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es Jira en el contexto de las pruebas de software?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de ejecución de pruebas', correcta: false,
            explicacion: 'No. Jira no ejecuta pruebas; gestiona tareas, proyectos y defectos.' },
          { letra: 'b', texto: 'Herramienta de gestión de pruebas y defectos', correcta: true,
            explicacion: 'Correcto. Jira (especialmente con complementos como Xray o Zephyr) se usa para gestionar planes de prueba, casos de prueba, ejecuciones y defectos.' },
          { letra: 'c', texto: 'Herramienta de análisis estático', correcta: false,
            explicacion: 'No. Jira no analiza código estáticamente.' },
          { letra: 'd', texto: 'Herramienta de pruebas de rendimiento', correcta: false,
            explicacion: 'No. Las pruebas de rendimiento corresponden a herramientas como JMeter o Gatling.' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un beneficio de la automatización de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Elimina la necesidad de escritura de código', correcta: false,
            explicacion: 'No. La automatización requiere escribir y mantener scripts de prueba.' },
          { letra: 'b', texto: 'Proporciona retroalimentación más rápida y ejecuta pruebas repetitivas de forma consistente', correcta: true,
            explicacion: 'Correcto. Entre los beneficios: retroalimentación rápida, consistencia, ejecución de pruebas repetitivas sin fatiga y posibilidad de ejecutar pruebas difíciles manualmente.' },
          { letra: 'c', texto: 'Garantiza la ausencia total de defectos', correcta: false,
            explicacion: 'No. Ninguna técnica (automática o manual) puede garantizar ausencia de defectos.' },
          { letra: 'd', texto: 'Es siempre más barata que las pruebas manuales', correcta: false,
            explicacion: 'No. La automatización tiene un coste inicial alto; su rentabilidad se obtiene a medio/largo plazo.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de las siguientes son herramientas de análisis estático de código?',
        opciones: [
          { letra: 'a', texto: 'SonarQube', correcta: true,
            explicacion: 'Correcto. SonarQube analiza el código estáticamente: detecta code smells, bugs, vulnerabilidades y deuda técnica.' },
          { letra: 'b', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium automatiza pruebas de interfaz web; no analiza código estáticamente.' },
          { letra: 'c', texto: 'ESLint', correcta: true,
            explicacion: 'Correcto. ESLint es un analizador estático de código JavaScript que detecta patrones problemáticos y violaciones de estándares.' },
          { letra: 'd', texto: 'JMeter', correcta: false,
            explicacion: 'No. JMeter genera carga para pruebas de rendimiento, no analiza código estáticamente.' },
          { letra: 'e', texto: 'TestRail', correcta: false,
            explicacion: 'No. TestRail es una herramienta de gestión de pruebas, no de análisis estático.' }
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
