import React from 'react';
import DragContext from './components/DragContext';
import TemplateBuilder from './components/TemplateBuilder';

const App = () => (
  <DragContext>
    <TemplateBuilder />
  </DragContext>
);

export default App;
