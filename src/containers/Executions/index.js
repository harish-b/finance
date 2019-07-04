import React, {Component} from 'react'
import ExecutionsTable from './ExecutionsTable';
import TableData from './TableData';

class Executions extends Component {
    render() {
        return (
            <ExecutionsTable TableData={TableData}/>
        )
    }
}

export default Executions