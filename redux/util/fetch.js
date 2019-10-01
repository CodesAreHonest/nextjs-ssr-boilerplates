import axios from "axios";

export default (method, path, data) => {
    return axios({
        method,
        url: `hello`,
        data
    });
};
