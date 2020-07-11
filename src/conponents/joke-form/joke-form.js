import React, {useState} from 'react'
import './joke-form.css'
import ChuckService from '../../services/Chuck-service'
import Joke from '../joke-item/Joke-item'
import CategoryList from '../category-list/category-list'

const Chuck = new ChuckService()

const Form = () => {
  const [jokes, setJokes] = useState()
  const [selectedCategory, setSelectedCategory] = useState()
  const [inputValue, setInputValue] = useState('')
  const [radioValue, setRadioValue] = useState()

    const getJoke = () => {

      if (radioValue === 'category' && selectedCategory) {
        Chuck.getByCategory(selectedCategory)
        .then((data) => {
          setJokes([data])
        })
      } else if (radioValue === 'text') {
        Chuck.getByTextSearch(inputValue)
        .then((data) => {
          setJokes(data)
        })
      } else {
        Chuck.getRandomJoke()
        .then((data) => {
          setJokes([data])
        })
      }
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
}

  return (
    
    <>
    <div className="form">
        <div className="input">
          <input type="radio" name="joketype" defaultChecked onChange={() => { setRadioValue('random') }} id="random"/>
          <label htmlFor="random">Random</label>
        </div>
        <div className="input">
          <input type="radio" name="joketype" onChange={() => {setRadioValue('category')}} id="categories"/>
          <label htmlFor="categories">From categories</label>
        </div>
        {radioValue === 'category' && (
                            <CategoryList
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                        )}
        <div className="input">
          <input type="radio" name="joketype" onChange={() => {setRadioValue('text')}} id="search"/>
          <label htmlFor="search">Search</label>
        </div>
        {radioValue === 'text' && (
          <input type="text" placeholder="Free text search..." id="searchfield" onChange={handleInput} />
        )}
        <input type="button" value="Get a joke" className="get-joke" onClick={getJoke} />
    </div>
    { jokes && jokes.map((item) => {
      const { value, categories, id, url  } = item;
      return (
        <Joke 
          key={id}
          value={value}
          categories={categories}
          id={id}
          url={url}
        />
      )
    })}
    </>
  )
  
}

export default Form;