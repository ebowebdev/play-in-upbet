import React from 'react'
import ToolBar from './components/toolbar/TootBar'
import NavBar from './components/navbar/NavBar'
import ImageContent from './components/imageContent/ImageContent'
import ListContent from './components/listContent/ListContent'

import './app.css'

function App() {
  return (
    <div class="app">
      <ToolBar />
      <NavBar />
      <ImageContent />
      <ListContent />
    </div>
  );
}

export default App;
