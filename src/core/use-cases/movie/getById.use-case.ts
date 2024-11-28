import { HttpAdapter } from '../../../config/adapters/http';
import { MovieDBMovie } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import { FullMovie } from '../../entities';

export const getMovieByIdUseCase = async ( 
    fetcher: HttpAdapter, 
    movieId: number
): Promise<FullMovie> => {
    try {
        //Usar fetcher
        const movie = await fetcher.get<MovieDBMovie>(`/${ movieId }`);
        
        // hacer mapeo y return
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

        // return movie
        return fullMovie;

    } catch (error) {
        throw new Error(`Cannot get movie by id ${ movieId }`);
    }
}