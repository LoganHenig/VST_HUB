export type CommentType = {
    _id: string,
    message: string,
    votes: number,
    created_at: Date,
    author: string,
    replies: CommentType[],
}
type User = {
    name: string,
}