import React, { useEffect, useState } from 'react'
import './category-list.css'
import ChuckService from '../../services/Chuck-service'

const buttonStyleActive ={
  color: '#333333',
  background: '#f8f8f8'
}

const buttonStyle ={
  color: '#ababab',
  background: '#fff'
}

const Chuck = new ChuckService()
const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
    const [categoriesArray, setCategoriesArray] = useState([])

    useEffect(() => {
        Chuck.getListOfCategories()
            .then((data) => {
                setCategoriesArray(data)
            })
    }, [])

    return categoriesArray.map((category, index) => {
        
        const active = selectedCategory === category

        return (
            <button className='categories-button'
                active={active}
                onClick={() => {setSelectedCategory(category)} }
                key={index}
                style={active ? buttonStyleActive : buttonStyle}>
                {category.toUpperCase()}
            </button>
        )
    })
}
export default CategoryList;