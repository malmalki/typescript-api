import request from "request-promise";
import dotenv from "dotenv";

dotenv.config();

export const getCloudData = async () => {
    const key = process.env.OPEN_CAGE_DATA_KEY;
    // const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
    // const response = await request(url);
    const response = `{ "foo": 123, "bar": 321 }`;
    return JSON.parse(response);
};