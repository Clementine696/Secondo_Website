import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { addProduct } from "../../actions";
import Modal from "../../components/UI/Modal";
import './style.css'
import { generatePublicUrl } from "../../urlConfig";

function Products(props) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);

  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);

  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form));

    setShow(false);
  };

  const [productDetailsModal, setProductDetailsModal] = useState(false)
  const [productDetails, setproductDetails] = useState(null)

  const handleCloseProductDetailsModal = () => {
    setProductDetailsModal(false)
  }

  const showProductDetailsModal = (product) => {
    setproductDetails(product)
    setProductDetailsModal(true)
  }

  const renderProductDetailsModal = () => {

    if (!productDetails) {
      return null;
    }

    return (
      <Modal
        show={productDetailsModal}
        handleCancel={handleCloseProductDetailsModal}
        handleClose={handleCloseProductDetailsModal}
        // handleClose={() => setProductDetailModal(false)}
        modalTitle={"Product Details"}
        size="lg"
      >
        <Row>
          <Col md="4">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="4">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
          <Col md="4">
            <label className="key">Category</label>
            <p className="value">{productDetails.category ? productDetails.category.name : null}</p>
          </Col>
        </Row>

        <Row>
          {/* <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col> */}
          <Col md="6">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div className="product-imgs">
              {productDetails.productPictures.map(picture =>
                <div className="productImgContainer">
                  <img src={generatePublicUrl(picture.img)} />
                </div>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="key">Cabon Credit</label>
            <Form.Control type="text" placeholder="Enter Cabon Credit" />
          </Col>
        </Row>

      </Modal>
    );
  }

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  // console.log(productPictures);
  console.log(product.products)
  const renderNewProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        {/* First Table */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
            {/* <th>Description</th> */}
            {/* <th>Product Picture</th> */}
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-bg">
          {
            product.products.length > 0 ?
              product.products.map(product =>
                <tr className="product-items">
                  <td>1</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.category ? product.category.name : null}</td>
                  <td>รอการตรวจสอบ</td>
                  <td className="btn-section">
                    <Button variant="outline-danger" size="sm">Delete</Button>
                    <Button variant="outline-primary" size="sm" onClick={() => showProductDetailsModal(product)} key={product._id}>Edit</Button>
                  </td>
                </tr>

              ) : null
          }
        </tbody>
      </Table>
    );
  }

  const renderOldProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        {/* Second Table */}

        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
            {/* <th>Description</th> */}
            {/* <th>Product Picture</th> */}
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            product.products.length > 0 ?
              product.products.map(product =>
                <tr className="product-items">
                  <td>1</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.category ? product.category.name : null}</td>
                  <td>รอการตรวจสอบ</td>
                  <td >
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showProductDetailsModal(product)} key={product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }
        </tbody>
      </Table>
    );
  }

  const renderAddProductModal = () => {
    return (<Modal
      show={show}
      handleCancel={handleCancel}
      handleClose={handleClose}
      modalTitle={"Add New Product"}
    >
      <Input
        label="Name"
        value={name}
        placeholder={`Product Name`}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Quantity"
        value={quantity}
        placeholder={`Quantity`}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Input
        label="Price"
        value={price}
        placeholder={`Price`}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input
        label="Description"
        value={description}
        placeholder={`Description`}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="form-control"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option>select category</option>
        {createCategoryList(category.categories).map((option) => (
          <option key={option.value} value={option.value}>
            {" "}
            {option.name}{" "}
          </option>
        ))}
      </select>

      {productPictures.length > 0
        ? productPictures.map((pic, index) => (
          <div key={index}> {pic.name} </div>
        ))
        : null}

      <Input
        type="file"
        name="productPicture"
        onChange={handleProductPictures}
      />
    </Modal>);
  }


  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div className="table-product">
              <h3>Products</h3>
              <Button onClick={handleShow}>Add new product</Button>
            </div>
          </Col>
        </Row>
        <Row className="new-product-table">
          <Col>
            {renderNewProducts()}
          </Col>
        </Row>

        <Row>
          <Col className="old-product-table" md={12}>
            <div className="table-product">
              <h3>Old Product</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {renderOldProducts()}
          </Col>
        </Row>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailsModal()}
    </Layout>
  );
}

Products.propTypes = {};

export default Products;