function mostrar()
{
  var pareja1 = prompt("Ingrese su nombre");
  var pareja2 = prompt(" y el de su pareja");
  var peso1 = parseInt(prompt("Ingrese su peso"));
  var peso2 = parseInt(prompt("y el de su pareja"));
  var suma = peso1 + peso2;
  var promedio = (peso1 + peso2)/2;
  alert("ustedes se llaman " + pareja1 + " y " + pareja2 + " pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + suma + " git kilos y el promedio de peso " + promedio);
}
