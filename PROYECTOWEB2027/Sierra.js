// Lista de imágenes
    const imagenes = [
       "Siera/1.jpg",
       "Sierra/2.jpg",
       "Sierra/3.jpg",
       "Sierra/4.jpg",
       "Sierra/5.jpg",
       "Sierra/6,jpg",
       "Sierra/7.jpg",
       "Sierra/8.jpg",
       "Sierra/9.jpg",
       "Sierra/10.jpg"
  
    ];

    let indice = 0;
    const img = document.getElementById("Sierra");

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