//instantiate express module here
const express = require('express')

// Init express router here..
const router = express.Router()

// Get controller here
const {auth} = require('../middlewares/auth')
const {uploadFile} = require('../middlewares/uploadFile')
const {getUsers, deleteUser} = require('../controllers/user')
const {addRegister, login} = require('../controllers/auth')
const {getbukus, detailbukus, addbuku, updateBukus, deleteBukus} = require('../controllers/buku')
const {getTransaction, updateTransaction, postTransaction, oneTransaction} = require('../controllers/transaction')
const {getprofiles, profile} = require ("../controllers/profile")

// Create Route here
// router.post('/loginnn', postLogin)
// router.post('/register', postRegister)
// router.post('/addUser', addUser)
router.get('/onetransaction/:id', oneTransaction)
router.get('/transaction', getTransaction)
router.patch('/updatetransaction/:id', updateTransaction)
router.post('/posttransaction', postTransaction)

router.get('/profiles', getprofiles)
router.get('/profile/:id', profile)

router.post('/addregister', addRegister)
router.post('/login', login)

router.get('/users',auth, getUsers)
router.delete('/deleteUser/:id', deleteUser)

router.get('/bukus', getbukus)
router.get('/detailbukus/:id', detailbukus)
router.post('/addbuku',auth, uploadFile('bookFile','bookCover'), addbuku)
router.patch('/updateBukus/:id',auth, updateBukus)
router.delete('/deleteBukus/:id',auth, deleteBukus)
// Export module router here
module.exports = router