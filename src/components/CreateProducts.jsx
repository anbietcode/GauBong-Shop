import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateProducts() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5003/create', { name, price })
            .then(res => {
                console.log(res);
                navigate('/admins');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3' style={{ marginTop: 150 + 'px', marginBottom: 150 + 'px' }}>
                <form onSubmit={handleSubmit}>
                    <h2>Add Product</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name Product" className="form-control"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder="Enter Price Product" className="form-control"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateProducts;