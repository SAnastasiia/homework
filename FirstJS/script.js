let button = document.querySelector('.task2');
        button.onclick = function() {
           alert('Кнопка нажата!');
          };

function getInputValue() {
    let inputValue = document.querySelector(".textInput").value;  
    alert(inputValue);
    }



function squareOfNumber() {
    let inputValue = document.querySelector("#task4").value;
        if (!isNaN(inputValue)){
            alert(inputValue*inputValue)
        }else {
            alert("isn't a number!")
        }
    }

function changeText() {
    let newText = document.querySelector(".task5");
    newText.textContent = "I have changed!";
    }

function changeColor (){
    let task6 = document.querySelector('.task6');
    task6.classList.add('change-color'); 

}

function changeValue() {
    let [input1, input2] = [
      document.getElementById('input1'),
      document.getElementById('input2')
    ];
    [input1.value, input2.value] = [input2.value, input1.value];
  }

function unblock () {
    let elem = document.querySelector('#task8');
     elem.disabled = false;
}

function block () {
    let elem = document.querySelector('#task8');
    elem.disabled = true;
}

document.getElementById("task9").onmouseout = function() {
    alert('hey!')
};


function calculate (a, s, b) {
    switch(s){
        case '+' :
            return a+b;
        
        case '-' :
            return a-b;
        
        case '*':
            return a*b;
            
        case '/':
            return a/b;

    }
}

function main () {
    const number1 = Number(document.getElementById('input10-1').value);
    const s = document.getElementById('operator').value;;
    const number2 = Number(document.getElementById('input10-2').value);
    const result = calculate (number1, s, number2);
    document.getElementById('result').value = result;
}


