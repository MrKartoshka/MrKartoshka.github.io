<?php

$EmailTo = "omhillside@gmail.com";
$Subject = "HillSide";
$Name = $_POST['Name']; 
$Email = $_POST['Email'];  

// prepare email body text


// send email 
$success =  mail($EmailTo, $Subject,  "Имя:  $Name, Email: $Email" );

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}

?>