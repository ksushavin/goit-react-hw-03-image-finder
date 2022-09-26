import React from 'react';
import css from 'components/Button/Button.module.css'

export default function Button({ onClick }) {
  return (
        <button
            type='submit'
            className={css.loadMoreBtn}
            onClick={onClick}
            >Load more
        </button>
    )
}
