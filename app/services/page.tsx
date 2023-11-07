"use client"
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const Service = () => {
  return (
    <div>
      <Script src="./geolocation.ts" onLoad={() => console.log('file load')} />

        Service <br/><br/>
        <Link href="/">Go to home page</Link>
    </div>
  )
}

export default Service