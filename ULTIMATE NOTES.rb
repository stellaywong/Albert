# if you're reading this it's already too late to cop my album

# 1. user auth ########################################################################################
# - being signed in relies on: a) session b) user model
# FIGVAPER
# Find_by_credentials (checks if a) your account/user exists (username/email) b) if it exists, does the password (post-bcrypt) aka "password_digest" match what you saved in database (post-bcrypt). most importantly: check if password matches password
# Is_password?(password) use bcrypt to check
# Generate_session_token: how we know if we're online
# Validate_password: validate that the password is long enough, AND it can be nil (because then you can have accounts without passwords pre-bcrypt, at first.)
# Attr_reader: for the password we pass in (password instead of @password). After_initialize: calls Ensure_session_token to auto-create a session token once we create a new user.
# Password=(password). Ruby-specific (so user auth in a different langauge should adapt this method to "after password is made, make a password digest"). WHen we make a new user and pass in values, it automatically runs password=(password) but right now we're updating to a bunch of custom things--when a user is assigned a password, the password_digest gets created at the same time.
# Ensure_session_token: check if we already have a session_token, do nothing. if haven't, make one. is a double-check.
# Reset_session_token: used a lot. creates a new session_token for us, returns the new session token. we also add self.save in here because it adds to the database: if you accidentally refresh the page, the session_token remains the same.
# ERGO
# 1. find_by_credentials, in any other database, check for users. if we use node.js (is rails framework using javascript language) (all javascript background) if you do MERN, must adapt user auth to javascript methods.
# 2. session token creation and resetting is important. (GER)

# CELLL
# in the application controller --> now these methods are shared between ANY controller. that's the reason we write it up here.
# Current_user: make a class variable called @current_user. if the current_user doesn't exist, check the session_token to see if any current_user matches that.
# Ensure_login: checks if you're logged in. if not, raise an error or redirect you to the sign in page, depending on how you direct them. actually this is no longer useful because we have the one-page frontend custom error rendering so this would never get hit.
# Login: create session_token and makes sure it's saved into the a) browser b) database. to make sure they're matching later.
# Logged_in?: !!current_user, just to see if current_user exists.
# Logout: destroy session_token: user gets a new one, and the browser-side's is nil: the two will never match up unless we want them to.

# 2. Flow of information from the rails backend to the frontend ########################################
# we never mess wiht the ROUTER (routes.rb file) because frontend --info--> router which checks what comes in, sends it ot hte right controller.
# CONTROLLER (ex. Track controller): 0) has methods 1) accesses the database. it returns the database info in a @MODEL (must be class variable ex. @tracks, @annotations), maybe as an array.
    # @track = Track.find, this one is a model
    # @tracks = Track.all, this one is an array of track models, each holds its own information
    # you can do special things in the controller like @author = track.author because of 1) associations that you had in the model.rb file, and 2) because Track < ApplicationRecord (Track controller inherits from this ApplicationRecord which gives you belongs_to, has_many (Associations functions), .where, .all, .find, ALL the special methods you used to access the database come from ApplicationRecord)
# MODEL
    # model allows you to interact wiht the database using RUBY not SQL. the advantage is: you can write ruby (lots more methods). sql you're limited to whatever you need, plus the 
    # "Track" is the class that's created in the track.rb model file
    # the controller uses Track to format data from the database for use in ruby.
    # Track < ApplicationRecord (you can add special methods to this one) < ActiveRecord (bc they prefer you never to touch this one)
    # model holds: 
        # -validations, 
        # -associations (@author), 
        # -attr_accessor for all class variables (author_id instead of @author_id), 
        # -ActiveRecord methods (ex. .all, .find, .where, .save, .destroy (destroy and destoy_all you've seen in seed file))
# the model is sent to the VIEW (jbuilder: all ruby, a special javascript library. all it does is convert Ruby --> JSON (javascript object notation) aka it always returns javascript objects (in the frontend it will always be a javascript object {}). we're making a javascript object with ruby language and methods, because our FRONTEND is all in javascript)
# jbuilder view returns ONE javascript object {}, with multiple keys (ex: .lyrics, .author_id)
# track = {
#     lyrics: "...",
#     author_id: "...",
#     0: "..."
# }
    # you key into an object as track.lyrics, track.author_id, track.title
    # track.name1 SAME AS track["name1"] but favor the first type.
# rules:
    # 1. all javascript keys are strings! even if you put in a #, javascript will be helpful and convert it into "#".
    # ex. track.name1, NOT track.0: if the key is an actual string that doesn't begin with numbers, you can use this notation.
    # so it must be track[0] (won't index in)
    # 2. everything in javascript is an object! so callbacks work: pass a function into another function works because they treat both like objects.

# console.log returns undefined, so if your function is only a console.log, then it errors out

# PAYLOAD is: a crate with multiple layers of styrofoam-packed fruits. apples | pears | pineapples.
# router --track#show method--> Track controller --@track, @author=track.author--> view/jbuilder (ruby-->json)--payload= {track: {track info}, author: {author info}}--> frontend
# so now you can have author name as well as track info on your track's show page.
# this is all still backend.
# payload is better than 5 ajax requests for your index page. it optimizes your site so users don't need to wait to see a page.

# json notation: ################################################################################
# we're still in the backend. we went into 2 tables (by adding methods to controller), and now we are packing that fruit crate nicely to make the payload.
# json.thing means you're creating a key. json.key
# json.action! means you're using a json method. they are followed by !
# json.track (you're creating the object's key) do ... end. (between the "do" and the "end" you're setting that object's values)

# json.track do
    # json.extract! @id (we always want to pick up the thing's id from the database first), @track, :lyrics, :authori_id, :title (you're taking out the @track (a class variable from controller)'s getter methods (ex. def lyrics --> returns @lyrics))
# end
# json.author do
    # json.extract! @id, @name
# end
# so it looks like payload: {track: {lyrics: "...",
                                    # author_id: "..."}
                            # {author: {
                                    #     id: "..."
                            # }}
                            # }

    # file names can be .originalformat.newformat
    # index.json.jbuilder is in jbuilder format (like .rb)
    # thing.html.erb is in erb format so we can use erb(ruby) on a html file

# json partials: why they're used ##############################################################
# let's say we're doing track index, and track show.
# they would share a partial that extracts the track's lyrics, and the track's title.
# partial goes into folder structure: views/api/tracks/_track.json.jbuilder
    # json.extract! stellaTrack :id, :authro_id, :lyrics, :title
# the partial file name must begin with an underscore _thing

# @tracks.each do |track| <-- track here is a track model
#   json.set! track.id do 
#       json.partial! "api/tracks/track", track: track (track key (from the partial where you did json.extract! stellaTrack) set to track values like (:id, :lyrics, :author_id))
            # partial journey begins at views folder, so it goes into api folder, then tracks folder, then IGNORES the underscore of the partial file name
#   end
# end

# output = {
#     317 (from the loop's track.id): {lyrics: "..."},
#     322 (from the loop's track.id): {lyrics: "..."},
#     341 (from the loop's track.id): {lyrics: "..."}
# }

# json.tracks do    <-- this sets the key name when you need yet another layer
# end

# json.authors do    <-- this sets the key name when you need yet another layer
#   @authors.each do |author| <-- from the array, one element
#       json.set! author.id do  <-- set inner object key
#           json.extract! author :username <-- set inner object value
#       end
#   end
# end

# some other cool thing:
# how to make the jbuilder payload more javascript-friendly:
# instead of author_id from the first, general extract
# you can write an extra line like track.authorId: author_id
# so you have track: {lyrics: "...",
                    # title: "",
                    # authorId: ""}

#3. Frontend ####################################################
# thunk lets asynchronous stuff happen, without the slow (going into database) synchronous stuff.
# redux: reducers, actions
# react: just components

# 3. how to make one feature

# 4. JSX
 # jsx is an extra form of javascript. it allows you to create html elements such as <h2>, but that's not technically an h2: it's a javascript object.
    # this is why we can say const header = <h2> </h2> because it's technically not an html thing, it's a jsx object that is rendered as html.
    # it's a javascript object that stores html to be rendered
    # class="" --> className=""
    # selected --> selected={true}
        # jsx converted into javascript converted into html
        # we use curlies because of jsx
        # declaredconst variablename = <React component />

    # we use jsx files so when we use react components, we can use all the same operations you'd normally put on a jsx
    # in our index.html, we'd have <main id="root"></main> and we render React stuff onto the root
    # jsx allows us not to use documentElementById every single time, just once, thanks to the nice jsx layout!

    # instead of this:
        # const root = documentGetElementById('root')
        # root.innerHTML = <h2>Hi</h2>
        # root.append(React.createElement())

    # we have:
        # <main id="root">  <-- almost everything isn't self-closing, inputs
            # <header />
            # <p>
            # <Navbar />    <-- React component is self-closing
        # </main> 
        # pros: it's cleaner (less repetition) && more intuitive to the final rendered page layout

# 10. Bugs ####################################################
# how we fixed the annotation bug
# solution 1: add span tags and p tags
# 
# solution 2: add dataOffset
# 