document.addEventListener('DOMContentLoaded', () => {
  const favicon = document.querySelector('link[rel="icon"]');
  const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');

  const setFavicon = mode => {
    favicon.href = mode.matches ? 'assets/images/site-logo/icon.svg' : 'assets/images/site-logo/icon-black.svg';
  };

  setFavicon(darkModeMedia);
  darkModeMedia.addEventListener('change', setFavicon);
});
