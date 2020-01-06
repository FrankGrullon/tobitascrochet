<?php
header("Refresh: 5; url=index.html");
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if ($name === ''){
echo "Name cannot be empty.";
die();
}
if ($email === ''){
echo "Email cannot be empty.";
die();
} 
if ($message === ''){
echo "Message cannot be empty.";
die();
}
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "frankvhalen@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>
