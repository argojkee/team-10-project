// Інінціалізація програвача
const player = new Plyr('#features-player');

if (window.innerWidth >= 1200 && window.devicePixelRatio >= 3) {
  player.poster = 'images/howmade/howmade-desktop@3x.jpg';
} else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 2) {
  player.poster = 'images/howmade/howmade-desktop@2x.jpg';
} else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 1) {
  player.poster = 'images/howmade//howmade-desktop.jpg';
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 3) {
  player.poster = 'images/howmade/howmade-tablet@3x.jpg';
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 2) {
  player.poster = 'images/howmade/howmade-tablet@2x.jpg';
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 1) {
  player.poster = 'images/howmade/howmade-tablet.jpg';
} else if (window.innerWidth < 768 && window.devicePixelRatio >= 3) {
  player.poster = 'images/howmade/howmade-mobile@3x.jpg';
} else if (window.innerWidth < 768 && window.devicePixelRatio >= 2) {
  player.poster = 'images/howmade/howmade-mobile@2x.jpg';
} else {
  player.poster = 'images/howmade/howmade-mobile.jpg';
}
