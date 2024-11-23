import { useState } from "react";

export default function Form() {
    let [formData,setFormData] = useState({
        fullName:"",
        username:"",
        password:""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) =>{
            currData[fieldName] = newValue;
            return { ...currData };
        })
    }

    /*     OR

    let handleInputChange = (event) => {
        setFormData((currData) =>{
            return { ...currData,[event.target.name]:event.target.value };
        });
    }

    */

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"",
            password:""
        });
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="enter full name" value={formData.fullName} onChange={handleInputChange}  
                name="fullName" id='fullName' // 'name' attribute value should be same as 'state' initialization key.    
            />
            <br /><br />

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="enter username" value={formData.username} onChange={handleInputChange}  
                name="username" id='username' // 'name' attribute value should be same as 'state' initialization key.    
            />
            <br /><br />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="enter password" value={formData.password} onChange={handleInputChange}  
                name="password" id='password' // 'name' attribute value should be same as 'state' initialization key.    
            />
            <br /><br />

            <button>Submit</button>
        </form>
    )
}