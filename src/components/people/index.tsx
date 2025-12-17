import React from 'react'
import Peopleheader from './header'
import Peopletable from './usertable'

const People = () => {
  return (
    <section className='py-5 xl:px-8 px-5 bg-pastel-purple dark:bg-dark-primary-100 h-[93vh] overflow-auto'>
      <Peopleheader />
      <Peopletable />
    </section>
  )
}

export default People