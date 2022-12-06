import React from 'react'
import Avatar from '@mui/joy/Avatar';
import { AvatarGroup } from '@mui/joy';

export default function Skills() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
    <div className='text-4xl p-2 flex border-2 max-w-sm m-2 sm:p-3 sm:mx-auto justify-center sm:text-5xl my-10 text-center bg-slate-100'>
        <h1 className="">Tech Stack</h1>
      </div>
    <div className=''>
        <AvatarGroup className=" gap-x-6 sm:gap-x-20 justify-center pb-4" size='lg'>
        <Avatar alt="Javascript" src={prefix + "/javascript.png"}/>
        <Avatar alt="React" src={prefix + "/react.jpg"} />
        <Avatar alt="Java" src={prefix + "/java.png"} />
        <Avatar alt="Html" src={prefix + "/html.png"} />
        <Avatar alt="Python" src={prefix + "/python.png"} />
        <Avatar alt="Sql" src={prefix + "/sql.png"} />
        </AvatarGroup>
        </div>
    </>
  )
}
