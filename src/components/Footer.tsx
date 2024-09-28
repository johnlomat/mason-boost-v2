import React from 'react'
import NewsLetterForm from '@/components/forms/NewsLetter'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="relative bg-white py-16">
        <div className="container">
          <div className="space-y-6 bg-brown p-16">
            <div className="header-2 uppercase text-white">
              <h2>Newsletter</h2>
            </div>
            <NewsLetterForm />
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
