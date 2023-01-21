import React, { useReducer } from 'react';

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return {
        colors: [
          ...state.colors,
          {
            id: Date.now(),
            colorName: action.colorName,
            hexCode: action.hexCode,
          },
        ],
      };
    case 'REMOVE_COLOR':
      return {
        colors: state.colors.filter((color) => color.id !== action.id),
      };
  }
};

export default function App() {
  const [colorState, colorDispatch] = useReducer(colorReducer, { colors: [] });

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    colorBox: {
      width: 40,
      height: 40,
      borderRadius: '50%',
    },
    removeButton: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'red',
      color: 'white',
      border: 'none',
    },
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          colorDispatch({
            type: 'ADD_COLOR',
            colorName: e.target.elements.colorName.value,
            hexCode: e.target.elements.hexCode.value,
          });
          e.target.elements.colorName.value = '';
        }}
      >
        <input name="colorName" placeHolder="Name" />
        <input name="hexCode" placeHolder="Hex" />
        <button type="submit">Add</button>
      </form>
      {colorState.colors.map((item, index) => {
        return (
          <div style={styles.container}>
            <div>{item.colorName}</div>
            <div style={{ ...styles.colorBox, background: item.hexCode }}></div>
            <button
              style={styles.removeButton}
              onClick={() =>
                colorDispatch({ type: 'REMOVE_COLOR', id: item.id })
              }
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
