import NavBar from "./components/UI/experimentUI/NavBar";
import Console from "./components/Console/Console";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import VirtualLayer from "./components/UI/experimentUI/VirtualLayer";
import { SocketContextProvider } from "./services/SocketContext";
import { AppContextProvider } from "./services/AppContext";
import ExperimentUILayer from "./components/UI/experimentUI/ExperimentUILayer";
import {PopUpContextProvider} from "./services/PopUpContext"

const App = () => {
  process.title = 'XRTLApp';
  return (
    <AppContextProvider>
      <SocketContextProvider>
          <VirtualLayer />
        <PopUpContextProvider>
          <ExperimentUILayer />
          <Console />
          <Chat />
          <NavBar />
          <Login />
        </PopUpContextProvider>
      </SocketContextProvider>
    </AppContextProvider>
  );
};

export default App;