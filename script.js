function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Couleur aléatoire
  const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Position horizontale aléatoire
  balloon.style.left = Math.random() * window.innerWidth + "px";

  document.getElementById("balloons").appendChild(balloon);

  // Supprimer ballon après animation
  setTimeout(() => {
    balloon.remove();
  }, 6000);
}

// Créer un ballon toutes les 500ms
setInterval(createBalloon, 500);
