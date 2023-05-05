import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from 'redux/action-creators/auth';
import * as TaskActions from 'redux/action-creators/task';
import * as ThemeActions from 'redux/action-creators/theme';


const ActionCreators = {
    ...AuthActions,
    ...TaskActions,
    ...ThemeActions
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
};