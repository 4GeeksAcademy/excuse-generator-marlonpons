import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator(){
  //arrays to conform the excuse
  const who = ['My turtle', 'My grandma', 'A radioactive', 'The president', 'A zombie'];
  const action = ['ate', 'lost', 'crushed', 'broke', 'stole'];
  const what = ['my homework', 'my phone', 'the car', 'my dreams'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch'];
  //variables to select words aleatory
  let part1 = Math.floor(Math.random()*who.length);
  let part2 = Math.floor(Math.random()*action.length);
  let part3 = Math.floor(Math.random()*what.length);
  let part4 = Math.floor(Math.random()*when.length);
  return `${who[part1]} ${action[part2]} ${what[part3]} ${when[part4]}.`;
};

/*
window.onload = function() {
  document.querySelector("#perfectExcuse").innerHTML=excuseGenerator();
  document.querySelector("#generateBtn").addEventListener("click",(e)=>{
    document.querySelector("#perfectExcuse").innerHTML=excuseGenerator();
  });
};*/
/*decidi hacer una funcion aparte (excuseGenerator) para poder darle la funcionalidad al boton.
Antes lo tenia puesto como window.onload() cada vez que se activara el evento click, pero es volver a cargar toda la pagina y no creo que sea buena practica.
La efectuada tampoco la considero la mas optima, pero es la que se me ocurrio :)*/

//Otra variante
//En vez de usar una etiqueta button, usar un <a>, y cambiar la forma visual del link
window.onload =function(){
  document.querySelector("#perfectExcuse").innerHTML=excuseGenerator();
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#perfectExcuse").innerHTML = excuseGenerator();
  });
}

