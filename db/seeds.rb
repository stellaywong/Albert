# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
Artist.destroy_all
Album.destroy_all
Track.destroy_all
User.destroy_all
Annotation.destroy_all

Demouser1 = User.create(username: "DemoUser1", email: "demouser1@gmail.com", password: "password123")

Artist1 = Artist.create(name: "Jorie Graham")
Album1 = Artist1.albums.create(title: 'Erosion')
# fills in the artist based on the association
Track1 = Album1.tracks.create(title: "To A Friend Going Blind", lyrics: "\nToday, because I couldn't find the shortcut through,\nI had to walk this town's entire inner\nperimeter to find\nwhere the medieval walls break open\nin an eighteenth century\narch. The yellow valley flickered on and off\nthrough cracks and the gaps\nfor guns. Bruna is teaching me\nto cut a pattern.\nSaturdays we buy the cloth.\nShe takes it in her hands\nlike a good idea, feeling\nfor texture, grain, the built-in \nlimits. It's only as an afterthought she asks\nand do you think it's beautiful?\nHer measuring tapes hang down, corn-blond and endless,\nfrom her neck.\nWhen I look at her\nI think Rapunzel,\nhow one could climb that measuring,\nthat love. But I was saying,\nI wandered all along the street that hugs the walls,\na needle floating\non its cloth. Once\nI shut my eyes and felt my way\nalong the stone. Outside\nis the cashcrop, sunflowers, as far as one can see. Listen,\nthe wind rattles in them,\na loose worship\nseeking an object,\nan interruption. Sara,\nthe walls are beautiful. They block the view.\nAnd it feels rich to be\ninside their grasp.\nWhen Bruna finishes her dress\nit is the shape of what has come\nto rescue her. She puts it on.", uploader_id: Demouser1.id)
Track1.artist_id = Artist1.id
Trackphoto1 = open("https://rhymestein-seed.s3.amazonaws.com/download.jpg")
Track1.photo.attach(io: Trackphoto1, filename: "dog_photo.jpg")
Track1.save!
Annotation1 = Track1.annotations.create(body: "umbilical cord/immaculate conception", start_index: 0, end_index: 10, annotator_id: Demouser.id)
Track1.save!

# don't need to link the annotation and track ids because track doesn't have annotation id, and create method will take care o that anyway

Artist2 = Artist.create(name: "Brenda Shaughnessy")
Album2 = Artist2.albums.create(title: 'Our Andromeda')
# fills in the artist based on the association
Track2 = Album2.tracks.create(title: "Streetlamps", lyrics: "The unplowed road is unusable\n unless there’s no snow.\n But in dry, warm weather,\n it’s never called an unplowed road.\n To call it so, when it isn’t so,\n doesn’t make it so, though it is so\n when it snows and there’s no plow.\n It’s a no-go. Let’s stay inside.\n And here we are again:\n no cake without breaking\n eggs, unless it’s a vegan cake\n in which the are never any eggs\n only the issue, the question,\n the primacy of eggs,\n which remains even in animal-free\n foods, eaten by animal-free\n humans in an inhumane world, lit\n with robots breathing\n powerlessly in nature.\n O streetlamp,\n wallflower clairvoyant,\n you are so futuristically\n old-fashioned,\n existing in the daytime\n for later, because it becomes\n later eventually, then\n earlier, then later again.\n And a place is made\n for that hope, if I call\n it hope when half the time\n is erased by the other half.\n Light becomes itself\n in the dark, and becomes\n nothing when the real light\n comes. It is enough to make\n even the simplest organism\n insane. Why did the chicken\n cross the unplowed road?\n Because it was trying\n to beat the egg to the other side.\n It wanted to be first,\n at last, and to stay first,\n at least until the day\n breaks itself sunny side,\n and the rooster crows.\n The only snows are dark snows.", uploader_id: Demouser1.id)
Track2.artist_id = Artist2.id
Trackphoto2 = open("https://rhymestein-seed.s3.amazonaws.com/brendashaughnessy.jpg")
Track2.photo.attach(io: Trackphoto2, filename: "brendashaughnessy.jpg")
Track2.save!
Annotation2 = Track2.annotations.create(body: "existentialism", start_index: 0, end_index: 10, annotator_id: Demouser.id)
Track2.save!

Artist3 = Artist.create(name: "Tracy K. Smith")
Album3 = Artist3.albums.create(title: 'Life on Mars')
# fills in the artist based on the association
Track3 = Album3.tracks.create(title: "My God, It's Full of Stars", lyrics: "1. \n  We like to think of it as parallel to what we know,\n Only bigger. One man against the authorities.\n Or one man against a city of zombies. One man\n  \n Who is not, in fact, a man, sent to understand\n The caravan of men now chasing him like red ants\n Let loose down the pants of America. Man on the run.\n  \n Man with a ship to catch, a payload to drop,\n This message going out to all of space. . . . Though\n Maybe it’s more like life below the sea: silent,\n  \n Buoyant, bizarrely benign. Relics\n Of an outmoded design. Some like to imagine\n A cosmic mother watching through a spray of stars,\n  \n Mouthing yes, yes as we toddle toward the light,\n Biting her lip if we teeter at some ledge. Longing\n To sweep us to her breast, she hopes for the best\n  \n While the father storms through adjacent rooms\n Ranting with the force of Kingdom Come,\n Not caring anymore what might snap us in its jaw.\n  \n Sometimes,  what I see is a library in a rural community.\n All the tall shelves in the big open room. And the pencils\n In a cup at Circulation, gnawed on by the entire population.\n  \n The books have lived here all along, belonging\n For weeks at a time to one or another in the brief sequence\n Of family names, speaking (at night mostly) to a face,\n  \n A pair of eyes. The most remarkable lies.\n  \n  \n           2.\n  \n Charlton Heston is waiting to be let in. He asked once politely.\n A second time with force from the diaphragm. The third time,\n He did it like Moses: arms raised high, face an apocryphal white.\n  \n Shirt crisp, suit trim, he stoops a little coming in,\n Then grows tall. He scans the room. He stands until I gesture,\n Then he sits. Birds commence their evening chatter. Someone fires\n  \n Charcoals out below. He’ll take a whiskey if I have it. Water if I don’t.\n I ask him to start from the beginning, but he goes only halfway back.\n That was the future once, he says. Before the world went upside down.\n  \n Hero, survivor, God’s right hand man, I know he sees the blank\n Surface of the moon where I see a language built from brick and bone.\n He sits straight in his seat, takes a long, slow high-thespian breath,\n  \n Then lets it go. For all I know, I was the last true man on this earth. And:\n May I smoke? The voices outside soften. Planes jet past heading off or back.\n Someone cries that she does not want to go to bed. Footsteps overhead.\n  \n A fountain in the neighbor’s yard babbles to itself, and the night air\n Lifts the sound indoors. It was another time, he says, picking up again.\n We were pioneers. Will you fight to stay alive here, riding the earth\n  \n Toward God-knows-where? I think of Atlantis buried under ice, gone\n One day from sight, the shore from which it rose now glacial and stark.\n Our eyes adjust to the dark.\n  \n  \n           3.\n  \n Perhaps the great error is believing we’re alone,\n  \n That the others have come and gone—a momentary blip—\n  \n When all along, space might be choc-full of traffic,\n  \n Bursting at the seams with energy we neither feel\n  \n Nor see, flush against us, living, dying, deciding,\n  \n Setting solid feet down on planets everywhere,\n  \n Bowing to the great stars that command, pitching stones\n  \n At whatever are their moons. They live wondering\n  \n If they are the only ones, knowing only the wish to know,\n  \n And the great black distance they—we—flicker in.\n  \n  \n Maybe the dead know, their eyes widening at last,\n  \n Seeing the high beams of a million galaxies flick on\n  \n At twilight. Hearing the engines flare, the horns\n  \n Not letting up, the frenzy of being. I want to be\n  \n One notch below bedlam, like a radio without a dial.\n  \n Wide open, so everything floods in at once.\n  \n And sealed tight, so nothing escapes. Not even time,\n  \n Which should curl in on itself and loop around like smoke.\n  \n So that I might be sitting now beside my father\n  \n As he raises a lit match to the bowl of his pipe\n  \n For the first time in the winter of 1959.\n  \n              3.  \n  \n In those last scenes of Kubrick’s 2001\n When Dave is whisked into the center of space,\n Which unfurls in an aurora of orgasmic light\n Before opening wide, like a jungle orchid\n For a love-struck bee, then goes liquid,\n Paint-in-water, and then gauze wafting out and off,\n Before, finally, the night tide, luminescent\n And vague, swirls in, and on and on. . . . \n  \n In those last scenes, as he floats\n Above Jupiter’s vast canyons and seas,\n Over the lava strewn plains and mountains\n Packed in ice, that whole time, he doesn’t blink.\n In his little ship, blind to what he rides, whisked\n Across the wide-screen of unparcelled time,\n Who knows what blazes through his mind?\n Is it still his life he moves through, or does\n That end at the end of what he can name?\n  \n On set, it’s shot after shot till Kubrick is happy,\n Then the costumes go back on their racks\n And the great gleaming set goes black.\n  \n  \n           5.\n  \n When my father worked on the Hubble Telescope, he said\n They operated like surgeons: scrubbed and sheathed\n In papery green, the room a clean cold, a bright white.\n  \n He’d read Larry Niven at home, and drink scotch on the rocks,\n His eyes exhausted and pink. These were the Reagan years,\n When we lived with our finger on The Button and struggled\n  \n To view our enemies as children. My father spent whole seasons\n Bowing before the oracle-eye, hungry for what it would find.\n His face lit-up whenever anyone asked, and his arms would rise\n  \n As if he were weightless, perfectly at ease in the never-ending\n Night of space. On the ground, we tied postcards to balloons\n For peace. Prince Charles married Lady Di. Rock Hudson died.\n  \n We learned new words for things. The decade changed.\n  \n The first few pictures came back blurred, and I felt ashamed\n For all the cheerful engineers, my father and his tribe. The second time,\n The optics jibed. We saw to the edge of all there is—\n  \n So brutal and alive it seemed to comprehend us back.", uploader_id: Demouser1.id)
Track3.artist_id = Artist3.id
Trackphoto3 = open("https://rhymestein-seed.s3.amazonaws.com/tracyksmith.jpg")
Track3.photo.attach(io: Trackphoto3, filename: "tracyksmith.jpg")
Track3.save!

Artist4 = Artist.create(name: "Monica Youn")
Album4 = Artist4.albums.create(title: 'Blackacre')
# fills in the artist based on the association
Track4 = Album4.tracks.create(title: "Goldacre", lyrics: "We have seen claims that Twinkies…aren't baked, the sponge cake instead being 'a pure chemical reaction' involving something that 'foams up'; the deception is made complete by coloring the confections' bottoms brown to make it appear that they've been baked…. As always, the truth is far less exciting than the lore. Snopes.com \nas if \t           you were ever wide-eyed enough to believe in urban legends\n\nas if \t           these plot elements weren't the stalest of clichés: the secret lab, the anaerobic\n                    chamber, the gloved hand ex machina, the chemical-infused fog\n\nas if \t           every origin story didn't center on the same sweet myth of a lost wholeness\n\nas if \t           such longing would seem more palatable if packaged as nostalgia\n\nas if \t           there had once been a moment of unity, smoothly numinous, pellucid\n\nas if \t           inner and outer were merely phases of the same substance\n\nas if \t           this whiteness had been your original condition\n\nas if \t           it hadn't been what was piped into you, what suffused each vacant cell, each\n                    airhole, each pore\n\nas if \t           you had started out skinless, shameless, blameless, creamy\n\nas if \t           whipped, passive\n\nas if \t           extruded, quivering with volatility in a metal mold\n\nas if \t           a catalyzing vapor triggered a latent reaction\n\nas if \t           your flesh foamed up, a hydrogenated emulsion consisting mostly of trapped air\n\nas if \t           though sponge-like, you could remain shelf-stable for decades, part embalming\n                    fluid, part rocket fuel, part glue\n\nas if \t           you had been named twin, a word for likeness; or wink, a word for joke; or ink, a\n                    word for stain; or key, a word for answer\n\nas if \t           your skin oxidized to its present burnished hue, golden\n\nas if \t           homemade\n", uploader_id: Demouser1.id)
Track4.artist_id = Artist4.id
Trackphoto4 = open("https://rhymestein-seed.s3.amazonaws.com/monicayoun.jpg")
Track4.photo.attach(io: Trackphoto4, filename: "monicayoun.jpg")
Track4.save!

Artist5 = Artist.create(name: "Danez Smith")
Album5 = Artist5.albums.create(title: 'insert Boy')
# fills in the artist based on the association
Track5 = Album5.tracks.create(title: "Dinosaurs in the Hood", lyrics: "Let’s make a movie called Dinosaurs in the Hood.\n Jurassic Park meets Friday meets The Pursuit of Happyness.\n There should be a scene where a little black boy is playing\n with a toy dinosaur on the bus, then looks out the window\n & sees the T. Rex, because there has to be a T. Rex.\n \n Don’t let Tarantino direct this. In his version, the boy plays\n with a gun, the metaphor: black boys toy with their own lives,\n the foreshadow to his end, the spitting image of his father.\n Fuck that, the kid has a plastic Brontosaurus or Triceratops\n & this is his proof of magic or God or Santa. I want a scene\n \n where a cop car gets pooped on by a pterodactyl, a scene\n where the corner store turns into a battle ground. Don’t let\n the Wayans brothers in this movie. I don’t want any racist shit\n about Asian people or overused Latino stereotypes.\n This movie is about a neighborhood of royal folks —\n \n children of slaves & immigrants & addicts & exiles — saving their town\n from real-ass dinosaurs. I don’t want some cheesy yet progressive\n Hmong sexy hot dude hero with a funny yet strong commanding\n black girl buddy-cop film. This is not a vehicle for Will Smith\n & Sofia Vergara. I want grandmas on the front porch taking out raptors\n \n with guns they hid in walls & under mattresses. I want those little spitty,\n screamy dinosaurs. I want Cicely Tyson to make a speech, maybe two.\n I want Viola Davis to save the city in the last scene with a black fist afro pick\n through the last dinosaur’s long, cold-blood neck. But this can’t be\n a black movie. This can’t be a black movie. This movie can’t be dismissed\n \n because of its cast or its audience. This movie can’t be a metaphor\n for black people & extinction. This movie can’t be about race.\n This movie can’t be about black pain or cause black people pain.\n This movie can’t be about a long history of having a long history with hurt.\n This movie can’t be about race. Nobody can say nigga in this movie\n \n who can’t say it to my face in public. No chicken jokes in this movie.\n No bullets in the heroes. & no one kills the black boy. & no one kills\n the black boy. & no one kills the black boy. Besides, the only reason\n I want to make this is for that first scene anyway: the little black boy\n on the bus with a toy dinosaur, his eyes wide & endless\n   \n his dreams possible, pulsing, & right there.", uploader_id: Demouser1.id)
Track5.artist_id = Artist5.id
Trackphoto5 = open("https://rhymestein-seed.s3.amazonaws.com/danezsmith.jpg")
Track5.photo.attach(io: Trackphoto5, filename: "danezsmith.jpg")
Track5.save!
Annotation5 = Track5.annotations.create(body: "whitewashing in hollywood", start_index: 0, end_index: 10, annotator_id: Demouser.id)
Track5.save!

Artist6 = Artist.create(name: "Hieu Minh Nguyen")
Album6 = Artist6.albums.create(title: 'Not Here')
# fills in the artist based on the association
Track6 = Album6.tracks.create(title: "Cockfight", lyrics: "I met my brother once\n in a small village in Vietnam\n who, upon meeting me\n grabbed my small arm\n & dragged me into the woods\n behind his house\n where a group of men\n all wearing our father's face\n stood in a circle, cheering\n while the two roosters\n whose beaks had barbed hooks\n taped to them, pecked\n & clawed each other open\n until the mess of bloodied feathers\n were replaced by two clean birds\n one, my brother's. The other\n a man's, who, I am told is deaf\n but vicious. He told me\n our father calls him long distance\n from America, every week.\n I can't help but wonder how\n they tell the roosters apart\n since the blood has turned their feathers\n the same shade of burgundy.\n I told him how our father, who lives\n only three mile away from me\n avoids making eye-contact at supermarkets.\n I can tell this made him happy.\n Though, he didn't cheer\n when the crowd cheered, when one rooster\n fell to the dirt with a gash in its neck\n I knew he was the winner\n the way he lowered his head to hide\n his smile, how he looked at me\n then snatched his earnings\n from the vicious man's hands.\n I learned what it was like to be a brother\n by watching the roosters\n & how, at first, the air was calm\n until they were introduced\n & then they knew:\n there could only be one.", uploader_id: Demouser1.id)
Track6.artist_id = Artist6.id
Trackphoto6 = open("https://rhymestein-seed.s3.amazonaws.com/hieuminhnguyen.jpg")
Track6.photo.attach(io: Trackphoto6, filename: "hieuminhnguyen.jpg")
Track6.save!

Artist7 = Artist.create(name: "D. A. Powell")
Album7 = Artist7.albums.create(title: 'Tea')
# fills in the artist based on the association
Track7 = Album7.tracks.create(title: "[the thicknesses of victor decreased: blanket --> sheet --> floss. until no material would do]", lyrics: "the thicknesses of victor decreased: blanket --> sheet --> \nfloss. 	until no material would do\nin the shedding season: the few of us who had not turned had \nfound his remote room in mercy\nhe wriggled slight as a silkworm on its mulberry bed. 		his lips\nspun slathering thread. 	he sleaved\nwe waited for his release and he was released: yellow and \nradiant mariposa. 	don’t let us mend.\n", uploader_id: Demouser1.id)
Track7.artist_id = Artist7.id
Trackphoto7 = open("https://rhymestein-seed.s3.amazonaws.com/dapowell.jpg")
Track7.photo.attach(io: Trackphoto7, filename: "dapowell.jpg")
Track7.save!

Artist8 = Artist.create(name: "Jared DJ-our-ABC-hi (AKA Shlomo Yehuda)")
Album8 = Artist8.albums.create(title: 'AppAcademy Rappers')
# fills in the artist based on the association
Track8 = Album8.tracks.create(title: "Ode to Oats", lyrics: "Mushy and lumpy,\nmakes me less grumpy.", uploader_id: Demouser1.id)
Track8.artist_id = Artist8.id
Trackphoto8 = open("https://rhymestein-seed.s3.amazonaws.com/jareddjourabchi.jpg")
Track8.photo.attach(io: Trackphoto8, filename: "jareddjourabchi.jpeg")
Track8.save!