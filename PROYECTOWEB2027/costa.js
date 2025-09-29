// Lista de imágenes
    const imagenes = [
       "Costa/1.jpg",
       "Costa/2.jpg",
       "Costa/3.jpg",
       "Costa/4.jpg",
       "Costa/5.jpg",
       "Costa/6,jpg",
       "Costa/7.jpg",
       "Costa/8.jpg",
       "Costa/9.jpg",
       "Costa/10.jpg"
  
    ];

    let indice = 0;
    const img = document.getElementById("Costa");

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