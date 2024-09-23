// Функция для перенаправления на страницу формы отзыва и сохранения имени преподавателя в sessionStorage
function navigateToReviewForm(teacherName) {
    // Используем sessionStorage для хранения имени преподавателя
    sessionStorage.setItem('currentTeacher', teacherName);
    // Перенаправляем пользователя на страницу формы отзыва
    window.location.assign('review_form.html'); // Проверьте правильность пути
}

// При загрузке страницы заполняем поле формы имени преподавателя
window.addEventListener('load', function() {
    // Находим поле для имени преподавателя
    const teacherInput = document.querySelector('#teacher');
    // Получаем сохранённое имя преподавателя из sessionStorage
    const currentTeacher = sessionStorage.getItem('currentTeacher');

    // Если поле и имя преподавателя найдены, заполняем поле
    if (teacherInput && currentTeacher) {
        teacherInput.value = currentTeacher;
    }
});

// Функция для автоматического заполнения поля преподавателя
window.addEventListener('load', function() {
    const teacherInput = document.querySelector('#teacher');
    const currentTeacher = sessionStorage.getItem('currentTeacher');
    if (teacherInput && currentTeacher) {
        teacherInput.value = currentTeacher;
    }
});

// Обработка отправки формы
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Показ сообщения об успешной отправке
    document.getElementById('confirmation').style.display = 'block';

    // Сохраняем данные отзыва (например, в локальном хранилище или отправляем на сервер)
    // Здесь можно добавить код для отправки данных на сервер, если необходимо

    // Через 3 секунды перенаправляем на главную страницу
    setTimeout(function() {
        window.location.assign('index.html'); // Проверьте правильность пути к главной странице
    }, 3000); // 3000 миллисекунд = 3 секунды
});

function showDetails(teacherName) {
    // Скрываем все комментарии
    const allComments = document.querySelectorAll('.comments');
    allComments.forEach(comment => comment.style.display = 'none');

    // Показываем комментарии для выбранного преподавателя
    const selectedComments = document.getElementById(`comments-${teacherName}`);
    if (selectedComments) {
        selectedComments.style.display = 'block';
    }
}
