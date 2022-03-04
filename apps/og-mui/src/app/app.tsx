import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
  ButtonStyles,
  cssBaseline,
  useTheme as OgUseTheme,
} from '@opensesame/gemini';
import { AppBar, Button } from '@mui/material';

const ogTheme = OgUseTheme() as any;

const buttonStyles = ButtonStyles(OgUseTheme()) as any;

delete buttonStyles.root.backgroundColor;
delete buttonStyles.root.color;
delete buttonStyles.root['&:hover'];

ogTheme.components = {
  MuiButton: {
    styleOverrides: {
      root: buttonStyles.root,
    },
  },
};

delete ogTheme.spacing;

const theme = createTheme(ogTheme);

const AppBarPrimary = styled(AppBar)({
  padding: theme.spacing(3),
});

const AppWrapper = styled('div')({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(10),
});

cssBaseline();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <AppBarPrimary>Gemini for React</AppBarPrimary>
        <div>
          <Button variant="contained">Primary contained</Button>
          <Button variant="outlined">Primary outlined</Button>
        </div>
        <div>
          <Button color="secondary" variant="contained">
            Secondary contained
          </Button>
          <Button color="secondary" variant="outlined">
            Secondary outlined
          </Button>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
