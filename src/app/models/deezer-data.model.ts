export interface DeezerData<T> {
    data: T;
    total: number;
    next?: string;
}