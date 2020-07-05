import React, {useReducer} from 'react';
import {View, Button, StyleSheet} from 'react-native';

const INCREMENT_AMOUNT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload === 255 ||
        state.red + action.payload === 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload === 255 ||
        state.green + action.payload === 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload === 255 ||
        state.blue + action.payload === 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const App = () => {
  const [{red, green, blue}, dispatch] = useReducer(reducer, {
    red: 15,
    green: 0,
    blue: 0,
  });

  console.log(`rgb(${red},${green},${blue})`);

  return (
    <View style={styles.screen}>
      <Button
        title="Increase red"
        onPress={() =>
          dispatch({type: 'change_red', payload: INCREMENT_AMOUNT})
        }
      />
      <Button
        title="Decrease red"
        onPress={() =>
          dispatch({type: 'change_red', payload: -INCREMENT_AMOUNT})
        }
      />
      <Button
        title="Increase green"
        onPress={() =>
          dispatch({type: 'change_green', payload: INCREMENT_AMOUNT})
        }
      />
      <Button
        title="Decrease green"
        onPress={() =>
          dispatch({type: 'change_green', payload: -INCREMENT_AMOUNT})
        }
      />
      <Button
        title="Increase blue"
        onPress={() =>
          dispatch({type: 'change_blue', payload: INCREMENT_AMOUNT})
        }
      />
      <Button
        title="Decrease blue"
        onPress={() =>
          dispatch({type: 'change_blue', payload: -INCREMENT_AMOUNT})
        }
      />
      <View
        style={[
          styles.circle,
          {backgroundColor: `rgb(${red},${green},${blue})`},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
});

export default App;
