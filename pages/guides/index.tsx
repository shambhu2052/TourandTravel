import Discounts from '@/components/Discounts'
import FeatureGuides from '@/components/FeatureGuides'
import Partners from '@/components/Partners'
import Service from '@/components/Service'
import Banner2 from '@/components/about_components/Banner2'
import ExperienceGuides from '@/components/guides_components/ExperienceGuides'
import FeatureGuide from '@/components/guides_components/FeatureGuide'
import React from 'react'

const index = () => {
    return (
        <div>
            <Banner2 title="Tour Guides" slug="Guides" />
            <FeatureGuide />
            <ExperienceGuides />
            <div className='container mx-auto'>
                <Discounts />
            </div>
            <Service />
            <Partners />

        </div>
    )
}

export default index