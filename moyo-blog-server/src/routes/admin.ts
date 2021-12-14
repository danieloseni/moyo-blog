export {}

const {Router} = require('express')
const router = Router()

//Import required controllers
const PostController = require('../controllers/postController')
const HomeController = require('../controllers/homeController')
const AuthController = require('../controllers/authControllerClient')
const SubscriptionController = require('../controllers/subscriptionController')
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req:any, file:any, cb:any) => {
        cb(null, './media')
    },
    filename: (req:any, file:any, cb:any) => {
        const filename = `${new Date().toISOString()}_${file.originalname}`
        cb(null, `${filename.replace(/:/g, "_").replace(/ /g, "_").replace(/@/g, "_").replace(/-/g, "_")}`)
    }
})

const upload = multer({storage})


//Routes relating to post
router.post('/add-post', upload.single('displayImage'), PostController.add_post)
//End of routes relating to post


//Routes relating to user

//End of routes relating to user


//Routes relating to Subscription
//End of routes relating to Subscription


//Routes relating to Home
router.get('/', HomeController.get_home)
//End of routes relating to Home

module.exports = router