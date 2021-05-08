
const toggleMenu = document.querySelectorAll('#menu-toggle')
const menu = document.getElementById('menu')
const body = document.getElementById('body')

toggleMenu.forEach(item => {
  item.addEventListener('click', ()=> {
    menu.classList.toggle('open')
  })
})

