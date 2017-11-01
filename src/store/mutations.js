import {
    RECORD_USERINFO,
    GET_USERINFO,
    SAVE_ADDRESS
} from './mutation-types'

import {setStore, getStore} from '../config/mUtils'

import {localapi,proapi} from 'src/config/env'

export default {
    [RECORD_USERINFO](state, info){
        state.userInfo = info;
        state.login = true;
        setStore('user_id', info.user_id);
    },
    [GET_USERINFO](state, info){
        if(state.userInfo && (state.userInfo.username !== info.username)){
            return;
        }
        if(!state.login){
            return;
        }
        if(!info.message){
            state.userInfo = {...info};
        }else{
            state.userInfo = null;
        }
    }
}