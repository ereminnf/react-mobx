import { observer } from 'mobx-react';
import React from 'react';
import counter from './store/counter';
import todo from './store/todo';

export type IAppProps = {

}

const App: React.FC<IAppProps> = ({ }) => {
    console.log('render');

    return (
        <div className="App">
            {counter.total} <br />
            {counter.count}
            <div>
                <button onClick={() => counter.inc()}>inc</button>
                <button onClick={() => counter.dec()}>dec</button>
            </div>
            <div>
                <button onClick={() => todo.fetch()}>fetch</button>

                {todo.todos.map(item =>
                    <div key={item.id}>
                        <input type="checkbox" checked={item.complete} onChange={() => todo.toggle(item)} />
                        {item.title}
                        <button onClick={() => todo.remove(item.id)}>remove</button>
                    </div>
                )}
            </div>
        </div>
    );
}

App.displayName = 'App'

export default observer(App);