import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LayoutContainer from "../layout/LayoutContainer";
import { Draggable } from "react-beautiful-dnd";
import { useStyles } from "./tweetCardStyles";

const TweetCard = ({ date, text, fullName, id, index }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <LayoutContainer>
            <Card className={classes.card}>
              <div className={classes.root}>
                <CardMedia
                  className={classes.image}
                  component="img"
                  alt="profile image"
                  image="https://www.saydaily.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_410/MTM0ODg3OTkwOTMyNTc1NTA2/screen-shot-2015-12-03-at-22820-pmpng.webp"
                  title="profile image"
                />
                <CardContent className={classes.content}>
                  <div className={classes.title}>
                    <Typography variant="h6" component="h2">
                      {fullName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {date.slice(0, 10)}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </LayoutContainer>
        </div>
      )}
    </Draggable>
  );
};

TweetCard.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fullName: PropTypes.string,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

TweetCard.defaultProps = {
  fullName: undefined
}


export default TweetCard;
