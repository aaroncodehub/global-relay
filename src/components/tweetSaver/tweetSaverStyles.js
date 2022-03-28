import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2,0)
    },
    title: {
        margin: theme.spacing(2,0)
    },
    board: {
      display: 'flex',
    }
}));