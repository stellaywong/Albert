# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def model_level_truncation_method(youtube_string)
    non_url_format = "youtu.be"

    if youtube_string.include?(non_url_format)
        begin_char = ".be"

        begin_index = youtube_string.index(begin_char) + 4
        end_index = youtube_string.length
        return youtube_string[begin_index...end_index]+"?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1"
    else
        begin_char = "v="
        end_char = "&"
        
        begin_index = youtube_string.index(begin_char) + 2
        
        if youtube_string.include?(end_char)
            end_index = youtube_string.index(end_char)
        else
            end_index = youtube_string.length
        end
        return youtube_string[begin_index...end_index]+"?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1"
    end

end

require "open-uri"
User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
Annotation.destroy_all

demouser = User.create(username: "DemoUser", email: "demouser@gmail.com", password: "password123")



artist1 = Artist.create(name: "Jorie Graham")
album1 = artist1.albums.create(title: 'The Dream of the Unified Field: Selected Poems, 1974-1994')
# fills in the artist based on the association
track1 = album1.tracks.create(title: "San Sepolcro", youtube_url: model_level_truncation_method("https://youtu.be/zKd682YAz_s"), lyrics: "In this blue light\n       I can take you there,\nsnow having made me\n       a world of bone   \nseen through to. This\n       is my house,\n\nmy section of Etruscan\n       wall, my neighbor’s   \nlemontrees, and, just below\n       the lower church,   \nthe airplane factory.\n       A rooster\n\ncrows all day from mist\n       outside the walls.   \nThere’s milk on the air,\n       ice on the oily\nlemonskins. How clean   \n       the mind is,\n\nholy grave. It is this girl\n       by Piero\ndella Francesca, unbuttoning   \n       her blue dress,\nher mantle of weather,\n       to go into\n\nlabor. Come, we can go in.   \n       It is before\nthe birth of god. No one\n       has risen yet\nto the museums, to the assembly   \n       line—bodies\n\nand wings—to the open air\n       market. This is\nwhat the living do: go in.\n       It’s a long way.\nAnd the dress keeps opening\n       from eternity\n\nto privacy, quickening.\n       Inside, at the heart,\nis tragedy, the present moment   \n       forever stillborn,\nbut going in, each breath\n       is a button\n\ncoming undone, something terribly   \n       nimble-fingered   \nfinding all of the stops.\n", uploader_id: demouser.id)
track1.artist_id = artist1.id
trackphoto1 = open("https://rhymestein-seed.s3.amazonaws.com/joriegraham.jpg")
track1.photo.attach(io: trackphoto1, filename: "joriegraham.jpg")
track1.save!
# annotation1 = track1.annotations.create(annotation_body: "umbilical cord/immaculate conception", start_index: 0, end_index: 10, annotator_id: demouser.id)
# track1.save!

# # don't need to link the annotation and track ids because track doesn't have annotation id, and create method will take care o that anyway

# artist2 = Artist.create(name: "Brenda Shaughnessy")
# album2 = artist2.albums.create(title: 'Our Andromeda')
# # fills in the artist based on the association
# track2 = album2.tracks.create(title: "Streetlamps", lyrics: "The unplowed road is unusable\n unless there’s no snow.\n But in dry, warm weather,\n it’s never called an unplowed road.\n To call it so, when it isn’t so,\n doesn’t make it so, though it is so\n when it snows and there’s no plow.\n It’s a no-go. Let’s stay inside.\n And here we are again:\n no cake without breaking\n eggs, unless it’s a vegan cake\n in which the are never any eggs\n only the issue, the question,\n the primacy of eggs,\n which remains even in animal-free\n foods, eaten by animal-free\n humans in an inhumane world, lit\n with robots breathing\n powerlessly in nature.\n O streetlamp,\n wallflower clairvoyant,\n you are so futuristically\n old-fashioned,\n existing in the daytime\n for later, because it becomes\n later eventually, then\n earlier, then later again.\n And a place is made\n for that hope, if I call\n it hope when half the time\n is erased by the other half.\n Light becomes itself\n in the dark, and becomes\n nothing when the real light\n comes. It is enough to make\n even the simplest organism\n insane. Why did the chicken\n cross the unplowed road?\n Because it was trying\n to beat the egg to the other side.\n It wanted to be first,\n at last, and to stay first,\n at least until the day\n breaks itself sunny side,\n and the rooster crows.\n The only snows are dark snows.", uploader_id: demouser.id)
# track2.artist_id = artist2.id
# trackphoto2 = open("https://rhymestein-seed.s3.amazonaws.com/brendashaughnessy.jpg")
# track2.photo.attach(io: trackphoto2, filename: "brendashaughnessy.jpg")
# track2.save!
# # annotation2 = track2.annotations.create(annotation_body: "existentialism", start_index: 0, end_index: 10, annotator_id: demouser.id)
# # track2.save!

artist2 = Artist.create(name: "Danez Smith")
album2 = artist2.albums.create(title: 'insert Boy')
# fills in the artist based on the association
track2 = album2.tracks.create(title: "Dinosaurs in the Hood", youtube_url: model_level_truncation_method("https://www.youtube.com/watch?v=Bfiw410wZ0s"), lyrics: "Let’s make a movie called Dinosaurs in the Hood.\n Jurassic Park meets Friday meets The Pursuit of Happyness.\n There should be a scene where a little black boy is playing\n with a toy dinosaur on the bus, then looks out the window\n & sees the T. Rex, because there has to be a T. Rex.\n \n Don’t let Tarantino direct this. In his version, the boy plays\n with a gun, the metaphor: black boys toy with their own lives,\n the foreshadow to his end, the spitting image of his father.\n Fuck that, the kid has a plastic Brontosaurus or Triceratops\n & this is his proof of magic or God or Santa. I want a scene\n \n where a cop car gets pooped on by a pterodactyl, a scene\n where the corner store turns into a battle ground. Don’t let\n the Wayans brothers in this movie. I don’t want any racist shit\n about Asian people or overused Latino stereotypes.\n This movie is about a neighborhood of royal folks —\n \n children of slaves & immigrants & addicts & exiles — saving their town\n from real-ass dinosaurs. I don’t want some cheesy yet progressive\n Hmong sexy hot dude hero with a funny yet strong commanding\n black girl buddy-cop film. This is not a vehicle for Will Smith\n & Sofia Vergara. I want grandmas on the front porch taking out raptors\n \n with guns they hid in walls & under mattresses. I want those little spitty,\n screamy dinosaurs. I want Cicely Tyson to make a speech, maybe two.\n I want Viola Davis to save the city in the last scene with a black fist afro pick\n through the last dinosaur’s long, cold-blood neck. But this can’t be\n a black movie. This can’t be a black movie. This movie can’t be dismissed\n \n because of its cast or its audience. This movie can’t be a metaphor\n for black people & extinction. This movie can’t be about race.\n This movie can’t be about black pain or cause black people pain.\n This movie can’t be about a long history of having a long history with hurt.\n This movie can’t be about race. Nobody can say nigga in this movie\n \n who can’t say it to my face in public. No chicken jokes in this movie.\n No bullets in the heroes. & no one kills the black boy. & no one kills\n the black boy. & no one kills the black boy. Besides, the only reason\n I want to make this is for that first scene anyway: the little black boy\n on the bus with a toy dinosaur, his eyes wide & endless\n   \n his dreams possible, pulsing, & right there.", uploader_id: demouser.id)
track2.artist_id = artist2.id
trackphoto2 = open("https://rhymestein-seed.s3.amazonaws.com/danezsmith.jpg")
track2.photo.attach(io: trackphoto2, filename: "danezsmith.jpg")
track2.save!

artist3 = Artist.create(name: "Pablo Neruda")
album3 = artist3.albums.create(title: 'Neruda & Vallejo: Selected Poems')
# fills in the artist based on the association
track3 = album3.tracks.create(title: "Ode to My Socks", youtube_url: model_level_truncation_method("https://www.youtube.com/watch?v=PbIX8zY17Z4"), lyrics: "Maru Mori brought me\na pair\nof socks\nwhich she knitted herself\nwith her sheepherder’s hands,\ntwo socks as soft\nas rabbits.\nI slipped my feet\ninto them\nas though into\ntwo\ncases\nknitted\nwith threads of\ntwilight\nand goatskin.\nViolent socks,\nmy feet were\ntwo fish made\nof wool,\ntwo long sharks\nsea-blue, shot\nthrough\nby one golden thread,\ntwo immense blackbirds,\ntwo cannons:\nmy feet\nwere honored\nin this way\nby\nthese\nheavenly\nsocks.\nThey were\nso handsome\nfor the first time\nmy feet seemed to me\nunacceptable\nlike two decrepit\nfiremen, firemen\nunworthy\nof that woven\nfire,\nof those glowing\nsocks.\nNevertheless\nI resisted\nthe sharp temptation\nto save them somewhere\nas schoolboys\nkeep\nfireflies,\nas learned men\ncollect\nsacred texts,\nI resisted\nthe mad impulse\nto put them\ninto a golden\ncage\nand each day give them\nbirdseed\nand pieces of pink melon.\nLike explorers\nin the jungle who hand\nover the very rare\ngreen deer\nto the spit\nand eat it\nwith remorse,\nI stretched out\nmy feet\nand pulled on\nthe magnificent\nsocks\nand then my shoes.\nThe moral\nof my ode is this:\nbeauty is twice\nbeauty\nand what is good is doubly\ngood\nwhen it is a matter of two socks\nmade of wool\nin winter.", uploader_id: demouser.id)
track3.artist_id = artist3.id
trackphoto3 = open("https://rhymestein-seed.s3.amazonaws.com/pabloneruda.gif")
track3.photo.attach(io: trackphoto3, filename: "pabloneruda.gif")
track3.save!

artist4 = Artist.create(name: "Monica Youn")
album4 = artist4.albums.create(title: 'Blackacre')
# fills in the artist based on the association
track4 = album4.tracks.create(title: "Goldacre", youtube_url: model_level_truncation_method("https://www.youtube.com/watch?v=2AWRjBgDVak"), lyrics: "We have seen claims that Twinkies…aren't baked, the sponge cake instead being 'a pure chemical reaction' involving something that 'foams up'; the deception is made complete by coloring the confections' bottoms brown to make it appear that they've been baked…. As always, the truth is far less exciting than the lore. Snopes.com \nas if \t           you were ever wide-eyed enough to believe in urban legends\n\nas if \t           these plot elements weren't the stalest of clichés: the secret lab, the anaerobic\n                    chamber, the gloved hand ex machina, the chemical-infused fog\n\nas if \t           every origin story didn't center on the same sweet myth of a lost wholeness\n\nas if \t           such longing would seem more palatable if packaged as nostalgia\n\nas if \t           there had once been a moment of unity, smoothly numinous, pellucid\n\nas if \t           inner and outer were merely phases of the same substance\n\nas if \t           this whiteness had been your original condition\n\nas if \t           it hadn't been what was piped into you, what suffused each vacant cell, each\n                    airhole, each pore\n\nas if \t           you had started out skinless, shameless, blameless, creamy\n\nas if \t           whipped, passive\n\nas if \t           extruded, quivering with volatility in a metal mold\n\nas if \t           a catalyzing vapor triggered a latent reaction\n\nas if \t           your flesh foamed up, a hydrogenated emulsion consisting mostly of trapped air\n\nas if \t           though sponge-like, you could remain shelf-stable for decades, part embalming\n                    fluid, part rocket fuel, part glue\n\nas if \t           you had been named twin, a word for likeness; or wink, a word for joke; or ink, a\n                    word for stain; or key, a word for answer\n\nas if \t           your skin oxidized to its present burnished hue, golden\n\nas if \t           homemade\n", uploader_id: demouser.id)
track4.artist_id = artist4.id
trackphoto4 = open("https://rhymestein-seed.s3.amazonaws.com/monicayoun.jpg")
track4.photo.attach(io: trackphoto4, filename: "monicayoun.jpg")
track4.save!

artist5 = Artist.create(name: "Tracy K. Smith")
album5 = artist5.albums.create(title: 'Life on Mars')
# fills in the artist based on the association
track5 = album5.tracks.create(title: "My God, It's Full of Stars", youtube_url: model_level_truncation_method("https://www.youtube.com/watch?v=QW7WIJaSfl4"), lyrics: "1. \n  We like to think of it as parallel to what we know,\n Only bigger. One man against the authorities.\n Or one man against a city of zombies. One man\n  \n Who is not, in fact, a man, sent to understand\n The caravan of men now chasing him like red ants\n Let loose down the pants of America. Man on the run.\n  \n Man with a ship to catch, a payload to drop,\n This message going out to all of space. . . . Though\n Maybe it’s more like life below the sea: silent,\n  \n Buoyant, bizarrely benign. Relics\n Of an outmoded design. Some like to imagine\n A cosmic mother watching through a spray of stars,\n  \n Mouthing yes, yes as we toddle toward the light,\n Biting her lip if we teeter at some ledge. Longing\n To sweep us to her breast, she hopes for the best\n  \n While the father storms through adjacent rooms\n Ranting with the force of Kingdom Come,\n Not caring anymore what might snap us in its jaw.\n  \n Sometimes,  what I see is a library in a rural community.\n All the tall shelves in the big open room. And the pencils\n In a cup at Circulation, gnawed on by the entire population.\n  \n The books have lived here all along, belonging\n For weeks at a time to one or another in the brief sequence\n Of family names, speaking (at night mostly) to a face,\n  \n A pair of eyes. The most remarkable lies.\n  \n  \n           2.\n  \n Charlton Heston is waiting to be let in. He asked once politely.\n A second time with force from the diaphragm. The third time,\n He did it like Moses: arms raised high, face an apocryphal white.\n  \n Shirt crisp, suit trim, he stoops a little coming in,\n Then grows tall. He scans the room. He stands until I gesture,\n Then he sits. Birds commence their evening chatter. Someone fires\n  \n Charcoals out below. He’ll take a whiskey if I have it. Water if I don’t.\n I ask him to start from the beginning, but he goes only halfway back.\n That was the future once, he says. Before the world went upside down.\n  \n Hero, survivor, God’s right hand man, I know he sees the blank\n Surface of the moon where I see a language built from brick and bone.\n He sits straight in his seat, takes a long, slow high-thespian breath,\n  \n Then lets it go. For all I know, I was the last true man on this earth. And:\n May I smoke? The voices outside soften. Planes jet past heading off or back.\n Someone cries that she does not want to go to bed. Footsteps overhead.\n  \n A fountain in the neighbor’s yard babbles to itself, and the night air\n Lifts the sound indoors. It was another time, he says, picking up again.\n We were pioneers. Will you fight to stay alive here, riding the earth\n  \n Toward God-knows-where? I think of Atlantis buried under ice, gone\n One day from sight, the shore from which it rose now glacial and stark.\n Our eyes adjust to the dark.\n  \n  \n           3.\n  \n Perhaps the great error is believing we’re alone,\n  \n That the others have come and gone—a momentary blip—\n  \n When all along, space might be choc-full of traffic,\n  \n Bursting at the seams with energy we neither feel\n  \n Nor see, flush against us, living, dying, deciding,\n  \n Setting solid feet down on planets everywhere,\n  \n Bowing to the great stars that command, pitching stones\n  \n At whatever are their moons. They live wondering\n  \n If they are the only ones, knowing only the wish to know,\n  \n And the great black distance they—we—flicker in.\n  \n  \n Maybe the dead know, their eyes widening at last,\n  \n Seeing the high beams of a million galaxies flick on\n  \n At twilight. Hearing the engines flare, the horns\n  \n Not letting up, the frenzy of being. I want to be\n  \n One notch below bedlam, like a radio without a dial.\n  \n Wide open, so everything floods in at once.\n  \n And sealed tight, so nothing escapes. Not even time,\n  \n Which should curl in on itself and loop around like smoke.\n  \n So that I might be sitting now beside my father\n  \n As he raises a lit match to the bowl of his pipe\n  \n For the first time in the winter of 1959.\n  \n              3.  \n  \n In those last scenes of Kubrick’s 2001\n When Dave is whisked into the center of space,\n Which unfurls in an aurora of orgasmic light\n Before opening wide, like a jungle orchid\n For a love-struck bee, then goes liquid,\n Paint-in-water, and then gauze wafting out and off,\n Before, finally, the night tide, luminescent\n And vague, swirls in, and on and on. . . . \n  \n In those last scenes, as he floats\n Above Jupiter’s vast canyons and seas,\n Over the lava strewn plains and mountains\n Packed in ice, that whole time, he doesn’t blink.\n In his little ship, blind to what he rides, whisked\n Across the wide-screen of unparcelled time,\n Who knows what blazes through his mind?\n Is it still his life he moves through, or does\n That end at the end of what he can name?\n  \n On set, it’s shot after shot till Kubrick is happy,\n Then the costumes go back on their racks\n And the great gleaming set goes black.\n  \n  \n           5.\n  \n When my father worked on the Hubble Telescope, he said\n They operated like surgeons: scrubbed and sheathed\n In papery green, the room a clean cold, a bright white.\n  \n He’d read Larry Niven at home, and drink scotch on the rocks,\n His eyes exhausted and pink. These were the Reagan years,\n When we lived with our finger on The Button and struggled\n  \n To view our enemies as children. My father spent whole seasons\n Bowing before the oracle-eye, hungry for what it would find.\n His face lit-up whenever anyone asked, and his arms would rise\n  \n As if he were weightless, perfectly at ease in the never-ending\n Night of space. On the ground, we tied postcards to balloons\n For peace. Prince Charles married Lady Di. Rock Hudson died.\n  \n We learned new words for things. The decade changed.\n  \n The first few pictures came back blurred, and I felt ashamed\n For all the cheerful engineers, my father and his tribe. The second time,\n The optics jibed. We saw to the edge of all there is—\n  \n So brutal and alive it seemed to comprehend us back.", uploader_id: demouser.id)
track5.artist_id = artist5.id
trackphoto5 = open("https://rhymestein-seed.s3.amazonaws.com/tracyksmith.jpg")
track5.photo.attach(io: trackphoto5, filename: "tracyksmith.jpg")
track5.save!

artist6 = Artist.create(name: "Rita Dove")
album6 = artist6.albums.create(title: 'Museum')
# fills in the artist based on the association
track6 = album6.tracks.create(title: "Parsley", youtube_url: model_level_truncation_method("https://www.youtube.com/watch?v=-NsInTXkQ2Q"), lyrics: "\n1. The Cane Fields\n\nThere is a parrot imitating spring\nin the palace, its feathers parsley green. \nOut of the swamp the cane appears\n\nto haunt us, and we cut it down. El General \nsearches for a word; he is all the world \nthere is. Like a parrot imitating spring,\n\nwe lie down screaming as rain punches through \nand we come up green. We cannot speak an R—\nout of the swamp, the cane appears\n\nand then the mountain we call in whispers Katalina.\nThe children gnaw their teeth to arrowheads. \nThere is a parrot imitating spring.\n\nEl General has found his word: perejil.\nWho says it, lives. He laughs, teeth shining \nout of the swamp. The cane appears\n\nin our dreams, lashed by wind and streaming. \nAnd we lie down. For every drop of blood \nthere is a parrot imitating spring.\nOut of the swamp the cane appears.\n\n\n2. The Palace\n\nThe word the general’s chosen is parsley. \nIt is fall, when thoughts turn\nto love and death; the general thinks\nof his mother, how she died in the fall\nand he planted her walking cane at the grave \nand it flowered, each spring stolidly forming \nfour-star blossoms. The general\n\npulls on his boots, he stomps to\nher room in the palace, the one without \ncurtains, the one with a parrot\nin a brass ring. As he paces he wonders \nWho can I kill today. And for a moment \nthe little knot of screams\nis still. The parrot, who has traveled\n\nall the way from Australia in an ivory \ncage, is, coy as a widow, practising \nspring. Ever since the morning \nhis mother collapsed in the kitchen \nwhile baking skull-shaped candies \nfor the Day of the Dead, the general \nhas hated sweets. He orders pastries \nbrought up for the bird; they arrive\n\ndusted with sugar on a bed of lace. \nThe knot in his throat starts to twitch; \nhe sees his boots the first day in battle \nsplashed with mud and urine\nas a soldier falls at his feet amazed—\nhow stupid he looked!— at the sound\nof artillery. I never thought it would sing \nthe soldier said, and died. Now\n\nthe general sees the fields of sugar \ncane, lashed by rain and streaming. \nHe sees his mother’s smile, the teeth \ngnawed to arrowheads. He hears \nthe Haitians sing without R’s\nas they swing the great machetes: \nKatalina, they sing, Katalina,\n\nmi madle, mi amol en muelte. God knows \nhis mother was no stupid woman; she \ncould roll an R like a queen. Even \na parrot can roll an R! In the bare room \nthe bright feathers arch in a parody \nof greenery, as the last pale crumbs\ndisappear under the blackened tongue. Someone\n\ncalls out his name in a voice\nso like his mother’s, a startled tear\nsplashes the tip of his right boot.\nMy mother, my love in death. \nThe general remembers the tiny green sprigs \nmen of his village wore in their capes \nto honor the birth of a son. He will\norder many, this time, to be killed\n\nfor a single, beautiful word.", uploader_id: demouser.id)
track6.artist_id = artist6.id
trackphoto6 = open("https://rhymestein-seed.s3.amazonaws.com/ritadove.jpg")
track6.photo.attach(io: trackphoto6, filename: "ritadove.jpg")
track6.save!

artist7 = Artist.create(name: "徐志摩")
album7 = artist7.albums.create(title: 'On Leaving Cambridge')
# fills in the artist based on the association
track7 = album7.tracks.create(title: "再别康桥", youtube_url: model_level_truncation_method("https://www.youtube.com/watch?v=OjTBYzmVnXI"), lyrics: "轻轻的我走了，\n正如我轻轻的来；\n我轻轻的招手，\n作别西天的云彩。\n那河畔的金柳，\n是夕阳中的新娘；\n波光里的艳影，\n在我的心头荡漾。\n软泥上的青荇，\n油油的在水底招摇；\n在康河的柔波里，\n我甘心做一条水草！\n那榆荫下的一潭，\n不是清泉，是天上虹；\n揉碎在浮藻间，\n沉淀着彩虹似的梦。\n寻梦？撑一支长篙，\n向青草更青处漫溯；\n满载一船星辉，\n在星辉斑斓里放歌。\n但我不能放歌，\n悄悄是别离的笙箫；\n夏虫也为我沉默，\n沉默是今晚的康桥！\n悄悄的我走了，\n正如我悄悄的来；\n我挥一挥衣袖，\n不带走一片云彩\n", uploader_id: demouser.id)
track7.artist_id = artist7.id
trackphoto7 = open("https://rhymestein-seed.s3.amazonaws.com/xuzhimo.jpg")
track7.photo.attach(io: trackphoto7, filename: "xuzhimo.jpg")
track7.save!

artist8 = Artist.create(name: "D. A. Powell")
album8 = artist8.albums.create(title: 'Tea')
# fills in the artist based on the association
track8 = album8.tracks.create(title: "[the thicknesses of victor decreased: blanket --> sheet --> floss. until no material would do]", lyrics: "the thicknesses of victor decreased: blanket --> sheet --> \nfloss. 	until no material would do\nin the shedding season: the few of us who had not turned had \nfound his remote room in mercy\nhe wriggled slight as a silkworm on its mulberry bed. 		his lips\nspun slathering thread. 	he sleaved\nwe waited for his release and he was released: yellow and \nradiant mariposa. 	don’t let us mend.\n", uploader_id: demouser.id)
track8.artist_id = artist8.id
trackphoto8 = open("https://rhymestein-seed.s3.amazonaws.com/dapowell.jpg")
track8.photo.attach(io: trackphoto8, filename: "dapowell.jpg")
track8.save!

artist9 = Artist.create(name: "Josh Bell")
album9 = artist9.albums.create(title: 'Alamo Theory')
# fills in the artist based on the association
track9 = album9.tracks.create(title: "Where the I Comes From", lyrics: "Our days often ended and began\nwith the sound of voices raised\nin song. Even after we murdered\nour friends and neighbors. Even\nafter we brought the attention\nof our knives to the neighbors of\nour neighbors, until at last\nthe neighborhoods fell silent\nand the cities quiet and the city’s\ncity, the country then and next\nthe country, until finally the moon,\nas if its own reflection, looked\nupon an earth that we had emptied\nnearly back to Eden. Even then,\nin a silence which seemed almost\na silence, sadly we were not\nalone. All we ever wanted was\nto be alone, to visit no one, to be\nvisited by nothing. But even after\nwe’d traveled to nearby planets\nand relieved them of their voices,\neven after—and we all knew\nthis was coming—we fell amongst\neach other, brother and sister,\nuntil only I survived, still I heard it,\nthe universe subtracted of its skin\nand hair, and yet the sound\nof a voice, like someone singing\nin the hold of a sinking ship,\nunbidden and irrelevant, a fathom\nand a fathom deep, but never fading\n", uploader_id: demouser.id)
track9.artist_id = artist9.id
trackphoto9 = open("https://rhymestein-seed.s3.amazonaws.com/joshbell.jpg")
track9.photo.attach(io: trackphoto9, filename: "joshbell.jpg")
track9.save!

artist10 = Artist.create(name: "Hieu Minh Nguyen")
album10 = artist10.albums.create(title: 'Not Here')
# fills in the artist based on the association
track10 = album10.tracks.create(title: "Cockfight", lyrics: "I met my brother once\n in a small village in Vietnam\n who, upon meeting me\n grabbed my small arm\n & dragged me into the woods\n behind his house\n where a group of men\n all wearing our father's face\n stood in a circle, cheering\n while the two roosters\n whose beaks had barbed hooks\n taped to them, pecked\n & clawed each other open\n until the mess of bloodied feathers\n were replaced by two clean birds\n one, my brother's. The other\n a man's, who, I am told is deaf\n but vicious. He told me\n our father calls him long distance\n from America, every week.\n I can't help but wonder how\n they tell the roosters apart\n since the blood has turned their feathers\n the same shade of burgundy.\n I told him how our father, who lives\n only three mile away from me\n avoids making eye-contact at supermarkets.\n I can tell this made him happy.\n Though, he didn't cheer\n when the crowd cheered, when one rooster\n fell to the dirt with a gash in its neck\n I knew he was the winner\n the way he lowered his head to hide\n his smile, how he looked at me\n then snatched his earnings\n from the vicious man's hands.\n I learned what it was like to be a brother\n by watching the roosters\n & how, at first, the air was calm\n until they were introduced\n & then they knew:\n there could only be one.", uploader_id: demouser.id)
track10.artist_id = artist10.id
trackphoto10 = open("https://rhymestein-seed.s3.amazonaws.com/hieuminhnguyen.jpg")
track10.photo.attach(io: trackphoto10, filename: "hieuminhnguyen.jpg")
track10.save!

# artist4 = Artist.create(name: "az")
# album4 = artist4.albums.create(title: 'Alvin Collection')
# # fills in the artist based on the association
# track4 = album4.tracks.create(title: "App Academy", lyrics: "Hey\nProgrammers", uploader_id: demouser.id)
# track4.artist_id = artist4.id
# trackphoto4 = open("https://rhymestein-seed.s3.amazonaws.com/alvinzablan.jpg")
# track4.photo.attach(io: trackphoto4, filename: "alvinzablan.jpg")
# track4.save!

# artist4 = Artist.create(name: "az")
# album4 = artist4.albums.create(title: 'Alvin Collection')
# # fills in the artist based on the association
# track4 = album4.tracks.create(title: "App Academy", lyrics: "Hey\nProgrammers", uploader_id: demouser.id)
# track4.artist_id = artist4.id
# trackphoto4 = open("https://rhymestein-seed.s3.amazonaws.com/alvinzablan.jpg")
# track4.photo.attach(io: trackphoto4, filename: "alvinzablan.jpg")
# track4.save!
