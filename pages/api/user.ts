import { passportAuth, passportInit, passportSession } from "@/app/middleware/passport";
import session from "@/app/middleware/session";
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import User from '@/models/User';

const router = createRouter<NextApiRequest, NextApiResponse>();

router

.use(session)
.use(passportInit)
.use(passportSession)




.get(async (req, res) => {
  const { id } = req.query;
  const {user_id} = req.user;


  if (Number(id) === user_id) { 
    try {
    const existingUser = await User.findByUserId(Number(id));

    if (existingUser) {
      // console.log('existingUser', existingUser)
      return res.status(200).json({existingUser});
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
 
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
}); 
