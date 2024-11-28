import { HttpAdapter } from '../../../config/adapters/http';
import { NowPlayingResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import type { Movie } from '../../entities';

export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    try {

        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - NowPlaying');

    }
};
