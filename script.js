var last_action, last_value

function calcular(tipo, valor){
    var result = document.getElementById('result')
    if (tipo === 'acao'){
        if(valor === 'c'){
            result.value = null
        }
        else if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.'){
            if(last_action === '='){
                calcular('acao', 'c')
                last_action = null
                result.value = last_value
            }
            result.value += valor
        }
        else if(valor === '=') {
            var campo_value = result.value
            var valor_resultado = eval(result.value)
            last_value = valor_resultado
            campo_value + ' = ' + valor_resultado
            result.value = campo_value + ' = ' + valor_resultado
            last_action = '='
            console.log(last_action)
        }   


    }else if (tipo === 'valor'){
        if(last_action === '='){
            calcular('acao', 'c')
            last_action = null
            result.value = last_value
        }
        result.value += valor
    }
}