import { useEffect, useState } from 'react';

import { Movie } from '../../core/entities';
import * as UseCases from '../../core/use-cases/movies';
import { movieDbFetcher } from '../../config/adapters';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase( movieDbFetcher );
        const popularPromise = await UseCases.moviesNowPlayingUseCase( movieDbFetcher );
        const topRatedPromise = await UseCases.moviesNowPlayingUseCase( movieDbFetcher );
        const upcomingPromise = await UseCases.moviesNowPlayingUseCase( movieDbFetcher );

        const [
            nowPlayingMovies,
            popularMovies,
            upcomingMovies,
            topRatedMovies,
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            upcomingPromise,
            topRatedPromise,
        ]);

        setNowPlaying( nowPlayingMovies );
        setPopular( popularMovies );
        setTopRated( topRatedMovies );
        setUpcoming(upcomingMovies);

        setIsLoading( false );
    };

    return {
        //* Props
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,
        //* Methods
    };
};
