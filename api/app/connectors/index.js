import MONGO_URI from '../config.js';
import mongooseConnector from './mogoose-connector';
console.log(MONGO_URI);
function connectorsInit() {
    mongooseConnector('mongodb://summary:Htconesv455@ds217092.mlab.com:17092/summary');
}

export {
    mongooseConnector,
};

export default connectorsInit;
