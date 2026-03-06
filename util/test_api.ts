
import axios from 'axios';

async function test() {
    try {
        // Assuming backend is on localhost:5000 and we need an auth token if possible, 
        // but first let's try to see if it's even reachable or if we can find the port.
        const port = 5000; // Common default
        const baseUrl = `http://localhost:${port}/api/cash-book`;

        console.log(`Testing ${baseUrl}...`);
        // This might fail due to auth, but we can see the error type.
        const response = await axios.get(baseUrl);
        console.log('Response status:', response.status);
        console.log('Response data:', JSON.stringify(response.data, null, 2));
    } catch (error: any) {
        if (error.response) {
            console.log('Error status:', error.response.status);
            console.log('Error data:', error.response.data);
        } else {
            console.error('Error message:', error.message);
        }
    }
}

test();
