import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import TweetSearch from "../tweetSearch/TweetSearch";

describe('Testing search', () => {

    test('renders search', () => {
      render(
          <Provider store={store}>
              <TweetSearch />
          </Provider>
      )
        expect(screen.getByPlaceholderText(/Search Twitter/i)).toBeInTheDocument()
    });
});
