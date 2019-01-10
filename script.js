var count = 0;
//calculates current grade//
function calcCurrentGrade(){
    var gradeCat = 0;

    var catWeight = 0;

    var percent = 0;

    var gradeArray = 0;

    var gradeInt = 0;

    var catOfGrade = 0;

    var avg = 0;



    var grade = 0;
    for(var i = 0; i < count; i++){
        gradeCat = document.getElementById("grades" + [i]).value;
        catWeight = document.getElementById("weights" + [i]).value;
        gradeArray = gradeCat.split(",");
        gradeInt = convertArrayToNumber(gradeArray);
        avg = averageArray(gradeInt);

        percent= catWeight/ 100;
        catOfGrade= percent* avg;

        grade += catOfGrade;
    }
    //returns the grade you currently have//
    document.getElementById("currentGrade").innerHTML = "You currently have a " + grade + "%.";
    return grade;
}
function calcGradeNeeded(){
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var curGrade = calcCurrentGrade();

    var curWeight = 1 - (finalWeight/100);

    var gradeWeight = curGrade * curWeight

    var finalGrade = (desiredGrade - gradeWeight) / (finalWeight/100);

    document.getElementById("gradeWanted").innerHTML = "You need a " + finalGrade + "% on the final to get a " + desiredGrade + "% in this class.";

}
//Converts an array to a number?//
function convertArrayToNumber(grades){
    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
    return grades;
}
//returns average//
function averageArray(grades){
    var sum = 0;

    for(var i = 0; i < grades.length; i++){
        sum = sum + grades[i];
    }
    return sum/grades.length;
}
//gets your current grade//

//This function adds rows//
function addRows(){
    if(count <= 5){
        var titleInput = document.getElementById("categoryName").value;
        var gradeName = document.createElement("th");
        var weightName = document.createElement("th");

        var nameRow = document.createElement("tr");

        gradeName.innerHTML = titleInput + " Grades";
        weightName .innerHTML = titleInput + " Weights";

        nameRow.appendChild(gradeName);
        nameRow.appendChild(weightName );

        document.getElementById("table1").appendChild(nameRow);

        var cat = document.createElement("tr");
        var grades = document.createElement("td");
        var weight = document.createElement("td");

        var input1 = document.createElement("input");
        var input2 = document.createElement("input");

        grades.appendChild(input1);
        weight.appendChild(input2);

        cat.appendChild(grades);
        cat.appendChild(weight);
        document.getElementById("table1").appendChild(cat);

        input1.id = "grades" + count;
        input2.id = "weights" + count;

        gradeName.setAttribute("class", "colorOfTitle");
        weightName .setAttribute("class", "colorOfTitle");

        input1.setAttribute("class", "inputColor");
        input2.setAttribute("class", "inputColor");


        count++;
    }else{
        alert("You have registered too many categories. Refresh the page to start again.");
    }
}

