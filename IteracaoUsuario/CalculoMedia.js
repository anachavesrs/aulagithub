function calcular() {
      var num1=document.getElementById("num1").value;
      var num2=document.getElementById("num2").value;
      var num3=document.getElementById("num3").value;
      alert('numero 1 é ' + num1);
      alert('numero 2 é ' + num2);
      alert('numero 3 é ' + num3);
      var soma = parseInt(num1) + parseInt(num2) + parseInt(num3);
      alert('a soma é ' + soma);
      var media = soma / 3;
      alert('A media é ' + media);
 
    }