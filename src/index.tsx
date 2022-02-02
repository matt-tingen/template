import { assert } from '@matt-tingen/util';
import { render } from 'react-dom';
import { Root } from './Root';

const root = document.getElementById('root');

assert(root, 'root element not found');

render(<Root />, root);
