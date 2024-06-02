import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/', // Replace with your base URL
    timeout: 5000, // Set the timeout value in milliseconds
    headers: {
        'Content-Type': 'multipart/form-data', // Set the content type header to accept a file
        // Add any other headers you need
    },
});

// export const uploadFile = (file) => {
//     const formData = new FormData();
//     formData.append('file', file);

//     return instance.post('/upload', formData);
// };

export default instance;