"use client";

import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation'
import { updatedSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const updatedLimit = (pageNumber+1)*10
        const pathname = updatedSearchParams('limit', `${updatedLimit}`)
        router.push(pathname)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && 
        (
            <CustomButton
            title='Show More'
            customStyles='bg-primary-blue text-white rounded-full'
            btnType='button'
            handleClick={handleNavigation}/>
        )}
    </div>
  )
}

export default ShowMore