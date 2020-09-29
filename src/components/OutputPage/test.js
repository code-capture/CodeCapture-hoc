function Calci() {
    console.log("Hello Class")
    console.log("We will print a square with side of length 5")
    var option
    var pattern
    option = prompt("Which character would you like to print?\n1. *\n2. X\n3. +\nEnter option number:");
    switch (parseInt(option)) {
    case 1: pattern = '*'; break;
    case 2: pattern = 'X'; break;
    case 3: pattern = '+'; break;
    default: pattern = '*'; break;
    }
    let i,j;
    for (i = 1; i <= 5; i++)
    {
        let side = ""
        for (j = 1; j <= 5; j++)
        {
        side = pattern +side
        }
        console.log(side);
        }
    }
   
    Calci();