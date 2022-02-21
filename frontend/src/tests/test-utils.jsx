import { render } from '@testing-library/react';
import { initialState as filesState } from "../store/files";
import { initialState as filemanagerState } from "../store/filemanager";
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const Providers = ({children}) => {
    const initialState = {
        files: filesState,
        filemanager: filemanagerState
    };
    const store = configureMockStore([thunk])(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
