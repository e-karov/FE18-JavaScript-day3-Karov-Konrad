function showGrade() {
    let student = prompt("Please enter a student name: ");

    const students = ["John", "Jane"];
    const mathGrades = [70, 85];
    const resultDiv = document.getElementById("result");

    let studentIndex = students.indexOf(student);

    if (studentIndex !== -1) {
        let points = mathGrades[studentIndex];
        colorizeResult(points, resultDiv);
        resultDiv.innerText = `${student} has reached 70 points in Math this season.`;
    } else {
       resultDiv.innerText = `No student with name "${student}" found.`;
    }
}

showGrade();

function colorizeResult(grade, resultElement) {
    if (grade < 60) {
        resultElement.style.color = "red";
    } else if (grade <= 70) {
        resultElement.style.color = "yellow";
        
    } else if (grade < 100) {
        resultElement.style.color = "green";

    } else if (grade == 100 ) {
        resultElement.style.color = "blue";

    }
}