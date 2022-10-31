//Seleccion el elemento p con id resumen con getElementById y utiliza innerHTML para cambiarlo por = "Hola Mundo"
document.getElementById('resumen').innerHTML = "hola mundo";

//eleccion el elemento h1 con id titulo con getElementById y utiliza innerHTML para cambiarlo por = "Manejando el DOM"
document.getElementById('titulo').innerHTML = "Manejando el DOM";


// Guarda en una variable el elemento p con clase ave utilizando querySelector 
//Utiliza .style.backgroundColor para cambiar su color a 'blue'
let ave = document.querySelector('.ave');
ave.style.backgroundColor = 'red';

//Cambia el tamaño del p con clase ave utilizando querySelector y .style.height en una sola line de codigo
document.querySelector('ave').style.height = '30px';