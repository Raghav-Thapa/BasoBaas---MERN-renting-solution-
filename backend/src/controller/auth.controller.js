const bcrypt = require("bcryptjs")
const userServ = require('../services/user.service')
const mailSvc = require("../services/mailer.service")
const dotenv = require("dotenv");
dotenv.config();
const helpers = require("../utilities/helpers");
const jwt = require('jsonwebtoken');

class AuthController {
    login = async (req, res, next) => {
        try{
            let payload = req.body;
            if (!payload.email || !payload.password) {
                next({ status: 400, msg: "Credentials required" })
            }
            let userDetail = await userServ.getUserByEmail(payload.email)

            if (bcrypt.compareSync(payload.password, userDetail.password)) {

                if (userDetail.status === 'active') {
                    let accessToken = jwt.sign({
                        userId: userDetail._id
                    }, process.env.JWT_SECRET, { expiresIn: '3h' });

                    let refreshToken = jwt.sign({
                        userId: userDetail._id
                    }, process.env.JWT_SECRET, { expiresIn: '5d' });

                    res.json({
                        //  result:payload
                        result: {
                            data: userDetail,
                            token: {
                                accessToken: accessToken,
                                accessType: "Bearer",
                                refreshToken: refreshToken
                            }
                        },
                        status: true,
                        msg: "you are logged in"
                    })
                } else {
                    next({ status: 403, msg: 'Your account has not been activated yet' })
                }

            } else {
                next({ status: 400, msg: 'Credentials does not match' })
            }

        }catch(exception){
            next({ status: 400, msg: "Query exception. View console" })
        }

    }

    register = async (req, res, next) => {
        try{
            
            let registerData = req.body

            if (req.file) {
                registerData.image = req.file.filename
            }


            userServ.validatedata(registerData)

            registerData.password = bcrypt.hashSync(registerData.password, 10);
            registerData.activationToken = helpers.generateRandomString();
            

            let registerResponse = await userServ.registerUser(registerData)

            if (registerResponse) {
            let mailMsg = `Dear ${registerData.name}, <br/> Your account has been registered
            successfully. Please click the link below to activate your account:
            <a href="${process.env.FRONTEND_URL}activate/${registerData.activationToken}">"${process.env.FRONTEND_URL}activate/${registerData.activationToken}"</a>
            <br/>
            Regards,<br>
            Np-Reply, Admin
            `

            await mailSvc.sendMail(registerData.email, "Activate your account", mailMsg);

            res.json({
                result: registerData,
                msg: "user registered successfully",
                status: true
            })
        }
            else {
                next({ status: 400, msg: "user cannot be registered at this moment" })
            }

        

        }catch(exception){
            console.log(exception)
            next(exception)
        }

    }

    getLoggedInUser = (req, res, next) => {
        try {
            res.json({
                result: req.authUser,
                msg: "Your detail",
                status: true

            })
        } catch (exception) {
            console.log(exception);
            next(exception)
        }

    }

}

const authCtrl = new AuthController();
module.exports = authCtrl