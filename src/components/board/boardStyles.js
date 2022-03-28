import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    savedTweetsList: {
      backgroundColor: theme.palette.grey[200],
      width: '100%',
      flexGrow: 1,
      borderRadius: theme.spacing(1)
    },
    tweetsList: {
      width: '100%',
    },
    title: {
      textAlign: 'center',
      padding: theme.spacing(3)
    }
}));