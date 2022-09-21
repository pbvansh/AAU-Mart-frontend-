import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen'>
      <Header name='Contact'/>
      <div className='m-20'>
        <p className='bg-orange-400 p-5 text-center font-bold text-2xl rounded-sm text-white'>CONTACT US</p>
        <div className='grid grid-cols-2 p-5'>
          <section>
            <p className='underline text-2xl'>
              Registrar
            </p>
            <p>
              University Bhavan,<br />
              <a href='http://www.aau.in' target={'_blank'} ref="noreferrer" className="text-green-600 font-medium hover:underline">Anand Agricultural University,</a><br />
              Anand : 388110.<br />
              Gujarat (BHARAT) .<br />
            </p>
            <p className='font-semibold '>Phone:</p>
            <p>
              (Office) +91-2692-261310<br />
              Fax: +91-2692-261310<br />
              E-Mail: <a href='Gmailto:registrar@aau.in' className='hover:underline'>registrar@aau.in</a>
            </p>
          </section>
          <section>
            <p className='underline text-2xl'>
              Web Administrator:
            </p>
            <p className='font-semibold '>Director - IT</p>
            <p>
              Information Technology Center,<br />
              University Bhavan,<br />
              <a href='http://www.aau.in'  target={'_blank'} ref="noreferrer" className='hover:underline'>Anand Agricultural University,</a><br />
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
