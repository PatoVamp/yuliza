const juegos = [
    {
        titulo: "MARIO BROS",
        imagen: "../assets/image/mario1980.png",
        enlace: "https://www.retrogames.cc/search?q=MARIO+BROS&system=",
        descripcion: `Creador: Nintendo (1985)
    Personajes principales: Mario y Luigi, dos hermanos fontaneros.
    Características: Juego de plataformas donde los jugadores controlan a Mario y Luigi para salvar el Reino Champiñón.
    Poder: Usan hongos para crecer, flores de fuego para lanzar bolas de fuego y estrellas para volverse invencibles.
    Meta: Rescatar a la Princesa Peach de las garras de Bowser.
    Enemigos: Bowser, Goombas, Koopa Troopas, Lakitus y más.
    Amigos: Princesa Peach y Toad, quienes ayudan a los hermanos en su aventura.`
    },
    {
        titulo: "METAL SLUG",
        imagen: "../assets/image/metalslug.png",
        enlace: "https://www.retrogames.cc/search?q=METAL+SLUG&system=",
        descripcion: `Creador: SNK (1996)
    Personajes principales: Marco, Tarma, Eri y Fio.
    Características: Shooter de desplazamiento lateral con armas y vehículos.
    Poderes: Diversas armas, granadas y tanques Metal Slug.
    Meta: Derrotar al General Morden y otras amenazas.
    Enemigos: Soldados enemigos, alienígenas, máquinas de guerra.
    Amigos: Prisioneros de guerra que ayudan con armas y power-ups.`
    },
    {
        titulo: "PAC-MAN",
        imagen: "../assets/image/pacman.png",
        enlace: "https://www.retrogames.cc/search?q=PACMAN&system=",
        descripcion: `Creador: Namco (1980)
    Personaje principal: Pac-Man
    Características: Juego de laberinto donde Pac-Man debe comer todos los puntos.
    Poderes: Come frutas para puntos extra y "power pellets" para comerse a los fantasmas.
    Meta: Sobrevivir niveles sin ser atrapado.
    Enemigos: Blinky, Pinky, Inky y Clyde.
    Amigos: Ninguno en el juego original.`
    },
    {
        titulo: "SONIC",
        imagen: "../assets/image/sonic.png",
        enlace: "https://www.retrogames.cc/search?q=SONIC&system=",
        descripcion: `Creador: SEGA (1991)
    Personaje principal: Sonic the Hedgehog
    Características: Juego de plataformas con enfoque en la velocidad.
    Poderes: Anillos para protegerse, esmeraldas del caos para transformaciones.
    Meta: Detener al Dr. Robotnik (Eggman) y salvar a los animales del mundo.
    Enemigos: Dr. Eggman y sus máquinas.
    Amigos: Tails, Knuckles, Amy.`
    }
];

let juegoActual = 0;
const itemMenuJugar = document.querySelector('#jugar-menu');
const contentJugar = document.querySelector('#jugar-content');
const cambiarJuegoBtn = document.querySelector('#cambiar-juego-btn'); // <------------------ SELECCIONAR EL BOTÓN

function mostrarJuego(index) {
    const juego = juegos[index];

    const contenedorJuego = contentJugar.querySelector(".target-game");
    const link = contenedorJuego.querySelector(".target-game-link");
    const img = contenedorJuego.querySelector(".games-img");
    const titulo = contenedorJuego.querySelector("h2");
    const descripcion = contentJugar.querySelector(".target-game-description-text");

    if (link && img && titulo && descripcion) {
        link.href = juego.enlace;
        img.src = juego.imagen;
        img.alt = `Imagen del juego ${juego.titulo}`;
        titulo.textContent = juego.titulo;
        descripcion.textContent = juego.descripcion;
    } else {
        console.error("No se encontraron los elementos para mostrar el juego dentro de #jugar-content.");
    }
}

// Mostrar el primer juego al cargar la página (si el content de "Jugar" está visible)
document.addEventListener('DOMContentLoaded', () => {
    if (contentJugar && contentJugar.style.display !== 'none') {
        mostrarJuego(juegoActual);
    }
});

if (itemMenuJugar) {
    itemMenuJugar.addEventListener('click', () => {
        if (contentJugar.style.display === 'none' || contentJugar.style.display === '') {
            contentJugar.style.display = 'block';
            mostrarJuego(juegoActual);
            juegoActual = (juegoActual + 1) % juegos.length;
        }
    });
} else {
    console.error("No se encontró el elemento del menú 'Jugar' con el ID 'jugar-menu'.");
}

// Event listener para el botón "Cambiar Juego"
if (cambiarJuegoBtn) {
    cambiarJuegoBtn.addEventListener('click', () => {
        juegoActual = (juegoActual + 1) % juegos.length;
        mostrarJuego(juegoActual);
    });
} else {
    console.error("No se encontró el botón 'Cambiar Juego' con el ID 'cambiar-juego-btn'.");
}

console.log("¡jugar.js cargado!");