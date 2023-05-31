$(document).ready(function() {
    // Esconde todos os slides, exceto o primeiro
    $(".slide:not(:first)").hide();

    // Função para mostrar o próximo slide
    function nextSlide() {
      $(".slide:first").fadeOut().next().fadeIn().end().appendTo(".imagens");
    }

    // Intervalo de tempo para alternar os slides (3 segundos)
    setInterval(nextSlide, 3000);
  });