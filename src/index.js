import React from 'react';
import { render } from "react-dom";
import { TextInput } from "./lib";
import './stylesheets/app.css'


const App = () => (
    <TextInput positionValue="topright" notifyType="success" message="hello" autoClose="3000" />
);

render(<App />, document.getElementById("root"));