import { SET_DATA, CLEAR_DATA } from './actionTypes';

interface ISetData {
    type: typeof SET_DATA;
}
interface IClearData {
    type: typeof CLEAR_DATA;
}
export type DataActionsTypes = ISetData | IClearData;

export interface DataState {
    test: string;
}
