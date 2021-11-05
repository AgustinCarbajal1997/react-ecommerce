import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addToCompare, deleteComparison } from "../../../store/actions/comparison.action"
const ComparingProductsButton = ({ item }) => {
    const dispatch = useDispatch()
    const comparisons = useSelector(state => state.comparison.products);
    const [isChecked, setIsChecked] = useState(null)
    const onClickInputHandler = (e) => {
        if(isChecked) return dispatch(deleteComparison(item.id));
        if(comparisons.length >= 4) return e.preventDefault();
        dispatch(addToCompare(item))
    }
    useEffect(() => {
        if(!comparisons.length) return;
        const isExisted = comparisons.find(product => item.id === product.id);
        isExisted ? setIsChecked(true) : setIsChecked(false)
    }, [comparisons, item])
    return (
        <div>
            <label className="b-contain">
              <input
                type="checkbox"
                id={`check${item.id}`}
                defaultChecked={isChecked}
                onClick={onClickInputHandler}
              />
              <span>Comparar</span>
              <div className="b-input"></div>
            </label>
        </div>
    )
}

export default ComparingProductsButton
