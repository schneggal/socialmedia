<?php
  require 'connect.php';
   $ENTRYID =$_POST['ENTRYID'];   
   $GROUP=$_POST['GROUP'];

$query = "UPDATE `users` SET testgroup='$GROUP' WHERE id=$ENTRYID";
         
  if (mysqli_query($conn, $query)) {
    
    echo "success";
  } else {
      echo "Error: " . $query . "<br>" . mysqli_error($conn);
  }

  $conn->close();
?>





