
import { Request, Response } from "express";
import { getAllCloudData } from "./CloudController";

export default [
    {
        path: "/api/v1/cloud",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                // console.log(req.body);
                const result = await getAllCloudData(req.body);
                // console.log(result);
                res.status(200).send(result);
            }

        ]
    }
];