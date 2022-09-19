console.log("welcome to Spotify");

//Initialise the Variables
let songIndex=0;
let audioElement= new Audio("music/letMeLoveYou.mp3");
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');




let song=[
    {songName:"Let me love you",filePath:"/music/letMeLoveYou.mp3",coverPath:'cover/1.jpg'},
    {songName:"Let me love you",filePath:"/music/letMeLoveYou",coverPath:'cover/1.jpg'},
    {songName:"Let me love you",filePath:"/music/letMeLoveYou",coverPath:'cover/1.jpg'},
    {songName:"Let me love you",filePath:"/music/letMeLoveYou",coverPath:'cover/1.jpg'},
    {songName:"Let me love you",filePath:"/music/letMeLoveYou",coverPath:'cover/1.jpg'},
    {songName:"Let me love you",filePath:"/music/letMeLoveYou",coverPath:'cover/1.jpg'},
    {songName:"Let me love you",filePath:"/music/letMeLoveYou",coverPath:'cover/1.jpg'}
]
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-backward');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-backward');
        masterPlay.classList.add('fa-play');
    }
})
//Listen to event
myProgressBar.addEventListener("timeupdate", () =>{
    console.log('timeupdate');
})