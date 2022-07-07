<?php
include_once '../process/conexao.php';
$conexao = new Conexao();
$conexao = $conexao->Conectar();

$option_type = (isset($_POST['option_type'])) ? $_POST['option_type'] : '';
$user_userid = (isset($_POST['user_userid'])) ? $_POST['user_userid'] : '';
$user_name = (isset($_POST['user_name'])) ? $_POST['user_name'] : '';
$user_firstname = (isset($_POST['user_firstname'])) ? $_POST['user_firstname'] : '';
$user_lastname = (isset($_POST['user_lastname'])) ? $_POST['user_lastname'] : '';
$user_genre = (isset($_POST['user_genre'])) ? $_POST['user_genre'] : '';
$user_password = (isset($_POST['user_password'])) ? $_POST['user_password'] : '';
$user_status = (isset($_POST['user_status'])) ? $_POST['user_status'] : '';

switch ($option_type) {
    case 1:
        $consulta = "INSERT INTO users (user_name, user_firstname, user_lastname, user_genre, user_password, user_status) VALUES ('$user_name', '$user_firstname', '$user_firstname', '$user_genre', '$user_password', '$user_status') ";
        var_dump($consulta);
        $resultado = $conexao->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM users ORDER BY user_userid DESC LIMIT 1";
        $resultado = $conexao->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

        // case 2:
        //     $consulta = "UPDATE users SET user_name='$user_name', user_firstname='$user_firstname', user_lastname='$user_lastname', user_genre='$user_genre', user_password='$user_password', user_status='$user_status' WHERE user_userid='$user_userid' ";
        //     $resultado = $conexao->prepare($consulta);
        //     $resultado->execute();

        //     $consulta = "SELECT * FROM users WHERE user_userid='$user_userid' ";
        //     $resultado = $conexao->prepare($consulta);
        //     $resultado->execute();
        //     $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        //     break;
        // $conexao = null;
        // case 3:
        //     $consulta = "DELETE FROM users WHERE user_userid='$user_userid' ";
        //     $resultado = $conexao->prepare($consulta);
        //     $resultado->execute();
        // $conexao = null;
        //     break;

        // case 4:
        //     $consulta = "SELECT * FROM users";
        //     $resultado = $conexao->prepare($consulta);
        //     $resultado->execute();
        //     $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        //     break;
}

print json_encode($data);
$conexao = null;
