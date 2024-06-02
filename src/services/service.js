
// const ApiEndpoint = 'http://localhost:4000';

const ApiEndpoint = 'https://portfolioexpressapp.vercel.app';


export const getBlogCatlog = async () => {
    try {
        const response = await fetch(ApiEndpoint + '/blogcatalog');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getBlog = async (id) => {
    try {
        const response = await fetch(ApiEndpoint + `/blog/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const postContact = async (data) => {
    try {
        const response = await fetch(ApiEndpoint + '/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to post data');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

