'use client'

import React from 'react'

const RestrictedPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="container">
        <div className="mx-auto max-w-lg rounded-lg bg-white p-6 text-center shadow-lg md:p-10">
          <h1 className="text-3xl font-semibold text-red-600">Access Restricted</h1>
          <p className="text-gray-700 mt-4">
            This website is currently restricted as the owner has not completed the necessary
            payment.
          </p>
          <p className="text-gray-500 mt-2">
            Please contact support or the website owner for further information.
          </p>
          <div className="mt-6">
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition duration-200 hover:bg-blue-700"
            >
              Retry Access
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestrictedPage
