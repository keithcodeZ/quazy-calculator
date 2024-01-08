
// display values
function display(val){
    document.getElementById("output").value += val
}

function solve(){
    let x = document.getElementById("output").value
    console.log(x)
    let y = eval(x)
    console.log(y)
    document.getElementById("output").value = y
}

function clr(){
    console.log('nagclear ba dito???')
    document.getElementById("output").value = ""
}