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
  switch(currentDate.getDay()) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    default:
      return "weekend";
  }
}

function timeTable(day) {
  const timetable = document.querySelector(".timetable");
  for(let i = 0; i < days[day].lessons.length; i++) {
    const lesson = document.createElement('div');
    lesson.innerHTML = days[day].lessons[i];
    timetable.appendChild(lesson);
  }
}

const days = [Monday, Teusday, Wednesday, Thursday, Friday];
const day = getDay();

if(day == "weekend") {
  alert("Сегодня выходной");
} else {
  timeTable(day);
}