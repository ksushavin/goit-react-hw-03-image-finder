import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';
import css from 'components/Searchbar/Searchbar.module.css'


export default class Searchbar extends Component {
    state = {
        imageQuery: '',
    }

    handeImageChange = e => {
        e.preventDefault();
        this.setState({
            imageQuery: e.currentTarget.value.toLowerCase()
        })
    }

    resetForm = () => {
        this.setState({
            imageQuery: ''
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const{ imageQuery }=this.state 

        if (imageQuery.trim() === '') {
            toast.error('Введите ваш запрос');
            return
        }

        this.props.onChange('imageQuery', imageQuery);
        this.resetForm();
    }

    render() {
        const { handeImageChange, handleSubmit, state } = this;
    return (
        <header className={css.searchbar}>
            <form onSubmit={handleSubmit} className={css.searchForm}>
                <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}>
                        <BsSearch />
                    </span>
                </button>

                <input
                    onChange={handeImageChange}
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={state.imageQuery}
                />
            </form>
        </header>)    
    }
}



