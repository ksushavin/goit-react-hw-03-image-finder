import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';
import css from 'components/Searchbar/Searchbar.module.css'
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// Your API key: 29185241 - cb51d998a1035b93afc10950d

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
                        <BsSearch className={css.appLogo} />
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



