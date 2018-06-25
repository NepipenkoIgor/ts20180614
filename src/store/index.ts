import {applyMiddleware, compose, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {IUser} from './reducers/users.reducer';
import {rootReducer} from './reducers';
import {rootEpic} from './epics';

declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export interface IStore {
    searchTerm: string;
    users: IUser[]
}


const rootEpicsMiddleware = createEpicMiddleware();

const composeEnhancer =
    typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'TypeScript Course'
        }) : compose;



const enchancer = composeEnhancer(
    applyMiddleware(rootEpicsMiddleware)
);

export const store = createStore(rootReducer, enchancer);

rootEpicsMiddleware.run(rootEpic);