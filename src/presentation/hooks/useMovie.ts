import { useEffect, useState } from 'react';

import * as UseCases from '../../core/use-cases/movie';
import { movieDbFetcher } from '../../config/adapters';
import { Cast, FullMovie } from '../../core/entities';

export const useMovie = ( movieId: number ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true);

        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDbFetcher, movieId);
        const castPromise = UseCases.getMovieCastUseCase( movieDbFetcher, movieId);
        
        const [ fullMovie, cast ] = await Promise.all([
            fullMoviePromise,
            castPromise,
        ])

        setMovie( fullMovie );
        setCast( cast )

        setIsLoading(false);
    };

    return {
        //* Props
        isLoading,
        movie,
        cast

        //* Methods
    };
};
