import * as React from 'react';
import { MyContextProvider } from './src/Context';
import Nav from './nav.routes';

export default function App() {

  return (
    <MyContextProvider>
      <Nav />
    </MyContextProvider>
  );
}
