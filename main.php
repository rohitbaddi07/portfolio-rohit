<?php

if (isset($_POST['submit'])) {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Mobile'];
    $branch = $_POST['Branch'];
    $usn=$_POST['USN'];

    echo "<h2>USER DATA RECEIVED</h2><br>";
    echo "<table border='1'>";
    echo "<thead>";
    echo "<th>Parameter</th>";
    echo "<th>Details</th>";
    echo "</thead>";
    echo "<tr>";
    echo "<td>Name</td>";
    echo "<td>" . $name . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Email</td>";
    echo "<td>" . $email . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Phone</td>";
    echo "<td>" . $phone . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Branch</td>";
    echo "<td>" . $branch . "</td>";
    echo "</tr>";
    echo "<td>Usn</td>";
    echo "<td>" . $usn . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "</table>";

      echo "<h2>Thank You For Visiting </h2><br>";
}