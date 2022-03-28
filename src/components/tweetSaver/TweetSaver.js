import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { selectTweet,selectSavedTweet, setTweets, setSavedTweets } from "../../redux/tweetSlice";
import LayoutContainer from "../layout/LayoutContainer";
import TweetSearch from "../tweetSearch/TweetSearch";
import { useStyles } from "./tweetSaverStyles";
import { Divider, Typography } from "@material-ui/core";
import Board from "../board/Board";

const TweetSaver = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweet);
  const savedTweets = useSelector(selectSavedTweet);



  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = [...tweets];
    let save = [...savedTweets];
   
    // Source Logic
    if (source.droppableId === "TweetsList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = save[source.index];
      save.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TweetsList") {
      active.splice(destination.index, 0, add);
    } else {
      save.splice(destination.index, 0, add);
    }

    dispatch(setSavedTweets(save))
    dispatch(setTweets(active))

  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.board}>
        <LayoutContainer>
          <div className={classes.title}>
            <Typography variant="h4">Tweet Saver</Typography>
            <Divider />
          </div>
          <div className={classes.root}>
            <TweetSearch />
            <Board tweets={tweets} savedTweets={savedTweets}/>
          </div>
        </LayoutContainer>
      </div>
    </DragDropContext>
  );
};

export default TweetSaver;
