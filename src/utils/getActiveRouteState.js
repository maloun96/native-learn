
const getActiveRouteState = (state) => {
  if (!state) return null;
  if (state.state) return getActiveRouteState(state.state);
  return 'index' in state ? getActiveRouteState(state.routes[state.index]) : state;
};

// usage: getActiveRouteState(navigation.dangerouslyGetState())

export default getActiveRouteState;
