Querida Mari, 

Qué hermosa quedó tu tienda. Me encanta la temática y la elección de colores. Como con tu ultimo trabajo, lograste respetar el diseño propuesto y a la vez hacerlo propio, dando un producto que cumple las consignas y además se siente muy original. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes son en general adecuados, con una excepcion. Tus imagenes no tienen atributos "alt". Recorda que estos sirven para que un lector de pantalla le pueda decir al usuario de que se trata esa imagen. Si bien hay debate respecto de la conveniencia de utilizarlos en e-commerce, era un requisito de este trabajo. Tampoco utilizas etiquetas aria, que son muy utiles para ocultar cosas que no sirven a un lector de pantalla, o describir cosas para el usuario (como el boton de cerrar carrito). 


### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Me gusta como solucionaste el tema de los productos mostrados, aunque nota que estas seleccionando a las tarjetas por la etiqueta <article> y que tenes tres articles que no son tarjetas: por ese motivo vemos mensajes como "mostrando 12 productos de 13" o "15" cuando se ven todos. Mejor seleccionar las tarjetas por su clase. 

Los filtros para responsive estan resueltos de manera correcta, pero no siguiendo el modelo de Ada. 

### Carrito

Tu carrito esta muy bien! El maquetado muy correcto y las funcionalidades pedidas ok. La excepcion es el modal de vaciar. Nota que si seleccionas un filtro y luego vas al modal de vaciar, no aparece: eso es porque al tener la etiqueta "article", se le agrega tambien la clase hidden. Aparte de ese problema en la funcionalidad, creo que se podria mejorar mucho el maquetado. 

### Checkout

Falta mucha atencion al maquetado aqui, se ve todo algo desprolijo. Pero me alegra ver que mantuviste las funcionalidades, que son realmente el centro de este TP. A nivel JS todo esta bien en tu checkout: necesita algo mas de amor el maquetado. Tambien implementar un poquitin de JS, no mucho, para lograr que ademas de aumentar el precio total al hacer click en tarjeta o reducirse en descuento, el usuario pueda ver cual es el numero que se esta sumando. Avisame si necesitas ayuda con eso.

### Misc 

Tu HTML esta muy bien. Excelente la indentacion, claro, completo, con las etiquetas semanticas adecuadas. Tu CSS tambien esta muy prolijo y bien hecho, reutilizas bien los estilos y los nombres de clases son claros y descriptivos. Noto bastante dependencia del codigo de Ada para resolver algunas cosas que podrias haber hecho mas sencillas con las herramientas que vimos en clase (el ::before en el banner por ejemplo)

Con respecto al aspecto visual de tu web, creo que te faltó tiempo. En donde se nota que pusiste tiempo y esfuerzo, el resultado es excelente. Donde no se ve tan bien, entiendo que el tiempo no fue tu aliado. Pero esa es una buena noticia: significa que, cuando tenes el tiempo para invertirlo, ya tenes dominada la parte visual de la programacion web. Y eso es algo a celebrar. 

Menciono la calidad de tu css, prolijo, claro, bien hecho. Se nota muchisimo tu avance y aprendizaje aqui. Lo mismo ocurre con tu Javascript: mas alla de los detalles que te menciono, lo veo muy bien hecho, ordenado, prolijo, con poquisimos errores y con un evidente esfuerzo involucrado.  

Tenes relativamente pocos commits, y un README breve: valdria la pena invertir algo de tiempo aqui. 

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✔️ Respeta el diseño dado.
✔️ Respeta el funcionamiento.
✅ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅ Funciones pequeñas.
✔️ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

Nota final: 8
