const emojis = [
  "src/imagens/JannaAdesivo.png", "src/imagens/JannaAdesivo.png",
  "src/imagens/JannaAdesivoSemBoca.png", "src/imagens/JannaAdesivoSemBoca.png",
  "src/imagens/JannaAnimada.png", "src/imagens/JannaAnimada.png",
  "src/imagens/JannaChibFrustrada.png", "src/imagens/JannaChibFrustrada.png",
  "src/imagens/JannaChibPrevisaoDoTempo.png", "src/imagens/JannaChibPrevisaoDoTempo.png",
  "src/imagens/JannaChibVitoriosa.png", "src/imagens/JannaChibVitoriosa.png",
  "src/imagens/JannaEmotJogo.png", "src/imagens/JannaEmotJogo.png",
  "src/imagens/JannaSuperSaiajin.png", "src/imagens/JannaSuperSaiajin.png"
];

let openCards = [];

let shuffleEmojis = emojis.sort(() =>
  Math.random() > 0.5 ? 2 : -1
);

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";

  const img = document.createElement("img");
  img.src = shuffleEmojis[i];
  img.alt = "emoji";
  img.classList.add("emoji-img");
  box.onclick = handleClick;

  box.appendChild(img);

  document.querySelector(".game").appendChild(box);
}


function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

function checkMatch() {
  const img1 = openCards[0].querySelector("img");
  const img2 = openCards[1].querySelector("img");

  if (img1.src === img2.src) {
    openCards[0].classList.add("boxMatch")
    openCards[1].classList.add("boxMatch")
  } else {
    openCards[0].classList.remove("boxOpen")
    openCards[1].classList.remove("boxOpen")
  }
  openCards = [];
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("you win!")
    window.location.reload()
  }
}