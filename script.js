import { saveFormData } from './formData.js';

const form = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігти дефолтній поведінці

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    saveFormData(data); // Зберігаємо дані форми
    showSuccessMessage(); // Показуємо повідомлення про успішну відправку
    form.reset(); // Очищаємо форму
});

function showSuccessMessage() {
    successMessage.textContent = 'Ваше повідомлення успішно відправлено!';
    successMessage.style.display = 'block';
}

export function saveFormData(data) {
    console.log('Дані форми:', data);
    // Тут ви можете зберігати дані в базі даних або надсилати на сервер
}
