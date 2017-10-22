<?php 
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		function validata($data){
			$data = stripcslashes($data);
			$data = trim($data);
			$data = htmlspecialchars($data);
			return $data;
		}

		$name = validata($_POST['name']);
		$email = validata($_POST['email']);
		$massage = validata($_POST['massage']);

		if (isset($name) && isset($email) && isset($massage)) {
		
			// Set the recipient email address.
	        // Type here your email id for receive email.
	        $email_to = "wwfbcom@bootex.com"; 

	        // Set the email subject.
	        $subject = "New email from $name";

	        // Build the email content.
	        $email_body = "Name: $name\n";
	        $email_body .= "Email: $email\n\n";
	        $email_body .= "Message:\n$massage\n";

	        // Build the email headers.
	        $email_headers = "From: $name <$email>";

	        // Send the email.
	        $success = mail($email_to, $subject, $email_body, $email_headers);
	        if ($success){
			   echo "success";
			}else{
			   echo "Something went wrong :(";
			}
		}
	}

?>