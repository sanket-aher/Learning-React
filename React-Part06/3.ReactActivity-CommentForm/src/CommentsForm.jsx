import { useState } from "react";

export default function CommentsForm({addNewComment}){
    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {
                ...currData,[event.target.name] : event.target.value
            }
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        })
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange}
                    id="username" name="username" />
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea placeholder="add new remarks" value={formData.remarks} onChange={handleInputChange}
                    id="remarks" name="remarks" />
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" value={formData.rating} onChange={handleInputChange}
                    id="rating" name="rating" />
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}