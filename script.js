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

const botao= document.getElementById("botao-tema");

const temasalvo = localStorage.getItem('tema')
tema(temasalvo === 'dark')

// mudar tema e trocar o icone
function tema(tipo) {
  if (tipo == true) {
    document.documentElement.classList.add("dark");
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.documentElement.classList.remove("dark");
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

botao.addEventListener("click", () => {
  const isdark = document.documentElement.classList.toggle('dark')
  tema(isdark)
  localStorage.setItem('tema', isdark ? 'dark' : 'light')
});
