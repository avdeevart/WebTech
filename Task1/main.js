document.addEventListener("DOMContentLoaded", function() {
  // Получаем ссылки на необходимые элементы
  const btn = document.getElementById("changeContent"); // Кнопка "Изменить контент"
  const modal = document.getElementById("modal"); // Модальное окно
  const closeBtn = document.querySelector(".close"); // Кнопка закрытия модального окна
  const cancelBtn = document.querySelector(".cancel"); // Кнопка отмены
  const credentialsDisplay = document.getElementById("credentialsDisplay"); // Элемент для отображения учетных данных

  // Добавляем звуковой эффект при загрузке страницы
  const audio = document.getElementById("myAudio"); // Аудио элемент
  audio.play(); // Воспроизводим аудио

  // Обработчик события для кнопки "Изменить контент"
  btn.addEventListener("click", function() {
    btn.classList.toggle("active"); // Переключаем класс "active" у кнопки
    modal.style.display = "block"; // Показываем модальное окно
  });

  // Обработчик события для кнопки закрытия модального окна
  closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
    btn.classList.remove("active"); // Удаляем класс "active" у кнопки
  };

  // Обработчик события для кнопки отмены
  cancelBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
    btn.classList.remove("active"); // Удаляем класс "active" у кнопки
  };

  // Обработчик события для кнопки отправки формы
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    const username = document.getElementById("username").value; // Получаем значение поля "Имя пользователя"
    const password = document.getElementById("password").value; // Получаем значение поля "Пароль"
    credentialsDisplay.innerHTML = `Имя пользователя: ${username} <br /> Пароль: ${password}`; // Выводим учетные данные
    modal.style.display = "none"; // Скрываем модальное окно
    btn.classList.remove("active"); // Удаляем класс "active" у кнопки
  });
});
