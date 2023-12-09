// Определите функции для установки значений здоровья, брони и денег
function setHealth(health) {
    document.getElementById('health-bar').style.width = health + '%';
}

function setArmor(armor) {
    document.getElementById('armor-bar').style.width = armor + '%';
}

function setMoney(money) {
    document.getElementById('money-display').innerText = '$' + money;
}

// Пример: установка начальных значений
setHealth(100);
setArmor(50);
setMoney(5000);

// Пример: скрытие интерфейса
cef.emit("game:hud:setComponentVisible", "interface", false);
