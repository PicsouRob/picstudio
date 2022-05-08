import React from 'react';

function FooterUseFullLink({ data }) {
  return (
    <div className="flex-col space-y-6">
        <h1 className="font-[500] leading-6 text-[12px] hover:underline cursor-pointer">{data.title}</h1>
    </div>
  )
}

export default FooterUseFullLink;