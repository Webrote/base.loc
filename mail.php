<?php 

error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);

require 'mailer/class.phpmailer.php';
require 'mailer/class.smtp.php';

$config = array(
	'sendTo' =>	array('webrote@yandex.ru'),
	'from'	 =>	array(
		'email' => 'webrote@mail.ru',
		'title' => 'panorama.ru'
	),
	'smtp'	 => array(
		'host' 		=> 'smtp.mail.ru',
		'debug' 	=> true,
		'auth'		=> true,
		'port' 		=> 465,
		'secure' 	=> 'ssl',
		'username' 	=> 'webrote@mail.ru',
		'password' 	=> 'AON3iBol0Y'
	)
);

if (isset($_POST['name']))	 {$name  = htmlspecialchars(trim($_POST['name']));} else {$name = 'отсутствует';}
if (isset($_POST['phone']))	 {$phone = htmlspecialchars(trim($_POST['phone']));} else {$phone = 'отсутствует';}
if (isset($_POST['email']))	 {$email = htmlspecialchars(trim($_POST['email']));} else {$email = 'отсутствует';}
if (isset($_POST['message']))	 {$message = htmlspecialchars(trim($_POST['message']));} else {$message = 'отсутствует';}
if (isset($_POST['title']))	 {$title = htmlspecialchars(trim($_POST['title']));} else {$title = 'отсутствует';}

try 
{
	$mail = new \PHPMailer (true);
	$mail->IsSMTP();
	$mail->Host 		= $config['smtp']['host'];
	$mail->SMTPAuth 	= $config['smtp']['auth'];
	$mail->SMTPSecure 	= $config['smtp']['secure'];
	$mail->Port 		= $config['smtp']['port'];
	$mail->Username 	= $config['smtp']['username'];
	$mail->Password 	= $config['smtp']['password'];
	$mail->CharSet 		= 'utf-8';
	$mail->Subject 		= 'Сообщение с Вашего сайта panorama.ru';
	$mail->IsHTML(true);
	$mail->SetFrom($config['from']['email'], $config['from']['title']);
	$mail->Body 		= "<html>
							<head></head>
							<body>
								<p>	Тема: $title<br/>
									Имя: $name<br/>
									Телефон: $phone<br/>
									E-mail: $email<br/>
									Сообщение: $message
								</p>
							</body>
							</html>";
	
	foreach ($config['sendTo'] as $emailSendTo) $mail->AddAddress($emailSendTo);
	$send = $mail->Send();
} 
catch (\phpmailerException $e) 
{
	 exit($e->errorMessage());
}

?>