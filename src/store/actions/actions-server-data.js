import moment from 'moment'
import ROUTES from '../../configs/routes';
import _, { sortBy, split } from "lodash";
import ServerData from "../../api/server";
import { ActionLoadingUpdate } from './actions-loading'
import { SERVER_ACTIONS } from "../actions-names/server";
import { ActionOpenNotification } from "./actions-utils-data";
import { UtilsHelper } from "../../utils/utils-helper";
import { ActionRouteNavigate } from './actions-route';

export function ActionServerData(ns, payload) {
    const data = {}
    data[ns] = payload
    return {
        type: SERVER_ACTIONS.UPDATE_DATA,
        data
    }
}

export function ActionClearServer() {
    return {
        type: SERVER_ACTIONS.CLEAR,
    }
}

export function ActionClearServerWithKey(key) {
    return dispatch => {
        dispatch(ActionServerData(key, undefined))
    }
}

export function ActionContactUs(param) {
    return dispatch => {
        dispatch(ActionLoadingUpdate('ContactUs', true))

        ServerData.ContactUs(param)
            .then(res => {
                debugger;
                if (res.success) {
                    debugger;
                    ActionOpenNotification('success', 'Successfully Submitted', res.Message)
                    dispatch(ActionServerData('ContactUs', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('ContactUs', false)))
    }
}
