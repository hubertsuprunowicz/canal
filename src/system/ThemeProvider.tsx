import React, {
  FC,
} from 'react';
import { globalStyles } from './system';


const ThemeProvider: FC = ({ children }) => {
  globalStyles();
  return (
    <>
      {children}
    </>
  );
};

export default ThemeProvider;
