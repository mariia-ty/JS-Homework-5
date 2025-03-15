//Task 1 - PNotify

import { alert } from "https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/+esm";

const keys = ["q", "w", "e", "r", "t", "y", "a", "s", "d", "f"];
let currentKeyIndex = 0;

let key = document.getElementById("key");
key.textContent = keys[currentKeyIndex];

document.addEventListener("keydown", (event) => {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex += 1;
    if (currentKeyIndex === keys.length) {
      currentKeyIndex = 0;
    }
    document.getElementById("key").textContent = keys[currentKeyIndex];
    alert({ text: "Correct!", type: "success", delay: "1000" });
  } else {
    alert({
      text: "Error! Press the matching key.",
      type: "error",
      delay: "1000",
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

function newGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  let key = document.getElementById("key");
  key.textContent = keys[currentKeyIndex];
  alert({ text: "New Game!", type: "info", delay: "1000" });
}

let newG = document.getElementById("newGame");
newG.addEventListener("click", newGame);


//task 2 - Chart.js

const sales = document.getElementById("sales-chart");

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const ctx = sales.getContext("2d");
const salesChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    responsive: false, 
  }
});

