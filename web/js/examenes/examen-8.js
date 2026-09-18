/* examen-8.js — Datos del EXAMEN DE PRÁCTICA 8 (CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-8',
    titulo: 'EXAMEN DE PRÁCTICA 8',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de las siguientes es una razón válida para realizar pruebas de software?',
        opciones: [
          { letra: 'a', texto: 'Para demostrar que el software no tiene defectos', correcta: false,
            explicacion: 'No. La prueba demuestra la presencia, no la ausencia de defectos; siempre puede haber defectos no detectados.' },
          { letra: 'b', texto: 'Para reducir el nivel de riesgo del software proporcionando información', correcta: true,
            explicacion: 'Correcto. La prueba reduce el riesgo al proporcionar información objetiva sobre la calidad que apoya las decisiones de liberación.' },
          { letra: 'c', texto: 'Para encontrar todos los defectos posibles antes de la entrega', correcta: false,
            explicacion: 'No. Las pruebas exhaustivas son imposibles; no se pueden encontrar todos los defectos.' },
          { letra: 'd', texto: 'Para reemplazar los procesos de aseguramiento de la calidad', correcta: false,
            explicacion: 'No. La prueba complementa a QA; no lo reemplaza.' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: 'Según la terminología ISTQB, ¿cuál es la secuencia correcta que va desde la acción humana hasta el comportamiento observable del sistema?',
        opciones: [
          { letra: 'a', texto: 'Fallo → Defecto → Error', correcta: false,
            explicacion: 'No. El fallo es la manifestación final del defecto; el error es el punto de partida (acción humana).' },
          { letra: 'b', texto: 'Defecto → Error → Fallo', correcta: false,
            explicacion: 'No. El defecto no causa un error; es el error humano el que crea el defecto.' },
          { letra: 'c', texto: 'Error → Defecto → Fallo', correcta: true,
            explicacion: 'Correcto. Una persona comete un error que introduce un defecto en el código; al ejecutarlo bajo ciertas condiciones se manifiesta un fallo observable.' },
          { letra: 'd', texto: 'Fallo → Error → Defecto', correcta: false,
            explicacion: 'No. El fallo es la manifestación final, no el punto de partida.' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: 'Un equipo prueba repetidamente el mismo módulo de facturación durante 6 meses y ya no encuentra defectos nuevos. ¿Qué principio de prueba describe esta situación?',
        opciones: [
          { letra: 'a', texto: 'Pruebas tempranas', correcta: false,
            explicacion: 'No. El principio de pruebas tempranas aconseja empezar a probar pronto, no explica la pérdida de eficacia.' },
          { letra: 'b', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación habla de la concentración de defectos en pocas áreas.' },
          { letra: 'c', texto: 'Paradoja del pesticida', correcta: true,
            explicacion: 'Correcto. La paradoja del pesticida explica que las pruebas repetidas pierden eficacia; hay que revisarlas, actualizarlas y ampliarlas para encontrar defectos nuevos.' },
          { letra: 'd', texto: 'Falacia de ausencia de errores', correcta: false,
            explicacion: 'No. La falacia advierte que un sistema sin errores conocidos puede no ser utilizable.' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una actividad del proceso de prueba según ISTQB?',
        opciones: [
          { letra: 'a', texto: 'Implementación de la prueba', correcta: true,
            explicacion: 'Correcto. Las actividades del proceso de prueba son: planificación, monitorización y control, análisis, diseño, implementación, ejecución y compleción.' },
          { letra: 'b', texto: 'Codificación del software', correcta: false,
            explicacion: 'No. Codificar es una actividad de desarrollo, no de prueba.' },
          { letra: 'c', texto: 'Despliegue en producción', correcta: false,
            explicacion: 'No. El despliegue es una actividad de liberación/operaciones, no del proceso de prueba.' },
          { letra: 'd', texto: 'Diseño de la arquitectura del sistema', correcta: false,
            explicacion: 'No. El diseño de arquitectura es una actividad de desarrollo/diseño del producto.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué describe la "falacia de ausencia de errores" como principio de prueba?',
        opciones: [
          { letra: 'a', texto: 'Que es posible encontrar y corregir todos los defectos del software', correcta: false,
            explicacion: 'No. La falacia advierte precisamente de lo contrario: no basta con encontrar defectos.' },
          { letra: 'b', texto: 'Que encontrar y corregir defectos no sirve de nada si el sistema no satisface las necesidades del usuario', correcta: true,
            explicacion: 'Correcto. La falacia de ausencia de errores: un sistema sin defectos conocidos puede seguir siendo inútil si no cubre las necesidades del usuario.' },
          { letra: 'c', texto: 'Que los defectos siempre son fáciles de encontrar', correcta: false,
            explicacion: 'No. No es lo que describe la falacia; esta se centra en la utilidad del sistema.' },
          { letra: 'd', texto: 'Que la ausencia de defectos demuestra la calidad del software', correcta: false,
            explicacion: 'No. Justamente al revés: la ausencia de defectos no implica calidad ni utilidad.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es una consecuencia de aumentar la independencia del equipo de prueba?',
        opciones: [
          { letra: 'a', texto: 'Mayor sesgo y menos objetividad', correcta: false,
            explicacion: 'No. Es al revés: mayor independencia reduce el sesgo y aumenta la objetividad.' },
          { letra: 'b', texto: 'Mayor objetividad pero posible reducción de la colaboración con desarrollo', correcta: true,
            explicacion: 'Correcto. A mayor independencia, mayor objetividad y menor sesgo, pero como contrapartida puede empeorar la comunicación y colaboración con el equipo de desarrollo.' },
          { letra: 'c', texto: 'Eliminación de la necesidad de pruebas manuales', correcta: false,
            explicacion: 'No. La independencia no elimina las pruebas manuales; ambas son complementarias.' },
          { letra: 'd', texto: 'Reducción automática del coste del proyecto', correcta: false,
            explicacion: 'No. La independencia no garantiza menor coste; puede incluso incrementarlo por duplicación de roles.' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cómo se relacionan la prueba y QA (aseguramiento de la calidad)?',
        opciones: [
          { letra: 'a', texto: 'La prueba sustituye completamente a QA', correcta: false,
            explicacion: 'No. Son complementarias: QA mejora procesos, la prueba evalúa el producto.' },
          { letra: 'b', texto: 'QA se centra en procesos; la prueba evalúa el producto', correcta: true,
            explicacion: 'Correcto. QA orienta actividades a mejorar los procesos para prevenir defectos; la prueba se enfoca en el producto, evaluándolo y detectando defectos.' },
          { letra: 'c', texto: 'Ambas realizan exactamente las mismas actividades', correcta: false,
            explicacion: 'No. Son actividades distintas, aunque complementarias.' },
          { letra: 'd', texto: 'QA solo se aplica en proyectos ágiles', correcta: false,
            explicacion: 'No. QA es aplicable en cualquier methodology o contexto de desarrollo.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba verifica las interacciones entre sistemas diferentes que trabajan juntos?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La de componente prueba módulos aislados.' },
          { letra: 'b', texto: 'Prueba de integración de sistemas', correcta: true,
            explicacion: 'Correcto. La integración de sistemas verifica las interfaces y el comportamiento entre sistemas diferentes que deben interoperar.' },
          { letra: 'c', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario/negocio, no las interfaces entre sistemas.' },
          { letra: 'd', texto: 'Prueba de regresión', correcta: false,
            explicacion: 'No. La regresión verifica que los cambios no rompen funcionalidad existente, sin centrarse en interfaces entre sistemas.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuándo comienza la planificación de la prueba en el modelo V de desarrollo?',
        opciones: [
          { letra: 'a', texto: 'Después de completar toda la codificación', correcta: false,
            explicacion: 'No. Planificar al final es reactivo y caro; contradice el modelo V.' },
          { letra: 'b', texto: 'Desde el inicio del proyecto, en paralelo con las fases de desarrollo correspondientes', correcta: true,
            explicacion: 'Correcto. En el modelo V, la planificación de la prueba comienza con los requisitos y se desarrolla en paralelo con cada fase de diseño.' },
          { letra: 'c', texto: 'Solo durante la fase de ejecución de pruebas', correcta: false,
            explicacion: 'No. La planificación es anterior a la ejecución.' },
          { letra: 'd', texto: 'Después de la entrega del software al cliente', correcta: false,
            explicacion: 'No. La planificación de pruebas es una actividad temprana del proyecto.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué caracteriza a la prueba de aceptación contractual?',
        opciones: [
          { letra: 'a', texto: 'Se realiza en el entorno del desarrollador con usuarios simulados', correcta: false,
            explicacion: 'No. Esa descripción se parece más a la aceptación alfa.' },
          { letra: 'b', texto: 'Valida que el sistema cumple los requisitos especificados en el contrato', correcta: true,
            explicacion: 'Correcto. La aceptación contractual verifica que el sistema satisface los criterios de aceptación definidos en el contrato con el cliente.' },
          { letra: 'c', texto: 'Solo prueba aspectos de rendimiento', correcta: false,
            explicacion: 'No. La aceptación contractual puede cubrir tanto requisitos funcionales como no funcionales.' },
          { letra: 'd', texto: 'La realiza únicamente el equipo de desarrollo', correcta: false,
            explicacion: 'No. La aceptación contractual involucra al cliente o sus representantes.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué tipo de prueba evalúa si el sistema funciona correctamente en diferentes navegadores, sistemas operativos y dispositivos?',
        opciones: [
          { letra: 'a', texto: 'Prueba funcional', correcta: false,
            explicacion: 'No. La funcional evalúa QUÉ hace el sistema, no su comportamiento en diferentes entornos.' },
          { letra: 'b', texto: 'Prueba de compatibilidad', correcta: true,
            explicacion: 'Correcto. La prueba de compatibilidad verifica que el sistema funciona correctamente en distintos navegadores, SO, dispositivos y configuraciones.' },
          { letra: 'c', texto: 'Prueba de regresión', correcta: false,
            explicacion: 'No. La regresión verifica que los cambios no rompen funcionalidad existente.' },
          { letra: 'd', texto: 'Prueba de usabilidad', correcta: false,
            explicacion: 'No. La usabilidad evalúa la facilidad de uso, no la compatibilidad con entornos.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué diferencia hay entre la prueba de confirmación y la de regresión?',
        opciones: [
          { letra: 'a', texto: 'La confirmación se hace al inicio; la regresión al final', correcta: false,
            explicacion: 'No. Ambas se ejecutan tras un cambio, pero con objetivos distintos.' },
          { letra: 'b', texto: 'La confirmación verifica que un defecto fue corregido; la regresión verifica que no se introdujeron defectos en otras áreas', correcta: true,
            explicacion: 'Correcto. La confirmación re-ejecuta las pruebas que fallaban para verificar la corrección; la regresión comprueba que el cambio no afectó negativamente a otras partes del sistema.' },
          { letra: 'c', texto: 'Son exactamente lo mismo', correcta: false,
            explicacion: 'No. Tienen objetivos diferentes: confirmar una corrección vs verificar ausencia de efectos colaterales.' },
          { letra: 'd', texto: 'La regresión es manual; la confirmación es automática', correcta: false,
            explicacion: 'No. Ambas pueden ser automáticas o manuales.' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿En qué consiste la prueba de mantenimiento de software?',
        opciones: [
          { letra: 'a', texto: 'En mantener los servidores del sistema en producción', correcta: false,
            explicacion: 'No. Mantener servidores es una actividad de operaciones, no de prueba de mantenimiento.' },
          { letra: 'b', texto: 'En probar los cambios realizados en un sistema ya en producción, incluyendo migraciones y retiro', correcta: true,
            explicacion: 'Correcto. La prueba de mantenimiento se aplica a sistemas en producción cuando se hacen correcciones, actualizaciones, migraciones de datos o retiros.' },
          { letra: 'c', texto: 'En corregir defectos sin probar', correcta: false,
            explicacion: 'No. Corregir sin probar no es una práctica aceptable; toda corrección debe validarse.' },
          { letra: 'd', texto: 'En probar solo el código nuevo, ignorando el existente', correcta: false,
            explicacion: 'No. Debe evaluarse el impacto del cambio sobre el sistema existente, no solo lo nuevo.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una característica de la prueba estática?',
        opciones: [
          { letra: 'a', texto: 'Requiere siempre ejecutar el software para detectar defectos', correcta: false,
            explicacion: 'No. La prueba estática NO ejecuta el software; es su característica principal.' },
          { letra: 'b', texto: 'Solo se aplica al código fuente compilado', correcta: false,
            explicacion: 'No. Se aplica a cualquier producto de trabajo: requisitos, diseño, documentación y código.' },
          { letra: 'c', texto: 'Puede detectar defectos en requisitos y diseño antes de codificar', correcta: true,
            explicacion: 'Correcto. La prueba estática (revisiones, análisis estático) examina productos de trabajo sin ejecutar el software, pudiendo encontrar defectos en etapas tempranas.' },
          { letra: 'd', texto: 'Es menos eficaz que la prueba dinámica en todos los casos', correcta: false,
            explicacion: 'No. La estática es muy eficaz para defectos tempranos, de mantenibilidad y de estándares; la dinámica es más eficaz para defectos de ejecución.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: 'Según ISO/IEC 20246, ¿cuál es el orden CORRECTO de las actividades del proceso de revisión?',
        opciones: [
          { letra: 'a', texto: 'Inicio, Planificación, Revisión individual, Comunicación y análisis, Corrección', correcta: false,
            explicacion: 'No. La planificación debe ir antes del inicio (kick-off).' },
          { letra: 'b', texto: 'Planificación, Inicio, Revisión individual, Comunicación y análisis, Corrección', correcta: true,
            explicacion: 'Correcto. El proceso es: Planificación, Inicio (kick-off), Revisión individual, Comunicación y análisis, y Corrección y cierre.' },
          { letra: 'c', texto: 'Revisión individual, Planificación, Inicio, Comunicación, Corrección', correcta: false,
            explicacion: 'No. No se puede revisar antes de planificar.' },
          { letra: 'd', texto: 'Planificación, Revisión individual, Inicio, Corrección, Comunicación', correcta: false,
            explicacion: 'No. El inicio debe preceder a la revisión individual.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué rol en una inspección es responsable de dirigir la reunión y asegurar que se siga el proceso?',
        opciones: [
          { letra: 'a', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor presenta el producto y aclara dudas; no dirige la reunión.' },
          { letra: 'b', texto: 'El moderador', correcta: true,
            explicacion: 'Correcto. El moderador (líder de revisión) gestiona la reunión, facilita la discusión y garantiza que se siga el proceso de revisión.' },
          { letra: 'c', texto: 'El gestor', correcta: false,
            explicacion: 'No. El gestor decide el alcance y asigna recursos, pero no modera la reunión.' },
          { letra: 'd', texto: 'El escriba', correcta: false,
            explicacion: 'No. El escriba registra hallazgos y decisiones; no modera.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un factor de ÉXITO para las revisiones?',
        opciones: [
          { letra: 'a', texto: 'Evaluar el desempeño de los participantes', correcta: false,
            explicacion: 'No. Evaluar a las personas genera un clima negativo y reduce la eficacia.' },
          { letra: 'b', texto: 'Revisar todo el documento de una sola vez', correcta: false,
            explicacion: 'No. Es ineficaz; conviene dividir en fragmentos pequeños y manejables.' },
          { letra: 'c', texto: 'Definir objetivos claros y dar tiempo de preparación a los participantes', correcta: true,
            explicacion: 'Correcto. Objetivos claros, fragmentos pequeños, tiempo de preparación, formación y apoyo de la dirección son factores de éxito.' },
          { letra: 'd', texto: 'No proporcionar formación a los participantes', correcta: false,
            explicacion: 'No. La formación es un factor de éxito, no de fracaso.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué tipo de revisión se centra en encontrar defectos y sigue el proceso más riguroso con métricas y datos del proceso?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La informal es la menos formal, sin proceso estructurado.' },
          { letra: 'b', texto: 'Revisión guiada (walkthrough)', correcta: false,
            explicacion: 'No. El walkthrough es de formalidad media, dirigido por el autor.' },
          { letra: 'c', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. La técnica es formal pero menos rigurosa que la inspección.' },
          { letra: 'd', texto: 'Inspección', correcta: true,
            explicacion: 'Correcto. La inspección es la más formal: roles definidos, listas de verificación, métricas, datos del proceso y reunión de decisión.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de caja negra modela el comportamiento del sistema como una tabla que combina condiciones con acciones?',
        opciones: [
          { letra: 'a', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. La partición de equivalencia divide el dominio de entrada en clases.' },
          { letra: 'b', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. El AVF se centra en los límites de las particiones.' },
          { letra: 'c', texto: 'Tabla de decisión', correcta: true,
            explicacion: 'Correcto. La tabla de decisión modela el sistema como una combinación de condiciones (entradas) con acciones (salidas) en formato de tabla.' },
          { letra: 'd', texto: 'Transición de estados', correcta: false,
            explicacion: 'No. La transición de estados modela estados y transiciones, no combinaciones de condiciones.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <20→19, 20-80→20 y 80, >80→81',
        enunciado: 'Un sistema de reservas aceptaGroups de 20 a 80 personas inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores de prueba?',
        opciones: [
          { letra: 'a', texto: '19, 20, 50, 80, 81', correcta: false,
            explicacion: 'No. El 50 es redundante en el conjunto mínimo; basta representar la partición válida con sus límites.' },
          { letra: 'b', texto: '20, 80', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las particiones inválidas.' },
          { letra: 'c', texto: '19, 20, 80, 81', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida inferior (19), válida representada por sus límites (20 y 80) e inválida superior (81).' },
          { letra: 'd', texto: '0, 50, 100', correcta: false,
            explicacion: 'No. Los valores son arbitrarios y no representan las fronteras de las particiones de forma directa.' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: 19,20 y 80,81',
        enunciado: 'Para el mismo rango (20-80 personas), aplicando AVF de 2 valores, ¿cuáles son los valores a probar?',
        opciones: [
          { letra: 'a', texto: '20, 21, 79, 80', correcta: false,
            explicacion: 'No. Son valores interiores; faltan los inmediatamente exteriores (19 y 81).' },
          { letra: 'b', texto: '19, 20, 21, 79, 80, 81', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores (límite-1, límite, límite+1).' },
          { letra: 'c', texto: '19, 20, 80, 81', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera: (19,20) y (80,81).' },
          { letra: 'd', texto: '20, 80, 81', correcta: false,
            explicacion: 'No. Falta el 19, el vecino exterior de la frontera inferior.' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        nota: 'AVF 3 valores: 19,20,21 y 79,80,81',
        enunciado: 'Para el rango 20-80, aplicando AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        opciones: [
          { letra: 'a', texto: '19, 20, 80, 81', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores; le faltan 21 y 79.' },
          { letra: 'b', texto: '20, 21, 79, 80', correcta: false,
            explicacion: 'No. Le faltan los valores exteriores (19 y 81).' },
          { letra: 'c', texto: '19, 20, 21, 79, 80, 81', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: límite-1, límite y límite+1 por frontera: (19,20,21) y (79,80,81).' },
          { letra: 'd', texto: '18, 19, 20, 80, 81, 82', correcta: false,
            explicacion: 'No. Los extremos 18 y 82 están fuera del rango inmediato de las fronteras.' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '3 condiciones × 2 = 8 reglas',
        enunciado: 'Un sistema de envío tiene 3 condiciones: "Pedido urgente" (sí/no), "Zona nacional" (sí/no) y "Peso > 5kg" (sí/no). ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '4', correcta: false,
            explicacion: 'No. 4 sería con dos condiciones (2^2).' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. El número de reglas es el producto de los valores (2^3 = 8).' },
          { letra: 'c', texto: '9', correcta: false,
            explicacion: 'No. 9 no resulta de combinar tres condiciones booleanas.' },
          { letra: 'd', texto: '8', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 × 2 = 8 combinaciones únicas de las tres condiciones.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: 'Inicio→Abierta, Abierta→EnCurso, EnCurso→Cerrada, Abierta→Cerrada = 4',
        enunciado: 'Un sistema de tickets tiene estados [Abierta], [EnCurso] y [Cerrada]. Un ticket puede abrirse, asignarse y cerrarse. ¿Cuántas transiciones válidas básicas existen como mínimo?',
        opciones: [
          { letra: 'a', texto: '3', correcta: false,
            explicacion: 'No. Con 3 transiciones faltaría una de las acciones disponibles.' },
          { letra: 'b', texto: '5', correcta: false,
            explicacion: 'No. Un ticket cerrado no se puede reabrir según el enunciado, por lo que no hay quinta transición.' },
          { letra: 'c', texto: '6', correcta: false,
            explicacion: 'No. Sería si cada estado se conectara con todos los demás, pero un ticket cerrado no tiene transiciones de salida.' },
          { letra: 'd', texto: '4', correcta: true,
            explicacion: 'Correcto. Transiciones: Abierta→EnCurso, EnCurso→Cerrada, Abierta→Cerrada (cierre directo) = 4. Se incluye la creación inicial implícita.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: 'Si se alcanza un 100% de cobertura de sentencia, ¿qué se puede afirmar de la cobertura de rama?',
        opciones: [
          { letra: 'a', texto: 'También será del 100%', correcta: false,
            explicacion: 'No. Ejecutar todas las sentencias no garantiza probar ambos resultados de cada decisión.' },
          { letra: 'b', texto: 'Será del 0%', correcta: false,
            explicacion: 'No. Al ejecutar sentencias, al menos algunas ramas se recorren.' },
          { letra: 'c', texto: 'Puede ser inferior al 100%', correcta: true,
            explicacion: 'Correcto. La cobertura de sentencia es menos exigente; puede que se ejecuten todas las sentencias sin probar ambos resultados de alguna decisión.' },
          { letra: 'd', texto: 'No tiene relación con la cobertura de sentencia', correcta: false,
            explicacion: 'No. Hay una relación de subsumption: rama subsumee a sentencia.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica basada en la experiencia utiliza un contrato de prueba (charter) que define la misión, el área de exploración y el límite de tiempo?',
        opciones: [
          { letra: 'a', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores anticipa defectos típicos, sin charters.' },
          { letra: 'b', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. La lista de comprobación sigue una checklist predefinida.' },
          { letra: 'c', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria organiza sesiones guiadas por un charter: un objetivo, un área y un tiempo definidos; dentro de la misión el tester decide cómo explorar.' },
          { letra: 'd', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. La partición de equivalencia es una técnica de caja negra.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué defectos son especialmente susceptibles de encontrarse mediante la prueba estática?',
        opciones: [
          { letra: 'a', texto: 'Problemas de rendimiento bajo carga', correcta: false,
            explicacion: 'No. El rendimiento requiere prueba dinámica con carga real.' },
          { letra: 'b', texto: 'Inconsistencias y omisiones en la especificación de requisitos', correcta: true,
            explicacion: 'Correcto. La revisión de requisitos detecta inconsistencias, ambigüedades y omisiones que una prueba dinámica difícilmente encontraría.' },
          { letra: 'c', texto: 'Fugas de memoria tras uso prolongado', correcta: false,
            explicacion: 'No. Las fugas de memoria solo se evidencian tras ejecutar el sistema.' },
          { letra: 'd', texto: 'Comportamiento erróneo en condiciones de carga extrema', correcta: false,
            explicacion: 'No. La carga requiere prueba dinámica; la estática no ejecuta el sistema.' }
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: 'En ATDD, ¿qué se define ANTES de escribir el código?',
        opciones: [
          { letra: 'a', texto: 'La estrategia de despliegue en producción', correcta: false,
            explicacion: 'No. El despliegue es posterior a la implementación.' },
          { letra: 'b', texto: 'Los casos de prueba de aceptación derivados de los criterios de aceptación', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de aceptación se definen y acuerdan ANTES de codificar, derivados de los criterios de aceptación de la historia de usuario.' },
          { letra: 'c', texto: 'El esquema de la base de datos', correcta: false,
            explicacion: 'No. El diseño de base de datos es un detalle técnico de implementación.' },
          { letra: 'd', texto: 'La documentación de usuario final', correcta: false,
            explicacion: 'No. La documentación se escribe durante o después de la implementación.' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué respuesta al riesgo implica tomar medidas para reducir la probabilidad o el impacto del riesgo?',
        opciones: [
          { letra: 'a', texto: 'Aceptar el riesgo', correcta: false,
            explicacion: 'No. Aceptar implica asumir el riesgo sin tomar medidas adicionales.' },
          { letra: 'b', texto: 'Transferir el riesgo', correcta: false,
            explicacion: 'No. Transferir implica pasar la responsabilidad a un tercero (p. ej., un seguro).' },
          { letra: 'c', texto: 'Mitigar el riesgo', correcta: true,
            explicacion: 'Correcto. Mitigar consiste en implementar acciones (como pruebas adicionales) que reduzcan la probabilidad o el impacto del riesgo.' },
          { letra: 'd', texto: 'Evitar el riesgo', correcta: false,
            explicacion: 'No. Evitar implica eliminar la causa del riesgo, no solo reducirlo.' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de calidad de producto?',
        opciones: [
          { letra: 'a', texto: 'Porcentaje de casos de prueba ejecutados', correcta: false,
            explicacion: 'No. Es una métrica de avance de la prueba.' },
          { letra: 'b', texto: 'Número de defectos encontrados', correcta: false,
            explicacion: 'No. Contar defectos es una métrica de defectos/proceso.' },
          { letra: 'c', texto: 'Tiempo medio entre fallos (MTBF)', correcta: true,
            explicacion: 'Correcto. El MTBF es una métrica de fiabilidad del producto; mide la calidad del sistema en funcionamiento.' },
          { letra: 'd', texto: 'Horas invertidas en pruebas', correcta: false,
            explicacion: 'No. Las horas son una métrica de esfuerzo, no de calidad del producto.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        nota: 'E = (6 + 4×12 + 18)/6 = (6+48+18)/6 = 72/6 = 12',
        enunciado: 'Se estima una tarea con O=6, M=12 y P=18. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '11', correcta: false,
            explicacion: 'No. 11 no resulta de dividir 72 entre 6.' },
          { letra: 'b', texto: '12', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (6 + 48 + 18)/6 = 72/6 = 12.' },
          { letra: 'c', texto: '13', correcta: false,
            explicacion: 'No. 13 no es el resultado de la fórmula.' },
          { letra: 'd', texto: '18', correcta: false,
            explicacion: 'No. 18 es el valor pesimista; la fórmula pondera los tres valores.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K3',
        nota: 'SD = (18-6)/6 = 12/6 = 2',
        enunciado: 'Con los mismos datos (O=6, M=12, P=18), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '1', correcta: false,
            explicacion: 'No. 1 no resulta de dividir 12 entre 6.' },
          { letra: 'b', texto: '2', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (18 - 6)/6 = 12/6 = 2.' },
          { letra: 'c', texto: '3', correcta: false,
            explicacion: 'No. 3 no resulta de dividir 12 entre 6.' },
          { letra: 'd', texto: '4', correcta: false,
            explicacion: 'No. 4 correspondería a (P-O) = 24.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué informe se genera periódicamente durante la ejecución de pruebas para comunicar el progreso real frente al plan?',
        opciones: [
          { letra: 'a', texto: 'Informe de compleción', correcta: false,
            explicacion: 'No. El informe de compleción se elabora al finalizar las pruebas.' },
          { letra: 'b', texto: 'Informe de avance de la prueba', correcta: true,
            explicacion: 'Correcto. El informe de avance se produce periódicamente y compara el progreso real con lo planificado, apoyado en métricas e indicadores.' },
          { letra: 'c', texto: 'Plan de prueba', correcta: false,
            explicacion: 'No. El plan es el documento de planificación, no un informe de progreso.' },
          { letra: 'd', texto: 'Informe de defectos', correcta: false,
            explicacion: 'No. El informe de defectos describe un defecto individual, no el progreso del plan.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué información NO es esencial en un informe de defecto?',
        opciones: [
          { letra: 'a', texto: 'Pasos para reproducir el defecto', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: los pasos de reproducción son esenciales.' },
          { letra: 'b', texto: 'Resultado esperado vs resultado actual', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: esta comparación es esencial.' },
          { letra: 'c', texto: 'El esquema de la base de datos del sistema', correcta: true,
            explicacion: 'Correcto. El esquema de la BD no es información esencial para describir y reproducir un defecto; lo importante son los pasos, los resultados y el entorno.' },
          { letra: 'd', texto: 'Evidencias (capturas, logs)', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: las evidencias son muy útiles en un informe de defecto.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un ejemplo de riesgo de proyecto?',
        opciones: [
          { letra: 'a', texto: 'El sistema no cumple los requisitos de seguridad', correcta: false,
            explicacion: 'No. Es un riesgo de producto (amenaza a la calidad del sistema).' },
          { letra: 'b', texto: 'El tiempo de respuesta supera los requisitos', correcta: false,
            explicacion: 'No. Es un riesgo de producto (rendimiento insuficiente).' },
          { letra: 'c', texto: 'Falta de presupuesto para las herramientas de prueba', correcta: true,
            explicacion: 'Correcto. La falta de recursos y presupuesto es un riesgo de proyecto que amenaza la ejecución y planificación del trabajo.' },
          { letra: 'd', texto: 'La usabilidad del sistema es deficiente', correcta: false,
            explicacion: 'No. Es un riesgo de producto (calidad no funcional).' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de defectos?',
        opciones: [
          { letra: 'a', texto: 'Número de casos de prueba ejecutados', correcta: false,
            explicacion: 'No. Es una métrica de avance de la prueba.' },
          { letra: 'b', texto: 'Densidad de defectos (defectos por unidad de tamaño del producto)', correcta: true,
            explicacion: 'Correcto. La densidad de defectos, el total de defectos encontrados y los defectos pendientes son métricas de defectos.' },
          { letra: 'c', texto: 'Tiempo de respuesta del sistema', correcta: false,
            explicacion: 'No. Es una métrica de calidad de producto (rendimiento).' },
          { letra: 'd', texto: 'Horas de prueba invertidas', correcta: false,
            explicacion: 'No. Las horas son una métrica de esfuerzo, no de defectos.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K1',
        enunciado: '¿Qué documento de cierre se produce al finalizar las actividades de prueba?',
        opciones: [
          { letra: 'a', texto: 'Plan de prueba', correcta: false,
            explicacion: 'No. El plan se elabora al inicio, no al finalizar.' },
          { letra: 'b', texto: 'Informe de compleción de la prueba', correcta: true,
            explicacion: 'Correcto. El informe de compleción resume las pruebas realizadas, métricas, defectos no resueltos, riesgos no mitigados y lecciones aprendidas.' },
          { letra: 'c', texto: 'Informe de avance de la prueba', correcta: false,
            explicacion: 'No. El informe de avance se produce durante la ejecución, no al finalizar.' },
          { letra: 'd', texto: 'Caso de prueba', correcta: false,
            explicacion: 'No. Un caso de prueba es un conjunto de pasos, no un documento de cierre.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es Postman en el contexto de las pruebas de software?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de gestión de pruebas', correcta: false,
            explicacion: 'No. Postman no gestiona casos ni defectos.' },
          { letra: 'b', texto: 'Herramienta de prueba de APIs (interfaces de programación)', correcta: true,
            explicacion: 'Correcto. Postman se usa para desarrollar, probar y documentar APIs, permitiendo enviar peticiones y validar respuestas.' },
          { letra: 'c', texto: 'Herramienta de análisis estático', correcta: false,
            explicacion: 'No. Postman ejecuta peticiones HTTP, no analiza código estáticamente.' },
          { letra: 'd', texto: 'Herramienta de gestión de proyectos', correcta: false,
            explicacion: 'No. Postman es una herramienta de prueba de APIs, no de gestión de proyectos.' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un riesgo de automatizar las pruebas?',
        opciones: [
          { letra: 'a', texto: 'Reduce el tiempo de ejecución de pruebas repetitivas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de la automatización.' },
          { letra: 'b', texto: 'Expectativas poco realistas sobre lo que la automatización puede lograr', correcta: true,
            explicacion: 'Correcto. Un riesgo típico es esperar que la automatización encuentre muchos defectos nuevos o que sustituya todo el esfuerzo de prueba manual; esas expectativas generan frustración.' },
          { letra: 'c', texto: 'Proporciona retroalimentación más rápida', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja de la automatización.' },
          { letra: 'd', texto: 'Aumenta la cobertura de pruebas', correcta: false,
            explicacion: 'No es un riesgo, es una ventaja potencial.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de las siguientes son herramientas de pruebas de rendimiento?',
        opciones: [
          { letra: 'a', texto: 'Apache JMeter', correcta: true,
            explicacion: 'Correcto. JMeter genera carga masiva y mide tiempos de respuesta, throughput y utilización de recursos.' },
          { letra: 'b', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium automatiza pruebas de interfaz web; no mide rendimiento.' },
          { letra: 'c', texto: 'Gatling', correcta: true,
            explicacion: 'Correcto. Gatling es una herramienta de pruebas de rendimiento basada en Scala, Akka y Netty.' },
          { letra: 'd', texto: 'Jira', correcta: false,
            explicacion: 'No. Jira es una herramienta de gestión de proyectos y defectos.' },
          { letra: 'e', texto: 'Postman', correcta: false,
            explicacion: 'No. Postman es una herramienta de prueba de APIs, no de rendimiento.' }
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
