import MONGO_URI from '../config.js';
import mongooseConnector from './mogoose-connector';
import server from '../server';

async function connectorsInit() {
    try {
        await mongooseConnector(MONGO_URI);
    } catch (e) {
        server.close();
        console.log(e);
    }
}

export {
    mongooseConnector,
};

export default connectorsInit;
