import { FormsDetails } from "../model/forms.model";
import { AppState } from "./app-state";
import * as ApplicationActions from './application.action';

const initialApplication: FormsDetails = {
    accountType: '',
    product: '',
    productType: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNo: 0,
    email: '',
}

const initialState: AppState = {
    applicationDetails: initialApplication,
}

export function applicationReducer(state = initialApplication, action: ApplicationActions.applicationActions) {
    switch (action.type) {
        case ApplicationActions.SET_APPLICATION: {
            return action.payload;
        }
        case ApplicationActions.REMOVE_APPLICATION: {
            return {};
        }
        default:
            return state;
    }
}