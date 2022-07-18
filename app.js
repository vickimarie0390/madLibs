function createParagraph() {
   
    var wordOne = document.getElementById("textOne").value;
    var wordTwo = document.getElementById("textTwo").value;
    var wordThree = document.getElementById("textThree").value;
    var wordFour = document.getElementById("textFour").value;
    var wordFive = document.getElementById("textFive").value;
    var wordSix = document.getElementById("textSix").value;
    var wordSeven = document.getElementById("textSeven").value;
    var wordEight = document.getElementById("textEight").value;
    var wordNine = document.getElementById("textNine").value;
    var wordTen = document.getElementById("textTen").value;
    // var wordEleven = document.getElementById("textEleven").value;
    var wordTwelve = document.getElementById("textTweleve").value;
    var wordThirteen = document.getElementById("textThirteen").value;

 

    var paragraph =  "woke up " + wordOne + " smell of " + wordTwo + " roasting in the " + wordThree + " downstairs. I " + wordFour + "down the stairs to see if I could help " + wordFive + " the dinner. My mom said See if " + wordSix + " needs a fresh " + wordSeven + " So I carried  tray of glasses full of " + wordEight + " into the " + wordNine + " room. " + " When I got there I couldn't believe my " + wordTen +! + " There were "  + wordTwelve + " on the " + wordThirteen +"!";


    document.getElementById('answer').innerHTML = paragraph;
}
    