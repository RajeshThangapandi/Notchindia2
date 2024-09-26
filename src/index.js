import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);