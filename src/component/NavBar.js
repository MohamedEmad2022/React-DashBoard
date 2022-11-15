import { Drawer, Row, Col, Switch, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context/ContextProvider';
import Cart from './Cart';
import Chats from './Chats';
import SideBar from './sidebar';
import Notification from './Notification';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CloseOutlined } from '@ant-design/icons';


const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [component, setComponent] = useState("")
    const { currentMode, setScreenSize, activeMenu, setActiveMenu, screenSize, setMode } = useStateContext();



    const drawer = () => {
        const cb = currentMode === 'Dark' ? 'text-bg-#001529' : 'text-bg-light'

        const components = { Cart, Chats, Notification, SideBar }
        let renderComponent;
        if (component) {
            const SelectedComponent = components[component]
            if (SelectedComponent) {
                renderComponent = <SelectedComponent />
            }
        }
        return (

            <Drawer drawerStyle={{ backgroundColor: currentMode === "Dark" ? "#001529" : "" }} placement={component ==="SideBar" ? "left" : "right"} onClose={onClose} open={open} mask={false}
                closeIcon={<CloseOutlined style={{background: '#00cc99', borderRadius: "50%", padding: "3px"}} />}
                closable={true}
                
            >
                {renderComponent}
            </Drawer>

        )
    }
    const NavButton = ({ title, customFunc, icon }) => (
        <Tooltip title={title} placement="bottom">
            <i
                style={{ fontSize: '20px', marginRight: '10px' }}
                type="button"
                onClick={() => customFunc()}


            >
                {icon}
            </i>
        </Tooltip >
    );


    const openCart = () => {
        setOpen(true);
        setComponent("Cart")

    };
    const openChats = () => {
        setOpen(true);
        setComponent("Chats")

    };
    const openNotifications = () => {
        setOpen(true);
        setComponent("Notification")

    };


    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 995) {
            setActiveMenu(true);
        } else {
            setActiveMenu(false);
        }
    }, [screenSize]);

    const onChange = (checked) => {
        if (checked) {

            setMode('Dark')
        } else {

            setMode('Light')
        }
    };

    const menuHandel = () => {
        if (screenSize < 900) {
            setOpen(true);
            setComponent("SideBar")
        }else{
            setActiveMenu(!activeMenu)
        }
    }

    return (


        <>

            <Row justify='space-between'>

                <Col>
                    <NavButton title="Menu" customFunc={menuHandel} icon={<AiOutlineMenu />} />
                    <Switch checkedChildren="Light Mode" unCheckedChildren="Dark Mode" checked={currentMode === "Dark" ? true : false} onChange={onChange} style={{ marginLeft: "10px" }} />

                </Col>
                <Col>
                    <NavButton title="Chats" customFunc={openChats} icon={<BsChatLeft />}>
                        Chats
                    </NavButton>
                    <NavButton title="Notifications" customFunc={openNotifications} icon={<RiNotification3Line />}>
                        Notification
                    </NavButton>
                    <NavButton title="Cart" customFunc={openCart} icon={<FiShoppingCart />}>
                        menu
                    </NavButton>
                </Col>
            </Row>



            {drawer()}


        </>
    )
}

export default NavBar