




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
    var wordEleven = document.getElementById("textEleven").value;
    var wordTwelve = document.getElementById("textTweleve").value;
    var wordThirteen = document.getElementById("textThirteen").value;


    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight,wordNine,wordTen,wordEleven,wordTwelve, wordThirteen)

    var paragraph = "It was a " + wordOne + " cold November day  I woke up " + wordTwo + " smell of " + wordThree + " roasting in the " + wordFour + "downstairs. I " + wordFive + " down the stairs to see if I could help " + wordSix + " the dinner. My mom said See if " + wordSeven + " needs a fresh " + wordEight + " So I carried  tray of glasses full of " + wordNine + " into the " + wordTen + " room.  When I got there I couldn't believe my " + wordEleven + " There were "  + wordTwelve + " on the " + wordThirteen + "!";

    

    document.getElementById('answer').innerHTML = paragraph;
}
    