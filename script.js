let xp = 0;

function atualizar(){
    document.getElementById("xp").style.width = xp + "%";
}

function plantar(){
    xp += 10;
    if(xp > 100) xp = 100;
    atualizar();
}

function regar(){
    xp += 15;
    if(xp > 100) xp = 100;
    atualizar();
}

function energia(){
    xp += 20;
    if(xp > 100) xp = 100;
    atualizar();
}

function curiosidade(){

const lista = [
"🌱 Solo saudável aumenta produtividade em até 40%",
"🐝 Abelhas são essenciais para agricultura",
"💧 Irrigação inteligente economiza água",
"🌎 Agricultura sustentável reduz CO₂",
"🚜 Fazendas modernas usam sensores"
];

document.getElementById("textoCuriosidade").innerHTML =
lista[Math.floor(Math.random()*lista.length)];

}

function responder(correto){

if(correto){
    document.getElementById("resultado").innerHTML =
    "✅ Correto! Você protegeu o solo!";
}else{
    document.getElementById("resultado").innerHTML =
    "❌ Errado! Isso prejudica o meio ambiente.";
}

}