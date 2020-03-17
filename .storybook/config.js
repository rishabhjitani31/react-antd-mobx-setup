import { configure } from '@storybook/react';
import '../src/index.scss';
// automatically import all files ending in *.stories.js
const req = require.context('../src/Components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
