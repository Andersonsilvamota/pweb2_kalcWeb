function insert(num)
    {
        var numero = document.getElementById('screen').innerHTML;
        document.getElementById('screen').innerHTML = numero + num;
    }
function clean()
    {
        var resultado = document.getElementById('screen').innerHTML;
        document.getElementById('screen').innerHTML = resultado.substring(0, resultado.length -1);
    }
function calcular()
    {
        var resultado = document.getElementById('screen').innerHTML;
        document.getElementById('screen').innerHTML = eval(resultado);
    }