json.annotation do
    json.partial! 'api/annotations/annotation', annotation: @annotation
end

json.user do
    json.partial! 'api/users/user', user: @annotation.annotator
    # the partial, _user, already has user, from which is extracted their username
end