import { useSelector } from "react-redux"
import { useParams } from "react-router";
import ProductModel from "./ProductModel";
const ProductView = () => {
    const products = useSelector(state => state.products.products);
    const { id } = useParams();
    const filteredProduct = products.find(item => parseInt(item.id) === parseInt(id));
    
    
    return (
        <section className="product-view">
            {filteredProduct
            ? <ProductModel item={filteredProduct}/>
            : <h3>No se encontro el producto</h3>}

        </section>
    )
}

export default ProductView





// const Product = ({ item }) => {
//     return (
//         <div>
//             <h3>{item.title}</h3>
//             <h4>{item.price}</h4>
//         </div>
//     )
// }



