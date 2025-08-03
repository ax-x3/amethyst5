function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

const root = document.documentElement;
var flickeringEnabled = true;
var consoleTitle = "____ _  _ ____ ___ _  _ _   _ ____ ___ _  _  _  _ ____ ___\n|__| |\\/| |___  |  |__|  \\_/  [__   |   \\/   |\\ | |___  |\n|  | |  | |___  |  |  |   |   ___]  |  _/\\_ .| \\| |___  |";

document.addEventListener("keypress", function(event) {
    if (event.key == "/") {
        revealContent("devToolbar");
    }
});

addEventListener("load", (event) => {
    optimizeForBrowser();
    path = window.location.pathname;
    if (path == "/index.html" || path == "/") {
        greetUser();
        updateLocalTime();
    }
    console.log(consoleTitle);
});

function optimizeForBrowser() {
    if (isMobile()) {
        var mobileCard = document.getElementById("usingMobile");
        if (mobileCard != null) {
            mobileCard.hidden = false;
        }
        root.style.setProperty("--lu-static", "none");
        document.body.style.setProperty("animation", "none");
        consoleTitle = "AMETHYSTX.net";
        console.log("Browser: Mobile\nOptimization profile: Mobile\nChanges:\n Revealed mobile card\n Removed static effect\n Disabled background scroll\n Replaced console title");
        styleProfile.innerHTML = "lightweight (mobile)";
    } else if (navigator.userAgent.indexOf("Chrome") != -1){
        console.log("Browser: Chrome\nOptimization profile: Default\nChanges:\n None");
        styleProfile.innerHTML = "default (Chrome)";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        consoleTitle = "AMETHYSTX.net";
        console.log("Browser: Safari\nOptimization profile: Default\nChanges:\n Replaced console title");
        styleProfile.innerHTML = "default (Safari)";
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        console.log("Browser: Edge\nOptimization profile: Default\nChanges:\n None");
        styleProfile.innerHTML = "default (Edge)";
    } else if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        console.log("Browser: Opera\nOptimization profile: Default\nChanges:\n None");
        styleProfile.innerHTML = "default (Opera)";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        console.log("Browser: Firefox\nOptimization profile: Default\nChanges:\n None");
        styleProfile.innerHTML = "default (Firefox)";
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) { // if IE > 10
        console.log("Browser: Internet Explorer\nOptimization profile: Default\nChanges:\n None");
        styleProfile.innerHTML = "default (Internet Explorer)";
    } else {
        console.log("Browser: detection failed\nOptimization profile: Default\nChanges:\n None");
        styleProfile.innerHTML = "default (unknown)";
    }
}

function redirect(url, delay) {
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

function greetUser() {
    const hour = new Date().getHours();
    const greetingEle = document.getElementById("greeting");
    if (hour >= 4 && hour < 12) {
        greetingEle.innerHTML = "Good morning!";
    } else if (hour >= 12 && hour < 19) {
        greetingEle.innerHTML = "Good afternoon!";
    } else {
        greetingEle.innerHTML = "Good evening!";
    }
}

function updateLocalTime() {
    localTimeEle = document.getElementById("localTime");
    const options = {
        timeZone: 'America/New_York',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    },
    formatter = new Intl.DateTimeFormat([], options);
    localTime = formatter.format(Date.now());
    localTimeEle.innerHTML = localTime;
    setInterval(() => {
        localTime = formatter.format(Date.now());
        localTimeEle.innerHTML = localTime;
    }, 1000);
}

function playSound(soundId) {
    document.getElementById(soundId).play();
    document.getElementById(soundId).currentTime = 0;
}

function dismissCard(cardId) {
    document.getElementById(cardId).hidden = true;
}

function revealContent(contentId) {
    if (document.getElementById(contentId).hidden == true) {
        document.getElementById(contentId).hidden = false;
    } else {
        document.getElementById(contentId).hidden = true;
    }
}

function developerMode() {
    document.getElementById("usingMobile").hidden = false;
    document.getElementById("underConstruction").hidden = false;
    document.getElementById("queerSafety").hidden = false;
    document.getElementById("inactiveNotice").hidden = false;
}


function toggleFlickering() {
    if (flickeringEnabled) {
        root.style.setProperty('--lu-flicker-on', 'brightness(1)');
        root.style.setProperty('--lu-flicker-off', 'brightness(1)');
        flickeringEnabled = false;
    } else {
        root.style.setProperty('--lu-flicker-on', 'brightness(1.1)');
        root.style.setProperty('--lu-flicker-off', 'brightness(0.9)');
        flickeringEnabled = true;
    }
}
