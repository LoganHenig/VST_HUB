export type CommentType = {
    text: string,
    votes: number,
    author: User,
    replys: CommentType[],
}
type User = {
    name: string,
}