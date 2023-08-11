import { Link } from 'react-router-dom'
import { PostsList } from '../components/PostsList'
import { AddPostForm } from '../components/AddPostForm'

export const HomePage = () => {
    return(
        <div>
            <h2>Post Page</h2>
            <PostsList/>
            <AddPostForm/>
        </div>
        
    )
}