
export type SongName = "Talviuni" | "Anna Mun Mennä" | "Inessiivi" | "Lopun Alku" | "Haamu Koneessa" | "Lankeemus";

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
        youtubeUrl: "https://youtube.com/embed/VSkULlB3Siw",
        spotifyUrl: "https://open.spotify.com/embed/track/35KcEsXqf6oRcycshBHSj0"  
    },
    {
        name: 'Anna Mun Mennä',
        order: 2,
        youtubeUrl: "https://www.youtube.com/embed/UqFDkL5yWeU" ,
        spotifyUrl: "https://open.spotify.com/embed/track/1zHDSSpNr5tld3r7BvquIe"  
    },
    {
        name: 'Haamu Koneessa',
        order: 3,
        youtubeUrl: "https://www.youtube.com/embed/F_nWPoeIj6A" ,
        spotifyUrl: "https://open.spotify.com/embed/track/57bJo7R2IDayPD2yXkhXYs"  
    },
    {
        name: 'Inessiivi',
        order: 4,
        youtubeUrl: "https://youtube.com/embed/iebKYt_LWtA" ,
        spotifyUrl: "https://open.spotify.com/embed/track/5fJuPGM7pfo4baP3lJyU9g"  
    },
    {
        name: 'Lopun Alku',
        order: 5,
        youtubeUrl: "https://www.youtube.com/embed/Xp7tBQzOmfY",
        spotifyUrl: "https://open.spotify.com/embed/track/08vu6MJQQwqVGo2wXRbcEt"  
    },
    {
        name: 'Lankeemus',
        order: 6,
        youtubeUrl: "https://www.youtube.com/embed/YnbUlm00kh4",
        spotifyUrl: "https://open.spotify.com/embed/track/2ad8NyQHn42l3KROmxisOn"  
    },
]