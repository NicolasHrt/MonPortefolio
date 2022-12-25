export function portefolioVideoLoad() {
  const portefolioVideos = document.querySelectorAll(".portefolio-video");
  portefolioVideos.forEach((video) => {
    const videoPlayer = video.querySelector("video");

    function playVideo() {
      videoPlayer.play();
    }

    function pauseVideo() {
      videoPlayer.pause();
    }
    console.log(window.innerWidth )
    if (window.innerWidth > 1024) {
      pauseVideo();
      video.addEventListener("mouseover", playVideo);
      video.addEventListener("mouseout", pauseVideo);
    } else {
      video.removeEventListener("mouseover", playVideo);
      video.removeEventListener("mouseout", pauseVideo);
    }

    videoPlayer.addEventListener("ended", playVideo);
  });
}
