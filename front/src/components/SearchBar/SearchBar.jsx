import './searchbar.css';
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { DropDown } from '../DropDown/DropDown';



export const SearchBar = ({placeholder}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState ([]);
    const [clear, setClear] = useState("");
    const [checkInput, setCheckInput] = useState(true);

    const handleInput = (event) => {
        const searchInput = event.target.value
        setClear(searchInput)
        const newInput = data.filter((value) => {
            return value.title.toLowerCase().includes(searchInput.toLowerCase());
        })
        if (searchInput === ""){
            setFilteredData([]);
        }
        else{
            setCheckInput(false);
            setFilteredData(newInput);
        }
    }
    

    useEffect(() => {
        fetchData()
        console.log(data)
    }, [])
    
    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const clearInput = () => {
        setCheckInput(true);
        setFilteredData([]);
        setClear("")
    }

    if (data) {
        return (
            <div className='search'>
                <div className='inputS'>
                    <input 
                        type="text" 
                        placeholder={placeholder}
                        value={clear}
                        onChange={handleInput}
                    />
                    {filteredData.length !== 0 || checkInput === false ? <IoCloseOutline id="cbtn" onClick={clearInput}/> : <FaSearch className='icon' />}
                    
                </div>
                    <DropDown data = {filteredData}/>  
            </div>
        ) 
    } else {
       
    }

           
}