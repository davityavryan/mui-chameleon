import { useState, useEffect } from 'react';

type MapState<S, MS> = (state: S) => MS;
type MapActions<A, MA> = (actions: A) => MA;

type Listener<S, MS = S> = {
    oldState: MS;
    run: (state: S) => void;
};

export type Store<S, A, MS = S> = {
    state: S;
    actions: OmitFirstArgOfObj<A>;
    setState: (newState: S) => void;
    listeners: Listener<S, MS>[];
};

// This needs to be any, otherwise extends will result in false
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OmitFirstArg<A> = A extends (_store: any, ...args: infer Args) => infer R ? (...args: Args) => R : never;

export type OmitFirstArgOfObj<A> = {
    [key in keyof A]: OmitFirstArg<A[key]>;
};

export type AfterUpdateCallback<S> = (newState: S) => void;

function associateActions<S, A>(store: Store<S, A>, actions: A) {
    return Object.fromEntries(
        Object.entries(actions).map(([actionKey, action]) => [
            actionKey,
            (...args: unknown[]) => action(store, ...args),
        ])
    ) as OmitFirstArgOfObj<A>;
}

function setState<S, A>(store: Store<S, A>, newState: S, afterUpdateCallback?: AfterUpdateCallback<S>) {
    store.state = { ...store.state, ...newState };

    store.listeners.forEach((listener) => {
        listener.run(store.state);
    });

    if (typeof afterUpdateCallback === 'function') {
        afterUpdateCallback(store.state);
    }
}

function useStore<S, A, MS = S, MA = OmitFirstArgOfObj<A>>(
    store: Store<S, A, MS>,
    mapState?: MapState<S, MS>,
    mapActions?: MapActions<OmitFirstArgOfObj<A>, MA>
): [MS, MA] {
    const state = mapState ? mapState(store.state) : store.state;
    const actions = mapActions ? mapActions(store.actions) : store.actions;

    const originalHook = useState(state)[1];

    useEffect(() => {
        const newListener: Listener<S, MS> = {
            oldState: {} as MS, // FIXME: what?
            run: mapState
                ? (newState) => {
                      const mappedState = mapState(newState);

                      if (mappedState !== newListener.oldState) {
                          newListener.oldState = mappedState;
                          originalHook(mappedState);
                      }
                  }
                : originalHook,
        };

        store.listeners.push(newListener);

        return () => {
            store.listeners = store.listeners.filter((listener) => listener !== newListener);
        };
    }, [mapState]);

    return [state as MS, actions as MA];
}

export function makeStore<S, A>(initialState: S, actions: A) {
    // This any will be overridden below
    const store: Store<S, A, any> = {
        state: initialState,
        listeners: [],
        setState: (newState: S, afterUpdateCallback?: AfterUpdateCallback<S>) =>
            setState(store, newState, afterUpdateCallback),
        get actions() {
            return associateActions(store, actions);
        },
    };

    return <MS = S, MA = OmitFirstArgOfObj<A>>(
        mapState?: MapState<S, MS>,
        mapActions?: MapActions<OmitFirstArgOfObj<A>, MA>
    ) => useStore<S, A, MS, MA>(store as Store<S, A, MS>, mapState, mapActions);
}
