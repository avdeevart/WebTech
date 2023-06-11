document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("showJokeBtn");
  const modal = document.getElementById("jokeModal");
  const closeBtn = document.querySelector(".close");
  const jokeDisplay = document.getElementById("jokeDisplay");
  const textToChange = document.getElementById("textToChange");
  const listToChange = document.getElementById("listToChange");
  const changeColorBtn = document.getElementById("changeColorBtn");

  btn.addEventListener("click", function() {
    const age = parseInt(prompt("Введите ваш возраст:"));
    let joke;

    switch (true) {
      case (age >= 0 && age <= 5):
        joke = "Почему младенческие годы такие замечательные? Потому что все твои проблемы можно решить пеленкой и бутылочкой!";
        break;
      case (age >= 6 && age <= 10):
        joke = "Какая самая популярная монета у детей? Однорублёвая монета. Ведь у них всегда недостаточно денег!";
        break;
      case (age >= 11 && age <= 14):
        joke = "Почему подростки никогда не могут отправить смс-сообщение в одно предложение? Потому что они всегда ставят три точки в конце...";
        break;
      case (age >= 15 && age <= 19):
        joke = "Знаете, почему юноша и девушка в возрасте 15-19 лет похожи на солнце и луну? Потому что днем они мечтают о друг друге, а ночью пишут смс-сообщения до рассвета!";
        break;
      case (age >= 20 && age <= 29):
        joke = "Почему студенты так любят птиц? Потому что они хотят познать все прелести свободного полёта (и экономическую независимость).";
        break;
      case (age >= 30 && age <= 39):
        joke = "Какая самая популярная игра у тридцатилетних? \"Угадай, где я оставил свои ключи!\"";
        break;
      case (age >= 40 && age <= 49):
        joke = "Как называется альбом четырёхдискового сета? \"40 лет жизни: диски 1-3 - работы, диск 4 - ищу очки\"";
        break;
      case (age >= 50 && age <= 59):
        joke = "Почему пятидесятилетние люди так увлечены гольфом? Потому что это единственный способ найти себя, когда ты все время забываешь, где ты ушёл.";
        break;
      case (age >= 60 && age <= 69):
        joke = "Почему шестьдесятилетние люди так хорошо владеют секретами? Всё дело в их \"воспоминаниях\" - они могут забыть, что только что рассказали!";
        break;
      case (age >= 70 && age <= 79):
        joke = "Как называется журнал, который читают семидесятилетние дедушки и бабушки? \"Окей, Google, что я только что прочитал?\"";
        break;
      case (age >= 80 && age <= 89):
        joke = "Какая самая популярная социальная сеть среди восьмидесятилетних? \"Успел вспомнить - успел написать\"";
        break;
      case (age >= 90 && age <= 99):
        joke = "Почему девяностолетние люди так любят смотреть телевизор? Потому что это самый надёжный способ почувствовать себя молодыми.";
        break;
      default:
        joke = "К сожалению, для вашего возраста у нас нет шуток. Попробуйте в следующий раз!";
    }

    jokeDisplay.textContent = joke;
    jokeDisplay.style.color = getRandomColor();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function changeHoverColor(event) {
    event.target.style.color = getRandomColor();
  }

  const liItems = listToChange.getElementsByTagName("li");

  Array.from(liItems).forEach(function(li) {
    li.addEventListener("mouseover", changeHoverColor);
  });

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getRandomActiveColor() {
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  changeColorBtn.addEventListener("click", function() {
    Array.from(liItems).forEach(function(li) {
      li.style.color = getRandomActiveColor();
    });
  });
});
