export function loadYoutubeVideo() {
  const APIkey = "AIzaSyB2tILSyZ5yTNCu6aInjfLuGLsjU4mqtbE";
  const coverPlaylistId = "PLYhJ2nxH1dYR7VkX72b9X6tEdQsHYsGbl";
  const compositionPlaylistId = "PLYhJ2nxH1dYQoFhwR2tcuZ8FvTEh-030o";
  const LatestCoverContainer = document.querySelector(
    "#Latest-Cover-Container"
  );

  const LatestCompositionContainer = document.querySelector(
    "#Latest-Composition-Container"
  );

  // Fetch the latest cover video
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&order=date&maxResults=1&playlistId=${coverPlaylistId}&key=${APIkey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const videoId = data.items[0].snippet.resourceId.videoId;

      LatestCoverContainer.innerHTML = `
                <div class="Latest-Cover-Video">
                    <iframe width="100%" height="100%" style="position:absolute; top:0; left: 0" class="Latest-Cover-Video-Player" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `;
    });

  // Fetch the latest composition video
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&order=date&maxResults=1&playlistId=${compositionPlaylistId}&key=${APIkey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const videoId = data.items[0].snippet.resourceId.videoId;

      LatestCompositionContainer.innerHTML = `

                <div class="Latest-Composition-Video">
                <iframe width="100%" height="100%" style="position:absolute; top:0; left: 0" class="Latest-Composition-Video-Player" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            `;
    });
}
