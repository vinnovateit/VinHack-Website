var h = new Date().getHours();
var date = new Date().getDate();
if (date <= 22 || date >= 24) {
    document.getElementById('live-update-btn').style.display = "none";
}

const observer = lozad();
observer.observe();