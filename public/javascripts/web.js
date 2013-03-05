$(function () {
  $('#play').click(function () {
    init();
    console.log('working');
  })
  
  var url = $('#audioSummary').text();
  console.log(url);
  $.get(url, function(data) {
    console.log(data);
  });

  var context;
  var bufferLoader;
  var RhythmSample = {
  };
  function init() {
      context = new webkitAudioContext();
      bufferLoader = new BufferLoader(
            context,
            [
                  '../sounds/hihat.mp3',
                  '../sounds/snare.mp3',
                  '../sounds/kick.mp3',
                  '../sounds/mansion.mp3',
                  '../sounds/Goat.mp3',
                  '../sounds/inception.mp3'

             ],
             finishedLoading
            );
      bufferLoader.load();
  }



  function finishedLoading(bufferList) {
      var source1 = context.createBufferSource();
      source1.buffer = bufferList[0];
      source1.connect(context.destination);
      var source2 = context.createBufferSource();
      source2.buffer = bufferList[1];
      source2.connect(context.destination);
      var source3 = context.createBufferSource();
      source3.buffer = bufferList[2];
      source3.connect(context.destination);
      var source4 = context.createBufferSource();
      source4.buffer = bufferList[3];
      source4.connect(context.destination);
      var source5 = context.createBufferSource();
      source5.buffer = bufferList[4];
      source5.connect(context.destination);
      var source6 = context.createBufferSource();
      source6.buffer = bufferList[5];
      source6.connect(context.destination);
      RhythmSample.play(bufferList);
  }

  RhythmSample.play = function(bufferList) {
    function playSound(buffer, time) {
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.noteOn(time);
      source.noteOff(time+ 7 * eighthNoteTime);
    }
    function playSoundYeah(buffer, time) {
      var source2 = context.createBufferSource();
      source2.buffer = buffer;
      source2.connect(context.destination);
      source2.noteOn(time);
    }

    var song;
    var startTime;
    var songTitle = $('#song').text();
    if(songTitle =='thugz mansion'){
      song = bufferList[3];
      startTime = 20.5
    }

    var one = bufferList[parseInt($('#one').text())];

    var two = bufferList[parseInt($('#two').text())];
    var three = bufferList[parseInt($('#three').text())];
    var four = bufferList[parseInt($('#four').text())];

    // We'll start playing the rhythm 100 milliseconds from "now"
    var tempo = parseInt($('#tempo').text(),10); // BPM (beats per minute)
    var eighthNoteTime = (60 / tempo) / 2;
    playSoundYeah(song,0);
    // Play 2 bars of the following:
    for (var bar = 0; bar < 200; bar++) {
      var time = startTime + bar * 8 * eighthNoteTime;
      // Play the bass (kick) drum on beats 1, 5
      playSound(one, time);
      playSound(three,  time + 4 * eighthNoteTime);

      //Play the snare drum on beats 3, 7
      playSound(two, time + 2 * eighthNoteTime);
      playSound(four, time + 6 * eighthNoteTime);

      // Play the hi-hat every eighthh note.
      for (var i = 0; i < 8; i+=2) {
        //playSound(snare, time + i * eighthNoteTime);
      }
    }
  };

})
