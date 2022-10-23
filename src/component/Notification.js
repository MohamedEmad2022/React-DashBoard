import React from 'react'
import { Avatar, List } from 'antd';
import { chatData } from '../data/dummy';
import { useStateContext } from '../Context/ContextProvider';

const Notification = () => {

  const {currentMode} = useStateContext()
  const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
  return (
    <div>
        <List
                itemLayout="horizontal"
                dataSource={chatData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar size={50} src={item.image} />}
                            title={<p className={`h6 ${cb}`}>{item.message}</p>}
                            description={<p className='text-muted'>{item.desc}</p>}
                        />
                        
                    </List.Item>
                )}
            />
    </div>
  )
}

export default Notification