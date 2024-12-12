<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Respostas</title>
</head>
<body>
    <?php
    $nome = $_POST['Nome'];
    $foto = $_POST['Foto'];
    $id = $_POST['Id'];
    $nascimento = $_POST['Nascimento'];
    $genero = $_POST['Genero'];
    $cor = $_POST['Cor'];
    $objetivo = $_POST['Objetivo'];
    $telefone = $_POST['Telefone'];
    $email = $_POST['Email'];
    ?>

    <h2>Foto: </h2>
    <?php echo $foto;?>

    <br><br><br>
    <h2>Número de identifição: </h2>
    <?php echo $id;?>

    <br><br><br>
    <h2>Nome: </h2>
    <?php echo $nome;?>


    <br><br><br>
    <h2>Data de Nascimento: </h2>
    <?php echo $nascimento;?>

    <br><br><br>
    <h2>Gênero: </h2>
    <?php echo $genero;?>

    <br><br><br>
    <h2>Cor favorita: </h2>
    <?php echo $cor;?>

    <br><br><br>
    <h2>Objetivos com o club: </h2>
    <?php echo $objetivo;?>

    <br><br><br>
    <h2>Telefone: </h2>
    <?php echo $telefone;?>

    <br><br><br>
    <h2>Nome: </h2>
    <?php echo $email;?>
</body>
</html>

