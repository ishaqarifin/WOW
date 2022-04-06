const {profile } = require("../../models");

exports.getprofiles = async (req, res) => {
    try {
      let data = await profile.findAll({
          model: profile,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "idUser"],
          },
      });

      res.send({
        status: "success",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server profiles Error",
      });
    }
  };

  exports.profile = async (req, res) => {
    try {
        const {id} = req.params
      let data = await profile.findOne({
         where : {
            id,
         },
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        }
      });
      // data = JSON.parse(JSON.stringify(data));
      // data = {
      //   ...data,bookCover: process.env.PATH_FILE + data.bookCover,
      // };
      res.send({
        status: "success",
        data,
      });
      
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server profile Error",
      });
    }
  };
