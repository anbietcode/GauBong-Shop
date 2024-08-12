import React from "react";
import Itemcard from "./itemcard";
import Searchbar from './searchbar'
import data from "./data";
import './header.css';


const TedHome = () => {

    return (
        <>
            <h1 className="title1 shadow-lg mb-5"><strong>All Items</strong></h1>
           <Searchbar/>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
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
export default TedHome;