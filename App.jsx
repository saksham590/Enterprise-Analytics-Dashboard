import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import { AppTheme } from './theme';
import { AppRouter } from './router';

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  );
};

export default App;
