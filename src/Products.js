import React, {Component} from "react";

class Products extends Component {

    render() {

        return (
            <div style={{
                margin: "0 auto",
                width: "500px",
                height: "50px",
                textAlign: "justify",
                marginTop: "10px"

            }}>
                {
                    this.props.products.map((product) => {
                        return <div key={product.sku}style={{
                            borderBottom: "10px solid",
                            lineHeight: "15px"

                        }}>

                            <p> {product.sku}</p>
                            <p> {product.name} </p>
                            <ul>
                                {product.category.map((c) => {
                                    return (<div key={c.id}>
                                        <li>{c.id}</li>
                                        <li>{c.name}</li>
                                    </div>)
                                })}

                            </ul>
                            <p> {product.shipping} </p>
                            <p> {product.description}</p>
                            <img src={product.image} alt={product.name}/>
                            <br/>
                        </div>
                    })}
            </div>

        )
    }
}

export default Products;