// 시간 관련
var date = new Date();
var time = date.getHours();
var month = date.getMonth();

function cloud_background() {
  if (time >= 18) {
    document.body.style.background =
      "linear-gradient(150deg, #0A1414, #001036)";
  } else {
    body.style.background = "linear-gradient(150deg, #ccc, #2F80ED)";
  }
}

function sunny_background() {
  if (time >= 18) {
    document.body.style.background =
      "linear-gradient(150deg, #0A1414, #001036)";
  } else {
    body.style.background = "linear-gradient(150deg, #56CCF2, #2F80ED)";
  }
}

function foggy_background() {
  body.style.background = "linear-gradient(150deg, #888, #ccc)";
}

function snowy_background() {
  body.style.background = "linear-gradient(100deg, #c8eff3, #80dadf) ";
}

function rainy_background() {
  if (time >= 18) {
    document.body.style.background =
      "linear-gradient(150deg, #0A1414, #001036)";
  } else {
    body.style.background = "linear-gradient(150deg, #464646, #858484)";
  }
}
