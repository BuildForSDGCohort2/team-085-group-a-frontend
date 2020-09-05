import axios from 'axios';
import * as actions from '../api';

const api = ({dispatch}) => (next) => async (action) => {
    return action;
}

export default api;