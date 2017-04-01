window.onload = function() {
    var ca = document.querySelector("#ca");
    var cg = ca.getContext("2d");

    //content区域数字时间
    var cday = document.querySelector(".day");
    var chour = document.querySelector(".hour");
    var cminute = document.querySelector(".minute");
    var csecond = document.querySelector(".second");
    var cyear = document.querySelector(".year");
    var cmonth = document.querySelector(".month");
    var cdate = document.querySelector(".date");

    clock();
    setInterval(clock, 1000);

    function clock() {
        var x = 400;
        var y = 210;
        var r = 200;
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        // console.log(date.toLocaleDateString());
        //设置content区域数字时间
        chour.innerHTML = hour;
        cminute.innerHTML = minute < 10 ? ("0" + minute) : minute;
        csecond.innerHTML = second < 10 ? ("0" + second) : second;
        switch (date.getDay()) {
            case 0:
                cday.innerHTML = "日";
                break;
            case 1:
                cday.innerHTML = "一";
                break;
            case 2:
                cday.innerHTML = "二";
                break;
            case 3:
                cday.innerHTML = "三";
                break;
            case 4:
                cday.innerHTML = "四";
                break;
            case 5:
                cday.innerHTML = "日五";
                break;
            case 6:
                cday.innerHTML = "六";
                break;
        }
        cyear.innerHTML = date.getFullYear();
        cmonth.innerHTML = date.getMonth() + 1;
        cdate.innerHTML = date.getDate();

        //时间弧度
        var hhour = (-90 + hour * 30 + hour / 2) * Math.PI / 180;
        var hminute = (-90 + minute * 6) * Math.PI / 180;
        var hsecond = (-90 + second * 6) * Math.PI / 180;
        cg.clearRect(0, 0, ca.width, ca.height);
        //画60个刻度
        cg.beginPath();
        for (var i = 0; i < 60; i++) {
            cg.moveTo(x, y);
            cg.arc(x, y, r, 6 * i * Math.PI / 180, 6 * (i + 1) * Math.PI / 180, false);
            cg.stroke();
        }
        cg.closePath();

        //画圆盘
        cg.beginPath();
        cg.moveTo(x, y);
        cg.arc(x, y, r * 19 / 20, 0, 6 * 360 * Math.PI / 180, false);
        cg.fillStyle = "#fff";
        cg.fill();
        cg.closePath();

        //画12个刻度
        cg.beginPath();
        cg.lineWidth = 3;
        for (var i = 0; i < 12; i++) {
            cg.moveTo(x, y);
            cg.arc(x, y, r, 30 * i * Math.PI / 180, 30 * (i + 1) * Math.PI / 180, false);
            cg.stroke();
        }
        cg.closePath();

        //画圆盘
        cg.beginPath();
        cg.moveTo(x, y);
        cg.arc(x, y, r * 18 / 20, 0, 6 * 360 * Math.PI / 180, false);
        cg.fillStyle = "#fff";
        cg.fill();
        cg.closePath();

        //画中心圆圈
        cg.beginPath();
        cg.moveTo(x, y);
        cg.arc(x, y, r * 1 / 20, 0, 6 * 360 * Math.PI / 180, false);
        cg.fillStyle = "#000";
        cg.fill();
        cg.closePath();

        //画时针
        cg.beginPath();
        cg.lineWidth = 5;
        cg.moveTo(x, y);
        cg.arc(x, y, r * 10 / 20, hhour, hhour, false);
        cg.stroke();
        cg.closePath();

        //画分针
        cg.beginPath();
        cg.lineWidth = 3;
        cg.moveTo(x, y);
        cg.arc(x, y, r * 14 / 20, hminute, hminute, false);
        cg.stroke();
        cg.closePath();

        //画秒针
        cg.beginPath();
        cg.lineWidth = 1;
        cg.moveTo(x, y);
        cg.arc(x, y, r * 18 / 20, hsecond, hsecond, false);
        cg.stroke();
        cg.closePath();
    }




};