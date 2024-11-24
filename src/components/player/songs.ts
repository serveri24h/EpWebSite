
export type SongName = "Talviuni" | "Anna Mun Mennä" | "Inessiivi" | "Dengue Kuume" | "Haamu Koneessa" | "Lankeemus";

export interface SongOption {
    name:SongName,
    order:number,
    youtubeUrl:string,
    spotifyUrl:string
}

export const SongList:SongOption[] = [
    {
        name: 'Talviuni',
        order: 1,
        youtubeUrl: "https://www.youtube.com/embed/POVrLiZJSwA?si=YBLY4ZezkPMO6iKB",
        spotifyUrl: "https://open.spotify.com/embed/track/560AJD7dDXEIX1kPdiNKfZ?utm_source=generator"  
    },
    {
        name: 'Anna Mun Mennä',
        order: 2,
        youtubeUrl: "https://www.youtube.com/embed/myAmD9Ux4fs?si=AAjWUdqs3PjR6BTy" ,
        spotifyUrl: "https://open.spotify.com/embed/track/560AJD7dDXEIX1kPdiNKfZ?utm_source=generator"  
    },
    {
        name: 'Inessiivi',
        order: 3,
        youtubeUrl: "https://www.youtube.com/embed/0lZ37gD6r2I?si=pEMwRyAEjaiSsj9Y" ,
        spotifyUrl: "https://open.spotify.com/embed/track/560AJD7dDXEIX1kPdiNKfZ?utm_source=generator"  
    },
    {
        name: 'Dengue Kuume',
        order: 4,
        youtubeUrl: "https://www.youtube.com/embed/HVzGpRxx0M0?si=qn0z_NJfT0Zj0KBL" ,
        spotifyUrl: "https://open.spotify.com/embed/track/560AJD7dDXEIX1kPdiNKfZ?utm_source=generator"  
    },
    {
        name: 'Haamu Koneessa',
        order: 5,
        youtubeUrl: "https://www.youtube.com/embed/3N9S0ZVNW4k?si=E9cklk4f3pcDgq5m" ,
        spotifyUrl: "https://open.spotify.com/embed/track/560AJD7dDXEIX1kPdiNKfZ?utm_source=generator"  
    },
    {
        name: 'Lankeemus',
        order: 6,
        youtubeUrl: "https://www.youtube.com/embed/mm-2y1ui4i4?si=qmqte_KF_hvBvgDS" ,
        spotifyUrl: "https://open.spotify.com/embed/track/560AJD7dDXEIX1kPdiNKfZ?utm_source=generator"  
    },
]