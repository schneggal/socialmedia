<?php

  require 'php/connect.php';



  $data = "SELECT id, username, avatar, testgroup, description FROM users";
  $result = $conn->query($data);

  if ($result->num_rows > 0) {
       // output data of each row
       while($row = $result->fetch_assoc()) {
           echo "<tr><td>". $row["id"]. "</td><td>". $row["testgroup"]. "</td><td>" . $row["username"] . "</td><td>". $row["avatar"]. "</td><td>" . $row["description"] . "</td></tr>";
       }
  } else {
       echo "0 results";
  }
  $conn->close();
?>