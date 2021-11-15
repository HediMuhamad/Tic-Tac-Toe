const childrenOfThetable = Array.from($('.the-table').children());
const cellMarkers = ['../assets/X-marker.svg', '../assets/O-marker.svg'];

var currentTheme = 'light-theme';
var nextTheme = 'dark-theme';

var currentPlayingMode = 'single-player-mode';
var nextPlayingMode = 'multi-player-mode';

var displayModeControlContainer = $('.display-mode-control-container')[0];
const myId = (Math.floor((Math.random()*100000))-1);
($('.id-value')[0]).value = myId;

///////////////////////////////////////////////////////////////

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
    $('.mode-border')[0].classList.replace(currentPlayingMode, nextPlayingMode);
    currentPlayingMode = [nextPlayingMode, nextPlayingMode=currentPlayingMode][0];
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