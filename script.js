
document.getElementById('submitButton').addEventListener('click', function() {
   
    var choix_nombre = parseInt(document.getElementById('choix_nombre').value);

   
    if (isNaN(choix_nombre)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }


    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";


    for (var i = 1; i <= 10; i++) {
        resultDiv.innerHTML += '<p>' + choix_nombre + ' * ' + i + ' = ' + (choix_nombre * i) + '</p>';
    }
});