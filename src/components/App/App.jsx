
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';



export class App extends Component {
  state = {
    imageQuery: null,
    showModal: false,
    bigImage: null
  }

  handleChange = (name, value) =>{
    this.setState({
      [name]: value,
    })
  }


  toggleModal = () => {
    this.setState(state => ({
        showModal: !state.showModal})
    )
  }
  
  render() {
    const { handleChange, state, toggleModal } = this;
    return (
      <>
        {state.showModal && <Modal onClose={toggleModal}>
            <button type='button' onClick={toggleModal}>Close</button>
            <img
                src={this.state.bigImage}
                alt=""
            />
        </Modal>}

        <Searchbar onChange={handleChange} />
        <ImageGallery
            query={state.imageQuery}
            openModal={toggleModal}
            getBigImg={handleChange}/>
       
        <ToastContainer
            autoClose={3000}
        />
      </>
    )
  
  }
}

