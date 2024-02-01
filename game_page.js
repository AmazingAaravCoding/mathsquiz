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
aturn = "p2"
qturn = "p1"
function send() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    question = num1 + " + " + num2
    question_word = "<h4 id='word_display'> Q. " + question + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
}
function check() {
    answer = Number(document.getElementById('input_check_box').value)
    if (answer == Number(num1) + Number(num2)) {
        if (aturn == "p1") {
            player1_score++
            document.getElementById("player1score").innerHTML = player1_score;

        } else {
            player2_score++
            document.getElementById("player2score").innerHTML = player2_score;

        }
    }
    if (qturn == "p1") {
        qturn = "p2"
        document.getElementById("playerquestion").innerHTML = "Question Turn - " + player2_name;

    } else {
        qturn = "p1"
        document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1_name;

    }
    if (aturn == "p1") {
        aturn = "p2"
        document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        aturn = "p1"
        document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";

}