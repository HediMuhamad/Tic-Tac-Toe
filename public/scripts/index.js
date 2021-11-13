const childrenOfThetable = Array.from($('.the-table').children());
const cellMarkers = ['../assets/X-marker.svg', '../assets/O-marker.svg'];

const modeCircle = ($('.mode-circle')[0]);
var modeDetector = ($('.mode-border')[0]);

var currentStatus = 'left';
var nextStatus = 'right';

for(let i=0;i<childrenOfThetable.length;i++){
    const randomChance = Math.floor(Math.random()*2);
    if(randomChance==0){
        childrenOfThetable[i].classList.add('O-marker');
    }
    else{
        childrenOfThetable[i].classList.add('X-marker');
    }
}

$(modeDetector).on('click', (event)=>{
    if(isSinglePlayer()){
        $('.single-player')[0].classList.replace('active-status', 'deactive-status');
        $('.multi-player')[0].classList.replace('deactive-status', 'active-status');
    }
    else{
        $('.single-player')[0].classList.replace('deactive-status', 'active-status');
        $('.multi-player')[0].classList.replace('active-status', 'deactive-status');
    }


    modeCircle.classList.replace(currentStatus, nextStatus);
    modeDetector = ($('.mode-border')[0]);

    currentStatus = [nextStatus, nextStatus = currentStatus][0];
})


isSinglePlayer = ()=>{
    return modeCircle.classList.contains('left');
}