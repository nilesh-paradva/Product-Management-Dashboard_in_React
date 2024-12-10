import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EditAct, getAsyncEdit, getAsyncUpdate } from '../../services/action/ViewAct';

const Edit = () => {
    const { product, isLoading } = useSelector((state) => state.ViewReducer);

    const [formInput, setFormInput] = useState({
        id: "",
        product_name: "",
        product_title: "",
        product_price: "",
        product_description: "",
        product_availability: "",
        product_category: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getAsyncUpdate(formInput));
        navigate('/view');
    };

    useEffect(() => {
        dispatch(getAsyncEdit(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (product) {
            setFormInput(product);
        }
    }, [product]);

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-20 w-20 border-8 border-solid border-t-transparent border-b-transparent border-l-blue-500 border-r-red-500"></div>
                </div>
            ) : (
                <section className='h-screen flex items-center justify-center'>
                    <Container className="bg-white p-4 rounded-lg shadow-2xl">
                        <h2 className="text-center mb-4 bg-blue-600 text-white rounded-lg py-2">Edit Product</h2>
                        <div className="button-create flex items-center justify-center gap-4 mb-4">
                            <Link to={'/'} className='group px-3 py-2 rounded-lg no-underline !border border-blue-600 hover:bg-blue-600 transition duration-300'><span className='group-hover:text-white transition duration-300'>Home</span></Link>
                            <Link to={'/cart'} className='group px-3 py-2 rounded-lg no-underline !border border-blue-600 hover:bg-blue-600 transition duration-300'><span className='group-hover:text-white transition duration-300'>Cart</span></Link>
                        </div>
                        <Form action="" method="POST">
                            <Row>
                                {/* Product Name */}
                                <Col md={6} className="mb-3">
                                    <Form.Control type="text" id="id" name="id" value={formInput.id} hidden />
                                    <Form.Label htmlFor="product-name">Product Name</Form.Label>
                                    <Form.Control type="text" id="product-name" name="product_name" placeholder="Enter product name" value={formInput.product_name} onChange={handleChange} />
                                </Col>
                                {/* Product Title */}
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="product-title">Title</Form.Label>
                                    <Form.Control type="text" id="product-title" name="product_title" placeholder="Enter product title" value={formInput.product_title} onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row>
                                {/* Product Description */}
                                <Col md={12} className="mb-3">
                                    <Form.Label htmlFor="product-description">Description</Form.Label>
                                    <Form.Control className='resize-none' as="textarea" id="product_description" name="product_description" rows={4} placeholder="Enter product description" value={formInput.product_description} onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row>
                                {/* Product Price */}
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="product-price">Price</Form.Label>
                                    <Form.Control type="number" id="product-price" name="product_price" placeholder="Enter product price" value={formInput.product_price} onChange={handleChange} />
                                </Col>
                                {/* Available Stock */}
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="product-availability">Available Stock</Form.Label>
                                    <Form.Control type="number" id="product-availability" name="product_availability" placeholder="Enter available stock" value={formInput.product_availability} onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row>
                                {/* Product Category */}
                                <Col md={12} className="mb-3">
                                    <Form.Label htmlFor="product-category">Category</Form.Label>
                                    <Form.Select id="product-category" name="product_category" aria-label="Select product category" value={formInput.product_category} onChange={handleChange}>
                                        <option value="">Select a category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Beauty_&_Health">Beauty & Health</option>
                                        <option value="Home_&_Furniture">Home & Furniture</option>
                                        <option value="Sports_&_Outdoors">Sports & Outdoors</option>
                                        <option value="Toys_&_Games">Toys & Games</option>
                                        <option value="Food_&_Beverages">Food & Beverages</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            {/* Submit Button */}
                            <div className="d-flex justify-content-center">
                                <Button className='px-3 py-2 rounded-lg no-underline bg-blue-600 text-white' onClick={handleSubmit}>Edit Product</Button>
                            </div>
                        </Form>
                    </Container>
                </section>
            )}
        </>
    );
};

export default Edit;
