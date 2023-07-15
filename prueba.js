
function functionCallBack(mensaje){
  console.log(mensaje)
}


function sumar(num1, num2, functionCallBack){


    let res = num1 + num2;

    functionCallBack(res)


}


sumar(5,7)