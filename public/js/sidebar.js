const toggle_icons = document.querySelector('.psr-icons');
const toggle = document.querySelector('.psr-page-container');
toggle_icons.addEventListener('click',()=>{
    if(toggle.classList.contains('psr-sidebar-expanded')){
        toggle.classList.remove('psr-sidebar-expanded');
        toggle.classList.add('psr-sidebar-collapsed');
    }
    else{
        toggle.classList.add('psr-sidebar-expanded');
        toggle.classList.remove('psr-sidebar-collapsed');
    }
})