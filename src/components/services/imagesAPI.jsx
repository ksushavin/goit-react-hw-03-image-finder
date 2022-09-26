import React from 'react'

export default function fetchApi(imageQuery, page) {
    const url = `https://pixabay.com/api/?q=${imageQuery}&page=${page}&key=29185241-cb51d998a1035b93afc10950d&image_type=photo&orientation=horizontal&per_page=12`;

    return (
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json() 
            }
            return Promise.reject(
                new Error(`Немає результатів запиту ${imageQuery}`)
            )
        })
    ) 
}


