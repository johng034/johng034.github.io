<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'JohnG@johng034.github.io';

    $email_subject = "New Message from Portfolio Website";

    $email_body = "Name: $name.\n".
                    "Email: $email.\n".
                    "Message: $message.\n";

    $to = "johng2055@yahoo.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>