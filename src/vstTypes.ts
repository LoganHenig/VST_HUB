export type CommentType = {
    message: string,
    votes: number,
    author: User,
    replys: CommentType[],
}
type User = {
    name: string,
}