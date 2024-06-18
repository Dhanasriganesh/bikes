import React, { Fragment, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../../routers/Routers'
import Tvs from '../../../pages/Hero'

function Layout() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
   <Fragment>
    <Header  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div>
        <Routers />
    </div>
    <Footer />
   </Fragment>
  )
}

export default Layout