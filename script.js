// seleciona todos os elementos que são links na navbar 
const navLinks = document.querySelectorAll('#menu ul a.link')
console.log(navLinks)
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        console.log(target)
        if (target) {
            // pega a altura do topo da pagina
            const headerHeight = document.querySelector('header').offsetHeight
            const targetPosition = target.offsetTop - headerHeight - 20

            console.log(headerHeight)
            console.log(targetPosition)

            window.scrollTo( {
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    })
})



let darkmode = true
let botao = document.getElementById('botao-tema')
function mode () {
    if (darkmode == true) {
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>'
        darkmode = false
        document.documentElement.classList.toggle('dark')
    }    else {
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>'
        darkmode = true
        document.documentElement.classList.toggle('dark')
    }
}