var string_id = 1231414;
var page_title = document.title;
var time_click = 0;
var check_button = 0;
var coefficient = 0;
var crashTime = 0;
var timeout = 0;
async function start() {
    // Remove specific elements from the game interface
    $('.games-project-frame__item').contents().find('div.crash-timer__segments').remove();
    $('.games-project-frame__item').contents().find('div.crash-timer__circle').remove();
    $('.games-project-frame__item').contents().find('div.crash-game__mountains').remove();

    $('.games-project-frame__item').contents().find('span.crash-btn__text').text('TRBUO_SCRIPT IS WORKING ').css("color", "WHITE");

    $('.games-project-frame__item').contents().find('div.crash').append('<img src="https://i.ibb.co/MDPkSFQ/20240305-003608.jpg" alt="20240305-003608" alt="Thimbles" width="70" height="49" class="thimbles-logo__image">');
		
    $('.games-project-frame__item').contents().find('div.crash-game__wrap').prepend("<p>DARK_SCRIPT </p>").find("p").css({
            "color": "white",
            "position": "absolute",
            "top": "-40%",  // Ajusta la posición vertical al centro
            "left": "50%", // Ajusta la posición horizontal al centro
            "transform": "translate(-50%, -50%)", // Centra el elemento en relación con su propio tamaño
            "font-size": "20px" // Ajusta el tamaño del texto
        });
    $('.games-project-frame__item').contents().find('g').eq(0).remove();
    $('.games-project-frame__item').contents().find('g').eq(0).remove();
    $('.games-project-frame__item').contents().find('g').eq(1).remove();
    $('.games-project-frame__item').contents().find('g').eq(1).remove();
    $('.games-project-frame__item').contents().find('g').eq(1).remove();

    // Wait for the game counter element to load
    await waitForElem('.crash-game__counter');
        var coefficient_elem = $('.games-project-frame__item').contents().find('.crash-game__counter');
}

window.onload = async function () {
    let status = false
    window.timer = setInterval(() => {
        if ($('.games-project-frame__item').contents().find('span.crash-btn__text').html() != undefined) {
            clearInterval(window.timer)
            start()
        }
    }, 1000);
};
            var coefficient = 0;

            var crashTime = 0;



            function updateCoeffChange() {

                coefficient = 1;

                crashTime = coefficient / 1;

            }



            function predictCrashTime() {

                if (crashTime < Date.now()) {

                    return true;

                } else {

                    return false;

                }

            }



            while (true) {

                updateCoeffChange();

                if (predictCrashTime()) {

                    break;

                }

            }
setInterval(function () {
    if (check_button == 0) {
        var timeout = 0; // Define the timeout variable
        if ($('button.crash-btn.crash-bet__btn.crash-bet__btn--stop').is('[disabled=disabled]') == false) {
            check_button = 1;
            time_click += getRandomInt(5500,100);
            console.log("time_click: " + time_click);
            setTimeout(function () {
                $('button.crash-btn.crash-bet__btn.crash-bet__btn--stop').click();
                time_click = 4500,100;
                check_button = 0;
            }, crashTime);
        } else {
            timeout += 3500,100;
            if (timeout >= 5500) {
                clearInterval(interval);
                reject('Element not found within 5 seconds.');
            }
        }
    }
}, 3500,100);
         var gameButton = document.querySelector('.crash-game-mountains.crash-game-mountains--game');
          if (gameButton) {
             gameButton.addEventListener('click', function () {
           if (gameButton.classList.contains('crash-game-mountains') && !gameButton.classList.contains('crash-game__mountains')) {
              gameButton.click();
        }
    });
}

          var getRandomInt = function(min, max) {  
          return Math.floor(Math.random() * (max - min + 1)) + min; 
        };
var waitForElem = (selector) => new Promise(resolve => {
    var intervalId = setInterval(() => {
        if ($(selector).length) {
            clearInterval(intervalId);
            resolve();
        }
    }, 2500,100);
});
