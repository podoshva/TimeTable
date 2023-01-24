"use strict";

const Monday = {
  "day": "Понедельник",
  "lessons": [
    {
      lesson: "Русск.яз",
      time: "13:00–13:40",
    },
    {
      lesson: "Химия",
      time: "14:00–14:40",
    },
    {
      lesson: "Истор.",
      time: "14:55–15:35",
    },
    {
      lesson: "Алгеб.",
      time: "15:50–16:30",
    },
    {
      lesson: "Литер.",
      time: "16:40–17:20",
    },
    {
      lesson: "Физика",
      time: "17:30–18:10",
    },
  ]
}

const Teusday = {
  "day": "Вторник",
  "lessons": [
    {
      lesson: "-",
      time: "12:15–12:55",
    },
    {
      lesson: "Биолог.",
      time: "13:00–13:40",
    },
    {
      lesson: "Литер.",
      time: "14:00–14:40",
    },
    {
      lesson: "Физ-ра",
      time: "14:55–15:35",
    },
    {
      lesson: "Геогр.",
      time: "15:50–16:30",
    },
    {
      lesson: "Геом.",
      time: "16:40–17:20",
    },
    {
      lesson: "Англ.яз",
      time: "17:30–18:10",
    },
    {
      lesson: "Практ.мат",
      time: "18:20-19:00",
    }
  ]
}

const Wednesday = {
  "day": "Среда",
  "lessons": [
    {
      lesson: "Геогр.",
      time: "12:15–12:55",
    },
    {
      lesson: "Англ.яз",
      time: "13:00–13:40",
    },
    {
      lesson: "Алгеб.",
      time: "14:00–14:40",
    },
    {
      lesson: "Информ.",
      time: "14:55–15:35",
    },
    {
      lesson: "Техн.",
      time: "15:50–16:30",
    },
    {
      lesson: "Русск.яз",
      time: "16:40–17:20",
    },
    {
      lesson: "Физ-ра",
      time: "17:30–18:10",
    },
    {
      lesson: "-",
      time: "18:20-19:00",
    },
  ] 
}

const Thursday = {
  "day": "Четверг",
  "lessons": [
    {
      lesson: "-",
      time: "12:15–12:55",
    },
    {
      lesson: "Физ-ра",
      time: "13:00–13:40",
    },
    {
      lesson: "Геом.",
      time: "14:00–14:40",
    },
    {
      lesson: "Русск.яз",
      time: "14:55–15:35",
    },
    {
      lesson: "Общ-во",
      time: "15:50–16:30",
    },
    {
      lesson: "Физика",
      time: "16:40–17:20",
    },
    {
      lesson: "Химия",
      time: "17:30–18:10",
    },
    {
      lesson: "-",
      time: "18:20-19:00",
    },
  ],
}

const Friday = {
  "day": "Пятница",
  "lessons": [
    {
      lesson: "Иск-во",
      time: "12:15–12:55",
    },
    {
      lesson: "ОБЖ",
      time: "13:00–13:40",
    },
    {
      lesson: "Истор.",
      time: "14:00–14:40",
    },
    {
      lesson: "Биолог.",
      time: "14:55–15:35",
    },
    {
      lesson: "Алгеб.",
      time: "15:50–16:30",
    },
    {
      lesson: "Род.лит",
      time: "16:40–17:20",
    },
    {
      lesson: "Англ.яз",
      time: "17:30–18:10",
    },
    {
      lesson: "-",
      time: "18:20-19:00",
    },
  ],
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
    lesson.setAttribute("class", "lesson");
    lesson.innerHTML = days[day].lessons[i].lesson;
<<<<<<< HEAD
    let lessonTimeEnd = 0;
    console.log(i);
    switch(i) {
      case 0:
        lessonTimeEnd = 775;
        break;
      case 1:
        lessonTimeEnd = 820;
        break;
      case 2:
        lessonTimeEnd = 880;
        break;
      case 3:
        lessonTimeEnd = 935;
        break;
      case 4:
        lessonTimeEnd = 990;
        break;
      case 5:
        lessonTimeEnd = 1040;
        break;
      case 6:
        lessonTimeEnd = 1090;
        break;
      case 7:
        lessonTimeEnd = 1140;
        break;
      default:
        break;
    if(getHours() >= days[day].lessons[i].timeEnd) {
      lesson.setAttribute("style", "background-color: rgb(73, 207, 73);")
    }
    if(getHours() >= lessonTimeEnd) {
      lesson.setAttribute("style", "background-color: rgb(142, 212, 142);");
    }
    lessons.appendChild(lesson);
  }
}
const days = [Monday, Teusday, Wednesday, Thursday, Friday];
const day = getDay();

if(day == -1 || day == 5) {
  alert("Сегодня выходной");
} else {
  alert("Эксклюзивное расписание для 8Д❤️\nОно обновляется автоматически каждый день");
  timeTable(day);
}
