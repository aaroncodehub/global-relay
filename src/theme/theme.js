
import { createTheme } from '@material-ui/core/styles';
import uiColors from './colors/uiColors';

const theme = createTheme({
  palette: {
    ...uiColors,
  },
  spacing: 8,
})

export default theme;