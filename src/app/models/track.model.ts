import { Album } from "./album.model";
import { Artist } from "./artist.model";

export interface Track {
    id: number;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_context_lyrics: number;
    explicit_context_cover: number;
    preview: string;
    md5_image: string;
    position: number;
    artist: Artist;
    album: Album;
    type: string;
}