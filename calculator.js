const pera = document.getElementById("display");

let cleardisplay=()=>{
pera.textContent="";
}
let del=()=>{
    pera.textContent=pera.textContent.slice(0,-1);
}
let appendToDisplay=(input)=>{
    pera.textContent+=input;
}

let callculate = () => {
    try {
        // Convert percentage to division by 100
        let expression = pera.textContent.replace(/%/g, '/100');
        pera.textContent = eval(expression);
    } catch (error) {
        pera.textContent = "Error";
    }

}