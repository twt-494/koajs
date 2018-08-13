import MONGO_URI from '../config.js';
import mongooseConnector from './mogoose-connector';

function connectorsInit() {
    mongooseConnector(MONGO_URI);
}

export {
    mongooseConnector,
};

export default connectorsInit;
