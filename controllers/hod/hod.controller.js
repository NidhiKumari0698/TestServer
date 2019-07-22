const HodData = require('../../model/hod.model');

module.exports = {
  //   getHodData: async (req, res) => {
  //     console.log('inside get HOD');

  //     console.log('dept :', req.params.dept);

  //     const hodData = await HodData.findOne({ dept: req.params.dept });
  //     res.send(hodData);
  //   },

  getHodData: async (req, res) => {
    console.log('inside get HOD');

    // console.log('dept :', req.params.dept);

    const hodData = await HodData.find();
    res.send(hodData);
  },

  postHodData: async (req, res) => {
    let hodData = new HodData(req.body);
    hodData.save(async (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({
          success: true,
          message: 'data saved successfully',
          data: hodData,
        });
      }
    });
  },
};
