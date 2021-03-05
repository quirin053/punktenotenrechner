let pinput;
let altform;
let n_list = []
let linput;

function init(){
    altform = false;
    pinput = document.getElementById('input');
    linput = document.getElementById('linput');
    plist = document.getElementById('plist');

    pinput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("cbutton").click();
        }
    });

    linput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("lbutton").click();
        }
    });
}

function calculate(){
    console.log('pressed');
    p = pinput.value;
    console.log(p);
    
    if (validate(p, true)) {
        if (altform) {
            n = Math.round(((18-p)/3)*100)/100;
        } else {
            n = Math.round(((17-p)/3)*100)/100;
        }
        console.log(n);
        document.getElementById('out').innerText = n;
    }
    document.getElementById('input').focus();
};

function changed(checkbox){
    if (checkbox.checked == true) {
        altform = true;
        document.getElementById("minuend").innerText = "18";
        document.getElementById("ex15").innerText = "1,0";
        document.getElementById("ex0").innerText = "6,0";
        
    } else {
        altform = false;
        document.getElementById("minuend").innerText = "17";
        document.getElementById("ex15").innerText = "0,67";
        document.getElementById("ex0").innerText = "5,67";
    }
    calculate();
}

function add(val){
    if (validate(val)) {
        n_list.push(parseInt(val));
        console.log(n_list);
        let sum = n_list.reduce((previous, current) => current += previous);
        console.log(sum);
        let avg = sum / n_list.length;
        document.getElementById('listout').innerText = Math.round((avg)*100)/100;
        let elem = document.createElement("LI");
        elem.innerHTML = val;
        plist.appendChild(elem);
    }
    document.getElementById('linput').focus();
}

function reset(){
    n_list = []
    document.getElementById('listout').innerText = '';
    plist.innerHTML = '';
}

function validate(val, j = false){
    if (val<0) {
        if (j) {
            document.getElementById('out').innerText = 'so schlecht ist nicht mal Lena';
        }
        return false;
    }
    else if (val>15) {
        if (j) {
            document.getElementById('out').innerText = 'das schafft nicht mal David';
        }
        return false;
    }
    else {
        return true;
    }
}

function recalc() {
    pinput.value = document.getElementById('listout').innerText;
    calculate();
}
