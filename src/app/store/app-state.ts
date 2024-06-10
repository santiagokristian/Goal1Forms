import { ActionReducerMap } from "@ngrx/store";
import { FormsDetails } from "../model/forms.model";
import * as applicationRed from './application.reducer'

export interface AppState {
    applicationDetails: FormsDetails;
}
export interface AppState2{
    target?: string;
    [key: string]: any;
}

export const appReducer: ActionReducerMap<AppState2, any> = {
    applicationDetails: applicationRed.applicationReducer,
};
