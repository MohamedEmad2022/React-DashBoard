import { Avatar, List } from 'antd';
import React from 'react'
import { useStateContext } from '../Context/ContextProvider';
import { chatData } from '../data/dummy';

const Chats = () => {

  const {currentMode} = useStateContext()
  const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
  return (
    <div>
      <List
                itemLayout="horizontal"
                dataSource={chatData}
                renderItem={(item, ind) => (
                    <List.Item key={ind}>
                        <List.Item.Meta
                            avatar={<Avatar size={50} src={item.image} />}
                            title={<p style={{color: 'rgb(94 126 139)'}}>{item.message}</p>}
                            description={<p className='text-muted'>{item.desc}</p>}
                        />
                        <p style={{color: 'rgb(94 126 139)'}}>{item.time}</p>
                    </List.Item>
                )}
            />
    </div>
  )
}

export default Chats