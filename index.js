const questions = {
  start: {
    text: "Vai šobrīd vēlies būt produktīvs?",
    yes: "productivity",
    no: "exercise"
  },
  productivity: {
    text: "Vai vēlies sakārtot savu darba vidi?",
    yes: "organize_list",
    no: "do_task_list"
  },
  exercise: {
    text: "Vai vēlies veikt kādu fizisko aktivitāti?",
    yes: "walk_outside",
    no: "watch_movie"
  },
  organize_list: {
    text: "Vai tev palīdzētu uzrakstīt darāmo darbu sarakstu?",
    yes: "write_list",
    no: "take_break"
  },
  do_task_list: {
    text: "Vai vēlies sākt ar mazāko uzdevumu?",
    yes: "start_task",
    no: "postpone_task"
  },
  walk_outside: {
    text: "Vai tev patīk pastaigas dabā?",
    yes: "go_walk",
    no: "home_workout"
  },
  watch_movie: {
    text: "Vai vēlies skatīties filmu vai seriālu?",
    yes: "choose_movie",
    no: "read_book"
  },
  write_list: { text: "Lieliski! Uzraksti sarakstu un sāc rīkoties!", yes: null, no: null },
  take_break: { text: "Ieteicams paņemt īsu pauzi. Atslābsti un elpo dziļi!", yes: null, no: null },
  start_task: { text: "Sāc ar mazāko – tas radīs sajūtu, ka virzies uz priekšu!", yes: null, no: null },
  postpone_task: { text: "Ja nejūties gatavs, uzliec termiņu un mēģini vēlāk.", yes: null, no: null },
  go_walk: { text: "Uzvelc ērtus apavus un dodies nelielā pastaigā!", yes: null, no: null },
  home_workout: { text: "Atver YouTube un sameklē īsu vingrojumu video.", yes: null, no: null },
  choose_movie: { text: "Iesaku komēdiju vai iedvesmojošu filmu. Izbaudi!", yes: null, no: null },
  read_book: { text: "Varbūt ir laiks atvērt to grāmatu, kas sen stāv plauktā?", yes: null, no: null }
};

let currentKey = "start";
let finalKey = null;

function nextQuestion(answer) {
  const nextKey = questions[currentKey][answer];
  if (nextKey && questions[nextKey]) {
    currentKey = nextKey;
    document.getElementById("question").innerText = questions[currentKey].text;
  } else {
    finalKey = currentKey;
    showFinalResult();
  }
}

function showFinalResult() {
  const container = document.getElementById("container");

  const results = {
    choose_movie: `🎬 Tu šobrīd vēlies skatīties filmu. <a href="https://www.netflix.com" target="_blank">Ej uz Netflix</a>`,
    read_book: `📚 Tu gribi lasīt grāmatu. <a href="https://www.letonika.lv" target="_blank">Ej uz Letonika</a>`,
    go_walk: `🚶‍♂️ Tu vēlies iziet pastaigā. <a href="https://www.strava.com" target="_blank">Strava var ieteikt labākos maršrutus</a>`,
    home_workout: `🏋️‍♀️ Tu izvēlējies trenēties mājās. <a href="https://www.youtube.com/results?search_query=home+workout" target="_blank">Skaties treniņus YouTube</a>`,
    write_list: `📝 Tu vēlies uzrakstīt darāmo darbu sarakstu. <a href="https://todo.microsoft.com" target="_blank">Izmanto Microsoft To Do</a>`,
    take_break: `😌 Tu vēlies atpūsties. <a href="https://www.calm.com" target="_blank">Calm var palīdzēt atslābināties</a>`,
    start_task: `✅ Tu vēlies sākt ar mazāko uzdevumu. <a href="https://pomofocus.io" target="_blank">Pomofocus palīdzēs koncentrēties</a>`,
    postpone_task: `⏳ Tu izvēlējies atlikt darbus. <a href="https://www.rememberthemilk.com" target="_blank">Atgādinājumam izmanto šo</a>`
  };

  const message = results[finalKey] || "🌟 Tu esi pabeidzis savu ceļu. Lepojies ar sevi!";
  container.innerHTML = `<h2>${message}</h2>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("question").innerText = questions[currentKey].text;
});
