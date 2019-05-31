import React from 'react';
import { Link } from 'react-router-dom';

const Track = (props) => {
    const { currentUser } = props; //destructure props here

    return (
        <div>
            <p>Howl by Allen Ginsberg </p>
            {/* this must be changed later to accomodate the hash */}
            <div className="track-lyrics"> I

I saw the best minds of my generation destroyed by madness, starving hysterical naked,<br></br>
dragging themselves through the negro streets at dawn looking for an angry fix,<br></br>
angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night,<br></br>
who poverty and tatters and hollow-eyed and high sat up smoking in the supernatural darkness of cold-water flats floating across the tops of cities contemplating jazz,<br></br>
who bared their brains to Heaven under the El and saw Mohammedan angels staggering on tenement roofs illuminated,<br></br>
who passed through universities with radiant cool eyes hallucinating Arkansas and Blake-light tragedy among the scholars of war,<br></br>
who were expelled from the academies for crazy publishing obscene odes on the windows of the skull,<br></br>
who cowered in unshaven rooms in underwear, burning their money in wastebaskets and listening to the Terror through the wall,<br></br>
who got busted in their pubic beards returning through Laredo with a belt of marijuana for New York,<br></br>
who ate fire in paint hotels or drank turpentine in Paradise Alley, death, or purgatoried their torsos night after night<br></br>
with dreams, with drugs, with waking nightmares, alcohol and cock and endless balls,<br></br>
incomparable blind streets of shuddering cloud and lightning in the mind leaping toward poles of Canada Paterson, illuminating all the motionless world of Time between,<br></br>
Peyote solidities of halls, backyard green tree cemetery dawns, wine drunkenness over the rooftops, storefront boroughs of teahead joyride neon blinking traffic light, sun and moon and tree vibrations in the roaring winter dusks of Brooklyn, ashcan rantings and kind king light of mind,<br></br>
who chained themselves to subways for the endless ride from Battery to holy Bronx on benzedrine until the noise of wheels and children brought them down shuddering mouth-wracked and battered bleak of brain all drained of brilliance in the drear light of Zoo,<br></br>
who sank all night in submarine light of Bickford’s floated out and sat through the stale beer afternoon in desolate Fugazzi’s, listening to the crack of doom on the hydrogen jukebox,<br></br>
who talked continuously seventy hours from park to pad to bar to Bellevue to museum to the Brooklyn Bridge,<br></br>
a lost battalion of platonic conversationalists jumping down the stoops off fire escapes off windowsills off Empire State out of the moon,<br></br>
yacketayakking screaming vomiting whispering facts and memories and anecdotes and eyeball kicks and shocks of hospitals and jails and wars,<br></br>
whole intellects disgorged in total recall for seven days and nights with brilliant eyes, meat for the Synagogue cast on the pavement,<br></br>
who vanished into nowhere Zen New Jersey leaving a trail of ambiguous picture postcards of Atlantic City Hall,<br></br>
suffering Eastern sweats and Tangerian bone-grindings and migraines of China under junk-withdrawal in Newark’s bleak furnished room,   <br></br>
who wandered around and around at midnight in the railroad yard wondering where to go, and went, leaving no broken hearts,<br></br>
who lit cigarettes in boxcars boxcars boxcars racketing through snow toward lonesome farms in grandfather night,<br></br>
who studied Plotinus Poe St. John of the Cross telepathy and bop kabbalah because the cosmos instinctively vibrated at their feet in Kansas,   <br></br>
who loned it through the streets of Idaho seeking visionary indian angels who were visionary indian angels,<br></br>
who thought they were only mad when Baltimore gleamed in supernatural ecstasy,<br></br>
who jumped in limousines with the Chinaman of Oklahoma on the impulse of winter midnight streetlight smalltown rain,<br></br>
who lounged hungry and lonesome through Houston seeking jazz or sex or soup, and followed the brilliant Spaniard to converse about America and Eternity, a hopeless task, and so took ship to Africa,<br></br>
who disappeared into the volcanoes of Mexico leaving behind nothing but the shadow of dungarees and the lava and ash of poetry scattered in fireplace Chicago,<br></br>
who reappeared on the West Coast investigating the FBI in beards and shorts with big pacifist eyes sexy in their dark skin passing out incomprehensible leaflets,<br></br>
who burned cigarette holes in their arms protesting the narcotic tobacco haze of Capitalism,<br></br>
who distributed Supercommunist pamphlets in Union Square weeping and undressing while the sirens of Los Alamos wailed them down, and wailed down Wall, and the Staten Island ferry also wailed,<br></br>
who broke down crying in white gymnasiums naked and trembling before the machinery of other skeletons,<br></br>
who bit detectives in the neck and shrieked with delight in policecars for committing no crime but their own wild cooking pederasty and intoxication,<br></br>
who howled on their knees in the subway and were dragged off the roof waving genitals and manuscripts,<br></br>
who let themselves be fucked in the ass by saintly motorcyclists, and screamed with joy,<br></br>
who blew and were blown by those human seraphim, the sailors, caresses of Atlantic and Caribbean love,<br></br>
who balled in the morning in the evenings in rosegardens and the grass of public parks and cemeteries scattering their semen freely to whomever come who may,<br></br>
who hiccuped endlessly trying to giggle but wound up with a sob behind a partition in a Turkish Bath when the blond naked angel came to pierce them with a sword,<br></br>
who lost their loveboys to the three old shrews of fate the one eyed shrew of the heterosexual dollar the one eyed shrew that winks out of the womb and the one eyed shrew that does nothing but sit on her ass and snip the intellectual golden threads of the craftsman’s loom,<br></br>
who copulated ecstatic and insatiate with a bottle of beer a sweetheart a package of cigarettes a candle and fell off the bed, and continued along the floor and down the hall and ended fainting on the wall with a vision of ultimate cunt and come eluding the last gyzym of consciousness,<br></br>
who sweetened the snatches of a million girls trembling in the sunset, and were red eyed in the morning but prepared to sweeten the snatch of the sunrise, flashing buttocks under barns and naked in the lake,<br></br>
who went out whoring through Colorado in myriad stolen night-cars, N.C., secret hero of these poems, cocksman and Adonis of Denver—joy to the memory of his innumerable lays of girls in empty lots diner backyards, moviehouses’ rickety rows, on mountaintops in caves or with gaunt waitresses in familiar roadside lonely petticoat upliftings especially secret gas-station solipsisms of johns, hometown alleys too,<br></br>
who faded out in vast sordid movies, were shifted in dreams, woke on a sudden Manhattan, and picked themselves up out of basements hung-over with heartless Tokay and horrors of Third Avenue iron dreams stumbled to unemployment offices,<br></br>
who walked all night with their shoes full of blood on the snowbank docks waiting for a door in the East River to open to a room full of steam-heat and opium,<br></br>
who created great suicidal dramas on the apartment cliff-banks of the Hudson under the wartime blue floodlight of the moon their heads shall be crowned with laurel in oblivion,<br></br>
who ate the lamb stew of the imagination or digested the crab at the muddy bottom of the rivers of Bowery,<br></br>
who wept at the romance of the streets with their pushcarts full of onions and bad music,<br></br>
who sat in boxes breathing in the darkness under the bridge, and rose up to build harpsichords in their lofts,<br></br>
who coughed on the sixth floor of Harlem crowned with flame under the tubercular sky surrounded by orange crates of theology,<br></br>
who scribbled all night rocking and rolling over lofty incantations which in the yellow morning were stanzas of gibberish,<br></br>
who cooked rotten animals lung heart feet tail borsht tortillas dreaming of the pure vegetable kingdom,<br></br>
who plunged themselves under meat trucks looking for an egg,<br></br>
who threw their watches off the roof to cast their ballot for Eternity outside of Time, alarm clocks fell on their heads every day for the next decade,<br></br>
who cut their wrists three times successively unsuccessfully, gave up and were forced to open antique stores where they thought they were growing old and cried,<br></br>
who were burned alive in their innocent flannel suits on Madison Avenue amid blasts of leaden verse the tanked-up clatter of the iron regiments of fashion the nitroglycerine shrieks of the fairies of advertising the mustard gas of sinister intelligent editors, or were run down by the drunken taxicabs of Absolute Reality,<br></br>
who jumped off the Brooklyn Bridge this actually happened and walked away unknown and forgotten into the ghostly daze of Chinatown soup alleyways firetrucks, not even one free beer,<br></br>
who sang out of their windows in despair, fell out of the subway window, jumped in the filthy Passaic, leaped on negroes, cried all over the street, danced on broken wineglasses barefoot smashed phonograph records of nostalgic European 1930s German jazz finished the whiskey and threw up groaning into the bloody toilet, moans in their ears and the blast of colossal steamwhistles,<br></br>
who barreled down the highways of the past journeying to each other’s hotrod-Golgotha jail-solitude watch or Birmingham jazz incarnation,<br></br>
who drove crosscountry seventytwo hours to find out if I had a vision or you had a vision or he had a vision to find out Eternity,<br></br>
who journeyed to Denver, who died in Denver, who came back to Denver waited in vain, who watched over Denver brooded loned in Denver and finally went away to find out the Time, now Denver is lonesome for her heroes,<br></br>
who fell on their knees in hopeless cathedrals praying for each other’s salvation and light and breasts, until the soul illuminated its hair for a second,<br></br>
who crashed through their minds in jail waiting for impossible criminals with golden heads and the charm of reality in their hearts who sang sweet blues to Alcatraz,<br></br>
who retired to Mexico to cultivate a habit, or Rocky Mount to tender Buddha or Tangiers to boys or Southern Pacific to the black locomotive or Harvard to Narcissus to Woodlawn to the daisychain or grave,<br></br>
who demanded sanity trials accusing the radio of hypnotism were left with their insanity their hands a hung jury,<br></br>
who threw potato salad at CCNY lecturers on Dadaism and subsequently presented themselves on the granite steps of the madhouse with shaven heads and harlequin speech of suicide, demanding instantaneous lobotomy,<br></br>
and who were given instead the concrete void of insulin Metrazol electricity hydrotherapy psychotherapy occupational therapy pingpong amnesia,<br></br>
who in humorless protest overturned only one symbolic pingpong table, resting briefly in catatonia,<br></br>
returning years later truly bald except for a wig of blood, and tears and fingers, to the visible madman doom of the wards of the madtowns of the East,<br></br>
Pilgrim State’s Rockland’s and Greystone’s foetid halls, bickering with the echoes of the soul, rocking and rolling in the midnight solitude-bench dolmen-realms of love, dream of life a nightmare, bodies turned to stone as heavy as the moon,<br></br>
with mother finally ******, and the last fantastic book flung out of the tenement window, and the last door closed at 4 A.M. and the last telephone slammed at the wall in reply and the last furnished room emptied down to the last piece of mental furniture, a yellow paper rose twisted on a wire hanger in the closet, and even that imaginary, nothing but a hopeful little bit of hallucination—<br></br>
ah, Carl, while you are not safe I am not safe, and now you’re really in the total animal soup of time—<br></br>
and who therefore ran through the icy streets obsessed with a sudden flash of the alchemy of the use of the ellipsis catalogue a variable measure and the vibrating plane,<br></br>
who dreamt and made incarnate gaps in Time Space through images juxtaposed, and trapped the archangel of the soul between 2 visual images and joined the elemental verbs and set the noun and dash of consciousness together jumping with sensation of Pater Omnipotens Aeterna Deus<br></br>
to recreate the syntax and measure of poor human prose and stand before you speechless and intelligent and shaking with shame, rejected yet confessing out the soul to conform to the rhythm of thought in his naked and endless head,<br></br>
the madman bum and angel beat in Time, unknown, yet putting down here what might be left to say in time come after death,<br></br>
and rose reincarnate in the ghostly clothes of jazz in the goldhorn shadow of the band and blew the suffering of America’s naked mind for love into an eli eli lamma lamma sabacthani saxophone cry that shivered the cities down to the last radio<br></br>
with the absolute heart of the poem of life butchered out of their own bodies good to eat a thousand years.

<br></br>
II
<br></br>
What sphinx of cement and aluminum bashed open their skulls and ate up their brains and imagination?
Moloch! Solitude! Filth! Ugliness! Ashcans and unobtainable dollars! Children screaming under the stairways! Boys sobbing in armies! Old men weeping in the parks!
Moloch! Moloch! Nightmare of Moloch! Moloch the loveless! Mental Moloch! Moloch the heavy judger of men!
Moloch the incomprehensible prison! Moloch the crossbone soulless jailhouse and Congress of sorrows! Moloch whose buildings are judgment! Moloch the vast stone of war! Moloch the stunned governments!
Moloch whose mind is pure machinery! Moloch whose blood is running money! Moloch whose fingers are ten armies! Moloch whose breast is a cannibal dynamo! Moloch whose ear is a smoking tomb!
Moloch whose eyes are a thousand blind windows! Moloch whose skyscrapers stand in the long streets like endless Jehovahs! Moloch whose factories dream and croak in the fog! Moloch whose smoke-stacks and antennae crown the cities!
Moloch whose love is endless oil and stone! Moloch whose soul is electricity and banks! Moloch whose poverty is the specter of genius! Moloch whose fate is a cloud of sexless hydrogen! Moloch whose name is the Mind!
Moloch in whom I sit lonely! Moloch in whom I dream Angels! Crazy in Moloch! Cocksucker in Moloch! Lacklove and manless in Moloch!
Moloch who entered my soul early! Moloch in whom I am a consciousness without a body! Moloch who frightened me out of my natural ecstasy! Moloch whom I abandon! Wake up in Moloch! Light streaming out of the sky!
Moloch! Moloch! Robot apartments! invisible suburbs! skeleton treasuries! blind capitals! demonic industries! spectral nations! invincible madhouses! granite cocks! monstrous bombs!
They broke their backs lifting Moloch to Heaven! Pavements, trees, radios, tons! lifting the city to Heaven which exists and is everywhere about us!
Visions! omens! hallucinations! miracles! ecstasies! gone down the American river!
Dreams! adorations! illuminations! religions! the whole boatload of sensitive bullshit!
Breakthroughs! over the river! flips and crucifixions! gone down the flood! Highs! Epiphanies! Despairs! Ten years’ animal screams and suicides! Minds! New loves! Mad generation! down on the rocks of Time!
Real holy laughter in the river! They saw it all! the wild eyes! the holy yells! They bade farewell! They jumped off the roof! to solitude! waving! carrying flowers! Down to the river! into the street!

<br></br>
III
<br></br>
Carl Solomon! I’m with you in Rockland <br></br>
   where you’re madder than I am <br></br>
I’m with you in Rockland <br></br>
   where you must feel very strange <br></br>
I’m with you in Rockland <br></br>
   where you imitate the shade of my mother <br></br>
I’m with you in Rockland <br></br>
   where you’ve murdered your twelve secretaries <br></br>
I’m with you in Rockland <br></br>
   where you laugh at this invisible humor <br></br>
I’m with you in Rockland <br></br>
   where we are great writers on the same dreadful typewriter <br></br>
I’m with you in Rockland <br></br>
   where your condition has become serious and is reported on the radio <br></br>
I’m with you in Rockland <br></br>
   where the faculties of the skull no longer admit the worms of the senses <br></br>
I'm with you in Rockland <br></br>
   where you drink the tea of the breasts of the spinsters of Utica <br></br>
I’m with you in Rockland <br></br>
   where you pun on the bodies of your nurses the harpies of the Bronx <br></br>
I’m with you in Rockland <br></br>
   where you scream in a straightjacket that you’re losing the game of the actual pingpong of the abyss <br></br>
I’m with you in Rockland <br></br>
   where you bang on the catatonic piano the soul is innocent and immortal it should never die ungodly in an armed madhouse <br></br>
I’m with you in Rockland <br></br>
   where fifty more shocks will never return your soul to its body again from its pilgrimage to a cross in the void <br></br>
I’m with you in Rockland <br></br>
   where you accuse your doctors of insanity and plot the Hebrew socialist revolution against the fascist national Golgotha <br></br>
I’m with you in Rockland <br></br>
   where you will split the heavens of Long Island and resurrect your living human Jesus from the superhuman tomb <br></br>
I’m with you in Rockland <br></br>
   where there are twentyfive thousand mad comrades all together singing the final stanzas of the Internationale <br></br>
I’m with you in Rockland <br></br>
   where we hug and kiss the United States under our bedsheets the United States that coughs all night and won’t let us sleep <br></br>
I’m with you in Rockland <br></br>
   where we wake up electrified out of the coma by our own souls’ airplanes roaring over the roof they’ve come to drop angelic bombs the hospital illuminates itself    imaginary walls collapse    O skinny legions run outside    O starry-spangled shock of mercy the eternal war is here    O victory forget your underwear we’re free <br></br>
I’m with you in Rockland <br></br>
   in my dreams you walk dripping from a sea-journey on the highway across America in tears to the door of my cottage in the Western night
 </div>

        </div>

    );
}

export default Track;

