import "./App.css";
import Button from "./components/Button";
import Logo from "./components/Logo";
import NumberIndicator from "./components/Number";

function App() {
  return (
    <main>
      <Button leftText="Download" rightText="v1.3" variant="blue" />
      <Button leftText="Download" rightText="v1.3" variant="purple" />
      <NumberIndicator number="01" />
      <Logo />
    </main>
  );
}

export default App;
