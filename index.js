const textBox=document.getElementById("textBox");
const toFaranhait=document.getElementById("toFaranhait");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
var temp;
function convert(){
    if(toFaranhait.checked){
        temp=Number(textBox.value);
        temp= temp*9/5 + 32;
        result.textContent=temp.toFixed(2) + "°F";
    }
    else if(toCelsius.checked){
        temp=Number(textBox.value)
        temp=5/9*(temp - 32);
        result.textContent=temp.toFixed(2) + "°C";
    }
    else{
       result.textContent="select a unit";
    }
}
