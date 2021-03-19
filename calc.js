let pinput;
let n_list = []
let linput;

function init(){
    altform = false;
    pinput = document.getElementById('pinput');
    ninput = document.getElementById('ninput');
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

function calculate(direction){
    console.log("triggered")
    console.log(direction)

    x = ((direction==="pn") ? pinput.value : ninput.value);
    if (x > 5.67 && direction==="np") {
        x = 5.67
    }

    if (x) {
        if (validate(x, direction)) {
            pinput.setAttribute('class', '');
            ninput.setAttribute('class', '');
            if (direction==="pn") {
                n = Math.round(((17-x)/3)*100)/100;
                ninput.value = n;
                pinput.focus();
            } else {
                p = Math.round(17-(x*3));
                pinput.value = p;
                ninput.focus();
            }
        } else {
            pinput.setAttribute('class', 'justwrong');
            ninput.setAttribute('class', 'justwrong');
        }
    } else {
        pinput.value = '';
        ninput.value = '';
        pinput.setAttribute('class', '');
        ninput.setAttribute('class', '');
    }

};


function add(val){
    if (validate(val)) {
        document.getElementById('linput').setAttribute('class', '');
        n_list.push(parseInt(val));
        // console.log(n_list);
        let sum = n_list.reduce((previous, current) => current += previous);
        // console.log(sum);
        let avg = sum / n_list.length;
        document.getElementById('listout').innerText = Math.round((avg)*100)/100;
        let elem = document.createElement("LI");
        elem.innerHTML = val;
        plist.appendChild(elem);
    } else {
        document.getElementById('linput').setAttribute('class', 'justwrong');
    }
    document.getElementById('linput').focus();
}

function reset(){
    n_list = []
    document.getElementById('listout').innerText = '';
    plist.innerHTML = '';
}

function validate(val, direction){
    if (direction==="pn") {
        if (val < 0) {
            return false;
        }
        else if (val>15) {
            return false;
        }
        else {
            return true;
        }
    } else {
        console.log("npval")
        if (val < 0.67) {
            console.log("npvalfalse")
            return false;
        }
        else {
            return true;
        }
    }
    
}

function recalc() {
    pinput.value = document.getElementById('listout').innerText;
    calculate();
}
