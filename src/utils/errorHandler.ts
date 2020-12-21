import {Request, Response} from "express";

const catchErrorHandler: Function = (callback: Function) => (req: Request, res: Response) => {
  callback(req, res).catch((err:any) => {
    if (err.name == "MongoError" && err.code == 11000) {
      const message = err.keyPattern.name
        ? "Name already exists"
        : "Duplicate field";
      res.status(400).json({ message });
    }
    res.status(500).json({ err });
  });
};
export default catchErrorHandler;
