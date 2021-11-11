# Light stylish

- Add your css styles in js
- Nesting styles

Example with React

```jsx
import React from "react";
import { css } from "light-stylish";

const App = () => {
  const [isVisible, setVisibility] = React.useReducer((is) => !is, false);
  return (
    <div>
      <button className={buttonStyles} onClick={setVisibility}>
        Toggle
      </button>
      <div className={hiddenBlockStyles} data-visibility={isVisible}>
        Hidden block
      </div>
    </div>
  );
};

const buttonStyles = css`
  background: black;
  color: white;
  padding: 10px;
`;

const hiddenBlockStyles = css`
  display: none;
  padding: 10px;

  &[data-visibility="true"] {
    display: block;
  }
`;
```
