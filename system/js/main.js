const initiate = document.querySelector("p.initiate");
const startBtn = document.getElementById("startBtn");
const setupContent = document.getElementById("setupContent");
const personalizationUi = document.getElementById("uiSelect");
const welcome = document.getElementById("welcome");
const windowedModeBtn = document.getElementById("windowedMode");
const windowlessModeBtn = document.getElementById("windowlessMode");
const body = document.body;
const wallpapers = [
    "/media/wallpapers/cat.jpg",
    "/media/wallpapers/chinese.png",
    "/media/wallpapers/earth.png",
    "/media/wallpapers/fishing_stars.jpg",
    "/media/wallpapers/japan_anime_city.jpg",
    "/media/wallpapers/literal-wallpaper.png",
    "/media/wallpapers/minimal-purple.jpg",
    "/media/wallpapers/nasa_japan.png",
    "/media/wallpapers/outer-wild.png",
    "/media/wallpapers/ThriveOS_hill.png",
    "/media/wallpapers/ThriveOS_moon.png",
    "/media/wallpapers/ThriveOS_pink.png",
    "/media/wallpapers/ThriveOS_planet.png",
    "/media/wallpapers/tokyo.jpg",
    "/media/wallpapers/wave_black.png"
];

// Toggles the page fullscreen. Running directly from console does not work.

function toggleFullscreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

// (Kinda) choppy animation for making boot div and start div disappear. Improve by paking a pull request.

function fadeOutDelete(element) {
    if (!element) return;

    var opacity = 1;

    var fadeOutAndRemove = function() {
      opacity -= 0.1;
      element.style.opacity = opacity;

      if (opacity <= 0) {
        element.parentNode.removeChild(element);
        clearInterval(fadeInterval);
      }
    };

    var fadeInterval = setInterval(fadeOutAndRemove, 50);
}

function bootThrive() {
    fadeOutDelete(startBtnDiv);
    initiateThrive();
    toggleFullscreen();
};

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function wrapper(message){
    const ct=  getCurrentTime();
    console.log(message);
    console.log(ct);
    const result = "<br><span class=\"timeInit\">[" + ct + "]</span> " + message + "...";
    return result;
}

function initiateThrive() {
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Initializing components');
       // initiate.innerHTML += `<br><span class="timeInit">[${getCurrentTime}]</span> Initializing components...`;
    }, 100);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Complete!</span>`;
    }, 200);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Loading configuration files');
    }, 201);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Configuration Loaded!</span>`;
    }, 256);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Starting Services');
    }, 257);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Services Started!</span>`;
    }, 356);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Initializing Secure Boot');
    }, 357);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Secure Boot Initialized!</span>`;
    }, 540);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Loading External Libraries');
    }, 545);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Libraries Loaded!</span>`;
    }, 900);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Configuring Environment Variables');
    }, 901);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Environment Configured!</span>`;
    }, 1008);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Initializing Components');
    }, 1009);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Plugins Initialized!</span>`;
    }, 1090);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Setting Up Event Listeners');
    }, 1091);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Listeners Ready!</span>`;
    }, 1300);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Preparing Data Structures');
    }, 1301);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Data Structures Prepared!</span>`;
    }, 1457);
    
    setTimeout(() => {
        initiate.innerHTML += wrapper(' Fetching Localstorage Data...');
    }, 1458);
    
    setTimeout(() => {
        initiate.innerHTML += `<span class=\"success\"> - Localstorage Fetched!</span>`;
    }, 1499);
    
    setTimeout(() => {
        fadeOutDelete(boot);
        setupThrive(1);
    }, 1600);
}

// Wallpaper configuration functions. Do not touch.

function changeWallpaper(wallpaperName) {
    body.style.backgroundImage = `url("/media/wallpapers/${wallpaperName}")`;
    localStorage.setItem('wallpaper', wallpaperName);
}

function setWallpaperFromLocalStorage() {
    const wallpaperName = localStorage.getItem('wallpaper');
    if (wallpaperName) {
        body.style.backgroundImage = `url("/media/wallpapers/${wallpaperName}")`;
    }
}

setWallpaperFromLocalStorage();

// Cloak page function - change favicon and website title.

function cloakPage(faviconUrl, title) {
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }
  
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/x-icon';
    newFavicon.href = faviconUrl;
    document.head.appendChild(newFavicon);
  
    document.title = title;
  }
  

// Setup Thrive functions below.

function setupThrive(pageNumber) {
    var currentPageNumber = pageNumber;
    if (pageNumber === 1) {
        setupContent.innerHTML = `
        <h1>Welcome to ThriveOS.</h1>
        <p>Let's setup your new favorite operating system!</p>
        <hr>
    <h1>Select your wallpaper:</h1>
        <div id="gallery">
            <img src="/media/wallpapers/ThriveOS_hill.png" alt="ThriveOS Hill" onclick="changeWallpaper('ThriveOS_hill.png')">
            <img src="/media/wallpapers/ThriveOS_moon.png" alt="ThriveOS Moon" onclick="changeWallpaper('ThriveOS_moon.png')">
            <img src="/media/wallpapers/ThriveOS_pink.png" alt="ThriveOS Pink" onclick="changeWallpaper('ThriveOS_pink.png')">
            <img src="/media/wallpapers/ThriveOS_planet.png" alt="ThriveOS Planet" onclick="changeWallpaper('ThriveOS_planet.png')">
            <img src="/media/wallpapers/chinese.png" alt="Chinese" onclick="changeWallpaper('chinese.png')">
            <img src="/media/wallpapers/cat.jpg" alt="Cat" onclick="changeWallpaper('cat.jpg')">
            <img src="/media/wallpapers/earth.png" alt="Earth" onclick="changeWallpaper('earth.png')">
            <img src="/media/wallpapers/fishing_stars.jpg" alt="Fishing Stars" onclick="changeWallpaper('fishing_stars.jpg')">
            <img src="/media/wallpapers/japan_anime_city.jpg" alt="Japan Anime City" onclick="changeWallpaper('japan_anime_city.jpg')">
            <img src="/media/wallpapers/literal-wallpaper.png" alt="Literal Wallpaper" onclick="changeWallpaper('literal-wallpaper.png')">
            <img src="/media/wallpapers/minimal-purple.jpg" alt="Minimal Purple" onclick="changeWallpaper('minimal-purple.jpg')">
            <img src="/media/wallpapers/nasa_japan.png" alt="NASA Japan" onclick="changeWallpaper('nasa_japan.png')">
            <img src="/media/wallpapers/outer-wild.png" alt="Outer Wild" onclick="changeWallpaper('outer-wild.png')">
            <img src="/media/wallpapers/tokyo.jpg" alt="Tokyo" onclick="changeWallpaper('tokyo.jpg')">
            <img src="/media/wallpapers/wave_black.png" alt="Wave Black" onclick="changeWallpaper('wave_black.png')">
        </div>
        <button id="setupNext" onclick="setupThrive(2)"><h1>Next</h1></button>
    `;
    } else if (pageNumber === 2) {
        setupContent.innerHTML = `
        <h1>Welcome to ThriveOS.</h1>
        <p>Let's setup your new favorite operating system!</p>
        <hr>
        <h1>Personalization</h1>
        <p>We have two main System UIs. Windowsless mode, or Windows mode.</p>
        <div id="uiSelect">
          <div id="leftUi">
            <img id="windowedMode" src="/media/assets/ui/windowed.png" onclick="windowedMode()">
          </div>
          <div id="rightUi">
            <img id="windowlessMode" src="/media/assets/ui/windowless.png">
          </div>
        </div>
        <button id="setupNext" onclick="setupThrive(3)"><h1>Next</h1></button>
        <button id="setupNext" onclick="setupThrive(1)"><h1>Back</h1></button>
        <p>Windowless mode inspired by Hyprland.</p>
        `;
    } else if (pageNumber === 3) {
        setupContent.innerHTML = `
        <h1>Welcome to ThriveOS.</h1>
        <p>Let's setup your new favorite operating system!</p>
        <hr>
        <h1>Page Cloaking</h1>
        <p>Customize how you want your Thrive tab to look like. For your own reasons, of course! We won't judge.</p>
        <br>
        <h2>Website favicon: </h2>
        <input id="websiteFaviconInput" placeholder="https://example.com/favicon.png"></input><br><br><br>
        <h2>Website Title: </h2>
        <input id="websiteTitleInput" placeholder="Example Website"></input><br><br><br>
        <script>
        const websiteTitleInput = document.getElementById("websiteTitleInput");
        const websiteFaviconInput = document.getElementById("websiteFaviconInput");
        </script>
        <button id="submitCloak" onclick="cloakPage(websiteFaviconInput.value, websiteTitleInput.value)">Cloak!</button><br><br><br>
        <br>
        <p>Pre-made assets not included due to copyright limitations.</p>
        <button id="setupNext" onclick="setupThrive(4)"><h1>Next</h1></button>
        <button id="setupNext" onclick="setupThrive(2)"><h1>Back</h1></button>
        `;
    }
}


// functions to manage the window manager mode.

function windowedMode() {
    console.log("it works.")
}