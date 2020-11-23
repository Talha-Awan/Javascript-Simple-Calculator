let getVal;
let string = 0;
let result;
// let isOperator = false;
function allbtnValues(val) {
    document.getElementById("inputfield").value += val;
}

function test() {
    getVal = document.getElementById("inputfield").value;
    console.log(getVal);
    // Input expression splitted into array
    display = getVal.split("");
    console.log(display);
    // Temp answer stored here
    let tempcalcanswer;
    //parsed equation stored here
    let equation = new Array();
    //variable to store all individual numbers and parse them into one
    let tempstring = "";
    for (i = 0; i < display.length; i++) {
        //conditon to parse equation and check for math operator
        if (
            display[i] === "+" ||
            display[i] === "-" ||
            display[i] === "*" ||
            display[i] === "/"
        ) {
            // Validation
            // if (display[i+1] === "+" || display[i+1] === "-" || display[i+1] === "*" || display[i+1] === "/"){
            //     alert("Please Try Again");
            //     document.getElementById("inputfield").innerHTML = "";
            //     break;
            // } else { }
                equation.push(parseFloat(tempstring));
                equation.push(display[i]);
                //Reset tempstring for new number
                tempstring = "";
        } else {
            //Keep collecting numbers until a complete number is finished
            tempstring += display[i];
		}
    }
    //Saves the last remaining number in the equation
    if (tempstring != "") {
        equation.push(parseFloat(tempstring));
    }
    console.log(equation);

    //Solving our equation, run until only our answer remains in the equation
    while (equation.length != 1) {
        for (i = 0; i < equation.length; i++) {
            //check equation for a math operator, solve it and replace the solved 2 numbers and operator
            if (equation[i] === "+") {
                tempcalcanswer = equation[i - 1] + equation[i + 1];
                equation.shift(); //Remove an item from the beginning of the equation i.e number 1.
                equation.shift(); //Remove an item from the beginning of the equation i.e operator.
                equation.shift(); //Remove an item from the beginning of the equation i.e number 2.
                equation.unshift(tempcalcanswer); //Adds an items to the equation i.e answer.
            } else if (equation[i] === "-") {
                tempcalcanswer = equation[i - 1] - equation[i + 1];
                equation.shift();
                equation.shift();
                equation.shift();
                equation.unshift(tempcalcanswer);
            } else if (equation[i] === "*") {
                tempcalcanswer = equation[i - 1] * equation[i + 1];
                equation.shift();
                equation.shift();
                equation.shift();
                equation.unshift(tempcalcanswer);
            } else if (equation[i] === "/") {
                tempcalcanswer = equation[i - 1] / equation[i + 1];
                equation.shift();
                equation.shift();
                equation.shift();
                equation.unshift(tempcalcanswer);
            }
        }
    }
    console.log(tempcalcanswer);
    console.log(equation);
    document.getElementById("inputfield").value = equation;
    //console.log(equation);
}

// Function to completely clear Input Field
function allClear() {
    document.getElementById("inputfield").value = "";
}

// Function to clear the last element in the input
function previousClear() {
    getVal = document.getElementById("inputfield").value;
    document.getElementById("inputfield").value = getVal.slice(0, -1);
}

// Function to check Square Root
function sqr_sol() {
    getVal = document.getElementById("inputfield").value;
    for (let i = 0; i < getVal.length; i++) {
        if (
            getVal.charAt(i) === "" ||
            getVal.charAt(i) === "+" ||
            getVal.charAt(i) === "-" ||
            getVal.charAt(i) === "*" ||
            getVal.charAt(i) === "/" ||
            getVal.charAt(i) === "."
        ) {
            // alert("Please Try again!");
            document.getElementById("inputfield").value = "";
        } else {
            result = Math.sqrt(getVal);
            document.getElementById("inputfield").value = result;
        }
    }
}

// Function to calculate percentage
function percentage() {
    getVal = document.getElementById("inputfield").value;
    console.log(getVal);
    if (
        document.getElementById("inputfield").value === "" ||
        document.getElementById("inputfield").value === "+" ||
        document.getElementById("inputfield").value === "-" ||
        document.getElementById("inputfield").value === "*" ||
        document.getElementById("inputfield").value === "/" ||
        document.getElementById("inputfield").value === "%" ||
        document.getElementById("inputfield").value === "."
    ) {
        alert("Please Try again!");
        document.getElementById("inputfield").value = "";
    } else {
        document.getElementById("inputfield").value = "";
        totalVal = parseInt(
            prompt(
                "Please enter the total out of which the percentage is to be calculated!"
            )
        );
        while (!totalVal) {
            alert("Please try again!");
            totalVal = parseInt(
                prompt(
                    "Please enter the total out of which the percentage is to be calculated!"
                )
            );
        }
        // console.log(totalVal);
        result = (getVal / totalVal) * 100;
        // console.log(result);
        document.getElementById("inputfield").value = result;
    }
}
