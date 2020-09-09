import * as Yup from 'yup';
import Smartphone from '../models/smartphone';
import {Request, Response} from 'express';

export default class SmartphoneController{

    async list(req: Request, res: Response){
        
        const smartList = await Smartphone.find({});

        return res.json(smartList);

    }

    async insert(req: Request, res: Response){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            so: Yup.string().required(),
            processor: Yup.string().required(),
            screen: Yup.number().required(),
            mark: Yup.string().required(),
            memoryRam: Yup.number().required(),
            memory: Yup.number().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Data Validation Failure!'
            });
        }

        const {
            name,
            so,
            processor,
            screen,
            mark, 
            memoryRam,
            memory
        } = req.body;

        let smartphone = await Smartphone.findOne({name});

        if(!smartphone){
            smartphone = await Smartphone.create({
                name, so, processor, screen, mark, memoryRam, memory
            });
        }

        return res.json(smartphone);
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

        await Smartphone.findByIdAndRemove({ _id: id }, (err, smartphone) => {
            res.json({message: 'Smartphone removed!'})
        });
    }

    async udpate(req: Request, res: Response){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            so: Yup.string().required(),
            processor: Yup.string().required(),
            screen: Yup.number().required(),
            mark: Yup.string().required(),
            memoryRam: Yup.number().required(),
            memory: Yup.number().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Data Validation Failure!'
            });
        }
        const {id} = req.params;
        const {
            name,
            so,
            processor,
            screen,
            mark, 
            memoryRam,
            memory
        } = req.body;

        await Smartphone.findByIdAndUpdate(
            {_id: id}, {
                name: name,
                so: so,
                processor: processor,
                screen: screen,
                mark: mark,
                memoryRam: memoryRam,
                memory: memory,
            },
            (err, smart) => {
                res.json({
                    name: name,
                    so: so,
                    processor: processor,
                    screen: screen,
                    mark: mark,
                    memoryRam: memoryRam,
                    memory: memory,
                });
            }
        );
    }
}