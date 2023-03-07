import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {


  return (
    <div>
      <div className="flex items-center ga-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          
        </label>
      </div>
    </div>
  )
}

export default FormField