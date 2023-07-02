import {Link} from 'react-router-dom'; 

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            {/* <a href="/">Home</a>
            <a href="/create" style={{color: "white", backgroundColor: "#f1356d", borderRadius: '8px'}}>New Blog</a> */}

            <Link to="/">Home</Link>
            <Link to="/create" style={{color: "white", backgroundColor: "#f1356d", borderRadius: '8px'}}>New Blog</Link>
            {/* By using Link inspite of anchor tag, it will not create page request to server 
                instead it will look into routes and return respective components, 
                It will reduce time to load the page content */}

        </div>
            
        </nav>
     );
}
 
export default Navbar;