const randomChoose = Math.round(Math.random()*2)==1;
const whoAmI = randomChoose==1?'X-marker':'O-marker';
const against = !randomChoose==1?'X-marker':'O-marker';
const cellMarkers = ['../assets/X-marker.svg', '../assets/O-marker.svg'];

var currentTheme = 'light-theme';
var nextTheme = 'dark-theme';

var currentPlayingMode = 'single-player-mode';
var nextPlayingMode = 'multi-player-mode';

var displayModeControlContainer = $('.display-mode-control-container')[0];
const myId = (Math.floor((Math.random()*100000))-1);
($('.id-value')[0]).value = myId;

///////////////////////////////////////////////////////////////

addMarker = (event) => {
    const target = event.target;

    if(!target.classList[0]){
        target.classList.add(whoAmI);
        target.style.opacity='1';
        checkCells(whoAmI)
    }

}

addAgainstMarker = (event) => {
    event.preventDefault();
    const target = event.target;

    if(!target.classList[0]){
        target.classList.add(against);
        target.style.opacity='1';
        checkCells(against)
    }

}

modeBorderFunction = (event)=>{
    $('.mode-border')[0].classList.replace(currentPlayingMode, nextPlayingMode);
    currentPlayingMode = [nextPlayingMode, nextPlayingMode=currentPlayingMode][0];
    $('.id-setting').each((itemIndex, itemSelf)=>{
        itemSelf.classList.toggle('disabled');
    });
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