// ---- switch values -------

let button = document.getElementById('switch');

let toSwitch = function (){
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let firstValue = input1.value;
    let secondValue = input2.value;
    input1.value = secondValue;
    input2.value = firstValue;

}

button.addEventListener('click', toSwitch);