import express from 'express'
import { signupUser, loginUser, forgotpass, resetPassword, verifyUser, logoutUser } from '../controllers/userController.js';
import passport from 'passport';

const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.post('/forgot-password', forgotpass)
router.post('/reset-password/:token', resetPassword)
// router.get('/google', passport.authenticate('google',{scope: ['profile','email']}))
// router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
//   res.cookie('token', req.user.token, { httpOnly: true});
//   res.redirect('http://localhost:3000/dashboard'); 
// });

// router.get('/google/callback',passport.authenticate('google', {
//         successRedirect: "http://localhost:3000/dashboard",
//         failureRedirect: "http://localhost:3000/login",
//       }))
// router.get('/google/callback', (req, res, next) => {
//     passport.authenticate('google', { session: false }, (err, user, info) => {
//       if (err) {
//         return next(err);
//       }
//       if (!user) {
//         return res.send({ message: info.message });
//       }
//       req.user = user;
//       next();
//     })(req, res, next);
//   }, googleUser);

router.get('/verify', verifyUser, (req, res) => {
    return res.json({ status: true, message: "authorized" })
})
router.get('/logout', logoutUser)

export default router;