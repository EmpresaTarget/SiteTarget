let menuBnt  = document.querySelector('#menu-bnt');
let navbar = document.querySelector('.header .flex .navbar');

menuBnt.onclick = () =>{
    menuBnt.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/*var swiper = new Swiper(".slide-parceiros", {
    spaceBetween: 30,
      centeredSlides: true,
    loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  var swiper = new Swiper(".equipe-slide", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });*/

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // Troca de slide a cada 3 segundos


const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os dados do formulário
  const formData = new FormData(this);

  // Envia os dados do formulário usando fetch para o script PHP
  try {
      const response = await fetch('send_email.php', {
          method: 'POST',
          body: formData
      });

      const result = await response.text();
      document.getElementById('responseMessage').textContent = result;
  } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      document.getElementById('responseMessage').textContent = 'Erro ao enviar a mensagem.';
  }
});




  