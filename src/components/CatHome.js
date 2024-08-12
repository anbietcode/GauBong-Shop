import React from "react";
import Itemcard2 from "./ItemCard2";
import dataCat from "./dataCat";


const CatHome = () => {

    return (
        <>
            <h1 className="title1"><strong>All Items</strong></h1>
            <div style={{ width: 600 + 'px', marginTop: 10 + 'px', marginLeft: 350 + 'px', marginBottom: 50 + 'px' }} className="bgsearchbox">
                <div className="row1">
                    <input className="input-box" type="text" placeholder="Seach anything" autoComplete="off" />
                    <button style={{ background: "transparent", border: 0, outline: 0 }}><i style={{ width: 25 + 'px', color: "#555", fontSize: 22 + 'px', cursor: "pointer" }} class="bi bi-search"></i></button>
                </div>
                <div className="result-box">
                </div>

            </div>
            <hr />
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {dataCat.productData.map((item, index) => {
                        return (
                            <Itemcard2
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}

                </div>
            </section>
        </>
    );
};
export default CatHome;