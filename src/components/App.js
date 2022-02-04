import react, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import UseState from "./UseState";
import UseStateArray from "./UseStateArray";
import UseStateObject from "./UseStateObject";
import FormHandling from "./FormHandling";
import { Container } from "semantic-ui-react";
import UseEffect1 from "./UseEffect1";
import WindowResizeWidth from "./WindowResizeWidth";
import UseEffectApi from "./userList/UseEffectApi";
import UncontrolledForm from "./useRef/UncontrolledForm";
import UseReducer from "./useReducer/UseReducer";
import Component1 from "./useContext/Component1";
import GalleryReact from "./DishesMenuTabs/GalleryReact";

function App() {
  return (
    <Container>
      {/* <h1 style={{ textAlign: "center" }}>React Hooks...</h1> */}
      {/* <UseState />
      <UseStateArray />
      <UseStateObject />
      <UseEffect1 />
      <WindowResizeWidth />
      <UseEffectApi />
      <UncontrolledForm />
      <FormHandling />
      <UseReducer />
      <Component1 /> */}
      <GalleryReact />
    </Container>
  );
}

export default App;
