/* API Controllers */

import { IrisImage } from '../models/images.js'

export async function fetchImages() {

    // Get image json from api
    const jsonResponse = await fetch('http://127.0.0.1:5000/')
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log('API ERROR: ' + e));

    // Convert objects into images and return
    let images = []
    jsonResponse.forEach(obj => {
        try {
            images.push(new IrisImage(obj));
        }
        catch(e) {
            console.log(`ERROR CREATING IMAGE ${obj.id}: ${e}`);
        }
    });

    console.log(images);
    return images;
}