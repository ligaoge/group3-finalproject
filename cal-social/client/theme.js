import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#00264D',
      main: '#00264D',
      dark: '#00238E',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00264D',
      main: '#00264D',
      dark: '#00264D',
      contrastText: '#000',
    },
      openTitle: '#00264D',
      protectedTitle: '#00264D',
      type: 'light'
    }
  })

  export default theme  