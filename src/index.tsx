import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import GlobalStyles from "styles/GlobalStyles";
import "./styles/GlobalStyles.ts";
import { Provider } from "shared/context/Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider>
      <GlobalStyles />
      <App />
    </Provider>
  </BrowserRouter>
);
