import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import useStore from './store/store';  // zustand 스토어를 가져옵니다.

const App = () => {
  // Zustand를 사용하여 상태 가져오기
  const { isDarkMode, toggleDarkMode, isCollapsed, toggleSidebar } = useStore();

  console.log('isDarkMode:', isDarkMode);
  console.log('isCollapsed:', isCollapsed);
  console.log('toggleDarkMode:', toggleDarkMode);
  console.log('toggleSidebar:', toggleSidebar);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <LayoutContainer>
        <Header>Header</Header>
        <Content>
          <Sidebar collapsed={isCollapsed}>
            <SidebarButton onClick={toggleSidebar}>
              {isCollapsed ? 'Expand' : 'Collapse'}
            </SidebarButton>
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
            <ThemeToggleButton onClick={toggleDarkMode}>
              Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
            </ThemeToggleButton>
          </Sidebar>
          <MainContentContainer>
            <MainContentWrapper>
              <Box>Main Content Box 1</Box>
              <Box>Main Content Box 2</Box>
            </MainContentWrapper>
            <Footer>Footer</Footer>
          </MainContentContainer>
        </Content>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default App;

const lightTheme = {
  background: '#f0f0f0',
  color: '#000',
  sidebarBg: '#444',
  headerFooterBg: '#333',
  boxBg: '#fff',
};

const darkTheme = {
  background: '#181818',
  color: '#fff',
  sidebarBg: '#222',
  headerFooterBg: '#111',
  boxBg: '#333',
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100dvw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.headerFooterBg};
  color: ${(props) => props.theme.color};
  padding: 1rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.sidebarBg};
  color: ${(props) => props.theme.color};
  width: ${(props) => (props.collapsed ? '60px' : '200px')};
  transition: width 0.3s ease;
  padding: 1rem;
`;

const SidebarButton = styled.button`
  background-color: #666;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const ThemeToggleButton = styled.button`
  background-color: ${(props) => props.theme.boxBg};
  color: ${(props) => props.theme.color};
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.boxBg};
  flex: 1;
  margin: 0 1rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.headerFooterBg};
  color: ${(props) => props.theme.color};
  padding: 1rem;
  text-align: center;
`;