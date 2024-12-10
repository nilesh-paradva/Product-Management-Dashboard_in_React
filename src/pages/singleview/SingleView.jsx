import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ProductImage from "../../assets/product image/productimage.jpg";
import { Link } from "react-router-dom";

const SingleView = () => {
    const { singleView, isLoading } = useSelector((state) => state.ViewReducer);
    console.log("singleView", singleView);

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <section className="py-5 bg-[#272626]">
                    <Container>
                        <Row className="gap-y-5">
                            <nav className="text-center py-4">
                                <ul className="list-inline mb-0 flex items-center justify-center">
                                    <li className="list-inline-item">
                                        <Link to={"/"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#fff] transition !duration-300 mx-2 !border !border-blue-500 no-underline">
                                            <span className="group-hover:text-white transition duration-300 font-semibold">Home</span>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={"/view"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#fff] transition duration-300 mx-2 !border !border-blue-500 no-underline">
                                            <span className="group-hover:text-white transition duration-300 font-semibold">View</span>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={"/cart"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#fff] transition duration-300 mx-2 !border !border-blue-500 no-underline">
                                            <span className="group-hover:text-white transition duration-300 font-semibold">Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/productform"} className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 no-underline">
                                            Add Product
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            {singleView && (
                                <Col lg={4}>
                                    <div className="bg-[#292929] shadow rounded-lg overflow-hidden h-full flex flex-col">
                                        <img className="w-full h-64 object-cover img-fluid" src={ProductImage} alt="product" />
                                        <div className="px-4 py-3 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold text-white">Product Name: {singleView.product_name}</h3>
                                            <h3 className="text-xl font-semibold text-white">Product Title: {singleView.product_title}</h3>
                                            <p className="text-sm text-gray-200 mt-0">Category: {singleView.product_category}</p>
                                            <p className="text-gray-200 text-sm">Price: {singleView.product_price} ₹</p>
                                            <p className="text-sm text-gray-400 mt-0">Stock: {singleView.product_availability}</p>
                                            <p className="text-sm text-gray-400 mt-0">Description: {singleView.product_description}</p>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};

export default SingleView;