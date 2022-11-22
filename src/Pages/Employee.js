import { Button, Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';

import React, { useState } from 'react'
import { employeesData, employeesGrid } from '../data/dummy';




const dataWithKeys = employeesData.map((item, index) => {
    return {
      ...item,
      key: index.toString(),
  
    }
  })

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };


const Employees = () => {
    const [form] = Form.useForm();
  const [data, setData] = useState(dataWithKeys);
  const [editingKey, setEditingKey] = useState('')
  const [searchText, setSearchText] = useState('')

    const { Column } = Table;
    
    const employeesGridWithEditable = employeesGrid.map((item, index) => {
        
            return {
          title: item.headerText,
          dataIndex: item.field,
          editable: true,
          key: index,
          render: item.template,
          sorter: item.sorting,
          filteredValue: [searchText],
          onFilter: item.onFilter
        }
        
        
      })

      const isEditing = (record) => record.key === editingKey;

      const colm = [
        ...employeesGridWithEditable,

        {
          title: 'operation',
          dataIndex: 'operation',
          render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
              <span>
                <Button type='link' htmlType='submit'>Save</Button>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Edit
              </Typography.Link>
            );
          },
        },
      
        ]

        const edit = (record) => {
            form.setFieldsValue({
                Title: '',
                Country: '',
                HireDate: '',
                ReportsTo: '',
                EmployeeID: '',
                ...record,
              });
            
            setEditingKey(record.key);
            
          };


          const cancel = () => {
            setEditingKey('');
          };

          const save = (values) => {

            const newData = [...data];
        
            newData.splice(editingKey, 1, { EmployeeImage: data[editingKey].EmployeeImage,...values, key: editingKey });
            setData(newData);
            setEditingKey('');
        
          };

          const mergedColumns = colm.map((col) => {
            if (!col.editable) {
              return col;
            }
            
            return {
              ...col,
              onCell: (record) => ({
                record,
                inputType: col.inputType,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
                
              }),
            };
          });


          const onSearch = (value) => {
  
            const filtering = data.filter(item => item.Name.includes(value.charAt(0).toUpperCase() + value.slice(1)))
            
            setData(filtering.length > 0 ? filtering : dataWithKeys)
            
          };

        
    
    return (
        <div className='m-3'>
            <Form form={form} onFinish={save}>
            <Table
            title={() => {
                return(
                  <>
                    <p className='text-muted m-0'>Page</p>
                    <h3>Employees</h3>
                    <Input.Search placeholder='Search' onSearch={onSearch} />
                  </>
                )
              }}
              columns={mergedColumns}
                dataSource={data}
                components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  scroll={{
                    x: "auto",
                  }}


                  expandable={{
                    showExpandColumn: true
                  }}
              
            >
                
            </Table>
            </Form>
        </div>
    )
}






export default Employees