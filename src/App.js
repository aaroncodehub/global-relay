import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import TweetSaver from "./components/tweetSaver/TweetSaver";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TweetSaver/>
    </ThemeProvider>
  );
}

export default App;
