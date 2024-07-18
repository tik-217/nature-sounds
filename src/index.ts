import "./index.scss";
import RainSound from "./sounds/rain.mp3";
import SummerSong from "./sounds/summer.mp3";
import WinterSong from "./sounds/winter.mp3";

const $html = document.querySelector("html");

const $audioItems = document.querySelectorAll(".soundModes__item");
const $rangeVol: HTMLInputElement | null = document.querySelector(".wthrSounds__range");

const songsList = [
  new Audio(SummerSong),
  new Audio(RainSound),
  new Audio(WinterSong),
];

for (let i = 0; i < $audioItems.length; i++) {
  const $soundImage = $audioItems[i];

  $soundImage.addEventListener("click", () => {
    const soundImagePathFile = $soundImage.children[0].getAttribute("src");

    $html && ($html.style.background = `url(${soundImagePathFile})`);

    if (songsList[i].paused) {
      songsList.forEach((el) => el.pause());
      songsList[i].play();
    } else {
      songsList[i].pause();
    }
  });
}

$rangeVol && $rangeVol.addEventListener("input", () => {
  songsList.forEach((el) => (el.volume = +$rangeVol.value));
});
