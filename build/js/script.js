const initApp=()=>{
    const mobileMenu = document.getElementById('mobile-menu');
    const hambergerMenu = document.getElementById('hamburger-button')

    const toggleMenu = ()=>{
        mobileMenu.classList.toggle('flex')
        mobileMenu.classList.toggle('hidden')
        hambergerMenu.classList.toggle('toggle-btn')
    }

    hambergerMenu.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
}
document.addEventListener('DOMContentLoaded',initApp)