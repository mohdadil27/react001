import React,{useState} from 'react'


const slider = () => {
    return (
       
        <>
           {data.map((value)=>{
             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner">
                 <div class="carousel-item active">
                     <img class="d-block w-100" src={value.img} alt="First slide" />
                 </div>
             </div>
         </div>
                
           })}


     


           
        </>
    )
}

export default  slider