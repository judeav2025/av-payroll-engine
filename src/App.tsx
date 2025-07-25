import "./App.css";
import { Button } from "@av/components/ui/Button";
import { ConfigProvider } from "antd";

function App() {
  const theme = {
    token: {
      colorPrimary: "#ff4d4f",
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <h1>Payroll</h1>
      <div className="card">
        <Button> Button in Payroll </Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
