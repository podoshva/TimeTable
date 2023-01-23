"use strict";

const Monday = {
  "day": "Понедельник",
  "lessons": [
    {
      lesson: "Рус.яз.",
      time: "13:00–13:40",
      timeEnd: 820,
    },
    {
      lesson: "Химия",
      time: "14:00–14:40",
      timeEnd: 880,
    },
    {
      lesson: "Истор.",
      time: "14:55–15:35",
      timeEnd: 935,
    },
    {
      lesson: "Алгеб.",
      time: "15:50–16:30",
      timeEnd: 990,
    },
    {
      lesson: "Литер.",
      time: "16:40–17:20",
      timeEnd: 1040,
    },
    {
      lesson: "Физика",
      time: "17:30–18:10",
      timeEnd: 1090,
    }
  ]
}

const Teusday = {
  "day": "Вторник",
  "lessons": ["Биол.", "Литер.", "Физ.ра", "Геогр.", "Геом.", "Ан.", "Пр.мат",],
}

const Wednesday = {
  "day": "Среда",
  "lessons": ["Ан.", "Алгеб.", "Инф.", "Tex.", "Рус.яз", "Физ-ра", "Геогр.",],
}

const Thursday = {
  "day": "Четверг",
  "lessons": ["Физ-ра", "Геом.", "Рус.яз", "Общ-во", "Физика", "Химия",],
}

const Friday = {
  "day": "Пятница",
  "lessons": ["ОБЖ", "Истор.", "Биол.", "Алгеб.", "Род.лит.", "Ан.", "Иск-во"],
}

function getDay() {
  const currentDate = new Date();
  return currentDate.getDay() - 1;
}

function getHours() {
  const currentDate = new Date();
  return currentDate.getHours() * 60 + currentDate.getMinutes();
}

function timeTable(day) {
  const lessons = document.querySelector(".lessons");
  for(let i = 0; i < days[day].lessons.length; i++) {
    const lesson = document.createElement('div');
    lesson.setAttribute("class", "lesson")
    lesson.innerHTML = days[day].lessons[i].lesson;
    if(getHours() > days[day].lessons[i].timeEnd) {
      lesson.setAttribute("style", "background-color: rgb(73, 207, 73);")
    }
    if(i == days[day].lessons.length - 1) {
      lesson.setAttribute("style", "border: none;")
    }
    lessons.appendChild(lesson);
  }
}

const days = [Monday, Teusday, Wednesday, Thursday, Friday];
const day = getDay();

if(day == -1 || day == 5) {
  alert("Сегодня выходной");
} else {
  timeTable(day);
}
