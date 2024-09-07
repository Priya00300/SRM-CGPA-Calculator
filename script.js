document.getElementById("generateForm").addEventListener("click", function() {
    let numCourses = document.getElementById("numCourses").value;
    let courseInputs = document.getElementById("courseInputs");
    courseInputs.innerHTML = "";
    
    for (let i = 1; i <= numCourses; i++) {
        let courseDiv = document.createElement("div");
        courseDiv.className = "course";

        let creditInput = `<label>Credits for Course ${i}:</label><input type="number" name="credit${i}" min="1" required>`;
        let gradeSelect = `
            <label>Grade for Course ${i}:</label>
            <select name="grade${i}">
                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="5">C+</option>
                <option value="4">C</option>
            </select>
        `;

        courseDiv.innerHTML = creditInput + gradeSelect;
        courseInputs.appendChild(courseDiv);
    }

    document.getElementById("cgpaForm").style.display = "block";
});

document.getElementById("cgpaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let numCourses = document.getElementById("numCourses").value;
    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (let i = 1; i <= numCourses; i++) {
        let credit = parseFloat(document.querySelector(`input[name="credit${i}"]`).value);
        let gradePoint = parseFloat(document.querySelector(`select[name="grade${i}"]`).value);
        
        totalCredits += credit;
        weightedGradePoints += credit * gradePoint;
    }

    let cgpa = (weightedGradePoints / totalCredits).toFixed(2);

    document.getElementById("cgpaResult").innerText = cgpa;
    document.getElementById("result").style.display = "block";
});