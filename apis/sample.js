import axios from 'axios';

export const getUsers = () => {

    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return resolve(response);
            })
            .catch(err => {
                return reject(err);
            })
    });
};