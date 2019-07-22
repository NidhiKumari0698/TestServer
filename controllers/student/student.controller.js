const StudentData = require('../../model/student.model');

module.exports = {
  getStudentData: async (req, res) => {
    const studentData = await StudentData.find();
    res.send(studentData);
  },

  delteStudent: async (req, res) => {
    console.log('id is:', req.params.id);
    const studentData = await StudentData.findByIdAndDelete(req.params.id);
    res.send(studentData);
  },

  //   getStudentDataByBranch: async (req, res) => {
  //     res.send(studentData);
  //   },

  postStudentData: async (req, res) => {
    let studentData = new StudentData(req.body);
    studentData.save(async (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({
          success: true,
          message: 'data saved successfully',
          data: studentData,
        });
      }
    });
  },
};
