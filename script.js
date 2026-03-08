// seleciona todos os elementos que são links na navbar
const navLinks = document.querySelectorAll("#menu ul a.link");
console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    console.log(target);
    if (target) {
      // pega a altura do topo da pagina
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;

      console.log(headerHeight);
      console.log(targetPosition);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// trocando de tema
console.log(localStorage.getItem("tema"));
const botao = document.getElementById("botao-tema");

const temasalvo = localStorage.getItem("tema");
tema();
// tema(temasalvo === "dark");
// check qual tema está no momento

// mudar tema e trocar o icone
function tema() {
  if (localStorage.getItem("tema") == "dark") {
    document.documentElement.classList.add("dark");
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("tema", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("tema", "light");
  }
}

botao.addEventListener("click", () => {
  localStorage.setItem(
    "tema",
    localStorage.getItem("tema") == "dark" ? "light" : "dark",
  );
  tema();
});
