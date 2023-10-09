"use strict";
// Объекты с данными о каждом дне
const Monday = {
  day: "Понедельник",
  lessons: ["Алгеб.", "Русс.яз", "Биол.", "Геогр.", "Русс.яз", "Истор.", "Техн.", "-"],
}

const Teusday = {
  day: "Вторник",
  lessons: ["Англ.яз", "Химия", "Биол.", "Литер.", "Геом.", "Физ-ра", "-", "-"],
}

const Wednesday = {
  day: "Среда",
  lessons: ["Истор.", "Физ-ра", "Общ-во", "Англ.яз", "Вероят.", "Физика", "−", "-"],
}

const Thursday = {
  day: "Четверг",
  lessons: ["Химия", "Физ-ра", "Литер.", "Литер.", "Геогр.", "Геом.", "Англ.яз", "-"],
}

const Friday = {
  day: "Пятница",
  lessons: ["-", "Информ.", "Русс.яз", "Алгеб.", "Истор.", "Алгеб.", "ОБЖ", "Физика"],
}

function getDay() { // Функция по возвращению дня
  const currentDate = new Date(); // Создаем объект Date
  return currentDate.getDay() - 1; // Возращаем день недели
}

function getHours() { // Функция по возвращению текущего времени (часов и минут)
  const currentDate = new Date();
  return currentDate.getHours() * 60 + currentDate.getMinutes();
}

function timeTable(day) { // Основная функция
  const lessons = document.querySelector(".lessons"); // Получаем элементы из html
  const dayEl = document.querySelector(".day");
  dayEl.innerHTML = days[day].day; // Встраиваем значение в html элемент
  for(let i = 0; i < days[day].lessons.length; i++) { 
    const lessonCard = document.createElement('div'); // Создаем элемнеты для каждого значения
    const lessonEl = document.createElement('div');
    const lessonTimeEl = document.createElement('div');
    const lessonNum = document.createElement('div');

    lessonEl.setAttribute("class", "lesson"); // Добавляем классы
    lessonTimeEl.setAttribute("class", "lesson-time");
    lessonCard.setAttribute("class", "lesson-card");
    lessonNum.setAttribute("class", "lesson-num");

    lessonEl.innerHTML = days[day].lessons[i]; // Встраиваем значения в ранее созданные элементы
    lessonNum.innerHTML = i + 1;
     
    let lessonTimeEnd = 0; // Конец урока int
    let lessonTime = ""; // Начало и конец урока str
    if(days[day] == Monday || days[day] == Thursday) { // В понедельник другое расписание
      switch(i) { // Выставляем значения lessonTimeEnd и lessonTime в зависимости от урока
        case 0:
          lessonTimeEnd = 545;
          lessonTime = "08:30–09:05";
          break;
        case 1:
          lessonTimeEnd = 590;
          lessonTime = "09:15–09:50";
          break;
        case 2:
          lessonTimeEnd = 640;
          lessonTime = "10:05–10:40";
          break;
        case 3:
          lessonTimeEnd = 690;
          lessonTime = "10:55–11:30";
          break;
        case 4:
          lessonTimeEnd = 735;
          lessonTime = "11:40–12:15";
          break;
        case 5:
          lessonTimeEnd = 780;
          lessonTime = "12:25–13:00";
          break;
        case 6:
          lessonTimeEnd = 820;
          lessonTime = "13:05–13:40";
          break;
        case 7:
          lessonTimeEnd = 1135;
          lessonTime = "18:20–18:55";
          break;
        default:
          break;
      }
    } else {
      switch(i) { // Выставляем значения lessonTimeEnd и lessonTime в зависимости от урока
        case 0:
          lessonTimeEnd = 520;
          lessonTime = "08:00–08:40";
          break;
        case 1:
          lessonTimeEnd = 565;
          lessonTime = "08:45–9:25";
          break;
        case 2:
          lessonTimeEnd = 615;
          lessonTime = "09:35–10:15";
          break;
        case 3:
          lessonTimeEnd = 670;
          lessonTime = "10:30–11:10";
          break;
        case 4:
          lessonTimeEnd = 725;
          lessonTime = "11:25–12:05";
          break;
        case 5:
          lessonTimeEnd = 775;
          lessonTime = "12:15–12:55";
          break;
        case 6:
          lessonTimeEnd = 820;
          lessonTime = "13:00–13:40";
          break;
        case 7:
          lessonTimeEnd = 880;
          lessonTime = "14:00–14:40";
          break;
        default:
          break;
      }
    }

    if(getHours() >= lessonTimeEnd) { // Проверяем, закончился ли урок
      lessonCard.style.backgroundColor = 'rgb(142, 212, 142)'; // Если да, то меняем стиль элемента
    }
    lessonTimeEl.innerHTML = lessonTime; // Встраиваем значение в элемент

    lessonCard.appendChild(lessonNum); // Добавляем элементы в элемент lessonCard
    lessonCard.appendChild(lessonEl);
    lessonCard.appendChild(lessonTimeEl);
    lessons.appendChild(lessonCard); // Добавляем lessonCard в основной элемент
  }
}

function todayWeekend() { // Функция для выходных дней
  const day = document.querySelector(".day"); // Получаем элементы из html
  const card = document.querySelector(".card");

  const img = document.createElement("img"); // Создаем img-элемент
  img.src = 'img/weekend-cat.gif'; // Добавляем ссылку на изображение в элемент
  day.innerHTML = "Выходной!";
  card.append(img);
}

const days = [Monday, Teusday, Wednesday, Thursday, Friday]; // Массив, хранящий дни недели

if(getDay() == -1 || getDay() == 5) { // Определяем, выходной ли сегодня
  todayWeekend();
} else { // Если нет, то запускаем приложение
  timeTable(getDay());
}
// Конец
