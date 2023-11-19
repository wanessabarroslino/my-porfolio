import React from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Wanessa Barros Lino</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
