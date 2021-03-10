export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import ('@/components/City')
        },
        {
            path : 'nowplaying',
            component : () => import ('@/components/NowPlaying')
        },
        {
            path : 'comingmovie',
            component : () => import ('@/components/Comingmovie')
        },
        {
            path : 'search',
            component : () => import ('@/components/Search')
        },
        {
            path : '/movie',
            redirect : '/movie/nowplaying'
        } 
    ]
}