function compareGrades() {
    let students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
    let points = [76, 85, 65, 93, 81];

    function getGrade(points) {
        let grade = "";
        if (points < 60) {
            grade = "F";
        } else if (points < 70) {
            grade = "D";
        } else if (points < 80) {
            grade = "C";
        } else if (points < 90) {
            grade = "B";
        } else {
            grade = "A";
        }

        return grade;
    }
    
    students.forEach((student, index) => {
        let grade = getGrade(points[index]);

        console.log(`Student: ${student} -> Grade: ${grade}`);
    });

    function getAverageClassGrade(points) {
        let sum = 0;
        for (const val of points) {
            sum += val;
        }
        let averageClassGrade = getGrade(sum / points.length);
    
        return [sum, averageClassGrade];
    }
    
    let sum = getAverageClassGrade(points)[0];
    let average = getAverageClassGrade(points)[1];


    console.log(`Class average points are: ${sum} and the grade is: ${average}`);
}

compareGrades();


