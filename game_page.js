player1_name = localStorage.getItem("p1name");
player2_name = localStorage.getItem("p2name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1name").innerHTML = player1_name + " : ";
document.getElementById("player2name").innerHTML = player2_name + " : ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;
document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1_name;
document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2_name;


function send() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
question=num1+" + "+num2
    question_word = "<h4 id='word_display'> Q. " + question + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;

}