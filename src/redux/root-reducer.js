import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';  
import storage from 'redux-persist/lib/storage';

import memberReducer from './member/member.reducer';
import sideBarReducer from './sidebar/sidebar.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart'] 
} 

const rootReducer = combineReducers({
    member: memberReducer,
    sidebar: sideBarReducer
});

export default persistReducer(persistConfig, rootReducer);