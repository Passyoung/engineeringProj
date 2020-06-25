import {Input, Table} from 'antd';
import React from "react";
import API from "axios"
const {Search} = Input;
const columns = [
    {
        title: '房号',
        dataIndex: 'room_id',
        key: 'room_id',
        render: text => <a>{text}</a>,
    },
    {
        title: '开始送风时间',
        dataIndex: 'begin_time',
        key: 'begin_time',
        render: text => <a>{text}</a>,
    },
    {
        title: '结束送风时间',
        dataIndex: 'end_time',
        key: 'end_time',
        render: text => <a>{text}</a>,
    },
    {
        title: '送风时长',
        dataIndex: 'time_spend',
        key: 'time_spend',
        render: text => <a>{text}</a>,
    },
    {
        title:'风速',
        dataIndex:'speed',
        key:'speed',
        render: text => <a>{text}</a>,
    },
    {
        title: '费率',
        dataIndex: 'ratio',
        key: 'ratio',
        render: text => <a>{text}</a>,
    },
    {
        title: '费用',
        dataIndex: 'cost',
        key: 'cost',
        render: text => <a>{text}</a>,
    },
];


class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
    }

    // tableData = [
    //     {
    //
    //         room_id: '3201',
    //         begin_time:'16:30',
    //         end_time: '17:30',
    //         time_spend: '1',
    //         speed: 3,
    //         ratio: 0.5,
    //         cost: 15
    //
    //     },
    //     {
    //
    //         room_id: '3201',
    //         begin_time:'17:30',
    //         end_time: '18:30',
    //         time_spend: '1',
    //         speed: 3,
    //         ratio: 0.5,
    //         cost: 15
    //
    //     },
    // ];
    // componentWillMount() {
    //     API.get()
    // }
    render() {
        return (
            <div>

                <Search
                    placeholder="请输入房间号"
                    enterButton="搜索"
                    size="large"
                    onSearch={value => {API.get('/reception/general/?room_id='+value+'/').then(response => {this.setstate({data:response.data})}) }}
                />
                <br/>
                <br/>
                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        )
    }
}

export default General