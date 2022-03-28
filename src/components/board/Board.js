import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import TweetCard from "../tweetCard/TweetCard";
import { Droppable } from "react-beautiful-dnd";
import { useStyles } from "./boardStyles";

const Board = ({ tweets, savedTweets }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.tweetsList}>
        <Droppable droppableId="TweetsList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tweets &&
                tweets.map((el, index) => {
                  return (
                    <TweetCard
                      index={index}
                      id={el.id}
                      key={el.id}
                      date={el.created_at}
                      text={el.text}
                    />
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div className={classes.savedTweetsList}>
        <div className={classes.title}>
          <Typography variant="h5" color="textSecondary" component="p">
            Drag here to save
          </Typography>
        </div>
        <Droppable droppableId="savedTweetsList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {savedTweets &&
                savedTweets.map((el, index) => {
                  return (
                    <TweetCard
                      index={index}
                      id={el.id}
                      key={el.id}
                      date={el.created_at}
                      text={el.text}
                    />
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

Board.propTypes = {
  savedTweets: PropTypes.arrayOf(PropTypes.object).isRequired,
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Board;
