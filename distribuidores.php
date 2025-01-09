<?php
// Read the CSV file
$filename = 'services/lista.csv';
$data = array_map('str_getcsv', file($filename));

// Remove the header row
$headers = array_shift($data);

// Prepare the data for the frontend
$distributors = [];
foreach ($data as $row) {
    $distributors[] = array_combine($headers, $row);
}

// Convert to JSON for JavaScript
echo json_encode($distributors);
?>