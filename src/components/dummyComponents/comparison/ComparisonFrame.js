const ComparisonFrame = ({ products, fields }) => {
  
  return (

      <div className="comparison-container">
        <div 
          className="comparison-products"
          style={{gridTemplateRows:`6fr repeat(${Object.keys(fields).length},1fr)`}}  
        >
          <div className="comparison-products-data">
            <h3>Estás comparando los siguientes productos</h3>
          </div>
          {Object.entries(fields).map(field => (
            <div className="comparison-products-fields">
              <h5>{field[0].split("_").join(" ").toUpperCase()}</h5>
            </div>
              ))}
        </div>

        {
          products.map((item,index)=>(
            <div 
              className="comparison-products"
              style={{gridTemplateRows:`6fr repeat(${Object.keys(fields).length},1fr)`}}  
            >
              <div className="comparison-products-data">
                  <img src={item.images[0]} alt={item.title} />
                  <h4>{item.title}</h4>
                  <h5>$ {item.price}</h5>
                  <button>COMPRAR</button>
              </div>
              {Object.entries(fields).map(field => (
                <div className="comparison-products-fields">
                  <h6>{field[1][index]}</h6>
                </div>
              ))}
            </div>
          ))
        }

      </div>


      // <div className="comparison-container">
        
      //     <div >
      //       <div className="comparison-info">
      //         <h3>Estás comparando los siguientes productos</h3>

      //       </div>
            
      //         {Object.entries(fields).map(field => (
      //           <h5>{field[0].split("_").join(" ").toUpperCase()}</h5>
      //         ))}

            
      //     </div>

        

      //   {products.map((item,index) => (
      //     <div >
      //       <div className="comparison-products">
      //         <img src={item.images[0]} alt={item.title} />
      //         <h4>{item.title}</h4>
      //         <h5>$ {item.price}</h5>
      //         <button>COMPRAR</button>
      //       </div>
      //       {Object.entries(fields).map(field => (
      //         <h6 className="comparison-products-field-data">{field[1][index]}</h6>
      //       ))} 
      //     </div>
      //   ))}

        //  {
        //     Object.entries(fields).map(field => (
        //         <>
        //         <h5 className="comparison-products-field">{field[0].split("_").join(" ").toUpperCase()}</h5>
        //         <h6 className="comparison-products-field-data">{field[1][0]}</h6>
        //         <h6 className="comparison-products-field-data">{field[1][1]}</h6>
        //         <h6 className="comparison-products-field-data">{field[1][2]}</h6>
        //         <h6 className="comparison-products-field-data">{field[1][3]}</h6>
        //         </>
        //     ))
        // } 

      
  );
};

export default ComparisonFrame;
