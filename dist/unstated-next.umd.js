(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.UnstatedNext = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

	exports.createContainer = createContainer;
	exports.useContainer = useContainer;

})));
//# sourceMappingURL=unstated-next.umd.js.map
