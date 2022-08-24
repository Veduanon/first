<?php
// токен после bot
/* https://api.telegram.org/bot5222133279:AAFpjNhsMuDOEVEqR3k39PskNhL66oU6plw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$number = $_POST['user_number'];
$message = $_POST['user_message'];
$token = "5472090290:AAG4acoeC6vjL9Jsi3B5Y9j4OLiEYVPk7ks";
$chat_id = "-1709791044";
$arr = array([
    'Имя пользователя: ' => $name,
    'Номер: ' => $number,
    'Сообщение: ' => $message,
]);

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