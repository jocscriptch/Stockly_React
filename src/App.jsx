import styled, { ThemeProvider } from 'styled-components';
import { AuthContextProvider, MyRoutes, Light, Dark, Sidebar } from './index'
import { createContext, useState } from 'react';
import { Device } from './styles/breakpoints';

export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState('dark');
  const theme = themeuse === 'light' ? 'light' : 'dark';
  const themeStyle = theme === 'light' ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ themeuse, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container className={sidebarOpen ? "active" : ""}>
              <section className='SidebarContent'>
                <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
              </section>
              <section className='MenuContent'>Menu</section>
              <section className='RoutesContent'>
                <MyRoutes />
              </section>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${(props) => props.theme.bgtotal}; 
  .SidebarContent{
    display: none;
  }
  .MenuContent{
    display: block;
    position: absolute;
    left: 20px;
  }

@media ${Device.tablet} {
  grid-template-columns: 65px 1fr;
  &.active{
    grid-template-columns: 220px 1fr;
  }
  .SidebarContent{
    display: initial;
  }
  .MenuContent{
    display: none;
  }
}
 .RoutesContent{
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2; 
  }
 }
`;

export default App;
