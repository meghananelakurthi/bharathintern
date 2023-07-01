let celsius=document.getElementById('celsius');
let fahreinheit=document.getElementById('fahreinheit');


celsius.oninput= () => {
    let output=(parseFloat(celsius.value)*9)/5+32;
    fahreinheit.value=parseFloat(output.toFixed(2));

};
fahreinheit.oninput= () => {
    let output=((parseFloat(fahreinheit.value)-32)*5)/9;
    celsius.value=parseFloat(output.toFixed(2));

};