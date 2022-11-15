import { Button, Collapse, Popconfirm, Form, Table, Typography, Modal, Input, Select } from 'antd';
import React, { useState } from 'react'
import { kanbanData, kanbanGrid } from '../data/dummy';


const dataWithKeys = kanbanData.map((item, index) => {
  return {
    ...item,
    key: index,

  }
})

const Kanban = () => {
  const [data, setData] = useState(dataWithKeys)
  const [editingKey, setEditingKey] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();



  const render = (_, record) => {
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
  }

  const datasource = kanbanGrid.map((item, index) => (



    <Collapse key={index} defaultActiveKey={0}>
      <Collapse.Panel header={item.headerText} key={index}>
        <Table key={index} dataSource={data.filter(it => it.Status === item.keyField)}>
          <Table.Column title={item.headerText} dataIndex={item.Summary} />
          <Table.Column title='Actions' dataIndex='Actions' render={render} />
        </Table>
      </Collapse.Panel>
    </Collapse>
  )

  )

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      Status: '',
      Summary: '',
      ...record,
    });
    setIsModalOpen(true)
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey("");
  }

const handleCancel =()=>{
  setIsModalOpen(false)
  setEditingKey("");
}

const SelectMenue = ()=>{
  const { Option } = Select;
  let opt = []
  const options = kanbanGrid.map((item, index)=>{
    
    return item.keyField

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

const save = (values) => {

  const newData = [...data];

  newData.splice(editingKey, 1, { ...values, key: editingKey });
  setData(newData);
  setEditingKey('');
  setIsModalOpen(false)
  

};

  return (
    <>
      <div>
        {datasource}
      </div>
      <Modal title="Basic Modal" open={isModalOpen}  onCancel={handleCancel} footer={null}>
        <Form form={form} onFinish={save}>
        <Form.Item
            name="Summary"
            label="Summary"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Status"
            label="Status"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <SelectMenue />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </>
  )
}

export default Kanban