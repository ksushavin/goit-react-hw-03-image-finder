// import React, { Component } from 'react';
// import Loader from 'components/loader/Loader';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import fetchApi from 'components/services/imagesAPI';
// import Button from 'components/Button/Button';
// import css from 'components/ImageGallery/ImageGallery.module.css'

// export default class ImageGallery extends Component {

//     state = {
//         images: [],
//         status: 'idle',
//         error: null,
//         page: 1,

//     }

//     loadMore = () => {
//         this.setState(prevState => {
//             return { page: prevState.page + 1 }
//         });
//     }
      
//     fetchImages = (imageQuery, page) => {
//         const { images } = this.state;

//         fetchApi(imageQuery, page)
//         .then(data => {
//             if (data.hits.length) {
//                 this.setState({ images: [...images, ...data.hits], status: 'resolved' });
//                 return
//             }
//             return Promise.reject(
//                 new Error(`Немає результатів за запитом ${imageQuery}`)
//             )
//         })   
//         .catch(error => {
//             this.setState({ error: error, status: 'rejected' });
//         })  
//     }

    
    
//     componentDidUpdate(prevProps, prevState) {
//         const prevImageQuery = prevProps.query;
//         const nextImageQuery = this.props.query;
//         console.log(prevProps.query);
//         console.log(this.props.query);


//         const { page } = this.state;
//         const { fetchImages } = this;
      
//         if (prevImageQuery !== nextImageQuery ) {
//             this.setState({ status: 'pending'});
//             fetchImages(nextImageQuery, page);
//             return
//         }
//         if (prevState.page !== page) {
//             this.setState({ status: 'pending' });
//             fetchImages(prevImageQuery, page);
//             return
//         }
//     }

//     render() {
//         const { status, error, images } = this.state;
//         const { loadMore } = this;

//         if (status === 'rejected') {
//             return(<div>{error.message}</div>)
//         }
//         if (status === 'pending') {
//             return<Loader />
//         }
//         if (status === 'idle') {
//             return(<div>Введіть запит</div>)
//         }
//         if (status === 'resolved') {
//             const imagesList = images.map(({ webformatURL, largeImageURL, id }) => {
//                 return (
//                     <>
//                         <ImageGalleryItem url={webformatURL} key={id} largeImage={largeImageURL} />
//                     </>
//                 )
//             })

//             return (
//                 <>
//                     <ul className={css.imageGallery}>
//                         {imagesList}
//                     </ul>
//                     <button
//                         type='button'
//                         className={css.loadMore}
//                         onClick={loadMore}
//                         >Load more
//                     </button> 
//                 </>  
//             ) 
//         } 
//     }
// }
// {/* <Button onClick={loadMore} /> */}