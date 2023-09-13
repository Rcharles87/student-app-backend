const express = require("express");
const {
  getAllGradesV2,
  getGradeByIdV2,
} = require("../../queries/v2/gradeQueriesV2");

const gradesControllerV2 = express.Router();

gradesControllerV2.get("/", (request, response) => {
  try {
    const grades = getAllGradesV2();
    response.status(200).json({ data: grades });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

gradesControllerV2.get("/:id", (request, response) => {
  try {
    const { id } = request.params;
    const  grade  = getGradeByIdV2(id)

    if (grade) {
      return response.status(200).json({ data: grade });
    }
    response.status(404).json({ error: `Could not find grade with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = gradesControllerV2;
