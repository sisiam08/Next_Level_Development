// jsut idea lagbe
// implementation pore korbo

// using interface to achieve abstraction
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class AudioPlayer implements MediaPlayer {
//   play() {
//     console.log("Playing audio...");
//   }
//   pause() {
//     console.log("Pausing audio...");
//   }
//   stop() {
//     console.log("Stopping audio...");
//   }
// }

// const audioPlayer = new AudioPlayer();

// audioPlayer.play();
// audioPlayer.pause();
// audioPlayer.stop();

// using abstract class to achieve abstraction

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class AudioPlayer extends MediaPlayer {
  play() {
    console.log("Playing audio...");
  }
  pause() {
    console.log("Pausing audio...");
  }
  stop() {
    console.log("Stopping audio...");
  }
}

const audioPlayer = new AudioPlayer();
audioPlayer.play();
audioPlayer.pause();
audioPlayer.stop();
