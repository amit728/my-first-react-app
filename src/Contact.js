import React,{useState} from 'react'

function Contact(props){
    const [name, setName] = useState("Pankaj");

    let address = "Oxyzen park, Noida"
    return(
        <div className="mt-5 container text-left">
            <h1>Contact Page!...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>{address}</p>
            <p>{name}</p>
            <p>{props.location}</p>
            <p>{props.phone}</p>
            <button onClick={()=>setName("Archana")}>Update</button>
        </div>
    )
}

export default Contact;

