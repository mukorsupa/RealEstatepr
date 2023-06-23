// import type { NextApiRequest, NextApiResponse } from 'next';
// import passport, { passportInit } from '@/app/middleware/passport';
// import { createRouter, expressWrapper } from "next-connect";
// import session from '@/app/middleware/session';

import { passportAuth, passportInit, passportSession } from "@/app/middleware/passport";
import session from "@/app/middleware/session";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";


const router = createRouter<NextApiRequest, NextApiResponse>();

router
.use(session)
.use(passportInit)
.use(passportSession)
.use(passportAuth)
  .post((req, res) => {
    try {
      if (req.user) {
        const {user_id} = req.user;
        return res.status(200).json({ message: 'Success', user_id });
      } else {
        return res.status(401).json({ message: 'Wrong password/email' });
      }
    } catch (error) {
      console.log("error----------------", error);

    }
  })

// create a handler from router with custom
// onError and onNoMatch
export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});