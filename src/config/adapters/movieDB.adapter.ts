import { AxiosAdapter } from './http';

export const movieDbFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '97ee1abc1fe808eaefdd06f6d1042d85',
        language: 'es',
    },
});
