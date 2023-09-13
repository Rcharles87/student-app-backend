const gradeDataV2 = require("../../data/v2/gradesDataV2.json");

const getAllGradesV2 = () => {
  const { grades } = gradeDataV2;
  return grades;
};

const getGradeByIdV2 = (id) => {
    const { grades } = gradeDataV2;
    const grade = grades.find((el) => el.id === id);
    return grade;

}

const getGradesByStudentIdV2 = (id) => {
  const results = [];
  const { grades } = gradeDataV2;

  for (const grade of grades) {
    const { studentId } = grade;
    if (studentId === id) {
      results.push(grade);
    }
  }

  return results;
};

module.exports = {
  getAllGradesV2,
  getGradeByIdV2,
  getGradesByStudentIdV2
};
