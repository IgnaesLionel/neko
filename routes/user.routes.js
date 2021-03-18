const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// auth
router.post("/registeranimal", authController.registeranimal); // /api/user/registeranimal -> name, age, gender,okwithdogs,okwithcats,okwithchild,bio,availability
router.post("/register", authController.signUp); // /api/user/register ->  
router.post("/login", authController.signIn);   // /api/user/login ->  email, password
router.get("/logout", authController.logout); // /api/user/logout

// user DB
router.get("/", userController.getAllUsers); // /api/user/
router.get("/:id", userController.userInfo); // /api/user/:id
router.put("/:id", userController.updateUser);   // /api/user/:id -> bio
router.delete("/:id", userController.deleteUser); // /api/user/:id




module.exports = router;

