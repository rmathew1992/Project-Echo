$(('play').click(function(){
      console.log('hey')
      window.onload = init;
      var context;
      var bufferLoader;
     
      function init() {
            context = new webkitAudioContext();
           
            bufferLoader = new BufferLoader(
                  context,
                  [
                        '../Candleinthesun.mp3',
                        '../ForrestGump.mp3'
                   ],
                  finishedLoading
                  );
            bufferLoader.load();
      }
      function finishedLoading(bufferList) {
            var source1 = context.createBufferSource();
            var source2 = context.createBufferSource();
            source1.buffer = bufferList[0];
            source2.buffer = bufferList[1];

            source1.connect(context.destination);
            source2.connect(context.destination);
            source1.noteOn(0);
            source2.noteOn(0);
      }
})
