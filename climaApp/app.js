function climaApp() {


  
    async function logJSONData(ciudad) {
      const response = await fetch("https://api.weatherapi.com/v1/current.json?key=5896c14ba0e344bc911154453231706&q=" + ciudad + "&aqi=yes&lang=es");
      const jsonData = await response.json();
      updateDom(jsonData)
    }

    function updateDom(datos){
        document.querySelector('.ciudad').innerText = 'Clima en ' + datos['location']['name'];
        document.querySelector('.temperatura').innerText = datos['current']['temp_c'] + ' °C';
        document.querySelector('.icon').src = 'https:'+datos['current']['condition']['icon'];
        document.querySelector('.description').innerText = datos['current']['condition']['text'];
        document.querySelector('.humedad').innerText = 'humedad: '+ datos['current']['humidity']+'%';
        document.querySelector('.viento').innerText = 'viento: '+ datos['current']['wind_kph'] + ' km/p';
        document.querySelector('.clima').classList.remove('carga')
    }
  
    // Obtener referencias a los elementos en el DOM
    const button = document.querySelector('.boton-buscador')
    const input = document.getElementsByTagName('input')[0];
  
    // Agregar un controlador de eventos al botón
    button.addEventListener("click", () => {
      logJSONData(input.value);
    });

    input.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            logJSONData(input.value);
        }
      });
  }
  
  // Llamar a la función climaApp para iniciar la aplicación
  climaApp();
  