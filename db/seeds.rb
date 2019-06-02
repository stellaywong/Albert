# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist1 = Artist.create(name: "testartist")
Album = Album.create(title: 'testalbum', artist_id: 1)
Track123 = Track.create(title: "test", artist_id: 2, lyrics: "test", uploader_id: 1, album_id: 1)