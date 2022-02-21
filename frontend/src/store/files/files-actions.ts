import { Dispatch } from "redux";
import { File } from "../../types/File";
import fetchStatusErrorHandler from "../../utils/fetchStatusErrorHandler";
import transform from "../../utils/transform";

export enum ActionType {
    FETCH_START = "FILES_FETCH_START",
    FETCH_SUCCESS = "FILES_FETCH_SUCCESS",
    FETCH_ERROR = "FILES_FETCH_ERROR",
    DISCARD_ERROR = "FILES_DISCARD_ERROR"
}

const fetchStart = () => ({
    type: ActionType.FETCH_START as const
});

const fetchSuccess = (list: File[]) => ({
    type: ActionType.FETCH_SUCCESS as const,
    payload: {
        list
    }
});

const fetchError = (errorMsg: string) => ({
    type: ActionType.FETCH_ERROR as const,
    payload: {
        errorMsg
    }
});

const discardError = () => ({
    type: ActionType.DISCARD_ERROR as const
});

export const refreshFiles = () => (
    async (dispatch: Dispatch) => {
        dispatch(fetchStart());

        await fetch("/api/files")
            .then(fetchStatusErrorHandler)
            .then((list: File[]) => transform(list).into.tree)
            .then(tree => dispatch(fetchSuccess(tree)))
            .catch(err => dispatch(fetchError(err.message)));
    }
);

export type Action = ReturnType<typeof fetchStart | typeof fetchSuccess | typeof fetchError | typeof discardError>;
