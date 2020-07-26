let pinput;
let oldform;
let n_list = []
let linput;

function init(){
    oldform = false;
    pinput = document.getElementById('input');
    linput = document.getElementById('linput');

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
    
    if (p<0) {
        document.getElementById('out').innerText = 'so schlecht ist nicht mal Lena';
    }
    else if (p>15) {
        document.getElementById('out').innerText = 'das schafft nicht mal David';
    }
    else {
        if (oldform) {
            n = Math.round(((17-p)/3)*100)/100;
        } else {
            n = Math.round(((18-p)/3)*100)/100;
        }
        console.log(n);
        document.getElementById('out').innerText = n;
    }
    
};

function changed(checkbox){
    if (checkbox.checked == true) {
    oldform = true;
    document.getElementById("minuend").innerText = "17";
    document.getElementById("ex15").innerText = "0,67";
    document.getElementById("ex0").innerText = "5,67";
    } else {
    oldform = false;
    document.getElementById("minuend").innerText = "18";
    document.getElementById("ex15").innerText = "1,0";
    document.getElementById("ex0").innerText = "6,0";
    }
    calculate();
}

function add(val){
    n_list.push(parseInt(val));
    console.log(n_list);
    let sum = n_list.reduce((previous, current) => current += previous);
    console.log(sum);
    let avg = sum / n_list.length;
    document.getElementById('listout').innerText = Math.round((avg)*100)/100;
}

function reset(){
    n_list = []
    document.getElementById('listout').innerText = '';
}
