import { Menu } from 'antd';
import { links } from '../data/dummy';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../Context/ContextProvider';

const SideBar = () => {
    const { currentMode } = useStateContext();
    


    return (
        <>

            <div className='w-auto'>

                    {links.map((item) => (
                        <>
                            <Menu key={item.title}
                                theme={currentMode === 'Dark' ? 'dark' : 'light '}
                                className='ps-3'
                            >

                                <Menu.ItemGroup title={item.title}
                                
                                >

                                </Menu.ItemGroup>
                                {item.links.map((link) => (
                                    <Menu.Item key={link.name} icon={link.icon} style={{ fontSize: '17px ', textTransform: 'capitalize' }}>
                                        <Link
                                           to={`/${link.name}`}
                                        >
                                            {link.name}
                                        </Link>

                                    </Menu.Item>

                                ))}
                            </Menu>

                            
                        </>
                    ))}
              

           
              </div>

        </>
    )
}

export default SideBar