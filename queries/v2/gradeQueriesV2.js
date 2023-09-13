const gradeDataV2 = require("../../data/v2/gradesDataV2.json");



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
  getGradesByStudentIdV2
};
