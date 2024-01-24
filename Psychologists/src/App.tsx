import Layout from "./components/Layout/Layout";
import Routers from "./components/Routes/Routes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig/firebaseConfig.ts";
initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Layout />
      <Routers />
    </>
  );
}

export default App;
