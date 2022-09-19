//import Header from "./Header";
import { useLocation, useNavigate } from "react-router";
import { Button, Container, Col, Row, Navbar } from "react-bootstrap"
import Header from "./Header";
import "./../styles/Home2.css"
const Home = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    function handleRegister() {
        navigate('/register')
    }

    function handleLogin() {
        navigate('/directlogin')
    }

    return (
        <div className="Home" >
            <Container className="homeContainer">
                <>
                <div>
                <Col sm={4}>
                    <div className="intro-text">
                    <h1>
                        <span className="tweet">Tweet</span>
                        <span className="app">  App</span>
                    </h1>

                    <p>
                        Capture and Share the World's Moments⭐
                    </p>
                    <p>
                                    Definately not owned by Elon Musk!!
                                </p>
                    <Button variant="primary" onClick={handleRegister}>Register</Button>{' '}
                    <Button variant="secondary" onClick={handleLogin}>Login</Button><br />
                    <a href="/forgot">Forgot Password</a>
                    </div>
                </Col>
                </div>
                <Col sm={4} className="bird">
                            <center>
                            <img width="600"
                            height="625"
                            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png">
                            </img>
                            </center>
                        </Col>
                    <Col></Col>
                    <nav aria-label="footer">hello</nav>
                </>
            </Container>
        </div>
    )
}
export default Home