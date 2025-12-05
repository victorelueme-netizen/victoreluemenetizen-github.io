<!DOCTYPE html>
<html>
<head>
<title>Calculator</title>
<style>
body {
    font-family: Arial;
    margin: 50px;
    background: white;
    text-align: center;
}

h1 {
    color: black;
}

.calculator {
    width: 250px;
    margin: 0 auto;
    border: 2px solid black;
    padding: 20px;
}

#display {
    width: 100%;
    height: 40px;
    font-size: 20px;
    text-align: right;
    margin-bottom: 10px;
    border: 1px solid black;
    background: white;
    color: black;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

button {
    height: 50px;
    font-size: 18px;
    border: 1px solid black;
    background: white;
    color: black;
}

button:hover {
    background: #f0f0f0;
}
</style>
</
