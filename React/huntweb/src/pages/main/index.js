import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
  // Sempre que eu tiver uma variável no state, ela é monitorada para mudanças
  // E sempre que a variável mudar, o render vai renderizar as informações novamente
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  // Eu uso arrow function em funções personalisadas,
  // pois se não, não posso usar o this
  loadProducts = async () => {
    const response = await api.get("/products");

    this.setState({ products: response.data.docs });
  };

  render() {
    return (
        <div className="product-list" >
            {this.state.products.map(product => (
                <h2 key={product._id} >{product.title}</h2>
            ))}
        </div>
    )
  }
}
