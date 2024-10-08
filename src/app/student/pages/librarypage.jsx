import React from 'react'
import CommonLayout from '../../../layouts/CommonLayout'
import BookStatusBar from '../component/bookstatusbar'
import LibraryCard from '../component/librarycard'

const LibraryPage = () => {
  return (
    <CommonLayout color="gray" header="none">
        <div className='bg-themeGray w-full my-2 h-[calc(100vh-64px)] overflow-y-scroll p-6'>
        <BookStatusBar />
        <LibraryCard type="Books" />
        <LibraryCard type="Games" />
        <LibraryCard type="Fun & Learn" />
        </div>
        </CommonLayout>
  )
}

export default LibraryPage