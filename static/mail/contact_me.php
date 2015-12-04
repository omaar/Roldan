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
   $mail->SetFrom("ventas@exhibidoresroldan.com.mx","Nuevo Mensaje: $name");
   $mail->Subject = "Nuevo mensaje de: $name";
   $mail->AddAddress("ventas@exhibidoresroldan.com.mx");
   $mail->addReplyTo($email, $name);
   $mail->MsgHTML("<h1>Exhibidores Roldan - Mensaje</h1>
                  <h2>Aqui estan los detalles:</h2>
                  <h5>Nombre: <strong> $name</strong></h5>
                  <p>Email: <strong> $email</strong></p>
                  <p>Telefono: <strong> $phone</strong></p>
                  <p>Mensaje: <strong> $message </strong></p>");
   $send = $mail->Send();
   if($send){ echo 1; }
   else{ echo 0; }
?>
