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
        title: '总费用',
        dataIndex: 'total_cost',
        key: 'total_cost',
        render: text => <a>{text}</a>,
    },
    {
        title: '入住时间',
        dataIndex: 'in_time',
        key: 'in_time',
        render: text => <a>{text}</a>,
    },
    {
        title: '离店时间',
        dataIndex: 'end_time',
        key: 'end_time',
        render: text => <a>{text}</a>,
    },
];


class BillTable extends React.Component {
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
                    onSearch={value => {API.get('/reception/bill/?room_id='+value+'/').then(response => {this.setstate({data:response.data})}) }}
                />
                <br/>
                <br/>
                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        )
    }
}

export default BillTable