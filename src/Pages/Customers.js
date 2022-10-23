import { Table } from 'antd';

import React, { useState } from 'react'
import { customersData, customersGrid } from '../data/dummy';


const Customer = () => {
    const { Column } = Table;

    const dataWithKeys = customersData.map((item, index)=>{
      return {...item, key: index}
    })
    
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          Table.SELECTION_NONE,
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
    
                return true;
              });
              setSelectedRowKeys(newSelectedRowKeys);
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
    
                return false;
              });
              setSelectedRowKeys(newSelectedRowKeys);
            },
          },
        ],
      };
    
    return (
        <div className='m-3'>
            <Table
            title={() => {
              return(
                <>
                  <p className='text-muted m-0'>Page</p>
                  <h3>Customers</h3>
                </>
              )
            }}
                dataSource={dataWithKeys} 
                rowSelection={rowSelection}
                
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