//import model
const {user, profile} = require('../../models')

// Create controller
exports.addUser = async (req, res) => {
    try {
        const data = req.body
        const createData = await user.create(data)

        res.send({
            status:"success",
            data: createData
        })
    } catch (error) {
        res.send({
            status:"failed",
            message:"create data not found"
        })
    }
}
exports.getUsers = async (req, res) => {
    try {
      const users = await user.findAll({
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "idUser"],
          },
      });
  
      res.send({
        status: "success",
        data: {
          users,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server users Error",
      });
    }
  };
// ----------------------------------------------------login
// exports.postLogin = async (req, res) => {
//     try {
//         const data = req.body

//         const createData = await user.findOne({
//             where:{
//                 email: data.email,
//                 password: data.password
//             },
//             attributes: {
//                 exclude: ['password', 'createdAt', 'updatedAt','id','subscribe']
//             }
//         })

//         res.send({
//             status:"success",
//             data: createData
//         })

//     } catch (error) {
//         res.send({
//             status: 'failedLogin',
//             message: 'server error'
//         })
//     }
// };
// ----------------------------------------------------Register
// exports.postRegister = async (req, res) => {
//     try {
//         const data = req.body

//         const createData = await user.findOne({
//             where:{
//                 email: data.email,
//                 password: data.password,
//                 fullname: data.fullname
//             },
//             attributes: {
//                 exclude: ['password', 'createdAt', 'updatedAt','id','subscribe']
//             }
//         })

//         res.send({
//             status:"success",
//             data: createData
//         })

//     } catch (error) {
//         res.send({
//             status: 'failedLogin',
//             message: 'server error'
//         })
//     }
// };
// ----------------------------------------------------delete
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        await user.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: `Delete user id: ${id} finished`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}
// ----------------------------------------------------book
exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const newData = req.body

        await user.update(newData, {
            where: {
                id:id
            }
        })
        res.send({
            status: "success",
            message:`update user id ${id} finished`
        })
    } catch (error) {
        res.send({
            status:"failed update",
            message:"file not found"
        })
    }
}
// ----------------------------------------------------transaction
