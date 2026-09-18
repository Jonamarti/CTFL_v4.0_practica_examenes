/* examen-3.js — Datos del EXAMEN DE PRÁCTICA 3 (CTFL v4.0) */
(function (g) {
  'use strict';
  g.EXAMENES = g.EXAMENES || [];
  g.EXAMENES.push({
    id: 'examen-3',
    titulo: 'EXAMEN DE PRÁCTICA 3',
    duracionRecomendada: 60,
    preguntas: [
      {
        numero: 1, capitulo: 1, nivel: 'K2',
        enunciado: 'Un equipo de prueba ha estado ejecutando el mismo conjunto de pruebas durante varias iteraciones y ya no encuentra defectos nuevos. ¿Qué principio de prueba explica esta situación?',
        opciones: [
          { letra: 'a', texto: 'Pruebas tempranas', correcta: false,
            explicacion: 'No. El principio de pruebas tempranas se refiere a que probar pronto ahorra costes, no a que dejen de aparecer defectos nuevos.' },
          { letra: 'b', texto: 'Paradoja del pesticida', correcta: true,
            explicacion: 'Correcto. La paradoja del pesticida explica que repetir las mismas pruebas hace que dejen de descubrir defectos nuevos; es necesario revisar y actualizar el conjunto de pruebas.' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación de defectos afirma que la mayoría de defectos se concentran en pocas áreas, no que desaparezcan con la repetición.' },
          { letra: 'd', texto: 'La prueba depende del contexto', correcta: false,
            explicacion: 'No. Ese principio afirma que la estrategia depende del contexto, no explica la pérdida de eficacia por repetición.' }
        ]
      },
      {
        numero: 2, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes afirmaciones sobre probar y depurar es CORRECTA?',
        opciones: [
          { letra: 'a', texto: 'La depuración incluye la corrección de la causa raíz del defecto', correcta: true,
            explicacion: 'Correcto. Depurar es la actividad que localiza y corrige la causa raíz del defecto que produjo el fallo; probar solo lo detecta.' },
          { letra: 'b', texto: 'Probar y depurar son actividades idénticas', correcta: false,
            explicacion: 'No. Probar busca defectos; depurar los diagnostica y corrige. Son actividades distintas.' },
          { letra: 'c', texto: 'La depuración encuentra defectos mediante la ejecución de pruebas', correcta: false,
            explicacion: 'No. Esa descripción corresponde a la prueba: la depuración viene DESPUÉS para analizar y corregir.' },
          { letra: 'd', texto: 'Probar repara los defectos encontrados', correcta: false,
            explicacion: 'No. Probar detecta y reporta; quien repara es depurando (desarrollo).' }
        ]
      },
      {
        numero: 3, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un ejemplo de cómo la prueba contribuye al éxito?',
        opciones: [
          { letra: 'a', texto: 'Aumentando el coste total del proyecto', correcta: false,
            explicacion: 'No. Aumentar el coste no es una contribución al éxito; la prueba lo reduce a largo plazo al evitar defectos caros.' },
          { letra: 'b', texto: 'Retrasando la entrega del producto', correcta: false,
            explicacion: 'No. Retrasar la entrega no es éxito; el objetivo es aportar calidad y riesgo controlado.' },
          { letra: 'c', texto: 'Identificando defectos tempranamente para reducir costes de corrección', correcta: true,
            explicacion: 'Correcto. La prueba contribuye al éxito detectando defectos lo antes posible, lo que abarata su corrección y reduce el riesgo de fallos en producción.' },
          { letra: 'd', texto: 'Eliminando la necesidad de desarrolladores', correcta: false,
            explicacion: 'No. La prueba no sustituye al desarrollo; ambos son necesarios y se complementan.' }
        ]
      },
      {
        numero: 4, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál es la diferencia entre un fallo y un defecto?',
        opciones: [
          { letra: 'a', texto: 'Son el mismo concepto', correcta: false,
            explicacion: 'No. Son conceptos distintos: el defecto es la causa en el código y el fallo es su efecto observable.' },
          { letra: 'b', texto: 'Un defecto es una anomalía en el código; un fallo es la manifestación observable del defecto durante la ejecución', correcta: true,
            explicacion: 'Correcto. El defecto (bug/fault) es la anomalía, normalmente en el código, introducida por un error; el fallo es el comportamiento erróneo que se observa al ejecutarlo.' },
          { letra: 'c', texto: 'Un fallo está en el código; un defecto es observable en la ejecución', correcta: false,
            explicacion: 'No. Está invertido: el defecto está en el código y el fallo se observa en la ejecución.' },
          { letra: 'd', texto: 'Un defecto siempre causa un fallo inmediato', correcta: false,
            explicacion: 'No. Un defecto solo se manifiesta como fallo cuando se ejecuta en las condiciones adecuadas; puede permanecer latente mucho tiempo.' }
        ]
      },
      {
        numero: 5, capitulo: 1, nivel: 'K2',
        enunciado: '¿Qué principio de prueba indica que un sistema que funciona perfectamente pero no satisface las necesidades del usuario no tiene valor?',
        opciones: [
          { letra: 'a', texto: 'Pruebas tempranas', correcta: false,
            explicacion: 'No. El principio de pruebas tempranas habla de empezar a probar pronto, no de la satisfacción del usuario.' },
          { letra: 'b', texto: 'Falacia de ausencia de errores', correcta: true,
            explicacion: 'Correcto. La falacia de ausencia de errores: encontrar y corregir defectos no sirve de nada si el sistema no es usable ni satisface las necesidades del usuario (que no haya errores detectados no implica valor).' },
          { letra: 'c', texto: 'Agrupación de defectos', correcta: false,
            explicacion: 'No. La agrupación de defectos habla de dónde se concentran los defectos, no del valor para el usuario.' },
          { letra: 'd', texto: 'Pruebas exhaustivas son imposibles', correcta: false,
            explicacion: 'No. Ese principio trata de la imposibilidad de probarlo todo, no del valor para el usuario.' }
        ]
      },
      {
        numero: 6, capitulo: 1, nivel: 'K2',
        enunciado: '¿En qué actividad se comparan los resultados reales con los resultados esperados?',
        opciones: [
          { letra: 'a', texto: 'Análisis de la prueba', correcta: false,
            explicacion: 'No. En el análisis se identifican condiciones de prueba a partir de la base de prueba.' },
          { letra: 'b', texto: 'Diseño de la prueba', correcta: false,
            explicacion: 'No. En el diseño se crean y priorizan casos y datos de prueba.' },
          { letra: 'c', texto: 'Ejecución de la prueba', correcta: true,
            explicacion: 'Correcto. En la ejecución se ejecutan los casos y se comparan los resultados reales con los esperados para decidir si la prueba pasa o falla.' },
          { letra: 'd', texto: 'Planificación de la prueba', correcta: false,
            explicacion: 'No. La planificación define objetivos, estrategia y recursos; no compara resultados.' }
        ]
      },
      {
        numero: 7, capitulo: 1, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un producto de prueba según ISTQB?',
        opciones: [
          { letra: 'a', texto: 'Código fuente', correcta: false,
            explicacion: 'No. El código fuente es un producto de desarrollo, no un producto de prueba.' },
          { letra: 'b', texto: 'Manual de usuario', correcta: false,
            explicacion: 'No. El manual de usuario es documentación del producto, no un producto de prueba.' },
          { letra: 'c', texto: 'Caso de prueba', correcta: true,
            explicacion: 'Correcto. Son productos de prueba: el plan, las condiciones, los casos, los procedimientos y los informes, entre otros.' },
          { letra: 'd', texto: 'Especificación de requisitos', correcta: false,
            explicacion: 'No. La especificación de requisitos es la base de prueba (entrada), no un producto de prueba.' }
        ]
      },
      {
        numero: 8, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué nivel de prueba se centra en probar el comportamiento de todo el sistema incluyendo pruebas funcionales de extremo a extremo?',
        opciones: [
          { letra: 'a', texto: 'Prueba de componente', correcta: false,
            explicacion: 'No. La prueba de componente verifica un componente aislado, no el sistema completo.' },
          { letra: 'b', texto: 'Prueba de integración de componentes', correcta: false,
            explicacion: 'No. Se centra en las interfaces entre componentes, no en el comportamiento E2E del sistema.' },
          { letra: 'c', texto: 'Prueba de sistema', correcta: true,
            explicacion: 'Correcto. La prueba de sistema aborda el comportamiento del sistema completo, con pruebas funcionales de extremo a extremo y no funcionales, sobre el sistema íntegro.' },
          { letra: 'd', texto: 'Prueba de aceptación', correcta: false,
            explicacion: 'No. La aceptación valida las necesidades del usuario/negocio y la preparación para el despliegue, no se centra en el comportamiento E2E técnico.' }
        ]
      },
      {
        numero: 9, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué son las retrospectivas en el contexto del desarrollo de software?',
        opciones: [
          { letra: 'a', texto: 'Revisiones del código fuente', correcta: false,
            explicacion: 'No. La revisión de código es una prueba estática técnica, no una retrospectiva.' },
          { letra: 'b', texto: 'Reuniones para discutir qué salió bien y qué puede mejorarse al final de una iteración o proyecto', correcta: true,
            explicacion: 'Correcto. La retrospectiva es una reunión al final de una iteración o proyecto para analizar qué salió bien, qué puede mejorar y cómo implementarlo.' },
          { letra: 'c', texto: 'Pruebas de regresión automatizadas', correcta: false,
            explicacion: 'No. Las pruebas de regresión son diferentes de las retrospectivas.' },
          { letra: 'd', texto: 'Planificación de la siguiente iteración', correcta: false,
            explicacion: 'No. La planificación define el trabajo de la siguiente iteración; la retrospectiva revisa la anterior.' }
        ]
      },
      {
        numero: 10, capitulo: 2, nivel: 'K1',
        enunciado: '¿Qué buena práctica de prueba se asocia con el enfoque de "desplazamiento a la izquierda"?',
        opciones: [
          { letra: 'a', texto: 'Realizar pruebas solo al final del desarrollo', correcta: false,
            explicacion: 'No. Probar solo al final es lo contrario del shift-left.' },
          { letra: 'b', texto: 'Analizar los documentos de requisitos con mirada de probador antes de programar', correcta: true,
            explicacion: 'Correcto. El desplazamiento a la izquierda adelanta las actividades de prueba: revisar requisitos y diseños ANTES de programar, usar análisis estático y CI temprano.' },
          { letra: 'c', texto: 'Esperar a tener el sistema completo para probar', correcta: false,
            explicacion: 'No. Esperar al sistema completo es el enfoque "a la derecha", tardío y caro.' },
          { letra: 'd', texto: 'Probar solo en producción', correcta: false,
            explicacion: 'No. Probar solo en producción contradice el shift-left y aumenta el riesgo.' }
        ]
      },
      {
        numero: 11, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una característica de la prueba de aceptación alfa?',
        opciones: [
          { letra: 'a', texto: 'La realizan usuarios finales en su propio entorno', correcta: false,
            explicacion: 'No. Eso es la prueba de aceptación beta, realizada por usuarios finales en su entorno real.' },
          { letra: 'b', texto: 'La realiza un equipo interno en las instalaciones del desarrollador con usuarios simulados', correcta: true,
            explicacion: 'Correcto. La aceptación alfa la lleva a cabo un equipo interno del desarrollador, en sus instalaciones y con papeles/usuarios simulados.' },
          { letra: 'c', texto: 'La realiza el equipo de desarrollo', correcta: false,
            explicacion: 'No. Aunque el equipo sea interno, en la alfa participan usuarios simulados que representan roles de negocio; no es una prueba del equipo de desarrollo para sí mismo.' },
          { letra: 'd', texto: 'Solo prueba aspectos de rendimiento', correcta: false,
            explicacion: 'No. La aceptación (incluso alfa) valida la preparación para el despliegue, no solo el rendimiento.' }
        ]
      },
      {
        numero: 12, capitulo: 2, nivel: 'K2',
        enunciado: '¿Qué tipos de prueba se practican en cualquiera de los niveles de prueba?',
        opciones: [
          { letra: 'a', texto: 'Solo prueba funcional', correcta: false,
            explicacion: 'No. La funcional es un tipo, pero no el único aplicable a todos los niveles.' },
          { letra: 'b', texto: 'Solo prueba no funcional', correcta: false,
            explicacion: 'No. La no funcional también se aplica en todos los niveles, pero no es la única.' },
          { letra: 'c', texto: 'Funcional, no funcional, caja blanca y caja negra', correcta: true,
            explicacion: 'Correcto. Los tipos de prueba (funcional, no funcional, estructural/caja blanca, caja negra y relacionados con cambios) pueden aplicarse en cualquier nivel de prueba.' },
          { letra: 'd', texto: 'Solo prueba de caja blanca', correcta: false,
            explicacion: 'No. La caja blanca es un tipo, pero se combina con otros en todos los niveles.' }
        ]
      },
      {
        numero: 13, capitulo: 2, nivel: 'K2',
        enunciado: '¿Cuándo se realiza la prueba de regresión?',
        opciones: [
          { letra: 'a', texto: 'Solo al final del proyecto', correcta: false,
            explicacion: 'No. La regresión se ejecuta tras cada cambio relevante, no solo al cierre.' },
          { letra: 'b', texto: 'Después de cada cambio, para verificar que no se han introducido defectos', correcta: true,
            explicacion: 'Correcto. La prueba de regresión se hace tras cada cambio (corrección, nueva funcionalidad, refactor) para comprobar que no se introdujeron defectos en lo ya probado.' },
          { letra: 'c', texto: 'Solo cuando se añaden nuevas funcionalidades', correcta: false,
            explicacion: 'No solo al añadir funciones: también tras correcciones, integraciones y cambios de entorno/configuración.' },
          { letra: 'd', texto: 'Nunca, si las pruebas de confirmación pasan', correcta: false,
            explicacion: 'No. La confirmación verifica el defecto corregido, pero la regresión cubre todo el sistema; una no sustituye a la otra.' }
        ]
      },
      {
        numero: 14, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes NO es un producto de trabajo que pueda examinarse mediante prueba estática?',
        opciones: [
          { letra: 'a', texto: 'Especificación de requisitos', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: los requisitos sí se examinan con prueba estática (revisiones).' },
          { letra: 'b', texto: 'Código fuente', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: el código se examina con análisis estático y revisiones.' },
          { letra: 'c', texto: 'Software en ejecución', correcta: true,
            explicacion: 'Correcto. El software en ejecución NO se puede examinar con prueba estática (que no ejecuta código); requiere prueba dinámica.' },
          { letra: 'd', texto: 'Documentación de diseño', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: el diseño se revisa por prueba estática.' }
        ]
      },
      {
        numero: 15, capitulo: 3, nivel: 'K2',
        enunciado: '¿Qué tipo de revisión es la más formal y sigue el proceso genérico completo según ISO/IEC 20246?',
        opciones: [
          { letra: 'a', texto: 'Revisión informal', correcta: false,
            explicacion: 'No. La informal es la menos formal y no sigue un proceso definido.' },
          { letra: 'b', texto: 'Revisión guiada', correcta: false,
            explicacion: 'No. El walkthrough es de formalidad media, dirigido por el autor.' },
          { letra: 'c', texto: 'Revisión técnica', correcta: false,
            explicacion: 'No. Es formal, pero la inspección lo es más y exige más rigor.' },
          { letra: 'd', texto: 'Inspección', correcta: true,
            explicacion: 'Correcto. La inspección es el tipo de revisión más formal: proceso completo, roles definidos (el autor no revisa), métricas y registro de datos.' }
        ]
      },
      {
        numero: 16, capitulo: 3, nivel: 'K1',
        enunciado: '¿Qué ventaja tiene que los implicados aporten su opinión pronto y de forma reiterada?',
        opciones: [
          { letra: 'a', texto: 'Aumento del coste del proyecto', correcta: false,
            explicacion: 'No. Justamente la retroalimentación temprana reduce costes al evitar retrabajo.' },
          { letra: 'b', texto: 'Prevención de malentendidos sobre los requisitos', correcta: true,
            explicacion: 'Correcto. Recibir pronto y con asiduidad el parecer de los implicados evita malentendidos sobre los requisitos y cambios tardíos y caros.' },
          { letra: 'c', texto: 'Mayor necesidad de cambios tardíos', correcta: false,
            explicacion: 'No. Es lo contrario: alinear pronto reduce los cambios tardíos.' },
          { letra: 'd', texto: 'Reducción de la comunicación entre el equipo', correcta: false,
            explicacion: 'No. Al contrario, fomenta más y mejor comunicación.' }
        ]
      },
      {
        numero: 17, capitulo: 3, nivel: 'K2',
        enunciado: 'En una revisión, ¿qué rol registra la información, las decisiones y las anomalías encontradas?',
        opciones: [
          { letra: 'a', texto: 'El moderador', correcta: false,
            explicacion: 'No. El moderador facilita y garantiza la eficacia de la reunión, pero no lleva el registro.' },
          { letra: 'b', texto: 'El autor', correcta: false,
            explicacion: 'No. El autor explica el producto y, en la inspección, no debe ser registrador para mantener objetividad.' },
          { letra: 'c', texto: 'El escriba', correcta: true,
            explicacion: 'Correcto. El escriba registra la información, las decisiones y las anomalías durante la revisión.' },
          { letra: 'd', texto: 'El gestor', correcta: false,
            explicacion: 'No. El gestor decide el alcance y aporta recursos; no registra las anomalías.' }
        ]
      },
      {
        numero: 18, capitulo: 3, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un factor que determina el nivel de formalidad de una revisión?',
        opciones: [
          { letra: 'a', texto: 'El color del logo de la empresa', correcta: false,
            explicacion: 'No. Los factores de formalidad son técnicos y de madurez, no estéticos.' },
          { letra: 'b', texto: 'La madurez del proceso de desarrollo y la criticidad del producto de trabajo', correcta: true,
            explicacion: 'Correcto. El nivel de formalidad depende de factores como la madurez del proceso de desarrollo, los requisitos legales/regulatorios, la criticidad del producto de trabajo y la complejidad.' },
          { letra: 'c', texto: 'La fase lunar', correcta: false,
            explicacion: 'No. Es una opción absurda; la fase lunar no influye en la formalidad.' },
          { letra: 'd', texto: 'La altura de los participantes', correcta: false,
            explicacion: 'No. Es una opción absurda; la altura nunca determina la formalidad de una revisión.' }
        ]
      },
      {
        numero: 19, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué tipo de técnica de prueba es la prueba de rama?',
        opciones: [
          { letra: 'a', texto: 'Caja negra', correcta: false,
            explicacion: 'No. La caja negra se basa en la especificación, no en los resultados de las decisiones del código.' },
          { letra: 'b', texto: 'Caja blanca', correcta: true,
            explicacion: 'Correcto. La prueba de rama (cobertura de decisión) es una técnica de caja blanca: se basa en la estructura interna del código (los resultados de cada decisión).' },
          { letra: 'c', texto: 'Basada en experiencia', correcta: false,
            explicacion: 'No. Las técnicas basadas en experiencia usan conocimiento del tester, no la estructura del código.' },
          { letra: 'd', texto: 'Basada en colaboración', correcta: false,
            explicacion: 'No. Las técnicas basadas en colaboración (ATDD, historias) no tienen que ver con la estructura del código.' }
        ]
      },
      {
        numero: 20, capitulo: 4, nivel: 'K3',
        enunciado: 'Un campo de temperatura acepta valores de -10°C a 40°C inclusive. Aplicando partición de equivalencia, ¿cuál es el conjunto MÍNIMO de valores?',
        nota: 'Particiones: <-10→-11, -10 a 40→-10 y 40, >40→41',
        opciones: [
          { letra: 'a', texto: '-11, -10, 0, 40, 41', correcta: false,
            explicacion: 'No. Incluye el 0 de más: la partición válida se representa con sus límites (-10 y 40).' },
          { letra: 'b', texto: '-10, 40', correcta: false,
            explicacion: 'No. Cubre la partición válida pero omite las particiones inválidas (menor de -10 y mayor de 40).' },
          { letra: 'c', texto: '-11, -10, 40, 41', correcta: true,
            explicacion: 'Correcto. Partición de equivalencia: inválida inferior (-11), válida representada por sus límites (-10 y 40) e inválida superior (41).' },
          { letra: 'd', texto: '-20, 0, 50', correcta: false,
            explicacion: 'No. No respeta los límites de la partición válida ni sus adyacentes inmediatos.' }
        ]
      },
      {
        numero: 21, capitulo: 4, nivel: 'K3',
        enunciado: 'Para el rango -10 a 40, aplicando AVF de 2 valores, ¿cuál es el conjunto MÍNIMO?',
        nota: 'AVF 2 valores: -11,-10 y 40,41',
        opciones: [
          { letra: 'a', texto: '-10, 40', correcta: false,
            explicacion: 'No. Son los límites válidos, pero con AVF de 2 valores se incluye también el valor inmediatamente exterior de cada frontera.' },
          { letra: 'b', texto: '-11, -10, 40, 41', correcta: true,
            explicacion: 'Correcto. AVF de 2 valores: justo fuera y límite de cada frontera: -11,-10 (inferior) y 40,41 (superior).' },
          { letra: 'c', texto: '-11, -10, -9, 39, 40, 41', correcta: false,
            explicacion: 'No. Ese es el AVF de 3 valores (límite-1, límite, límite+1).' },
          { letra: 'd', texto: '-10, -9, 39, 40', correcta: false,
            explicacion: 'No. Son valores interiores mixtos; le faltan los exteriores (-11 y 41) y le sobran internos.' }
        ]
      },
      {
        numero: 22, capitulo: 4, nivel: 'K3',
        enunciado: 'Para el rango -10 a 40, aplicando AVF de 3 valores, ¿cuál es el conjunto MÍNIMO?',
        nota: 'AVF 3 valores: -11,-10,-9 y 39,40,41',
        opciones: [
          { letra: 'a', texto: '-11, -10, -9, 39, 40, 41', correcta: true,
            explicacion: 'Correcto. AVF de 3 valores: -11,-10,-9 (frontera inferior) y 39,40,41 (frontera superior).' },
          { letra: 'b', texto: '-10, -9, 39, 40', correcta: false,
            explicacion: 'No. Le faltan los valores exteriores a los límites (-11 y 41).' },
          { letra: 'c', texto: '-11, -10, 40, 41', correcta: false,
            explicacion: 'No. Ese es el AVF de 2 valores.' },
          { letra: 'd', texto: '-10, 0, 40', correcta: false,
            explicacion: 'No. Mezcla partición de equivalencia con un valor intermedio; no cubre las fronteras con sus adyacentes.' }
        ]
      },
      {
        numero: 23, capitulo: 4, nivel: 'K3',
        enunciado: 'Una tabla de decisión tiene 3 condiciones: "Es usuario registrado" (Sí/No), "Tiene conexión VIP" (Sí/No), "Compra > 50€" (Sí/No). El resultado es "Envío gratis" si es VIP O (registrado Y compra > 50€). ¿Cuántas reglas produce el 100% de cobertura de la tabla de decisión?',
        nota: '3 condiciones × 2 = 8 reglas',
        opciones: [
          { letra: 'a', texto: '4', correcta: false,
            explicacion: 'No. Con tres condiciones booleanas, la cobertura completa requiere más de 4 reglas.' },
          { letra: 'b', texto: '6', correcta: false,
            explicacion: 'No. El número de reglas es el producto de los valores (2^3 = 8), no un valor intermedio.' },
          { letra: 'c', texto: '8', correcta: true,
            explicacion: 'Correcto. Cada condición tiene 2 valores: reglas = 2 × 2 × 2 = 8. El 100% de cobertura prueba las 8 combinaciones.' },
          { letra: 'd', texto: '3', correcta: false,
            explicacion: 'No. 3 sería el número de condiciones, no el de reglas.' }
        ]
      },
      {
        numero: 24, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué afirmación sobre cobertura de sentencia y cobertura de rama es CORRECTA?',
        opciones: [
          { letra: 'a', texto: '100% de sentencia implica 100% de rama', correcta: false,
            explicacion: 'No. Es al revés: ejecutar todas las sentencias no garantiza ejecutar ambos resultados de cada decisión.' },
          { letra: 'b', texto: '100% de rama implica 100% de sentencia', correcta: true,
            explicacion: 'Correcto. La cobertura de rama es más fuerte y subsume a la de sentencia: al ejecutar todas las ramas se ejecutan todas las sentencias.' },
          { letra: 'c', texto: 'Ambas son independientes', correcta: false,
            explicacion: 'No. Hay una relación de subsumption: rama subsumee a sentencia.' },
          { letra: 'd', texto: 'La cobertura de sentencia siempre es mayor que la de rama', correcta: false,
            explicacion: 'No. A igual esfuerzo, la de rama es más exigente; la de sentencia suele ser mayor o igual numéricamente, pero la afirmación general es incorrecta.' }
        ]
      },
      {
        numero: 25, capitulo: 4, nivel: 'K2',
        enunciado: '¿Qué técnica de prueba se caracteriza por usar un "contrato de prueba" (charter) que define la misión de una sesión de prueba?',
        opciones: [
          { letra: 'a', texto: 'Prueba basada en lista de comprobación', correcta: false,
            explicacion: 'No. La de lista de comprobación sigue una checklist guiada, no un charter libre.' },
          { letra: 'b', texto: 'Prueba exploratoria', correcta: true,
            explicacion: 'Correcto. La prueba exploratoria organiza sesiones con un contrato de prueba (charter): un objetivo, un área y un límite de tiempo; dentro de esa misión el tester decide cómo explorar.' },
          { letra: 'c', texto: 'Predicción de errores', correcta: false,
            explicacion: 'No. La predicción de errores se basa en el conocimiento de defectos típicos, no en charters.' },
          { letra: 'd', texto: 'Prueba de rama', correcta: false,
            explicacion: 'No. La de rama es una técnica de caja blanca sobre el código.' }
        ]
      },
      {
        numero: 26, capitulo: 4, nivel: 'K3',
        enunciado: 'Dado el criterio de aceptación: "Dado que el usuario está registrado, cuando inicia sesión correctamente, entonces se muestra el panel principal". ¿Qué caso de prueba se deriva usando ATDD?',
        opciones: [
          { letra: 'a', texto: 'Usuario no registrado intenta iniciar sesión', correcta: false,
            explicacion: 'No. El criterio dado describe el flujo feliz del usuario registrado; el caso "no registrado" no se deriva de este criterio concreto.' },
          { letra: 'b', texto: 'Usuario registrado inicia sesión con credenciales correctas y se muestra el panel principal', correcta: true,
            explicacion: 'Correcto. En ATDD los casos de prueba se derivan directamente del criterio de aceptación (Given/When/Then): precondición (registrado), acción (inicia sesión correctamente) y resultado esperado (panel principal).' },
          { letra: 'c', texto: 'El sistema muestra un mensaje de error', correcta: false,
            explicacion: 'No. El criterio no describe ningún mensaje de error; ese caso no se deriva de este criterio.' },
          { letra: 'd', texto: 'La base de datos se actualiza', correcta: false,
            explicacion: 'No. Ese es un efecto técnico interno; el criterio describe el comportamiento observable para el usuario.' }
        ]
      },
      {
        numero: 27, capitulo: 4, nivel: 'K2',
        enunciado: 'En la redacción de historias de usuario, ¿cuál es la forma de trabajo colaborativo correcta?',
        opciones: [
          { letra: 'a', texto: 'Las escriben los desarrolladores solos', correcta: false,
            explicacion: 'No. Sin la perspectiva del negocio y de prueba, la historia pierde valor.' },
          { letra: 'b', texto: 'Las escriben los representantes de negocio solos', correcta: false,
            explicacion: 'No. El enfoque colaborativo exige más voces que solo el negocio.' },
          { letra: 'c', texto: 'Las crean conjuntamente representantes de negocio, desarrolladores y probadores', correcta: true,
            explicacion: 'Correcto. El enfoque colaborativo de "equipo completo" implica que negocio, desarrollo y prueba trabajan juntos para escribir y aclarar historias de usuario.' },
          { letra: 'd', texto: 'Las escriben los probadores y las aprueban los desarrolladores', correcta: false,
            explicacion: 'No. Ese flujo excluye al negocio y no refleja la colaboración real.' }
        ]
      },
      {
        numero: 28, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un riesgo de producto?',
        opciones: [
          { letra: 'a', texto: 'Falta de personal cualificado', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (disponibilidad de recursos).' },
          { letra: 'b', texto: 'El sistema no cumple los requisitos de accesibilidad', correcta: true,
            explicacion: 'Correcto. Incumplir un requisito de accesibilidad es un riesgo de producto: amenaza la calidad del propio sistema.' },
          { letra: 'c', texto: 'Recorte del presupuesto del proyecto', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto.' },
          { letra: 'd', texto: 'Cambio en la prioridad de los requisitos por la dirección', correcta: false,
            explicacion: 'No. Es un riesgo de proyecto (gestión y alcance).' }
        ]
      },
      {
        numero: 29, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué significa "riesgo residual"?',
        opciones: [
          { letra: 'a', texto: 'El riesgo identificado al inicio del proyecto', correcta: false,
            explicacion: 'No. El riesgo inicial es simplemente el riesgo identificado; el residual es el que queda tras mitigar.' },
          { letra: 'b', texto: 'El riesgo que queda después de aplicar las medidas de mitigación', correcta: true,
            explicacion: 'Correcto. El riesgo residual es el nivel de riesgo que permanece después de implementar las acciones de mitigación (por ejemplo, tras las pruebas previstas).' },
          { letra: 'c', texto: 'El riesgo transferido a un tercero', correcta: false,
            explicacion: 'No. Transferir es una forma de responder al riesgo, distinta del concepto de riesgo residual.' },
          { letra: 'd', texto: 'El riesgo aceptado sin acción', correcta: false,
            explicacion: 'No. Eso es "aceptar" el riesgo como respuesta; el residual puede existir incluso habiendo mitigado.' }
        ]
      },
      {
        numero: 30, capitulo: 5, nivel: 'K3',
        enunciado: 'En el póker de planificación, tras dos rondas no se alcanza consenso. En la tercera ronda los votos son: 8, 8, 13, 8, 5. La variación es pequeña. Según la regla "aceptar el número con más votos", ¿cuál es la estimación final?',
        nota: '8 aparece 3 veces, los demás tienen menos votos',
        opciones: [
          { letra: 'a', texto: '5', correcta: false,
            explicacion: 'No. El 5 solo tiene un voto; no es el valor más votado.' },
          { letra: 'b', texto: '8', correcta: true,
            explicacion: 'Correcto. Con variación pequeña y sin consenso unánime, la regla acepta el valor con más votos: 8 (tres votos frente a uno de 13 y uno de 5).' },
          { letra: 'c', texto: '13', correcta: false,
            explicacion: 'No. El 13 solo tiene un voto.' },
          { letra: 'd', texto: 'No hay consenso, se necesita otra ronda', correcta: false,
            explicacion: 'No. La regla descrita (variación pequeña) permite cerrar con el valor más votado sin necesidad de otra ronda.' }
        ]
      },
      {
        numero: 31, capitulo: 5, nivel: 'K3',
        enunciado: 'Estime con el método de tres puntos: O=3, M=7, P=17.',
        nota: 'E = (3 + 4×7 + 17)/6 = (3+28+17)/6 = 48/6 = 8',
        opciones: [
          { letra: 'a', texto: '7', correcta: false,
            explicacion: 'No. El 7 es el valor "más probable"; la fórmula pondera O y P también.' },
          { letra: 'b', texto: '8', correcta: true,
            explicacion: 'Correcto. E = (O + 4M + P)/6 = (3 + 4×7 + 17)/6 = 48/6 = 8.' },
          { letra: 'c', texto: '9', correcta: false,
            explicacion: 'No. 9 no es el resultado de la fórmula.' },
          { letra: 'd', texto: '10', correcta: false,
            explicacion: 'No. 10 no surge de (3 + 28 + 17)/6 = 8.' }
        ]
      },
      {
        numero: 32, capitulo: 5, nivel: 'K2',
        enunciado: 'Según la pirámide de prueba, las pruebas automatizadas en los niveles superiores (cúspide) suelen crearse usando:',
        opciones: [
          { letra: 'a', texto: 'Herramientas basadas en API', correcta: false,
            explicacion: 'No. Las herramientas de API se asocian típicamente a la capa de integración/servicios, intermedia en la pirámide.' },
          { letra: 'b', texto: 'Herramientas basadas en GUI (Interfaz Gráfica de Usuario)', correcta: true,
            explicacion: 'Correcto. En la cúspide de la pirámide están las pruebas E2E, que suelen automatizarse desde la interfaz gráfica (GUI), realizando el recorrido completo del usuario.' },
          { letra: 'c', texto: 'Pruebas unitarias', correcta: false,
            explicacion: 'No. Las unitarias forman la base de la pirámide, no la cúspide.' },
          { letra: 'd', texto: 'Análisis estático', correcta: false,
            explicacion: 'No. El análisis estático es una actividad de calidad de código, no una prueba de la cúspide.' }
        ]
      },
      {
        numero: 33, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de las siguientes es una métrica de defectos?',
        opciones: [
          { letra: 'a', texto: 'Número de casos de prueba ejecutados', correcta: false,
            explicacion: 'No. Es una métrica de avance de la prueba.' },
          { letra: 'b', texto: 'Tiempo de respuesta del sistema', correcta: false,
            explicacion: 'No. Es una métrica de calidad de producto (rendimiento).' },
          { letra: 'c', texto: 'Densidad de defectos (defectos/tamaño del producto)', correcta: true,
            explicacion: 'Correcto. La densidad de defectos, el total de defectos encontrados y los defectos pendientes son métricas de defectos.' },
          { letra: 'd', texto: 'Horas de prueba invertidas', correcta: false,
            explicacion: 'No. Las horas son una métrica de esfuerzo, no de defectos.' }
        ]
      },
      {
        numero: 34, capitulo: 5, nivel: 'K2',
        enunciado: '¿Quién es la audiencia principal de un informe de avance de la prueba?',
        opciones: [
          { letra: 'a', texto: 'Solo los testers', correcta: false,
            explicacion: 'No. Los testers lo producen y consumen, pero no es su única audiencia.' },
          { letra: 'b', texto: 'Los implicados del proyecto (gestores, desarrolladores, negocio)', correcta: true,
            explicacion: 'Correcto. El informe de avance se dirige a los implicados del proyecto para reportar el estado, métricas, impedimentos y riesgos; útil para que la dirección y otros roles decidan.' },
          { letra: 'c', texto: 'Solo los clientes finales', correcta: false,
            explicacion: 'No. El informe interno es para implicados, no solo clientes finales.' },
          { letra: 'd', texto: 'El equipo de marketing', correcta: false,
            explicacion: 'No. Marketing no es la audiencia de un informe técnico de avance de pruebas.' }
        ]
      },
      {
        numero: 35, capitulo: 5, nivel: 'K1',
        enunciado: '¿Qué documento describe el alcance, el enfoque, los recursos y el cronograma de las actividades de prueba?',
        opciones: [
          { letra: 'a', texto: 'Informe de defectos', correcta: false,
            explicacion: 'No. El informe de defectos describe defectos individuales, no el plan.' },
          { letra: 'b', texto: 'Plan de prueba', correcta: true,
            explicacion: 'Correcto. El plan de prueba define el contexto, los objetivos, el alcance, el enfoque/estrategia, los recursos y el cronograma de las actividades de prueba.' },
          { letra: 'c', texto: 'Caso de prueba', correcta: false,
            explicacion: 'No. Un caso de prueba es una condición y pasos concretos para probar algo, no la planificación global.' },
          { letra: 'd', texto: 'Informe de compleción', correcta: false,
            explicacion: 'No. El informe de compleción se elabora al final para resumir resultados.' }
        ]
      },
      {
        numero: 36, capitulo: 5, nivel: 'K2',
        enunciado: '¿Qué actividad de gestión de la configuración es especialmente importante al actualizar un script de prueba automatizado?',
        opciones: [
          { letra: 'a', texto: 'Estimar el esfuerzo', correcta: false,
            explicacion: 'No. Estimar es parte de la planificación, no de la gestión de configuración.' },
          { letra: 'b', texto: 'Crear una nueva versión del script en el repositorio de pruebas', correcta: true,
            explicacion: 'Correcto. Al actualizar un artefacto de prueba hay que versionarlo y almacenarlo en el repositorio de configuración, de forma que todos usen la versión correcta.' },
          { letra: 'c', texto: 'Ejecutar el script antiguo', correcta: false,
            explicacion: 'No. Ejecutar el script antiguo no gestiona el cambio; la acción correcta es registrar la nueva versión.' },
          { letra: 'd', texto: 'Eliminar el script anterior', correcta: false,
            explicacion: 'No. En lugar de borrar, se mantiene el historial de versiones para poder volver atrás y saber qué versión se probó.' }
        ]
      },
      {
        numero: 37, capitulo: 5, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes NO es un campo típico de un informe de defecto?',
        opciones: [
          { letra: 'a', texto: 'Identificador del defecto', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: el identificador es un campo típico del informe de defecto.' },
          { letra: 'b', texto: 'Pasos para reproducir', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: los pasos de reproducción son imprescindibles en el informe de defecto.' },
          { letra: 'c', texto: 'Nombre del usuario que reportó', correcta: true,
            explicacion: 'Correcto. Lo importante en un informe de defecto es el contenido técnico (título, entorno, pasos, resultado esperado vs real, evidencia, prioridad y severidad); el nombre de quien reportó se puede registrar en la herramienta pero no es el campo técnico clave (de hecho la respuesta esperada es este).' },
          { letra: 'd', texto: 'Línea de código exacta donde está el defecto (opcional, no siempre obligatorio)', correcta: false,
            explicacion: 'Correcta, pero no es la respuesta: es creíble considerar que la línea de código es opcional; en este examen se considera que no es un campo obligatorio, por lo que no es la respuesta buscada.' }
        ]
      },
      {
        numero: 38, capitulo: 6, nivel: 'K2',
        enunciado: '¿Qué tipo de herramienta es Selenium?',
        opciones: [
          { letra: 'a', texto: 'Herramienta de gestión de pruebas', correcta: false,
            explicacion: 'No. Selenium no gestiona casos ni defectos.' },
          { letra: 'b', texto: 'Herramienta de ejecución de pruebas (automatización de interfaz web)', correcta: true,
            explicacion: 'Correcto. Selenium es una herramienta de ejecución/automatización de pruebas sobre la interfaz web.' },
          { letra: 'c', texto: 'Herramienta de prueba estática', correcta: false,
            explicacion: 'No. Selenium ejecuta pruebas, no analiza código estáticamente.' },
          { letra: 'd', texto: 'Herramienta de pruebas de rendimiento', correcta: false,
            explicacion: 'No. La automatización de carga/rendimiento corresponde a JMeter u otras; Selenium se usa para la interacción funcional con el navegador.' }
        ]
      },
      {
        numero: 39, capitulo: 6, nivel: 'K2',
        enunciado: '¿Cuál de los siguientes es un beneficio de la automatización de pruebas?',
        opciones: [
          { letra: 'a', texto: 'Elimina la necesidad de probadores manuales', correcta: false,
            explicacion: 'No. La automatización complementa al probador manual; la exploración y el criterio humano siguen siendo necesarios.' },
          { letra: 'b', texto: 'Reduce el esfuerzo en pruebas repetitivas y proporciona retroalimentación rápida', correcta: true,
            explicacion: 'Correcto. Entre los beneficios están: reducir el trabajo repetitivo, dar retroalimentación rápida, aumentar la cobertura y ejecutar pruebas difíciles manualmente.' },
          { letra: 'c', texto: 'Garantiza que no hay defectos', correcta: false,
            explicacion: 'No. Ninguna prueba (automática o manual) puede garantizar la ausencia de defectos.' },
          { letra: 'd', texto: 'Es más barata que las pruebas manuales en el corto plazo', correcta: false,
            explicacion: 'No. La automatización exige una inversión inicial de desarrollo y mantenimiento; su rentabilidad se obtiene a medio/largo plazo.' }
        ]
      },
      {
        numero: 40, capitulo: 6, nivel: 'K2',
        seleccionar: 2,
        enunciado: 'Seleccionar DOS opciones. ¿Cuáles son ejemplos de herramientas de gestión de pruebas?',
        nota: 'a y c (Jira y TestRail son de gestión; Jenkins CI/CD, Selenium ejecución, JMeter rendimiento)',
        opciones: [
          { letra: 'a', texto: 'Jira', correcta: true,
            explicacion: 'Correcto. Jira (con complementos como Xray/Zephyr) se usa para gestión de proyectos y de pruebas/defectos.' },
          { letra: 'b', texto: 'Jenkins', correcta: false,
            explicacion: 'No. Jenkins es un servidor de CI/CD, no una herramienta de gestión de pruebas.' },
          { letra: 'c', texto: 'TestRail', correcta: true,
            explicacion: 'Correcto. TestRail es una herramienta específica de gestión de pruebas (planificación de casos y ejecuciones).' },
          { letra: 'd', texto: 'Selenium', correcta: false,
            explicacion: 'No. Selenium es de ejecución/automatización de pruebas web.' },
          { letra: 'e', texto: 'JMeter', correcta: false,
            explicacion: 'No. JMeter es de pruebas de rendimiento, no de gestión.' }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);