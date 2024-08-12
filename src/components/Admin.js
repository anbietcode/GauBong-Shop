import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Admin = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5003/')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  const handleDelete = async(id) => {
    try {
      await axios.delete('http://localhost:5003/products/' + id )
      window.location.reload()
    } catch(err){
      console.log(err);
    }

  }

  return (
    <div className='d-flex vh100 bg-dark justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3' style={{ marginTop: 150 + 'px', marginBottom: 150 + 'px' }}>
        <h1 style={{ textAlign: "center" }}>Product List</h1>
        <Link to="/create" className='btn btn-success'>Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th style={{ paddingLeft: 50 + 'px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((data, i) => (
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>
                    <Link to={`/admins/update/${data.id}`} className='btn btn-warning m-2' type='submit'>Edit</Link>
                    <button type='button' className='btn btn-danger m-2' onClick={e => handleDelete(data.id)}>Detele</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin