# add this top line: object called "comments" pointing to another object filled with comments
# assign all of your comments to an variable called comments
# we're now turning all the comments into a payload
json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end

json.users do
    @comments.each do |comment|
        json.set! comment.commenter.id do
            json.partial! 'api/users/user', user: comment.commenter
        end
    end
end