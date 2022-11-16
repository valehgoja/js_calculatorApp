let input = document.querySelector("input");
let btnNum = document.querySelectorAll(".btnNum");
let btnEqual = document.querySelector(".btnEqual");
let btnSum = document.querySelector(".btnSum");
let btnMinus = document.querySelector(".btnMinus");
let btnMultiple = document.querySelector(".btnMultiple");
let btnDivide = document.querySelector(".btnDivide");
let btnC = document.querySelector(".btnC");
let btnDot = document.querySelector(".btnDot");

let num1 = null;
let num2 = null;
let sum = null;
let subtraction = null;
let multiple = null;
let divide = null;
let click = 0;
let click2 = 0;
let a = 0;
let b = 0;
let d = null;
let operator = null;
btnNum.forEach(function number1(items) {
  items.addEventListener("click", function (e) {
    if (d == null) {
      for (let i = 0; i < 11; i++) {
        if (e.target.textContent == i ) {
          num1 = i;
        }
      }
      if (input.value.includes(".")) {
        input.value += num1;
        num1 = parseFloat(input.value);
        a = num1;
        return;
      }
      if (click >= 0) {
        a = a * 10 + num1;
        input.value = a;
        num1=a;
      }
  

      click++;
 
    }


    
  });
  return num1;
});
a = num1 ;

btnNum.forEach(function number2(items) {
  items.addEventListener("click", function (e) {
    if (d != null) {
      for (let i = 0; i < 10; i++) {
        if (e.target.textContent == i ) {
          num2 = i;
        }
      }

      if (input.value.includes(".")) {
        input.value += num2;
        num2 = parseFloat(input.value);
        
        return;
      }

      if (click2 >= 0) {
        b = b * 10 + num2;
        input.value = b;
        num2=b;
      }
   
      click2++;

    }

  });
  return num2;
});
b = num2;

btnSum.addEventListener("click", function () {
  operator = "+";
  d = "a";      
  input.value = "";     

});

btnMinus.addEventListener("click", function () {
  operator = "-";
  d = "a";
  input.value = "";
});
btnMultiple.addEventListener("click", function () {
  operator = "×";
  d = "a";
  input.value = "";
});
btnDivide.addEventListener("click", function () {
  operator = "÷";
  d = "a";
  input.value = "";
});
btnC.addEventListener("click", function () {
  location.reload();
});
btnDot.addEventListener("click",function(){
  input.value +=".";
})

let final = 0;
btnEqual.addEventListener("click", function () {
  if (operator == "+") {
    if (sum == null) {
      sum = a + b;
      final = sum;
      input.value = final;
    } else {
      sum = sum + b;
      final = sum;
      input.value = final;
    }
  } else if (operator == "-") {
    if (subtraction == null) {
      subtraction = a - b;
      final = subtraction;
      input.value = final;
    } else {
      subtraction = subtraction - b;
      final = subtraction;
      input.value = final;
    }
  } else if (operator == "×") {
    if (multiple == null) {
      multiple = a * b;
      input.value = multiple;
    } else {
      multiple = multiple * b;
      input.value = multiple;
    }
  } else if (operator == "÷") {
    if (divide == null) {
      divide = a / b;
      input.value = divide;
    } else {
      divide = divide / b;
      input.value = divide;
    }
  }
});
