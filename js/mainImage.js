/*---------------------------------------------------
    File name: mainImage.js
    Animation for the main image on the home page
----------------------------------------------------*/
    document.querySelectorAll('.circle').forEach((circle, i) => {
      setTimeout(() => {
        circle.classList.add('appear');
      }, 300 + i * 150); 
    });

    setTimeout(() => {
      document.querySelector('.image-wrapper').classList.add('appear');
    }, 500);
