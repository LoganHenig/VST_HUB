export type CommentType = {
    created_at: Date,
    is_reply: boolean,
    message: string,
    product_id: string,
    replies: string[],
    updated_at: string;
    user_id: string;
    votes: number;
    _id: string;
    parent_id: string;
}