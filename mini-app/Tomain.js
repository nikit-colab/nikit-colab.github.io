const toggleButton = document.getElementById('toggle-list');
const groupList = document.getElementById('group-list');

toggleButton.addEventListener('click', () => {
    if (groupList.style.display === 'none' || groupList.style.display === '') {
        groupList.style.display = 'block';
        toggleButton.textContent = 'Скрыть группы';
    } else {
        groupList.style.display = 'none';
        toggleButton.textContent = 'Список групп';
    }
});