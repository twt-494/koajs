import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (initialState = {}) => {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', (module) => {
            store.replaceReducer(module.default);
        });
    }
    
    return store;
};