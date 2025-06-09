// Jautājumu struktūra
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

// Sākuma stāvoklis
let currentKey = "start";
const answers = []; // Saglabā atbildes

function nextQuestion(answer) {
  const questionText = questions[currentKey].text;
  answers.push({ question: questionText, answer: answer === "yes" ? "Jā" : "Nē" });

  const nextKey = questions[currentKey][answer];
  if (nextKey && questions[nextKey]) {
    currentKey = nextKey;
    document.getElementById("question").innerText = questions[currentKey].text;
  } else {
    showSummary(); // Kad beidzas, parāda kopsavilkumu
  }
}

function showSummary() {
  const container = document.getElementById("container");
  let summaryHTML = "<h2>🌟 Tu esi pabeidzis savu ceļu!</h2>";
  summaryHTML += "<h3>Tavas atbildes:</h3><ul>";

  answers.forEach(item => {
    summaryHTML += `<li><strong>${item.question}</strong> — ${item.answer}</li>`;
  });

  summaryHTML += "</ul>";
  container.innerHTML = summaryHTML;
}

// Ielādē pirmo jautājumu
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("question").innerText = questions[currentKey].text;
});
