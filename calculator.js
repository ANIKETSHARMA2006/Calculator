const pera = document.getElementById("display");
let res=false;
let ret;
let cleardisplay=()=>{
pera.textContent="";
}
let del=()=>{
    pera.textContent=pera.textContent.slice(0,-1);
}
let appendToDisplay=(input)=>{
    if(input=='+'|| input=='-' || input=='%' || input=='/' || input=='*'){
        ret=pera.textContent+=input;
        res=false
    }
    else if(res===true){
        pera.textContent="";
        ret=pera.textContent+=input;
        res=false;
    }
    else{
        pera.textContent+=input;
    }
}

let callculate = () => {
    try {
        // Convert percentage to division by 100
        let expression = pera.textContent.replace(/%/g, '/100');
        pera.textContent = eval(expression);
        res=true;
        ret="";
    } catch (error) {
        pera.textContent = "Error";
        setTimeout(()=>{
            pera.textContent=ret;
        },1000)
    }

}
