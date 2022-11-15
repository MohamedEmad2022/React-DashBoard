import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidbar from './component/sidebar';
import NavBar from './component/NavBar';
import Ecomerce from './component/ecomerce';
import { useStateContext } from './Context/ContextProvider';
import { useEffect, useState } from 'react';
import { Col, Layout, Row } from 'antd';
import Orders from './Pages/Orders';
import Employee from './Pages/Employee';
import Customer from './Pages/Customers';
import CalendarPage from './Pages/calendar';
import LineChart from './Pages/charts/lineChart';
import AreaChart from './Pages/charts/areaChart';
import BarChartPage from './Pages/charts/BarChartPage';
import PieChartPage from './Pages/charts/PieChartPage';
import FinancialPage from './Pages/charts/FinancialPage';
import ColorMaping from './Pages/charts/ColorMaping';
import StackedChartPage from './Pages/charts/stackedChartPage';
import Kanban from './Pages/Kanban';

function App() {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, screenSize } = useStateContext();
  const { Header, Footer, Sider, Content } = Layout;

  useEffect(() => {

    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={` ${currentMode === 'Dark' ? 'dark' : ''}`}>
      <Layout className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
        <BrowserRouter>

          <Sider
            collapsible={true}
            collapsed={activeMenu}
            trigger={null}
            collapsedWidth={0}
            width={300}

            style={{
              overflow: 'auto',
              height: '100vh',
              position: "fixed",
              zIndex: '100',
              left: 0,
              top: 0,
              bottom: 0,

            }}
          >
            <Sidbar />
          </Sider>
          <Layout
            style={{ marginLeft: activeMenu ? "0px" : "300px" }}
          >
            <Header
              className={`${currentMode === 'Dark' ? 'dark' : 'bg-transparent'}`}

            >
              <NavBar />
            </Header>


            <Content
              className={`pt-4 ${currentMode === 'Dark' ? 'dark' : ''}`}
            >
              <Row justify='center'>
                <Col span={23}>
                  <Routes>

                    <Route path="/" element={(<Ecomerce />)} />
                    <Route path="/ecommerce" element={(<Ecomerce />)} />
                    <Route path="/orders" element={(<Orders />)} />
                    <Route path="/employees" element={(<Employee />)} />
                    <Route path="/customers" element={(<Customer />)} />
                    <Route path="/calendar" element={(<CalendarPage />)} />
                    <Route path="/line" element={(<LineChart />)} />
                    <Route path="/area" element={(<AreaChart />)} />
                    <Route path="/bar" element={(<BarChartPage />)} />
                    <Route path="/pie" element={(<PieChartPage />)} />
                    <Route path="/financial" element={(<FinancialPage />)} />
                    <Route path="/color-mapping" element={(<ColorMaping />)} />
                    <Route path="/stacked" element={(<StackedChartPage />)} />
                    <Route path="/Kanban" element={(<Kanban />)} />

                  </Routes>
                </Col>
              </Row>


            </Content>
            <Footer
              className={`${currentMode === 'Dark' ? 'dark' : ''}`}
              style={{
                paddingTop: '30px',
                textAlign: 'center',
              }}
              >
              © 2022 All rights reserved by OmShoppy.com
            </Footer>
          </Layout>

        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
