let num1 = prompt('Enter first number: ')
let num2= prompt('Enter second number: ')
let operators = prompt('Enter your favorite operator, Your options are: (+, -, *, /)')
if ((operators == '+') && !isNaN(num1) && !isNaN(num2)){
    alert(`Your returned output: ${Number(num1) + Number(num2)} : )`)
}
else if((operators == '-') && !isNaN(num1) && !isNaN(num2)){
    alert(`Your returned output: ${Number(num1) - Number(num2)} : )`)
}
else if((operators == '*') && !isNaN(num1) && !isNaN(num2)){
    alert(`Your returned output: ${Number(num1) * Number(num2)} : )`)
}
else if((operators == '/') && !isNaN(num1) && !isNaN(num2)){
    alert(`Your returned output: ${Number(num1) / Number(num2)} : )`)
}
else{
    alert('Sorry! This is out of my knowledge: (')
}