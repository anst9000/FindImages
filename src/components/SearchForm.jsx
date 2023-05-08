import { useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleSubmit = e => {
    e.preventDefault()

    const searchValue = e.target.elements.search.value
    if (!searchValue) return

    setSearchTerm(searchValue)
  }

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const secretKey = import.meta.env.VITE_UNSPLASH_SECRET_KEY

  // https://api.unsplash.com/search/photos
  // Authorization: Client-ID YOUR_ACCESS_KEY

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='form-input search-input'
          type='text'
          name='search'
          placeholder='cat'
        />
        <button className='btn' type='submit'>
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
