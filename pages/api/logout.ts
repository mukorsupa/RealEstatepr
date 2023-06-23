import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { passportAuth, passportInit, passportSession } from "@/app/middleware/passport";
import session from "@/app/middleware/session";

const router = createRouter<NextApiRequest, NextApiResponse>();

router

.use(session)
.use(passportInit)
.use(passportSession)


.post(async (req, res) => {
  console.log('user',req.user);
  req.logout(); 
  req.session.destroy();
  return res.status(200).json({ message: 'Logged out successfully' });
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
