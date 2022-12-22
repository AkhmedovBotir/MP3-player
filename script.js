        let h2 = document.querySelector('h2');
        let list = [
        "audio/Dr Dre - Still DR.mp3",
        "audio/Dr.Dre__-_Still(styleebass)(1).mp3",
        "audio/Dream_It_Possible.mp3",
        "audio/1-round (Minus 3).mp3"
        ];
        let audio = new Audio(list[0]);
        let currentAudioIndex = 0;
        function getname() {
            let soundName = list[currentAudioIndex],
                splitName = soundName.split("/");
                h2.innerText = splitName[splitName.length-1];
        }
        function playSound() {
            audio.play()
            document.querySelector('#play').style.display = 'none',
            document.querySelector('#pausa').style.display = 'block'
            getname()
        }   
        function pauseSound(){
            audio.pause();
            document.querySelector('#play').style.display = 'block',
            document.querySelector('#pausa').style.display = 'none'
            getname()
        }
        function nextSound(){
            currentAudioIndex++;
            if(list[currentAudioIndex] !== undefined){
                audio.pause();
                audio = new Audio(list[currentAudioIndex]);
                audio.play();
            }
            getname()
        }
        function prev(){
            currentAudioIndex--;
            if(list[currentAudioIndex] !== undefined){
                audio.pause();
                audio = new Audio(list[currentAudioIndex]);
                audio.play();
            }
            getname()
        }