const profileImageContainer = document.querySelector('.profile-image-container');
const uploadInput = document.getElementById('imageUpload');
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function showModal() {
    modal.style.display = "block";
    // Здесь можно добавить логику для фактической отправки изображения на сервер
}

function closeModal() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

profileImageContainer.addEventListener('click', () => {
    uploadInput.click();
});