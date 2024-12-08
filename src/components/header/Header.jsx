import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'

import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <header className="py-3 bg-[#291919] fixed w-full z-40"> {/* Header background color */}
                <Container>
                    <Row className="items-center">
                        <Col lg={1}>
                            <div className="text-center">
                                <img src={Logo} alt="Logo" className="img-fluid" />
                            </div>
                        </Col>

                        <Col lg={9}>
                            <div className="text-center">
                                <nav>
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to={"/"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#8d8b8b] transition !duration-300 mx-2 !border !border-blue-500 no-underline"><span className='group-hover:text-white transition duration-300 font-semibold'>Home</span></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to={"/view"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#8d8b8b] transition duration-300 mx-2 !border !border-blue-500 no-underline"><span className='group-hover:text-white transition duration-300 font-semibold'>View Product</span></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to={"/cart"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#8d8b8b] transition duration-300 mx-2 !border !border-blue-500 no-underline"><span className='group-hover:text-white transition duration-300 font-semibold'>Cart</span></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div className="text-center">
                                <Link to={"/productform"} className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 no-underline">Add Product</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

        </>
    )
}
export default Header