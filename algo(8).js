const gradingStudents = (grade) => {
    let result = []
    for (let i = 0; i < grade.length; i++) {
        if ((grade[i] + 2) % 5 === 0 && grade[i] >= 38 ) {
            result = [...result, grade[i] + 2]
        } else if ((grade[i] + 1) % 5 === 0 && grade[i] >= 38) {
            result = [...result, grade[i] + 1]
        } else if (grade[i] % 5 === 0 && grade[i] >= 38) {
            result = [...result, grade[i]]
        } else {
            result = [...result, grade[i]]
        }
    }
    console.log(result)
    return result.filter((x) => x > 30)
}

gradingStudents([63, 29, 10, 33, 67, 49, 69, 68, 70, 21, 53, 55])