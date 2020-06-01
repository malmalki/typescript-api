
import { Request, Response } from "express";
import { getAllCloudData } from "./CloudController";

export default [
    {
        path: "/api/v1/cloud",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const result = await getAllCloudData();
            res.status(200).send(result);
        }
    }
];