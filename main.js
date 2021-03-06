 let mySong = document.getElementById("mySong");
    let icon = document.getElementById("icon");

            icon.onclick = function(){
            if(mySong.paused){
                mySong.play ();
                icon.src = "1.png";
            }else{
                 mySong.pause();
                icon.src = "play/play-button.png";
            }       
        }
