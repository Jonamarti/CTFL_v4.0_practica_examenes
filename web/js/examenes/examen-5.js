/* examen-5.js — Datos del EXAMEN DE PRÁCTICA 5 (ISTQB CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-5',
    titulo: 'EXAMEN DE PRÁCTICA 5',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K1',
        enunciado: '¿Cuál de las siguientes NO es un objetivo típico de la prueba de software?',
        opciones: [
          { letra: 'a', texto: 'Encontrar defectos en el producto de trabajo', correcta: false,
            explicacion: 'No. Detectar defectos es uno de los objetivos principales de la prueba.' },
          { letra: 'b', texto: 'Proporcionar información sobre el nivel de calidad', correcta: false,
            explicacion: 'No. La prueba genera información objetiva que apoya las decisiones de calidad.' },
          { letra: 'c', texto: 'Generar confianza en el nivel de calidad del producto', correcta: false,
            explicacion: 'No. Proporcionar confianza sobre el nivel de riesgo residual es otro objetivo típico.' },
          { letra: 'd', texto: 'Aumentar el número de defectos en la aplicación', correcta: true,
            explicacion: 'Correcto. La prueba busca detectar defectos, no incrementarlos; además se espera prevenir defectos con actividades tempranas.' },
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: 'Una prueba automatizada termina en estado "fallida". El técnico revisa el código y descubre una variable no inicializada que causa los resultados incorrectos. Según la terminología ISTQB, ¿cómo se denominan la variable mal inicializada, la prueba en estado "fallida" y la acción del programador que la dejó sin inicializar?',
        opciones: [
          { letra: 'a', texto: 'Defecto, fallo y error', correcta: true,
            explicacion: 'Correcto. El programador cometió un error que introdujo un defecto (variable sin inicializar en el código); al ejecutarse, la prueba finalizada en "fallida" muestra el fallo.' },
          { letra: 'b', texto: 'Error, defecto y fallo', correcta: false,
            explicacion: 'No. El orden está invertido: el defecto está en el código, el fallo es el resultado observable y el error es la acción humana que lo originó.' },
          { letra: 'c', texto: 'Fallo, error y defecto', correcta: false,
            explicacion: 'No. La variable sin inicializar es el defecto (en el producto), no el fallo.' },
          { letra: 'd', texto: 'Incidencia, anomalía y error', correcta: false,
            explicacion: 'No. Esos términos operativos no sustituyen a la terminología formal error, defecto y fallo del programa de estudios.' },
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: 'Una plataforma de video se ha probado con 100.000 casos de prueba y el equipo quiere seguir añadiendo casos para "cubrirlo todo". ¿Qué principio de prueba recomienda aceptar que no se puede probar todo?',
        opciones: [
          { letra: 'a', texto: 'Pruebas tempranas', correcta: false,
            explicacion: 'No. Este principio recomienda probar pronto, no abordar la exhaustividad.' },
          { letra: 'b', texto: 'Pruebas exhaustivas imposibles', correcta: true,
            explicacion: 'Correcto. Probar todas las combinaciones de entradas, estados y datos es inviable; la prueba debe priorizar atendiendo al riesgo.' },
          { letra: 'c', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. Esa paradoja se refiere a que las pruebas repetidas dejan de descubrir defectos nuevos.' },
          { letra: 'd', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación describe la concentración de defectos en pocos módulos.' },
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: 'En una aplicación bancaria, el 80 % de los defectos se concentran en dos módulos históricamente complejos. ¿Qué principio de prueba describe esta situación?',
        opciones: [
          { letra: 'a', texto: 'Falacia de ausencia de errores', correcta: false,
            explicacion: 'No. Esa falacia advierte de que corregir defectos no sirve si el sistema no satisface al usuario.' },
          { letra: 'b', texto: 'Pruebas dependientes del contexto', correcta: false,
            explicacion: 'No. El contexto condiciona cómo probar, pero no explica esta concentración de defectos.' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: true,
            explicacion: 'Correcto. La agrupación de defectos señala que una pequeña parte de las áreas suele contener la mayoría de los defectos; hay que priorizarlas.' },
          { letra: 'd', texto: 'Paradoja del pesticida', correcta: false,
            explicacion: 'No. Habla de la pérdida de eficacia de las pruebas repetidas, no de la concentración de defectos.' },
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es la diferencia principal entre una prueba dinámica y una prueba estática?',
        opciones: [
          { letra: 'a', texto: 'La estática la realizan únicamente los desarrolladores', correcta: false,
            explicacion: 'No. Cualquier rol con la preparación adecuada puede realizar análisis estático o revisiones.' },
          { letra: 'b', texto: 'La dinámica siempre precede a la estática', correcta: false,
            explicacion: 'No. Es al contrario: la estática se puede (y suele) aplicar antes, sobre requisitos y diseños.' },
          { letra: 'c', texto: 'No existe diferencia entre ambas', correcta: false,
            explicacion: 'No. Se distinguen por el hecho de ejecutar o no el componente o sistema.' },
          { letra: 'd', texto: 'La dinámica ejecuta el código; la estática analiza productos de trabajo sin ejecutarlos', correcta: true,
            explicacion: 'Correcto. La prueba dinámica requiere ejecutar el software; la estática (revisiones y análisis) se aplica a requisitos, código u otros productos sin ejecución.' },
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: 'El equipo de prueba depende del director de desarrollo y prueba el producto que él mismo contribuyó a construir. ¿Qué consecuencia suele tener este esquema de independencia BAJA?',
        opciones: [
          { letra: 'a', texto: 'Menor objetividad al evaluar su propio trabajo', correcta: true,
            explicacion: 'Correcto. A menor independencia, mayor riesgo de sesgo porque quien prueba tiene menos distancia frente al trabajo que él mismo produjo.' },
          { letra: 'b', texto: 'Mayor velocidad garantizada en la ejecución', correcta: false,
            explicacion: 'No. La independencia no determina la velocidad de ejecución.' },
          { letra: 'c', texto: 'Eliminación de la necesidad de documentar', correcta: false,
            explicacion: 'No. La documentación de las pruebas sigue siendo necesaria en cualquier esquema.' },
          { letra: 'd', texto: 'Pérdida del acceso a la especificación', correcta: false,
            explicacion: 'No. El acceso a la especificación depende de la organización, no del grado de independencia.' },
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes NO es una contribución esperada de las pruebas al éxito del proyecto?',
        opciones: [
          { letra: 'a', texto: 'Reducir el riesgo de fallo del software', correcta: false,
            explicacion: 'No. Probar adecuadamente es una medida clave para reducir el riesgo de fallos.' },
          { letra: 'b', texto: 'Garantizar que el software no tendrá nunca fallos', correcta: true,
            explicacion: 'Correcto. Esa garantía es imposible: la prueba puede reducir el riesgo, pero no demostrar la ausencia de defectos.' },
          { letra: 'c', texto: 'Detectar defectos antes de la entrega', correcta: false,
            explicacion: 'No. Detectar pronto reduce el coste y sí es una contribución esperada.' },
          { letra: 'd', texto: 'Proporcionar información para las decisiones de gestión', correcta: false,
            explicacion: 'No. Los resultados de la prueba alimentan las decisiones sobre el riesgo residual.' },
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K1',
        enunciado: '¿Cuál de las siguientes es una actividad del proceso de prueba?',
        opciones: [
          { letra: 'a', texto: 'Definir la arquitectura del sistema', correcta: false,
            explicacion: 'No. La arquitectura es un artefacto de diseño del producto, no una actividad de prueba.' },
          { letra: 'b', texto: 'Negociar el presupuesto de marketing', correcta: false,
            explicacion: 'No. Eso pertenece a la gestión comercial del proyecto, no al proceso de prueba.' },
          { letra: 'c', texto: 'Análisis y diseño de las pruebas', correcta: true,
            explicacion: 'Correcto. El proceso de prueba incluye planificación, monitorización y control, análisis, diseño, implementación, ejecución y compleción.' },
          { letra: 'd', texto: 'Escribir el código de producción', correcta: false,
            explicacion: 'No. Codificar es una actividad de desarrollo, no del proceso de prueba.' },
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K2',
        enunciado: 'En la prueba de aceptación del usuario (UAT), usuarios finales validan los flujos de trabajo reales de su proceso de negocio. ¿Qué caracteriza a este nivel?',
        opciones: [
          { letra: 'a', texto: 'Verifica las interfaces entre componentes internos', correcta: false,
            explicacion: 'No. Esa es la prueba de integración de componentes.' },
          { letra: 'b', texto: 'Se centra en las interfaces con sistemas vecinos externos', correcta: false,
            explicacion: 'No. Eso corresponde a la integración de sistemas.' },
          { letra: 'c', texto: 'Comprueba que una función aislada cumple su especificación', correcta: false,
            explicacion: 'No. Eso describe la prueba de componente.' },
          { letra: 'd', texto: 'Verifica que el sistema es adecuado para el uso del negocio en condiciones reales', correcta: true,
            explicacion: 'Correcto. La UAT valida las necesidades y procesos de negocio del usuario, usando datos y escenarios reales.' },
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K2',
        enunciado: 'Tras corregir un defecto en el módulo de pagos, el equipo desea comprobar que el carrito de la compra sigue funcionando. ¿Qué tipo de prueba es el más adecuado?',
        opciones: [
          { letra: 'a', texto: 'Prueba de regresión', correcta: true,
            explicacion: 'Correcto. La prueba de regresión re-ejecuta pruebas existentes para verificar que los cambios no han introducido efectos colaterales.' },
          { letra: 'b', texto: 'Prueba de humo', correcta: false,
            explicacion: 'No. La prueba de humo valida las funciones principales para decidir si continuar, pero no se enfoca en el impacto del cambio.' },
          { letra: 'c', texto: 'Prueba de aceptación del usuario', correcta: false,
            explicacion: 'No. La UAT valida la adecuación al negocio, no el impacto de una corrección concreta.' },
          { letra: 'd', texto: 'Prueba de componente aislado', correcta: false,
            explicacion: 'No. Se requiere probar también la integración con el resto del sistema, no solo el módulo aislado.' },
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: 'El equipo quiere medir los tiempos de respuesta y el consumo de memoria de una API antes de que exista la interfaz gráfica. ¿Qué tipo de prueba no funcional es la más indicada?',
        opciones: [
          { letra: 'a', texto: 'Análisis estático', correcta: false,
            explicacion: 'No. El análisis estático no ejecuta la API y no puede medir el rendimiento real.' },
          { letra: 'b', texto: 'Prueba de rendimiento', correcta: true,
            explicacion: 'Correcto. La prueba de rendimiento evalúa tiempos de respuesta, rendimiento, utilización de recursos y capacidad de la API.' },
          { letra: 'c', texto: 'Prueba de usabilidad', correcta: false,
            explicacion: 'No. La usabilidad requiere interactuar con la interfaz de usuario y no mide memoria ni tiempos de la API.' },
          { letra: 'd', texto: 'Prueba de accesibilidad', correcta: false,
            explicacion: 'No. La accesibilidad evalúa el uso para personas con discapacidad, no el rendimiento.' },
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué caracteriza a la prueba de integración de componentes?',
        opciones: [
          { letra: 'a', texto: 'Prueba el sistema contra sus homólogos externos', correcta: false,
            explicacion: 'No. Eso corresponde a la integración de sistemas.' },
          { letra: 'b', texto: 'Solo puede ejecutarse de forma manual', correcta: false,
            explicacion: 'No. Puede automatizarse igual que el resto de niveles.' },
          { letra: 'c', texto: 'Verifica las interfaces entre componentes del mismo sistema, probándolos juntos', correcta: true,
            explicacion: 'Correcto. La integración de componentes comprueba que los componentes interactúan adecuadamente, tras probarlos por separado.' },
          { letra: 'd', texto: 'Valida los requisitos del cliente final', correcta: false,
            explicacion: 'No. Eso es propio de la prueba de aceptación.' },
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué significa "cambio a la izquierda" (shift-left) en el contexto de la verificación?',
        opciones: [
          { letra: 'a', texto: 'Aplazar las pruebas hasta el final del desarrollo', correcta: false,
            explicacion: 'No. Es lo contrario: el shift-left adelanta, no retrasa.' },
          { letra: 'b', texto: 'Eliminar las pruebas manuales del proyecto', correcta: false,
            explicacion: 'No. No tiene relación con la automatización ni la eliminación de pruebas.' },
          { letra: 'c', texto: 'Probar únicamente en el entorno de producción', correcta: false,
            explicacion: 'No. Probar tarde y en producción es lo opuesto al enfoque temprano.' },
          { letra: 'd', texto: 'Realizar las actividades de prueba lo antes posible en el ciclo de vida', correcta: true,
            explicacion: 'Correcto. El shift-left adelanta la verificación y validación a etapas tempranas para reducir costes y detectar defectos cuanto antes.' },
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K1',
        enunciado: '¿Cuál de los siguientes es un beneficio de las pruebas estáticas?',
        opciones: [
          { letra: 'a', texto: 'Detectar defectos en etapas tempranas, cuando corregirlos cuesta menos', correcta: true,
            explicacion: 'Correcto. La revisión y el análisis estático encuentran defectos en requisitos, diseño o código antes de ejecutarlos, con menor coste de corrección.' },
          { letra: 'b', texto: 'Ejecutar el código para medir su rendimiento', correcta: false,
            explicacion: 'No. El rendimiento se mide con pruebas dinámicas.' },
          { letra: 'c', texto: 'Sustituir por completo a las pruebas dinámicas', correcta: false,
            explicacion: 'No. Ambas se complementan; cada una encuentra defectos que la otra no.' },
          { letra: 'd', texto: 'Calcular la cobertura de rama alcanzada', correcta: false,
            explicacion: 'No. La cobertura de rama se mide durante la ejecución de pruebas dinámicas.' },
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué tipo de revisión es la más formal, con roles definidos, procesos rigurosos y uso de listas de verificación?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La informal es la de menor formalidad, sin proceso estructurado.' },
          { letra: 'b', texto: 'Inspección', correcta: true,
            explicacion: 'Correcto. La inspección es la revisión más formal: roles definidos, listas de verificación, métricas y un proceso riguroso con reunión de decisión.' },
          { letra: 'c', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. La revisión técnica es formal pero menos rigurosa que la inspección.' },
          { letra: 'd', texto: 'Walkthrough', correcta: false,
            explicacion: 'No. El walkthrough es de formalidad media y está centrado en la exposición del autor.' },
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K2',
        enunciado: 'En una revisión formal, ¿a quién corresponde registrar los defectos, las acciones y los criterios de salida de forma imparcial?',
        opciones: [
          { letra: 'a', texto: 'Al moderador', correcta: false,
            explicacion: 'No. El moderador dirige y agenda la reunión; no es quien toma las notas.' },
          { letra: 'b', texto: 'Al gestor del proyecto', correcta: false,
            explicacion: 'No. El gestor suele asumir la responsabilidad de que la revisión se complete, sin registrar los hallazgos.' },
          { letra: 'c', texto: 'Al escribano (scribe)', correcta: true,
            explicacion: 'Correcto. El escribano registra de manera imparcial los defectos encontrados, los puntos de acción y el estado del proceso.' },
          { letra: 'd', texto: 'Al autor', correcta: false,
            explicacion: 'No. El autor escribió el producto de trabajo y corrige los defectos; registrarlos imparcialmente no es su función.' },
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál es la característica principal del walkthrough?',
        opciones: [
          { letra: 'a', texto: 'Es el tipo de revisión más formal que existe', correcta: false,
            explicacion: 'No. La más formal es la inspección.' },
          { letra: 'b', texto: 'Descubre defectos de rendimiento ejecutando el sistema', correcta: false,
            explicacion: 'No. El walkthrough no ejecuta el sistema; es una revisión estática.' },
          { letra: 'c', texto: 'Requiere siempre herramientas de medición del código', correcta: false,
            explicacion: 'No. No necesita instrumentos de medida porque no ejecuta código.' },
          { letra: 'd', texto: 'El autor presenta el producto de trabajo y los participantes lo recorren y comentan de forma flexible', correcta: true,
            explicacion: 'Correcto. El walkthrough es una revisión guiada por el autor, informal en estructura, que favorece el aprendizaje y la detección de defectos.' },
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes NO es habitual en el proceso de una revisión formal?',
        opciones: [
          { letra: 'a', texto: 'Corregir el código durante la reunión de revisión', correcta: true,
            explicacion: 'Correcto. En la reunión se identifican y registran los defectos; las correcciones las realiza el autor con posterioridad, fuera de la reunión.' },
          { letra: 'b', texto: 'Reunión de revisión y análisis de la causa raíz', correcta: false,
            explicacion: 'No. El análisis de causa raíz forma parte de la revisión formal de defectos.' },
          { letra: 'c', texto: 'Definición de criterios de salida', correcta: false,
            explicacion: 'No. Los criterios de entrada y salida son parte del proceso formal.' },
          { letra: 'd', texto: 'Preparación individual de los participantes', correcta: false,
            explicacion: 'No. La preparación individual es una fase estándar de la revisión formal.' },
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿Cuál es la diferencia esencial entre la partición de equivalencia y el análisis del valor frontera?',
        opciones: [
          { letra: 'a', texto: 'Son exactamente la misma técnica', correcta: false,
            explicacion: 'No. Se complementan, pero PE elige representantes de clase y AVF trabaja sobre las fronteras.' },
          { letra: 'b', texto: 'PE usa un valor representativo por partición; AVF se centra en los límites de cada partición', correcta: true,
            explicacion: 'Correcto. La partición divide el dominio y toma un valor por clase; el valor frontera explora justo en y junto a los límites.' },
          { letra: 'c', texto: 'PE es de caja blanca y AVF de caja negra', correcta: false,
            explicacion: 'No. Ambas son técnicas de caja negra basadas en la especificación.' },
          { letra: 'd', texto: 'AVF no necesita la especificación del sistema', correcta: false,
            explicacion: 'No. AVF deriva los límites de la especificación.' },
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        nota: 'Particiones: <18→17, 18-65→18 y 65, >65→66 ⇒ 17, 18, 65, 66',
        enunciado: 'Un sistema acepta edades de 18 a 65 inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores que cubre las tres particiones?',
        opciones: [
          { letra: 'a', texto: '17, 18, 19, 64, 65, 66', correcta: false,
            explicacion: 'No. Son los valores del AVF de 3 valores; para partición de equivalencia basta con un representante por partición.' },
          { letra: 'b', texto: '18, 65', correcta: false,
            explicacion: 'No. Solo cubre la partición válida y omitiría las particiones inválidas <18 y >65.' },
          { letra: 'c', texto: '17, 18, 65, 66', correcta: true,
            explicacion: 'Correcto. Un valor por partición: inválida inferior (17), válida con sus límites (18 y 65) e inválida superior (66).' },
          { letra: 'd', texto: '17, 18', correcta: false,
            explicacion: 'No. Cubre la inválida inferior y el límite inferior, pero omite la partición inválida superior (>65).' },
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        nota: 'AVF 2 valores: 17,18 y 65,66',
        enunciado: 'Para el mismo rango de edades (18-65) y aplicando análisis del valor frontera de 2 valores, ¿qué valores se deben probar?',
        opciones: [
          { letra: 'a', texto: '18, 19, 64, 65', correcta: false,
            explicacion: 'No. Son valores interiores y exteriores mal combinados; faltan los inmediatamente exteriores 17 y 66.' },
          { letra: 'b', texto: '17, 18, 19, 64, 65, 66', correcta: false,
            explicacion: 'No. Eso corresponde al AVF de 3 valores.' },
          { letra: 'c', texto: '17, 18, 65', correcta: false,
            explicacion: 'No. Falta el 66, el vecino exterior de la frontera superior.' },
          { letra: 'd', texto: '17, 18, 65, 66', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores combina justo fuera y límite de cada frontera: (17,18) y (65,66).' },
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        enunciado: '¿En qué se diferencia el AVF de 3 valores, respecto al de 2 valores, para una misma frontera?',
        opciones: [
          { letra: 'a', texto: 'Añade el primer valor interior a cada lado del límite', correcta: true,
            explicacion: 'Correcto. El AVF de 3 valores prueba límite-1, límite y límite+1; el de 2 valores solo límite y límite+1 (o límite-1).' },
          { letra: 'b', texto: 'Usa únicamente valores válidos', correcta: false,
            explicacion: 'No. En ambos se incluyen valores de las particiones inválidas adyacentes.' },
          { letra: 'c', texto: 'Elimina los valores exteriores a los límites', correcta: false,
            explicacion: 'No. Los valores exteriores siguen presentes; se añade el vecino interior.' },
          { letra: 'd', texto: 'Triplica el número de particiones', correcta: false,
            explicacion: 'No. No cambia las particiones; solo añade un valor a cada frontera.' },
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        nota: '2 × 2 × 2 = 8 reglas',
        enunciado: 'El descuento de una tienda depende de tres condiciones booleanas: "cliente premium", "pedido mayor de 100 €" y "tiene cupón". ¿Cuántas reglas tiene la tabla de decisión completa?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. El número de reglas es el producto de los valores posibles de cada condición (2^3 = 8).' },
          { letra: 'b', texto: '8', correcta: true,
            explicacion: 'Correcto. Reglas = 2 × 2 × 2 = 8 combinaciones únicas de las tres condiciones.' },
          { letra: 'c', texto: '16', correcta: false,
            explicacion: 'No. 16 resultaría de combinar cuatro condiciones booleanas (2^4).' },
          { letra: 'd', texto: '3', correcta: false,
            explicacion: 'No. 3 es el número de condiciones, no de reglas.' },
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K3',
        nota: '3 transiciones',
        enunciado: 'Un semáforo tiene los estados [Rojo], [Ámbar] y [Verde]. La secuencia automática es Rojo→Verde→Ámbar→Rojo. ¿Cuántas transiciones forman este ciclo básico?',
        opciones: [
          { letra: 'a', texto: '6', correcta: false,
            explicacion: 'No. Serían 6 si cada estado se conectara con los otros dos en ambos sentidos.' },
          { letra: 'b', texto: '2', correcta: false,
            explicacion: 'No. Dos transiciones no bastan para recorrer los tres estados del ciclo.' },
          { letra: 'c', texto: '3', correcta: true,
            explicacion: 'Correcto. Las transiciones son Rojo→Verde, Verde→Ámbar y Ámbar→Rojo: 3 en total.' },
          { letra: 'd', texto: '4', correcta: false,
            explicacion: 'No. Habría una cuarta si el ciclo repitiera algún estado intermedio.' },
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué exige la cobertura de sentencia (cobertura de enunciado)?',
        opciones: [
          { letra: 'a', texto: 'Que se hayan probado ambos resultados de cada decisión', correcta: false,
            explicacion: 'No. Eso lo exige la cobertura de rama, que es más fuerte.' },
          { letra: 'b', texto: 'Que se prueben todos los valores posibles de un rango', correcta: false,
            explicacion: 'No. Eso sería una prueba exhaustiva por partición, no una medida estructural.' },
          { letra: 'c', texto: 'Que el código carezca por completo de defectos', correcta: false,
            explicacion: 'No. Ninguna técnica de cobertura demuestra ausencia de defectos.' },
          { letra: 'd', texto: 'Que toda sentencia ejecutable se haya ejecutado al menos una vez', correcta: true,
            explicacion: 'Correcto. La cobertura de sentencia mide el porcentaje de sentencias ejecutables recorridas al menos una vez por las pruebas.' },
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K2',
        enunciado: 'Si un conjunto de pruebas alcanza el 100 % de cobertura de rama, ¿qué puede afirmarse de la cobertura de sentencia?',
        opciones: [
          { letra: 'a', texto: 'Será también del 100 %', correcta: true,
            explicacion: 'Correcto. Probar el resultado verdadero y falso de cada decisión obliga a ejecutar todas las sentencias: la cobertura de rama subsume a la de sentencia.' },
          { letra: 'b', texto: 'Puede ser del 0 %', correcta: false,
            explicacion: 'No. Es imposible: recorrer ambas ramas ejecuta necesariamente sentencias.' },
          { letra: 'c', texto: 'No existe relación entre ambas', correcta: false,
            explicacion: 'No. Una subsume a la otra: 100 % de rama implica 100 % de sentencia.' },
          { letra: 'd', texto: 'Será exactamente la mitad', correcta: false,
            explicacion: 'No. No hay una proporción fija entre ambas métricas.' },
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: 'Durante una sesión guiada por un charter con misión y límite de tiempo, el tester aprende la aplicación mientras la prueba. ¿Qué técnica está empleando?',
        opciones: [
          { letra: 'a', texto: 'Análisis del valor frontera', correcta: false,
            explicacion: 'No. Es una técnica de caja negra derivada de la especificación.' },
          { letra: 'b', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria combina diseño y ejecución simultáneos, dirigida por un charter con misión, área de exploración y tiempo.' },
          { letra: 'c', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores anticipa defectos por experiencia, sin sesiones con charter.' },
          { letra: 'd', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. La lista de comprobación sigue una guía fija, no una exploración libre.' },
        ]
      },
      {
        numero: 28, capitulo: 4, nivel: 'K2',
        enunciado: 'Una tester experta en sistemas de facturación anticipa dónde acostumbran a fallar y diseña casos específicamente dirigidos a esas zonas. ¿Qué técnica emplea?',
        opciones: [
          { letra: 'a', texto: 'Cobertura de rama', correcta: false,
            explicacion: 'No. Es una técnica estructural basada en el código.' },
          { letra: 'b', texto: 'Transición de estados', correcta: false,
            explicacion: 'No. Se apoya en el modelo de estados del sistema, no en la intuición del tester.' },
          { letra: 'c', texto: 'Predicción de errores', correcta: true,
            explicacion: 'Correcto. La predicción de errores (error guessing) usa la experiencia en sistemas similares para atacar las áreas donde suelen aparecer defectos.' },
          { letra: 'd', texto: 'Tabla de decisión', correcta: false,
            explicacion: 'No. La tabla de decisión se construye desde la lógica de negocio, no desde la experiencia.' },
        ]
      },
      {
        numero: 29, capitulo: 4, nivel: 'K2',
        enunciado: 'Ante cada nueva versión, el equipo recorre una lista predefinida de aspectos a comprobar en la instalación del sistema. ¿Qué técnica de prueba es?',
        opciones: [
          { letra: 'a', texto: 'Prueba exploratoria', correcta: false,
            explicacion: 'No. La exploratoria es libre y no se limita a una lista fija.' },
          { letra: 'b', texto: 'Partición de equivalencia', correcta: false,
            explicacion: 'No. Deriva valores de prueba de las particiones de la especificación.' },
          { letra: 'c', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. Es una revisión estática de producto de trabajo, no una prueba de instalación.' },
          { letra: 'd', texto: 'Prueba basada en lista de comprobación', correcta: true,
            explicacion: 'Correcto. La prueba basada en lista de comprobación (checklist-based testing) guía la verificación por una lista predefinida de criterios.' },
        ]
      },
      {
        numero: 30, capitulo: 4, nivel: 'K2',
        enunciado: 'En el desarrollo guiado por pruebas de aceptación (ATDD), ¿cuándo se escriben los casos de prueba de aceptación?',
        opciones: [
          { letra: 'a', texto: 'Antes de codificar, a partir de los criterios de aceptación', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de aceptación se definen y acuerdan antes de implementar, derivados de los criterios de aceptación.' },
          { letra: 'b', texto: 'Después de codificar la funcionalidad', correcta: false,
            explicacion: 'No. El sentido de ATDD es definir la verificación antes del código.' },
          { letra: 'c', texto: 'Solo al final del proyecto', correcta: false,
            explicacion: 'No. Se hacen de forma iterativa junto con cada historia, no al final.' },
          { letra: 'd', texto: 'En el entorno de producción', correcta: false,
            explicacion: 'No. Se diseñan y ejecutan en entornos de prueba, no en producción.' },
        ]
      },
      {
        numero: 31, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué formato debe seguir una buena historia de usuario?',
        opciones: [
          { letra: 'a', texto: 'SI/ENTONCES/SINO', correcta: false,
            explicacion: 'No. Es una construcción de programación, no una historia de usuario.' },
          { letra: 'b', texto: 'Como [rol], quiero [función], para [beneficio]', correcta: true,
            explicacion: 'Correcto. La estructura clásica de historia de usuario es "Como [rol] quiero [funcionalidad] para [beneficio]".' },
          { letra: 'c', texto: 'Dado/cuando/entonces', correcta: false,
            explicacion: 'No. Ese es el formato de los criterios de aceptación.' },
          { letra: 'd', texto: 'START/STOP/CONTINUE', correcta: false,
            explicacion: 'No. Es un formato de retrospectiva, no de historias de usuario.' },
        ]
      },
      {
        numero: 32, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué significa la letra "I" del acrónimo INVEST para historias de usuario?',
        opciones: [
          { letra: 'a', texto: 'Inmediata', correcta: false,
            explicacion: 'No. No es uno de los criterios INVEST.' },
          { letra: 'b', texto: 'Inflable', correcta: false,
            explicacion: 'No. El acrónimo habla de calidad de las historias, no de tamaño ilimitado.' },
          { letra: 'c', texto: 'Independiente (Independent)', correcta: true,
            explicacion: 'Correcto. INVEST: Independent, Negotiable, Valuable, Estimable, Small y Testable; la I es Independent (independiente).' },
          { letra: 'd', texto: 'Iterativa', correcta: false,
            explicacion: 'No. "Iterativa" no forma parte del acrónimo INVEST.' },
        ]
      },
      {
        numero: 33, capitulo: 4, nivel: 'K2',
        enunciado: '¿En qué formato se expresan habitualmente los criterios de aceptación?',
        opciones: [
          { letra: 'a', texto: 'Como/quiero/para', correcta: false,
            explicacion: 'No. Ese es el formato de la historia de usuario.' },
          { letra: 'b', texto: 'Registrar/analizar/seguir', correcta: false,
            explicacion: 'No. Es un flujo de gestión de incidencias, no el formato estándar de criterios.' },
          { letra: 'c', texto: 'Rojo/verde/refactorizar', correcta: false,
            explicacion: 'No. Es el ciclo TDD, no el formato de los criterios de aceptación.' },
          { letra: 'd', texto: 'Dado/cuando/entonces (Given/When/Then)', correcta: true,
            explicacion: 'Correcto. Los criterios de aceptación se escriben como Given/When/Then: precondición, acción y resultado observable.' },
        ]
      },
      {
        numero: 34, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué información es imprescindible en un informe de defecto bien documentado?',
        opciones: [
          { letra: 'a', texto: 'Pasos para reproducir y resultados esperado/actual', correcta: true,
            explicacion: 'Correcto. Un buen informe incluye pasos de reproducción, resultado esperado y actual, severidad, prioridad y trazabilidad al requisito.' },
          { letra: 'b', texto: 'Únicamente la fecha en que se encontró', correcta: false,
            explicacion: 'No. La fecha es un dato, pero sin pasos de reproducción el defecto no se puede diagnosticar.' },
          { letra: 'c', texto: 'El nombre del responsable del entorno', correcta: false,
            explicacion: 'No. Eso no describe el fallo ni cómo reproducirlo.' },
          { letra: 'd', texto: 'El presupuesto del módulo implicado', correcta: false,
            explicacion: 'No. El coste no es parte del contenido técnico del informe de defecto.' },
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una amenaza al PROYECTO (riesgo de proyecto)?',
        opciones: [
          { letra: 'a', texto: 'La aplicación resulta poco usable', correcta: false,
            explicacion: 'No. Es un riesgo de producto (calidad no funcional).' },
          { letra: 'b', texto: 'Falta de personal cualificado para las pruebas', correcta: true,
            explicacion: 'Correcto. La disponibilidad de recursos, plazos y personal son riesgos de proyecto; afectan a la gestión de la prueba.' },
          { letra: 'c', texto: 'El sistema no cumple el rendimiento esperado', correcta: false,
            explicacion: 'No. Es un riesgo de producto: una característica del sistema amenaza su calidad.' },
          { letra: 'd', texto: 'Errores de cálculo en la lógica de negocio', correcta: false,
            explicacion: 'No. Es un riesgo de producto intrínseco al sistema.' },
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K3',
        nota: 'E = (3 + 4×6 + 15)/6 = (3+24+15)/6 = 42/6 = 7',
        enunciado: 'Se estima una tarea con O=3, M=6 y P=15. ¿Cuál es la estimación por el método de tres puntos?',
        opciones: [
          { letra: 'a', texto: '9', correcta: false,
            explicacion: 'No. Eso daría de sumar O+M+P y dividir entre 4, fórmula distinta.' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. El 6 es la estimación "más probable"; la fórmula pondera también lo optimista y lo pesimista.' },
          { letra: 'c', texto: '7', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (3 + 24 + 15)/6 = 42/6 = 7.' },
          { letra: 'd', texto: '8', correcta: false,
            explicacion: 'No. 8 no resulta de dividir 42 entre 6.' },
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K3',
        nota: 'SD = (15-3)/6 = 12/6 = 2',
        enunciado: 'Con los mismos datos (O=3, M=6, P=15), ¿cuál es la desviación estándar?',
        opciones: [
          { letra: 'a', texto: '2,5', correcta: false,
            explicacion: 'No. 2,5 no resulta de dividir 12 entre 6.' },
          { letra: 'b', texto: '3', correcta: false,
            explicacion: 'No. Equivale a dividir 18 entre 6, que no corresponde a (P - O).' },
          { letra: 'c', texto: '1,5', correcta: false,
            explicacion: 'No. SD = (P - O)/6 = 12/6 = 2.' },
          { letra: 'd', texto: '2', correcta: true,
            explicacion: 'Correcto. Desviación estándar = (P - O)/6 = (15 - 3)/6 = 12/6 = 2.' },
        ]
      },
      {
        numero: 38, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de pruebas, ¿qué niveles de prueba dominan la base?',
        opciones: [
          { letra: 'a', texto: 'Las pruebas de componente/unitarias, numerosas y rápidas', correcta: true,
            explicacion: 'Correcto. En la base de la pirámide predominan muchas pruebas de componente rápidas y baratas; hacia la cúspide, pocas E2E.' },
          { letra: 'b', texto: 'Las pruebas de extremo a extremo (E2E)', correcta: false,
            explicacion: 'No. Las E2E ocupan la cúspide, en poca cantidad, por ser lentas y costosas.' },
          { letra: 'c', texto: 'Las pruebas manuales de aceptación', correcta: false,
            explicacion: 'No. La pirámide prioriza la automatización en capas inferiores.' },
          { letra: 'd', texto: 'Las pruebas de carga', correcta: false,
            explicacion: 'No. La pirámide describe niveles de prueba, no un tipo de no funcional en la base.' },
        ]
      },
      {
        numero: 39, capitulo: 5, nivel: 'K2',
        enunciado: 'Un panel de control muestra el porcentaje de casos ejecutados, los defectos abiertos y el progreso frente al plan. ¿Qué actividad del proceso de prueba soporta esta información?',
        opciones: [
          { letra: 'a', texto: 'Compleción de la prueba', correcta: false,
            explicacion: 'No. La compleción se realiza al terminar y resume el cierre, no el progreso en curso.' },
          { letra: 'b', texto: 'Monitorización de la prueba', correcta: true,
            explicacion: 'Correcto. La monitorización compara el progreso real con el plan mediante métricas e indicadores que alimentan el informe de progreso.' },
          { letra: 'c', texto: 'Análisis de la prueba', correcta: false,
            explicacion: 'No. El análisis evalúa la base de prueba para definir condiciones, no produce paneles de progreso.' },
          { letra: 'd', texto: 'Diseño de la prueba', correcta: false,
            explicacion: 'No. El diseño construye casos y procedimientos de prueba.' },
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        nota: 'c y e (Jira y MantisBT gestionan defectos; Jenkins, Selenium y JMeter son de otro tipo)',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles de las siguientes son herramientas de GESTIÓN de defectos?',
        opciones: [
          { letra: 'a', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium automatiza pruebas de interfaz web; no gestiona defectos.' },
          { letra: 'b', texto: 'Apache JMeter', correcta: false,
            explicacion: 'No. JMeter se usa para pruebas de rendimiento y carga, no para la gestión de defectos.' },
          { letra: 'c', texto: 'Jira', correcta: true,
            explicacion: 'Correcto. Jira es una herramienta de gestión de proyectos e incidencias usada habitualmente para gestionar defectos.' },
          { letra: 'd', texto: 'Jenkins', correcta: false,
            explicacion: 'No. Jenkins es un servidor de integración continua, no una herramienta de gestión de defectos.' },
          { letra: 'e', texto: 'MantisBT', correcta: true,
            explicacion: 'Correcto. MantisBT es un sistema de seguimiento de defectos (issue tracker) de uso extendido.' },
        ]
      },
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
