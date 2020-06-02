import { getCloudData } from "./providers/CloudDataProvider";

export const getAllCloudData = async (q: string) => {
    // console.log(q);
    return await getCloudData(q);
};