const childrenOfThetable = Array.from($('.the-table').children());
const cellMarkers = ['../assets/X-marker.svg', '../assets/O-marker.svg'];

var currentTheme = 'light-theme';
var nextTheme = 'dark-theme';

var currentPlayingMode = 'single-player-mode';
var nextPlayingMode = 'multi-player-mode';

var displayModeControlContainer = $('.display-mode-control-container')[0];
const myId = (Math.floor((Math.random() * 100000)) - 1);
($('.id-value')[0]).value = myId;

///////////////////////////////////////////////////////////////

for (let i = 0; i < childrenOfThetable.length; i++) {
    const randomChance = Math.floor(Math.random() * 2);
    if (randomChance == 0) {
        childrenOfThetable[i].classList.add('O-marker');
    } else {
        childrenOfThetable[i].classList.add('X-marker');
    }
}

modeBorderFunction = (event) => {
    $('.mode-border')[0].classList.replace(currentPlayingMode, nextPlayingMode);
    currentPlayingMode = [nextPlayingMode, nextPlayingMode = currentPlayingMode][0];
    $('.id-setting').each((itemIndex, itemSelf) => {
        itemSelf.classList.toggle('disabled');
    });
}


themeSwitchController = (event) => {
    console.log(nextTheme);
    console.log(currentTheme);

    displayModeControlContainer = $('.display-mode-control-container')[0];

    //removing mode-detector child transmission for make theme change more smooth
    $('.mode-border *').css('transition', 'none');

    $('body')[0].classList.replace(currentTheme, nextTheme);


    //re-adding mode-detector child transmission for make theme change more smooth
    setTimeout(() => {
        $('.mode-border *').css('transition', '0.25s ease-in-out');
    }, 0);

    currentTheme = [nextTheme, nextTheme = currentTheme][0];
}


var smallestTimeDuration = 10000;
var isLeftOdd = true;
var isTopOdd = true;

backCircleCreatorMethod = () => {
    for (let index = 0; index < (Math.random() * 20) + 25; index++) {
        $($('.blured-background')[0]).append('<div class="back-circle"></div>');
    }

    $('.back-circle').each(((index, circle) => {

        let startSize = (Math.random() * 20) + 10;
        let startLeft = $(Math.random() * ($('body')[0]).clientWidth)[0]-startSize*2;
        let startTop = $(Math.random() * ($('body')[0]).clientHeight)[0]-startSize*2;

        $(circle).css({
            'background-color': `rgb(${Math.floor(Math.random()*156)},${Math.floor(Math.random()*156)},${Math.floor(Math.random()*156)})`,
            'width': `${startSize}em`,
            'left': `${startLeft}px`,
            'top': `${startTop}px`,
        });
    }));
}

backCircleDirectionMethod = () => {

    $('.back-circle').each(((index, circle) => {

        let endSize = (Math.random() * 20) + 10;
        let endLeft = ($(Math.random() * ($('body')[0]).clientWidth)[0])/2-endSize;
        let endTop = ($(Math.random() * ($('body')[0]).clientHeight)[0])/2-endSize;
        let timeDuration = (Math.random() * 10) + 10;
        smallestTimeDuration = smallestTimeDuration > timeDuration ? timeDuration : smallestTimeDuration;

        $(circle).css({
            'background-color': `rgb(${Math.floor(Math.random()*100)+100},${Math.floor(Math.random()*100)+100},${Math.floor(Math.random()*100)+100})`,
            'transition': `${smallestTimeDuration/5}s ease-in-out`,
            'transform': `translate(${isLeftOdd==true?'-':''+endLeft}px, ${isTopOdd==true?'':'-'+endTop}px)`,
            'width': `${endSize}em`
        });


        isLeftOdd = !isLeftOdd;
        isTopOdd = !isTopOdd

    }));
}

CircleColorization = () => {
    backCircleCreatorMethod()
    backCircleDirectionMethod();


    setInterval(() => {
        console.log(smallestTimeDuration);
        backCircleDirectionMethod();
    }, smallestTimeDuration*120);

}

CircleColorization();