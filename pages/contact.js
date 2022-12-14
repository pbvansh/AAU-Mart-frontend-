import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen'>
      <Header name='Contact' />
      <div className='m-20'>
        <p className='bg-orange-400 p-5 text-center font-bold text-2xl rounded-sm text-white'>CONTACT US</p>
        <div className='grid grid-cols-2 p-5'>
          <section>
            <p className='underline text-2xl'>
              Vansh Pratik
            </p>
            <p>
              Arya Boys Hostel,<br />
              <a href='http://www.aau.in' className="text-green-600 font-medium hover:underline">Anand Agricultural University,</a><br />
              Anand : 388110.<br />
              Gujarat (BHARAT) .<br />
            </p>
            <p className='font-semibold '>Phone:</p>
            <p>
              (Work) +91 7096227996<br />
              E-Mail: <a href='vanshpratik0165@gmail.com' className='hover:underline'>vanshpratik0165@gmail.com</a>
            </p>
          </section>
          <section>
            <p className='underline text-2xl'>
              Web Administrator:
            </p>
            <p className='font-semibold '>Vansh Pratik</p>
            <p>
              College of Agriculture Information Technology Anand,<br />
              <a href='http://www.aau.in' className='hover:underline'>Anand Agricultural University,</a><br />
              Anand : 388110.<br />
              Gujarat (BHARAT) .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact
