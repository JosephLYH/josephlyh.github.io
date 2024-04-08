import { render } from 'react-dom'
import { ThemeProvider } from './contexts/theme'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
