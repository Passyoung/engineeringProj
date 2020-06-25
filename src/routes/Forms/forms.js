import React from 'react'
import {Carousel,Table} from 'antd'
import './style.css'

const columns = [
    {
        title: '房号',
        dataIndex: 'number',
        key: 'number',
        render: text => <a>{text}</a>,
    },
    {
        title: '开关次数',
        dataIndex: 'num_of_on_and_off',
        key: 'num_of_on_and_off',
        render: text => <a>{text}</a>,
    },
    {
        title: '使用时长',
        dataIndex: 'use_span',
        key: 'use_span',
        render: text => <a>{text}</a>,
    },
    {
        title: '总费用',
        dataIndex: 'total_account',
        key: 'total_account',
        render: text => <a>{text}</a>,
    },
    {
        title: '调度次数',
        dataIndex: 'manage_time',
        key: 'manage_time',
        render: text => <a>{text}</a>,
    },
    {
        title: '详单数',
        dataIndex: 'bill_num',
        key: 'bill_num',
        render: text => <a>{text}</a>,
    },
    {
        title: '调温次数',
        dataIndex: 'tempture_time',
        key: 'tempture_time',
        render: text => <a>{text}</a>,
    },
    {
        title: '调风次数',
        dataIndex: 'wind_time',
        key: 'wind_time',
        render: text => <a>{text}</a>,
    },



];

const data = [
    {

        number: '3201',
        num_of_on_and_off:10,
        use_span:10,
        total_account:50,
        manage_time:5,
        bill_num:10,
        tempture_time:5,
        wind_time:5,

    },
    {

        number: '3202',
        num_of_on_and_off:10,
        use_span:10,
        total_account:50,
        manage_time:5,
        bill_num:10,
        temperature_time:5,
        wind_time:5,
    },
    {

        number: '3203',
        num_of_on_and_off:11,
        use_span:15,
        total_account:58,
        manage_time:5,
        bill_num:10,
        tempture_time:5,
        wind_time:5,
    },
];


class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        <Carousel arrows effect='fade' className='size'>
            <Table columns={columns} dataSource={data} />
        </Carousel>
      </div>
    )
  }
}

const styles = {
  bg:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'calc(100vh - 64px)'
  }
}

export default Home