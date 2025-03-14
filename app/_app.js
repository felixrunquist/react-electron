import * as React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/globals.scss';

import Root from './_document.js'

const root = createRoot(document.body);
root.render(<Root/>);