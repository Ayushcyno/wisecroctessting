import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./Routes/Routes";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css'; 


function App() {
  return (
    <>
    <MantineProvider withNormalizeCSS withGlobalStyles >
      <BrowserRouter>
        <CustomRouter />  
      </BrowserRouter>

    </MantineProvider>
    </>
  );
}

export default App;