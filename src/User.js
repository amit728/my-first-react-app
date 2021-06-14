import React,{useState} from 'react'
import { Table,Button } from 'react-bootstrap';

function User(){

    const [user, setName] = useState([
        {name:'Amit Gupta', age:29, address1: 'Gopalganj'},
        {name:'Anup Gupta', age:30, address1: 'Patna'},
        {name:'Ashish Gupta', age:28, address1: 'Gorakhpur'},
        {name:'Arti Gupta', age:27, address1: 'Mumbai'},
    ])

    function xyz(){
        alert("Hello World!..");
    }
    return(
        <div className="container mt-5">
            <h1>USers List</h1>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                { user.map((item,index)=>
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address1}</td>
                    </tr>)
}
                </tbody>
                </Table>
        </div>
    )
}

export default User;