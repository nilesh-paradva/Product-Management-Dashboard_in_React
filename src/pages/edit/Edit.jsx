import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EditAct, getAsyncEdit, getAsyncUpdate, SingleDataEdit } from '../../services/action/ViewAct';
import { use } from 'react';

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
        setFormInput(product);
    }, [product]);
    
    useEffect(() => {
        dispatch(getAsyncEdit(id));
    }, []);

    return (
        <>

            {isLoading ?
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
                :
                <section className='h-screen flex items-center justify-center'>
                    <Container className="bg-white p-4 rounded-lg  shadow-2xl">
                        <h2 className="text-center mb-4 bg-blue-600 text-white rounded-lg py-2">Add Product {id}</h2>
                        <div className="button-create flex items-center justify-center gap-4 mb-4">
                            <Link to={'/'} className='group px-3 py-2 rounded-lg no-underline !border border-blue-600 hover:bg-blue-600 transition duration-300'><span className='group-hover:text-white transition duration-300'>Home</span></Link>
                            <Link to={'/cart'} className='group px-3 py-2 rounded-lg no-underline !border border-blue-600 hover:bg-blue-600 transition duration-300'><span className='group-hover:text-white transition duration-300'>Cart</span></Link>
                        </div>
                        <Form action="" method="POST">
                            <Row>
                                {/* Product Name */}
                                <Col md={6} className="mb-3">
                                    <Form.Control type="text" id="id" name="id" value={id} hidden />
                                    <Form.Label htmlFor="product-name">Product Name</Form.Label>
                                    <Form.Control type="text" id="product-name" name="product_name" placeholder="Enter product name" value={product.product_name} onChange={handleChange} />
                                </Col>
                                {/* Product Title */}
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="product-title">Title</Form.Label>
                                    <Form.Control type="text" id="product-title" name="product_title" placeholder="Enter product title" value={product.product_title} onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row>
                                {/* Product Description */}
                                <Col md={12} className="mb-3">
                                    <Form.Label htmlFor="product-description">Description</Form.Label>
                                    <Form.Control className='resize-none' as="textarea" id="product_description" name="product_description" rows={4} placeholder="Enter product description" value={product.product_description} onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row>
                                {/* Product Price */}
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="product-price">Price</Form.Label>
                                    <Form.Control type="number" id="product-price" name="product_price" placeholder="Enter product price" value={product.product_price} onChange={handleChange} />
                                </Col>
                                {/* Available Stock */}
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="product-availability">Available Stock</Form.Label>
                                    <Form.Control type="number" id="product-availability" name="product_availability" placeholder="Enter available stock" value={product.product_availability} onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row>
                                {/* Product Category */}
                                <Col md={12} className="mb-3">
                                    <Form.Label htmlFor="product-category">Category</Form.Label>
                                    <Form.Select id="product-category" name="product_category" aria-label="Select product category" value={product.product_category} onChange={handleChange}>
                                        <option value="">Select a category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="toys">Toys</option>
                                        <option value="books">Books</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            {/* Submit Button */}
                            <div className="d-flex justify-content-center">
                                <Button className='px-3 py-2 rounded-lg no-underline bg-blue-600 text-white' onClick={handleSubmit}>Submit Product</Button>
                            </div>
                        </Form>
                    </Container>
                </section>
            }

        </>
    );
};

export default Edit;
