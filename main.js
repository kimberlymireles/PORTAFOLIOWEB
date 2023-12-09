let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Hola a todos! Soy Kimberly y me gustaría compartir más detalles sobre mi propuesta y escuchar sus opiniones y comentarios. Ser ecológico con el papel: ¡ reciclar hoy, proteger mañana! Unete al equipo!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();