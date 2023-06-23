import bcrypt from 'bcryptjs';
import  passport, { use } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '@/models/User';


 
passport.serializeUser( (user, done) => {
  done(null, user.user_id);
})


passport.deserializeUser(async (user_id, done) => {
  try {
    const user = await User.findByUserId(user_id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});



passport.use(
  new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
      async (email, password, done) =>{
        console.log("email---------", email);
        try{
          const user = await User.findOne({where:{email}});
          
          if (!user) {
            return done(null, false, {message:'wrong data'});
          }
          
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, {message:'wrong data'});
          }
          
          return done(null,user);

        }
        catch(error){          
          return done(error)
        }
      }
    
)
)

export const passportInit = passport.initialize();
export const passportSession = passport.session();


export const actions = [
  passport.initialize(),
  passport.session(),
];

export const passportAuth = passport.authenticate('local');

export default passport;
