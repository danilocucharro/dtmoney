import { Dashboard } from "./components/Dashboard/";
import { Header } from "./components/Header";
import { Content } from "./components/Header/styles";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}
