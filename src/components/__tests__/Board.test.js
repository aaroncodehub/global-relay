import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import store from "../../redux/store";
import Board from "../board/Board";

describe("Testing Board", () => {
  test("renders Board", () => {
    render(
      <Provider store={store}>
        <DragDropContext>
          <Board savedTweets={[]} tweets={[]} />
        </DragDropContext>
      </Provider>
    );
    expect(screen.getByText(/Drag here to save/i)).toBeInTheDocument();
  });
});
