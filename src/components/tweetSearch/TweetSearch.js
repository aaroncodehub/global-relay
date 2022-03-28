import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchTweet } from "../../redux/tweetSlice";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LayoutContainer from "../layout/LayoutContainer";
import { useStyles } from "./tweetSearchStyles";

const TweetSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [query, setQuery] = useState('covid19')

  useEffect(() => {
    dispatch(searchTweet(query))
  }, [query,dispatch])
  
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <LayoutContainer>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Twitter"
          inputProps={{ "aria-label": "search twitter" }}
          value= {query}
          onChange={handleChange}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </LayoutContainer>
  );
};

export default TweetSearch;
