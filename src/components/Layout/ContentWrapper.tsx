import React from 'react'
import { Head } from '../Head'

const ContentWrapper = ({ title, children }: { title: string, children: React.ReactElement | React.ReactElement[] }) => {
    return (
        <div className='p-4'>
            <Head title={title} />
            {children}
        </div>
    )
}

export default ContentWrapper