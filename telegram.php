<?php
// токен после bot
/* https://api.telegram.org/bot5222133279:AAFpjNhsMuDOEVEqR3k39PskNhL66oU6plw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$number = $_POST['user_number'];
$message = $_POST['user_message'];
$token = "5222133279:AAFpjNhsMuDOEVEqR3k39PskNhL66oU6plw";
$chat_id = "-709660835";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $email,
  'Номер: ' => $number,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>