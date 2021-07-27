import React,{useState} from 'react'
import option1 from '../../assets/options/option1.png'
import option2 from '../../assets/options/option2.png'
import option3 from '../../assets/options/option3.png'
import option4 from '../../assets/options/option4.png'
import option5 from '../../assets/options/option5.png'
import option6 from '../../assets/options/option6.png'
import option7 from '../../assets/options/option7.png'
import option8 from '../../assets/options/option8.png'
import option9 from '../../assets/options/option9.png'
import option10 from '../../assets/options/option10.png'
import option11 from '../../assets/options/option11.png'
import option12 from '../../assets/options/option12.png'

const Options = () => {
    const [overFlow, setOverFlow] = useState(0)
    const listOptions = [
        {
            img:option1,
            title: "Televisores"
        },
        {
            img:option2,
            title: "Celulares"
        },
        {
            img:option3,
            title: "Aires y calefacción"
        },
        {
            img:option4,
            title: "Colchones y sommiers"
        },
        {
            img:option5,
            title: "Lavarropas y vajillas"
        },
        {
            img:option6,
            title: "Notebooks"
        },
        {
            img:option7,
            title: "Heladeras y freezers"
        },
        {
            img:option8,
            title: "Muebles"
        },
        {
            img:option9,
            title: "Agua caliente"
        },
        {
            img:option10,
            title: "Cocinas y hornos"
        },
        {
            img:option11,
            title: "Pequeños electrodomesticos"
        },
        {
            img:option12,
            title: "Cuidado personal"
        }
    ]


    return (
        <section className="section-options" >
            <ul className="section-options-list" style={{left:`${overFlow}%`}}>
            {listOptions.map((el,index)=>{
                return(
                    <li key={`option${index}`} className="section-options-list-item">
                        <figure className="section-options-list__card">
                            <img src={el.img} alt={el.title}/>
                            <figcaption>{el.title}</figcaption>
                        </figure>
                    </li>
                )
            })}
            </ul>
            {overFlow === 0
             ? <div className="button-optionright" onClick={()=>setOverFlow(-100)}><i className="fas fa-arrow-right"></i></div>
             : <div className="button-optionleft" onClick={()=>setOverFlow(0)}><i className="fas fa-arrow-left"></i></div>
            }
            
            
        </section>
    )
}

export default Options
