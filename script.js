function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    const watch = document.querySelector("#watch");
    watch.innerHTML = hh + ":" + mm + ":" + ss;

}
setInterval(currentTime, 1000);