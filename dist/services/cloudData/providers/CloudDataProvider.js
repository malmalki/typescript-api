"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudData = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.getCloudData = () => __awaiter(void 0, void 0, void 0, function* () {
    const key = process.env.OPEN_CAGE_DATA_KEY;
    // const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
    // const response = await request(url);
    const response = `{ "foo": 123, "bar": 321 }`;
    return JSON.parse(response);
});
//# sourceMappingURL=CloudDataProvider.js.map