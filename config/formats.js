'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable."],
		section: "ORAS Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "ORAS Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3521201/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3553516/\">OU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew']
	},
	{
		name: "OU (suspect test)",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3556762/\">np: OU Stage 5</a>"],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew', 'Sablenite']
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: []
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554801/\">np: UU Stage 5</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541343/\">UU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Shadow Tag']
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555823/\">np: RU Stage 12</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3538036/\">RU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		searchShow: false,
		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "RU (suspect test)",
		section: "ORAS Singles",

		challengeShow: false,
		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545983/\">np: NU Stage 8</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545276/\">NU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['RU'],
		banlist: ['RU', 'BL3']
	},
	{
		name: "PU (suspect test)",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554725/\">np: PU Stage 4</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528743/\">PU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['NU'],
		banlist: ['NU', 'BL4', 'Chatter']
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3490462/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>"
		],
		section: "ORAS Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger']
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">Anything Goes Resources</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal']
	},
	/*{
		name: "CAP Naviathan Playtest",
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Allow CAP', 'Syclant', 'Revenankh', 'Pyroak', 'Fidgit', 'Stratagem', 'Arghonaut', 'Kitsunoh', 'Cyclohm', 'Colossoil', 'Krilowatt', 'Voodoom',
			'Tomohawk', 'Necturna', 'Mollux', 'Aurumoth', 'Malaconda', 'Cawmodore', 'Volkraken', 'Plasmanta',
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Genesect',
			'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew'
		]
	},*/
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554616/\">Battle Spot Singles Viability Ranking</a>"
		],
		section: "ORAS Singles",

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true
	},
	{
		name: "Custom Game",
		section: "ORAS Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545903/\">np: Doubles OU Stage 3</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>"
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Salamencite', 'Soul Dew', 'Dark Void',
			'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder', 'Gravity ++ Spore'
		]
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: ['Aegislash', 'Amoonguss', 'Azumarill', 'Bisharp', 'Blaziken', 'Breloom', 'Chandelure', 'Charizard', 'Conkeldurr',
			'Cresselia', 'Diancie', 'Dragonite', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Gengar', 'Greninja',
			'Gyarados', 'Heatran', 'Hoopa-Unbound', 'Hydreigon', 'Jellicent', 'Jirachi', 'Kangaskhan', 'Keldeo', 'Kyurem-Black',
			'Landorus', 'Landorus-Therian', 'Latios', 'Ludicolo', 'Mawile', 'Metagross', 'Politoed', 'Rotom-Wash', 'Sableye',
			'Scizor', 'Scrafty', 'Shaymin-Sky', 'Suicune', 'Swampert', 'Sylveon', 'Talonflame', 'Terrakion',
			'Thundurus', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcarona', 'Weavile', 'Whimsicott', 'Zapdos'
		]
	},
	{
		name: "Doubles NU",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Doubles UU'],
		banlist: ['Abomasnow', 'Aerodactyl', 'Altaria', 'Ampharos', 'Arcanine', 'Aromatisse', 'Aurorus', 'Banette', 'Blastoise',
			'Bronzong', 'Camerupt', 'Clawitzer', 'Cobalion', 'Cofagrigus', 'Cradily', 'Crawdaunt', 'Crobat', 'Doublade',
			'Dusclops', 'Electivire', 'Empoleon', 'Espeon', 'Florges', 'Forretress', 'Galvantula', 'Gastrodon', 'Genesect',
			'Hariyama', 'Hitmontop', 'Honchkrow', 'Hoopa', 'Infernape', 'Jolteon', 'Kingdra', 'Kingler', 'Klefki',
			'Krookodile', 'Kyurem', 'Liepard', 'Lopunny', 'Lucario', 'Machamp', 'Mamoswine', 'Manaphy', 'Medicham',
			'Mew', 'Mienshao', 'Milotic', 'Murkrow', 'Nidoking', 'Ninetales', 'Noivern', 'Pachirisu', 'Pangoro',
			'Porygon2', 'Reuniclus', 'Rhyperior', 'Roserade', 'Rotom-Heat', 'Salamence', 'Sceptile', 'Serperior', 'Slowking',
			'Snorlax', 'Thundurus-Therian', 'Togetic', 'Tornadus', 'Vaporeon'
		]
	},
	{
		name: "VGC 2015",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3524352/\">VGC 2015 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3530547/\">VGC 2015 Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3500650/\">VGC Learning Resources</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526666/\">Sample Teams for VGC 2015</a>"
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true
	},
	{
		name: "Battle Spot Special 13",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3555571/\">Battle Spot Special Season 13</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true,
		onValidateSet: function (set) {
			if (set.item) {
				var item = this.getItem(set.item);
				if (item.megaStone) return ["Mega Stones are not permitted."];
			}
		}
	},
	{
		name: "Doubles Hackmons Cup",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Smogon Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3511522/\">Smogon Triples</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540390/\">Smogon Triples Viability Ranking</a>"
		],
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song'
		]
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>"
		],
		section: "ORAS Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6]
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true
	},
	{
		name: "Festive Feud",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3556178/\">Festive Feud</a>"],
		section: "ORAS Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6]
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true,
		onValidateTeam: function (team) {
			var problems = [];
			for (let i = 0; i < team.length; i++) {
				var template = this.getTemplate(team[i].species);
				if (template.color !== 'Red' && template.color !== 'Green' && template.color !== 'White') {
					problems.push(template.species);
				}
			}
			if (problems.length) return ["Only red, green and white Pok\u00E9mon are permitted.", "(You have " + problems.join(', ') + ")"];
		}
	},
	{
		name: "Triples Hackmons Cup",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Triples Custom Game",
		section: "ORAS Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "350 Cup",
		desc: [
			"Pok&eacute;mon with a base stat total of 350 or lower get their stats doubled.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3512945/\">350 Cup</a>"
		],
		section: "OM of the Month",
		column: 2,

		mod: '350cup',
		ruleset: ['Ubers', 'Evasion Moves Clause'],
		banlist: ['Abra', 'Cranidos', 'Darumaka', 'Gastly', 'Pawniard', 'Spritzee', 'DeepSeaScale', 'DeepSeaTooth', 'Light Ball', 'Thick Club'],
		onValidateSet: function (set) {
			var template = Tools.getTemplate(set.species);
			var item = this.getItem(set.item);
			if (item.name === 'Eviolite' && Object.values(template.baseStats).sum() <= 350) {
				return ['Eviolite is banned on Pok&eacute;mon with 350 or lower BST.'];
			}
		}
	},
	{
		name: "LC Extended",
		desc: [
			"LC but with Pok&eacute;mon being able to learn all moves from their evolutions.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3557568/\">LC Extended</a>"
		],
		section: "OM of the Month",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Team Preview'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger'],
		validateSet: function (set, teamHas) {
			var species = set.species || set.name;
			var ability = set.ability;
			let template = Tools.getTemplate(species);
			if (template.prevo) {
				return [species + " isn't the first in its evolution family."];
			}
			if (!template.nfe) {
				return [species + " doesn't have an evolution family."];
			}
			if (template.tier === 'LC Uber' || template.species in {'Fletchling':1, 'Gligar':1, 'Misdreavus':1, 'Scyther':1, 'Sneasel':1, 'Tangela':1}) {
				return [species + " is banned from LC Extended."];
			}
			if (Object.values(template.abilities).indexOf(ability) < 0 || ability === 'Moody') {
				return [species + " doesn't have a legal ability."];
			}
			while (template.evos.length) {
				template = Tools.getTemplate(template.evos[0]);
			}
			var level = set.level;
			set.species = template.species;
			set.ability = template.abilities[0];
			set.level = template.evoLevel;
			let problems = this.validateSet(set, teamHas) || [];
			set.species = species;
			set.ability = ability;
			set.level = Tools.clampIntRange(level, 1, 5);
			return problems;
		}
	},
	/*{
		name: "[Seasonal] Super Squad Smackdown",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3491902/\">Seasonal Ladder</a>"],
		section: "OM of the Month",
		team: 'randomSeasonalHero',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod']
	},*/
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/cap/\">CAP Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>"
		],
		section: "Other Metagames",
		column: 2,

		ruleset: ['OU'],
		banlist: ['Allow CAP']
	},
	{
		name: "Battle Factory",
		section: "Other Metagames",

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause']
	},
	{
		name: "Challenge Cup 1v1",
		section: "Other Metagames",

		team: 'randomCC',
		teamLength: {
			battle: 1
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview']
	},
	{
		name: "Balanced Hackmons",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3489849/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3515725/\">Balanced Hackmons Suspect Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547823/\">Balanced Hackmons Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Kyogre-Primal', 'Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter']
	},
	{
		name: "1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3496773/\">1v1</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536109/\">1v1 Viability Ranking</a>"
		],
		section: 'Other Metagames',

		teamLength: {
			validate: [1, 3],
			battle: 1
		},
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky',
			'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash', 'Kangaskhanite', 'Soul Dew', 'Perish Song'
		]
	},
	{
		name: "Monotype",
		desc: [
			"All Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3544507/\">Monotype</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550310/\">Monotype Resources</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Altarianite', 'Charizardite X', 'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Metagrossite', 'Salamencite', 'Slowbronite', 'Smooth Rock', 'Soul Dew'
		]
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, NU/BL4 get +15, and PU or lower get +20.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554765/\">Tier Shift</a>"
		],
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Swift Swim']
	},
	{
		name: "OU (no Mega)",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3536150/\">OU (no Mega) Viability Ranking</a>"],
		section: "Other Metagames",

		ruleset: ['OU'],
		onBegin: function () {
			for (let i = 0; i < this.p1.pokemon.length; i++) {
				this.p1.pokemon[i].canMegaEvo = false;
			}
			for (let i = 0; i < this.p2.pokemon.length; i++) {
				this.p2.pokemon[i].canMegaEvo = false;
			}
		}
	},
	{
		name: "Inverse Battle",
		desc: [
			"Battle with an inverted type chart.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
			'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew'
		],
		onNegateImmunity: function (pokemon, type) {
			if (type in this.data.TypeChart && this.runEvent('Immunity', pokemon, null, null, type)) return false;
		},
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		}
	},
	{
		name: "Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528058/\">Almost Any Ability</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551063/\">Almost Any Ability Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Arceus', 'Archeops', 'Bisharp', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mamoswine', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Slaking', 'Smeargle', 'Terrakion', 'Weavile', 'Xerneas', 'Yveltal',
			'Zekrom',
			'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew', 'Chatter'
		],
		onValidateSet: function (set) {
			let bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Protean': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		}
	},
	{
		name: "STABmons",
		desc: [
			"Pok&eacute;mon gain access to either Attacking moves or Status moves of their typing, but not both at the same time.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548559/\">STABmons Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: ['Diggersby', 'Keldeo', 'Porygon-Z', 'Sylveon', 'Aerodactylite', 'Altarianite', "King's Rock", 'Lopunnite', 'Metagrossite', 'Razor Fang'],
		validateSet: function (set, teamHas) {
			let statusProblems = this.validateSet(set, teamHas, {ignorestabmoves: {'Status':1}});
			if (!statusProblems.length) return;
			let attackProblems = this.validateSet(set, teamHas, {ignorestabmoves: {'Physical':1, 'Special':1}});
			if (!attackProblems.length) return;

			let problems = [];
			for (let i = 0; i < statusProblems.length; i++) {
				problems.push('(Status) ' + statusProblems[i]);
			}
			for (let i = 0; i < attackProblems.length; i++) {
				problems.push('(Attack) ' + attackProblems[i]);
			}
			return problems;
		}
	},
	{
		name: "LC UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3523929/\">LC UU</a>"],
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Anorith', 'Archen', 'Bunnelby', 'Carvanha', 'Chinchou', 'Corphish', 'Cottonee',
			'Croagunk', 'Diglett', 'Drifloon', 'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Fletchling', 'Foongus',
			'Gastly', 'Gothita', 'Houndour', 'Larvesta', 'Magnemite', 'Mienfoo', 'Munchlax', 'Omanyte', 'Onix', 'Pancham',
			'Pawniard', 'Ponyta', 'Porygon', 'Pumpkaboo-Super', 'Scraggy', 'Shellder', 'Skrelp', 'Snivy', 'Snubbull',
			'Spritzee', 'Staryu', 'Stunky', 'Surskit', 'Timburr', 'Tirtouga', 'Vullaby', 'Vulpix', 'Zigzagoon',
			'Shell Smash'
		]
	},
	{
		name: "Hackmons Cup",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item."],
		section: "Other Metagames",

		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547040/\">2v2 Doubles</a>"
		],
		section: "Other Metagames",

		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2
		},
		ruleset: ['Doubles OU'],
		banlist: ['Perish Song']
	},
	{
		name: "Averagemons",
		desc: [
			"Every Pok&eacute;mon has a stat spread of 100/100/100/100/100/100.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526481/\">Averagemons</a>"
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Sableye + Prankster', 'Shedinja', 'Smeargle', 'Venomoth',
			'DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Gengarite', 'Kangaskhanite', 'Light Ball', 'Mawilite', 'Medichamite', 'Soul Dew', 'Thick Club',
			'Arena Trap', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Chatter'
		]
	},
	{
		name: "Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3516349/\">Hidden Type</a>"
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'hiddentype',
		ruleset: ['OU']
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3541537/\">OU Theorymon</a>"],
		section: "Other Metagames",

		mod: 'theorymon',
		searchShow: false,
		ruleset: ['OU']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "Monotype Random Battle",
		section: "Other Metagames",

		team: 'randomMonotype',
		searchShow: false,
		ruleset: ['Pokemon', 'Same Type Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",
		column: 3,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>"
		],
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Doubles OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3485044/\">BW2 Doubles Viability Ranking</a>"],
		section: 'BW2 Doubles',
		column: 3,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>"
		],
		section: "Past Generations",
		column: 3,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446464/\">DPP Ubers Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus']
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 4] Doubles Custom Game",
		section: 'Past Generations',

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 3] OU",
		section: "Past Generations",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>"
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446466/\">ADV Ubers Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3507552/\">GSC Ubers Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard']
	},
	{
		name: "[Gen 2] Random Battle",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Standard']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>"
		],
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: []
	},
	{
		name: "[Gen 1] OU (tradeback)",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Random Battle",
		section: "Past Generations",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Challenge Cup",
		section: "Past Generations",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Stadium",
		section: "Past Generations",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	}
];
