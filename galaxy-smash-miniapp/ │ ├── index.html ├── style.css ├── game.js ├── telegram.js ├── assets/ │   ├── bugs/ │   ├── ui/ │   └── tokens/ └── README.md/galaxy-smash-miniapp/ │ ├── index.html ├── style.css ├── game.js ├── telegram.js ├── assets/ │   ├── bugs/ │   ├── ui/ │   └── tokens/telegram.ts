const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

console.log("Telegram User:", tg.initDataUnsafe.user);