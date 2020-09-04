import User from '../models/user';
import { Response, Request } from 'express';

const UserController = {
  async store(req: Request, res: Response) {
    const { email } = req.body;

    // let user = await User.findOne({ email });

    // if (!user) {
    //   user = await User.create({ email });
    // }

    return res.json(email);
  },
};

export default UserController;
