import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateProducts = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5003/update/' + id, { name, price })
            .then(res => {
                console.log(res);
                navigate('/admins');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3' style={{ marginTop: 150 + 'px', marginBottom: 150 + 'px' }}>
                <form onSubmit={handleSubmit}>
                    <h2>Update Product</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name Update</label>
                        <input type="text" placeholder="Enter Name Product" className="form-control"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price Update</label>
                        <input type="number" placeholder="Enter Price Product" className="form-control"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateProducts;