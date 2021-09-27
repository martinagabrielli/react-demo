import React, { Component} from 'react'
import { getData } from './services/data'

class List extends React.Component {
    state = {
        data: getData()
    }

    handleDelete = thedata => {
        const data = this.state.data.filter(d => d._id !== thedata._id)
        this.setState({data})
    }

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Email</th>
                            <th>State</th>
                            <th>Company</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(d => (
                            <tr key={d._id}>
                                <td>{d.name}</td>
                                <td><img src={d.picture} alt="Picture" /></td>
                                <td>{d.email}</td>
                                <td>{d.isActive}</td>
                                <td>{d.company}</td>
                                <td><button onClick={() => this.handleDelete(d)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List