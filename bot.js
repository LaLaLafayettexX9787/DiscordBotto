const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const PREFIX = "r!"

client.on('ready', () => {
    client.user.setActivity("Use r!help", { type: "PLAYING"})
    console.log(`Logged in as ${client.user.tag}!`);

});


client.on('message', (msg) => {

//Pokemon, Legendary and Trait Constants

var PokemonList = [
    "Bulbasaur",

    "Ivysaur",

    "Venusaur",

    "Charmander",

    "Charmeleon",

    "Charizard",

    "Squirtle",

    "Wartortle",

    "Blastoise",

    "Caterpie",

    "Metapod",

    "Butterfree",

    "Weedle",

    "Kakuna",

    "Beedrill",

    "Pidgey",

    "Pidgeotto",

    "Pidgeot",

    "Rattata",
    "Alolan Rattata",

    "Raticate",
    "Alolan Raticate",

    "Spearow",

    "Fearow",

    "Ekans",

    "Arbok",

    "Pikachu",

    "Raichu",
    "Alolan Raichu",

    "Sandshrew",
    "Alolan Sandshrew",

    "Sandslash",
    "Alolan Sandslash",

    "Nidoran ♀",

    "Nidorina",

    "Nidoqueen",

    "Nidoran ♂",

    "Nidorino",

    "Nidoking",

    "Clefairy",

    "Clefable",

    "Vulpix",
    "Alolan Vulpix",

    "Ninetales",
    "Alolan Ninetales",

    "Jigglypuff",

    "Wigglytuff",

    "Zubat",

    "Golbat",

    "Oddish",

    "Gloom",

    "Vileplume",

    "Paras",

    "Parasect",

    "Venonat",

    "Venomoth",

    "Diglett",
    "Alolan Diglett",

    "Dugtrio",
    "Alolan Dugtrio",

    "Meowth",
    "Alolan Meowth",

    "Persian",
    "Alolan Persian",

    "Psyduck",

    "Golduck",

    "Mankey",

    "Primeape",

    "Growlithe",

    "Arcanine",

    "Poliwag",

    "Poliwhirl",

    "Poliwrath",

    "Abra",

    "Kadabra",

    "Alakazam",

    "Machop",

    "Machoke",

    "Machamp",

    "Bellsprout",

    "Weepinbell",

    "Victreebel",

    "Tentacool",

    "Tentacruel",

    "Geodude",
    "Alolan Geodude",

    "Graveler",
    "Alolan Gravler",

    "Golem",
    "Alolan Golem",

    "Ponyta",

    "Rapidash",

    "Slowpoke",

    "Slowbro",

    "Magnemite",

    "Magneton",

    "Farfetch’d",

    "Doduo",

    "Dodrio",

    "Seel",

    "Dewgong",

    "Grimer",
    "Alolan Grimer",

    "Muk",
    "Alolan Muk",

    "Shellder",

    "Cloyster",

    "Gastly",

    "Haunter",

    "Gengar",

    "Onix",

    "Drowzee",

    "Hypno",

    "Krabby",

    "Kingler",

    "Voltorb",

    "Electrode",

    "Exeggcute",

    "Exeggutor",
    "Alolan Exeggutor",

    "Cubone",

    "Marowak",
    "Alolan Marowak",

    "Hitmonlee",

    "Hitmonchan",

    "Lickitung",

    "Koffing",

    "Weezing",

    "Rhyhorn",

    "Rhydon",

    "Chansey",

    "Tangela",

    "Kangaskhan",

    "Horsea",

    "Seadra",

    "Goldeen",

    "Seaking",

    "Staryu",

    "Starmie",

    "Mr. Mime",

    "Scyther",

    "Jynx",

    "Electabuzz",

    "Magmar",

    "Pinsir",

    "Tauros",

    "Magikarp",

    "Gyarados",

    "Lapras",

    "Ditto",

    "Eevee",

    "Vaporeon",

    "Jolteon",

    "Flareon",

    "Porygon",

    "Omanyte",

    "Omastar",

    "Kabuto",

    "Kabutops",

    "Aerodactyl",

    "Snorlax",

    "Dratini",

    "Dragonair",

    "Dragonite",

    "Chikorita",

    "Bayleef",

    "Meganium",

    "Cyndaquil",

    "Quilava",

    "Typhlosion",

    "Totodile",

    "Croconaw",

    "Feraligatr",

    "Sentret",

    "Furret",

    "Hoothoot",

    "Noctowl",

    "Ledyba",

    "Ledian",

    "Spinarak",

    "Ariados",

    "Crobat",

    "Chinchou",

    "Lanturn",

    "Pichu",

    "Cleffa",

    "Igglybuff",

    "Togepi",

    "Togetic",

    "Natu",

    "Xatu",

    "Mareep",

    "Flaaffy",

    "Ampharos",

    "Bellossom",

    "Marill",

    "Azumarill",

    "Sudowoodo",

    "Politoed",

    "Hoppip",

    "Skiploom",

    "Jumpluff",

    "Aipom",

    "Sunkern",

    "Sunflora",

    "Yanma",

    "Wooper",

    "Quagsire",

    "Espeon",

    "Umbreon",

    "Murkrow",

    "Slowking",

    "Misdreavus",

    "Unown",

    "Wobbuffet",

    "Girafarig",

    "Pineco",

    "Forretress",

    "Dunsparce",

    "Gligar",

    "Steelix",

    "Snubbull",

    "Granbull",

    "Qwilfish",

    "Scizor",

    "Shuckle",

    "Heracross",

    "Sneasel",

    "Teddiursa",

    "Ursaring",

    "Slugma",

    "Magcargo",

    "Swinub",

    "Piloswine",

    "Corsola",

    "Remoraid",

    "Octillery",

    "Delibird",

    "Mantine",

    "Skarmory",

    "Houndour",

    "Houndoom",

    "Kingdra",

    "Phanpy",

    "Donphan",

    "Porygon2",

    "Stantler",

    "Smeargle",

    "Tyrogue",

    "Hitmontop",

    "Smoochum",

    "Elekid",

    "Magby",

    "Miltank",

    "Blissey",

    "Larvitar",

    "Pupitar",

    "Tyranitar",

    "Treecko",

    "Grovyle",

    "Sceptile",

    "Torchic",

    "Combusken",

    "Blaziken",

    "Mudkip",

    "Marshtomp",

    "Swampert",

    "Poochyena",

    "Mightyena",

    "Zigzagoon",

    "Linoone",

    "Wurmple",

    "Silcoon",

    "Beautifly",

    "Cascoon",

    "Dustox",

    "Lotad",

    "Lombre",

    "Ludicolo",

    "Seedot",

    "Nuzleaf",

    "Shiftry",

    "Taillow",

    "Swellow",

    "Wingull",

    "Pelipper",

    "Ralts",

    "Kirlia",

    "Gardevoir",

    "Surskit",

    "Masquerain",

    "Shroomish",

    "Breloom",

    "Slakoth",

    "Vigoroth",

    "Slaking",

    "Nincada",

    "Ninjask",

    "Shedinja",

    "Whismur",

    "Loudred",

    "Exploud",

    "Makuhita",

    "Hariyama",

    "Azurill",

    "Nosepass",

    "Skitty",

    "Delcatty",

    "Sableye",

    "Mawile",

    "Aron",

    "Lairon",

    "Aggron",

    "Meditite",

    "Medicham",

    "Electrike",

    "Manectric",

    "Plusle",

    "Minun",

    "Volbeat",

    "Illumise",

    "Roselia",

    "Gulpin",

    "Swalot",

    "Carvanha",

    "Sharpedo",

    "Wailmer",

    "Wailord",

    "Numel",

    "Camerupt",

    "Torkoal",

    "Spoink",

    "Grumpig",

    "Spinda",

    "Trapinch",

    "Vibrava",

    "Flygon",

    "Cacnea",

    "Cacturne",

    "Swablu",

    "Altaria",

    "Zangoose",

    "Seviper",

    "Lunatone",

    "Solrock",

    "Barboach",

    "Whiscash",

    "Corphish",

    "Crawdaunt",

    "Baltoy",

    "Claydol",

    "Lileep",

    "Cradily",

    "Anorith",

    "Armaldo",

    "Feebas",

    "Milotic",

    "Castform",

    "Kecleon",

    "Shuppet",

    "Banette",

    "Duskull",

    "Dusclops",

    "Tropius",

    "Chimecho",

    "Absol",

    "Wynaut",

    "Snorunt",

    "Glalie",

    "Spheal",

    "Sealeo",

    "Walrein",

    "Clamperl",

    "Huntail",

    "Gorebyss",

    "Relicanth",

    "Luvdisc",

    "Bagon",

    "Shelgon",

    "Salamence",

    "Beldum",

    "Metang",

    "Metagross",

    "Turtwig",

    "Grotle",

    "Torterra",

    "Chimchar",

    "Monferno",

    "Infernape",

    "Piplup",

    "Prinplup",

    "Empoleon",

    "Starly",

    "Staravia",

    "Staraptor",

    "Bidoof",

    "Bibarel",

    "Kricketot",

    "Kricketune",

    "Shinx",

    "Luxio",

    "Luxray",

    "Budew",

    "Roserade",

    "Cranidos",

    "Rampardos",

    "Shieldon",

    "Bastiodon",

    "Burmy",

    "Wormadam",

    "Mothim",

    "Combee",

    "Vespiquen",

    "Pachirisu",

    "Buizel",

    "Floatzel",

    "Cherubi",

    "Cherrim",

    "Shellos",

    "Gastrodon",

    "Ambipom",

    "Drifloon",

    "Drifblim",

    "Buneary",

    "Lopunny",

    "Mismagius",

    "Honchkrow",

    "Glameow",

    "Purugly",

    "Chingling",

    "Stunky",

    "Skuntank",

    "Bronzor",

    "Bronzong",

    "Bonsly",

    "Mime Jr.",

    "Happiny",

    "Chatot",

    "Spiritomb",

    "Gible",

    "Gabite",

    "Garchomp",

    "Munchlax",

    "Riolu",

    "Lucario",

    "Hippopotas",

    "Hippowdon",

    "Skorupi",

    "Drapion",

    "Croagunk",

    "Toxicroak",

    "Carnivine",

    "Finneon",

    "Lumineon",

    "Mantyke",

    "Snover",

    "Abomasnow",

    "Weavile",

    "Magnezone",

    "Lickilicky",

    "Rhyperior",

    "Tangrowth",

    "Electivire",

    "Magmortar",

    "Togekiss",

    "Yanmega",

    "Leafeon",

    "Glaceon",

    "Gliscor",

    "Mamoswine",

    "Porygon-Z",

    "Gallade",

    "Probopass",

    "Dusknoir",

    "Froslass",

    "Rotom",

    "Snivy",

    "Servine",

    "Serperior",

    "Tepig",

    "Pignite",

    "Emboar",

    "Oshawott",

    "Dewott",

    "Samurott",

    "Patrat",

    "Watchog",

    "Lillipup",

    "Herdier",

    "Stoutland",

    "Purrloin",

    "Liepard",

    "Pansage",

    "Simisage",

    "Pansear",

    "Simisear",

    "Panpour",

    "Simipour",

    "Munna",

    "Musharna",

    "Pidove",

    "Tranquill",

    "Unfezant",

    "Blitzle",

    "Zebstrika",

    "Roggenrola",

    "Boldore",

    "Gigalith",

    "Woobat",

    "Swoobat",

    "Drilbur",

    "Excadrill",

    "Audino",

    "Timburr",

    "Gurdurr",

    "Conkeldurr",

    "Tympole",

    "Palpitoad",

    "Seismitoad",

    "Throh",

    "Sawk",

    "Sewaddle",

    "Swadloon",

    "Leavanny",

    "Venipede",

    "Whirlipede",

    "Scolipede",

    "Cottonee",

    "Whimsicott",

    "Petilil",

    "Lilligant",

    "Basculin",

    "Sandile",

    "Krokorok",

    "Krookodile",

    "Darumaka",

    "Darmanitan",

    "Maractus",

    "Dwebble",

    "Crustle",

    "Scraggy",

    "Scrafty",

    "Sigilyph",

    "Yamask",

    "Cofagrigus",

    "Tirtouga",

    "Carracosta",

    "Archen",

    "Archeops",

    "Trubbish",

    "Garbodor",

    "Zorua",

    "Zoroark",

    "Minccino",

    "Cinccino",

    "Gothita",

    "Gothorita",

    "Gothitelle",

    "Solosis",

    "Duosion",

    "Reuniclus",

    "Ducklett",

    "Swanna",

    "Vanillite",

    "Vanillish",

    "Vanilluxe",

    "Deerling",

    "Sawsbuck",

    "Emolga",

    "Karrablast",

    "Escavalier",

    "Foongus",

    "Amoonguss",

    "Frillish",

    "Jellicent",

    "Alomomola",

    "Joltik",

    "Galvantula",

    "Ferroseed",

    "Ferrothorn",

    "Klink",

    "Klang",

    "Klinklang",

    "Tynamo",

    "Eelektrik",

    "Eelektross",

    "Elgyem",

    "Beheeyem",

    "Litwick",

    "Lampent",

    "Chandelure",

    "Axew",

    "Fraxure",

    "Haxorus",

    "Cubchoo",

    "Beartic",

    "Cryogonal",

    "Shelmet",

    "Accelgor",

    "Stunfisk",

    "Mienfoo",

    "Mienshao",

    "Druddigon",

    "Golett",

    "Golurk",

    "Pawniard",

    "Bisharp",

    "Bouffalant",

    "Rufflet",

    "Braviary",

    "Vullaby",

    "Mandibuzz",

    "Heatmor",

    "Durant",

    "Deino",

    "Zweilous",

    "Hydreigon",

    "Larvesta",

    "Volcarona",

    "Chespin",

    "Quilladin",

    "Chesnaught",

    "Fennekin",

    "Braixen",

    "Delphox",

    "Froakie",

    "Frogadier",

    "Greninja",

    "Bunnelby",

    "Diggersby",

    "Fletchling",

    "Fletchinder",

    "Talonflame",

    "Scatterbug",

    "Spewpa",

    "Vivillon",

    "Litleo",

    "Pyroar",

    "Flabebe",

    "Floette",

    "Florges",

    "Skiddo",

    "Gogoat",

    "Pancham",

    "Pangoro",

    "Furfrou",

    "Espurr",

    "Meowstic",

    "Honedge",

    "Doublade",

    "Aegislash",

    "Spritzee",

    "Aromatisse",

    "Swirlix",

    "Slurpuff",

    "Inkay",

    "Malamar",

    "Binacle",

    "Barbaracle",

    "Skrelp",

    "Dragalge",

    "Clauncher",

    "Clawitzer",

    "Helioptile",

    "Heliolisk",

    "Tyrunt",

    "Tyrantrum",

    "Amaura",

    "Aurorus",

    "Sylveon",

    "Hawlucha",

    "Dedenne",

    "Carbink",

    "Goomy",

    "Sliggoo",

    "Goodra",

    "Klefki",

    "Phantump",

    "Trevenant",

    "Pumpkaboo",

    "Gourgeist",

    "Bergmite",

    "Avalugg",

    "Noibat",

    "Noivern",

    "Rowlet",

    "Dartrix",

    "Decidueye",

    "Litten",

    "Torracat",

    "Incineroar",

    "Popplio",

    "Brionne",

    "Primarina",

    "Pikipek",

    "Trumbeak",

    "Toucannon",

    "Yungoos",

    "Gumshoos",

    "Grubbin",

    "Charjabug",

    "Vikavolt",

    "Crabrawler",

    "Crabominable",

    "Oricorio",

    "Cutiefly",

    "Ribombee",

    "Rockruff",

    "Lycanroc",

    "Wishiwashi",

    "Mareanie",

    "Toxapex",

    "Mudbray",

    "Mudsdale",

    "Dewpider",

    "Araquanid",

    "Fomantis",

    "Lurantis",

    "Morelull",

    "Shiinotic",

    "Salandit",

    "Salazzle",

    "Stufful",

    "Bewear",

    "Bounsweet",

    "Steenee",

    "Tsareena",

    "Comfey",

    "Oranguru",

    "Passimian",

    "Wimpod",

    "Golisopod",

    "Sandygast",

    "Palossand",

    "Pyukumuku",

    "Type: Null",

    "Silvally",

    "Minior",

    "Komala",

    "Turtonator",

    "Togedemaru",

    "Mimikyu",

    "Bruxish",

    "Drampa",

    "Dhelmise",

    "Jangmo-o",

    "Hakamo-o",

    "Kommo-o",
    "Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon",
    "Blipbug", "Dottler", "Orbeetle", "Rookidee", "Corvisquire", "Corviknight", "Skwovet", "Greedent", "Nickit", "Thievul",
    "Galarian Zigzagoon", "Galarian Linoone", "Obstagoon", "Wooloo", "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund",
    "Gossifleur", "Eldegoss", "Sizzlipede", "Centiskorch", "Rolycoly", "Carkol", "Coalossal", "Arrokuda", "Barraskewda", "Galarian Meowth", "Perrserker",
    "Milcery", "Alcremie", "Applin", "Flapple", "Appletun", "Galarian Farfetch'd", "Sirfetch'd", "Galarian Stunfisk", "Galarian Corsola", "Cursola",
    "Impidimp", "Morgrem", "Grimmsnarl", "Hatenna", "Hattrem", "Hatterene", "Galarian Weezing", "Cufant", "Copperajah", "Cramorant", "Toxel", "Toxtricity",
    "Silicobra", "Sandaconda", "Galarian Yamask", "Runerigus", "Galarian Ponyta", "Galarian Rapidash", "Sinistea", "Phony Polteageist", "Antique Polteageist",
    "Indeedee", "Morpeko", "Falinks", "Snom", "Frosmoth", "Clobbopus", "Grapploct", "Pincurchin", "Galarian Mr. Mime", "Mr. Rime", "Galarian Darumaka", "Galarian Darmanitan",
    "Stonjourner", "Eiscue", "Duraludon", "Dracozolt", "Actrozolt", "Dracovish", "Arctovish", "Dreepy", "Drakloak", "Dragapult"]

var randomPokemon = PokemonList[Math.floor(Math.random() * 
PokemonList.length)];

var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomPokemon2 = PokemonList[Math.floor(Math.random() * 
PokemonList.length)];

var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomPokemon3 = PokemonList[Math.floor(Math.random() * 
PokemonList.length)];
    
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomPokemon4 = PokemonList[Math.floor(Math.random() * 
PokemonList.length)];
    
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomPokemon5 = PokemonList[Math.floor(Math.random() * 
PokemonList.length)];
    
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomPokemon6 = PokemonList[Math.floor(Math.random() * 
PokemonList.length)];

var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

// ----------------------------

var LegendaryList = ["Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew", "Raikou", "Entei", "Suicuine", "Lugia", "Ho-oh", "Celebi", "Regirock", "Regice", "Registeel", 
"Deoxys", "Groudon", "Kyogre", "Rayquaza", "Jirachi", "Latias", "Latios", "Dialga", "Palkia", "Giratina", "Heatran", "Regigias", "Cresselia", "Phione", "Manaphy", 
"Darkrai", "Cresselia", "Shaymin", "Arceus", "Victini", "Cobalion", "Virizion", "Terrakkion", "Zekrom", "Reshiram", "Landorus", "Tornadus", "Thundurus",
"Kyruem", "Keldeo", "Meloetta", "Genesect", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Tapu Koko", "Tapu Bulu", "Tapu Fini", 
"Tapu Lele", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord", "Necrozma",
"Magearna", "Marshadow", "Poipole", "Naganadel", "Stakataka", "Blacephalon", "Zeraora","Meltan", "Melmetal", "Zacian", "Zamazenta", "Eternatus"]

var randomLegendary = LegendaryList[Math.floor(Math.random() * 
LegendaryList.length)];

var rand = function(min, max) {
                        return Math.random() * (max - min) + min;
};

// ----------------------------

var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]

var randomType = TypeList[Math.floor(Math.random() * 
TypeList.length)];

var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomType2 = TypeList[Math.floor(Math.random() * 
TypeList.length)];
    
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomType3 = TypeList[Math.floor(Math.random() * 
TypeList.length)];
        
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var randomType4 = TypeList[Math.floor(Math.random() * 
TypeList.length)];
    
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};
    
var randomType5 = TypeList[Math.floor(Math.random() * 
TypeList.length)];
        
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};
    
var randomType6 = TypeList[Math.floor(Math.random() * 
TypeList.length)];
            
var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

//Text Only Responses

    if (msg.content.startsWith (PREFIX + "hello")) {
      msg.channel.send("Bzzzt! Hello Crater Trainer! Bzzzt! Have a good day!~ ♪");
  
    }
    
    if (msg.content.startsWith (PREFIX + "about")) {
       msg.channel.send("**CraterBot V1** is the first edition Rotom Drone that helps out members of the Creater Region. No task is too big or small for this Rotom to handle!");
  
    }
  
    if (msg.content.startsWith (PREFIX + "legendary")) {
       msg.channel.send("Your random legendary is **" + randomLegendary + "**!");
    
    }

    if (msg.content.startsWith (PREFIX + "pokemon")) {
       msg.channel.send("Your random pokemon is **" + randomPokemon + "**!");

    }

    if (msg.content.startsWith (PREFIX + "hpower")) {
        msg.channel.send("Your random hidden power type is **" + randomType + "**!");

    }

    if (msg.content.startsWith (PREFIX + "type")) {
        msg.channel.send("Your random type is **" + randomType + "**!");

    }

    if (msg.content.startsWith (PREFIX + "coin")) {
      number = 2;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1 ;
      switch (random) {
          case 1:  msg.channel.send('The Coin landed on **Heads!**'); break;
          case 2:  msg.channel.send('The Coin landed on **Tails!**'); break;
    }}

    if (msg.content.startsWith (PREFIX + "time")) {
      var d = new Date();
      var e = new Date(d.getTime() - (14400000) );	
      //+(3600000)
      
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
      var currentMonth = months[e.getMonth()];
      
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      var currentDay = days[e.getDay()];
      
      var HH = e.getHours();
      var mm = e.getMinutes();
      var ss = e.getSeconds();
      
      HH = HH < 10 ? '0' + HH : HH;
      mm = mm < 10 ? '0' + mm : mm;
      ss = ss < 10 ? '0' + ss : ss;
      
      var currentTime = HH + ":" + mm + ":" + ss;
                  
      //MESSAGE COMMAND HERE!
      
       msg.channel.send("It\'s currently **" + currentDay + ", " + e.getDate() + " " + currentMonth + " "+ e.getFullYear() + "** and the time is **" + currentTime + "** in the Crater Region right now!");				
    }

    if (msg.content.startsWith (PREFIX + "voidstrands")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'You look down to see **1 Void Strand** on the ground!', 
            'You look down to see **2 Void Strands** on the ground!',
            'You look down to see **3 Void Strands** on the ground!'];
        var weight = [60, 30, 10];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

//Metronome Moves

    if (msg.content.startsWith (PREFIX + "metronome")) {
    
    var MoveList = [
    "Absorb",
    "Vaccum Wave",
    "clamp",
    "Constrict",
    "Peck",
    "Whirlpool",
    "Acid",
    "Acid Spray", 
    "Bind",
    "Bubble", 
    "Bullet Punch",
    "Disarming Voice",
    "Dragon Rage",
    "Dual Chop",
    "Ember",
    "Fairy Wind",
    "False Swipe",
    "Gust",
    "Hold Back",
    "Ice Shard",
    "Infestation",
    "Leafage",
    "Mach Punch",
    "Mega Drain",
    "Mud Slap",
    "Nuzzle",
    "Pay Day",
    "Poison Sting",
    "Pound",
    "Powder Snow",
    "Power Up Punch",
    "Pursuit",
    "Quick Attack",
    "Rock Smash",
    "Sand Tomb",
    "Scratch",
    "Shadow Sneak",
    "Sonic Boom",
    "Tackle",
    "Thundershock",
    "Twister",
    "Water Gun",
    "Wrap",
    "Astonish",
    "Double Kick",
    "Lick",
    "Smog",
    "Twin Needle",
    "Vine Whip",
    "Accelerock",
    "Assist",
    "Barrage",
    "Bonemerang",
    "Bullet Seed",
    "clear Smog",
    "Comet Punch",
    "Confusion",
    "Cut",
    "Double Slap",
    "Draining Kiss",
    "Echoed Voice",
    "Electro Ball",
    "Feint",
    "Fell Stinger",
    "Flame Charge",
    "Fury Attack",
    "Fury Cutter",
    "Fury Swipes",
    "Gear Grind",
    "Karate Chop",
    "Low Kick",
    "Metal claw",
    "Nature Power",
    "Nightmare",
    "Payback",
    "Pin Missile",
    "Poison Fang",
    "Poison Tail",
    "Psywave",
    "Rapid Spin",
    "Rock Throw",
    "Shadow Rush",
    "Smack Down",
    "Snore",
    "Spike Cannon",
    "Struggle Bug",
    "Water Shuriken",
    "Weather Ball (Fire)",
    "Weather Ball (Ice)",
    "Weather Ball (Normal)",
    "Weather Ball (Rock)",
    "Weather Ball (Water)",
    "Aqua Jet",
    "Arm Thrust",
    "Bone Rush",
    "Electro Web",
    "Fire Spin",
    "Icicle Spear",
    "Icy Wind",
    "Mud Shot",
    "Razor Leaf",
    "Snarl",
    "Tail Slap",
    "Vice Grip",
    "Aerial Ace",
    "Air Cutter",
    "Ancient Power",
    "Assurance",
    "Avalanche",
    "Beat Up",
    "Bide",
    "Bite",
    "Brutal Swing",
    "Bug Bite",
    "Bulldoze",
    "Charge Beam",
    "Circle Throw",
    "Copycat",
    "Covet",
    "Double Hit",
    "Dragon Tail",
    "Fake Out",
    "Feint Attack",
    "Flail",
    "Flame Wheel",
    "Fling",
    "Force Palm",
    "Frost Breath",
    "Heart Stamp",
    "Incinerate",
    "Magical Leaf",
    "Magnet Bomb",
    "Me First",
    "Mirror Move",
    "Natural Gift",
    "Needle Arm",
    "Night Shade",
    "Ominous Wind",
    "Pluck",
    "Rage",
    "Revenge",
    "Rock Blast",
    "Rock Tomb",
    "Rolling Kick",
    "Rollout",
    "Round",
    "Seismic Toss",
    "Shadow Punch",
    "Shock Wave",
    "Silver Wind",
    "Sky Drop",
    "Stored Power",
    "Storm Throw",
    "Super Fang",
    "Swift",
    "Thief",
    "Triple Kick",
    "Water Pulse",
    "Wing Attack",
    "Aurora Beam",
    "Bone Club",
    "Bubble Beam",
    "Fire Fang",
    "Glaciate",
    "Heat Crash",
    "Hex",
    "Horn Attack",
    "Ice Fang",
    "Knock Off",
    "Leaf Tornado",
    "Low Sweep",
    "Magnitude",
    "Mirror Shot",
    "Mud Bomb",
    "Octazooka",
    "Parabolic Charge",
    "Psybeam",
    "Sludge",
    "Spark",
    "Steamroller",
    "Stomp",
    "Thunder Fang",
    "Venoshock",
    "Chip Away",
    "Cross Poison",
    "Dizzy Punch",
    "Facade",
    "Flame Burst",
    "Freeze Dry",
    "Headbutt",
    "Luster Purge",
    "Mist Ball",
    "Night Slash",
    "Psycho Cut",
    "Retaliate",
    "Secret Power",
    "Shadow Claw",
    "Slash",
    "Smart Strike",
    "Smelling Salts",
    "Spit Up",
    "Steel Wing",
    "Sucker Punch",
    "Trop Kick",
    "U-turn",
    "Vital Throw",
    "Volt Switch",
    "Wake Up Slap",
    "Air Slash",
    "Brick Break",
    "Crush Claw",
    "Dragonbreath",
    "Drain Punch",
    "Fire Punch",
    "Grass Knot",
    "Horn Leech",
    "Ice Punch",
    "Mystical fire",
    "Razor Shell",
    "Relic Song",
    "Rock Slide",
    "Signal Beam",
    "Stomping Tantrum",
    "Thunder Punch",
    "Giga Drain",
    "Acrobatics",
    "Anchor Shot",
    "Aura Sphere",
    "Brine",
    "Counter",
    "Crunch",
    "Dark Pulse",
    "Dazzling Gleam",
    "Dig",
    "Discharge",
    "Dive",
    "Dragon Claw",
    "Drill Peck",
    "Drill Run",
    "Extrasensory",
    "Extreme Speed",
    "Fiery Dance",
    "Final Gambit",
    "Fire Lash",
    "Fire Pledge",
    "Flash Cannon",
    "Grass Pledge",
    "Gyro Ball",
    "Hidden Power (Bug)",
    "Hidden Power (Dark)",
    "Hidden Power (Dragon)",
    "Hidden Power (Electric)",
    "Hidden Power (Fairy)",
    "Hidden Power (Fighting)",
    "Hidden Power (Fire)",
    "Hidden Power (Flying)",
    "Hidden Power (Ghost)",
    "Hidden Power (Grass)",
    "Hidden Power (Ground)",
    "Hidden Power (Ice)",
    "Hidden Power (Normal)",
    "Hidden Power (Poison)",
    "Hidden Power (Psychic)",
    "Hidden Power (Rock)",
    "Hidden Power (Shadow)",
    "Hidden Power (Steel)",
    "Hidden Power (Water)",
    "Hyper Fang",
    "Hyperspace Hole",
    "Ice Ball",
    "Iron Head",
    "Lava Plume",
    "Leech Life",
    "Lunge",
    "Mega Punch",
    "Metal Burst",
    "Natures Madness",
    "Oblivion Wing",
    "Poison Jab",
    "Power Gem",
    "Power Trip",
    "Psyshock",
    "Punishment",
    "Razor Wind",
    "Reversal",
    "Scald",
    "Seed Bomb",
    "Shadow Ball",
    "Slam",
    "Spirit Shackle",
    "Strength",
    "Submission",
    "Throat Chop",
    "Water Pledge",
    "Waterfall",
    "X-Scissor",
    "Zen Headbutt",
    "Zing Zap",
    "Blaze Kick",
    "Body Slam",
    "Bounce",
    "Darkest Lariat",
    "Dragon Pulse",
    "Icicle Crash",
    "Liquidation",
    "Night Daze",
    "Psychic Fangs",
    "Secret Sword",
    "Shadow Blast",
    "Shadow Bone",
    "Shadow End",
    "Sky Uppercut",
    "Aqua Tail",
    "Attack Order",
    "Bug Buzz",
    "Dragon Hammer",
    "Earth Power",
    "Energy Ball",
    "First Impression",
    "Flamethrower",
    "Fly",
    "Hyper Voice",
    "Ice Beam",
    "Lands Wrath",
    "Leaf Blade",
    "Meteor Mash",
    "Muddy Water",
    "Multi Attack (Normal)",
    "Petal Blizzard",
    "Phantom Force",
    "Play Rough",
    "Pollen Puff",
    "Psychic",
    "Revelation Dance",
    "Rock Climb",
    "Sacred Sword",
    "Sludge Bomb",
    "Sparkling Aria",
    "Spectral Thief",
    "Surf",
    "Take Down",
    "Thousand Arrows",
    "Thousand Waves",
    "Thunderbolt",
    "Tri Attack",
    "Uproar",
    "Wild Charge",
    "Foul Play",
    "Heat wave",
    "High Horsepower",
    "Moonblast",
    "Sludge Wave",
    "Aeroblast",
    "Beak Blast",
    "Core Enforcer",
    "Crabhammer",
    "Cross Chop",
    "Diamond Storm",
    "Dragon Rush",
    "Dream Eater",
    "Dynamic Punch",
    "Earthquake",
    "egg Bomb",
    "Flying Press",
    "Frustration",
    "Fusion Bolt",
    "Fusion Flare",
    "Hammer Arm",
    "Heavy Slam",
    "Hyperspace Fury",
    "Ice Hammer",
    "Inferno",
    "Iron Tail",
    "Judgement (Normal)",
    "Jump Kick",
    "Magma Storm",
    "Moongeist Beam",
    "Photon Geyser",
    "Plasma Fists",
    "Psystrike",
    "Return",
    "Sacred Fire",
    "Searing Shot",
    "Spacial Rend",
    "Stone Edge",
    "Sunsteel Strike",
    "Wring Out",
    "Blizzard",
    "clanging Scales",
    "Crush Grip",
    "Fire Blast",
    "Hurricane",
    "Hydro Pump",
    "Origin Pulse ",
    "Steam Eruption",
    "Thunder",
    "Belch",
    "Brave Bird",
    "close Combat",
    "Double Edge",
    "Dragon Ascent",
    "Fissure",
    "Flare Blitz",
    "Focus Blast",
    "Future Sight",
    "Guillotine",
    "Gunk Shot",
    "Head Charge",
    "Outrage",
    "Petal Dance",
    "Power Whip",
    "Precipice Blades",
    "Seed Flare",
    "Shadow Force",
    "Sheer Cold",
    "Solar Beam",
    "Superpower",
    "Synchronoise",
    "Techno Blast",
    "Thrash",
    "Trump Card",
    "Volt Tackle",
    "Woodhammer",
    "Zap Cannon",
    "Solar Blade",
    "Blue Flare",
    "Bolt Strike",
    "Burn Up",
    "Draco Meteor",
    "Fleur Canon",
    "High Jump Kick",
    "Leaf Storm",
    "Overheat",
    "Skull Bash",
    "Boomburst",
    "Doom Desire",
    "Freeze Shock",
    "Ice Burn",
    "Last Resort",
    "Light Of Ruin",
    "Psycho Boost",
    "Sky Attack",
    "Blast Burn",
    "Eruption",
    "Focus Punch",
    "Frenzy Plant ",
    "Giga Impact",
    "Head Smash",
    "Hydro Cannon",
    "Hyper Beam",
    "Mind Blown",
    "Roar Of Time",
    "Rock Wrecker",
    "Shell Trap",
    "Water Spout",
    "Prismatic Laser",
    "Apple Acid", "Aura Wheel", "Behemoth Bash", "Body Press", "Bolt Beak", "Branch Poke", "Breaking Swipe", "Clangorous Soul", "Court Change",
    "Decorate", "Dragon Darts", "Drum Beating", "Dynamax Cannon", "Eternabeam", "False Surrender", "Fishious Rend", "Grav Apple", "Jaw Lock", "Life Dew",
    "Magic Powder", "Meteor Assault", "No Retreat", "Obstruct", "Octolock", "Overdrive", "Pyro Ball", "Snap Trap", "Snipe Shot", "Spirit Break", "Steel Beam",
    "Strange Steam", "Stuff Cheeks", "Tar Shot", "Teatime"]
  
    var randomMove = MoveList[Math.floor(Math.random() * 
        MoveList.length)];
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
            };
  
             msg.channel.send("Your random metronome move is **" + randomMove + "**!");
    }
  
  //Image Only Responses
  
    if (msg.content.startsWith (PREFIX + "balanced")) {
         msg.channel.send({files: ["./images/balanced.gif"]});
    }

    if (msg.content.startsWith (PREFIX + "poffins")) {
        msg.channel.send({files: ["./images/poffins.png"]});
    }

   if (msg.content.startsWith (PREFIX + "brick")) {
    msg.channel.send({files: ["./images/brick.png"]});
    } 

    if (msg.content.startsWith (PREFIX + "pennies")) {
    msg.channel.send({files: ["./images/pennies.gif"]});
    } 
        
    
  //Starter Birthday Box and Type Study

   if (msg.content.startsWith (PREFIX + "starter")) {
    
    var StarterList = ["Caterpie","Weedle","Pidgey", "Rattata", "Alolan Rattata",
    "Spearow", "Ekans", "Pichu", "Pikachu", "Nidoran F", "Nidoran M", "Eevee", "Oddish", "Paras", "Venonant", "Diglett", "Alolan Diglett",
    "Meowth", "Alolan Meowth", "Galarian Meowth", "Poliwag", "Goldeen", "Eevee", "Sentret", "Hoothoot", "Ledyba", "Spinarak", 
    "Zubat", "Chinchou", "Sunkern", "Hoppip", "Wooper", "Pineco", "Dunsparce", "Cleffa", "Igglybuff", "Togepi", "Magby", "Elekid", 
    "Poochyena", "Zigzagoon", "Galarian Zigzagoon", "Wurmple", "Lotad", "Seedot", "Taillow",
    "Wingull", "Surskit", "Shroomish", "Slakoth", "Nincada", "Whismur", "Skitty", "Roselia", "Gulpin", "Luvdisc", "Starly", "Bidoof", "Kricketot",
    "Budew", "Burmy (Grass)", "Burmy (Ground)", "Burmy (Trash)", "Combee", "Pachirishu", "Buizel", "Cherubi",
    "Shellos", "Buneary", "Finneon", "Rotom", "Patrat", "Lilipup", "Purrloin", "Pansage", "Pansear", "Panpour", "Pidove", "Blitzle", "Roggenrola", "Woobat", "Drilbur",
    "Tympole", "Basculin (Red)", "Basculin (Blue)", "Foongus", "Shelmet", "Karrablast", "Bunnelby", "Fletchling", "Scatterbug", "Litleo", "Flabebe", "Skiddo", 
    "Pancham", "Furfrou", "Espurr", "Honedge", "Spritzee", "Swirlix", "Inkay", "Malmar", "Binacle", "Skrelp", "Clauncher",
    "Helioptile", "Pikipek", "Yungoos", "Grubbin", "Crabrawler", "Oricorio (Baile)", "Oricorio (Pom-Pom)", "Oricorio (Pa'u)", "Oricorio (Sensu)", "Cutiefly", "Rockruff", "Wishwashi", "Mareanie",
    "Mudbray", "Dewpider", "Fomantis", "Morelull", "Salandit", "Stufful", "Bounsweet", "Togedemaru", "Skwovet", "Rookidee", "Blipbug", "Nickit", "Gossifleur", "Wooloo", "Chewtle", "Yamper", "Arrokuda" 
    ]
   
    var randomStarter = StarterList[Math.floor(Math.random() * 
    StarterList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var randomStarter2 = StarterList[Math.floor(Math.random() * 
    StarterList.length)];
    
    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var randomStarter3 = StarterList[Math.floor(Math.random() * 
    StarterList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    msg.channel.send("Your three random starter Pokemon are the following:\n\n" + 
    randomType + " " + randomStarter + "\n" + 
    randomType2 + " " + randomStarter2 + "\n" + 
    randomType3 + " " + randomStarter3 + "\n");
    }

    if (msg.content.startsWith (PREFIX + "birthday")) {
    
        var BMon1 = randomPokemon;

        var BMon2 = randomPokemon2;

        var BMon3 = randomPokemon3;

        var BMon4 = randomPokemon4;

        var BMon5 = randomPokemon5;

        var BMon6 = randomPokemon6;

        var ItemList = ["a Strange Round Stone", "a Nanab Berry", "a Razz Berry", "a Cocoa Poffin", "a " + randomType + " Egg", "some " + randomType + " Honey", "a Crater Ball", "a Friendship Ball", "a Grepa Berry",
        "a Hondew Berry", "a Kelpsy Berry", "a Bag of " + randomType + " Ore Dust", "a Poke Toy", "a Pinap Berry", "a Pink Apricot", "a Potion", "100 Crater Coins", "some " + randomType + " Ore"]
    
        var randomItem = ItemList[Math.floor(Math.random() * 
        ItemList.length)];
    
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
            };

        msg.channel.send("Happy Birthday! Here are your six Pokemon, you may choose what Type(s) they can be:\n\n" +
        BMon1 + "\n" +
        BMon2 + "\n" +
        BMon3 + "\n" +
        BMon4 + "\n" +
        BMon5 + "\n" +
        BMon6 + "\n\n" +
        "And your random Birthday Item is **" + randomItem + "**! "
        );
    }

    if (msg.content.startsWith (PREFIX + "event")) {
    
        var EMon1 = randomPokemon;

        var EMon2 = randomPokemon2;

        var EMon3 = randomPokemon3;

        var EMon4 = randomPokemon4;

        var EMon5 = randomPokemon5;

        var EMon6 = randomPokemon6;

        msg.channel.send("Here are your six event rolled Pokemon with their types:\n\n" +
        randomType + " " + EMon1 + "\n" +
        randomType2 + " " + EMon2 + "\n" +
        randomType3 + " " + EMon3 + "\n" +
        randomType4 + " " + EMon4 + "\n" +
        randomType5 + " " + EMon5 + "\n" +
        randomType6 + " " + EMon6
        );
    }

    if (msg.content.startsWith (PREFIX + "study")) {
    
    var SmonList = ["Bulbasaur", "Squirtle", "Charmander","Chikorita","Totodile","Cyndaquil","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Oshawott","Tepig", "Chespin", "Fennekin", "Froakie", 
    "Litten", "Rowlet", "Popplio","Grookey", "Sobble", "Scorbunny"]
    var randomSmon = SmonList[Math.floor(Math.random() * 
    SmonList.length)];
    
    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var SmonList1 = ["Bulbasaur", "Squirtle", "Charmander","Chikorita","Totodile","Cyndaquil","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Oshawott","Tepig", "Chespin", "Fennekin", "Froakie", 
    "Litten", "Rowlet", "Popplio","Grookey", "Sobble", "Scorbunny"]
    var randomSmon1 = SmonList1[Math.floor(Math.random() * 
    SmonList1.length)];
    
    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var SmonList2 = ["Bulbasaur", "Squirtle", "Charmander","Chikorita","Totodile","Cyndaquil","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Oshawott","Tepig", "Chespin", "Fennekin", "Froakie", 
    "Litten", "Rowlet", "Popplio","Grookey", "Sobble", "Scorbunny"]
    var randomSmon2 = SmonList2[Math.floor(Math.random() * 
    SmonList2.length)];
    
    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    msg.channel.send("Your three random Type Study starter Pokemon are **" + randomSmon + "**, **" + randomSmon1 +   "**, and **" + randomSmon2 + "**! They are the type the member put in their comment!");
    }

//Pokeballs
  
  // Friendship Balls (WIP) and Type Balls (90/10 on Matching Type Regardless of HP, 30/70 on Not Matching and 1/99 on Opposite Type (Water Ball on Fire Type and others etc.))
  
      if (msg.content.startsWith (PREFIX + "craterball100")) {
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
     
    var getRandomItem = function(list, weight) {
        var total_weight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });
         
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
         
        for (var i = 0; i < list.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return list[i];
            }
        }
         
        // end of function
    };      
    var list = [
        'Wiggle, Wiggle ... **Click!** Congrats! You caught the Pokemon! \n \n **Pokemon will be added to your inventory for referencing!**', 
        'Wiggle, Wiggle ...  **Poof!** So close! \n \n There it goes...  better luck next time!'];
    var weight = [50, 50];
    var random_item = getRandomItem(list, weight);
  
     msg.channel.send(random_item);
      }

      if (msg.content.startsWith (PREFIX + "craterball50")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'Wiggle, Wiggle ... **Click!** Congrats! You caught the Pokemon! \n \n **Pokemon will be added to your inventory for referencing!**', 
            'Wiggle, Wiggle ...  **Poof!** So close! \n \n There it goes...  better luck next time!'];
        var weight = [80, 20];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
      }

      if (msg.content.startsWith (PREFIX + "greaterball100")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'Wiggle, Wiggle ... **Click!** Congrats! You caught the Pokemon! \n \n **Pokemon will be added to your inventory for referencing!**', 
            'Wiggle, Wiggle ...  **Poof!** So close! \n \n There it goes...  better luck next time!'];
        var weight = [55, 45];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
      }
    
      if (msg.content.startsWith (PREFIX + "greaterball50")) {
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
            };
             
            var getRandomItem = function(list, weight) {
                var total_weight = weight.reduce(function (prev, cur, i, arr) {
                    return prev + cur;
                });
                 
                var random_num = rand(0, total_weight);
                var weight_sum = 0;
                //console.log(random_num)
                 
                for (var i = 0; i < list.length; i++) {
                    weight_sum += weight[i];
                    weight_sum = +weight_sum.toFixed(2);
                     
                    if (random_num <= weight_sum) {
                        return list[i];
                    }
                }
                 
                // end of function
            };      
            var list = [
                'Wiggle, Wiggle ... **Click!** Congrats! You caught the Pokemon! \n \n **Pokemon will be added to your inventory for referencing!**', 
                'Wiggle, Wiggle ...  **Poof!** So close! \n \n There it goes...  better luck next time!'];
            var weight = [85, 15];
            var random_item = getRandomItem(list, weight);
          
             msg.channel.send(random_item);
      }
    
      if (msg.content.startsWith (PREFIX + "ultimateball100")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'Wiggle, Wiggle ... **Click!** Congrats! You caught the Pokemon! \n \n **Pokemon will be added to your inventory for referencing!**', 
            'Wiggle, Wiggle ...  **Poof!** So close! \n \n There it goes...  better luck next time!'];
        var weight = [60, 40];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
      }
    
      if (msg.content.startsWith (PREFIX + "ultimateball50")) {
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
            };
             
            var getRandomItem = function(list, weight) {
                var total_weight = weight.reduce(function (prev, cur, i, arr) {
                    return prev + cur;
                });
                 
                var random_num = rand(0, total_weight);
                var weight_sum = 0;
                //console.log(random_num)
                 
                for (var i = 0; i < list.length; i++) {
                    weight_sum += weight[i];
                    weight_sum = +weight_sum.toFixed(2);
                     
                    if (random_num <= weight_sum) {
                        return list[i];
                    }
                }
                 
                // end of function
            };      
            var list = [
                'Wiggle, Wiggle ... **Click!** Congrats! You caught the Pokemon! \n \n **Pokemon will be added to your inventory for referencing!**', 
                'Wiggle, Wiggle ...  **Poof!** So close! \n \n There it goes...  better luck next time!'];
            var weight = [90, 10];
            var random_item = getRandomItem(list, weight);
          
             msg.channel.send(random_item);
      }

      if (msg.content.startsWith (PREFIX + "befriend")) {
      
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'It seems as if the Pokemon is interested in your offer! However as it gets closer it quickly nabs the snack and runs away ...', 
            'It seems as if the Pokemon is interested in your offer! They take up the snack and do not seem to run away ... you have a new friend!'];
        var weight = [20, 80];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
      }

//Item List

    if (msg.content.startsWith (PREFIX + "item")) {
        
    var RItemList = ["a Strange Round Stone", "a Nanab Berry", "a Razz Berry", "a Cocoa Poffin", "a " + randomType + " Egg", "some " + randomType + " Honey", "a Crater Ball", "a Friendship Ball", "a Grepa Berry",
    "a Hondew Berry", "a Kelpsy Berry", "a Bag of " + randomType + " Ore Dust", "a Poke Toy", "a Pinap Berry", "a Pink Apricot", "a Potion", "some Rusty Gear", "100 Crater Coins", "some " + randomType + " Ore"]

    var randomRItem = RItemList[Math.floor(Math.random() * 
    RItemList.length)];

    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };

     msg.channel.send("Your random item is **" + randomRItem + "**!");
    }

    if (msg.content.startsWith (PREFIX + "srstone")) {
      
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            "**Nothing**! It seems like it was an empty stone ... better luck next time!", 
            "some **" + randomType + " Dust**! Perfect! Time to add it to your bag collection!",
            "a piece of **" + randomType + " Ore**! Perfect! Time to add it to your shiny rock collection!",
            "a **Semi-Polished " + randomType + " Ore Chunk**! Perfect! Time to evolve a Pokemon with the same type!"];
        var weight = [30,45,10,5];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send("You crack open the Strange Round Stone ... and it seems like you got " + random_item);
    }

//Crafting List

    if (msg.content.startsWith (PREFIX + "cthoney1")) {
      
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
     
    var getRandomItem = function(list, weight) {
        var total_weight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });
         
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
         
        for (var i = 0; i < list.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return list[i];
            }
        }
         
        // end of function
    };      
    var list = [
        "In goes the dust and it looks like ... the dust didn't do anything but cause a mess. Oh dear ... now you can't use any of this ...", 
        "In goes the dust and it looks like ... the dust infused with the honey! Congrats! You now have some typed honey based on the dust you used!",];
    var weight = [40,60];
    var random_item = getRandomItem(list, weight);
  
     msg.channel.send(random_item);
    }

    if (msg.content.startsWith (PREFIX + "cthoney2")) {
      
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            "In goes the dust and it looks like ... the dust didn't do anything but cause a mess. Oh dear ... now you can't use any of this ...", 
            "In goes the dust and it looks like ... the dust infused with the honey! Congrats! You now have some typed honey based on the dust you used!",];
        var weight = [25,75];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

    if (msg.content.startsWith (PREFIX + "cthoney3")) {
      
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            "In goes the dust and it looks like ... the dust didn't do anything but cause a mess. Oh dear ... now you can't use any of this ...", 
            "In goes the dust and it looks like ... the dust infused with the honey! Congrats! You now have some typed honey based on the dust you used!",];
        var weight = [10,90];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

//Roll Commands

    if (msg.content.startsWith (PREFIX + "acctest1")) {
      
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
      
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
      
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
      
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
      //end of function
        };     
      
        var resultList = ["Despite being hit by an accuracy lowering move, the attack **hits**!",
        "Unfortunately by being hit by an accuracy lowering move, the attack **misses**!"];
        var resultWeight = [90,10];
        var random_result = getRandomResult(resultList, resultWeight);
         
         msg.channel.send(random_result);
    }
    
    if (msg.content.startsWith (PREFIX + "acctest2")) {
      
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
      
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
      
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
      
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
      //end of function
        };     
      
        var resultList = ["Despite being hit by an accuracy lowering move, the attack **hits**!",
        "Unfortunately by being hit by an accuracy lowering move, the attack **misses**!"];
        var resultWeight = [80,20];
        var random_result = getRandomResult(resultList, resultWeight);
         
         msg.channel.send(random_result);
    }
    
    if (msg.content.startsWith (PREFIX + "acctest3")) {
      
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
      
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
      
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
      
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
      //end of function
        };     
      
        var resultList = ["Despite being hit by an accuracy lowering move, the attack **hits**!",
        "Unfortunately by being hit by an accuracy lowering move, the attack **misses**!"];
        var resultWeight = [70,30];
        var random_result = getRandomResult(resultList, resultWeight);
         
         msg.channel.send(random_result);
    }
    
    if (msg.content.startsWith (PREFIX + "acctest4")) {
      
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
      
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
      
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
      
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
      //end of function
        };     
      
        var resultList = ["Despite being hit by an accuracy lowering move, the attack **hits**!",
        "Unfortunately by being hit by an accuracy lowering move, the attack **misses**!"];
        var resultWeight = [60,40];
        var random_result = getRandomResult(resultList, resultWeight);
         
         msg.channel.send(random_result);
    }
    
    if (msg.content.startsWith (PREFIX + "acctest5")) {
      
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
      
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
      
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
      
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
      //end of function
        };     
      
        var resultList = ["Despite being hit by an accuracy lowering move, the attack **hits**!",
        "Unfortunately by being hit by an accuracy lowering move, the attack **misses**!"];
        var resultWeight = [50,50];
        var random_result = getRandomResult(resultList, resultWeight);
         
         msg.channel.send(random_result);
    }

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu1")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2)) + 2;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 2;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv1")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 2) + 4;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 4;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis1")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 0.5) + 1;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 1;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu2")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 4)) + 4;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 4;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv2")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 4) * 2) + 8;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 8;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis2")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 4) * 0.5) + 2;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 2;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu3")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 6)) + 6;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 6;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv3")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 6) * 2) + 12;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 12;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis3")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 0.5) + 3;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 3;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu4")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 8)) + 8;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 8;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv4")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 8) * 2) + 16;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 16;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis4")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 0.5) + 4;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 4;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu5")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 10)) + 10;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 10;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv5")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 10) * 2) + 20;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 20;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis5")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 10) * 0.5) + 5;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 5;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------
    
    if (msg.content.startsWith (PREFIX + "trainerneu6")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 12)) + 12;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 12;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv6")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 12) * 2) + 24;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 24;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis6")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 12) * 0.5) + 6;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 6;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu7")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 14)) + 14;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 14;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv7")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 14) * 2) + 28;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 28;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis7")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 14) * 0.5) + 7;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 7;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu8")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 16)) + 16;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 16;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv8")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 16) * 2) + 32;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 32;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis8")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 16) * 0.5) + 8;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 8;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu9")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 18)) + 18;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 18;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv9")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 18) * 2) + 36;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 36;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis9")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 18) * 0.5) + 9;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 9;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "trainerneu0")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 20)) + 20;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 20;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "traineradv0")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 20) * 2) + 40;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type advantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 40;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "trainerdis0")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 20) * 0.5) + 10;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and, with a type disadvantage, has attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your opponents final HP is **" + finalHP + "** HP left!");
        } else {

            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 10;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("Your Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever the opponent has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however your Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your opponent and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu1")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2)) + 2;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 2;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv1")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 2) + 4;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 4;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis1")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 0.5) + 1;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 1;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu2")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 4)) + 4;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 4;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv2")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 4) * 2) + 8;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 8;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis2")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 4) * 0.5) + 2;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 2;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu3")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 6)) + 6;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 6;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv3")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 6) * 2) + 12;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 12;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis3")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 0.5) + 3;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 3;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    
    if (msg.content.startsWith (PREFIX + "wildneu4")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 8)) + 8;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 8;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv4")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 8) * 2) + 16;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 16;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis4")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 2) * 0.5) + 4;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 4;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu5")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 10)) + 10;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 10;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv5")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 10) * 2) + 20;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 20;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis5")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 10) * 0.5) + 5;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 5;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------
    
    if (msg.content.startsWith (PREFIX + "wildneu6")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 12)) + 12;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 12;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv6")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 12) * 2) + 24;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 24;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis6")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 12) * 0.5) + 6;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 6;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu7")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 14)) + 14;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 14;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv7")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 14) * 2) + 28;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 28;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis7")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 14) * 0.5) + 7;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 7;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    
    if (msg.content.startsWith (PREFIX + "wildneu8")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 16)) + 16;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 16;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv8")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 16) * 2) + 32;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 32;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis8")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 16) * 0.5) + 8;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 8;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu9")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 18)) + 18;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 18;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv9")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 18) * 2) + 36;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 36;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis9")){
            var args = msg.content.split(/\s+/);
            
            var firstArgs = args[1];
            // Attack
    
            var secondArgs = args[2];
            //Defense
    
            var thirdArgs = args[3];
            //HP
    
            var attackNumber = Math.floor(Math.random() * (firstArgs - 18) * 0.5) + 9;
    
            var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            if (adjustedNumber >= 1){
                msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
            } else {
    
            var firstArgs = args[1];
                // Attack
        
            var secondArgs = args[2];
                //Defense
        
            var thirdArgs = args[3];
                //HP
    
            var adjustedNumber = 9;
    
            var finalHP = thirdArgs - adjustedNumber;
    
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    // ----------------------------------------------------------------------

    if (msg.content.startsWith (PREFIX + "wildneu0")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 20)) + 20;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 20;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wildadv0")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 20) * 2) + 40;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 40;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

    if (msg.content.startsWith (PREFIX + "wilddis0")){
        var args = msg.content.split(/\s+/);
        
        var firstArgs = args[1];
        // Attack

        var secondArgs = args[2];
        //Defense

        var thirdArgs = args[3];
        //HP

        var attackNumber = Math.floor(Math.random() * (firstArgs - 20) * 0.5) + 10;

        var adjustedNumber = Math.floor(attackNumber - (secondArgs - 0)) + 0;

        var finalHP = thirdArgs - adjustedNumber;

        if (adjustedNumber >= 1){
            msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nWith an adjusted SP Attack/Attack of **" + adjustedNumber + "** your Pokemons final HP is **" + finalHP + "** HP left!");
        } else {

        var firstArgs = args[1];
            // Attack
    
        var secondArgs = args[2];
            //Defense
    
        var thirdArgs = args[3];
            //HP

        var adjustedNumber = 10;

        var finalHP = thirdArgs - adjustedNumber;

        msg.channel.send("The Wild Pokemon has a Base SP Attack/Attack of **" + firstArgs + "** and attacked for **" + attackNumber + "** Damage this round!\nHowever your Pokemon has **" + secondArgs + "** in SP Defense/Defense, and has an HP Total of **" + thirdArgs + "**.\n \nNormally you wouldn't hit ... however the Wild Pokemon, with sheer determination, manages to at least do **" + adjustedNumber + "** damage to your Pokemon and their final HP is **" + finalHP + "** HP left!");		
    }}

// Battle Lists

    if (msg.content.startsWith (PREFIX + "wildz1stats")) {
        
        var levelList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        var randomlevel = levelList[Math.floor(Math.random() * 
        levelList.length)];

        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
};     
        msg.channel.send("The Zone 1 Wild Pokemon is **Level " + randomlevel + "**! Its stats are listed below!\n\n" +
                            "**Level 1 or 2:** HP: 5 Atk: 5 Def: 5 Sp. Atk: 5 Sp.Def: 5 Speed: 5 \n" +
                            "**Level 3 or 4:** HP: 6 Atk: 6 Def: 6 Sp. Atk: 6 Sp.Def: 6 Speed: 6 \n" +
                            "**Level 5 or 6:** HP: 7 Atk: 7 Def: 7 Sp. Atk: 7 Sp.Def: 7 Speed: 7 \n" +
                            "**Level 7 or 8:** HP: 8 Atk: 8 Def: 8 Sp. Atk: 8 Sp.Def: 8 Speed: 8 \n" +
                            "**Level 9 or 10:** HP: 9 Atk: 9 Def: 9 Sp. Atk: 9 Sp.Def: 9 Speed: 9 \n" +
                            "**Level 11 or 12:** HP: 10 Atk: 10 Def: 10 Sp. Atk: 10 Sp.Def: 10 Speed: 10 \n" +
                            "**Level 13 or 14:** HP: 11 Atk: 11 Def: 11 Sp. Atk: 11 Sp.Def: 11 Speed: 11 \n" +
                            "**Level 15 or 16:** HP: 12 Atk: 12 Def: 12 Sp. Atk: 12 Sp.Def: 12 Speed: 12 \n" +
                            "**Level 17 or 18:** HP: 13 Atk: 13 Def: 13 Sp. Atk: 13 Sp.Def: 13 Speed: 13 \n" +
                            "**Level 19 or 20:** HP: 14 Atk: 14 Def: 14 Sp. Atk: 14 Sp.Def: 14 Speed: 14 \n"
       );
    }

    if (msg.content.startsWith (PREFIX + "trainerstats")) {
        
    msg.channel.send("Here is a list of how Pokemon stats owned by a member works:\n<https://docs.google.com/document/d/1WTwjENZnYdtRzUIMg11QpC8ciepHFMOaKtTrlywW8k0/edit#heading=h.i2bcefqiz2qy>"

    );
    }
         
    if (msg.content.startsWith (PREFIX + "zone1movelist")) {
        
    msg.channel.send("Here is the master list of Zone 1 Wild Pokemon moves!\n\n" +
                    "**Normal:** Round (1), Tackle (2), Tail Whip (3), Agility (4) \n" +
                    "**Water:** Bubble (1), Tackle (2), Growl (3), Withdraw (4) \n" +
                    "**Fire:** Ember (1), Scratch (2), Smokescreen (3), Agility (4) \n" +
                    "**Grass:** Absorb (1), Pound (2), Growl (3), Calm Mind (4) \n" +
                    "**Electric:** Thundershock (1), Tackle (2), Tail Whip (3), Nasty Plot (4) \n" +
                    "**Fighting:** Round (1), Karate Chop (2), Sand Attack (3), Swords Dance (4) \n" +
                    "**Ground:** Mud Slap (1), Tackle (2), Sand Attack (3), Harden (4) \n" +
                    "**Flying:** Gust (1), Tackle (2), Growl (3), Agility (4) \n" +
                    "**Poison:** Smog (1), Scratch (2), Smokescreen (3), Nasty Plot (4) \n" +
                    "**Ice:** Powder Snow (1), Pound (2), Growl (3), Harden (4) \n" +
                    "**Bug:** Round (1), Leech Life (2), String Shot (3), Withdraw (4) \n" +
                    "**Ghost:** Round (1), Lick (2), Fake Tears (3), Nasty Plot (4) \n" +
                    "**Rock:** Round (1), Rock Throw (2), Sand Attack (3), Harden (4) \n" +
                    "**Psychic:** Confusion (1), Tackle (2), Tearful Look (3), Calm Mind (4) \n" +
                    "**Dragon:** Dragon Rage (1), Tackle (2), Growl (3), Agility (4) \n" +
                    "**Dark:** Round (1), Bite (2), Fake Tears (3), Swords Dance (4) \n" +
                    "**Steel:** Round (1), Metal Claw (2), Tail Whip (3), Harden (4) \n" +
                    "**Fairy:** Fairy Wind (1), Scratch (2), Fake Tears (3), Calm Mind (4) \n\n" +
                    "**Move Notes:** Refer to <https://docs.google.com/document/d/1WTwjENZnYdtRzUIMg11QpC8ciepHFMOaKtTrlywW8k0/edit#heading=h.kh6i3zwlxxl9> if you need to see what status move does what!"
           );
    }        

    if (msg.content.startsWith (PREFIX + "wildz1attack")) {
        
            var attackList = [
            "**Attack Move 1**! A Special Attack based move! Roll for damage using Wild Pokemon Sp. Atk, Trainer Pokemon Sp. Def and Trainer Pokemon HP!",
            "**Attack Move 2**! An Attack based move! Roll for damage using Wild Pokemon Atk, Trainer Pokemon Def and Trainer Pokemon HP!",
            "**Attack Move 3**! A Stat Lowering move! The Trainers Pokemon has a single stat lowered! Incoporate missing stats in damage rolls.",
            "**Attack Move 4**! A Stat Boosting based move! The Wild Pokemon has a single stat increased! Incoporate bonus in damage rolls."
            ]
            var randomattack = attackList[Math.floor(Math.random() * 
            attackList.length)];
    
            var rand = function(min, max) {
            return Math.random() * (max - min) + min;
    };     
            msg.channel.send("The Zone 1 Wild Pokemon uses " + randomattack
           );
    }

    if (msg.content.startsWith (PREFIX + "voidattack")) {
        
        var attackList = [
        "**Attack Move 1**! An Attack based move! Roll for damage using Wild Pokemon Attack / Special Attack, Trainer Pokemon Defense / Sp. Def and Trainer Pokemon HP!",
        "**Attack Move 2**! A Stat Lowering move! The Trainers Pokemon has a single stat lowered! Incoporate missing stats in damage rolls."
        ]
        var randomattack = attackList[Math.floor(Math.random() * 
        attackList.length)];

        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
};     
        msg.channel.send("The Void Pokemon uses " + randomattack
       );
    }

    if (msg.content.startsWith (PREFIX + "trainermoves")) {
        
        msg.channel.send("Here is the master list of Starter Pokemon moves: <https://docs.google.com/document/d/1WTwjENZnYdtRzUIMg11QpC8ciepHFMOaKtTrlywW8k0/edit#heading=h.pwouorgp647n>\n\n" +
                        "**Move Notes:** Refer to <https://docs.google.com/document/d/1WTwjENZnYdtRzUIMg11QpC8ciepHFMOaKtTrlywW8k0/edit#heading=h.kh6i3zwlxxl9> if you need to see what status move does what!"
               );
    }  

    if (msg.content.startsWith (PREFIX + "ohko")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'Your Pokemon uses its OHKO move ... and it **misses**! The Wild Pokemon is still standing!', 
            'Your Pokemon uses its OHKO move ... and it **hits**! The Wild Pokemon faints automatically!'];
        var weight = [70, 30];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

    if (msg.content.startsWith (PREFIX + "sleep")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'The Wild Pokemon is still sleeping soundly! It is deep **Asleep**!', 
            'The Wild Pokemon has woken up, and it will attack! The Pokemon is no longer **Asleep**!'];
        var weight = [60, 40];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

    if (msg.content.startsWith (PREFIX + "paralyzed")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'The Wild Pokemon is **Paralyzed** and **Cannot Move**!', 
            'The Wild Pokemon is **Paralyzed**, but **Can Move**!'];
        var weight = [25, 75];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }
    
//Exploration Master List

    if (msg.content.startsWith (PREFIX + "vtzone1")) {
        
        // ---- (STARTER POKEMON) ----
    
    
      var SmonList = ["Bulbasaur", "Squirtle", "Charmander","Chikorita","Totodile","Cyndaquil","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Oshawott","Tepig", "Chespin", "Fennekin", "Froakie", 
                     "Litten", "Rowlet", "Popplio","Grookey", "Sobble", "Scorbunny"]
      var randomSmon = SmonList[Math.floor(Math.random() * 
      SmonList.length)];
    
      var rand = function(min, max) {
          return Math.random() * (max - min) + min;
      };
    
      var SEncList = [
        "The sun is shining and the birds are chirping! Today is a wonderful day. As you walk around you hear a noise in the bush ... and out pops a **" + randomType + " " + randomSmon + "** in front of you!!\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?",
        "After getting out of the boat you look around. On the beach you admire the view, and it appears something else does too! A **" + randomType + " " + randomSmon + "** comes from the brush to enjoy the breeze! It looks at you.\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?"]
      var randomSEnc = SEncList[Math.floor(Math.random() * 
      SEncList.length)];
    
      var rand = function(min, max) {
          return Math.random() * (max - min) + min;
      };
    
      // ---- (RANDOM ITEM) ----
    
      var ItemList = ["Strange Round Stone", "Nanab Berry", "Razz Berry", "Cocoa Poffin", randomType + " Egg", randomType + " Honey", "Crater Ball", "Friendship Ball", "Grepa Berry",
                     "Hondew Berry", "Kelpsy Berry", "Bag of " + randomType + " Ore Dust", "Poke Toy", "Pinap Berry", "Pink Apricot", "Potion", "Rusty Gear", "100 Crater Coins", randomType + " Ore"]
      var randomItem = ItemList[Math.floor(Math.random() * 
      ItemList.length)];
    
      var rand = function(min, max) {
          return Math.random() * (max - min) + min;
      };
    
      var IEncList = [
        "It looks like there is something hidden in the grass. You approach it and you find a **" + randomItem + "** on your adventure today! Item has been added to your inventory.",
        "There seems to be some sort of object hidden in the rocks off to the side of the road. You head over to it and push some of the dust and pebbles aside ... you find a **" + randomItem + "** hidden in the crevice! Did someone sit here and forget it, or can't get it? Either way the item has been added to your inventory!"
        ]
      var randomIEnc = IEncList[Math.floor(Math.random() * 
      IEncList.length)];
    
      var rand = function(min, max) {
          return Math.random() * (max - min) + min;
      };
    
       // ---- (RANDOM CURRENCY) ----
    
      var getRandomCoins = function(coinList, coinWeight) {
              var total_weight = coinWeight.reduce(function (prev, cur, i, arr
              )  {
                      return prev + cur;
              });
    
              var random_num = rand(0, total_weight);
              var weight_sum = 0;
              //console.log(random_num)
    
              for (var i = 0; i < coinList.length; i++) {
                  weight_sum += coinWeight[i];
                  weight_sum = +weight_sum.toFixed(2);
    
                  if (random_num <= weight_sum) {
                      return coinList[i];
                  }
              }   
    //end of function
        };     
    
        var coinList = [
            "Clink! A small piece of metal rolls down the path after being kicked and you head over to it to look at it. Looking down in surprise, you’ve found...  a **20 Crater Coin**! Nice! Coins have been added to your inventory!", 
            "Clink! A small piece of metal rolls down the path after being kicked and you head over to it to look at it. Looking down in surprise, you’ve found...  a **80 Crater Coin**! Neat! Coins have been added to your inventory!", 
            "Clink! A small piece of metal rolls down the path after being kicked and you head over to it to look at it. Looking down in surprise, you’ve found...  a **100 Crater Coin**! WOW! Coins have been added to your inventory!", 
            "Clink! A small piece of metal rolls down the path after being kicked and you head over to it to look at it. Looking down in surprise, you’ve found...  a **200 Crater Coin**! YEAH! Coins have been added to your inventory!"
        ];
        var coinWeight = [6,1,2,1];
        var random_coin = getRandomCoins(coinList, coinWeight);
    
       // ---- (RANDOM BALL) ----
    
      var getRandomBall = function(ballList, ballWeight) {
        var total_weight = ballWeight.reduce(function (prev, cur, i, arr
        )  {
                return prev + cur;
        });
    
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
    
        for (var i = 0; i < ballList.length; i++) {
            weight_sum += ballWeight[i];
            weight_sum = +weight_sum.toFixed(2);
    
            if (random_num <= weight_sum) {
                return ballList[i];
            }
        }   
    //end of function
        };     
    
        var ballList = [
            "It seems as if you found something shiny in the grass. It has a metalic gleam to it... You discover a **Greater Ball**! You carefully pick it up before continuing your journey.",
            "It seems as if you found something hidden off to the side of the grassy path. As you approach it the object gleams ... You discover a **Crater Ball**! You carefully pick it up before continuing your journey.",
            "It seems as if you found something in the gleam of a dark cave you're in! You reach out and feel around in the darkness for the object. It's cold and metalic ... You discover an **Ultimate Ball**! You carefully pick it up before continuing your journey."];
        var ballWeight = [1,6,1];
        var random_ball = getRandomBall(ballList, ballWeight);
    
        // ---- (RANDOM EGG) ----
    
        var getRandomEgg = function(eggList, eggWeight) {
            var total_weight = eggWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < eggList.length; i++) {
                weight_sum += eggWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return eggList[i];
                }
            }   
        //end of function
            };  
            
        var getRandomEType = function(eTypeList, eTypeWeight) {
                var total_weight = eTypeWeight.reduce(function (prev, cur, i, arr
                )  {
                        return prev + cur;
                });
            
                var random_num = rand(0, total_weight);
                var weight_sum = 0;
                //console.log(random_num)
            
                for (var i = 0; i < eTypeList.length; i++) {
                    weight_sum += eTypeWeight[i];
                    weight_sum = +weight_sum.toFixed(2);
            
                    if (random_num <= weight_sum) {
                        return eTypeList[i];
                    }
                }   
            //end of function
            };  
    
            var eTypeList = [randomType, "Typeless"
            ];
            var eTypeWeight = [99,1];
            var random_eType = getRandomEType(eTypeList, eTypeWeight);    
        
            var eggList = [
                "Something odd is in the middle of the road. You quickly run over and shoo away the Murkrows that are pecking at the object, wondering what it was. You discover an abandoned **" + random_eType + "-Type Egg** in the middle of the path! How strange! Thankfully it seems unharmed, the shell too strong to be pecked through ... You pick it up to take home with you. ",
                "You are enjoying your walk, when suddenly one of your Pokemon stops. They sniff around before running off. As you turn around and try to go after your Pokemon they come back! Your Pokemon runs towards you holding an abandoned **" + random_eType + "-Type Egg**! Looks like you’ll just have to take it home!",
                "You push through the brush expecting to see some beautiful Pokemon sights ... but only chaos is there. You look around in horror as there are only whisps of Void material in the area and Nova Crystals jutting out of the ground. All of this raw energy is too dangerous to harvest ... but it appears bystanders were caught in the crossfire. In the remains of this powerful battle are **Three " + random_eType + "-Type Eggs** in a turned over nest, which you and your Pokemon quickly gather to return home with."
            ];
            var eggWeight = [2,1,1];
            var random_egg = getRandomEgg(eggList, eggWeight);
    
        // ---- (RANDOM ORE DUST BAGS) ----
    
        var getRandomDust = function(dustList, dustWeight) {
            var total_weight = dustWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < dustList.length; i++) {
                weight_sum += dustWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return dustList[i];
                }
            }   
        //end of function
            };     
        
            var dustList = [
            "You come across an odd cave. Strange ... was this always here? You carefully enter the cave with your Pokemon and discover a spire of " + randomType + " material in the middle of the cave. With the help of your Pokemon you manage to get the spire open and discover enough dust for **Four " + randomType + " Ore Dust Bags**! With the spires destruction, though, the cave begins to collapse! You grab your Pokemon and go, the cave collpasing behind you, unable to be entered again.",
            "You come across a strange looking rock on the side of the hill you are hiking around. It seems to shimmer ... was something inside? With the help of your Pokemon you destroy the rock to discover it had some ore inside! Only ... because you hit it so hard ... it became dust. Ah well ... at least you were able to get some **" + randomType + " Ore Dust** from the rock! You get a dust collection bag, scoop it up, and add it to your inventory before you head on your way."
            ];
            var dustWeight = [1,3];
            var random_dust = getRandomDust(dustList, dustWeight);
    
        // ---- (RANDOM HURT ADVENTURING ROLLS) ----
    
        var getRandomHurt = function(hurtList, hurtWeight) {
            var total_weight = hurtWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < hurtList.length; i++) {
                weight_sum += hurtWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return hurtList[i];
                }
            }   
        //end of function
            };     
        
            var hurtList = [
            "The path is long and rough, and nothing has really happened yet. One wrong step causes you to put your ankle down the wrong way, ouch! You end up getting hurt on your journey and need a moment to rest. Maybe you can quickly recover ...? **(-1 Venture, or use 1 Potion to preserve it.)**",
            "As you make your way through the forest with your Pokemon you hear a noise. You turn and your eyes widen. A very large Void Nidoking comes charging at you ... you're in its territory! You run away with your Pokemon and end up going through some thorny plants to escape the Pokemon, who loses you on the otherside. Ouch ... you need a moment to recover with your Pokemon and pull the thorns out. Wait ... your backpack is torn too... ?! (-2 inventory slots from MISC, to be permanent until repaired at General Store for 200 Crater Coins a slot). **(-1 Venture, or use 1 Potion to preserve it.)**",
            "You are busy playing with your Pokemon in one of the large fields on a sunny day. Everyone is having a good time and you toss your Pokemon the ball you are playing with. It seems to go in the shallow brush nearby so your Pokemon goes after it, but doesn't come back out. Concerned you go over to investigate ... only to discover your Pokemon is caught in a Pokemon Trap! Oh no!! Who put that there, and why!? You and your other Pokemon manage to get the trap off of your friend and rush to the Pokemon Center energency care that is in Zone 1 ... thank goodness they put one here! **(-1 Venture, or use 1 Potion to preserve it.)**"
            ];
            var hurtWeight = [5,1,2];
            var random_hurt = getRandomHurt(hurtList, hurtWeight);
    
    
        // ---- (RANDOM BONUS ADVENTURING ROLLS) ----
    
        var getRandomBonus = function(bonusList, bonusWeight) {
            var total_weight = bonusWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < bonusList.length; i++) {
                weight_sum += bonusWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return bonusList[i];
                }
            }   
        //end of function
            };     
        
            var bonusList = [
            "Sleeping on the right side of the bed today has made you feel brand new. Breakfast was delicious, the sun is shining, the trip was pleasant ... you feel fresh as a daisy and are energized more than usual! Time to go the extra mile today! **(+1 Venture, Nothing Found)**",
            "You come across a Crater City designated picnic area and see no one is here at the moment. One of the tables seems to have stuff on it, though. It seems as if you and your Pokemon discovered unopened water bottles for you to use. Did someone forget to pack them and bring them home? Either way you can now you can travel even more! **(+3 Water Bottles. Would you like to use one or some now, or save them?)**"
            ];
            var bonusWeight = [8,1];
            var random_bonus = getRandomBonus(bonusList, bonusWeight);
    
    
        // ---- (RANDOM NOTHING ROLLS) ----
    
        var getRandomNothing = function(noList, noWeight) {
            var total_weight = noWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < noList.length; i++) {
                weight_sum += noWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return noList[i];
                }
            }   
        //end of function
            };     
        
            var noList = [
            "You and your Pokemon get a little hungry as you venture today. Deciding that it is best to not travel on an empty stomach you sit down and pull out some snacks from your pack. Staying full and hydrated is important, especially if venturing in a place like this! **(Nothing Found)**",
            "You arrive at the top of a hill and notice that there are some clouds in the sky. Some of them look like shapes too ... so you decide you and your Pokemon could stay a while and pick out some shapes in the clouds! You put your stuff aside and lay in the soft grass, picking out random shapes in the sky. That one looks like a " + randomPokemon + "! **(Nothing Found)**"
            ];
            var noWeight = [1,1];
            var random_noth = getRandomNothing(noList, noWeight);
    
        // ---- (STATIC ROLLS) ----
    
        var honey = "A sweet smell catches your entire party off guard. Your Pokemon seem to follow it before you can even tell what it is. As you run after your Pokemon it seems as if you found some honey nearby in a moderately sized nest. It seems like no one is home, as there is no buzzing or movement. Maybe they're out collecting pollen? The Pokemon wouldn't mind a little being taken, right? You take a jar out of your bag and scoop some up. You have gained some **Typeless Honey**! You put it away and quickly head off before the nest owners come back.";
    
        var perimeter = "You’re nearing the edge of Zone 1! A Rotom Drone is circling up above ...\n\n**DriveThru:** Not having the time to try and sneak out today, you turn back. **(Venture is Re-Rolled for Free)**\n**RP:** It seems as if there is an interval where the Rotom has a blind spot. Do you dare try to pass the Drone to Zone 2, or go back? There are powerful Pokemon, so you must at least have six Pokemon that are level 20+ to sneak in! However if you get caught your Pokemon Venture Pass will be revoked for two weeks!";
    
        var chpoff = "As you pass the Zone 1 Pokemon Center a little girl and her brother seem to be selling some things to help trainers to earn some coin! You walk over to see what wares they have, but don't see anything out of the ordinary you could need. Being polite and saying that you're sorry, and that you'll help tell others that they're here though, the little girl is kind enough to give you a free sample of a **Cocoa Poffin** in a sealed box! How sweet. You add it to your bag and head on your way!";
    
        var ption = "You visit the Zone 1 Pokemon Center to check in on your Pokemon. Thankfully everyone is safe, but what if you're out there and they're not? You can't help but worry.\n\"Keep your Pokemon safe!\" A Mart attendant says as they hand you a free **Potion** sample. Did ... they just read your mind? Either way you thank them and head out of the Center, back into Zone 1.";
        
        var ranore = "There seems to be a large pile of boulders in front of you. You turn to go a different way, seeing the rockslide destruction around you, but you notice something shimmering in the pile. You head over with your Pokemon and move some of the rocks around, except one looks different. That's a strange color rock ... oh! It's a piece of **" + randomType + " Ore**! No wonder it looked different! You add it to your bag before turning around and heading a different way."; 
    
        var moreitem = "Something seems to be hanging on a branch nearby, but it doesn't look like an ordinary item or Pokemon. Wondering what in the world it is you approach the tree with your Pokemon and look at the branch. It looks like it's a ... **Intact Backpack**? How did this get here, and who put it here? You look around for signs of a struggle, or anything really, but there seem to be no signs of a battle. You check the bag and it's empty ... not even an ID card to return this to. It would be a shame to leave it though ... \n\n **Options:** Your travel inventory can be expanded by an additonal five slots. (Once a Month!) -OR- can keep it and sell it for 1000 Crater Coins. You may only have one Intact Backpack to sell in your inventory, if you do not wish to expand it! (If not enough room this results in Nothing!)"; 
    
        var lesscoin = "You are heading down the path with your Pokemon, happy as can be. With all of your items in tow you decide to take a moment to sit down and reoragnize your belongings, count your Crater Coins. As you count your coins though you seem to be watched ... but where? You look up into the trees to see ... them. The Murkrows, staring down at your shiny bits of metal. As you slowly try to put your wallet away they descend, the murder around you and your Pokemon! You manage to fight them all off and they end up taking a few coins with them. As a result ... you **Lost 20 Crater Coins** from the Krows. Dang it ... maybe you can find it in the future.";

        // ---- (RANDOM SCENARIO ENCOUNTERS) ----
        
        var RPmonList = ["Caterpie", "Metapod", "Weedle", "Kakuna", "Pidgey", "Rattata", "Alolan Rattata", "Raticate", "Alolan Raticate", 
        "Spearow", "Fearow", "Ekans", "Pichu", "Pikachu", "Nidoran F", "Nidoran M", "Eevee", "Oddish", "Gloom", "Paras", "Venonant", "Diglett", "Alolan Diglett",
        "Meowth", "Alolan Meowth", "Galarian Meowth", "Poliwag", "Goldeen", "Eevee", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", 
        "Zubat", "Golbat", "Chinchou", "Lanturn", "Sunkern", "Sunflora", "Hoppip", "Skiploom", "Wooper", "Pineco", "Dunsparce", "Cleffa", "Igglybuff", "Togepi", "Magby", "Elekid", 
        "Poochyena", "Zigzagoon", "Linoone", "Galarian Zigzagoon", "Galarian Linoone", "Wurmple", "Silcoon", "Cascoon", "Lotad", "Lombre", "Seedot", "Nuzleaf", "Taillow", "Swellow",
        "Wingull", "Surskit", "Shroomish", "Slakoth", "Nincada", "Whismur", "Loudred", "Skitty", "Delcatty", "Roselia", "Gulpin", "Luvdisc", "Starly", "Bidoof", "Bibarel", "Kricketot",
        "Kricketune", "Budew", "Burmy (Grass)", "Burmy (Ground)", "Burmy (Trash)", "Wormadam (Grass)", "Wormadam (Trash)", "Mothim", "Combee", "Vespiquen", "Pachirishu", "Buizel", "Cherubi",
        "Shellos", "Buneary", "Finneon", "Rotom", "Patrat", "Watchog", "Lilipup", "Herdier", "Purrloin", "Pansage", "Pansear", "Panpour", "Pidove", "Blitzle", "Roggenrola", "Woobat", "Drilbur",
        "Tympole", "Basculin (Red)", "Basculin (Blue)", "Foongus", "Shelmet", "Karrablast", "Bunnelby", "Diggersby", "Fletchling", "Scatterbug", "Spewpa", "Litleo", "Flabebe", "Floette", "Skiddo", 
        "Pancham", "Furfrou", "Espurr", "Honedge", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malmar", "Binacle", "Skrelp", "Clauncher",
        "Helioptile", "Pikipek", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Crabrawler", "Crabominable", "Oricorio (Baile)", "Oricorio (Pom-Pom)", "Oricorio (Pa'u)", "Oricorio (Sensu)", "Cutiefly", "Rockruff", "Wishwashi", "Mareanie",
        "Mudbray", "Dewpider", "Fomantis", "Morelull", "Salandit", "Stufful", "Bounsweet", "Steenee", "Togedemaru", "Skwovet", "Greedent", "Rookidee", "Blipbug", "Dottler", "Nickit", "Gossifleur", "Wooloo", "Chewtle", "Yamper", "Arrokuda" 
        ];
        var randomRPmon = RPmonList[Math.floor(Math.random() * 
        RPmonList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
        
        var getRandomMini = function(miniList, miniWeight) {
            var total_weight = miniWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < miniList.length; i++) {
                weight_sum += miniWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return miniList[i];
                }
            }   
        //end of function
            };     
        
            var miniList = [
            "As you walk down the path with your Pokemon it seems as if **Nothing** happens out of the ordinary. At least it's a nice day!",
            "You see something strange sticking out of the ground up ahead, off the path a little. You head over with your Pokemon and try to pull it out of the ground. As you and your Pokemon pull it out it seems to be some sort of **Rusty Gear**! You inspect it ... it's so old and worn it won't power any machine at this rate. You add it to your backpack for future use.",
            "As you walk down the path with your Pokemon nothing seems to happen, but out of the corner of your eye you find a **" + randomItem + "**! You add it to your backpack and continue on your way.",
            "You feel something watching you ... but when you look around there is nothing there? You can't help but feel like something is going on so you and your Pokemon stay for a moment ... and then you notice it. It seems there are some **Pokemon Tracks** leading further off into the brush, where it's dark and unknown. A shiver goes down your spine ... dare you follow these tracks?\n\n **Note:** If you follow these tracks you will gain no more venture rolls for today. You can only do this roll in RP or Custom RP, so it will be re-rolled if it's Drive Thru!",
            "As you walk with your Pokemon it seems like everything is going well. You look down and notice you have one more Pokemon than usual. Odd ... wait ... it seems as if you're not alone on this journey! A **" + randomType + " " + randomSmon + "** had decided to join you and your Pokemon along the way! Sneaky little thing.\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?",
            "You come across several shattered boulders and ruined grass. Did a battle happen here? Out of one of the rocks it seems like some **" + randomType + " Ore Dust** is leaking out of the cracks. You take up an empty dust pouch from your bag and scoop it up, add it to the others you own and go on your way",
            "As you and your Pokemon are travelling you come across an abandoned nest. Huh ... where are the parents? It seems like there are egg-shells here, meaning other eggs may have hatched. Was this egg here a late bloomer, and abandoned? How sad ... After looking at it a little more it seems to be a **" + randomType + " Pokemon Egg**! You decide to take it with you and be its new family since the others left it!",
            "There seems to be a small shiny thing in the path that Murkrow are playing with. Your Pokemon rushes over to mess with them, and thankfully, they merely fly away without a fuss. As you tell your Pokemon they could have been hurt you discover the shiny object is actually a **50 Crater Coin** to add to your wallet! You pick it up and pet your Pokemon on the head. They lean into your touch before walking with you down the path again.",
            "You and your Pokemon see a small pile of rocks that are in the shape of an odd structure. Aw, did a Pokemon make that? Upon looking closer though you notice something strange on the top. Not wanting to ruing the enture sculpture you carefully take the top off and discover it's a **Strange Round Stone**! You carefully put the stone in your bag, replace the stone with a different rock nearby, and head off on the path with your Pokemon again.",
            "Seems like something missed the trash can off to the side of the path. As you go to pick it up you notice it's an unused **Potion**. Did someone accidentally toss out an unused one, and keep an empty one? Boy that would suck if it were you, but now that you have it it's all yours now! You add it to your bag and continue on your way.",
            "As you cress over the top of a hill you notice a Pokemon in the middle of the path. It seems distracted, so you try and get a better look at it. It appears to be a **" + randomType + " " + randomRPmon + "** up ahead, eating a berry. While it's distracted you have the element of surprise.\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?",
            "Something doesn't seem right. There's very little Pokemon in the area and you don't hear anything. Were Pokemon avoiding this area on purpose? You and your Pokemon look around, until finally one of them smells a worryign scent. They run off, causing everyone to follow. They lead you to the source ... a wounded **" + randomType + " " + randomRPmon + "** off the beaten path. It seems like they were trapped in a Pokemon Trap but broke free, and now are hurt where the trap hit them. Your Pokemon look at your worriedly.\n\nWill you **Heal** it yourself (100% capture rate, -1 Potion), **Aid** it with an item to rush to the Center (80% capture rate, -1 Berry or -1 Honey Used), **Attempt to Capture** it and bring it to a Center (No Potion) or **Flee**? to get professional help?",
            "You and your Pokemon decide to take a moment and sit down to enjoy a break! As you are busy enjoying a snack off to the side of the road when you can't help but feel that you are being watched. You turn your head to notice there is a curious looking **" + randomType + " " + randomRPmon + "** watching you and your Pokemon snack! It seems hungry, so it might be a little unpredictable.\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?"
            ];
            var miniWeight = [1,1,7,1,1,2,1,1,1,1,5,1,3];
            var random_mini = getRandomMini(miniList, miniWeight);
        
        var getRandomEncounter = function(encList, encWeight) {
            var total_weight = encWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < encList.length; i++) {
                weight_sum += encWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return encList[i];
                }
            }   
        //end of function
            };     
        
            var encList = [
            "You and your Pokemon enjoy a walk through the wild gardens for a little while, cheered by the sights. It seems like the local Pokemon are rebuilding the gardens, even though the impact happened a long time ago. You wonder how many other barren areas are out there ... waiting to be brought back to life.\n\n" + random_mini,
            "You and your Pokemon enjoy a walk down the zone path, smiling with the soft wind on your faces. Some of the local flying type Pokemon seem to be singing the songs of their people, and well, they actually sound pretty good. You stay for a moment to enjoy the song before looking down at your Pokemon. They seem to enjoy it too, but it's time to continue.\n\n" + random_mini
            ];
            var encWeight = [1,1];
            var random_enc = getRandomEncounter(encList, encWeight);
    
        // --- (RANDOM POKEMON ENCOUNTERS) ----
        
        var RPmonList = ["Caterpie", "Metapod", "Weedle", "Kakuna", "Pidgey", "Rattata", "Alolan Rattata", "Raticate", "Alolan Raticate", 
        "Spearow", "Fearow", "Ekans", "Pichu", "Pikachu", "Nidoran F", "Nidoran M", "Eevee", "Oddish", "Gloom", "Paras", "Venonant", "Diglett", "Alolan Diglett",
        "Meowth", "Alolan Meowth", "Galarian Meowth", "Poliwag", "Goldeen", "Eevee", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", 
        "Zubat", "Golbat", "Chinchou", "Lanturn", "Sunkern", "Sunflora", "Hoppip", "Skiploom", "Wooper", "Pineco", "Dunsparce", "Cleffa", "Igglybuff", "Togepi", "Magby", "Elekid", 
        "Poochyena", "Zigzagoon", "Linoone", "Galarian Zigzagoon", "Galarian Linoone", "Wurmple", "Silcoon", "Cascoon", "Lotad", "Lombre", "Seedot", "Nuzleaf", "Taillow", "Swellow",
        "Wingull", "Surskit", "Shroomish", "Slakoth", "Nincada", "Whismur", "Loudred", "Skitty", "Delcatty", "Roselia", "Gulpin", "Luvdisc", "Starly", "Bidoof", "Bibarel", "Kricketot",
        "Kricketune", "Budew", "Burmy (Grass)", "Burmy (Ground)", "Burmy (Trash)", "Wormadam (Grass)", "Wormadam (Trash)", "Mothim", "Combee", "Vespiquen", "Pachirishu", "Buizel", "Cherubi",
        "Shellos", "Buneary", "Finneon", "Rotom", "Patrat", "Watchog", "Lilipup", "Herdier", "Purrloin", "Pansage", "Pansear", "Panpour", "Pidove", "Blitzle", "Roggenrola", "Woobat", "Drilbur",
        "Tympole", "Basculin (Red)", "Basculin (Blue)", "Foongus", "Shelmet", "Karrablast", "Bunnelby", "Diggersby", "Fletchling", "Scatterbug", "Spewpa", "Litleo", "Flabebe", "Floette", "Skiddo", 
        "Pancham", "Furfrou", "Espurr", "Honedge", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malmar", "Binacle", "Skrelp", "Clauncher",
        "Helioptile", "Pikipek", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Crabrawler", "Crabominable", "Oricorio (Baile)", "Oricorio (Pom-Pom)", "Oricorio (Pa'u)", "Oricorio (Sensu)", "Cutiefly", "Rockruff", "Wishwashi", "Mareanie",
        "Mudbray", "Dewpider", "Fomantis", "Morelull", "Salandit", "Stufful", "Bounsweet", "Steenee", "Togedemaru", "Skwovet", "Greedent", "Rookidee", "Blipbug", "Dottler", "Nickit", "Gossifleur", "Wooloo", "Chewtle", "Yamper", "Arrokuda"  
        ];
        var randomRPmon = RPmonList[Math.floor(Math.random() * 
        RPmonList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
    
        var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
        var random1Type = TypeList[Math.floor(Math.random() * 
        TypeList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
    
        var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
        var random2Type = TypeList[Math.floor(Math.random() * 
        TypeList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
    
        var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
        var random3Type = TypeList[Math.floor(Math.random() * 
        TypeList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
    
        var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
        var random4Type = TypeList[Math.floor(Math.random() * 
        TypeList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
    
        var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
        var random5Type = TypeList[Math.floor(Math.random() * 
        TypeList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
        
    
        var getRandomBattle = function(bttList, bttWeight) {
            var total_weight = bttWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < bttList.length; i++) {
                weight_sum += bttWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return bttList[i];
                }
            }   
        //end of function
            };     
        
            var bttList = [
            "You come across a strange clearing. What turn did you make to get here, you wonder? You look from beyond the brush to see what's in it, to make sure it's safe for you and your Pokemon. Further in the clearing you see a pride of **" + random1Type + " Pyroars** caring for their young, some juvenile **" + random2Type + " Luxios** play-fighting, some **" + random3Type + " Skittys** and some **" + random4Type + " Glameows** playing a game of chase the Skitty-Tail and a lonely **" + random5Type + " Purrloin** sulking in the shade of a tree. Do you **Investigate A Pokemon?** or **Flee**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)",
            "You come across a strange wooded patch. What turn did you make to get here, you wonder? You look from beyond the brush to see what's in it, to make sure it's safe for you and your Pokemon. Further in the wooden patch of trees and fallen logs you see a swarm of **" + random1Type + " Yanma** flitting about the place, while a few **" + random2Type + " Larvesta** seem to be soaking up the sun through some of the leaves. It seems two **" + random3Type + " Skorupi's** are busy arguing over a berry, and it seems that a(n) **" + random4Type + " Heracross** and a(n) **" + random5Type + " Pinsir** are locked in an intense battle that doesn't last for much longer, the two large bugs parting. Do you **Investigate A Pokemon?** or **Flee**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)",
            "You come across a Petting Zoo outside of one of the many Zones' Pokemon Centers. It seems there are many children and parents going into the Petting Zoo to enjoy some Pokemon in a safer manner than dangerous exploring. Wondering what is in there yourself you manage to see a variety of Pokemon there. In one pen there seems to be some **" + random1Type + " Tauros** and some **" + random2Type + " Miltank** enjoying the attention, along with some **" + random3Type + " Mareep** enjoying the zoo food. A herd of **" + random4Type + " Ponyta** and some **" + random5Type + " Galarian Ponyta** gallop around, causing the children nearby to giggle with glee at how fast they ran. Do you **Investigate A Pokemon?** or **Leave**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)",
            "You come across a seemingly abandoned building in the middle of the Zone. What is this doing here, and who lived here? You hear some noises inside the building, and with something in your gut telling you to go, you and your Pokemon head towards the building. The place is an absolute mess, littered with ruined newspapers and bags of garbage ... is that a gun rack in the corner? Geez ... who lives here? A bark catches your attention and you head into the other room, appalled by the sight. A cage filled with some **" + random1Type + " Growlithes** and a few **" + random2Type + " Snubbuls** are kept tightly together, along with some **" + random3Type + " Electrikes** in another cage. A lone, scarred **" + random4Type + " Houndoom** seems to be chained in the corner and, to your surprise, one of the Growlithes in the cage becomes a(n) **" + random4Type + " Zorua**! Do you **Rescue A Pokemon?** or **Flee before the Owner comes back**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)",
            "You come across a strange cave in the side of a small hill. What made this, you wonder? You look down from the entrance to see if it is safe enough for you and your Pokemon before slowly descending. The cave, opposite to your initial thought, seems to be brighter than you imagine with small holes leading up to the surface. As you reach the main cave pocket you notice some **" + random1Type + " Dreepy's** racing each other near the ceiling, meanwhile some **" + random2Type + " Jangmo-o's** butt heads to train. Nearby there is a(n) **" + random3Type + " Aron** munching on some type ore, whereas a(n) **" + random4Type + " Seviper** is sharpening its tail on a rock and a(n) **" + random5Type + " Druddigon** napping in the back. Do you **Investigate A Pokemon?** or **Flee**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)",
            "You come across a strange looking tree. What made it grow like this, you wonder? You look from where you are to make sure it's safe for you and your Pokemon to go before approaching the large tree in question. As you look around you seem to notice a flock of **" + random1Type + " Doduo** running around the base of the tree, chasing after a leaf. Some **" + random2Type + " Natu's** seem to rest in birdnests made in the body of the tree, whereas some **" + random3Type + " Murkrows** seem to be fighting over a shiny pebble. Up in the far branches, however, you see (and hear) the bickering between a(n) **" + random4Type + " Braviary** and a(n) **" + random5Type + " Mandibuzz** before they turn around and ignore each other. Do you **Investigate A Pokemon?** or **Flee**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)",
            "You come across a strange bog. What turn did you make to get here, you wonder? Looking around the area you double check if the coast is clear before approaching the bog with your Pokemon, wanting to keep them safe. The bog ... smells, but it's natural smell at least and not industrial waste smell. Who would even live here? A(n) **" + random1Type + " Tympole** that jumps out of the water answers your question, as well as a surprised **" + random2Type + " Croagunk** that stepped on a **" + random3Type + " Stunfisk**. To your own surprise a(n) **" + random4Type + " Bruxish** leaps out of the water, avoiding being caught by a large **" + random4Type + " Crawdaunt** that breaks the surface and snaps its claws at it. Do you **Investigate A Pokemon?** or **Flee**?\n\n(By investigating a Pokemon you have a 50/50 chance of befriending it without a ball! Use r!coin, Heads = Goes With, Tails = Stays Behind. If the first Pokemon fails you may pick a second, however if it fails, they all leave. If you use a Regular Honey, Berry or Cocoa Poffin you have an 80% chance to befriend the Pokemon and if you use a honey corresponding to its type it is a 100% befriend rate!)"
            ];
            var bttWeight = [1,1,1,1,1,1,1];
            var random_battle = getRandomBattle(bttList, bttWeight);
    
        // ---- (FINAL MESSAGE/ROLL RESULT) ----
    
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
        
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
        
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
        
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
        //end of function
        }   ;     
        
        var resultList = [randomSEnc, randomIEnc, random_coin, lesscoin, random_ball, random_egg, random_dust, 
            random_hurt, random_bonus, random_noth, honey, perimeter, chpoff, ption, ranore, moreitem, random_enc, random_battle];
        var resultWeight = [.5,5,10,3.5,10,5,8,2,2,15,6,2,3,5,8,1,8,5];
        var random_result = getRandomResult(resultList, resultWeight);
    
       msg.channel.send(random_result);
    }

    if (msg.content.startsWith (PREFIX + "honeyzone1")) {
      
        var getRandomMon = function(honeyList, honeyWeight) {
            var total_weight = honeyWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
      
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
      
            for (var i = 0; i < honeyList.length; i++) {
                weight_sum += honeyWeight[i];
                weight_sum = +weight_sum.toFixed(2);
      
                if (random_num <= weight_sum) {
                    return honeyList[i];
                }
            }   
      //end of function
        };     

        var RPmonList = ["Caterpie", "Metapod", "Weedle", "Kakuna", "Pidgey", "Rattata", "Alolan Rattata", "Raticate", "Alolan Raticate", 
        "Spearow", "Fearow", "Ekans", "Pichu", "Pikachu", "Nidoran F", "Nidoran M", "Eevee", "Oddish", "Gloom", "Paras", "Venonant", "Diglett", "Alolan Diglett",
        "Meowth", "Alolan Meowth", "Galarian Meowth", "Poliwag", "Goldeen", "Eevee", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", 
        "Zubat", "Golbat", "Chinchou", "Lanturn", "Sunkern", "Sunflora", "Hoppip", "Skiploom", "Wooper", "Pineco", "Dunsparce", "Cleffa", "Igglybuff", "Togepi", "Magby", "Elekid", 
        "Poochyena", "Zigzagoon", "Linoone", "Galarian Zigzagoon", "Galarian Linoone", "Wurmple", "Silcoon", "Cascoon", "Lotad", "Lombre", "Seedot", "Nuzleaf", "Taillow", "Swellow",
        "Wingull", "Surskit", "Shroomish", "Slakoth", "Nincada", "Whismur", "Loudred", "Skitty", "Delcatty", "Roselia", "Gulpin", "Luvdisc", "Starly", "Bidoof", "Bibarel", "Kricketot",
        "Kricketune", "Budew", "Burmy (Grass)", "Burmy (Ground)", "Burmy (Trash)", "Wormadam (Grass)", "Wormadam (Trash)", "Mothim", "Combee", "Vespiquen", "Pachirishu", "Buizel", "Cherubi",
        "Shellos", "Buneary", "Finneon", "Rotom", "Patrat", "Watchog", "Lilipup", "Herdier", "Purrloin", "Pansage", "Pansear", "Panpour", "Pidove", "Blitzle", "Roggenrola", "Woobat", "Drilbur",
        "Tympole", "Basculin (Red)", "Basculin (Blue)", "Foongus", "Shelmet", "Karrablast", "Bunnelby", "Diggersby", "Fletchling", "Scatterbug", "Spewpa", "Litleo", "Flabebe", "Floette", "Skiddo", 
        "Pancham", "Furfrou", "Espurr", "Honedge", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malmar", "Binacle", "Skrelp", "Clauncher",
        "Helioptile", "Pikipek", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Crabrawler", "Crabominable", "Oricorio (Baile)", "Oricorio (Pom-Pom)", "Oricorio (Pa'u)", "Oricorio (Sensu)", "Cutiefly", "Rockruff", "Wishwashi", "Mareanie",
        "Mudbray", "Dewpider", "Fomantis", "Morelull", "Salandit", "Stufful", "Bounsweet", "Steenee", "Togedemaru", "Skwovet", "Greedent", "Rookidee", "Blipbug", "Dottler", "Nickit", "Gossifleur", "Wooloo", "Chewtle", "Yamper", "Arrokuda"  
        ];
        var randomRPmon = RPmonList[Math.floor(Math.random() * 
        RPmonList.length)];
    
        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };

        var SmonList = ["Bulbasaur", "Squirtle", "Charmander","Chikorita","Totodile","Cyndaquil","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Oshawott","Tepig",
        "Litten", "Rowlet", "Popplio","Grookey", "Sobble", "Scorbunny"]
        var randomSmon = SmonList[Math.floor(Math.random() * 
        SmonList.length)];

        var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };
      
        var honeyList = ["It seems as if your honey was a hit, as your typed-honey attracted a smiliar typed **" + randomRPmon + "** to the area!\n**Note:** If Typless Honey was used, roll r!type for type.\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?",
        "It seems as if your honey was a hit, as your typed-honey attracted a smiliar typed **" + randomSmon + "** to the area!\n**Note:** If Typless Honey was used, roll r!type for type.\n\nWill you **Attempt to Capture** it, **Battle** it (RP Only), **Befriend** it (-1 Honey, -1 Berry or -1 Cocoa Poffin) or **Flee**?"];
        var honeyWeight = [90,10];
        var random_honey = getRandomMon(honeyList, honeyWeight);
         
         msg.channel.send(random_honey);
    }

    if (msg.content.startsWith (PREFIX + "tracks")) {
      
        msg.channel.send(
        "Against your, and probably any sane person's, better judgment, you continue to follow the Pokemon tracks deeper into the Ancient Forest. It only grows quieter as you continue, the grass thickening underfoot. All at once you realize, this isn't grass at all - it's moss! Giant moss. Blossoms that would normally be the size of a pin's head are as big as your fist, blossoming in bursts among the dark green fronds in shades of soft grey-blue.\n\n" +
        "All at once, the air seems to crackle with power, and you find yourself frozen with the terror of a small animal confronted by a predator. Your Pokemon at your side presses against your leg for comfort, clutching you desperately. Some unseen force turns your head, drawing your gaze to a clearing a short distance away. The grass there glows white and yellow in the sunlight, and a wind blows through it, but makes no sound.\n\n" +
        "Hair stands up on end all over your body as the anticipation builds, when suddenly ... it appears.\n\n" +
        "A(n) **" + randomType + " " + randomLegendary + "** appears before you. It, being a legendary, has hyper-defined features that course through its very being, holding power you have never seen before.\n\nBeing unable to escape, **Which Pokemon do you Bring Out** to try and make a stand against this Legendary Pokemon?");
    }

    if (msg.content.startsWith (PREFIX + "blessing")) {
      
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
        "The Legendary Pokemon eyes over the Pokemon you had sent out, who seems to be quite nervous under the amount of Legendary Pressure they are facing. They are silent, giving what appears to be a soft yet sincere glare of a gaze. Were ... they judging your Pokemon? They look to you, giving you the same gaze. Were they judging you now, too? They close their eyes and seem to be deep in thought. Should ... you run away now, while it's busy thinking? A voice, both masculine and feminine at the same time, speaks to you and your Pokemon.\n\n*You are not ready yet. But do not fear, for there will be a time that you will be.*\n\nWhat ... did they mean by that? In a flash of blinding light you cover your eyes, their Pokemon theirs, and when the light is gone so is the Legendary Pokemon. Was this all an illusion, a dream, a prank? Confused on what had just happened you manage to regain your senses enough to head back home ... and maybe get some sleep.",
        "The Legendary Pokemon eyes over the Pokemon you had sent out, who is standing tall and proud despite the Legendary Pressure they are facing at the moment. They are silent, giving what appears to be a soft yet sincere glare of a gaze. Were ... they judging your Pokemon? They look to you, giving you the same gaze. Were they judging you now, too? They close their eyes and seem to be deep in thought. Should ... you run away now, while it's busy thinking? A voice, both masculine and feminine at the same time, speaks to you and your Pokemon.\n\n*You have raised your Pokemon well. I pray that they will continue to grow with this blessing.*\n\nWhat ... did they mean by that? A soft gentle light appears from their chest and floats over towards the Pokemon you sent out. It envelops them in a gentle hug of warm light before vanishing moments later. As you go to ask the Legendary Pokemon what that was for they are gone. Was ... this their blessing? Your Pokemon looks to you and feels a little more powerful, though! You call out a thank you, but there is no response back. Heading home for the day you can't wait to tell the others what had just happened.\n\n**Type Immunity:** Your Pokemon has gained type immunity similar to the Legendary Pokemons' type, and will take 0 Damage from those typed moves! They are also immune to those types status effects' (Ex// Electric Blessing = No Paralysis) during battle!" + 
        "\n\n**Optional Art Prompt:** Draw your Pokemon receiving its blessing from the legendary Pokemon! Minimum requirements are Colored Full Bodies for both the Pokemon and the Legendary Pokemon with a Simple Background. Submit it to the Expedition Art Folder to recieve a bonus of 1000 Crater Coins on top of the Crater Coins you would earn from the piece!"
        ];
        var weight = [50,50];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

//Fishing Mini-Game

if (msg.content.startsWith (PREFIX + "fishrod")) {
  
    var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
    var randomType = TypeList[Math.floor(Math.random() * 
    TypeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };
    
    var SizeList = ["Skinny (+5 CC Bonus)", "Lean (+10 CC Bonus)", "Average (+20 CC Bonus)", "Fat (+25 CC Bonus)", "King-Sized (+50 CC Bonus)"]
    var randomSize = SizeList[Math.floor(Math.random() * 
    SizeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish1List = ["**Nothing.** Oh well ... Don't take your eye off the hook next time!", "**a Boot**. Oh well - for your efforts to keep the waters clean you gain **25 Crater Coins** for your help!", "a(n) **" + randomSize + " " + randomType + " Magikarp (50 Crater Coins)**.\n\nWill you **Trade it in for Crater Coins** or **Keep it?**"]
    var randomfish1 = Fish1List[Math.floor(Math.random() * 
    Fish1List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish2List = ["Goldeen","Qwilfish","Remoraid","Mantyke"]
    var randomfish2 = Fish2List[Math.floor(Math.random() * 
    Fish2List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish3List = ["Carvanha","Luvdisc","Finneon"]
    var randomfish3 = Fish3List[Math.floor(Math.random() * 
    Fish3List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish4List = ["Feebas","Relicanth","Alomomola","Wishiwashi","Bruxish","Arrokuda","Basculin (Red)","Basculin (Blue)"]
    var randomfish4 = Fish4List[Math.floor(Math.random() * 
    Fish4List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var getRandomItem = function(list, weight) {
        var total_weight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });
         
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
         
        for (var i = 0; i < list.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return list[i];
            }
        }
         
        // end of function
    };   

    var list = [
    "You cast your line and sit down on your chair. It's a peaceful day and you can't help but enjoy the breeze. As you begin to doze off a snag catches your attention! Quickly you pull up your line, wondering what may be at the end. Upon closer inspection it looks like ... " + randomfish1,
    "You cast your line and sit down on your chair. It's a peaceful day and you can't help but enjoy the breeze. As you begin to doze off a snag catches your attention! Quickly you pull up your line, wondering what may be at the end. Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish2 + "**!\n\nIt looks like this Pokemon is at least worth **100 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**",
    "You cast your line and sit down on your chair. It's a peaceful day and you can't help but enjoy the breeze. As you begin to doze off a snag catches your attention! Quickly you pull up your line, wondering what may be at the end. Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish3 + "**!\n\nIt looks like this Pokemon is at least worth **250 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**",
    "You cast your line and sit down on your chair. It's a peaceful day and you can't help but enjoy the breeze. As you begin to doze off a snag catches your attention! Quickly you pull up your line, wondering what may be at the end. Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish4 + "**!\n\nIt looks like this Pokemon is at least worth **500 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**"
    ];
    var weight = [40,30,20,10];
    var random_item = getRandomItem(list, weight);
  
     msg.channel.send(random_item);
}

if (msg.content.startsWith (PREFIX + "krabclamp")) {
  
    var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
    var randomType = TypeList[Math.floor(Math.random() * 
    TypeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };
    
    var SizeList = ["Skinny (+5 CC Bonus)", "Lean (+10 CC Bonus)", "Average (+20 CC Bonus)", "Fat (+25 CC Bonus)", "King-Sized (+50 CC Bonus)"]
    var randomSize = SizeList[Math.floor(Math.random() * 
    SizeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish1List = ["**Nothing.** Oh well ... Maybe you'll get something that stays in there next time!", "**a Piece of Broken Equipment**. Oh well - for your efforts to keep the waters clean you gain **25 Crater Coins** for your help!", "a(n) **" + randomSize + " " + randomType + " Krabby (50 Crater Coins)**.\n\nWill you **Trade it in for Crater Coins** or **Keep it?**"]
    var randomfish1 = Fish1List[Math.floor(Math.random() * 
    Fish1List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish2List = ["Staryu","Corsola","Galarian Corsola","Corphish","Clamperl","Crabrawler","Shellder","Dweeble"]
    var randomfish2 = Fish2List[Math.floor(Math.random() * 
    Fish2List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish3List = ["Stunfisk","Galarian Stunfisk","Mareanie","Octillery","Binacle","Pyukumuku"]
    var randomfish3 = Fish3List[Math.floor(Math.random() * 
    Fish3List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish4List = ["Anorith","Clauncher","Clobbopus","Omanyte","Kabuto","Lileep","Wimpod"]
    var randomfish4 = Fish4List[Math.floor(Math.random() * 
    Fish4List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var getRandomItem = function(list, weight) {
        var total_weight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });
         
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
         
        for (var i = 0; i < list.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return list[i];
            }
        }
         
        // end of function
    };   

    var list = [
    "You set your Krabby Clamper into the semi-shallow water with some bait. Deciding to leave it be for about half an hour you and your Pokemon have some lunch elsewhere to not disturb the trap. Upon returning you notice the trap has been interacted with! Upon closer inspection it looks like ... " + randomfish1,
    "You set your Krabby Clamper into the semi-shallow water with some bait. Deciding to leave it be for about half an hour you and your Pokemon have some lunch elsewhere to not disturb the trap. Upon returning you notice the trap has been interacted with! Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish2 + "**!\n\nIt looks like this Pokemon is at least worth **100 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**",
    "You set your Krabby Clamper into the semi-shallow water with some bait. Deciding to leave it be for about half an hour you and your Pokemon have some lunch elsewhere to not disturb the trap. Upon returning you notice the trap has been interacted with! Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish3 + "**!\n\nIt looks like this Pokemon is at least worth **250 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**",
    "You set your Krabby Clamper into the semi-shallow water with some bait. Deciding to leave it be for about half an hour you and your Pokemon have some lunch elsewhere to not disturb the trap. Upon returning you notice the trap has been interacted with! Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish4 + "**!\n\nIt looks like this Pokemon is at least worth **500 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**"
    ];
    var weight = [40,30,20,10];
    var random_item = getRandomItem(list, weight);
  
     msg.channel.send(random_item);
}

if (msg.content.startsWith (PREFIX + "fishnet")) {
  
    var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground", "Void", "Nova"]
    var randomType = TypeList[Math.floor(Math.random() * 
    TypeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };
    
    var SizeList = ["Skinny (+5 CC Bonus)", "Lean (+10 CC Bonus)", "Average (+20 CC Bonus)", "Fat (+25 CC Bonus)", "King-Sized (+50 CC Bonus)"]
    var randomSize = SizeList[Math.floor(Math.random() * 
    SizeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish1List = ["**Nothing.** Oh well ... Maybe you'll get a stronger net next time", "**your friendly neighbor Mako**! Did ... Did he not see the signs that this was a fishing area? Either way after helping him out his poor mother gives you **25 Crater Coins** for your help ... and Mako a warning that nets are dangerous things!", "a(n) **" + randomSize + " " + randomType + " Tentacool (50 Crater Coins)**.\n\nWill you **Trade it in for Crater Coins** or **Keep it?**"]
    var randomfish1 = Fish1List[Math.floor(Math.random() * 
    Fish1List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish2List = ["Horsea","Azurill","Dewpider","Cramorant","Chewtle","Wooper","Lotad","Wingull","Surskit","Barboach","Seel","Spheal"]
    var randomfish2 = Fish2List[Math.floor(Math.random() * 
    Fish2List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish3List = ["Buizel","Shellos","Croagunk","Tympole","Chinchou","Ducklett","Tynamo","Inkay","Eiscue","Frillish","Bergmite","Panpour"]
    var randomfish3 = Fish3List[Math.floor(Math.random() * 
    Fish3List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var Fish4List = ["Psyduck","Slowpoke","Galarian Slowpoke","Skrelp","Tirtouga","Arctozolt","Dracovish","Arctovish","Wailmer","Lapras","Dratini"]
    var randomfish4 = Fish4List[Math.floor(Math.random() * 
    Fish4List.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var getRandomItem = function(list, weight) {
        var total_weight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });
         
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
         
        for (var i = 0; i < list.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return list[i];
            }
        }
         
        // end of function
    };   

    var list = [
    "You set your fish net in the allocated area that was set up by the fishing experts, to ensure no rogue fishing nets get lost in the water and become ghost nets! You cruise around the water with the crew to give the net some set time. Once time is up you and the crew come back over to your set nets. You and the crew bring the nets up to see what you got. Upon closer inspection it looks like ... " + randomfish1,
    "You set your fish net in the allocated area that was set up by the fishing experts, to ensure no rogue fishing nets get lost in the water and become ghost nets! You cruise around the water with the crew to give the net some set time. Once time is up you and the crew come back over to your set nets. You and the crew bring the nets up to see what you got. Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish2 + "**!\n\nIt looks like this Pokemon is at least worth **100 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**",
    "You set your fish net in the allocated area that was set up by the fishing experts, to ensure no rogue fishing nets get lost in the water and become ghost nets! You cruise around the water with the crew to give the net some set time. Once time is up you and the crew come back over to your set nets. You and the crew bring the nets up to see what you got. Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish3 + "**!\n\nIt looks like this Pokemon is at least worth **250 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**",
    "You set your fish net in the allocated area that was set up by the fishing experts, to ensure no rogue fishing nets get lost in the water and become ghost nets! You cruise around the water with the crew to give the net some set time. Once time is up you and the crew come back over to your set nets. You and the crew bring the nets up to see what you got. Upon closer inspection it looks like ... a(n) **" + randomSize + " " + randomType + " " + randomfish4 + "**!\n\nIt looks like this Pokemon is at least worth **500 Crater Coins** according to the guide. Will you **Trade it in for Crater Coins** or **Keep it?**"
    ];
    var weight = [40,30,20,10];
    var random_item = getRandomItem(list, weight);
  
     msg.channel.send(random_item);
}

//Casino Masterlist

if (msg.content.startsWith (PREFIX + "chance")) { //75 % win rate

    var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground"]
    var randomCType = TypeList[Math.floor(Math.random() * 
    TypeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };
    
    var ItemList = ["a Crater Ball", "some " + randomType + " Ore Dust", "a jar of Typeless Honey", "a Poke Toy","a Strange Round Stone","a Razz Berry","a Kelpsey Berry","a Grepa Berry","a Nanab Berry","a Pinap Berry","a Pink Apricot","a Hondew Berry"]
    var randomItem = ItemList[Math.floor(Math.random() * //Random Casino Item
    ItemList.length)];
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
  
    var RCurrency = ["100","110","120","130","140","150","160","170","180","190",
    "200","210","220","230","240","250","260","270","280","290",
    "300"]
    var RPoke = RCurrency[Math.floor(Math.random() *
    RCurrency.length)];
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
  
    var getRandomTrait = function(traitList, traitWeight) {
        var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
  
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
  
            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);
  
                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
  //end of function
        };     
  
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
  
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
  
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
  
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
  //end of function
        };           
  
        var resultList = [
        "You take a chance to match those Charmanders! You're doing so well until finally you mis-match the winning pair and lose it all. \n \nBetter luck next time!", 
        "You take a chance to match those Charmanders! You're doing so well and finally you match the winning pair. You end up winning a(n)" + "** " + randomCType + " " + randomPokemon + "**! Is that even allowed? It is here!", 
        "You take a chance to match those Charmanders! You're doing so well and finally you match the winning pair. You end up winning" + " **" + randomItem + "**! Yay Prizes!", 
        "You take a chance to match those Charmanders! You're doing so well and finally you match the winning pair. You end up winning" + " **" + RPoke + " Crater Coins**! Don't Gamble it all away!"]
        var resultWeight = [25,25,25,25];
        var random_result = getRandomResult(resultList, resultWeight); //Final Result
         
         msg.channel.send(random_result);
}

if (msg.content.startsWith (PREFIX + "chips")) { //50 % win rate

    var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground"]
    var randomCType = TypeList[Math.floor(Math.random() * 
    TypeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var ItemList = ["a Friendship Ball", "a Greater Ball", "a jar of " + randomCType + " Honey", "a Water Bottle", "a piece of " + randomCType + " Ore", "a " + randomCType + " Pokemon Egg", "a Cocoa Poffin"]
    var randomItem = ItemList[Math.floor(Math.random() * //Random Casino Item
    ItemList.length)];
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
  
    var RCurrency = [
    "300","310","320","330","340","350","360","370","380","390",
    "400","410","420","430","440","450","460","470","480","490",
    "500","510","520","530","540","550","560","570","580","590",
    "600"]
    var RPoke = RCurrency[Math.floor(Math.random() *
    RCurrency.length)];
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
  
    var getRandomTrait = function(traitList, traitWeight) {
        var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
  
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
  
            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);
  
                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
  //end of function
        };     
  
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
  
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
  
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
  
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
  //end of function
        };           
  
        var traitList = [randomCType, "Nova", "Void"];
        var traitWeight = [75,12.5,12.5];
        var random_trait = getRandomTrait(traitList, traitWeight); //Trait of Random Pokemon
  
        var resultList = [
        "You take up the Chikorita Chips and get your gambling face on! Unfortunately as the night goes on you lose all your chips this game! \n \nBetter luck next time!", 
        "You take up the Chikorita Chips and get your gambling face on! With your steely resolve you manage to win the game and a(n)" + "** " + random_trait + " " + randomPokemon + "**! Is that even allowed? It is here!", 
        "You take up the Chikorita Chips and get your gambling face on! With your steely resolve you manage to win the game and" + " **" + randomItem + "**! Yay Prizes!", 
        "You take up the Chikorita Chips and get your gambling face on! With your steely resolve you manage to win the game and earn" + " **" + RPoke + " Crater Coins**! Don't Gamble it all away!"]
        var resultWeight = [50,16.7,16.7,16.7];
        var random_result = getRandomResult(resultList, resultWeight); //Final Result
         
         msg.channel.send(random_result);
}

if (msg.content.startsWith (PREFIX + "shuffle")) { //25 % win rate

    var TypeList = ["Normal","Fighting","Ghost","Dark","Psychic","Fairy","Flying","Electric","Water","Fire","Grass","Poison","Steel","Dragon","Bug","Ice","Rock","Ground"]
    var randomCType = TypeList[Math.floor(Math.random() * 
    TypeList.length)];

    var rand = function(min, max) {
    return Math.random() * (max - min) + min;
    };

    var ItemList = ["an Ultimate Ball", "a Greater Ball", "a pack of 3 Typeless Honeys", "a pack of 3 Water Bottles", "a Semi-Polished " + randomCType + " Crystal Chunk", "a PC Box", "an Instant Hatch Pass", "a pack of 3 Cocoa Poffins"]
    var randomItem = ItemList[Math.floor(Math.random() * //Random Casino Item
    ItemList.length)];
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
  
    var RCurrency = [
    "1000","1010","1020","1030","1040","1050","1060","1070","1080","1090",
    "1100","1110","1120","1130","1140","1150","1160","1170","1180","1190",
    "1200","1210","1220","1230","1240","1250","1260","1270","1280","1290",
    "1300","1310","1320","1330","1340","1350","1360","1370","1380","1390",
    "1400","1410","1420","1430","1440","1450","1460","1470","1480","1490",
    "1500"]
    var RPoke = RCurrency[Math.floor(Math.random() *
    RCurrency.length)];
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
  
    var getRandomTrait = function(traitList, traitWeight) {
        var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
  
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
  
            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);
  
                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
  //end of function
        };     
  
        var getRandomResult = function(resultList, resultWeight) {
            var total_weight = resultWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });
  
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
  
            for (var i = 0; i < resultList.length; i++) {
                weight_sum += resultWeight[i];
                weight_sum = +weight_sum.toFixed(2);
  
                if (random_num <= weight_sum) {
                    return resultList[i];
                }
            }   
  //end of function
        };           
  
        var traitList = [randomCType, "Nova", "Void", "Typeless"];
        var traitWeight = [20,35,35,10];
        var random_trait = getRandomTrait(traitList, traitWeight); //Trait of Random Pokemon
  
        var resultList = [
        "You take up your Sobble-Designed shuffleboard pole and play some Sobble Shuffle! Unfortunately you don't end up with the most points and end up losing. \n \n Better luck next time!", 
        "You take up your Sobble-Designed shuffleboard pole and play some Sobble Shuffle! With precision and skill you earn the most points and end up winning a(n)" + "** " + random_trait + " " + randomPokemon + "**! Is that even allowed? It is here!", 
        "You take up your Sobble-Designed shuffleboard pole and play some Sobble Shuffle! With precision and skill you earn the most points and end up winning" + " **" + randomItem + "**! Yay Prizes!", 
        "You take up your Sobble-Designed shuffleboard pole and play some Sobble Shuffle! With precision and skill you earn the most points and end up earning" + " **" + RPoke + " Crater Coins**! Don't Gamble it all away!"]
        var resultWeight = [75,8.4,8.4,8.4];
        var random_result = getRandomResult(resultList, resultWeight); //Final Result
         
         msg.channel.send(random_result);
}


// Egg Commands 

    if (msg.content.startsWith (PREFIX + "egg1dust")) {
  
    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
    };
     
    var getRandomItem = function(list, weight) {
        var total_weight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });
         
        var random_num = rand(0, total_weight);
        var weight_sum = 0;
        //console.log(random_num)
         
        for (var i = 0; i < list.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return list[i];
            }
        }
         
        // end of function
    };      
    var list = [
        'After adding the dust to your egg you and the Professor look over its stats ... it looks like the stat meter is the same, and **have not** gone up!', 
        'After adding the dust to your egg you and the Professor look over its stats ... it looks like the stats meter has gone up, indicating a **+ 4 Base Stat Bonus**! How Exciting!'];
    var weight = [90, 10];
    var random_item = getRandomItem(list, weight);
  
     msg.channel.send(random_item);
    }

    if (msg.content.startsWith (PREFIX + "egg2dust")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'After adding the dust to your egg you and the Professor look over its stats ... it looks like the stat meter is the same, and **have not** gone up!', 
            'After adding the dust to your egg you and the Professor look over its stats ... it looks like the stats meter has gone up, indicating a **+ 4 Base Stat Bonus**! How Exciting!'];
        var weight = [70, 30];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }

    if (msg.content.startsWith (PREFIX + "egg3dust")) {
  
        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomItem = function(list, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < list.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return list[i];
                }
            }
             
            // end of function
        };      
        var list = [
            'After adding the dust to your egg you and the Professor look over its stats ... it looks like the stat meter is the same, and **have not** gone up!', 
            'After adding the dust to your egg you and the Professor look over its stats ... it looks like the stats meter has gone up, indicating a **+ 4 Base Stat Bonus**! How Exciting!'];
        var weight = [50, 50];
        var random_item = getRandomItem(list, weight);
      
         msg.channel.send(random_item);
    }
    
    if (msg.content.startsWith (PREFIX + "hatchegg")) {
    
    var StarterList = ["Caterpie", "Weedle", "Pidgey", "Rattata", "Alolan Rattata", "Spearow", "Ekans", "Pichu", "Nidoran F", "Nidoran M", "Eevee",
    "Sentret", "Hoothoot", "Ledyba", "Spinarak", "Zubat", "Chinchou", "Cleffa", "Igglybuff", "Togepi", "Poochyena", "Zigzagoon", "Wurmple", "Lotad", "Seedot", "Taillow", 
    "Wingull", "Bunnelby", "Fletchling", "Scatterbug", "Litleo", "Flabebe", "Skiddo", "Pancham", "Furfrou", "Espurr", "Honedge", "Spritzee", "Swirlix", "Inkay", "Binacle", "Skrelp", "Clauncher",
    "Helioptile", "Pikipek", "Yungoos", "Grubbin", "Crabrawler", "Oricorio (Baile)", "Oricorio (Pom-Pom)", "Oricorio (Pa'u)", "Oricorio (Sensu)", "Cutiefly", "Rockruff", "Wishwashi", "Mareanie",
    "Mudbray", "Dewpider", "Fomantis", "Morelull", "Salandit", "Stufful", "Bounsweet", "Rotom","Bulbasaur", "Squirtle", "Charmander","Chikorita","Totodile","Cyndaquil","Treecko","Torchic","Mudkip","Turtwig","Chimchar","Piplup","Snivy","Oshawott","Tepig",
    "Litten", "Rowlet", "Popplio","Grookey", "Sobble", "Scorbunny"]
    var randomStarter = StarterList[Math.floor(Math.random() * 
    StarterList.length)];

    var rand = function(min, max) {
        return Math.random() * (max - min) + min;
        };

    msg.channel.send("Wiggle ... Wiggle ... Crack! Congrats! Your Typed Egg has hatched into a similar typed **" + randomStarter + "**!");
    }

// Egg Move Commands 

    if (msg.content.startsWith (PREFIX + "grasseggmove")) {
    
        var MoveList = [
        "Leafage",
        "Mega Drain",
        "Vine Whip",
        "Bullet Seed",
        "Razor Leaf",
        "Magical Leaf",
        "Needle Arm",
        "Leaf Tornado",
        "Grass Knot",
        "Horn Leech",
        "Giga Drain",
        "Grass Pledge",
        "Hidden Power (Grass)",
        "Seed Bomb",
        "Energy Ball",
        "Leaf Blade",
        "Petal Blizzard",
        "Petal Dance",
        "Power Whip",
        "Woodhammer",
        "Solar Blade",
        "Leaf Storm",
        "Frenzy Plant",
        "Grassy Glide",
        "Strength Sap",
        "Grassy Terrain",
        "Cotton Guard",
        "Grass Knot",
        "Worry Seed",
        "Aromatherapy",
        "Frenzy Plant",
        "Gras Whistle",
        "Ingrain",
        "Synthesis",
        "Cotton Spore",
        "Leech Seed",
        "Solar Beam",
        "Spore",
        "Sleep Powder",
        "Stune Spore"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Grass Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "fireeggmove")) {
    
        var MoveList = [
        "Flame Charge",
        "Flame Wheel",
        "Incinerate",
        "Fire Fang",
        "Heat Crash",
        "Flame Burst",
        "Mystical Fire",
        "Fire Lash",
        "Fire Pledge",
        "Flamethrower",
        "Hidden Power (Fire)",
        "Lava Plume",
        "Blaze Kick",
        "Heat wave",
        "Inferno",
        "Flare Blitz",
        "Burn Up",
        "Overheat",
        "Blast Burn",
        "Eruption",
        "Flame Burst",
        "Blast Burn",
        "Will-o-Wisp",
        "Sunny Day"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Fire Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "watereggmove")) {
    
        var MoveList = [
        "Clamp",
        "Whirlpool",
        "Water Gun",
        "Aqua Jet",
        "Water Pulse",
        "Razor Shell",
        "Brine",
        "Dive",
        "Hidden Power (Water)",
        "Scald",
        "Water Pledge",
        "Waterfall",
        "Liquidation",
        "Aqua Tail",
        "Muddy Water",
        "Surf",
        "Hydro Cannon",
        "Water Spout", 
        "Life Dew",
        "Flip Turn",
        "Soak",
        "Aqua Ring",
        "Water Sport",
        "Rain Dance",
        "Bubblebeam",
        "Withdraw"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Water Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "electriceggmove")) {
    
        var MoveList = [
        "Thundershock",
        "Electro Web",
        "Shock Wave",
        "Thunder Fang",
        "Thunder Punch",
        "Discharge",
        "Hidden Power (Electric)",
        "Zing Zap",
        "Wild Charge",
        "Thunder",
        "Volt Tackle",
        "Zap Cannon", 
        "Rising Voltage",
        "Eerie Impulse",
        "Electric Terrain",
        "Electrify",
        "Ion Deluge",
        "Magnetic Flux",
        "Nuzzle",
        "Parabolic Charge",
        "Electro Ball",
        "Volt Switch",
        "Charge Beam",
        "Magnet Rise",
        "Charge",
        "Thunder Wave",
        "Thunderbolt"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Electric Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "flyingeggmove")) {
    
        var MoveList = [
        "Aerial Ace",
        "Air Cutter",
        "Mirror Move",
        "Pluck",
        "Sky Drop",
        "Acrobatics",
        "Hidden Power (Flying)",
        "Fly",
        "Brave Bird",
        "Feather Dance",
        "Dual Wingbeat",
        "Drill Peck",
        "Beak Blast",
        "Hurricane",
        "Air Slash",
        "Chatter",
        "Defog",
        "Roost",
        "Tailwind",
        "Bounce",
        "Peck"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Flying Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "bugeggmove")) {
    
        var MoveList = [
        "Infestation",
        "Fell Stinger",
        "Pin Missile",
        "Struggle Bug",
        "Bug Bite",
        "Steamroller",
        "U-turn",
        "Hidden Power (Bug)",
        "Leech Life",
        "Lunge",
        "Attack Order",
        "Bug Buzz",
        "Pollen Puff",
        "Skitter Smack",
        "First Impression",
        "Powder",
        "Sticky Web",
        "Quiver Dance",
        "Rage Powder",
        "Defend Order",
        "Heal Order",
        "X-Scissor",
        "Signal Beam",
        "Silver Wind",
        "Tail Glow",
        "Fury Cutter",
        "Megahorn",
        "Spider Web",
        "String Shot"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random egg move is **" + randomMove + "**! If this egg move does not match the Pokemons Type, please Re-Roll until one is recieved!");
    }

    if (msg.content.startsWith (PREFIX + "darkeggmove")) {
    
        var MoveList = [
        "Payback",
        "Snarl",
        "Bite",
        "Brutal Swing",
        "Sucker Punch",
        "Crunch",
        "Dark Pulse",
        "Hidden Power (Dark)",
        "Punishment",
        "Throat Chop",
        "Darkest Lariat",
        "Foul Play",
        "False Surrender",
        "Jaw Lock",
        "Lash Out",
        "Power Trip",
        "Parting Shot",
        "Hone Claws",
        "Quash",
        "Assurance",
        "Embargo",
        "Fling",
        "Nasty Plot",
        "Switcheroo",
        "Fake Tears",
        "Knock Off",
        "Memento",
        "Snatch",
        "Taunt",
        "Torment",
        "Beat Up",
        "Feint Attack",
        "Theif"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Dark Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "psychiceggmove")) {
    
        var MoveList = [
        "Psywave",
        "Stored Power",
        "Psybeam",
        "Psycho Cut",
        "Hidden Power (Psychic)",
        "Psyshock",
        "Zen Headbutt",
        "Dream Eater",
        "Magic Powder",
        "Instruct",
        "Psychic Fangs",
        "Psychic Terrain",
        "Speed Swap",
        "Ally Switch",
        "Guard Split",
        "Heal Pulse",
        "Magic Room",
        "Power Split",
        "Synchronoise",
        "Telekinesis",
        "Wonder Room",
        "Gravity",
        "Guard Swap",
        "Heal Block",
        "Miracle Eye",
        "Power Swap",
        "Power Trick",
        "Trick Room",
        "Calm Mind",
        "Cosmic Power",
        "Extrasensory",
        "Imprison",
        "Magic Coat",
        "Role Play",
        "Skill Swap",
        "Trick",
        "Future Sight",
        "Mirror Coat",
        "Agility",
        "Amnesia",
        "Barrier",
        "Hypnosis",
        "Kinesis",
        "Light Screen",
        "Meditate",
        "Psychic",
        "Reflect",
        "Rest",
        "Teleport"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Psychic Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "dragoneggmove")) {
    
        var MoveList = [
        "Dual Chop",
        "Dragon Tail",
        "Dragonbreath",
        "Hidden Power (Dragon)",
        "Dragon Pulse",
        "Dragon Rush",
        "Outrage",
        "Draco Meteor",
        "Breaking Swipe",
        "Scale Shot",
        "Clanging Scales",
        "Dragon Claw",
        "Dragon Dance",
        "Twister"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Dragon Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "fairyeggmove")) {
    
        var MoveList = [
        "Fairy Wind",
        "Draining Kiss",
        "Dazzling Gleam",
        "Hidden Power (Fairy)",
        "Moonblast",
        "Aromatic Mist",
        "Baby Doll Eyes",
        "Fairy Lock",
        "Misty Terrain",
        "Play Rough",
        "Charm",
        "Moonlight",
        "Sweet Kiss"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Fairy Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "iceeggmove")) {
    
        var MoveList = [
        "Powder Snow",
        "Icicle Spear",
        "Icy Wind",
        "Aurora Beam",
        "Ice Punch",
        "Hidden Power (Ice)",
        "Ice Ball",
        "Icicle Crash",
        "Ice Beam",
        "Blizzard",
        "Sheer Cold",
        "Triple Axel",
        "Aurora Veil",
        "Freeze-Dry",
        "Frost Breath",
        "Glaciate",
        "Avalanche",
        "Ice Fang",
        "Hail",
        "Haze",
        "Mist"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Ice Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "steeleggmove")) {
    
        var MoveList = [
        "Bullet Punch",
        "Magnet Bomb",
        "Mirror Shot",
        "Steel Wing",
        "Gyro Ball",
        "Hidden Power (Steel)",
        "Metal Burst",
        "Iron Tail",
        "Steel Beam",
        "Smart Strike",
        "Autotomize",
        "Heavy Slam",
        "Shift Gear",
        "Flash Cannon",
        "Iron Defense",
        "Metal Sound",
        "Meteor Mash",
        "Metal Claw"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Steel Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "rockeggmove")) {
    
        var MoveList = [
        "Hidden Power (Rock)",
        "Meteor Beam",
        "Accelerock",
        "Smack Down",
        "Wide Guard",
        "Head Smash",
        "Power Gem",
        "Rock Polish",
        "Rock Wrecker",
        "Stealth Rock",
        "Stone Edge",
        "Rock Blast",
        "Rock Tomb",
        "Ancient Power",
        "Rollout",
        "Rockslide"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Rock Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "groundeggmove")) {
    
        var MoveList = [
        "Hidden Power (Ground)",
        "Scorching Sands",
        "High Horsepower",
        "Shore Up",
        "Stomping Tantrum",
        "Rototiller",
        "Bulldoze",
        "Drill Run",
        "Earth Power",
        "Mud Bomb",
        "Mud Shot",
        "Mud Sport",
        "Sand Tomb",
        "Bone Rush",
        "Magnitude",
        "Spikes",
        "Bone Club",
        "Dig",
        "Earthquake",
        "Fissure",
        "Sand Attack"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Ground Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "fightingeggmove")) {
    
        var MoveList = [
        "Vaccum Wave",
        "Power Up Punch",
        "Hidden Power (Fighting)",
        "Body Press",
        "Coaching",
        "Mat Block",
        "Circle Throw",
        "Final Gambit",
        "Low Sweep",
        "Quick Guard",
        "Sacred Sword",
        "Storm Throw",
        "Aura Sphere",
        "Close Combat",
        "Drain Punch",
        "Focus Blast",
        "Force Palm",
        "Hammer Arm",
        "Wake-Up Slap",
        "Arm Thrust",
        "Brick Break",
        "Bulk Up",
        "Focus Punch",
        "Revenge",
        "Sky Uppercut",
        "Superpower",
        "Cross Chop",
        "Detect",
        "Dynamic Punch",
        "Mach Punch",
        "Reversal",
        "Triple Kick",
        "Vital Throw",
        "Counter",
        "Double Kick",
        "High Jump Kick",
        "Jump Kick",
        "Karate Chop",
        "Low Kick",
        "Rolling Kick",
        "Seismic Toss",
        "Submission"
    ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Fighting Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "ghosteggmove")) {
    
        var MoveList = [
        "Shadow Sneak",
        "Hidden Power (Ghost)",
        "Phantom Force",
        "Hex",
        "Ominous Wind",
        "Shadow Claw",
        "Astonish",
        "Grudge",
        "Shadow Punch",
        "Curse",
        "Destiny Bond",
        "Nightmare",
        "Shadow Ball",
        "Spite",
        "Confuse Ray",
        "Lick"
        ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Ghost Egg Move is **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "poisoneggmove")) {
    
        var MoveList = [
        "Acid",
        "Acid Spray", 
        "Hidden Power (Poison)",
        "Purify",
        "Toxic Thread",
        "Belch",
        "Venom Drench",
        "Clear Smog",
        "Coil",
        "Sludge Wave",
        "Venoshock",
        "Cross Poison",
        "Gastro Acid",
        "Gunk Shot",
        "Poison Jab",
        "Toxic Spikes",
        "Poison Fang",
        "Poison Tail",
        "Sludge Bomb",
        "Acid Armor",
        "Poison Gas",
        "Poison Powder",
        "Sludge",
        "Smog",
        "Toxic"
       ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Poison Egg Move **" + randomMove + "**!");
    }

    if (msg.content.startsWith (PREFIX + "normaleggmove")) {
    
        var MoveList = [
        "Constrict",
        "Hidden Power (Normal)",
        "Terrain Pulse",
        "Laser Focus",
        "Tearful Look",
        "Boombusrt",
        "Confide",
        "Hold Back",
        "Noble Roar",
        "Play Nice",
        "After You",
        "Bestow",
        "Chip Away",
        "Echoed Voice",
        "Entrainment",
        "Head Charge",
        "Retaliate",
        "Round",
        "Shell Smash",
        "Simple Beam",
        "Tail Slap",
        "Work Up",
        "Acupressure",
        "Captivate",
        "Copycat",
        "Crush Grip",
        "Double Hit",
        "Feint",
        "Giga Impact",
        "Last Resort",
        "Lucky Chant",
        "Me First",
        "Natural Gift",
        "Rock Climb",
        "Trump Card",
        "Wring Out",
        "Assist",
        "Block",
        "Camouflage",
        "Covet",
        "Crush Claw",
        "Endeavor",
        "Facade",
        "Fake Out",
        "Follow Me",
        "Hepling Hand",
        "Howl",
        "Hyper Voice",
        "Nature Power",
        "Odor Sleuth",
        "Recycle",
        "Refresh",
        "Secret Power",
        "Slack Off",
        "Smelling Salts",
        "Spit Up",
        "Stockpile",
        "Swallow",
        "Teeter Dance",
        "Uproar",
        "Weather Ball",
        "Wish",
        "Attract",
        "Yawn",
        "Baton Pass",
        "Belly Drum",
        "Encore",
        "Endure",
        "Extreme Speed",
        "False Swipe",
        "Flail",
        "Foresight",
        "Frustration",
        "Heal Bell",
        "Lock-On",
        "Mean Look",
        "Mind Reader",
        "Morning Sun",
        "Pain Split",
        "Perish Song",
        "Present",
        "Protect",
        "Psych Up",
        "Rapid Spin",
        "Return",
        "Safeguard",
        "Scary Face",
        "Sketch",
        "Sleep Talk",
        "Snore",
        "Swagger",
        "Sweet Scent",
        "Bide",
        "Bind",
        "Body Slam",
        "Comet Punch",
        "Conversion",
        "Cut",
        "Defense Curl",
        "Disable",
        "Dizzy Punch",
        "Double Slap",
        "Double Team",
        "Double Edge",
        "Explosion",
        "Flash",
        "Focus Energy",
        "Fury Attack",
        "Fury Swipes",
        "Glare",
        "Growl",
        "Growth",
        "Guillotine",
        "Harden",
        "Headbutt",
        "Horn Attack",
        "Horn Drill",
        "Hyper Beam",
        "Hyper Fang", 
        "Leer",
        "Lovely Kiss",
        "Mega Kick",
        "Mega Punch",
        "Metronome",
        "Mimic",
        "Minimize",
        "Quick Attack",
        "Rage",
        "Razor Wind",
        "Recover",
        "Roar",
        "Scratch",
        "Screech",
        "Self-Destruct",
        "Sing",
        "Skull Bash",
        "Slam",
        "Smokescreen",
        "Sonic Boom",
        "Spike Cannon",
        "Splash",
        "Stomp",
        "Strength",
        "Substitute",
        "Super Fang",
        "Swift",
        "Swords Dance",
        "Tackle",
        "Tail Whip",
        "Take Down",
        "Thrash",
        "Tri-Attack",
        "Vice-Grip",
        "Wrap"
    ]
      
        var randomMove = MoveList[Math.floor(Math.random() * 
            MoveList.length)];
      
            var rand = function(min, max) {
                return Math.random() * (max - min) + min;
                };
      
                 msg.channel.send("Your random Normal Egg Move is **" + randomMove + "**!");
    }

//Help Commands

    if (msg.content.startsWith (PREFIX + "help")) {
   msg.channel.send("I have a variety of commands! Here are a few lists: \n\n" + 
                       "**1.** r!venturehelp \n" +
                       "**2.** r!casinohelp \n" +
                       "**3.** r!fishinghelp \n" +
                       "**4.** r!utilityhelp \n" + 
                       "**5.** r!funhelp \n" +
                       "**6.** r!battlehelp \n" +
                       "**7.** r!egghelp"
  );
    }

    if (msg.content.startsWith (PREFIX + "utilityhelp")) {
   msg.channel.send("Here are the utility commands I have: \n\n" + 
                      "**1.** r!legendary \n" +
                      "**2.** r!pokemon \n" +
                      "**3.** r!starter \n" +
                      "**4.** r!study\n" +
                      "**5.** r!birthday \n" +
                      "**6.** r!event \n" +
                      "**7.** r!item \n" +
                      "**8.** r!srstone \n" +
                      "**9.** r!voidstrands \n" +
                      "**10.** r!hpower \n" +
                      "**11.** r!coin \n" +
                      "**12.** r!type \n" +
                      "**13.** r!metronome \n" +
                      "**14.** r!befriend \n" +
                      "**15.** r!time \n----------\n" +
                      "**16.** r!craterball(100 or 50)\n" +
                      "**17.** r!greaterball(100 or 50)\n" +
                      "**18.** r!ultimateball(100 or 50)\n\n" +
                      "**Coder Note:** Use 100 when a Pokemon has 100-51% HP left and 50 when a Pokemon has 50-0% HP left."
                     );
    }

    if (msg.content.startsWith (PREFIX + "battlehelp")) {
        msg.channel.send("Here are the battle commands I have: \n \n" + 
                           
                        "**1.** r!wildz1stats\n" +  
                        "**2.** r!zone1movelist\n" +
                        "**3.** r!wildz1attack \n" +
                        "**4.** r!voidattack \n" +
                        "**5.** r!trainerstats\n" +
                        "**6.** r!trainermoves\n" +
                        "**7.** r!ohko\n" +
                        "**8.** r!sleep\n" +
                        "**9.** r!paralyzed\n" +
                        "**10.** r!acctest(1-5) \n" +
                        "**11.** r!trainer(neu/dis/adv)(1-9,0) 1# 2# 3# \n" +
                        "**12.** r!wild(neu/dis/adv)(1-9,0) 1# 2# 3# \n\n" +

                        "**Key:** neu = Neutral (x1 move effectiveness) dis = Disadvantage (x0.5 move effectiveness) and adv = Advantage (x2 move effectiveness)\n" +
                        "1 = Level 1 - 10, 2 = Level 11 - 20, 3 = Level 21 - 30, ... , 0 = Level 100 \n\n" +

                        "**Coder Note 1:** r!acctest is used to determine if an attack hits with lowered accuracy before rolling r!roll. r!acctest1 means it was hit with one accuracy lowering move, r!acctest2 means two accuracy lowering moves, and may only be hit up to five accuracy lowering moves. This does not need to be rolled if no accuracy lowering moves were used in the battle.\n\n" +
                        "**Coder Note 2:** r!trainer and r!wild consists of three numbers after the type effectiveness and minimum level. 1# is the Attacking Pokemons Attack or Special Attack Stat, 2# is the Defending Pokemons Defense or Special Defense Stat, and 3# is the Defending Pokemons HP stat/points remaining."
     
       );
    }

    if (msg.content.startsWith (PREFIX + "funhelp")) {
   msg.channel.send("Here are the fun commands I have: \n\n" + 
                      "**1.** r!hello \n" +
                      "**2.** r!about \n" +
                      "**3.** r!balanced \n" +
                      "**4.** r!poffins \n" +
                      "**5.** r!brick \n"
  );
    }

    if (msg.content.startsWith (PREFIX + "venturehelp")) {
    msg.channel.send("Here are the explore commands I have: \n \n" + 
 
                    "**1.** r!vtzone1\n" +
                    "**2.** r!honeyzone1\n" +
                    "**3.** r!tracks\n" +
                    "**4.** r!blessing"
  );
    }

    if (msg.content.startsWith (PREFIX + "casinohelp")) {
        msg.channel.send("Here are the casino commands I have: \n \n" + 
     
                        "**1.** r!chance (Charmander Chance)\n" +
                        "**2.** r!chips (Chikorita Chips)\n" +
                        "**3.** r!shuffle (Sobble Shuffle)"
      );
    }

    if (msg.content.startsWith (PREFIX + "fishinghelp")) {
        msg.channel.send("Here are the fishing commands I have: \n \n" + 
     
                        "**1.** r!fishrod\n" +
                        "**2.** r!krabclamp\n" +
                        "**3.** r!fishnet"
      );
    }

    if (msg.content.startsWith (PREFIX + "egghelp")) {
        msg.channel.send("Here are the egg commands I have: \n \n" + 
     
                        "**1.** r!egg1dust\n" +
                        "**2.** r!egg2dust\n" +
                        "**3.** r!egg3dust\n" +
                        "**4.** r!hatchegg\n" +
                        "**5.** r!(type)eggmove\n\n" +
                        "**Coder Note:** Replace (type) in the egg move command with the appropriate Type, such as r!grasseggmove and so forth!"
    
      );
    }
  
  });

client.login(auth.token);