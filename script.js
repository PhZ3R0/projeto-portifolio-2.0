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

let botaoTema = document.getElementById("botao-tema");

function iconeTema(type) {
  if (type == true) {
    document.documentElement.classList.add("dark");
    botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.classList.remove("dark");
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botaoTema.addEventListener("click", () => {
  const isdark = document.documentElement.toggle("dark");
  iconeTema(isdark)
  localStorage.setItem('theme', isdark ? 'dark' : 'light')
  console.log('click')
});
