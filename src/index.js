import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';

render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById('root')
);
