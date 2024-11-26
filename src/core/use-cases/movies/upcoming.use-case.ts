import { HttpAdapter } from '../../../config/adapters/http';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import type { Movie } from '../../entities';

export const UpcomingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    try {

        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        throw new Error('Error fetching movies - Upcoming');
    }
};
