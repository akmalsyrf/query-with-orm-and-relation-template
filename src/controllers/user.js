const { user } = require("../../models");

exports.addUsers = async (req, res) => {
  try {
    await user.create(req.body);

    res.send({
      status: "success",
      message: "Add user finished",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  // code here
  try {
    const users = await user.findAll();
    res.send({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getUser = async (req, res) => {
  // code here
  try {
    const { id } = req.params;
    const user = await user.findOne({ where: { id: id } });
    res.send({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
