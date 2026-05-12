document.addEventListener('DOMContentLoaded', function() {

    //VIVO LENS
    document.getElementById('vivoon').addEventListener('click', function() {
        alert('Botão Vivo Lens - Ao usuário clicar no botão o JOVI Lens será Ativado se adaptando e ligando opções de forma automaticaa com o que está na camera, o usuário ao comprar o celular poderá configurar o JOVI lens para ser ativo e poderá ser desativado a qualquer momento mudando para o modo Automatico.');
      });
    //Flash e Timer
        document.getElementById('flash').addEventListener('click', function() {
        alert('Botão Flash - O botão classico para ligar o flash, lembrando que manteremos funções essenciais como flash, pois o jovi lens irá adaptar mesmo com o flash ligado ou desligado, as opções serão adaptadas para o ambiente, mas o usuário poderá escolher se quer o flash ligado ou desligado, e o jovi lens irá adaptar as opções para todos os casos.');
      });
        document.getElementById('relogio').addEventListener('click', function() {
        alert('Botão Timer - O botão classico para ligar o timer, lembrando que manteremos funções essenciais como timer,  um temporizador poderá ser selecionado para tirar fotos com um atraso para preparo do usuário');
      });
      //configurações
        document.getElementById('configuracoes').addEventListener('click', function() {
        alert('Botão Configurações - O botão de configurações para habilitar configurações avançadas, mas lembrando que o JOVI Lens ativo estará preparando a configuração com o ambiente');
        });
        document.getElementById('imagem').addEventListener('click', function() {
        alert('Imagem de ambiente - A imagem do ambiente é apenas ilustrativa para mostrar um exemplo, os filtros serão aplicados de acordo com o ambiente levando em conta a iluminação, o tipo de ambiente, o tipo de foto, e o que o usuário deseja fotografar, o JOVI Lens irá adaptar as opções para cada caso, e a imagem é apenas um exemplo.');
        });
        document.getElementById('galeria').addEventListener('click', function() {
        alert('Galeria - Ao clicar será aberto a galeria do dispositivo');
        });
          document.getElementById('rotacionar').addEventListener('click', function() {
        alert('Rotacionar - Ao clicar será alternado entre a câmera fronta e traseira');
        });
    });