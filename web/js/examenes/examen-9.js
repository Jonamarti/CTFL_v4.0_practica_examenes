/* examen-9.js — Datos del EXAMEN DE PRÁCTICA 9 (ISTQB CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-9',
    titulo: 'EXAMEN DE PRÁCTICA 9',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K2',
        enunciado: 'Un equipo de desarrollo consigue que todas las pruebas dinámicas pasen sin encontrar defectos. Sin embargo, el producto no satisface las necesidades del usuario. ¿Qué principio de prueba describe esta situación?',
        opciones: [
          { letra: 'a', texto: 'Falacia de ausencia de errores', correcta: true,
            explicacion: 'Correcto. La falacia de ausencia de errores: que el sistema pase las pruebas sin errores no implica que sea válido; si no satisface las necesidades del usuario, no tiene valor.' },
          { letra: 'b', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. Esa paradoja habla de las pruebas repetidas que pierden eficacia, no de la validez del producto.' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación describe la concentración de defectos en pocas áreas.' },
          { letra: 'd', texto: 'Pruebas exhaustivas imposibles', correcta: false,
            explicacion: 'No. Ese principio trata de la imposibilidad de probar todo, no de la validez del producto.' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: 'En una revisión de código se detecta una condición lógica errónea en un módulo. ¿Según la terminología ISTQB, qué es la condición lógica errónea?',
        opciones: [
          { letra: 'a', texto: 'Un error', correcta: false,
            explicacion: 'No. El error es la acción humana; la condición errónea en el código es el defecto.' },
          { letra: 'b', texto: 'Un defecto', correcta: true,
            explicacion: 'Correcto. La condición lógica errónea es una anomalía en el producto de trabajo (el código): es un defecto.' },
          { letra: 'c', texto: 'Un fallo', correcta: false,
            explicacion: 'No. El fallo es la manifestación observable al ejecutar; aquí aún no se ha ejecutado.' },
          { letra: 'd', texto: 'Una causa raíz', correcta: false,
            explicacion: 'No. La causa raíz es el origen último, no la denominación de la anomalía del código.' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes opciones describe una estrategia de prueba basada en el riesgo?',
        opciones: [
          { letra: 'a', texto: 'Probar todo de manera uniforme sin priorización', correcta: false,
            explicacion: 'No. Probar todo uniformemente no considera el riesgo; la estrategia por riesgo prioriza áreas.' },
          { letra: 'b', texto: 'Priorizar las pruebas en función de la probabilidad e impacto de los fallos', correcta: true,
            explicacion: 'Correcto. La prueba basada en riesgo prioriza las áreas con mayor probabilidad e impacto de fallo, concentrando el esfuerzo donde más se reduce el riesgo.' },
          { letra: 'c', texto: 'Probar solo al final del proyecto', correcta: false,
            explicacion: 'No. Probar al final es tardío y no refleja una gestión de riesgo.' },
          { letra: 'd', texto: 'Eliminar las pruebas no funcionales', correcta: false,
            explicacion: 'No. Una estrategia por riesgo puede incluir pruebas no funcionales según el riesgo identificado.' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de las siguientes es una actividad del proceso de prueba?',
        opciones: [
          { letra: 'a', texto: 'Análisis y diseño de la prueba', correcta: true,
            explicacion: 'Correcto. El proceso de prueba incluye planificación, monitorización y control, análisis, diseño, implementación, ejecución y compleción.' },
          { letra: 'b', texto: 'Redacción de la documentación de usuario', correcta: false,
            explicacion: 'No. La documentación de usuario es un producto de desarrollo, no una actividad del proceso de prueba.' },
          { letra: 'c', texto: 'Definición de la arquitectura del sistema', correcta: false,
            explicacion: 'No. La arquitectura es parte del diseño del producto.' },
          { letra: 'd', texto: 'Gestión de ventas del producto', correcta: false,
            explicacion: 'No. La gestión comercial no es una actividad del proceso de prueba.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es la diferencia principal entre un error y un defecto según ISTQB?',
        opciones: [
          { letra: 'a', texto: 'Son exactamente lo mismo', correcta: false,
            explicacion: 'No. Son conceptos distintos: el error es humano y el defecto está en el producto.' },
          { letra: 'b', texto: 'El error es la acción humana que introduce un defecto en el producto de trabajo', correcta: true,
            explicacion: 'Correcto. Un error es la equivocación de una persona que causa un defecto en el código, diseño o especificación.' },
          { letra: 'c', texto: 'El defecto es la acción humana; el error es el resultado observable', correcta: false,
            explicacion: 'No. El defecto es la anomalía en el producto; el error es la acción humana.' },
          { letra: 'd', texto: 'El defecto se observa al ejecutar; el error es la causa raíz del fallo', correcta: false,
            explicacion: 'No. El fallo es lo que se observa al ejecutar; el debido error es la acción humana.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué ventaja supone contar con un equipo de prueba independiente?',
        opciones: [
          { letra: 'a', texto: 'Elimina la necesidad de probar el software', correcta: false,
            explicacion: 'No. La independencia cambia quién prueba, no si se prueba.' },
          { letra: 'b', texto: 'Aporta menor sesgo y mayor objetividad al evaluar el producto', correcta: true,
            explicacion: 'Correcto. Quien no participó en la creación del producto tiene más distancia y, por tanto, menos sesgo y más objetividad para detectar defectos.' },
          { letra: 'c', texto: 'Garantiza que todos los defectos se encontraron', correcta: false,
            explicacion: 'No. Ninguna estrategia garantiza la detección completa de defectos.' },
          { letra: 'd', texto: 'Reduce automáticamente el tiempo total del proyecto', correcta: false,
            explicacion: 'No. La independencia no garantiza la reducción de tiempo; puede incluso requerir más coordinación.' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es el objetivo de la trazabilidad en las pruebas?',
        opciones: [
          { letra: 'a', texto: 'Eliminar los defectos encontrados en el código', correcta: false,
            explicacion: 'No. La trazabilidad no corrige defectos.' },
          { letra: 'b', texto: 'Conectar la base de prueba con las condiciones, casos y resultados de la prueba', correcta: true,
            explicacion: 'Correcto. La trazabilidad vincula base de prueba, condiciones, casos de prueba y resultados para evaluar el impacto de los cambios y la cobertura.' },
          { letra: 'c', texto: 'Asegurar que todos los testers tienen el mismo equipo', correcta: false,
            explicacion: 'No. La trazabilidad no trata sobre el equipamiento de los testers.' },
          { letra: 'd', texto: 'Reducir el número de casos de prueba necesarios', correcta: false,
            explicacion: 'No. La trazabilidad no reduce casos; ayuda a determinar la cobertura y el impacto.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba valida que el sistema satisface las necesidades de negocio y está listo para su uso por parte del cliente?',
        opciones: [
          { letra: 'a', texto: 'Prueba de integración de sistemas', correcta: false,
            explicacion: 'No. La integración de sistemas verifica interfaces entre sistemas, no las necesidades del cliente.' },
          { letra: 'b', texto: 'Prueba de sistema', correcta: false,
            explicacion: 'No. La de sistema verifica el comportamiento global frente a la especificación, no las necesidades de negocio finales.' },
          { letra: 'c', texto: 'Prueba de aceptación', correcta: true,
            explicacion: 'Correcto. La prueba de aceptación valida que el sistema satisface las necesidades del usuario/negocio y está listo para su despliegue.' },
          { letra: 'd', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La de componente prueba módulos aislados, no cubre las necesidades del cliente.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K1',
        enunciado: 'En el modelo V, ¿en qué fase se planifica la prueba de sistema?',
        opciones: [
          { letra: 'a', texto: 'En paralelo con el diseño del sistema', correcta: true,
            explicacion: 'Correcto. En el modelo V, la prueba de sistema se planifica en paralelo con el diseño del sistema; la prueba de aceptación con los requisitos.' },
          { letra: 'b', texto: 'Después de la implementación', correcta: false,
            explicacion: 'No. En el modelo V la planificación es temprana y paralela al desarrollo.' },
          { letra: 'c', texto: 'Solo durante el mantenimiento', correcta: false,
            explicacion: 'No. La planificación de pruebas ocurre al inicio del ciclo de desarrollo.' },
          { letra: 'd', texto: 'En paralelo con la codificación', correcta: false,
            explicacion: 'No. La prueba de sistema se planifica a nivel de diseño del sistema, no de codificación.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué beneficio aporta el enfoque de desplazamiento a la izquierda (shift-left) en la prueba?',
        opciones: [
          { letra: 'a', texto: 'Detectar defectos tarde para ahorrar tiempo de desarrollo', correcta: false,
            explicacion: 'No. El shift-left busca detectar defectos temprano, no tarde.' },
          { letra: 'b', texto: 'Reducir el coste de corrección detectando defectos en etapas tempranas', correcta: true,
            explicacion: 'Correcto. Al adelantar las pruebas (revisar requisitos, análisis estático, CI temprano), los defectos se detectan antes y su corrección es más barata.' },
          { letra: 'c', texto: 'Aumentar el número de pruebas al final del ciclo', correcta: false,
            explicacion: 'No. El shift-left mueve las actividades de prueba hacia el inicio del ciclo de vida.' },
          { letra: 'd', texto: 'Eliminar las pruebas dinámicas', correcta: false,
            explicacion: 'No. El shift-left complementa las pruebas; no elimina la dinámica.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un tipo de prueba de cambio (change-related testing)?',
        opciones: [
          { letra: 'a', texto: 'Prueba de humo', correcta: false,
            explicacion: 'No. La prueba de humo es un chequeo rápido inicial, no necesariamente relacionada con un cambio.' },
          { letra: 'b', texto: 'Prueba de regresión', correcta: true,
            explicacion: 'Correcto. La regresión es un tipo de prueba relacionado con el cambio: verifica que los cambios no introdujeron defectos en áreas previamente funcionales.' },
          { letra: 'c', texto: 'Prueba de carga', correcta: false,
            explicacion: 'No. La carga es una prueba no funcional, no un tipo de prueba por cambio.' },
          { letra: 'd', texto: 'Prueba de seguridad', correcta: false,
            explicacion: 'No. La seguridad es una prueba no funcional, no un tipo de prueba por cambio.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué tipo de prueba evalúa la facilidad con la que los usuarios con discapacidades pueden utilizar el sistema?',
        opciones: [
          { letra: 'a', texto: 'Prueba de compatibilidad', correcta: false,
            explicacion: 'No. La compatibilidad verifica el funcionamiento en distintos entornos, no la accesibilidad.' },
          { letra: 'b', texto: 'Prueba de accesibilidad', correcta: true,
            explicacion: 'Correcto. La prueba de accesibilidad evalúa que el sistema sea utilizable por personas con discapacidades (visual, auditiva, motora, cognitiva).' },
          { letra: 'c', texto: 'Prueba de seguridad', correcta: false,
            explicacion: 'No. La seguridad evalúa la protección ante accesos no autorizados.' },
          { letra: 'd', texto: 'Prueba de regresión', correcta: false,
            explicacion: 'No. La regresión verifica que los cambios no rompen funcionalidad existente.' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una característica de DevOps que beneficia a la prueba?',
        opciones: [
          { letra: 'a', texto: 'Reduce la necesidad de integrar el código', correcta: false,
            explicacion: 'No. DevOps se basa en integración continua; no la reduce.' },
          { letra: 'b', texto: 'Proporciona retroalimentación rápida de calidad gracias a la integración y entrega continuas', correcta: true,
            explicacion: 'Correcto. DevOps integra pruebas y despliegue en tuberías CI/CD, dando retroalimentación rápida y continua sobre la calidad.' },
          { letra: 'c', texto: 'Elimina las pruebas manuales por completo', correcta: false,
            explicacion: 'No. DevOps automatiza muchas pruebas, pero no elimina el criterio manual.' },
          { letra: 'd', texto: 'Reduce la visibilidad de las características de calidad', correcta: false,
            explicacion: 'No. Al contrario, DevOps suele aumentar la visibilidad de la calidad.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué tipo de prueba estática se caracteriza por el análisis automático del código fuente sin ejecutarlo?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La revisión informal es realizada por personas, no automáticamente.' },
          { letra: 'b', texto: 'Análisis estático', correcta: true,
            explicacion: 'Correcto. El análisis estático usa herramientas que examinan automáticamente el código en busca de violaciones de estándares, código muerto y otros defectos.' },
          { letra: 'c', texto: 'Inspección', correcta: false,
            explicacion: 'No. La inspección es una revisión humana formal, no un análisis automático.' },
          { letra: 'd', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. La revisión técnica la realizan expertos, no herramientas automáticas.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: 'Según ISO/IEC 20246, ¿cuál es la ÚLTIMA actividad del proceso de revisión?',
        opciones: [
          { letra: 'a', texto: 'Planificación', correcta: false,
            explicacion: 'No. La planificación es la primera actividad.' },
          { letra: 'b', texto: 'Corrección y cierre', correcta: true,
            explicacion: 'Correcto. Las actividades son: Planificación, Inicio, Revisión individual, Comunicación y análisis, y Corrección y cierre (la última).' },
          { letra: 'c', texto: 'Inicio', correcta: false,
            explicacion: 'No. El inicio es la segunda actividad.' },
          { letra: 'd', texto: 'Revisión individual', correcta: false,
            explicacion: 'No. La revisión individual es la tercera actividad.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué rol en una inspección registra las anomalías y los puntos de acción de forma imparcial?',
        opciones: [
          { letra: 'a', texto: 'El escribano', correcta: true,
            explicacion: 'Correcto. El escribano registra de manera imparcial los defectos encontrados, las decisiones y los puntos de acción durante la revisión.' },
          { letra: 'b', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor explica el producto y corrige defectos; no registra de forma imparcial.' },
          { letra: 'c', texto: 'El moderador', correcta: false,
            explicacion: 'No. El moderador facilita y dirige la reunión, pero no registra los hallazgos.' },
          { letra: 'd', texto: 'El gestor', correcta: false,
            explicacion: 'No. El gestor decide sobre la ejecución de la revisión, no registra las anomalías.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un factor de ÉXITO en las revisiones?',
        opciones: [
          { letra: 'a', texto: 'Revisar el documento completo de una sola vez', correcta: false,
            explicacion: 'No. Revisar todo de una vez es ineficaz; conviene dividir en fragmentos.' },
          { letra: 'b', texto: 'Proporcionar tiempo suficiente a los participantes para prepararse', correcta: true,
            explicacion: 'Correcto. Dar tiempo de preparación, objetivos claros, fragmentos pequeños y formación son factores de éxito.' },
          { letra: 'c', texto: 'Culpar a los participantes por los defectos que no encontraron', correcta: false,
            explicacion: 'No. La revisión debe centrarse en el producto, no en juzgar personas.' },
          { letra: 'd', texto: 'No definir criterios de salida', correcta: false,
            explicacion: 'No. Definir criterios de salida es esencial en las revisiones formales.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué indica la "formalidad" de una revisión?',
        opciones: [
          { letra: 'a', texto: 'El grado de estructura, uso de roles y requisitos de documentación', correcta: true,
            explicacion: 'Correcto. La formalidad se refiere a cuán estructurado es el proceso: roles definidos, reuniones, métricas, criterios de entrada/salida y documentación.' },
          { letra: 'b', texto: 'El tamaño del equipo que participa', correcta: false,
            explicacion: 'No. El tamaño del equipo no determina la formalidad.' },
          { letra: 'c', texto: 'La antigüedad de la empresa', correcta: false,
            explicacion: 'No. La formalidad es técnica y de proceso, no de antigüedad.' },
          { letra: 'd', texto: 'El lenguaje de programación utilizado', correcta: false,
            explicacion: 'No. La formalidad de una revisión no depende del lenguaje de programación.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de caja negra divide el dominio de entrada en clases de datos equivalentes?',
        opciones: [
          { letra: 'a', texto: 'Partición de equivalencia', correcta: true,
            explicacion: 'Correcto. La partición de equivalencia divide el rango de entrada en clases (particiones) donde un representante de cada clase se comporta de forma equivalente.' },
          { letra: 'b', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. El AVF se centra en los límites de las particiones, no en su división.' },
          { letra: 'c', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión combina condiciones y acciones.' },
          { letra: 'd', texto: 'Transición de estados', correcta: false,
            explicacion: 'No. La transición de estados modela estados y transiciones, no divide entradas.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <30→29, 30-90→30 y 90, >90→91',
        enunciado: 'Un sistema de envío acepta pesos de 30 a 90 kg inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        opciones: [
          { letra: 'a', texto: '29, 30, 60, 90, 91', correcta: false,
            explicacion: 'No. El 60 es redundante: la partición válida se representa con sus límites.' },
          { letra: 'b', texto: '30, 90', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las particiones inválidas.' },
          { letra: 'c', texto: '29, 30, 90, 91', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida inferior (29), válida con sus límites (30 y 90) e inválida superior (91).' },
          { letra: 'd', texto: '0, 50, 100', correcta: false,
            explicacion: 'No. Los valores no representan las fronteras de las particiones de forma directa.' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: 29,30 y 90,91',
        enunciado: 'Para el mismo rango de peso (30-90 kg), aplicando AVF de 2 valores, ¿cuáles son los valores a probar?',
        opciones: [
          { letra: 'a', texto: '30, 31, 89, 90', correcta: false,
            explicacion: 'No. Son valores interiores; faltan los inmediatamente exteriores (29 y 91).' },
          { letra: 'b', texto: '29, 30, 90, 91', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera: (29,30) y (90,91).' },
          { letra: 'c', texto: '29, 30, 31, 89, 90, 91', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores.' },
          { letra: 'd', texto: '30, 90, 91', correcta: false,
            explicacion: 'No. Falta el 29, el vecino exterior de la frontera inferior.' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        nota: 'AVF 3 valores: 29,30,31 y 89,90,91',
        enunciado: 'Para el rango 30-90, aplicando AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        opciones: [
          { letra: 'a', texto: '29, 30, 90, 91', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores; le faltan 31 y 89.' },
          { letra: 'b', texto: '30, 31, 89, 90', correcta: false,
            explicacion: 'No. Le faltan los valores exteriores (29 y 91).' },
          { letra: 'c', texto: '29, 30, 31, 89, 90, 91', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 por frontera: (29,30,31) y (89,90,91).' },
          { letra: 'd', texto: '28, 29, 30, 90, 91, 92', correcta: false,
            explicacion: 'No. Los extremos 28 y 92 están fuera del rango inmediato de las fronteras.' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '4 condiciones × 2 = 16 reglas',
        enunciado: 'Un sistema de crédito usa 4 condiciones booleanas: "ingresos altos", "buen historial", "empleo estable" y "edad > 21". ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '8', correcta: false,
            explicacion: 'No. 8 sería para tres condiciones (2^3).' },
          { letra: 'b', texto: '12', correcta: false,
            explicacion: 'No. 12 no resulta de combinar cuatro condiciones booleanas.' },
          { letra: 'c', texto: '16', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 × 2 × 2 = 16 combinaciones únicas de las cuatro condiciones.' },
          { letra: 'd', texto: '4', correcta: false,
            explicacion: 'No. 4 es el número de condiciones, no de reglas.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: '2 condiciones × 2 = 4 reglas',
        enunciado: 'Un parking tiene dos condiciones: "Es residente" (sí/no) y "Día festivo" (sí/no). El descuento se aplica si es residente Y NO es día festivo. ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '2', correcta: false,
            explicacion: 'No. 2 es el número de condiciones, no de reglas.' },
          { letra: 'b', texto: '8', correcta: false,
            explicacion: 'No. 8 correspondería a tres condiciones (2^3).' },
          { letra: 'c', texto: '4', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 = 4 combinaciones únicas de las dos condiciones booleanas.' },
          { letra: 'd', texto: '6', correcta: false,
            explicacion: 'No. 6 no resulta de combinar dos condiciones booleanas.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes técnicas de caja blanca mide el porcentaje de decisiones (resultados verdadero/falso) ejecutadas?',
        opciones: [
          { letra: 'a', texto: 'Cobertura de sentencia', correcta: false,
            explicacion: 'No. Mide sentencias ejecutadas, no decisiones.' },
          { letra: 'b', texto: 'Cobertura de rama', correcta: true,
            explicacion: 'Correcto. La cobertura de rama (o de decisión) mide el porcentaje de resultados de las decisiones (true/false) que han sido ejecutados.' },
          { letra: 'c', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. La partición de equivalencia es una técnica de caja negra.' },
          { letra: 'd', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión es una técnica de caja negra basada en la especificación.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica basada en la experiencia es útil cuando hay poca documentación y el tester aprende el sistema mientras lo prueba?',
        opciones: [
          { letra: 'a', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria combina diseño y ejecución simultáneos; es ideal cuando la documentación es escasa y el tester aprende explorando.' },
          { letra: 'b', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión requiere conocer la lógica de negocio especificada.' },
          { letra: 'c', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. El AVF necesita conocer las fronteras de la especificación.' },
          { letra: 'd', texto: 'Cobertura de rama', correcta: false,
            explicacion: 'No. La cobertura de rama requiere acceso al código y a las herramientas de medición.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué formato se utiliza para los criterios de aceptación que permiten verificar el comportamiento observable?',
        opciones: [
          { letra: 'a', texto: 'Como/quiero/para', correcta: false,
            explicacion: 'No. Ese formato es para historias de usuario.' },
          { letra: 'b', texto: 'Dado/cuando/entonces (Given/When/Then)', correcta: true,
            explicacion: 'Correcto. Los criterios de aceptación se expresan en Given/When/Then: precondiciones, acción y resultado observable esperado.' },
          { letra: 'c', texto: 'Si/entonces/sino', correcta: false,
            explicacion: 'No. Es una estructura de programación, no el estándar de criterios de aceptación.' },
          { letra: 'd', texto: 'Rojo/verde/refactorizar', correcta: false,
            explicacion: 'No. Es el ciclo de TDD, no el formato de criterios de aceptación.' }
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: 'En el ciclo de vida de un defecto, ¿en qué estado suele quedar tras la corrección y verificación exitosa?',
        opciones: [
          { letra: 'a', texto: 'Abierto', correcta: false,
            explicacion: 'No. "Abierto" es el estado inicial cuando se reporta.' },
          { letra: 'b', texto: 'Cerrado', correcta: true,
            explicacion: 'Correcto. Tras corregir el defecto y verificar (prueba de confirmación) que se resuelve, el defecto se marca como "cerrado".' },
          { letra: 'c', texto: 'Duplicado', correcta: false,
            explicacion: 'No. "Duplicado" indica que ya existe otro informe del mismo defecto.' },
          { letra: 'd', texto: 'Diferido', correcta: false,
            explicacion: 'No. "Diferido" indica que se pospone la corrección, no que esté resuelto.' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un ejemplo de riesgo de producto?',
        opciones: [
          { letra: 'a', texto: 'El equipo de prueba pierde a un miembro clave', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (recursos).' },
          { letra: 'b', texto: 'El sistema no es lo bastante seguro', correcta: true,
            explicacion: 'Correcto. Una debilidad de seguridad amenaza la calidad del propio sistema: es un riesgo de producto.' },
          { letra: 'c', texto: 'Falta de presupuesto para herramientas', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto.' },
          { letra: 'd', texto: 'Cambio de prioridades por la dirección', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (gestión y alcance).' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de defectos?',
        opciones: [
          { letra: 'a', texto: 'Número total de defectos abiertos en el proyecto', correcta: true,
            explicacion: 'Correcto. El total de defectos, la densidad y los pendientes son métricas de defectos.' },
          { letra: 'b', texto: 'Porcentaje de casos de prueba ejecutados', correcta: false,
            explicacion: 'No. Es una métrica de avance de la prueba.' },
          { letra: 'c', texto: 'Tiempo de respuesta del sistema', correcta: false,
            explicacion: 'No. Es una métrica de calidad de producto (rendimiento).' },
          { letra: 'd', texto: 'Horas invertidas en pruebas', correcta: false,
            explicacion: 'No. Las horas son métrica de esfuerzo, no de defectos.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        nota: 'E = (2 + 4×10 + 24)/6 = (2+40+24)/6 = 66/6 = 11',
        enunciado: 'Se estima una tarea con O=2, M=10 y P=24. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '10', correcta: false,
            explicacion: 'No. 10 es el valor "más probable"; la fórmula pondera también O y P.' },
          { letra: 'b', texto: '11', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (2 + 40 + 24)/6 = 66/6 = 11.' },
          { letra: 'c', texto: '12', correcta: false,
            explicacion: 'No. 12 no resulta de dividir 66 entre 6.' },
          { letra: 'd', texto: '13', correcta: false,
            explicacion: 'No. 13 no es el resultado de la fórmula.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K3',
        nota: 'SD = (24-2)/6 = 22/6 = 3,67',
        enunciado: 'Con los mismos datos (O=2, M=10, P=24), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '3,67', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (24 - 2)/6 = 22/6 = 3,67.' },
          { letra: 'b', texto: '4', correcta: false,
            explicacion: 'No. 4 no resulta de dividir 22 entre 6.' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. 3 no resulta de dividir 22 entre 6.' },
          { letra: 'd', texto: '2,67', correcta: false,
            explicacion: 'No. 2,67 resultaría de (P-O)=16; aquí es 22/6 = 3,67.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de prueba, ¿qué características tienen las pruebas de la base?',
        opciones: [
          { letra: 'a', texto: 'Son numerosas, rápidas y baratas', correcta: true,
            explicacion: 'Correcto. La base de la pirámide está formada por muchas pruebas de componente/unitarias, rápidas, baratas y estables.' },
          { letra: 'b', texto: 'Son pocas, lentas y costosas', correcta: false,
            explicacion: 'No. Esas caracterizan a las pruebas E2E de la cúspide.' },
          { letra: 'c', texto: 'Son de aceptación del usuario', correcta: false,
            explicacion: 'No. La aceptación está en la parte superior de la pirámide.' },
          { letra: 'd', texto: 'Son pruebas de carga y estrés', correcta: false,
            explicacion: 'No. La base son pruebas de componente, no de carga.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué deben incluir los criterios de entrada para comenzar un nivel de prueba?',
        opciones: [
          { letra: 'a', texto: 'Que todos los defectos estén corregidos', correcta: false,
            explicacion: 'No. Eso es un criterio de salida, no de entrada.' },
          { letra: 'b', texto: 'Que la base de prueba esté disponible y el entorno esté listo', correcta: true,
            explicacion: 'Correcto. Los criterios de entrada típicos incluyen: disponibilidad de la base de prueba, del entorno, de los datos y de las pruebas preparadas.' },
          { letra: 'c', texto: 'Que se haya entregado el informe de compleción', correcta: false,
            explicacion: 'No. Eso ocurre al finalizar el nivel, no para comenzarlo.' },
          { letra: 'd', texto: 'Que el 100% de las pruebas hayan pasado', correcta: false,
            explicacion: 'No. Eso es un criterio de salida, no para comenzar.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué diferencia hay entre la prioridad y la severidad de un defecto?',
        opciones: [
          { letra: 'a', texto: 'Son sinónimos', correcta: false,
            explicacion: 'No. Son atributos distintos del defecto.' },
          { letra: 'b', texto: 'La severidad mide el impacto; la prioridad mide la urgencia de corrección', correcta: true,
            explicacion: 'Correcto. La severidad indica cuán grave es el defecto (impacto); la prioridad señala con qué urgencia debe corregirse, y pueden no coincidir.' },
          { letra: 'c', texto: 'La prioridad mide el impacto; la severidad mide la urgencia', correcta: false,
            explicacion: 'No. Está invertido: severidad = impacto, prioridad = urgencia.' },
          { letra: 'd', texto: 'La severidad siempre es mayor que la prioridad', correcta: false,
            explicacion: 'No. No hay una relación fija; pueden ser independientes.' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una respuesta al riesgo?',
        opciones: [
          { letra: 'a', texto: 'Mitigar', correcta: true,
            explicacion: 'Correcto. Las respuestas al riesgo incluyen: mitigar (reducir), transferir, aceptar y evitar.' },
          { letra: 'b', texto: 'Diagnosticar', correcta: false,
            explicacion: 'No. Diagnosticar es del proceso de depuración, no una respuesta al riesgo.' },
          { letra: 'c', texto: 'Versionar', correcta: false,
            explicacion: 'No. Versionar es de gestión de la configuración.' },
          { letra: 'd', texto: 'Documentar', correcta: false,
            explicacion: 'No. Documentar es una actividad general, no una respuesta específica al riesgo.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué documenta un informe de avance de la prueba?',
        opciones: [
          { letra: 'a', texto: 'El resultado de todas las pruebas al final del proyecto', correcta: false,
            explicacion: 'No. Eso lo cubre el informe de compleción al finalizar.' },
          { letra: 'b', texto: 'El progreso real versus el plan, con métricas e impedimentos', correcta: true,
            explicacion: 'Correcto. El informe de avance se genera periódicamente durante la prueba, comparando el progreso real con el plan e indicando métricas, riesgos e impedimentos.' },
          { letra: 'c', texto: 'Solo los defectos críticos encontrados', correcta: false,
            explicacion: 'No. El informe de avance cubre el progreso general, no solo defectos críticos.' },
          { letra: 'd', texto: 'El presupuesto del proyecto', correcta: false,
            explicacion: 'No. El presupuesto general no es el foco del informe de avance de la prueba.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es GitLab CI en el contexto de DevOps?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de gestión de defectos', correcta: false,
            explicacion: 'No. GitLab CI no gestiona defectos.' },
          { letra: 'b', texto: 'Herramienta de integración continua y entrega continua (CI/CD)', correcta: true,
            explicacion: 'Correcto. GitLab CI/CD es una plataforma integrada en GitLab que orquesta integración continua, pruebas automatizadas y despliegue.' },
          { letra: 'c', texto: 'Herramienta de análisis estático', correcta: false,
            explicacion: 'No. GitLab CI no analiza código estáticamente por sí misma (aunque puede integrar analizadores).' },
          { letra: 'd', texto: 'Herramienta de pruebas de rendimiento', correcta: false,
            explicacion: 'No. GitLab CI orquesta ejecuciones, no mide rendimiento directamente.' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K2',
        enunciado: 'En un pipeline de CI/CD, ¿para qué se usa una herramienta de automatización de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Para ejecutar automáticamente las pruebas en cada integración y dar retroalimentación rápida', correcta: true,
            explicacion: 'Correcto. La automatización integrada en CI/CD ejecuta las pruebas de forma automática ante cada cambio, proporcionando retroalimentación rápida de calidad.' },
          { letra: 'b', texto: 'Para escribir automáticamente el código de producción', correcta: false,
            explicacion: 'No. La automatización de pruebas ejecuta y verifica, no escribe el código de producción.' },
          { letra: 'c', texto: 'Para reemplazar el criterio humano de los testers', correcta: false,
            explicacion: 'No. La automatización complementa el criterio humano; no lo reemplaza.' },
          { letra: 'd', texto: 'Para desplegar el software en producción', correcta: false,
            explicacion: 'No. El despliegue es tarea de las herramientas de CI/CD, no de automatización de pruebas.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles son ejemplos de herramientas de análisis estático?',
        opciones: [
          { letra: 'a', texto: 'PMD', correcta: true,
            explicacion: 'Correcto. PMD es una herramienta de análisis estático para Java que detecta code smells, código duplicado y problemas de estilo.' },
          { letra: 'b', texto: 'Jenkins', correcta: false,
            explicacion: 'No. Jenkins es un servidor de CI/CD, no un analizador estático.' },
          { letra: 'c', texto: 'Checkstyle', correcta: true,
            explicacion: 'Correcto. Checkstyle es una herramienta de análisis estático que verifica estándares de codificación en Java.' },
          { letra: 'd', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium automatiza pruebas de interfaz web.' },
          { letra: 'e', texto: 'Postman', correcta: false,
            explicacion: 'No. Postman es una herramienta de prueba de APIs.' }
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
