document.addEventListener('DOMContentLoaded', function () {
    const hudContainer = document.getElementById('hud-container');

    // Пример обновления худа при получении данных от сервера
    cef.emit('hud:update', { health: 80, armor: 50, money: 500 });

    // Слушаем события от сервера
    cef.subscribe('hud:update', function (data) {
        // Обновляем данные худа
        updateHUD(data.health, data.armor, data.money);
    });

    function updateHUD(health, armor, money) {
        // Обновляем стили худа
        document.getElementById('health-bar').style.width = health + '%';
        document.getElementById('armor-bar').style.width = armor + '%';
        document.getElementById('money-display').innerText = 'Money: $' + money;
    }
});
