import { Avatar, List } from 'antd';
import React from 'react'
import { chatData } from '../data/dummy';

const Chats = () => {
  return (
    <div>
      <List
                itemLayout="horizontal"
                dataSource={chatData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar size={50} src={item.image} />}
                            title={item.message}
                            description={item.desc}
                        />
                        <span>{item.time}</span>
                    </List.Item>
                )}
            />
    </div>
  )
}

export default Chats