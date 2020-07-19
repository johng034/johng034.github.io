<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'johng2055@yahoo.com';
    $headers = "From: ".$mailFrom;
    $txt = "You have received a message from ".$name.".\n\n".$message;
    
    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");
}

?>