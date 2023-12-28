import React from 'react'
import Showcase from '../../components/layouts/showcase/Showcase'
import Footer from "../../components/layouts/footer/Footer"
import ProductListing from '../../components/layouts/product-listing/ProductListing';

function HomePage() {
  return (
    <div>
      <section>
            <Showcase/>
            <ProductListing/>
            {/* <Footer/> */}
       </section>
    </div>
  )
}

export default HomePage
