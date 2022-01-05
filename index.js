let display_result = "";
function setresult(c) {
  display_result += c;
  document.getElementById("label").value = display_result;
}
document.getElementById("point").onclick = function () {
  if (display_result.includes(".") !== true && display_result !== "") {
    setresult(".");
  }
};
document.getElementById("0").onclick = function () {
  if (display_result !== "0") {
    setresult("0");
  }
};
document.getElementById("1").onclick = function () {
  setresult("1");
};
document.getElementById("2").onclick = function () {
  setresult("2");
};
document.getElementById("3").onclick = function () {
  setresult("3");
};
document.getElementById("4").onclick = function () {
  setresult("4");
};
document.getElementById("5").onclick = function () {
  setresult("5");
};
document.getElementById("6").onclick = function () {
  setresult("6");
};
document.getElementById("7").onclick = function () {
  setresult("7");
};
document.getElementById("8").onclick = function () {
  setresult("8");
};
document.getElementById("9").onclick = function () {
  setresult("9");
};

document.getElementById("divis").onclick = function () {
  if (
    display_result[display_result.length - 1] !== "/" &&
    display_result !== ""
  ) {
    if (
      display_result[display_result.length - 1] === "*" ||
      display_result[display_result.length - 1] === "-" ||
      display_result[display_result.length - 1] === "+"
    ) {
      display_result = display_result.slice(0, -1);
    }
    setresult("/");
  }
};
document.getElementById("multi").onclick = function () {
  if (
    display_result[display_result.length - 1] !== "*" &&
    display_result !== ""
  ) {
    if (
      display_result[display_result.length - 1] === "/" ||
      display_result[display_result.length - 1] === "-" ||
      display_result[display_result.length - 1] === "+"
    ) {
      display_result = display_result.slice(0, -1);
      setresult("*");
      return;
    }
    setresult("*");
  }
};
document.getElementById("minus").onclick = function () {
  if (
    display_result[display_result.length - 1] !== "-" &&
    display_result !== ""
  ) {
    if (
      display_result[display_result.length - 1] === "/" ||
      display_result[display_result.length - 1] === "*" ||
      display_result[display_result.length - 1] === "+"
    ) {
      display_result = display_result.slice(0, -1);
      setresult("-");
      return;
    }
    setresult("-");
  }
};
document.getElementById("plus").onclick = function () {
  if (
    display_result[display_result.length - 1] !== "+" &&
    display_result !== ""
  ) {
    if (
      display_result[display_result.length - 1] === "/" ||
      display_result[display_result.length - 1] === "*" ||
      display_result[display_result.length - 1] === "-"
    ) {
      display_result = display_result.slice(0, -1);
      setresult("+");
      return;
    }
    setresult("+");
  }
};

document.getElementById("c").onclick = function () {
  display_result = "";
  document.getElementById("label").value = display_result;
  document.getElementById("label2").innerHTML = display_result;
};
document.getElementById("del").onclick = function () {
  display_result = display_result.slice(0, -1);
  document.getElementById("label").value = display_result;
};
document.getElementById("equal").onclick = function () {
  document.getElementById("label2").innerHTML = String(eval(display_result));
};
