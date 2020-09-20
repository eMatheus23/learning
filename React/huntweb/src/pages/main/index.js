import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {
  // Sempre que eu tiver uma variável no state, ela é monitorada para mudanças
  // E sempre que a variável mudar, o render vai renderizar as informações novamente
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  // Eu uso arrow function em funções personalisadas,
  // pois se não, não posso usar o this
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if(page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map((product) => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
