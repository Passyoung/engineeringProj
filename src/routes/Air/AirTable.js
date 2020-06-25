import {Input, Table} from 'antd';
import React from "react";
import API from "axios"

const columns = [
    {
        title: '房号',
        dataIndex: 'number',
        key: 'number',
        render: text => <a>{text}</a>,
    },
    {
        title: '当前温度',
        dataIndex: 'cur_temperature',
        key: 'cur_temperature',
        render: text => <a>{text}</a>,
    },
    {
        title: '目标温度',
        dataIndex: 'target_temperature',
        key: 'target_temperature',
        render: text => <a>{text}</a>,
    },

    {
        title: '风速',
        dataIndex: 'speed',
        key: 'speed',
        render: text => <a>{text}</a>,
    },

    {
        title: '费用',
        dataIndex: 'cost',
        key: 'cost',
        render: text => <a>{text}</a>,
    },
];


class AirTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentWillMount() {
        API.get('/reception/bill/').then(response => {
            this.setstate({data: response.data})
        })

    }

// tableData = [
//     {
//         key: '1',
//         number: 3201,
//         isOn: true,
//         state: '可用',
//         speed: 3,
//         temperature: 26,
//         cost: 15
//
//     },
//     {
//         key: '2',
//         number: 3202,
//         isOn: true,
//         state: '可用',
//         speed: 3,
//         temperature: 26,
//         cost: 15
//
//     },
// ];

    render() {
        return (
            <div>

                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        )
    }

}

export default AirTable