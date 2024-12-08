import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
// import img_1 from "../../assets/banner/1.jpg"

const Banner = () => {
    return (
        <>
            <section className="h-screen">
                <Container fluid>
                    <Row>
                        <Col className="position-relative h-screen bg-[url('assets/banner/1.jpg')] bg-cover bg-center">
                            <div className="position-absolute top-0 left-0 w-full bg-black bg-opacity-50 h-[100%]">
                                <div className="d-flex justify-content-center align-items-center h-[100%]">
                                    <div className="text-center text-white px-4">
                                        <h1 className="text-4xl font-semibold mb-4">Product Add Web</h1>
                                        <p className="text-xl mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                        </p>
                                        <Link to={"/productform"} className="btn btn-success px-3 py-2 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200">Add Product</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner