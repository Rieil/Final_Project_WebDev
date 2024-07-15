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
    $sql = "INSERT INTO home_fam_form 
            (father_name, age, life, educ_attain, occupation, employer_name, employer_add, 
            mother_name, age, life, educ_attain, occupation, employer_name, employer_add, 
            guardian_name, age, life, educ_attain, occupation, employer_name, employer_add,
            marital, num_children, num_bro, num_sis, num_employed, ordinal_pos, support, finances,
            allowance, income, quiet, share, share_with, residence)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind parameters with proper types
        $stmt->bind_param("ssssssssssssssssssssssssssssssssss", 
            $_POST['father_name'], $_POST['age'], $_POST['life'], $_POST['educ_attain'], $_POST['occupation'], $_POST['employer_name'], $_POST['employer_add'],
            $_POST['mother_name'], $_POST['age'], $_POST['life'], $_POST['educ_attain'], $_POST['occupation'], $_POST['employer_name'], $_POST['employer_add'],
            $_POST['guardian_name'], $_POST['age'], $_POST['life'], $_POST['educ_attain'], $_POST['occupation'], $_POST['employer_name'], $_POST['employer_add'],
            $_POST['marital'], $_POST['num_children'], $_POST['num_bro'], $_POST['num_sis'], $_POST['num_employed'], $_POST['ordinal_pos'], $_POST['support'],
            $_POST['finances'], $_POST['allowance'], $_POST['income'], $_POST['quiet'], $_POST['share'], $_POST['share_with'], $_POST['residence']
        );

        // Execute the prepared statement
        if ($stmt->execute()) {
            echo "Form data saved successfully.";
            // Redirect to next page upon successful submission
            header('Location: health.html');
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

