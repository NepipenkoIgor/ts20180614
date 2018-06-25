import {ActionsObservable, ofType} from 'redux-observable';
import {GET_USERS_PENDING, getUsersError, getUsersSuccess} from '../actions/users.action';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {fromPromise} from 'rxjs/internal/observable/fromPromise';
import {of} from 'rxjs/internal/observable/of';
import {getUsers} from '../../services';
import {AxiosResponse} from 'axios';
import {IUser} from '../reducers/users.reducer';

export const usersEpic = (action$: ActionsObservable<any>) =>
    action$.pipe(
        ofType(GET_USERS_PENDING),
        switchMap(() => {
            return fromPromise(getUsers()
                .then((res: AxiosResponse<IUser[]>) => res.data))
                .pipe(
                    map((users: IUser[]) => getUsersSuccess(users)),
                    catchError((err) => of(getUsersError('wrong request')))
                );
        })
    );