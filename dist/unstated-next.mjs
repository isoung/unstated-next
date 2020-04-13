import React from 'react';

function createContainer(useHook, contextOptions) {
  if ( contextOptions === void 0 ) contextOptions = {};

  var Context = React.createContext(null);

  if (contextOptions.displayName) {
    Context.displayName = contextOptions.displayName;
  }

  function Provider(props) {
    var value = useHook(props.initialState);
    return React.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = React.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}

export { createContainer, useContainer };
//# sourceMappingURL=unstated-next.mjs.map
