import { Avatar, List, Menu } from 'antd'
import React from 'react'
import { useStateContext } from '../Context/ContextProvider';
import { cartData } from '../data/dummy';

const Cart = () => {
    const {currentMode} = useStateContext()
  const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={cartData}
                renderItem={(item, ind) => (
                    <List.Item key={ind}>
                        <List.Item.Meta
                            avatar={<Avatar size={100} src={item.image} />}
                            title={<p style={{color: 'rgb(94 126 139)'}}>{item.name}</p>}
                            description={<p className='text-muted'>{item.category}</p>}
                        />
                        <p style={{color: 'rgb(94 126 139)'}}>{item.price}</p>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Cart