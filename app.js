"use strict";
// Объекты с данными о каждом дне
const Monday = {
  day: "Понедельник",
  lessons: ["–", "Русск.яз", "Химия", "Истор.", "Алгеб.", "Литер.", "Физика"],
}

const Teusday = {
  day: "Вторник",
  lessons: ["–", "Биолог.", "Литер.", "Физ-ра", "Геогр.", "Геом.", "Англ.яз", "Пр.мат"],
}

const Wednesday = {
  day: "Среда",
  lessons: ["Геогр.", "Англ.яз", "Алгеб.", "Информ.", "Техн.", "Русск.яз", "Физ-ра", "–"],
}

const Thursday = {
  day: "Четверг",
  lessons: ["–", "Физ-ра", "Геом.", "Русс.яз", "Общ-во", "Физика", "Химия", "–"],
}

const Friday = {
  day: "Пятница",
  lessons: ["Иск-во", "ОБЖ", "Истор.", "Биолог.", "Алгеб.", "Род.лит", "Англ.яз", "–"],
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
    lessonNum.innerHTML = i;
     
    let lessonTimeEnd = 0; // Конец урока int
    let lessonTime = ""; // Начало и конец урока str
    switch(i) { // Выставляем значения lessonTimeEnd и lessonTime в зависимости от урока
      case 0:
        lessonTimeEnd = 775;
        lessonTime = "12:15–12:55";
        break;
      case 1:
        lessonTimeEnd = 820;
        lessonTime = "13:00–13:40";
        break;
      case 2:
        lessonTimeEnd = 880;
        lessonTime = "14:00–14:40";
        break;
      case 3:
        lessonTimeEnd = 935;
        lessonTime = "14:55–15:35";
        break;
      case 4:
        lessonTimeEnd = 990;
        lessonTime = "15:50–16:30";
        break;
      case 5:
        lessonTimeEnd = 1040;
        lessonTime = "16:40–17:20";
        break;
      case 6:
        lessonTimeEnd = 1090;
        lessonTime = "17:30–18:10";
        break;
      case 7:
        lessonTimeEnd = 1140;
        lessonTime = "18:20–19:00";
        break;
      default:
        break;
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
  alert("Эксклюзивное расписание для 8Д❤️\nОно обновляется автоматически каждый день");
  timeTable(getDay());
}
// Конец