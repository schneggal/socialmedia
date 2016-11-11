<?php

  require 'php/connect.php';



  $data = "SELECT id, gruppe, email FROM test";
  $result = $conn->query($data);

  if ($result->num_rows > 0) {
       // output data of each row
       while($row = $result->fetch_assoc()) {
           echo "<tr><td>". $row["id"]. "</td><td>". $row["gruppe"]. "</td><td>" . $row["email"] . "</td></tr>";
       }
  } else {
       echo "0 results";
  }
  $conn->close();
?>