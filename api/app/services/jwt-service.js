import jwt from 'jsonwebtoken';
import JWT_SECRET from '../config';

export default {
    getToken(data) {
        return jwt.sign(data, JWT_SECRET);
    },
    verify(token) {
        return jwt.verify(token, JWT_SECRET);
    },
};
