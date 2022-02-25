import React from "react";
import CounterStore from "./counter";
import TodoStore from "./todo";

export type Store = typeof store

export const store = {
    counter: new CounterStore(),
    todo: new TodoStore()
}

export const StoreContext = React.createContext(store)

StoreContext.displayName = 'AppStore'

export function useStore() {
    return React.useContext(StoreContext)
}