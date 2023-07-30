export interface User {
    avatar_url: string,
    name: string,
    login: string,
    created_at: string,
    bio: boolean,
    public_repos: number,
    followers: number,
    following: number,
    location: string,
    blog: string,
    twitter_username: boolean,
    company: string
    [key: string]: any;
}