import React from 'react';
import css from 'components/Button/Button.module.css'

export default function Button({ onClick }) {
  return (
        <button
            type='submit'
            className={css.loadMore}
            onClick={onClick}
            >Load more
        </button>
    )
}
