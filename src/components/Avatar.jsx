import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Avatar = () => {
  return (
    <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-black dark:border-white p-1 mt-1'>
      <div className=' rounded-full overflow-hidden  bg-slate-600'>
        <StaticImage src='../images/me.png' alt='me' />
      </div>
    </div>
  );
};

export default Avatar;
