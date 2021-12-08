// JavaScript source code
var gpa4;
var subjectGPA = [];
var marks;
var totalMarks = 0;
var totalSubjects = 0;
var grade = [];
var totalGPA = 0;
var totalSemester = 0;
var check = 0;
function calculate()
{
    var Stringgpa4 = document.getElementById('setgpa').value;
    gpa4 = parseInt(Stringgpa4);
    totalSubjects = 0;
    totalMarks = 0;
    for (var i = 1; i <=8; i++)
    {
        if(document.getElementById('inputm'+i).value != "")
        {
            totalSubjects++;
        }
    }

    for(var i=1 ;i<=totalSubjects;i++)
    {
        marks = document.getElementById('inputm' + i).value;
        if(marks>=gpa4)
        {
            subjectGPA[i - 1] = 4;
            grade[i - 1] = 'A';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if(marks>=gpa4-5)
        {
            subjectGPA[i - 1] = 3.7;
            grade[i - 1] = 'A-';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 10) {
            subjectGPA[i - 1] = 3.3;
            grade[i - 1] = 'B';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 15) {
            subjectGPA[i - 1] = 3.0;
            grade[i - 1] = 'B-';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 20) {
            subjectGPA[i - 1] = 2.7;
            grade[i - 1] = 'C';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 25) {
            subjectGPA[i - 1] = 2.3;
            grade[i - 1] = 'C-';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 30) {
            subjectGPA[i - 1] = 2.0;
            grade[i - 1] = 'D';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 35) {
            subjectGPA[i - 1] = 1.7;
            grade[i - 1] = 'D-';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 40) {
            subjectGPA[i - 1] = 1.3;
            grade[i - 1] = 'E';
            totalMarks = totalMarks + parseInt(marks);
        }
        else if (marks >= gpa4 - 45) {
            subjectGPA[i - 1] = 1.0;
            grade[i - 1] = 'E-';
            totalMarks = totalMarks + parseInt(marks);
        }
        else 
        {
            subjectGPA[i - 1] = 0;
            grade[i - 1] = 'F';
            totalMarks = totalMarks + parseInt(marks);
        }
    }

    showResult();
   
}

function showResult()
{
    var per = 0;
    var totalHours = 0
    var gpaSum = 0;
    for (var i = 1 ; i <= totalSubjects; i++)
    {
        document.getElementById('grade' + i).innerHTML = grade[i - 1];
        document.getElementById('gpaOfSbj' + i).innerHTML = subjectGPA[i - 1];
    }

    for (var i = 1 ; i <= totalSubjects; i++)
    {
        var creditHour = document.getElementById('hours' + i).value;
        
        totalHours = totalHours + parseInt(creditHour);
        
         gpaSum = gpaSum + (parseInt(creditHour) * subjectGPA[i - 1]);
        
    }
    totalGPA = gpaSum / totalHours;

    per = (totalMarks * 100) / (totalSubjects * 100);


    document.getElementById('showPercentage').innerHTML = "Percentage: " + Math.round(per) + "%";
    document.getElementById('showGPA').innerHTML = "GPA: " + totalGPA.toFixed(2) ;

    
}
function switchbtn()
{
    if (check == 0)
    {
        document.getElementById('gpaBox').style.display = "none";
        document.getElementById('cgpaBox').style.display = "block";

        document.getElementById('main-heading').innerHTML = "CGPA Calculator";
        document.getElementById('switchh').innerHTML = "GPA";
        

        check = 1;
    }
    else
    {
        document.getElementById('gpaBox').style.display = "block";
        document.getElementById('cgpaBox').style.display = "none";

        document.getElementById('main-heading').innerHTML = "GPA Calculator";
        document.getElementById('switchh').innerHTML = "CGPA";
        
        check = 0;
    }
    
}
function calculateCGPA()
{
    totalSemester = 0;
    var cgpa = 0;
    for (var i = 1; i <= 8; i++) {
        if (document.getElementById('inputgpa' + i).value != "")
        {
             cgpa = cgpa + parseFloat(document.getElementById('inputgpa' + i).value);
            totalSemester++;
        }
        
    }
    cgpa = cgpa / totalSemester;
    
    document.getElementById('showCGPA').innerHTML = "CGPA: " + cgpa.toFixed(2);
}