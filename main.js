let foco1= document.getElementById('foco1');
let foco2= document.getElementById('foco2');
let foco3= document.getElementById('foco3');
let foco4= document.getElementById('foco4');
let foco5= document.getElementById('foco5');


window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


recognition.addEventListener("result", (e) => {
 
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  if (e.results[0].isFinal) {
    if (
      text.includes("Prender foco 1") || text.includes("prender foco 1")
    ) {
      console.log("Encendiendo el foco 1");
      foco1.checked = 1;
    }if (
      text.includes("Apagar foco 1") || text.includes("apagar foco 1")
    ) {
      console.log("Apagando el foco 1");
      foco1.checked = 0;
    }
    if (
      text.includes("Prender foco 2") || text.includes("prender foco 2")
    ) {
      console.log("Encendiendo el foco 2");
      foco2.checked = 1;
    }if (
      text.includes("Apagar foco 2") || text.includes("apagar foco 2")
    ) {
      console.log("Apagando el foco 2");
      foco2.checked = 0;
    }
    if (
      text.includes("Prender foco 3") || text.includes("prender foco 3")
    ) {
      console.log("Encendiendo el foco 3");
      foco3.checked = 1;
    }if (
      text.includes("Apagar foco 3") || text.includes("apagar foco 3")
    ) {
      console.log("Apagando el foco 3");
      foco3.checked = 0;
    }
    if (
      text.includes("Prender foco 4") || text.includes("prender foco 4")
    ) {
      console.log("Encendiendo el foco 4");
      foco4.checked = 1;
    }if (
      text.includes("Apagar foco 4") || text.includes("apagar foco 4")
    ) {
      console.log("Apagando el foco 4");
      foco4.checked = 0;
    }
    if (
      text.includes("Prender foco 5") || text.includes("prender foco 5")
    ) {
      console.log("Encendiendo el foco 5");
      foco5.checked = 1;
    }if (
      text.includes("Apagar foco 5") || text.includes("apagar foco 5")
    ) {
      console.log("Apagando el foco 5");
      foco5.checked = 0;
    }
    if (
      text.includes("Ilumina todo") || text.includes("ilumina todo")
    ) {
      console.log("Encendiendo todo");
      foco1.checked = 1;
      foco2.checked = 1;
      foco3.checked = 1;
      foco4.checked = 1;
      foco5.checked = 1;
    }if (
      text.includes("Cierra todo") || text.includes("cierra todo")
    ) {
      console.log("Apagando todo");
      foco1.checked = 0;
      foco2.checked = 0;
      foco3.checked = 0;
      foco4.checked = 0;
      foco5.checked = 0;
    }
    
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
