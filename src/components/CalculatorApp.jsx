import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const CalculatorApp = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-5'>
            <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
                <GiHamburgerMenu/>
                <p>Calculator App</p>
            </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default CalculatorApp
