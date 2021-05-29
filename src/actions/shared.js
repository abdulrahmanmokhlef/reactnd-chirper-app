import { getInitialData } from '../utils/api';
import { receiveTweets } from'./tweets';
import { receiveUsers }  from './users';
import { authedUser, setAuthedUser } from './authedUser';

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
       return getInitialData()
       .then(({users, tweets}) => {
           debugger
            dispatch(receiveTweets(tweets));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));
       })
    }
}
