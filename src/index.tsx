import { render } from 'react-dom';
import { Root } from './Root';
import { assert } from './util/assert';

const root = document.getElementById('root');

assert(root, 'root element not found');

render(<Root />, root);
