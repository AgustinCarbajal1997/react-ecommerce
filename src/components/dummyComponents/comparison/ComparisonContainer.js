import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import ComparisonFrame from "./ComparisonFrame"

const ComparisonContainer = () => {
    const products = useSelector(state => state.comparison.products);
    const [fields, setFields] = useState(null)
    
    useEffect(() => {
        if(!products.length) return;
        const dataSpecif = products.map(item => item.specifications);
        const reduceData = dataSpecif.reduce((ac,item)=>{
            let titles = {};
            item.forEach(el => {
                let titleModified = el.title.toLowerCase().trim().split(" ").join("_");
                titles = {
                    ...titles,
                    [titleModified]:el.especifications2
                }
            });
            return [
                ...ac,
                titles
            ]
        },[])
        let newObject = {}
        reduceData.forEach(item => {
            Object.keys(item).forEach(el => {
                if(el in newObject){
                    newObject = {
                        ...newObject,
                        [el]:[...newObject[el],item[el]]
                    }
                }else{
                    newObject = {
                        ...newObject,
                        [el]:[item[el]]
                    }
                }
            })
        });
        setFields(newObject)
        

        
    }, [products])
    return (
        <>
            { products.length>0 && fields &&<ComparisonFrame products={products} fields={fields}/>}
            
        </>
    )
}


export default ComparisonContainer
