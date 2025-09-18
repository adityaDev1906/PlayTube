import React, {useState} from 'react';
import "./form.css";
import { addPost } from '../API/api';

const Form = ({ value, setValue }) => {
    const [addData, setAddData] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddData((prev) => {
           return {...prev, 
                   [name]: value 
           };

        });
    };

  // by calling this function the data will get added in the real API
    const addPostData = async () => {
       const res = await addPost(addData);
       console.log("response", res.config.data);
       if(res.status = 200){
        console.log(value?.data);
        setValue([...value?.data, res.config.data]);   // need to work on adding the data and can be check after applying pagination only because only 10 data is showing in this page at a time
        setAddData({title: "", description: ""})
       }
    }

    //form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }

  return (
  <> 
    <form className='form' onSubmit={handleFormSubmit}>
        <label htmlFor="title" className='form-label'>Title:</label>
        <input type="text" autoComplete='off' 
                id='title' name='title' 
                placeholder='Enter Title' value={addData.title} 
                onChange={handleInputChange} 
        />
        <label htmlFor="description" className='form-label'>Description:</label>
        <input type="text" autoComplete='off' 
                id='description' name='description' 
                placeholder='Enter Description' value={addData.description} 
                onChange={handleInputChange} 
        />
        <button type='submit'>Add Post</button>
    </form>
  </>
  )
}

export default Form;