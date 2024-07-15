<?php
// Database connection parameters
$servername = "localhost:3306"; // Update the port if necessary
$username = "root";
$password = "";
$dbname = "pup_forms_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Prepare SQL statement to insert data into the database
    /*$sql = "INSERT INTO education_info 
            (pre_elem_school, pre_elem_address, pre_elem_type, pre_elem_dates, pre_elem_awards,
             elem_school, elem_address, elem_type, elem_dates, elem_awards,
             hs_school, hs_address, hs_type, hs_dates, hs_awards,
             voc_school, voc_address, voc_type, voc_dates, voc_awards,
             college_school, college_address, college_type, college_dates, college_awards)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";*/

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);

    // Execute the prepared statement
        if ($stmt->execute()) {
            echo "Form data saved successfully.";
            // Redirect to next page upon successful submission
            header('Location: significant.html');
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Error: " . $conn->error;
    }
}
// Close the connection
$conn->close();

