import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      margin: theme.spacing(1,0)
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
}));
