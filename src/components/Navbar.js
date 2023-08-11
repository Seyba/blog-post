import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav className="bg-neutral-950	text-white	">
            <div className="flex justify-around">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>  
            </div>
            
        </nav>
        
    )
}