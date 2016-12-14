<?

$adminemail="**********";  // e-mail админа 

$date=date("d.m.y"); 
 
$time=date("H:i"); 

$name=$_POST['name']; 
 
$email=$_POST['email'];

mail("$adminemail", "$date $time Сообщение 
от $name: $email");

?> 