
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlIconChangeLeft = document.getElementById("ctrlIconChangeLeft");
let ctrlIconChangeRight = document.getElementById("ctrlIconChangeRight");
let currSongIndx = 0;
let songName = document.querySelector(".songName");

// Array of songs 
const songs = [

    "Let me down x kabhi jo badal.mp3",
    "Teri Yaadon Mein.mp3",
    "Tujhe Sochta Hoon.mp3",
    "Tu Hi Meri Shab Hai.mp3",
    "Kya Mujhe Pyaar Hai Lofi.mp3",
    "Hale Dil.mp3",
    "Mann Mera.mp3",
    "Zara Sa.mp3",
    
    "Tum Hi Ho.mp3",
    "Uska Hi Bana.mp3",
    "Khamoshiyan.mp3",
    "Phir Mohabbat.mp3",
    "Chahun Main Ya Naa.mp3",
    "Mohabbat Barsa Dena tu.mp3",
    "Milne Hai Mujhse Aayi.mp3",
    "Kabhi Jo Baadal Barse.mp3",
    "Ishq Mubarak.mp3",
    "Lo Maan Liya.mp3",
    "Salamat.mp3",
    "Saiyaara.mp3",
    "Tu Hi Hai.mp3",
    "Piya Aaye Na.mp3",
    "Naam-E-Wafa.mp3",
    "Baarish.mp3",

    "Hua Hain Aaj Pehli Baar.mp3",
    "Mujhko Barsaat Bana Lo.mp3",
    "Bol Do Na Zara.mp3",
    "Tere Liye.mp3",
    "Ride It.mp3",
    "Jitni Dafa.mp3",
    "O Mere Dil Ke Chain.mp3",
    "Muskaanein Jhooti Hai.mp3",
    "Gulabi Aankhen.mp3",
    "Humen Tumse Pyar.mp3",
    "Ek Galti.mp3",
    
    "O Re Piya.mp3",
    "Tere Mast Mast Do Nain.mp3",
    "Teri Deewani.mp3",
    "Ye Tune Kya Kiya.mp3",
    "Kali Kali Zulfon ke.mp3",
    "Tujh Mein Rab Dikhta Hai.mp3",
    
    "Malang (1).mp3",
    "Waiting Kabhi Jo Badal Barse.mp3",
    "Dunia Standing by u.mp3",
    "Tum Ho.mp3",
    "Tum Jab Paas.mp3",
    "Kahani_1.mp3",
    "Kaash.mp3",
    "Tu Ne Jo Na Kaha.mp3",
    "Jee Le Zaraa.mp3",
    
    "Pakad Lo Haath Barwari.mp3",
    "Kishori Kuch Aisa.mp3",
    
];

//function of playing and pausing the music
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

//functions of changing the song forward and backward
ctrlIconChangeLeft.addEventListener("click",()=>{
    currSongIndx = (currSongIndx - 1 + songs.length)%songs.length;
    updatesong();
});
ctrlIconChangeRight.addEventListener("click",()=>{
    currSongIndx = (currSongIndx + 1)%songs.length;
    updatesong();
});

//for playing the next song automatically
song.addEventListener("ended",()=>{
    currSongIndx = (currSongIndx + 1)%songs.length;
    updatesong();
});

// for updating the song
function updatesong(){
    song.src = songs[currSongIndx];
    song.play();
    songName.innerHTML = getSongName(songs[currSongIndx]);
}

// for changing the song
function getSongName(songPath){
    const parts = songPath.split("/");
    const fileName = parts[parts.length - 1];
    return fileName.replace(".mp3","");
}
