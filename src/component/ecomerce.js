import { Avatar, Badge, Button, Card, Col, List, Row, Select, Tag, Typography } from 'antd';
import React from 'react'
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData, pieChartData } from '../data/dummy';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import Doughnut from './charts/DoughnutChart';
import BarChart from './charts/BarChart';
import { useStateContext } from '../Context/ContextProvider';
import StackedChart from './charts/StackedChart';
import SparkLineChart from './charts/SparkLineChart';
import LineChart from './charts/LineChart';
import product9 from '../data/product9.jpg';



const Ecomerce = () => {
  const { currentMode } = useStateContext();
  const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'

  

  const DropDowm = () => {
    const { Option } = Select;

    return (
      <Select defaultValue={dropdownData[0].Time}>
        {dropdownData.map((item, ind) => {
          return <Option key={ind} value={item.Id}>{item.Time}</Option>
        })}
      </Select>
    )
  }

  const Lists = ({ data, header, footer }) => {

    return (
      <List

        header={header}
        footer={footer}
      >
        {data.map((item, ind) => {
          return (
            <Row key={ind} justify="space-between">
              <Col span={24}>
                <List.Item className={cb}>
                  <Col span={18}>
                    <List.Item.Meta
                      avatar={<Avatar icon={item.icon}
                        style={{
                          backgroundColor: item.iconBg,
                          color: item.iconColor
                        }}
                        shape="square"
                        size={54}
                      />}
                      title={<p className={`h6 ${cb}`}>{item.title}</p>}
                      description={<p className='text-muted'>{item.desc}</p>}
                    />
                  </Col>
                  <Col>
                    <span style={{ color: item.pcColor }}>{item.amount}</span>
                  </Col>

                </List.Item>
              </Col>
            </Row>
          )
        })}
      </List>
    )
  }



  return (
    <Row className='container'>
      <Col>
        <Row>
          <Col>
            <Row justify="space-between">
              <Col xl={6} md={8} sm={24} xs={24}>
                <Card
                  className={`rounded-4 mt-1 ${cb}`}
                  bordered={false}

                >

                  <Row justify="space-between">
                    <Col span={13}>
                      <Row>
                        <Col span={24}>
                          <p className={cb}>Earnings</p>
                        </Col>
                        <Col span={24}>
                          <h5 className={cb}>$63,448.78</h5>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Avatar size={64} style={{
                        backgroundColor: '#87d068',
                      }} icon={<BsCurrencyDollar />} />
                    </Col>
                  </Row>
                  <Row className='mt-2'>
                    <Col>
                      <Button type='primary'>Download</Button>
                    </Col>
                  </Row>

                </Card>

              </Col>

              <Col xl={17} md={15} sm={24} xs={24}>
                <Row justify="center">
                  {earningData.map((item, ind) => (
                    <Col key={ind} xl={6} md={10} sm={11} xs={11}>
                      <Card key={item.title} className={`rounded-4 m-1 ${cb}`} bordered={false}>

                        <Row>
                          <Col span={24}>
                            <Avatar size={64} style={{
                              backgroundColor: item.iconBg,
                              color: item.iconColor
                            }} icon={item.icon} />
                          </Col>
                          <Col span={24}>
                            <Row gutter={4}>
                              <Col>
                                <h6 className={cb}>{item.amount}</h6>
                              </Col>
                              <Col>
                                <span style={{ color: item.pcColor }}>{item.percentage}</span>
                              </Col>
                            </Row>


                          </Col>
                          <Col>
                            <span className={cb}>{item.title}</span>
                          </Col>
                        </Row>

                      </Card>
                    </Col>
                  ))}
                </Row>

              </Col>
            </Row>
          </Col>
        </Row>

        <Row justify='center'>
          <Col xl={24} md={20}>
            <Row justify='space-between'>
              <Col className='mt-4' xl={16} md={24}>

                <Card className={`shadow-sm rounded-4 ${cb}`} bordered={false}>
                  <Row>
                    <Col span={24}>
                      <p className='h5'> Revenue Updates </p>
                    </Col>

                    <Col xl={10} md={24} className='border-end border-dark p-4'>
                      <p className='mb-0'>
                        <span className="h5 pe-2">$93,438</span>
                        <Avatar style={{ backgroundColor: '#87d068' }} >23%</Avatar>
                      </p>
                      <p className='text-black-400 '>Budget</p>


                      <p className='mb-0'>
                        <span className="h5 pe-2">$48,487</span>
                      </p>
                      <p className='text-black-400 '>Expense</p>
                      <SparkLineChart />
                    </Col>
                    <Col xl={14} md={24} className='p-4'>

                      <StackedChart />
                    </Col>

                  </Row>
                </Card>
              </Col>
              <Col xl={7} md={24} sm={24}>
                <Row justify="space-between">
                  <Col xl={24} md={11} sm={11} xs={24} className='mt-4'>
                    <Card bodyStyle={{ backgroundColor: '#4d94ff', borderRadius: "17px"}}
                      className="shadow-sm bg-body rounded-4"
                      bordered={false}
                    >
                      <Row justify="space-between">
                        <Col>
                          <Typography.Title level={4}>Earnings</Typography.Title>
                        </Col>
                        <Col>
                          <Typography.Title className='m-0' level={4}>$63,448.78</Typography.Title>
                          <Typography.Text>Monthly revenue</Typography.Text>
                        </Col>
                      </Row>
                      <BarChart data={SparklineAreaData} />
                    </Card>
                  </Col>
                  <Col className='mt-4' xl={24} md={11} sm={11} xs={24}>
                    <Card className={`rounded-4 h-100 ${cb}`}
                      bordered={false}
                    >
                      <Row>
                        <Col span={12}>
                          <Typography.Title className={`m-0 ${cb}`} level={3}>$43,246</Typography.Title>
                          <Typography.Text className={cb}>Yearly sales</Typography.Text>
                        </Col>
                        <Col span={12}>
                          <Doughnut data={ecomPieChartData} />
                        </Col>
                      </Row>

                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row>

        <Row justify='center'>
          <Col xl={24} md={20}>
            <Row justify="space-between">
              <Col className='mt-4' xl={10} md={24} sm={24} xs={24}>
                <Card className={`rounded-4 ${cb}`} bordered={false}>

                  <Lists data={recentTransactions}
                    header={
                      <Row justify="space-between">
                        <Col>
                          <p className={`h4 ${cb}`}>Recent Transactions</p>
                        </Col>
                        <Col>
                          <DropDowm />
                        </Col>
                      </Row>
                    }
                    footer={
                      <Row justify="space-between">
                        <Col>
                          <Button type='primary'>Add</Button>
                        </Col>
                        <Col>
                          <p className='fs-6 text-muted'>36 Recent Transactions</p>
                        </Col>
                      </Row>
                    }
                  />

                </Card>
              </Col>
              <Col className='mt-4' xl={13} md={24} xs={24} >
                <Card className={`shadow-sm rounded-4 h-100 ${cb}`} bordered={false}>
                  <Row>
                    <Col span={24}>
                      <Row justify="space-between">
                        <Col>
                          <p className={`h4 ${cb}`}>Sales Overview</p>
                        </Col>
                        <Col>
                          <DropDowm />
                        </Col>
                      </Row>
                      <Row className='mt-5'>
                        <Col span={24}>
                          <LineChart />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row justify='center'>
          <Col xl={24} md={20}>
            <Row justify="space-between" gutter={3}>
              <Col className='mt-4' xl={7} md={12} sm={24} xs={24}>
                <Card className={`shadow-sm rounded-4 ${cb}`} bordered={false}>
                  <Lists data={weeklyStats}
                    header={
                      <Row justify="space-between">
                        <Col>
                          <p className={`h4 ${cb}`}>Weekly Stats</p>
                        </Col>
                        <Col>
                          <i type="button" className="text-muted">
                            <IoIosMore />
                          </i>
                        </Col>
                      </Row>
                    }
                    footer={
                      <Row>
                        <Col>
                          <SparkLineChart />
                        </Col>
                      </Row>
                    }
                  />
                </Card>
              </Col>

              <Col xl={7} md={12} sm={24} xs={24} className='mt-4'>
                <Card className={`shadow-sm rounded-4 h-100 ${cb}`} bordered={false}>
                  <Row align='middle'>
                    <Col span={24}>
                      <Row justify="space-between">
                        <Col>
                          <p className={`h4 ${cb}`}>MedicalPro Branding</p>
                        </Col>
                        <Col>
                          <i type="button" className="text-muted">
                            <IoIosMore />
                          </i>
                        </Col>
                      </Row>
                    </Col>
                    <Col className='mt-4' span={24}>
                      <Tag color="#f50">16 APR, 2021</Tag>
                    </Col>
                    <Col span={24} className='mt-3 mb-2 border-bottom border-gray'>
                      <Row>
                        {medicalproBranding.data.map((item, ind) => (
                          <Col key={ind} className='p-2 border-end border-gray'>
                            <p className='text-muted m-0'>{item.title}</p>
                            <p className='m-0'>{item.desc}</p>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                    <Col span={24}>
                      <p className={`h5 ${cb}`}>Teams</p>
                    </Col>
                    <Col span={24} className='p-2 ps-0 mb-2 border-bottom border-gray'>
                      <Row>
                        {medicalproBranding.teams.map((item, ind) => (
                          <Col key={ind}><Tag color={item.color}>{item.name}</Tag></Col>
                        ))}
                      </Row>
                    </Col>
                    <Col span={24}>
                      <p className={`h5 ${cb}`}>Leaders</p>
                    </Col>
                    <Col span={24} className='p-2 ps-0 mb-2 border-bottom border-gray'>
                      <Row className='mb-3'>
                        {medicalproBranding.leaders.map((item, ind) => (
                          <Avatar key={ind} className='me-2' src={item.image}></Avatar>
                        ))}
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between">
                        <Col>
                          <Button type='primary'>Add</Button>
                        </Col>
                        <Col>
                          <p className='fs-6 text-muted'>36 Recent Transactions</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className='mt-4' xl={7} md={12} sm={24} xs={24}>
                <Card className={`shadow-sm rounded-4 h-100 ${cb}`} bordered={false}>
                  <Row>
                    <Col span={24}>
                      <Row justify="space-between">
                        <Col>
                          <p className={`h4 ${cb}`}>Daily Activities</p>
                        </Col>
                        <Col>
                          <i type="button" className="text-muted">
                            <IoIosMore />
                          </i>
                        </Col>
                      </Row>
                    </Col>
                    <Col className='mt-3' span={24}>
                      <img className='w-100' src={product9} />
                    </Col>
                    <Col className='mt-3' span={24}>
                      <p className={`h5 m-0 ${cb}`}>React 18 coming soon!</p>
                      <p className='fs-5 mb-5 text-muted'>By Johnathan Doe</p>
                      <p className='text-muted'>This will be the small description for the
                        news you have shown here. There could be some great info.
                      </p>
                      <Button type='primary'>Read More</Button>
                    </Col>
                  </Row>
                </Card>
              </Col>


            </Row>

          </Col>
        </Row>



      </Col>
    </Row>
  )
}

export default Ecomerce