import { Avatar, List, Menu } from 'antd'
import React from 'react'
import { cartData } from '../data/dummy';

const Cart = () => {
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={cartData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar size={100} src={item.image} />}
                            title={item.name}
                            description={item.category}
                        />
                        <span>{item.price}</span>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Cart