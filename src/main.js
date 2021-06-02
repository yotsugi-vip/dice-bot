const Discord = require('discord.js');
const client = new Discord.Client();

const init = () => {
    client.on('ready', () => {
        console.log('ready...');
    });

    client.on('message', msg => {
        main(msg);
    });

    // loginの引数がない場合、環境変数"DISCORD_TOKEN"をデフォルトで読み込む
    client.login();
}


const main = (msg) => {
    switch (msg.content) {
        case "$coin":
        case "$c":
            msg.channel.send(`${getCoin()}`);
            break;
        case "$dice":
        case "$d":
            msg.channel.send(`${getDice()}`);
            break;
        case "$random":
            msg.channel.send(`${getRandomInt(100)}`);
            break;
        case "$help":
            break;
        default:
            break;
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getCoin = () => {
    return getRandomInt(1000) % 2 == 0 ? "FRONT:full_moon:" : "BACK:new_moon:";
}

const getDice = () => {
    const num = ["one", "two", "three", "four", "five", "six"];
    return `:${num[getRandomInt(7)]}:`;

}

init();