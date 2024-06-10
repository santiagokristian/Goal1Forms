import { Action } from "@ngrx/store";
import { FormsDetails } from "../model/forms.model";

export const SET_APPLICATION = "SET_APPLICATION";
export const REMOVE_APPLICATION = "REMOVE_APPLICATION";


export class setApplication implements Action {
    readonly type = SET_APPLICATION;
    constructor(public payload: FormsDetails) { }
}

export class resetApplication implements Action {
    readonly type = REMOVE_APPLICATION;
    constructor(){}
}

export type applicationActions = | setApplication | resetApplication