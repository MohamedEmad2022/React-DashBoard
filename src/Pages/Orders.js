import { Button, Form, Input, InputNumber, Popconfirm, Select, Table, Typography } from 'antd';

import React, { useState } from 'react'
import { ordersData, ordersGrid } from '../data/dummy';



const dataWithKeys = ordersData.map((item, index) => {
  return {
    ...item,
    key: index.toString(),

  }
})
const SelectMenue = ()=>{
  const { Option } = Select;
  let opt = []
  const options = ordersData.map((item, index)=>{
    
    return item.OrderItems

  }).filter(it => {
    return opt.includes(it) ? "" : opt.push(it)
  })
  
  return(
    <Select>
      {opt.map((item, index)=>{
       return <Option value={item} key={index}>{item}</Option>
      })}
    </Select>
  )

}

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
  const inputNode = inputType === 'number' ? <InputNumber /> : inputType === "select" ? <SelectMenue /> : <Input />;
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

const Orders = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(dataWithKeys);
  const [editingKey, setEditingKey] = useState('')

  const ordersGridWithEditable = ordersGrid.map((item, index) => {
    return {
      title: item.headerText,
      dataIndex: item.field,
      editable: item.headerText === "Image" ? false : true,
      key: index,
      inputType: item.editType,
      render: item.template,
      sorter: item.sorting
    }
  })




  const isEditing = (record) => record.key === editingKey;




  const colm = [...ordersGridWithEditable,

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
      CustomerName: '',
      Location: '',
      OrderItems: '',
      Status: '',
      TotalAmount: '',
      ...record,
    });
    setEditingKey(record.key);
    
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = (values) => {

    const newData = [...data];

    newData.splice(editingKey, 1, { ProductImage: data[editingKey].ProductImage,...values, key: editingKey });
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
        inputType: col.inputType === 'numericedit' ? 'number' : col.inputType === 'dropdownedit' ? 'select' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),

      }),
    };
  });

  return (
    <div className='m-3'>
      <Form form={form} onFinish={save}>
        <Table
        
        title={() => {
          return(
            <>
              <p className='text-muted m-0'>Page</p>
              <h3>Orders</h3>
            </>
          )
        }}
          columns={mergedColumns}
          dataSource={data}
          showSorterTooltip={false}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          scroll={{
            x: "auto",
          }}
      
        />


      </Form>
    </div>
  )
}






export default Orders