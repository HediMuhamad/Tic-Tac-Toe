const childrenOfThetable = Array.from($('.the-table').children());
const cellMarkers = ['../assets/X-marker.svg', '../assets/O-marker.svg'];

var modeCircle = ($('.mode-circle')[0]);
var singlePlayerMode = $('.player-mode')[0];
var multiPlayerMode  = $('.player-mode')[1];

var currentPlayerCirclePlace = 'left';
var nextPlayerCirclePlace = 'right';

var currentPlayerActivityStatus = 'active-status';
var nextPlayerActivityStatus = 'deactive-status';

var currentTheme = 'dark-theme';
var nextTheme = 'light-theme';

var displayModeControlContainer = $('.display-mode-control-container')[0];


for(let i=0;i<childrenOfThetable.length;i++){
    const randomChance = Math.floor(Math.random()*2);
    if(randomChance==0){
        childrenOfThetable[i].classList.add('O-marker');
    }
    else{
        childrenOfThetable[i].classList.add('X-marker');
    }
}

modeBorderFunction = (event)=>{
    singlePlayerMode.classList.replace(currentPlayerActivityStatus, nextPlayerActivityStatus);
    multiPlayerMode.classList.replace(nextPlayerActivityStatus, currentPlayerActivityStatus);
    modeCircle.classList.replace(currentPlayerCirclePlace, nextPlayerCirclePlace);

    modeCircle = ($('.mode-circle')[0]);
    singlePlayerMode = $('.player-mode')[0];
    multiPlayerMode  = $('.player-mode')[1];

    currentPlayerCirclePlace = [nextPlayerCirclePlace, nextPlayerCirclePlace = currentPlayerCirclePlace][0];
    currentPlayerActivityStatus = [nextPlayerActivityStatus, nextPlayerActivityStatus = currentPlayerActivityStatus][0];
}


themeSwitchController = (event) =>{
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
    
    currentTheme = [nextTheme, nextTheme=currentTheme][0];
}