import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { FaTwitterSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const Menu = () => {
    const location = useLocation();
    let navigate = useNavigate()
    const handleBack = () => {
        navigate('/success', { state: { userName: location.state.userName, userId: location.state.userId } })
    }

    const handleIcon = () => {
        navigate('/')
    }
    function viewTweetHandler(e)
    {
        console.log("navLocation",location)
        navigate('/ViewAllTweets',{state: { userName: location.state.userName,}})
    }
    function viewUsersHandler(e)
    {
        navigate('/ViewAllUsers',{state:{userName:location.state.userName}})
    }
    function resetPasswordHandler(e)
    {
        navigate('/forgot')
    }
    return (
        <div><Navbar className="bg-dark" variant='dark'>.
            <Navbar.Brand>
                <FaTwitterSquare className='m-1' onClick={handleIcon}/>
                Tweet App
            </Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link onClick={viewTweetHandler}>View All Tweet</Nav.Link>
                <Nav.Link onClick={viewUsersHandler}>View All Users</Nav.Link>
                <Nav.Link onClick={resetPasswordHandler}>Reset Password</Nav.Link>
                <Nav.Link onClick={handleBack}>Menu</Nav.Link>
                <Nav.Link href='/'>Logout</Nav.Link>
            </Nav>
        </Navbar></div>
    )
}

export default Menu