import React, { useEffect, useContext } from "react";
import ToolBar from "./components/toolbar/TootBar";
import NavBar from "./components/navbar/NavBar";
import ImageContent from "./components/imageContent/ImageContent";
import ListContent from "./components/listContent/ListContent";
import { Context } from "./context/context";
import { fetchTablesData } from './context/actions'

import "./app.css";

function App() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    fetchTablesData(dispatch)
  }, []);

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
