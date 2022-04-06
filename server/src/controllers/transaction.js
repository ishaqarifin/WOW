const {transaction, user} = require('../../models')

exports.postTransaction = async (req, res) => {
  try {
      const data = req.body
      const createData = await transaction.create(data)

      res.send({
          status:"success",
          createData: data
          // attributes: {
          //     exclude: ["createdAt", "updatedAt"],
          // }
      })
  } catch (error) {
      res.send({
          status:"failed",
          message:"create data not found"
      })
  }
}

exports.oneTransaction = async (req, res) => {
    try {
      const {id} = req.params
      const data = await transaction.findOne({
        where: {
          id : id,
        },
        include: {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "email","password","role","subscribe"],
          }
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "UserId","userId"],
        },
      });
  
      res.send({
        status: "success",
        data: {
          data,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server transaction Error",
      });
    }
  };
exports.getTransaction = async (req, res) => {
    try {
      let transactions = await transaction.findAll({
        include: {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "email","password","role","subscribe","id"],
          }
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "UserId","userId"],
        },
      });

      // data = JSON.parse(JSON.stringify(data));

      // data = data.map((item) => {
      //   return { ...item, image: process.env.PATH_FILE + item.image };
      // });
      res.send({
        status: "success",
        data: {
          transactions,
        }
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server buku Error",
      });
    }
  };

exports.updateTransaction = async (req, res) => {
    try {
      const {id} = req.params
        const newData = req.body

        await transaction.update(newData,{
            where : {
                id:id
            }
      });
  
      res.send({
        status: "success",
        message:`update user id ${id} finished`,
          newData
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server edit transaction Error",
      });
    }
  };