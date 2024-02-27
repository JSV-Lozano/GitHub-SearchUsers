import { GeneralView } from "./view/GeneralView";
import { GitHubContextProvider } from "./Context";

function App() {
  return (
    <GitHubContextProvider>
      <section className="h-screen">
        <GeneralView />
      </section>
    </GitHubContextProvider>
  );
}

export default App;
