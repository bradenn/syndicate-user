import {readFileSync} from 'fs';
import * as jwt from 'jsonwebtoken';

export default async (req, res, next) => {

    if(!req.headers.authorization) return next(new Error('Unauthorized, provide api token.'));

    const privateKey = readFileSync('private.key');
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, privateKey, {algorithm: 'HS256'}, (err, token) => {
        if (err) next(new Error('Invalid token'));
        req.user = token.user;
        return next();
    });

}
