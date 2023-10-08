const State = {
  Playing: "Playing",
  Waiting: "Waiting",
  Voting: "Voting",
  Finish: "Finish",
}


const Action = {
  SetName: "SetName",
  Move: "Move",
  Vote: "Vote",
}

let answerList = [
  { name: "ejercicio_kegel", answer: "Estoy haciendo los ejercicios de Kegel en este momento.", using: false },
  { name: "refugiados_sirios", answer: "10.000 refugiados sirios.", using: false },
  { name: "voltios_pezones", answer: "50.000 voltios directamente en los pezones.", using: false },
  { name: "virgenes", answer: "72 vírgenes.", using: false },
  { name: "dulce_heroina_mexicana", answer: "300 gramos de dulce heroína negra Mexicana.", using: false },
  { name: "bolsa_habichuelas_magicas", answer: "Una bolsa de habichuelas mágicas.", using: false },
  { name: "desayuno_equilibrado", answer: "Un desayuno equilibrado.", using: false },
  { name: "bola_cera_oreja_semen", answer: "Una bola de cera de oreja, semen y recortes de uñas.", using: false },
  { name: "pajaro_caga_zurullos", answer: "Un pájaro que caga zurullos de tamaño humano.", using: false },
  { name: "bofeton_zorra", answer: "Un bofetón de zorra.", using: false },
  { name: "agujero_culo_blanqueado", answer: "Un agujero del culo blanqueado.", using: false },
  { name: "tazon_mayonesa_dientes_humanos", answer: "Un tazón de mayonesa y dientes humanos.", using: false },
  { name: "tumor_cerebral", answer: "Un tumor cerebral.", using: false },
  { name: "crucifixion", answer: "Una crucifixión.", using: false },
  { name: "fiesta_cumpleanos_decepcionante", answer: "Una fiesta de cumpleaños decepcionante.", using: false },
  { name: "halcon_gorro_cabeza", answer: "Un halcón con un gorro en la cabeza.", using: false },
  { name: "pedo_poderoso_gigantes", answer: "Un pedo tan poderoso que despierta a los gigantes de su sueño de mil años.", using: false },
  { name: "feto", answer: "Un feto.", using: false },
  { name: "masturbador_masculino", answer: "Un masturbador masculino (Fleshlight).", using: false },
  { name: "tonelada_almedras", answer: "Una puta tonelada de almendras.", using: false },
  { name: "esnifada", answer: "Una buena esnifada.", using: false },
  { name: "gorila_fuerte_bueno", answer: "Un gorila fuerte y bueno.", using: false },
  { name: "hilillo_semen_refleja_luz", answer: "Un hilillo de semen que refleja la luz mientras flota en la brisa de la mañana.", using: false },
  { name: "montaje_homoerotico_voleibol", answer: "Un montaje homoerótico sobre voleibol.", using: false },
  { name: "horda_vikingos", answer: "Una horda de vikingos.", using: false },
  { name: "vida_tristeza", answer: "Una vida de tristeza.", using: false },
  { name: "nino_pequeno_hablar_dinosaurios", answer: "Un niño pequeño que no deja de hablar de los putos dinosaurios.", using: false },
  { name: "audiencia_estudio_directo", answer: "Una audiencia de estudio en directo.", using: false },
  { name: "hombre_borde_orgasmo", answer: "Un hombre al borde del orgasmo.", using: false },
  { name: "ritual_apareamiento", answer: "Un ritual de apareamiento.", using: false },
  { name: "mexicano", answer: "Un mexicano.", using: false },
  { name: "micropene", answer: "Un micropene.", using: false },
  { name: "cerdo_diminuto_chubasquero_botas_agua", answer: "Un cerdo diminuto llevando un chubasquero pequeñito y botas de agua.", using: false },
  { name: "hombre_mediana_edad_patines", answer: "Un hombre de mediana edad en patines.", using: false },
  { name: "leon_zoo_deprimido", answer: "Un león de zoo deprimido.", using: false },
  { name: "mujer_mucho_mas_joven", answer: "Una mujer mucho más joven.", using: false },
  { name: "pulpo_hermafrodita_viaja_cosmos_amor", answer: "Un pulpo hermafrodita que viaja por el cosmos en busca de amor.", using: false },
  { name: "piramide_cabezas_cortadas", answer: "Una pirámide de cabezas cortadas.", using: false },
  { name: "sombrero_muy_guay", answer: "Un sombrero muy guay.", using: false },
  { name: "triste_paja", answer: "Una triste paja.", using: false },
  { name: "corrida_sin_avisar", answer: "Una corrida en la boca sin avisar.", using: false },
  { name: "mujer_con_chispa", answer: "Una mujer negra con mucha chispa.", using: false },
  { name: "solo_de_saxofon", answer: "Un solo de saxofon.", using: false },
  { name: "mar_de_problemas", answer: "Un mar de problemas.", using: false },
  { name: "tortuga_mordiendote_punta_pene", answer: "Una tortuga mordiéndote la punta del pene.", using: false },
  { name: "pelo_pubis_solitario", answer: "Un pelo del pubis solitario.", using: false },
  { name: "pistola_agua_llena_pis_gato", answer: "Una pistola de agua llena de pis de gato.", using: false },
  { name: "trio_con_esposa_shaquille_oneal", answer: "Un trío con mi esposa y Shaquille O'Neal.", using: false },
  { name: "paradoja_viajes_tiempo", answer: "Una paradoja de viajes en el tiempo.", using: false },
  { name: "mini_caballo", answer: "Un mini caballo.", using: false },
  { name: "mini_guitarra_llamada_ukelele", answer: "Una mini guitarra, bastante gay, llamada Ukelele.", using: false },
  { name: "gran_cosa_mantequilla", answer: "Una gran cosa de mantequilla.", using: false },
  { name: "molino_lleno_cadaveres", answer: "Un molino lleno de cadaveres.", using: false },
  { name: "aceptar_cosas_tal_como_son", answer: "Aceptar las cosas tal y como son.", using: false },
  { name: "escuchar_activamente", answer: "Escuchar activamente.", using: false },
  { name: "anfetaminas", answer: "Anfetaminas.", using: false },
  { name: "ninos_africanos", answer: "Niños africanos.", using: false },
  { name: "agricultura", answer: "Agricultura.", using: false },
  { name: "sida", answer: "SIDA.", using: false },
  { name: "alcoholismo", answer: "Alcoholismo.", using: false },
  { name: "tipos_a_los_que_me_he_follado", answer: "Todos los tipos a los que me he follado.", using: false },
  { name: "buffet_libre_gambas_8.99", answer: "Buffet libre de gambas por 8.99€.", using: false },
  { name: "fusil_asalto_M16", answer: "Un fusil de asalto M16.", using: false },
  { name: "diarrea_nunca_se_detiene", answer: "Una diarrea que nunca se detiene.", using: false },
  { name: "ereccion_dura_mas_de_cuatro_horas", answer: "Una erección que dura más de cuatro horas.", using: false },
  { name: "giro_argumental_M_Night_Shyalaman", answer: "Un giro argumental de M. Night Shyalaman.", using: false },
  { name: "pulpo_haciendo_7_pajas_fumandose_cigarrillo", answer: "Un pulpo haciendo 7 pajas y fumándose un cigarrillo.", using: false },
  { name: "complejo_de_Edipo", answer: "Un complejo de Edipo.", using: false },
  { name: "viejo_casi_muerto", answer: "Un viejo que está casi muerto.", using: false },
  { name: "mujer_mayor_que_sabe_lo_que_hacer_con_el_pene", answer: "Una mujer mayor que sabe lo que tiene que hacer con el pene.", using: false },
  { name: "chupachups_extra_grande", answer: "Un chupachups extra grande.", using: false },
  { name: "embarazo_no_deseado", answer: "Un embarazo no deseado.", using: false },
  { name: "cuentas_anales", answer: "Cuentas anales.", using: false },
  { name: "avisando_que_estoy_a_punto_de_correrme", answer: "Avisando que estoy a punto de correrme.", using: false },
  { name: "Arnold_Schwarzenegger", answer: "Arnold Schwarzenegger.", using: false },
  { name: "chaparreras_sin_culo", answer: "Chaparreras sin culo.", using: false },
  { name: "Auschwitz", answer: "Auschwitz.", using: false },
  { name: "autentica_cocina_Mexicana", answer: "Auténtica cocina Mexicana.", using: false },
  { name: "autocanibalismo", answer: "Autocanibalismo.", using: false },
  { name: "desodorante_axe", answer: "Desodorante AXE.", using: false },
  { name: "pelotas", answer: "Pelotas.", using: false },
  { name: "platanos", answer: "Plátanos.", using: false },
  { name: "barack_obama", answer: "Barack Obama.", using: false },
  { name: "batman", answer: "¡BATMAN!", using: false },
  { name: "amputaciones_de_guerra", answer: "Amputaciones de guerra.", using: false },
  { name: "convertirse_en_un_arandano", answer: "Convertirse en un arandano.", using: false },
  { name: "abejas", answer: "¿Abejas?", using: false },
  { name: "ser_un_cabron_con_los_ninos", answer: "Ser un cabrón con los niños.", using: false },
  { name: "ser_un_jodido_hechicero", answer: "Ser un jodido hechicero.", using: false },
  { name: "ser_una_mujer", answer: "Ser una mujer.", using: false },
  { name: "ser_capaz_de_hablar_con_los_elefantes", answer: "Ser capaz de hablar con los elefantes.", using: false },
  { name: "ser_gordo_y_estupido", answer: "Ser gordo y estúpido.", using: false },
  { name: "ser_un_marginado", answer: "Ser un marginado.", using: false },
  { name: "estar_en_racha", answer: "Estar en racha.", using: false },
  { name: "ser_rico", answer: "Ser rico.", using: false },
  { name: "bill_nye_el_hombre_de_la_ciencia", answer: "Bill Nye, el Hombre de la Ciencia.", using: false },
  { name: "darse_un_atracon_y_vomitar_despues", answer: "Darse un atracón y vomitar después.", using: false },
  { name: "bisexualidad", answer: "Bisexualidad.", using: false },
  { name: "zorras", answer: "Zorras.", using: false },
  { name: "negros", answer: "Negros.", using: false },
];

let questionList = [
  { name: "question1", question: "______ + ______ = ______.", reqcards: 3, used: false },
  { name: "question2", question: "______ es una pendiente resbaladiza que conduce a ______.", reqcards: 2, used: false },
  { name: "question3", question: "______: probado en niños, aprobado por las madres.", reqcards: 1, used: false },
  { name: "question4", question: "______. ¡No puedes tener solo uno!", reqcards: 1, used: false },
  { name: "question5", question: "______. ¡Choca esos cinco!", reqcards: 1, used: false },
  { name: "question6", question: "______. ¡Es una trampa!", reqcards: 1, used: false },
  { name: "question7", question: "______. Eso ha sido muy 'heavy'.", reqcards: 1, used: false },
  { name: "question8", question: "¡No os recomiendo ese sitio! Encontré ______ en mi pollo Kung Pao!", reqcards: 1, used: false },
  { name: "question9", question: "El 50% de todos los matrimonios terminan en ______.", reqcards: 1, used: false},
  { name: "question10", question: "Un estudio reciente demuestra que los estudiantes tienen un 50% menos de sexo después de haber estado expuestos a ______.", reqcards: 1, used: false},
  { name: "question11", question: "Una cena romántica a la luz de las velas no estaría completa sin ______.", reqcards: 1, used: false},
  { name: "question12", question: "Después de ocho años en la Casa Blanca, ¿cómo se relaja Obama?: ______", reqcards: 1, used: false},
  { name: "question13", question: "Después de cuatro discos de platino y tres Grammys, es el momento de volver a mis raíces, a lo que me inspiró a hacer música: ______.", reqcards: 1, used: false},
  { name: "question14", question: "La medicina alternativa utiliza ahora los poderes curativos de ______.", reqcards: 1, used: false},
  { name: "question15", question: "ELIGE 2: Y el Oscar de la Academia por ______ es para ______.", reqcards: 2, used: false},
  { name: "question16", question: "Como madre de 5 niños traviesos, no soy ajena a ______.", reqcards: 1, used: false},
  { name: "question17", question: "El nuevo reality show cuenta con ocho antiguos famosos que viven con ______.", reqcards: 1, used: false},
  { name: "question18", question: "Patrocinado por San Miguel®, la cerveza oficial de ______.", reqcards: 1, used: false},
  { name: "question19", question: "Pero antes de matarle, Sr. Bond, voy a mostrarle ______.", reqcards: 1, used: false},
  { name: "question20", question: "¡Eh, mírame! Llamo a este movimiento de baile ______.", reqcards: 1, used: false},
]



let loginBtn = document.getElementById("connectbtn");
let username = document.getElementById("username");
let socket;
let state;
let cards = [];
let chosenCards = [];
let neededCardsForRound = 0;
let questionActual;




loginBtn.onclick = function () {
  // Construct the WebSocket URL with the username
  const socketURL = 'wss://cahserverbun.ijuaagi.repl.co';

  socket = new WebSocket(socketURL);
  socket.addEventListener("open", function () {
    socket.send(JSON.stringify({name: username.value, action: Action.SetName}));
  });

  socket.addEventListener("message", (event) => {
    let msg = JSON.parse(event.data);
    switch (msg.state) {

      case State.Waiting:
          if(state != State.Waiting) {
            waitingScreen();
          }
      break;

      case State.Playing:
          if(state != State.Playing){
            playingGameScreen();
            addQuestion(msg);
            addCards(msg);
          }
      break;

      case State.Voting:
        if(state != State.Voting){
          votingScreen();
          addRoundAnswers(msg);
        }
      break;

      case State.Finish:
        if(state != State.Finish){
          finishScreen();
          addScores(msg);
        }
    }
    state = msg.state;
  });

};

function getWinner(msg){
  let winnerIndex = -1;
  let winnerValue = -1;
  let times = 0;
  for (let i = 0; i < msg.score.length; i++) {
    if(msg.score[i] > winnerValue) {
      winnerIndex = i;
      winnerValue = msg.score[i];
      times = 1;
    }
    else if(msg.score[i] == winnerValue){
      times++;
    }
  }
  if(times > 1) return -1;
  return msg.usernames[winnerIndex];
}

function addScores(msg){
  let winnerUser = getWinner(msg);
  let winnerH1 = document.getElementById("winner");
  if(winnerUser == -1) winnerH1.textContent = "Draw!";
  else winnerH1.textContent = "The winner is: " + winnerUser + "!";

  let score_div = document.getElementById("score-div");
  for (let i = 0; i < 4; i++) {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-div");
    userDiv.textContent = msg.usernames[i];

    let score = document.createElement("div");
    score.classList.add("score");
    score.textContent = msg.score[i];

    userDiv.appendChild(score);
    score_div.appendChild(userDiv);
  }
}


function addRoundAnswers(msg) {
  let votingDiv = document.getElementById("voting-div");

  let usernames = msg.usernames;
  let roundsAnswers = msg.round_results;

  let userContainer = document.createElement("div");
  userContainer.classList.add("user-container");

  for (let i = 0; i < 4; i++) {

    let userDiv = document.createElement("div");
    userDiv.classList.add("user-div");
    userDiv.setAttribute("id", "user-"+ i.toString());
    userDiv.textContent = usernames[i];

    let userAnswers = document.createElement("div");
    userAnswers.classList.add("user-answers-container");

    for (let j = 0; j < roundsAnswers[i].length; j++) {
      let answer = document.createElement("div");
      answer.classList.add("answer");
      answer.textContent = answerList[roundsAnswers[i][j]].answer;
      userAnswers.appendChild(answer);
    }
    userDiv.appendChild(userAnswers);

    userDiv.onclick = function (params) {
      socket.send(JSON.stringify({name: username.value, action: Action.Vote, winner: Number(userDiv.getAttribute("id").split("-")[1])}));
      deleteCards();
      clearChosenCards();
    }
    userContainer.appendChild(userDiv);
  }
  votingDiv.appendChild(userContainer);
}



function deleteCards(){
  chosenCards.forEach(element => {
    let cardIndex = cards.indexOf(element);
    if(cardIndex != -1){
      let cardToRemove = document.getElementById("card-"+element.toString());
      cardToRemove.remove();
      cards.splice(cardIndex, 1);
    }
  });
}

function clearChosenCards(){
  chosenCards = [];
}



function addCards(info){
  let divCards = document.getElementById("cards-div");
  console.log(cards);
  cards = cards.concat(info.cards);
  console.log(info.cards);
  console.log(cards);


  cards.forEach(element => {
    if(document.getElementById("card-"+ element.toString()) == null){
      let card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("id", "card-"+ element.toString());
      card.textContent = answerList[element].answer;

      card.onclick = function (){
        if(chosenCards.length + 1 < neededCardsForRound){
          chosenCards.push(Number(card.getAttribute("id").split("-")[1]));
          deleteCards();
        }
        else{
          chosenCards.push(Number(card.getAttribute("id").split("-")[1]));
          socket.send(JSON.stringify({name: username.value, action: Action.Move, cards: chosenCards}));
          deleteCards();
          clearChosenCards();
        }
      }
      divCards.appendChild(card);
    }
  });
}



function addQuestion(info){
  questionActual = info.question;
  neededCardsForRound = questionList[info.question].reqcards;
  let question_div = document.getElementById("question-div");
  let question = document.createElement("h1");
  question.setAttribute("id", "question");
  question.textContent = questionList[info.question].question;
  question_div.appendChild(question);
}


function votingScreen(){
  document.getElementById("waiting-div").style.display = "none";
  document.getElementById("login-div").style.display = "none";
  document.getElementById("cards-div").style.display = "none";
  document.getElementById("playing-div").style.display = "block";
  document.getElementById("voting-div").style.display = "block";
  document.getElementById("waitingstyle").disabled = true;
  document.getElementById("loginstyle").disabled = true;
  document.getElementById("gamestyle").disabled = false;
}

function playingGameScreen(){
  let question_div = document.getElementById("question-div");
  question_div.innerHTML = "";
  let voting_div = document.getElementById("voting-div");
  voting_div.innerHTML = "";

  document.getElementById("waiting-div").style.display = "none";
  document.getElementById("login-div").style.display = "none";
  document.getElementById("voting-div").style.display = "none";
  document.getElementById("playing-div").style.display = "block";
  document.getElementById("cards-div").style.display = "flex";
  document.getElementById("waitingstyle").disabled = true;
  document.getElementById("loginstyle").disabled = true;
  document.getElementById("gamestyle").disabled = false;

}


function waitingScreen(){
  document.getElementById("playing-div").style.display = "none";
  document.getElementById("login-div").style.display = "none";
  document.getElementById("voting-div").style.display = "none";
  document.getElementById("waiting-div").style.display = "block";
  document.getElementById("loginstyle").disabled = true;
  document.getElementById("gamestyle").disabled = true;
  document.getElementById("waitingstyle").disabled = false;

}

function finishScreen(){
  document.getElementById("playing-div").style.display = "none";
  document.getElementById("login-div").style.display = "none";
  document.getElementById("waiting-div").style.display = "none";
  document.getElementById("finish-div").style.display = "block";
  document.getElementById("loginstyle").disabled = true;
  document.getElementById("gamestyle").disabled = true;
  document.getElementById("waitingstyle").disabled = true;
  document.getElementById("finishstyle").disabled = false;
}
