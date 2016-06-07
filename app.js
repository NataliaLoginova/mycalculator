/**
 * Created by Natalia_Loginova1 on 01-Jun-16.
 */

function main() {

    var show = document.createElement("div");

    document.body.appendChild(show);
    show.id = "show";

    var input = document.createElement("input");

    document.body.appendChild(input);

    input.id = "inp";

    var container = document.createElement("div");
    container.className = "container";

    document.body.appendChild(container);

    function createButton(i) {

        var element = document.createElement("button");
        element.innerHTML = i;
        element.innerHTML = i;
        element.className = "btn";
        element.id = "number" + i;

        container.appendChild(element);

        var idNumb = "number" + i;

        element.onclick = function() {

            document.getElementById("inp").value += i;

        }
    }

    for(var i = 0; i < 10; i++) {

        var btn = new createButton(i);

    }


    var plus = document.createElement("button");
    plus.innerHTML = '+';

    plus.className = "btn";
    plus.id = "plus";

    container.appendChild(plus);

    document.getElementById("plus").onclick = function Plus() {
        document.getElementById("inp").value += "+";
    };

    var minus = document.createElement("button");
    minus.innerHTML = '-';
    minus.className = "btn";
    minus.id = "minus";
    container.appendChild(minus);

    document.getElementById("minus").onclick = function Minus() {
        document.getElementById("inp").value += "-";
    };

    var clear = document.createElement("button");
    clear.innerHTML = 'c';
    clear.className = "btn";
    clear.id = "clear";
    container.appendChild(clear);

    document.getElementById("clear").onclick = function Clear() {
        document.getElementById("inp").value = "";
        document.getElementById("show").innerHTML = "";
    };

    var equally = document.createElement("button");
    equally.innerHTML = '=';
    equally.className = "btn";
    equally.id = "equal";
    container.appendChild(equally);


    document.getElementById("equal").onclick = function Equal() {

        document.getElementById("show").innerHTML = document.getElementById("inp").value + "=";
        var str = document.getElementById("inp").value;
        var arr = str.split("+");
        var arrRes = [0];
        var res = 0;
        var k = 0;
        for(var i = 0; i < arr.length; i++) {

            arr[i] = arr[i].split("-");

            if(arr[i].length > 1) {
                arrRes[k] = arr[i][0];
                k++;
                for(var j = 1; j < arr[i].length; j++) {
                    arrRes[k] = "-" + arr[i][j];
                    k++;
                }
            } else {
                for(var j = 0; j < arr[i].length; j++) {
                    arrRes[k] = arr[i];
                    k++;
                }
            }
        }

        for(var h = 0; h < arrRes.length; h++) {
            res += Number(arrRes[h]);
        }

        document.getElementById("inp").value = res;
    };
}

function c(i) {

    var el = document.createElement("button");

    document.body.appendChild(el);

    el.innerHTML = i;

    el.onclick = function() {

        alert(i);

    }


}

for(var i = 0; i < 10; i++) {

    var g = new c(i);


}

