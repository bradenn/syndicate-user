import Users from "../models/users";
import {readFileSync} from 'fs';
import * as jwt from 'jsonwebtoken';

function generateToken(user) {
    const privateKey = readFileSync('private.key');
    return jwt.sign({_id: user._id}, privateKey, {algorithm: 'HS256'});
}

export default {

    async authUser(user) {
        return await Users.authenticate(user.username, user.password)
            .then(result => {
                if (result) return {token: generateToken(result)};
            })
            .catch(error => {
                if (error) return error;
            })
    }

}
