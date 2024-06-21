async function climaApp() {
  const accessKey = 'ghtDJ482ITryUwB1U2sTqhMSrC7Cu1S_nSsh249T49k'; // Reemplaza con tu clave de acceso de Unsplash

  async function setBackground() {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=landscape&client_id=${accessKey}&w=400`);
      const data = await response.json();
      const imageUrl = data.urls.full;
      document.body.style.backgroundImage = `url(${imageUrl})`;
      console.log('Background image URL:', imageUrl);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  async function logJSONData(ciudad) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5896c14ba0e344bc911154453231706&q=${ciudad}&aqi=yes&lang=es`);
      const jsonData = await response.json();
      updateDom(jsonData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  function updateDom(datos) {
    document.querySelector('.ciudad').innerText = 'Clima en ' + datos.location.name;
    document.querySelector('.temperatura').innerText = datos.current.temp_c + ' °C';
    document.querySelector('.icon').src = 'https:' + datos.current.condition.icon;
    document.querySelector('.description').innerText = datos.current.condition.text;
    document.querySelector('.humedad').innerText = 'Humedad: ' + datos.current.humidity + '%';
    document.querySelector('.viento').innerText = 'Viento: ' + datos.current.wind_kph + ' km/h';
    document.querySelector('.clima').classList.remove('carga');
  }

  // Obtener referencias a los elementos en el DOM
  const button = document.querySelector('.boton-buscador');
  const input = document.querySelector('.input');

  // Agregar un controlador de eventos al botón
  button.addEventListener("click", () => {
    logJSONData(input.value);
  });

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      logJSONData(input.value);
    }
  });

  // Llamar a setBackground al inicio para cargar la imagen de fondo
  await setBackground();
}

// Llamar a la función climaApp para iniciar la aplicación
climaApp();


  