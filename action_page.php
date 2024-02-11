<?php

echo "hello!";
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("hamishhill1909@gmail.com","My subject",$msg);

<?php					
if($_SESSION['varname'] !=  undefined ){
        $sent = $_SESSION['varname'];
        if(!$sent){
            echo "form no";
        }else{
            echo "form ye";
        }
}	

?>
?> 

//echo htmlspecialchars($_POST["name"]);

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.example.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "hamishhill1909@egmail.com";
$mail->Password = "password";

$mail->setFrom($email, $name);
$mail->addAddress("dave@example.com", "Dave");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");

?>