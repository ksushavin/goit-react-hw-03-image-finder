import React, { Component } from 'react';
import PropTypes from "prop-types";
import { createPortal } from 'react-dom';
import css from 'components/Modal/Modal.module.css';

const modalRoot = document.getElementById('modal-root');


export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
        document.addEventListener('click', this.handleClick);
    };
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('click', this.handleClick);
    };

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleClick = e => {
        if (e.target.nodeName !== 'IMG') {
            this.props.onClose() 
        }
    }

    render() {
        const { children } = this.props;

        return createPortal (
            <div className={css.overlay}>
                <div className={css.modal}>
                   {children}
                </div>
            </div>,
            modalRoot
        )
    }
}

                  
Modal.propTypes = {
    onClose: PropTypes.func.isRequired, 
}

