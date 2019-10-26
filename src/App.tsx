import React from 'react';
import logo from './logo.svg';
import { CountStore } from './stores/Auth.store';

import { Provider } from 'mobx-react';
import CounterComponent from './components/Counter.component';
import Button from './components/Buton';

const App: React.FC = () => {
  return (
	  <Provider countStore={new CountStore()}>
		  <CounterComponent />
		  <Button />

	  </Provider>
  );
}

export default App;
