// Используем CEF-события для обновления HUD

cef.on('pwd:allitem', (money, nick, armours, hp) => {
    // Получаем элементы худа через CEF
    const nicks = cef.getHtmlElement('.nick_text');
    const moneys = cef.getHtmlElement('.money_text');
    const progress = cef.getHtmlElement('.styled');
    const armour = cef.getHtmlElement('.styled1');

    // Обновляем данные худа
    if (money !== -1) {
        moneys.innerHTML = "$" + money;
    }
    if (nick !== "") {
        nicks.innerHTML = nick;
    }
    if (armours !== -1) {
        armour.value = armours;
    }
    if (hp !== -1) {
        progress.value = hp;
    }
});

// Отправляем запрос на обновление данных HUD
cef.emit('pwd:try');

// Отключаем стандартный интерфейс
cef.emit("game:hud:setComponentVisible", "interface", false);
