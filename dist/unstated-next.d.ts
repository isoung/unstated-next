import React from "react";
export interface ContainerProviderProps<State = void> {
    initialState?: State;
    children: React.ReactNode;
}
export interface Container<Value, State = void> {
    Provider: React.ComponentType<ContainerProviderProps<State>>;
    useContainer: () => Value;
}
export interface ContextOptions {
    displayName?: string;
}
export declare function createContainer<Value, State = void>(useHook: (initialState?: State) => Value, contextOptions?: ContextOptions): Container<Value, State>;
export declare function useContainer<Value, State = void>(container: Container<Value, State>): Value;
//# sourceMappingURL=unstated-next.d.ts.map