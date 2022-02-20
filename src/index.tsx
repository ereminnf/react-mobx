import { configure } from 'mobx';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/index.scss';

configure({ enforceActions: 'observed' })

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);