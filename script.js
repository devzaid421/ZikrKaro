const totalZikr = document.querySelector(".totalzikr");
const addAll = document.querySelector(".all");
const addAlh = document.querySelector(".alh");
const addSub = document.querySelector(".sub");
const reset = document.querySelector(".reset");
let count = 0;
let countt = 0;
let counttt = 0;

function updateTotal() {
  totalZikr.innerHTML = count + countt + counttt;
}
function count1() {
  count++;
  document.querySelector(".zikr1").innerHTML = count;
  updateTotal();
}
function zikrOne() {
  count + 1;
  count1();
}
function count2() {
  countt++;
  document.querySelector(".zikr2").innerHTML = countt;
  updateTotal();
}
function zikrTwo() {
  countt + 1;
  count2();
}
function count3() {
  counttt++;
  document.querySelector(".zikr3").innerHTML = counttt;
  updateTotal();
}
function zikrThree() {
  counttt + 1;
  count3();
}
function resetAll() {
  totalZikr.innerHTML = 0;
  document.querySelector(".zikr1").innerHTML = 0;
  document.querySelector(".zikr2").innerHTML = 0;
  document.querySelector(".zikr3").innerHTML = 0;
}
reset.addEventListener("click", () => {
  resetAll();
});


