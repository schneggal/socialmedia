<?php
  echo "add entry"; 
  require 'connect.php';

    


   $EMAIL =$_POST['EMAIL'];
   $GROUP =$_POST['GROUP'];

$query = "INSERT INTO `test` (`gruppe`,`email`) VALUES('$GROUP','$EMAIL')";
         
  if (mysqli_query($conn, $query)) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $insert . "<br>" . mysqli_error($conn);
  }

  $conn->close();
?>





