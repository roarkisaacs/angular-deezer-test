import { DeezerData } from "./deezer-data.model";
import { Album } from "./album.model";
import { Podcast } from "./podcast.model";
import { Track } from "./track.model";
import { Playlist } from "./playlist.model";
import { Artist } from "./artist.model";

export interface Editorial {
    artists: DeezerData<Artist[]>;
    playlists: DeezerData<Playlist[]>;
    tracks: DeezerData<Track[]>;
    podcasts: DeezerData<Podcast[]>;
    albums: DeezerData<Album>;
}