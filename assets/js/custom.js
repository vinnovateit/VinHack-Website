var h = new Date().getHours();
var date = new Date().getDate();
console.log("none" + date);
if (date >= 22 && date <= 24) {
    document.getElementById('live-update-btn').style.display = "none";
    console.log("none");
}