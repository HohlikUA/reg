document.addEventListener('DOMContentLoaded', function () {
    const hudContainer = document.getElementById('hud-container');

    // ������ ���������� ���� ��� ��������� ������ �� �������
    cef.emit('hud:update', { health: 80, armor: 50, money: 500 });

    // ������� ������� �� �������
    cef.subscribe('hud:update', function (data) {
        // ��������� ������ ����
        updateHUD(data.health, data.armor, data.money);
    });

    function updateHUD(health, armor, money) {
        // ��������� ����� ����
        document.getElementById('health-bar').style.width = health + '%';
        document.getElementById('armor-bar').style.width = armor + '%';
        document.getElementById('money-display').innerText = 'Money: $' + money;
    }
});
