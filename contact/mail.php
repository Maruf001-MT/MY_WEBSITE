<?php
//get data from form  
$name = $_POST['Name'];
$email= $_POST['Email'];
$topic= $_POST['Topic'];
$message= $_POST['Message'];
$to = "maruf@prozukty.com";
$subject = "A person wants to contact with you";
$txt ="Name = ". $name . "\r\n Email = " . $email . "\r\n Topic = " . $topic . "\r\n Message =" . $message;
$headers = "From: MD Maruf- Website" . "<".$email.">";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thank.html");
?>