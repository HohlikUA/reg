// ���������� CEF-������� ��� ���������� HUD

cef.on('pwd:allitem', (money, nick, armours, hp) => {
    // �������� �������� ���� ����� CEF
    const nicks = cef.getHtmlElement('.nick_text');
    const moneys = cef.getHtmlElement('.money_text');
    const progress = cef.getHtmlElement('.styled');
    const armour = cef.getHtmlElement('.styled1');

    // ��������� ������ ����
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

// ���������� ������ �� ���������� ������ HUD
cef.emit('pwd:try');

// ��������� ����������� ���������
cef.emit("game:hud:setComponentVisible", "interface", false);
