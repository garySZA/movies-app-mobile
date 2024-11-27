import { AxiosAdapter } from './http';

export const movieDbFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '2cbac83ad6bef30af3cec66c4555f37c',
        language: 'es',
    },
});
