'use client'

import React, { useRef, useState } from 'react'

const AgeCalculator = () => {
  const [age, setAge] = useState({})
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const day = parseInt(form.day.value)
    const month = parseInt(form.month.value)
    const year = parseInt(form.year.value)

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const inputDate = new Date(year, month - 1, day)

    if (
      isNaN(day) ||
      isNaN(month) ||
      isNaN(year) ||
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1900 ||
      year > today.getFullYear() ||
      inputDate >= today
    ) {
      setErrors({
        day: isNaN(day) || day < 1 || day > 31,
        month: isNaN(month) || month < 1 || month > 12,
        year: isNaN(year) || year < 1900 || year > today.getFullYear(),
        date: inputDate >= today,
      })
      setAge({})
      return
    }

    setErrors({})
    setAge(calculateAge(day, month, year, today))
    formRef.current.reset()
  }

  const calculateAge = (day, month, year, today) => {
    const birthDate = new Date(year, month - 1, day)
    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--
      months += 12
    }
    if (days < 0) {
      months--
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    return { years, months, days }
  }

  const renderError = (field) => {
    if (!errors[field]) return null
    return <span className='text-red-500 text-xs'>Invalid {field}</span>
  }

  return (
    <div className='font-poppins text-2xl h-screen flex items-center justify-center bg-gray-200'>
      <div className='bg-white w-full max-w-xl my-40 rounded-2xl rounded-br-[8rem]'>
        <form
          ref={formRef}
          className='flex lg:p-10 p-3 gap-5 relative'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col gap-1'>
            <label
              className='text-xs text-[#BEBEBE] uppercase font-bold'
              htmlFor='day'
            >
              Day
            </label>
            <input
              placeholder='DD'
              className={`rounded-md w-28 font-bold focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 ${
                errors.day ? 'border-red-500' : ''
              }`}
              type='text'
              name='day'
            />
            {renderError('day')}
          </div>

          <div className='flex flex-col gap-1'>
            <label
              className='text-xs text-[#BEBEBE] uppercase font-bold'
              htmlFor='month'
            >
              Month
            </label>
            <input
              placeholder='MM'
              className={`rounded-md w-28 font-bold focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 ${
                errors.month ? 'border-red-500' : ''
              }`}
              type='text'
              name='month'
            />
            {renderError('month')}
          </div>

          <div className='flex flex-col gap-1'>
            <label
              className='text-xs text-[#BEBEBE] uppercase font-bold'
              htmlFor='year'
            >
              Year
            </label>
            <input
              placeholder='YYYY'
              className={`rounded-md mb-14 w-28 font-bold focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 ${
                errors.year ? 'border-red-500' : ''
              }`}
              type='text'
              name='year'
            />
            {renderError('year')}
          </div>
          <button
            className='absolute right-44 lg:right-10 -bottom-9 '
            type='submit'
          >
            <img
              className='bg-purple-500 hover:bg-gray-900 rounded-full p-3'
              src='/age-calculator/icon-arrow.svg'
              alt='Arrow Icon'
            />
          </button>
        </form>
        <hr className=' mx-10 mb-10' />
        <div className='p-10 lg:text-7xl text-5xl italic font-bold flex flex-col gap-5'>
          <h3>
            <span className='text-[#7D3CF8]'>{age.years || '--'}</span> years
          </h3>
          <h3>
            <span className='text-[#7D3CF8]'>{age.months || '--'}</span> months
          </h3>
          <h3>
            <span className='text-[#7D3CF8]'>{age.days || '--'}</span> days
          </h3>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator
