const inputvalueElement = document.getElementById('inputvalue');
const clearbutton = document.getElementById('cbutton');
const submitbutton = document.getElementById('button-addon2');

let valuearray = [];

submitbutton.addEventListener('click',()=>{
    const inputvalue = inputvalueElement.value.trim();

    if(inputvalue){
        valuearray.push(inputvalue);
        console.log(valuearray);
        inputvalue.value = '';  
    }
});



clearbutton.addEventListener('click', () => {
    inputvalue.value = '';
});

