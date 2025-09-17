// script.js

document.addEventListener("DOMContentLoaded", () => {
  // フォームと各入力項目を取得
  const form = document.getElementById('userForm');
  const nameInput = document.getElementById('name');
  const dateInput = document.getElementById('date');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // ローカルストレージからデータを読み込む
  const savedData = JSON.parse(localStorage.getItem('formData'));

  if (savedData) {
    nameInput.value = savedData.name;
    dateInput.value = savedData.date;
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }

  // フォームが送信された時にデータをローカルストレージに保存
  form.addEventListener('submit', (e) => {
    e.preventDefault();  // ページのリロードを防ぐ

    const formData = {
      name: nameInput.value,
      date: dateInput.value,
      email: emailInput.value,
      message: messageInput.value
    };

    // ローカルストレージにデータを保存
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('データが保存されました！');
  });
});
