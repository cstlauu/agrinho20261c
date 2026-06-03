let sustentabilidade = 0;

function mostrarMensagem(){

alert(
"🌱 AgroForte acredita que produção e preservação podem caminhar juntas!"
);

}

function adicionarPontos(valor){

sustentabilidade += valor;

if(sustentabilidade > 100){
sustentabilidade = 100;
}

document.getElementById("progresso").style.width =
sustentabilidade + "%";

document.getElementById("nivel").innerHTML =
"Sustentabilidade: " +
sustentabilidade +
"%";

}

const curiosidades = [

"🌎 95% dos alimentos dependem diretamente do solo.",

"🐝 Mais de 70% das culturas agrícolas dependem de polinizadores.",

"💧 Sistemas modernos podem economizar até metade da água usada.",

"🌱 O plantio direto reduz erosão e aumenta a matéria orgânica.",

"☀ Energia solar está crescendo rapidamente no campo."

];

function novaCuriosidade(){

let aleatoria =
curiosidades[Math.floor(Math.random()*curiosidades.length)];

document.getElementById("curiosidade").innerHTML =
aleatoria;

}

function corrigirQuiz(){

let resposta =
document.querySelector(
'input[name="quiz"]:checked'
);

if(!resposta){

document.getElementById("resultado").innerHTML =
"Escolha uma opção.";

return;
}

if(resposta.value === "1"){

document.getElementById("resultado").innerHTML =
"✅ Correto!";

}else{

document.getElementById("resultado").innerHTML =
"❌ Resposta incorreta.";
}

}

function animarContador(id, maximo){

let valor = 0;

let intervalo = setInterval(()=>{

valor += Math.ceil(maximo/100);

if(valor >= maximo){

valor = maximo;

clearInterval(intervalo);
}

document.getElementById(id).innerHTML =
valor.toLocaleString();

},20);

}

animarContador("agua",50000);
animarContador("carbono",12000);
animarContador("arvores",3500);