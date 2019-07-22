const ClassData = require('../../model/class.model');
const StudentModel = require('../../model/student.model');

module.exports = {
  getClassData: async (req, res) => {
    try {
      console.log('dept is', req.params.dept);

      var classs = await ClassData.findOne({ dept: req.params.dept }).populate(
        'hod'
      );
      var student = await StudentModel.find({ class: classs._id });
      classs['students'] = student;
    } catch (err) {
      console.log(err);
    }
    res.json({ class: classs, student });
  },

  postClassData: async (req, res) => {
    let classData = new ClassData(req.body);
    classData.save(async (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({
          success: true,
          message: 'data saved successfully',
          data: classData,
        });
      }
    });
  },
};
