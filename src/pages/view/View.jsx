import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductImage from "../../assets/product image/productimage.jpg"
import { Link, useNavigate } from "react-router-dom";
import { AddToCart, DeleteAction } from "../../services/action/ViewAct";

const View = () => {
    const {products} = useSelector((state) => state.ViewReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(AddToCart(product));
        navigate("/cart");
    };

    return (
        <>
            <section className="py-4 bg-[#272626]">
                <Container>
                    <Row className="gap-y-5">
                        <nav className="text-center py-4">
                            <ul className="list-inline mb-0 flex items-center justify-center">
                                <li className="list-inline-item">
                                    <Link to={"/"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#fff] transition !duration-300 mx-2 !border !border-blue-500 no-underline"><span className='group-hover:text-white transition duration-300 font-semibold'>Home</span></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to={"/cart"} className="group text-decoration-none px-4 py-2 rounded-lg hover:bg-blue-500 text-[#fff] transition duration-300 mx-2 !border !border-blue-500 no-underline"><span className='group-hover:text-white transition duration-300 font-semibold'>Cart</span></Link>
                                </li>
                                <li>
                                    <Link to={"/productform"} className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 no-underline">Add Product</Link>
                                </li>
                            </ul>
                        </nav>
                        {products.map((item) => (
                            <Col lg={4} key={item.id}>
                                <div className="bg-[#292929] shadow rounded-lg overflow-hidden h-full flex flex-col">
                                    <img className="w-full h-64 object-cover img-fluid" src={ProductImage} alt={"product image"} />

                                    <div className="px-4 py-3 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold text-white">Product&nbsp;Name :-&nbsp;{item.product_name}</h3>
                                        <p className="text-sm text-gray-200 mt-0">Category:-&nbsp;{item.product_category}</p>
                                        <p className="text-gray-200 text-sm">Product&nbsp;Price :-&nbsp;{item.product_price}&nbsp;₹</p>
                                        <p className="text-sm text-gray-400 mt-0">Stock&nbsp;Quantity:-&nbsp;{item.product_availability}</p>
                                        <p className="text-sm text-gray-400 mt-0">Description:-&nbsp;{item.product_description}</p>
                                    </div>

                                    <div className="flex flex-col justify-between gap-y-3 px-4 py-3">
                                        <button className="bg-green-700 px-3 py-2 rounded-lg text-center no-underline text-white shadow" onClick={() => handleAddToCart(item)}>Add&nbsp;To&nbsp;Cart</button>
                                        <button className="bg-warning px-3 py-2 rounded-lg text-center no-underline text-white shadow" onClick={() => navigate(`/edit/${item.id}`)}>Edit&nbsp;Product</button>
                                        <Button variant="danger" className="shadow" onClick={() => dispatch(DeleteAction(item.id))}>Delete&nbsp;Product</Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default View;