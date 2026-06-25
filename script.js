function furMessage() {
    alert("Thank you for your interest in cat fur. Lydia and London are currently reviewing your request.");
}

function contactPopup() {
    const subject = encodeURIComponent("Message from ArteeHeartee");
    const body = encodeURIComponent("Hiya Artee,\n\n");
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

    <a href="${featuredVideo.youtube}" target="_blank" class="video-main-link">
    <img
        src="https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg"
        alt="${featuredVideo.title}"
    >

    <h3>${featuredVideo.title}</h3>
</a>

    <div class="video-buttons">

    <a href="${featuredVideo.tiktok}"
       target="_blank"
       class="video-logo-link">
        <img src="images/TikTokLogoNew1.png" alt="TikTok">
    </a>

    <a href="${featuredVideo.youtube}"
       target="_blank"
       class="video-logo-link">
        <img src="images/YouTubeLogoNew1.png" alt="YouTube">
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

        <a href="${video.youtube}" target="_blank" class="video-thumb-link">
    <img
        src="https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg"
        alt="${video.title}"
    >
</a>

        <div class="video-info">

            <span class="rank">
                #${index+1}
            </span>

            <a href="${video.youtube}" target="_blank" class="video-title-link">
    <h4>${video.title}</h4>
</a>

            <div class="video-links">

    <a href="${video.tiktok}"
       target="_blank"
       class="small-logo-link">
        <img src="images/TikTokLogoNew1.png" alt="TikTok">
    </a>

    <a href="${video.youtube}"
       target="_blank"
       class="small-logo-link">
        <img src="images/YouTubeLogoNew1.png" alt="YouTube">
    </a>

</div>

        </div>

    </div>

    `;

});
/* ---------- Animated Counters ---------- */

function startCounters() {
    const counters = document.querySelectorAll(".number");

    counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target"));
        const duration = 1400;
        const startTime = performance.now();

        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1).replace(".0", "") + "M";
            }

            return num.toLocaleString("en-US");
        }

        function update(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easedProgress * target);

            counter.textContent = formatNumber(currentValue);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = formatNumber(target);
            }
        }

        requestAnimationFrame(update);
    });
}

setTimeout(startCounters, 300);
/* ---------- Shop Dropdown Toggle ---------- */

const shopMenu = document.querySelector(".shop-menu");
const shopToggle = document.querySelector(".shop-toggle");

if (shopMenu && shopToggle) {

    shopToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        shopMenu.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!shopMenu.contains(e.target)) {
            shopMenu.classList.remove("open");
        }
    });

    document.querySelectorAll(".shop-dropdown a").forEach(link => {
        link.addEventListener("click", () => {
            shopMenu.classList.remove("open");
        });
    });

}
/* Close menu after clicking an item */

document.querySelectorAll(".shop-dropdown a").forEach(link => {
    link.addEventListener("click", () => {
        shopMenu.classList.remove("open");
    });
});
