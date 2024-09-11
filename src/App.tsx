import { BrowserRouter } from "react-router-dom";
import ToastMessage from "./components/toast/ToastMessage";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <BrowserRouter>
        <ToastMessage />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
