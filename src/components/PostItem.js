import { Link } from 'react-router-dom'

export const PostItem = (props) => {
    const { title, content, id } = props
    
    return(
        <article>
            <Link to={`/posts/${id}`}>
                <h2>{title}</h2>
                <p>{content}</p>
            </Link>
        </article>
    )
}