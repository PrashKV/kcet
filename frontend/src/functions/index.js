import { API } from "../backend";
import axios from "axios";

export const lists = (name) => {
    
    try {
        return axios
            .get(`${API}getStudents/${name}`)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return error.response;
            });
    } catch (error) {
        console.log(error);
    }
};

export const info = (roll) => {
    return axios
        .get(`${API}result/${roll}`)
        .then((res) => res)
        .catch((error) => {
            return error.response;
        });
};
