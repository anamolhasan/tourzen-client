import React from 'react'
import FeaturedPackages from '../../components/ui/FeaturedPackages'
import ExtraSection1 from '../../components/ui/ExtraSection1'
import ExtraSection2 from '../../components/ui/ExtraSection2'
import Banner from '../../components/ui/Banner'
import ImageGallery from '../../components/ui/ImageGallery'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedPackages />
      <ExtraSection1 />
      <ExtraSection2 />
      <ImageGallery />
    </div>
  )
}

export default Home