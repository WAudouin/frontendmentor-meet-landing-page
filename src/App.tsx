import "./App.css";
import Button from "./components/Button";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <Button leftText="Download" rightText="v1.3" variant="blue" />
      <Button leftText="Download" rightText="v1.3" variant="purple" />
      <Logo />
    </div>
  );
}

export default App;
