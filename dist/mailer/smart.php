<?php 

// Handling data in JSON format on the server-side using PHP
header("Content-Type: application/json");
// build a PHP variable from JSON sent using POST method
$v = json_decode(stripslashes(file_get_contents("php://input")));
echo json_encode($v);

$name = $v->name;;
$email = $v->email;
$message = $v->message;

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mailtoakmanan@gmail.com';                 // Our login
$mail->Password = 'mzkzofsbrextsfog';                           // Our password for email
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('mailtoakmanan@gmail.com', 'Your portfolio');   // From whom a letter
$mail->addAddress('mail2radimir@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'A new message from your site';
$mail->Body    = '
		A visiter have sent his contact information<br> 
	Name: ' . $name . ' <br>
	E-mail: ' . $email . ' <br>
	Message: ' . $message . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>