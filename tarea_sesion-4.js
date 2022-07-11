let nombre = 'Facundo';
let apellido = 'Herrera';
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante)
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let estudianteLength = estudiante.length;
console.log(estudianteLength);
let estudianteStartStr = estudiante.charAt(0);
console.log(estudianteStartStr);
let estudianteEndStr = estudiante.substring(estudiante.length - 1);
console.log(estudianteEndStr)
let estudianteJunto = estudiante.trim();
console.log(estudianteJunto);
let nombreEstudiante = estudiante.includes('Facundo');
console.log(nombreEstudiante);
