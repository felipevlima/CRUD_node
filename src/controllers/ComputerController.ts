import * as Yup from 'yup';
import Computer from '../models/computer';
import { Response, Request } from 'express';

const ComputerController = {
  async index(req: Request, res: Response) {
    const computerList = await Computer.find({});

    return res.json(computerList);
  },

  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      model: Yup.string().required(),
      ram: Yup.number().required(),
      videoMemory: Yup.number().required(),
      memory: Yup.number().required(),
      processor: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { model, ram, videoMemory, memory, processor } = req.body;

    let computer = await Computer.findOne({ model });

    if (!computer) {
      computer = await Computer.create({
        model,
        ram,
        videoMemory,
        memory,
        processor,
      });
    }

    return res.json(computer);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await Computer.findByIdAndRemove({ _id: id }, (err, computer) => {
      res.json({ message: 'Computer successfully removed' });
    });
  },

  async update(req: Request, res: Response) {
    const schema = Yup.object().shape({
      model: Yup.string().required(),
      ram: Yup.number().required(),
      videoMemory: Yup.number().required(),
      memory: Yup.number().required(),
      processor: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { id } = req.params;
    const { model, ram, videoMemory, memory, processor } = req.body;

    await Computer.findByIdAndUpdate(
      { _id: id },
      {
        model: model,
        ram: ram,
        videoMemory: videoMemory,
        memory: memory,
        processor: processor,
      },
      (err, computer) => {
        res.json({
          model: model,
          ram: ram,
          videoMemory: videoMemory,
          memory: memory,
          processor: processor,
        });
      },
    );
  },
};

export default ComputerController;
