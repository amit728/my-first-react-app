import React, { useState } from 'react'

function CreateUser() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function makeUser() {
        let data = {name, age, address}
        //alert("Welcome USer!..");
        console.warn('User Created warn: ', data);
        console.log('User Created log: ', data);
    }
    return (
        <div className="container">
            <div className="col-sm-4 offset-sm-4 text-left mt-5" style={{ border: '1px solid #eee', padding: '10px 30px 30px 30px' }}>
                <h3 className="text-center mt-3 mb-3">Create User</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAge">Age</label>
                    <input type="text" onChange={(e) => setAge(e.target.value)} name="age" value={age} className="form-control" id="exampleInputAge" placeholder="Age" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" value={address} className="form-control" id="exampleInputAddress" placeholder="Address" />
                </div>
                <button type="submit" onClick={makeUser} className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default CreateUser;