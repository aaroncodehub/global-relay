import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import TweetSaver from "../tweetSaver/TweetSaver";

describe('Testing TweetSaver', () => {

    test('renders TweetSaver', () => {
      render(
          <Provider store={store}>
              <TweetSaver />
          </Provider>
      )
        expect(screen.getByText(/Tweet Saver/i)).toBeInTheDocument()
    });
});