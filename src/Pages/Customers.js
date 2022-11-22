import { DeleteOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';

import React, { useState } from 'react'
import { customersData, customersGrid } from '../data/dummy';



const dataWithKeys = customersData.map((item, index)=>{
  return {...item, key: index}
})

const Customer = () => {
    const { Column } = Table;

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [data, setData] = useState(dataWithKeys)

    
    
    

    
    const onSelectChange = (newSelectedRowKeys) => {
        
        setSelectedRowKeys(newSelectedRowKeys);
        
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        
      };
      const hasSelected = selectedRowKeys.length > 0;

      const delHandeler = ()=>{
        if(hasSelected){
          const del = data.filter(item =>(
            !selectedRowKeys.includes(item.key)  
          ))
          setData(del)
        }
      }
    
    return (
        <div className='m-3'>
            <Table
            title={() => {
              return(
                <>
                  <p className='text-muted m-0'>Page</p>
                  <h3>Customers</h3>
                  <Button onClick={delHandeler} disabled={!hasSelected} icon={<DeleteOutlined />}>Delete</Button>
                </>
              )
            }}
                dataSource={data} 
                rowSelection={rowSelection}
                scroll={{
                  x: "auto",
                }}
            >
                {customersGrid.map((col, ind) => {
                    return (
                        <Column title={col.headerText} dataIndex={col.field} key={ind} render={col.template}/>
                    )
                })}
            </Table>
        </div>
    )
}






export default Customer