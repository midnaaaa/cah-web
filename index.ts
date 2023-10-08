import { ServerWebSocket } from "bun";

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


class Game {
  private users: ServerWebSocket[];
  private answerList = [
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
  private questionList = [
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
  ];
  private state: string;
  private gameNum: number;
  private userStates;
  private round: number;
  private roundResults = [[], [], [], []];
  private score = [0, 0, 0, 0];

  public constructor(users: ServerWebSocket[], state: string, gameNum: number) {
    this.users = users;
    this.state = state;
    this.gameNum = gameNum;
    this.userStates = [State.Playing, State.Playing, State.Playing, State.Playing];
    this.round = 1;
  }

  private getUsableQuestions() {
    let usableQuestions = [];
    for (let i = 0; i < this.questionList.length; ++i) {
      if (!this.questionList[i].used) usableQuestions.push(i);
    }
    return usableQuestions;
  }


  public getRandomQuestion(): number {
    let usableQuestions = this.getUsableQuestions();
    if (usableQuestions.length == 0) return -1;
    let questionIndex = Math.floor(Math.random() * usableQuestions.length);
    this.questionList[usableQuestions[questionIndex]].used = true;
    return usableQuestions[questionIndex];
  }

 
  public sendQuestionAndCards(questionIndex: number, numCards: number): void {
    for (let i = 0; i < this.users.length; ++i) {
      let cards = this.getNCards(numCards, this.users[i]);
      this.users[i].send(JSON.stringify({
        state: State.Playing,
        question: questionIndex,
        cards: cards
      }));
    }
    //this.checkEverythingCorrect();
  }


  
  public getNCards(n: number, ws: ServerWebSocket) {
    let cards: number[] = [];
    for (let i = 0; i < n; ++i) {
      cards.push(this.getRandomCard())
    }
    ws.data.cards = ws.data.cards.concat(cards);
    return cards;
  }

  public getRandomCard() {
    let usableCards = this.getUsableCards();
    if (usableCards.length == 0) return -1;
    let answerIndex = Math.floor(Math.random() * usableCards.length);
    this.answerList[usableCards[answerIndex]].using = true;
    return usableCards[answerIndex];
  }

  private getUsableCards() {
    let usableCards = [];
    for (let i = 0; i < this.answerList.length; ++i) {
      if (this.answerList[i].using == false) usableCards.push(i);
    }
    return usableCards;
  }


  public nextRound() {
    this.round = this.round++;
  }

  public resetCards(cards: number[], user: number) {
    cards.forEach(element => {
      this.answerList[element].using = false;
      let indexOfCardToRemove = this.users[user].data.cards.indexOf(element);
      this.users[user].data.cards.splice(indexOfCardToRemove, 1);
    });
  }

  public changeState(user: number, state: string) {
    this.userStates[user] = state;
  }

  public getStates() {
    return this.userStates;
  }

  public setAllStates(state: string) {
    for (let i = 0; i < this.userStates.length; ++i) {
      this.userStates[i] = state;
    }
  }

  public sendMessageToAllUsers(msg) {
    for (let i = 0; i < this.users.length; ++i) {
      this.users[i].send(msg);
    }
  }

  public addUserRoundAnswers(cards: number[], user: number) {
    let roundCards = Array.from(cards);
    this.roundResults[user] = roundCards;
  }

  public getRoundAnswers() {
    return this.roundResults;
  }

  public getAllUsernames() {
    let userNames = [];
    for (let i = 0; i < 4; ++i) {
      userNames.push(this.users[i].data.name);
    }
    return userNames;
  }

  public addPointToUser(user: number) {
    this.score[user]++;
  }

  public getRequiredCards(question: number) {
    return this.questionList[question].reqcards;
  }

  public clearRoundAnswers() {
    this.roundResults = [[], [], [], []];
  }

  public getScore() {
    return this.score;
  }

  public finishGame(){
    let userList = this.getAllUsernames();
    for(let i = 0; i < this.users.length; ++i){
      this.users[i].send(JSON.stringify({ state: State.Finish,
                                          score: this.score,
                                          usernames: userList}));
      this.users[i].close();
    }
  }
};

let userCount = 0;
let usersTmp: ServerWebSocket[] = [];
let games: Game[] = [];


Bun.serve<{ user: string, name: string, cards: number[], game: number }>({
  fetch(req, server) {
    const success = server.upgrade(req, {
      data: { user: "user_" + usersTmp.length, cards: [] },
    });
    return success
      ? undefined
      : new Response("Upgrade failed :(", { status: 500 });

  },
  websocket: {
    open(ws) {
      console.log("Connection established");
      ws.subscribe("game" + Math.floor(userCount / 4).toString());
    },
    message(ws, message) {
      let msg = JSON.parse(message);
      
      if (msg.action == Action.SetName) { //mensaje de asignar nombre a usuario
        ws.data.name = msg.name;
        ws.data.game = Math.floor(userCount / 4);
        console.log(ws.data);
        usersTmp.push(ws);
        ++userCount;
        if (usersTmp.length < 4) {
          console.log(usersTmp.length);
          ws.send(JSON.stringify({ state: State.Waiting }));
        }
        else if (usersTmp.length == 4) {
          let users = Array.from(usersTmp);
          let g: Game = new Game(users, State.Playing, games.length);
          games.push(g);
          usersTmp = []
          let questionIndex = g.getRandomQuestion();
          g.sendQuestionAndCards(questionIndex, 10);
        }
      }

        
      else if (msg.action == Action.Move) {
        let gameNum = ws.data.game;
        let userNum = Number(ws.data.user.split("_")[1]);
        let game = games[gameNum];

        game.resetCards(msg.cards, userNum);
        game.changeState(userNum, State.Waiting);
        game.addUserRoundAnswers(msg.cards, userNum);

        if (game.getStates().every(state => state == State.Waiting)) {
          game.setAllStates(State.Voting);
          game.sendMessageToAllUsers(JSON.stringify({
            state: State.Voting,
            round_results: game.getRoundAnswers(),
            usernames: game.getAllUsernames()
          }));
        }
        else {
          ws.send(JSON.stringify({ state: State.Waiting }));
        }
      }

        
      else if (msg.action == Action.Vote) {
        let winner = msg.winner;
        let gameNum = ws.data.game;
        let userNum = Number(ws.data.user.split("_")[1]);
        let game = games[gameNum];

        game.addPointToUser(winner);
        game.changeState(userNum, State.Waiting);

        if (game.getStates().every(state => state == State.Waiting)) {
          let questionIndex = game.getRandomQuestion();
          if (questionIndex == -1) {
            game.finishGame();
          }
          else {
            game.clearRoundAnswers();
            game.setAllStates(State.Playing);
            game.sendQuestionAndCards(questionIndex, game.getRequiredCards(questionIndex));
          }
        }
        else {
          ws.send(JSON.stringify({ state: State.Waiting }));
        }
      }
    },
  }
})
