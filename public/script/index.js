const itemTitle = document.querySelectorAll('.itemMen span');
const titulo = document.querySelector('.title-header');
const modal = document.querySelector('#Modal');
const items = document.querySelectorAll('.itemMen');
const btnBack = document.querySelector('.btn-back');

titulo.innerHTML=titulo.innerHTML.toUpperCase();

itemTitle.forEach(item => {
    item.innerHTML=item.innerHTML.toUpperCase();
})

function openModal() {
    modal.style.zIndex="10";
    modal.style.display="block"
}
function closeModal() {
    modal.style.top="-200%";
    setTimeout(() => {
        modal.style.display="none";
        modal.style.top="11.4vh";
    }, 500);
}

btnBack.addEventListener('click', closeModal);

items.forEach(item => {
    item.addEventListener('click', () => {
        openModal();
        const contenido = item.querySelector('.contentText');
        const nav = modal.querySelector('nav');
        const contentModal = modal.querySelector('.contentModal');

        // Limpia el contenido previo del nav y del modal
        nav.innerHTML = '';
        contentModal.innerHTML = contenido.innerHTML;

        const sections = contentModal.querySelectorAll('section');

        sections.forEach(section => {
            const link = document.createElement('button');
            link.textContent = section.querySelector('h2').textContent;
            switch(link.textContent){
                case "🎮 Jugando y compartiendo":
                    link.textContent="🎮"
                    break;
                case "🏆 Participando en eventos benéficos":
                    link.textContent="🏆"
                    break;
                case "🎁 Donaciones y colaboraciones":
                    link.textContent="🎁"
                    break;
                case "📢 Voluntariado y adopciones":
                    link.textContent="📢"
                    break;
            }
            nav.appendChild(link);

            // Agrega el evento para desplazarse a la sección
            link.addEventListener('click', () => {
                modal.scrollTo({
                    top: section.offsetTop, // Usa offsetTop para calcular la posición relativa
                    behavior: 'smooth' // Desplazamiento suave
                });
            });
        });
    });
});

document.querySelector(".donation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("modal-donacion-gracias").classList.add("activo");
  });
  
  document.getElementById("cerrar-modal-donacion").addEventListener("click", function() {
    document.getElementById("modal-donacion-gracias").classList.remove("activo");
  });