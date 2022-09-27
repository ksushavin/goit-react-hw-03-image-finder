import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from 'components/loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
        <ThreeDots 
            height="100" 
            width="150" 
            radius="9"
            color='blue' 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}
