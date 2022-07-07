<?php
class Conexao
{
    public static function Conectar()
    {
        define('db_local', 'localhost');
        define('db_name', 'usuarios_db');
        define('db_user', 'root');
        define('db_password', 'Db1234');
        $encoding = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        try {
            $conexao = new PDO("mysql:host=" . db_local . "; dbname=" . db_name, db_user, db_password, $encoding);
            return $conexao;
        } catch (Exception $e) {
            die("Error, conexão recusada!: " . $e->getMessage());
        }
    }
}
