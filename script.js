// Cambio de tema

const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = userPrefersDark ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', initialTheme);


document.querySelectorAll('.theme-toggle').forEach(button => {
  button.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');

      // Cambiar entre temas
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);

      // Cambiar texto del botón (opcional)
  });
});



// menu
const button = document.getElementById('menuButton');
const menu = document.getElementById('floatingMenu');

// Función para mostrar el menú flotante
button.addEventListener('click', (event) => {
  // Obtiene las coordenadas del botón
  event.stopPropagation();
  const rect = button.getBoundingClientRect();

  // Posiciona el menú cerca del botón
 
  menu.style.left = `${rect.left - 89/2}px`;
  menu.style.top = `${rect.bottom}px`;

  // Alterna la visibilidad del menú
  menu.classList.toggle('hidden');
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== button) {
    menu.classList.add('hidden');
  }
});

// Función para hacer scroll al hacer clic en un elemento del menú
const menuItems = document.querySelectorAll('#floatingMenu a');

menuItems.forEach(item => {
  item.addEventListener('click', (event) => {

    if (!href.startsWith('#')) {
      return;
    }
    // Evita que se recargue la página
    event.preventDefault();
    
    // Obtiene el id del enlace (como #inicio, #proyectos, etc.)
    const targetId = item.getAttribute('href').substring(1);

    // Encuentra el destino correspondiente en el documento
    const targetElement = document.getElementById(targetId);

    // Realiza el scroll hasta la sección objetivo
    smoothScroll(targetElement, 1000); 
    // Cierra el menú después de hacer scroll
    menu.classList.add('hidden');
  });
});

const menuItemsDestop = document.querySelectorAll('.nav-desktop a');

menuItemsDestop.forEach(item => {
  item.addEventListener('click', (event) => {
    // Evita que se recargue la página
    event.preventDefault();
    
    // Obtiene el id del enlace (como #inicio, #proyectos, etc.)
    const targetId = item.getAttribute('href').substring(1);

    // Encuentra el destino correspondiente en el documento
    const targetElement = document.getElementById(targetId);

    // Realiza el scroll hasta la sección objetivo
    smoothScroll(targetElement, 1000); 
    // Cierra el menú después de hacer scroll
    menu.classList.add('hidden');
  });
});


function smoothScroll(targetElement, duration) {
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function for smooth animation
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
