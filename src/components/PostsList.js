import { useSelector } from 'react-redux'
import { PostItem } from './PostItem'

export const PostsList = () => {
    const posts = useSelector(state => state.posts)
    
    return(
        <div>
            <h2>Posts List</h2>
            <section>
                {
                    posts.length? posts.map(post => <PostItem key={post.id}title={post.title} id={post.id} content={post.content}/>): (<h3>Loading...</h3>)
                }
            </section>
        </div>
    )
}