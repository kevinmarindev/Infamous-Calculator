//A simple calculator that has
//two inputs and returns the result of +,-,/,* somewhere in the DOM


//two inputs get their values get
// on button click display all 4 values in the
//paragraph (or multiple paragrahs)


document.querySelector("#add").addEventListener("click",  runninSum)
document.querySelector("#substract").addEventListener("click",  runninSubs)
document.querySelector("#divide").addEventListener("click",  runninDiv)
document.querySelector("#multiply").addEventListener("click",  runninMul)

function runninSum(inputf, inputs){
  inputf = document.querySelector("#inputone").value;
  inputs = document.querySelector("#inputtwo").value;
  let theAdd = Number(inputf) + Number(inputs)
  document.querySelector("#putItHere").innerText = theAdd
}

function runninSubs(inputa, inputb){
  inputa = document.querySelector("#inputone").value;
  inputb = document.querySelector("#inputtwo").value;
  let theAdd = Number(inputa) - Number(inputb)
  document.querySelector("#putItHere").innerText = theAdd
}

function runninDiv(inputc, inputd){
  inputc = document.querySelector("#inputone").value;
  inputd = document.querySelector("#inputtwo").value;
  let theAdd = Number(inputc) / Number(inputd)
  document.querySelector("#putItHere").innerText = theAdd
}

function runninMul(inpute, inputh){
  inpute = document.querySelector("#inputone").value;
  inputh = document.querySelector("#inputtwo").value;
  let theAdd = Number(inpute) * Number(inputh)
  document.querySelector("#putItHere").innerText = theAdd
}
