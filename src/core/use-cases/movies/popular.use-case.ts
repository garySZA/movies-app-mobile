import { HttpAdapter } from '../../../config/adapters/http';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import type { Movie } from '../../entities';

export const PopularUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    try {

        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        throw new Error('Error fetching movies - Popular');
    }
};
