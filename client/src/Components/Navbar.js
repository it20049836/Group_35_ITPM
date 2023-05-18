import { Link } from 'react-router-dom'

const Navbar = () =>{

return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>Food Pals</h1>
            </Link>
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/">
                <h2>Manage</h2>
            </Link>
            <Link to="/">
                <h2>Profile</h2>
            </Link>
        </div>
    </header>
)

}


export default Navbar;