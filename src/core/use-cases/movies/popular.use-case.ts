import { HttpAdapter } from '../../../config/adapters/http';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import type { Movie } from '../../entities';

interface Options {
    page?: number;
    limit?: number;
}

export const PopularUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {
    try {

        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                page: options?.page ?? 1,
            },
        });

        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        throw new Error('Error fetching movies - Popular');
    }
};
