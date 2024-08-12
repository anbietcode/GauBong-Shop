import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <center>
            <div className="App">
                <h1> Product List </h1>
                <Link to="/creates" className='btn btn-success btnadd'>Add</Link>
                <>
                    <table className='customers'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </table>
                    {products.map((product) => (
                        <div key={product.id}>
                            <table className='customers'>

                                <tr>
                                    <td>
                                        <h6>{product.name}</h6>
                                    </td>
                                    <td>
                                        <h6 className='pricead'>{product.price}</h6>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger m-2'>Delete</button>
                                        <button className='btn btn-warning m-2'>Edit</button>

                                    </td>
                                </tr>





                            </table>
                        </div>
                    ))}
                </>
            </div>
        </center>
    );
}

export default ProductList;
