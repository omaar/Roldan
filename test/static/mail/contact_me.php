<?php
//include 'library.php'; // include the library file
include "classes/class.phpmailer.php"; // include the class name
   $name       = htmlentities($_POST['name']);
   $email      = htmlentities($_POST['email']);
   $phone    = htmlentities($_POST['phone']);
   $message    = htmlentities($_POST['message']);
   $mail = new PHPMailer;
   $mail->IsSMTP(); 
   $mail->Host = "mail.exhibidoresroldan.com.mx";
   $mail->Port = 587;
   $mail->SMTPAuth = true;
   $mail->Username = "ventas@exhibidoresroldan.com.mx";
   $mail->Password = "exhibidores.mx65";
   $mail->SetFrom("ventas@exhibidoresroldan.com.mx","WebSite - Exhibidores Roldan");
   $mail->Subject = "Nuevo mensaje de: $name";
   $mail->AddAddress("ventas@exhibidoresroldan.com.mx");
   $mail->MsgHTML("<h1>Este es un nuevo mensaje desde el sitio web de Exhibidores Roldan.</h1>\n
                  \n"."<h2>Aqui estan los detalles:</h2>:\n
                  \nNombre: $name\n
                  \nEmail: $email\n
                  \nTelefono: $phone\n
                  \nMensaje:\n$message");
   $send = $mail->Send();
   if($send){ echo 1; }
   else{ echo 0; }
?>
