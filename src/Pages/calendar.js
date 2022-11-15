import { CalendarOutlined, DashboardFilled } from '@ant-design/icons';
import { Badge, Button, Calendar, DatePicker, Form, Input, Modal, Tag } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'
import { scheduleData } from '../data/dummy';



const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateValue, setDateValue] = useState(() => moment('2017-01-25'));
  const [value, setValue] = useState(() => moment('2017-01-25'));
  const [form] = Form.useForm();



  const r = []
  const onSelect = (value) => {
    setValue(value)
    setDateValue(value)
    setIsModalOpen(true)



  }

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const dateCellRender = (value) => {

    //  console.log(new Date(scheduleData[0].StartTime).getFullYear())
    return (
      <ul className="events">
        {scheduleData.map((item, index) => {
          if (new Date(item.StartTime).getDate() === new Date(value).getDate())
            return (
              <li key={index}>
                <Tag color={item.CategoryColor}>{item.Subject}</Tag>
              </li>
            )
        })}
      </ul>
    );
  };

  const onFinish = (values) => {
    scheduleData.push({ ...values, StartTime: dateValue, CategoryColor: '#357cd2' })
    form.setFieldsValue({
      Subject: ''
    })
    setIsModalOpen(false)
  };


  return (
    <div>

      <Calendar value={value} dateCellRender={dateCellRender} onSelect={onSelect} onPanelChange={onPanelChange} />
      <Modal open={isModalOpen} onOk={onFinish}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="Subject"
            label="Subject"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
          >
            {/* <Input size="small" value={`${dateValue?.format('YYYY-MM-DD')}`} prefix={<CalendarOutlined />} disabled /> */}
            {/* <DatePicker defaultValue={moment(dateValue, 'YYYY-MM-DD')} disabled /> */}
            {dateValue?.format('YYYY-MM-DD')}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>

        </Form>

      </Modal>

    </div>
  )
}

export default CalendarPage