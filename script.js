function furMessage() {
    alert("Thank you for your interest in cat fur. Lydia and London are currently reviewing your request.");
}

function contactPopup() {
    const subject = encodeURIComponent("Message from ArteeHeartee");
    const body = encodeURIComponent("Hi Andreas,\n\n");
    window.location.href =
        "mailto:andreasrtee@gmail.com?subject=" +
        subject +
        "&body=" +
        body;
}

/* ---------- Featured Video ---------- */

const featuredContainer = document.getElementById("featured-video");

featuredContainer.innerHTML = `
<div class="featured-card">

    <div class="featured-label">
        ⭐ Featured Video
    </div>

    <img
        src="https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg"
        alt="${featuredVideo.title}"
    >

    <h3>${featuredVideo.title}</h3>

    <div class="video-buttons">

    <a href="${featuredVideo.tiktok}"
       target="_blank"
       class="video-logo-link">
        <img src="images/TikTokLogoNew1.png" alt="TikTok">
    </a>

    <a href="${featuredVideo.youtube}"
       target="_blank"
       class="video-logo-link">
        <img src="images/YoutubeLogoNew1.png" alt="YouTube">
    </a>

</div>

</div>
`;


/* ---------- Top Videos ---------- */

const topContainer = document.getElementById("top-videos");

topContainer.innerHTML = `
<h2 class="top-title">🏆 Top Videos</h2>
`;

topVideos.forEach((video,index)=>{

    topContainer.innerHTML += `

    <div class="video-card">

        <img
            src="https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg"
            alt="${video.title}"
        >

        <div class="video-info">

            <span class="rank">
                #${index+1}
            </span>

            <h4>${video.title}</h4>

            <div class="video-links">

    <a href="${video.tiktok}"
       target="_blank"
       class="small-logo-link">
        <img src="images/TikTokLogoNew1.png" alt="TikTok">
    </a>

    <a href="${video.youtube}"
       target="_blank"
       class="small-logo-link">
        <img src="images/YoutubeLogoNew1.png" alt="YouTube">
    </a>

</div>

        </div>

    </div>

    `;

});
