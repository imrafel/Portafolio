import MainPage from "./pages/MainPage.page";
import SideBar from "./components/SideBar.component";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      dark: '#424242',
      light:'#6a1b9a'
    },
    secondary: {
      main: '#fff176',
      dark: '#6a1b9a'
    },
    action: {
      selected: 'rgba(66, 66, 66, 1)'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SideBar />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
