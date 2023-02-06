export interface Artist {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_fan?: number;
    nb_album?: number;
    radio: boolean;
    tracklist: string;
    position?: number;
    type: string;
}