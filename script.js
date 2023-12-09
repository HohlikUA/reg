cef.on('pwd:allitem', (money, name, armour, hp) => {
    // Получаем элементы худа через CEF
    const nicks = cef.getHtmlElement('.nick_text');
    const moneys = cef.getHtmlElement('.money_text');
    const progress = cef.getHtmlElement('.styled');
    const armourElement = cef.getHtmlElement('.styled1');
    const moneyDisplay = document.getElementById('money-display');

    // Обновляем данные худа
    if (money !== -1) {
        moneys.innerHTML = '$' + money;
    }
    if (name !== '') {
        nicks.innerHTML = name;
    }
    if (armour !== -1) {
        armourElement.value = armour;
    }
    if (hp !== -1) {
        progress.value = hp;
    }

    // Добавляем код для отображения ваших данных в других местах, если необходимо
});

// Отправляем запрос на обновление данных HUD
cef.emit('pwd:try');

// Отключаем стандартный интерфейс
cef.emit('game:hud:setComponentVisible', 'interface', false);
