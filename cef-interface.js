

let nicks = document.querySelector('.nick_text');
let moneys = document.querySelector('.money_text');
let progress = document.querySelector('.styled');
let armour = document.querySelector('.styled1');


cef.emit('pwd:try');

//interface off
cef.emit("game:hud:setComponentVisible", "interface", false);

cef.on('pwd:money', (response) => {
	moneys.innerHTML += response + "$";
});
cef.on('pwd:armour', (armours) => {
	armour.value = armours;   
});
cef.on('pwd:hp', (hp) => {

	progress.value = hp;
});
cef.on('pwd:nick', (response) => {
	nicks.innerHTML = response;

});


//новая функция ( -1 не работает )

cef.on('pwd:allitem', (money, nick, armours, hp) => {
	if(money != -1)
	{
		moneys.innerHTML += money + "$";
	}
	if(nick != "")
	{
		nicks.innerHTML = nick;
	}
	if(armours != -1)
	{
		armour.value = armours; 
	} 
	if(hp != -1)
	{
		progress.value = hp;
	}
	
});
