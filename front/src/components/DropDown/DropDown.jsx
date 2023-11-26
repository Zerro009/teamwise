import './dropdown.css';


export const DropDown = ({data}) => {



    return(
         data.length != 0 && (
            <div className='searchRes'>
                {data.slice(0, 10).map((value, key) => {
                    return(
                        <button className='dataItem' key={key}>{value.title}</button>
                    )
                }
            )
        }
        </div>
    )
    )
}