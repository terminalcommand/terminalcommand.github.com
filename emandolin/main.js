window.onload = createClickListener;
document.addEventListener("keydown", registerKeys);

function dummyClick() {
    playNote(this.id);
}

function createClickListener() {
  var fretboard = document.getElementById("fretboard");
  var frets = document.getElementsByTagName("p");
  window.acoustic = Synth.createInstrument('acoustic');
  window.noteplaying = document.getElementById("noteplaying");
  for (var i = 0; i < frets.length; i++) {
    frets[i].addEventListener('click', dummyClick);
  }
}

function blinkFret(id) {
    var fret = document.getElementById(id);
    fret.style.backgroundColor="yellow";
    setTimeout(function(){fret.style.backgroundColor=""},200);
}

function registerKeys(event) {
    switch (event.code) {
        case 'Digit1':
            playNote("1-0");
            blinkFret("1-0");
            break;
        case 'Digit2':
            playNote("1-1");
            blinkFret("1-1");
            break;
        case 'Digit3':
            playNote("1-2");
            blinkFret("1-2");
            break;
        case 'Digit4':
            playNote("1-3");
            blinkFret("1-3");
            break;
        case 'Digit5':
            playNote("1-4");
            blinkFret("1-4");
            break;
        case 'Digit6':
            playNote("1-5");
            blinkFret("1-5");
            break;
        case 'Digit7':
            playNote("1-6");
            blinkFret("1-6");
        break;

        case 'KeyQ':
            playNote("2-0");
            blinkFret("2-0");
            break;
        case 'KeyW':
            playNote("2-1");
            blinkFret("2-1");
            break;
        case 'KeyE':
            playNote("2-2");
            blinkFret("2-2");
            break;
        case 'KeyR':
            playNote("2-3");
            blinkFret("2-3");
            break;
        case 'KeyT':
            playNote("2-4");
            blinkFret("2-4");
            break;
        case 'KeyY':
            playNote("2-5");
            blinkFret("2-5");
            break;
        case 'KeyU':
            playNote("2-6");
            blinkFret("2-6");
            break;

        case 'KeyA':
            playNote("3-0");
            blinkFret("3-0");
            break;
        case 'KeyS':
            playNote("3-1");
            blinkFret("3-1");
            break;
        case 'KeyD':
            playNote("3-2");
            blinkFret("3-2");
            break;
        case 'KeyF':
            playNote("3-3");
            blinkFret("3-3");
            break;
         case 'KeyG':
            playNote("3-4");
            blinkFret("3-4");
            break;
         case 'KeyH':
            playNote("3-5");
            blinkFret("3-5");
            break;    
        case 'KeyJ':
            playNote("3-6");
            blinkFret("3-6");
            break;
            
        case 'KeyZ':
            playNote("4-0");
            blinkFret("4-0");
            break;
        case 'KeyX':
            playNote("4-1");
            blinkFret("4-1");
            break;
        case 'KeyC':
            playNote("4-2");
            blinkFret("4-2");
            break;
        case 'KeyV':
            playNote("4-3");
            blinkFret("4-3");
            break;
         case 'KeyB':
            playNote("4-4");
            blinkFret("4-4");
            break;
         case 'KeyN':
            playNote("4-5");
            blinkFret("4-5");
            break;    
        case 'KeyM':
            playNote("4-6");
            blinkFret("4-6");
            break;   
    }
}




function playNote(noteID) {
    var duration=1;
    switch (noteID) {
        case ("1-0"): 
            acoustic.play('E', 5, duration);
            noteplaying.textContent='E5';
            break;
        case ("1-1"): 
            acoustic.play('F', 5, duration);
            noteplaying.textContent='F5';
            break;
        case ("1-2"): 
            acoustic.play('F#', 5, duration);
            noteplaying.textContent='F#5 / Gb5';
            break;
        case ("1-3"): 
            acoustic.play('G', 5, duration);
            noteplaying.textContent='G5';
            break;
        case ("1-4"): 
            acoustic.play('G#', 5, duration);
            noteplaying.textContent='G#5 / Ab5';
            break;
        case ("1-5"): 
            acoustic.play('A', 5, duration);
            noteplaying.textContent='A5';
            break;
        case ("1-6"): 
            acoustic.play('A#', 5, duration);
            noteplaying.textContent='A#5 / Bb5';
            break;
    
        case ("2-0"): 
            acoustic.play('A', 4, duration);
            noteplaying.textContent='A4';
            break;
        case ("2-1"): 
            acoustic.play('A#', 4, duration);
            noteplaying.textContent='A#4 / Bb4';
            break;
        case ("2-2"): 
            acoustic.play('B', 4, duration);
            noteplaying.textContent='B4';
            break;
        case ("2-3"): 
            acoustic.play('C', 5, duration);
            noteplaying.textContent='C5';
            break;
        case ("2-4"): 
            acoustic.play('C#', 5, duration);
            noteplaying.textContent='C#5 / Db5';
            break;
        case ("2-5"): 
            acoustic.play('D', 5, duration);
            noteplaying.textContent='D5';
            break;
        case ("2-6"): 
            acoustic.play('D#', 5, duration);
            noteplaying.textContent='D#5 / Eb5';
            break;
    
        case ("3-0"): 
            acoustic.play('D', 4, duration);
            noteplaying.textContent='D4';
            break;
        case ("3-1"): 
            acoustic.play('D#', 4, duration);
            noteplaying.textContent='D#4 /Eb4';
            break;
        case ("3-2"): 
            acoustic.play('E', 4, duration);
            noteplaying.textContent='E4';
            break;
        case ("3-3"): 
            acoustic.play('F', 4, duration);
            noteplaying.textContent='F4';
            break;
        case ("3-4"): 
            acoustic.play('F#', 4, duration);
            noteplaying.textContent='F#4 / Gb4';
            break;
        case ("3-5"): 
            acoustic.play('G', 4, duration);
            noteplaying.textContent='G4';
            break;
        case ("3-6"): 
            acoustic.play('G#', 4, duration);
            noteplaying.textContent='G#4 / Ab4';
            break;
    
    
        case ("4-0"): 
            acoustic.play('G', 3, duration);
            noteplaying.textContent='G3';
            break;
        case ("4-1"): 
            acoustic.play('G#', 3, duration);
            noteplaying.textContent='G#3 / Ab3';
            break;
        case ("4-2"): 
            acoustic.play('A', 3, duration);
            noteplaying.textContent='A3';
            break;
        case ("4-3"): 
            acoustic.play('A#', 3, duration);
            noteplaying.textContent='A#3 / Bb3';
            break;
        case ("4-4"): 
            acoustic.play('B', 3, duration);
            noteplaying.textContent='B3';
            break;
        case ("4-5"): 
            acoustic.play('C', 4, duration);
            noteplaying.textContent='C4';
            break;
        case ("4-6"): 
            acoustic.play('C#', 4, duration);
            noteplaying.textContent='C#4 / Db4';
            break;
   
      }
  }