function livePlay(channel){

    if(Hls.isSupported()) {
        var video = document.getElementById('video');
        var hls = new Hls();
        hls.loadSource(`${channel}`);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
          video.play();
      });
      hls.on(Hls.Events.ERROR, function(event, data) {
        console.error("HLS.js error:", data);
      });

    }
}

