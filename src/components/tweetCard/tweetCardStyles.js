import { makeStyles } from '@material-ui/core/styles';
  export const useStyles =  makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: theme.spacing(1),
    },
    image: {
        height: '60px',
        width: '70px'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flexGrow: 1
    },
    card: {
      marginBottom: theme.spacing(1)
    }
  }))