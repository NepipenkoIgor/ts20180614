import {combineEpics} from 'redux-observable';
import {usersEpic} from './users.epics';


export const rootEpic = combineEpics(usersEpic)