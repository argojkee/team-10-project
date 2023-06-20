const scrollBtn = document.querySelector('.isShowBtn');
window.onscroll = () => {
  if (window.scrollY > 800) {
    scrollBtn.classList.remove('isShowBtn-hide');
  } else if (window.scrollY < 800) {
    scrollBtn.classList.add('isShowBtn-hide');
  }

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};
