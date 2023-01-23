"use strict";

const Monday = {
  "day": "Понедельник",
  "lessons": ["Рус.яз.", "Химия", "Истор.", "Алгеб.", "Литер.", "Физика",],
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

function timeTable(day) {
  const lessons = document.querySelector(".lessons");
  for(let i = 0; i < days[day].lessons.length; i++) {
    const lesson = document.createElement('div');
    lesson.setAttribute("class", "lesson")
    lesson.innerHTML = days[day].lessons[i];
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