import React from 'react';

const Product = ({data}) => {
    return (
        <div>
            <div className='row'>
                {data.map(data=>
                <div className='col-md-4'>
                    <div className='card' style={{"width":"18rem"}}>
                        <img className='card-img-top' src={data.recipe.image} alt="Card image cap"/>
                        <div className='card-body'>
                            <center>
                                <h5 card-title class="">{data.recipe.label}</h5>
                            <p class="card-text">Total amount of Calories:{data.recipe.calories}</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                            </center>
                            </div>
                        </div>
                    </div>

                )
                }
               
            </div>
        </div>
    );
};

export default Product;