import React from 'react'

const searchbar = () => {
    return (
        <div>
            <div style={{ width: 600 + 'px', marginTop: 10 + 'px', marginLeft: 350 + 'px', marginBottom: 50 + 'px' }} className="bgsearchbox">
                <div className="row1">
                    <input className="input-box" type="text" placeholder="Seach anything" autoComplete="off" />
                    <button style={{ background: "transparent", border: 0, outline: 0 }}><i style={{ width: 25 + 'px', color: "#555", fontSize: 22 + 'px', cursor: "pointer" }} class="bi bi-search"></i></button>
                </div>
                <div className="result-box">
                </div>

            </div>
            <hr />
        </div>
    )
}

export default searchbar