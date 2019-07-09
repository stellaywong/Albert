json.annotations do 
    @annotations.each do |annotation|
        json.set! annotation.id do
            json.partial! 'api/annotations/annotation', annotation: annotation
        end
    end
end

# set each user's username to their annotations as annotator (through associations)
# turned into a payload :)
json.users do
    @annotations.each do |annotation|
        json.set! annotation.annotator.id do
            json.partial! 'api/users/user', user: annotation.annotator
        end
    end
end