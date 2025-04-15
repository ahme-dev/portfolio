/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root");

render(() => <App />, root!);
