import Book from '@/components/Book'
import Discounts from '@/components/Discounts'
import Partners from '@/components/Partners'
import Service from '@/components/Service'
import Banner2 from '@/components/about_components/Banner2'
import Guides from '@/components/about_components/Guides'
import React from 'react'

const index = () => {
    return (
        <div>
            <Banner2 title="About" slug="About us" />
            <Guides />
            <div className='container mx-auto'>
                <Discounts />
            </div>
            <Service />
            <Book />
            <Partners />
        </div>
    )
}

export default index