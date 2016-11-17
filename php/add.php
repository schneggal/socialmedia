<?php
  require 'connect.php';

   $USERNAME =$_POST['USERNAME'];
   $AVATAR =$_POST['AVATAR'];
   $DESCRIPTION=$_POST['DESCRIPTION'];
   $GROUP =$_POST['GROUP'];



$query = "INSERT INTO `users` (`username`,`avatar`,`testgroup`,`description`) VALUES('$USERNAME','$AVATAR','$GROUP','$DESCRIPTION')";
         
  if (mysqli_query($conn, $query)) {
    $last_id = mysqli_insert_id($conn);
    echo $last_id;
  } else {
      echo "Error: " . $query . "<br>" . mysqli_error($conn);
  }

  $conn->close();
?>





