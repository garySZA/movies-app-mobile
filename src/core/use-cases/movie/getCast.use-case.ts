import { HttpAdapter } from '../../../config/adapters/http';
import { MovieDBCastResponse } from '../../../infrastructure/interfaces';
import { CastMapper } from '../../../infrastructure/mappers';
import { Cast } from '../../entities';

export const getMovieCastUseCase = async ( fetcher: HttpAdapter, movieId: number ): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${ movieId }/credits`)

        const actors = cast.map( CastMapper.fromMovieDBCastToEntity );

        return actors;

    } catch (error) {
        throw new Error(`Cannot get movie cast ${ movieId }`);
    }
}