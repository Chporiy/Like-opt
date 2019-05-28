<?php
error_reporting(0);

$name    = $_POST['user_name'];
$email   = $_POST['user_email'];
$tel     = $_POST['user_phone'];
// $ask					= $_POST['user_ask'];
$messagePopup = '
	Пользователь оставил свои данные <br>
 <b>Имя:</b> ' . $name . ' <br>
 <b>E-mail:</b> ' . $email . ' <br>
	<b>Телефон:</b> ' .  $tel . '';
mail($to,$subject,$messagePopup,$headers);
$to = "arinov.e@yandex.ru";
$subject = "Новая заявка";
$headers = "From: arinow@yandex.ru" . "\r\n" .
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


// if (isset($email && $name && $tel && $ask)) {
// 	$messageContact = '
// 		Пользователь оставил свои данные <br>
// 	 <b>Имя:</b> ' . $name . ' <br>
// 	 <b>E-mail:</b> ' . $email . ' <br>
// 		<b>Телефон:</b> ' .  $tel . ' <br>
// 	 <b>Вопрос:</b> ' . $ask . ''
// 	mail($to,$subject,$messageContact,$headers);
// 	exit();
// }



// if (isset($email)) {
// 	$messageFooter = '
// 		Пользователь оставил свои данные <br>
// 	 <b>E-mail:</b> ' . $email . ' <br>'
// 	mail($to,$subject,$messageFooter,$headers);
// 	exit();
}


?>