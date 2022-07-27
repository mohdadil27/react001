import React, { useEffect, useState } from 'react';

const Service = () => {
    const [data, setData] = useState([]);
    const [count,setCount]=useState([0])
    useEffect(() => {
        getData();
    })


    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products/');
        // console.log(response);
        const jsonData = await response.json();
        setData(jsonData);
    }

    return (
        <>  
                
                {data.map((values) => {
                return (
                    <>  
                       <div className="col-md-4 my-2">
                            <div className="card" style={{width: '100%', height:"800px"}}>
                                <img className="card-img-top"  src={values.image} style={{width:"300px"}} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{values.title}</h5>
                                    <p className="card-text">{values.description}</p>
                                    <p className="card-text "><button className="btn btn-primary">Add to Cart</button></p>
                                </div>
                            </div>
                            </div>
                    
  </>

                )
            })}
        </>
    )
}
export default Service;


