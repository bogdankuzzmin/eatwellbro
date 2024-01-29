import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/global.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
