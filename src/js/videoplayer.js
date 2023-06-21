// Інінціалізація програвача
// const player = new Plyr('#features-player');

// if (window.innerWidth >= 1200 && window.devicePixelRatio >= 3) {
//   player.poster = '../images/howmade/howmade-desktop@3x.jpg';
// } else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 2) {
//   player.poster = '../images/howmade/howmade-desktop@2x.jpg';
// } else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 1) {
//   player.poster = '../images/howmade//howmade-desktop.jpg';
// } else if (window.innerWidth >= 768 && window.devicePixelRatio >= 3) {
//   player.poster = '../images/howmade/howmade-tablet@3x.jpg';
// } else if (window.innerWidth >= 768 && window.devicePixelRatio >= 2) {
//   player.poster = '../images/howmade/howmade-tablet@2x.jpg';
// } else if (window.innerWidth >= 768 && window.devicePixelRatio >= 1) {
//   player.poster = '../images/howmade/howmade-tablet.jpg';
// } else if (window.innerWidth < 768 && window.devicePixelRatio >= 3) {
//   player.poster = '../images/howmade/howmade-mobile@3x.jpg';
// } else if (window.innerWidth < 768 && window.devicePixelRatio >= 2) {
//   player.poster = '../images/howmade/howmade-mobile@2x.jpg';
// } else {
//   player.poster = '../images/howmade/howmade-mobile.jpg';
// }

// if (window.innerWidth > 1199) {
//   player.poster = '../images/howmade/howmade-desktop.jpg';
// } else if (window.innerWidth > 767) {
//   player.poster = '../images/howmade/howmade-tablet.jpg';
// } else {
//   player.poster = '../images/howmade/howmade-mobile.jpg';
// }

const player = new Plyr('#features-player');
import mobileImage from '../images/howmade/howmade-mobile.jpg';
import mobileImage2x from '../images/howmade/howmade-mobile@2x.jpg';
import mobileImage3x from '../images/howmade/howmade-mobile@3x.jpg';
import tabletImage from '../images/howmade/howmade-tablet.jpg';
import tabletImage2x from '../images/howmade/howmade-tablet@2x.jpg';
import tabletImage3x from '../images/howmade/howmade-tablet@3x.jpg';
import desktopImage from '../images/howmade/howmade-desktop.jpg';
import desktopImage2x from '../images/howmade/howmade-desktop@2x.jpg';
import desktopImage3x from '../images/howmade/howmade-desktop@3x.jpg';

if (window.innerWidth >= 1200 && window.devicePixelRatio >= 3) {
  player.poster = desktopImage3x;
} else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 2) {
  player.poster = desktopImage2x;
} else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 1) {
  player.poster = desktopImage;
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 3) {
  player.poster = tabletImage3x;
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 2) {
  player.poster = tabletImage2x;
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 1) {
  player.poster = tabletImage;
} else if (window.innerWidth < 768 && window.devicePixelRatio >= 3) {
  player.poster = mobileImage3x;
} else if (window.innerWidth < 768 && window.devicePixelRatio >= 2) {
  player.poster = mobileImage2x;
} else {
  player.poster = mobileImage;
}
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          return caches.open('my-cache').then(function (cache) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      }
    })
  );
});
