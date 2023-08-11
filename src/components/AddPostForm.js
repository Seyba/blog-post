import { useState} from 'react'
import { useDispatch} from 'react-redux'
import { addPost } from '../redux/slices/postsSlice'
import { nanoid } from '@reduxjs/toolkit';
import { TERipple, TEInput } from "tw-elements-react";

export const AddPostForm = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        
        title:'',
        content:''
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        //* create new post variable
        const newPost = {...formData, id: nanoid()}

        //* dispatch action
        dispatch(addPost(newPost))

        //* clear the form
        setFormData({
            title: '',
            content: ''
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label><br/>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    
                /><br/>
                <label htmlFor="content">Content </label><br/>
                <textarea
                    id="content"
                    type="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                >

                </textarea><br/>
                <TERipple rippleColor="light" >
                    
                
                <button
                    type="button"
                    disabled={!formData.title && !formData.content}
                    className="inline-block mb-4 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Create Post
                </button>
                </TERipple>
            </form>
        </div>
    )
}