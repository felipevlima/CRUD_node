import * as Yup from 'yup';
import User from '../models/user';
import { Response, Request } from 'express';

const UserController = {
  async index(req: Request, res: Response) {
    const userList = await User.find({});

    return res.json(userList);
  },

  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      cellphone: Yup.string().required(),
      age: Yup.number().required(),
      cep: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, cellphone, age, cep } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, cellphone, age, cep });
    }

    return res.json(user);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await User.findByIdAndRemove({ _id: id }, (err, user) => {
      res.json({ message: 'User success removed' });
    });
  },

  async update(req: Request, res: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      cellphone: Yup.string().required(),
      age: Yup.number().required(),
      cep: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { name, email, cellphone, age, cep } = req.body;

    await User.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        email: email,
        cellphone: cellphone,
        age: age,
        cep: cep,
      },
      (err, usr) => {
        res.json({
          name: name,
          email: email,
          cellphone: cellphone,
          age: age,
          cep: cep,
        });
      },
    );
  },
};

export default UserController;
