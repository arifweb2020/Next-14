import Link from 'next/link'
import React from 'react'

export const About = () => {
  return (
    <div>About<br/>
    <Link href="/about/company-profile">Company profile</Link><br/><br/>
        <Link href="/">Go to home page</Link>
    </div>
  )
}

export default About