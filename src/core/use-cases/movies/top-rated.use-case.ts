import { HttpAdapter } from '../../../config/adapters/http';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import type { Movie } from '../../entities';

export const TopRatedUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    try {

        const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

        return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        throw new Error('Error fetching movies - topRated');
    }
};
