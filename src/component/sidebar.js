import { Menu, Typography } from 'antd';
import { links } from '../data/dummy';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../Context/ContextProvider';

const SideBar = () => {
    const { currentMode } = useStateContext();



    return (
        <>

            <div className='w-auto'>


                <>
                
                    <Menu 
                        theme={currentMode === 'Dark' ? 'dark' : 'light '}
                        className='ps-3'
                    >
                        <Typography.Title style={{color: currentMode === 'Dark' ? 'White' : 'black'}}>OmShoppy</Typography.Title>
                        {links.map((item) => (

                            <Menu.ItemGroup key={item.title} title={item.title}

                            >
                                {item.links.map((link) => (
                                    <Menu.Item key={link.name} icon={link.icon} style={{ fontSize: '17px ', textTransform: 'capitalize' }}>
                                        <Link
                                            to={`/${link.name}`}
                                        >
                                            {link.name}
                                        </Link>

                                    </Menu.Item>

                                ))}
                            </Menu.ItemGroup>

                        ))}
                    </Menu>


                </>




            </div>

        </>
    )
}

export default SideBar