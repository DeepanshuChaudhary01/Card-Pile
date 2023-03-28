import { configureStore } from '@reduxjs/toolkit'
import Reducer_bucket from '../features/Reducer_bucket';
import Reducer_toggle from "../features/Reducer_toggle.js";
import Reducer_history from '../features/Reducer_history';

const store = configureStore({
    reducer: {
        buckets : Reducer_bucket,
        toggle: Reducer_toggle,
        history: Reducer_history,
    }
});

export default store