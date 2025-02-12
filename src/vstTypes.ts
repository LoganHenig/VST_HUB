export type CommentType = {
    message: string,
    votes: number,
    author: User,
    replies: CommentType[],
}
type User = {
    name: string,
}