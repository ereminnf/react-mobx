import { configure } from 'mobx';
import { useStaticRendering } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, StoreContext } from './store';
import './styles/index.scss';

configure({ enforceActions: 'observed' })

// if (process.env.SSR) {
//     useStaticRendering(true)
// }

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);