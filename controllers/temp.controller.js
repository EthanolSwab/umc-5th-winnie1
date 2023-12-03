// temp.controllers.js

import { status } from "../config/response.status.js";
import { getTempData } from "../services/temp.services.js";
import { response } from "../config/response.js";
import { CheckFlag } from "../services/temp.services.js";

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
    console.log("/temp/execption/" + req.params.flag);
    return res.send(response(status.SUCUESS, CheckFlag(req.params.flag)));
}