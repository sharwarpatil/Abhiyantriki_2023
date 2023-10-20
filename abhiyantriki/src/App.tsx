import { Suspense, lazy } from "solid-js";
import "./App.css";
import Loader from "./components/Loader";

// 1 second = 1000 milliseconds
const LOADER_DELAY = 4 * 1000;

const Content = lazy(async () => {
  await new Promise((r) => setTimeout(r, LOADER_DELAY));
  return import("./components/Content");
});

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
}

export default App;
