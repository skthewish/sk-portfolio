import React from 'react';
import me from '../../images/me.png';

const Avatar = () => {
  return (
    <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-black dark:border-white p-1 mt-1'>
      <div className=' rounded-full overflow-hidden  bg-slate-600'>
        <img src={me} alt='me' />
      </div>
    </div>
  );
};

export default Avatar;
