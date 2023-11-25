<?php

$conn = new mysqli('localhost', 'kooldesi_luis', 'Ewi6M{A[R)iR', 'kooldesi_luisupdated');
if($conn->connect_error){
    die("Connection failed: ". $conn->connect_error);
}

$id = $_GET['id'];
$p_name = $_GET['p_name'];

if($_SERVER['REQUEST_METHOD'] === 'GET' && !empty($id) && !empty($p_name)){
    if(!isset($_GET['m_out'])){
        $query = "SELECT * FROM product WHERE NOT id = '$id' AND heading = '$p_name' LIMIT 1";
        $result = $conn->query($query);
        if($result->num_rows > 0){
            $rec = $result->fetch_assoc();
            $price = $rec['discount'] != "" ? ($rec['price'] - ($rec['price'] * $rec['discount']) / 100) : $rec['price'];
            $rec['discounted_price'] = $price;

            echo json_encode(['success' => true, 'data' => $rec]);
        }
        else{
            echo json_encode(['success' => false, 'message' => 'No record found.']);
        }
    }
    else{
        $query = "SELECT * FROM product WHERE id = '$id' AND heading = '$p_name'";
        $result = $conn->query($query);
        if($result->num_rows > 0){
            $rec = $result->fetch_assoc();

            $price = $rec['discount'] != "" ? ($rec['price'] - ($rec['price'] * $rec['discount']) / 100) : $rec['price'];
            $rec['discounted_price'] = $price;

            echo json_encode(['success' => true, 'data' => $rec]);
        }
        else{
            echo json_encode(['success' => false, 'message' => 'No record found.']);
        }
    }
}
else {
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
}

$conn->close();