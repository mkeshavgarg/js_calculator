var str = "";
function myCal(a) {
    str = str + a;
    document.getElementById("display").innerHTML = (str);
}

function myOp(op) {
    switch (op) {
        case 'add':
        {
            str = str + '+';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'sub':
        {
            str = str + '-';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'div':
        {
            str = str + '/';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'mult':
        {
            str = str + '*';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'mod':
        {
            str = str + '%';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'brac1':
        {
            str = str + '(';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'brac2':
        {
            str = str + ')';
            document.getElementById("display").innerHTML = (str);
            break;
        }
        case 'dec':
        {
            str = str + '.';
            document.getElementById("display").innerHTML = (str);
            break;
        }

        case 'equal':
        {

            try {
                document.getElementById("display").innerHTML = eval(str);
                str = "";
                break;
            }
            catch (err) {
                document.getElementById("display").innerHTML = "system error";
                break;
            }
        }
        case 'clear':
        {
            str = "";
            document.getElementById("display").innerHTML = '';
            break;
        }
        case 'remove':
        {
            str = str.substring(0, str.length - 1);
            document.getElementById("display").innerHTML = str;
        }
    }
}

