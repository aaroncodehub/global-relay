import { makeStyles } from '@material-ui/core/styles';
  export const useStyles =  makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up("xs")]: {
        maxWidth: "375px",
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "768px",
      },
  
      [theme.breakpoints.up("md")]: {
        maxWidth: "1152px",
      },
    },
  }))