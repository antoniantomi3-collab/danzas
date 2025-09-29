// Lista de imágenes
    const imagenes = [
       "Selva/1.jpg",
       "Selva/2.jpg",
       "Selva/3.jpg",
       "Selva/4.jpg",
       "Selva/5.jpg",
       "Selva/6,jpg",
       "Selva/7.jpg",
       "Selva/8.jpg",
       "Selva/9.jpg",
       "Selva/10.jpg"
  
    ];

    let indice = 0;
    const img = document.getElementById("Selva");

    function mostrarSiguienteFoto() {
      // Cambiar la imagen con opacidad
      img.style.opacity = 0;

      setTimeout(() => {
        img.src = imagenes[indice];
        img.style.opacity = 1;

        indice = (indice + 1) % imagenes.length; // volver al inicio al final
      }, 500);
    }

    // Mostrar la primera imagen al cargar
    mostrarSiguienteFoto();

    // Cambiar imagen cada 3 segundos
    setInterval(mostrarSiguienteFoto, 3000);