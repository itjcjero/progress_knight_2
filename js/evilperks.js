/** 
 * Represents an individual perk configuration with a level limit and cost calculator.
 * @typedef {Object} EvilPerkConfigElement
 * @property {number} max The maximum allowed level for this perk.
 * @property {function(number): number} calc Function that calculates the cost for a given level.
 */

/**
 * The configuration object mapping perk IDs to their respective formulas.
 * @typedef {Record<number, EvilPerkConfigElement>} EvilPerkConfig
 */

const evilPerkCostsCache = {
	1: [],
	2: [],
	3: [],
	4: [],
	5: [],
	6: [],
	7: [],
	8: [],
	9: []
};

function initEvilPerkCostsCache() {
	/** @type {EvilPerkConfig} */
	const config = {
		1: { max: 10, calc: (lvl) => pow(2, lvl + 1) + 4.6 },
		2: { max: 14, calc: (lvl) => pow(3, lvl + 1) + 66.6 - 3 },
		3: { max: 9, calc: (lvl) => pow(5, lvl + 1) + 666.6 - 5 },
		4: {
			max: 18,
			calc: (lvl) => lvl < 9
				? pow(5, lvl + 1) + 6666 - 5
				: pow(6.66, lvl + 1) - 666 * 33 - 5e6
		},
		5: { max: 309, calc: (lvl) => pow(10, lvl) * 6.66e10 },
		6: { max: 10, calc: (lvl) => pow(15, lvl) * 1e5 },
		7: { max: 10, calc: (lvl) => pow(20, lvl) * 1e7 },
		8: { max: 10, calc: (lvl) => pow(25, lvl) * 1e9 },
		9: { max: 5, calc: (lvl) => pow(100, lvl) * 1e12 }
	};

	for (const num in config) {
		const perkId = Number(num);
		const { max, calc } = config[perkId];
		const cache = [];

		for (let lvl = 0; lvl < max; lvl++) {
			cache.push(calc(lvl));
		}

		cache.push(Infinity);
		evilPerkCostsCache[perkId] = cache;
	}
}

initEvilPerkCostsCache();

function ensureEvilPerksState() {
	if (!gameData.evil_perks) gameData.evil_perks = {};
	const defaults = {
		reduce_eye_requirement: 0,
		reduce_evil_requirement: 0,
		reduce_the_void_requirement: 0,
		reduce_celestial_requirement: 0,
		receive_essence: 0,
		dark_velocity: 0,
		abyssal_wisdom: 0,
		void_resonance: 0,
		cosmic_dominance: 0
	};
	for (const key in defaults) {
		if (typeof gameData.evil_perks[key] !== "number" || isNaN(gameData.evil_perks[key])) {
			gameData.evil_perks[key] = defaults[key];
		}
	}
}

function registerCustomEvilPerkTooltips() {
	if (typeof tooltipsData !== "undefined" && tooltipsData.evil_perk) {
		tooltipsData.evil_perk[6] = {
			title: "Dark Velocity",
			description: "Increases Evil Perks Points (EPP) generation by +15% per rank."
		};
		tooltipsData.evil_perk[7] = {
			title: "Abyssal Wisdom",
			description: "Multiplies all Job and Skill XP gain by 1.5x per rank."
		};
		tooltipsData.evil_perk[8] = {
			title: "Void Resonance",
			description: "Multiplies Evil and Essence gain by 1.5x per rank."
		};
		tooltipsData.evil_perk[9] = {
			title: "Cosmic Dominance",
			description: "Multiplies Game Speed and Dark Matter gain by 2x per rank."
		};
	}
}

if (typeof window !== "undefined") {
	window.addEventListener("DOMContentLoaded", registerCustomEvilPerkTooltips);
}

function getDarkVelocityBonus() {
	return 1 + ((gameData.evil_perks && gameData.evil_perks.dark_velocity) || 0) * 0.15;
}

function getAbyssalWisdomGain() {
	return pow(1.5, (gameData.evil_perks && gameData.evil_perks.abyssal_wisdom) || 0);
}

function getVoidResonanceGain() {
	return pow(1.5, (gameData.evil_perks && gameData.evil_perks.void_resonance) || 0);
}

function getCosmicDominanceGain() {
	return pow(2, (gameData.evil_perks && gameData.evil_perks.cosmic_dominance) || 0);
}

function getEvilPerksGeneration() {
	if (gameData.evil == 0) return 0;
	let essence_perk_buff_mult = 1e9;
	if (gameData.essence == 0)
		essence_perk_buff_mult = 10;
	else if (gameData.essence < 1e308 / essence_perk_buff_mult)
		essence_perk_buff_mult *= gameData.essence;
	else
		essence_perk_buff_mult = 1e308;

	return log10(gameData.evil + 1) * log10(essence_perk_buff_mult) / 365 * getDarkVelocityBonus();
}

function getEvilPerkAgeRequirement(i) {
	switch (i) {
		case 1: return getEyeRequirement();
		case 2: return getEvilRequirement();
		case 3: return getVoidRequirement();
		case 4: return getCelestialRequirement();
	}
	return 0;
}

function getEvilPerkAgeReduceBy(i) {
	switch (i) {
		case 1: return 5;
		case 2: return 12.5;
		case 3: return 100;
		case 4: return getCelestialReduceYearsBy();
	}
	return 0;
}

function getEvilPerkAgeReduceByTotal(i) {
	ensureEvilPerksState();
	switch (i) {
		case 1: return 5 * gameData.evil_perks.reduce_eye_requirement;
		case 2: return 12.5 * gameData.evil_perks.reduce_evil_requirement;
		case 3: return 100 * gameData.evil_perks.reduce_the_void_requirement;
		case 4: return gameData.evil_perks.reduce_celestial_requirement < 9
			? 1000 * gameData.evil_perks.reduce_celestial_requirement
			: 9000 + (gameData.evil_perks.reduce_celestial_requirement - 9) * 100;
	}
	return 0;
}

function getEyeRequirement() {
	let newreq = 65 - ((gameData.evil_perks && gameData.evil_perks.reduce_eye_requirement) || 0) * 5;
	return newreq < 15 ? 15 : newreq;
}

function getEvilRequirement() {
	let newreq = 200 - ((gameData.evil_perks && gameData.evil_perks.reduce_evil_requirement) || 0) * 12.5;
	newreq = newreq < 25 ? 25 : newreq;
	newreq = getEyeRequirement() > newreq ? getEyeRequirement() : newreq;
	return newreq;
}

function getVoidRequirement() {
	let newreq = 1000 - ((gameData.evil_perks && gameData.evil_perks.reduce_the_void_requirement) || 0) * 100;
	newreq = getEvilRequirement() > newreq ? getEvilRequirement() : newreq;
	return newreq < 100 ? 100 : newreq;
}

function getCelestialReduceYearsBy() {
	if (((gameData.evil_perks && gameData.evil_perks.reduce_celestial_requirement) || 0) < 9)
		return 1000;
	else
		return 100;
}

function getCelestialRequirement() {
	const rank = (gameData.evil_perks && gameData.evil_perks.reduce_celestial_requirement) || 0;
	let newreq = 10000;
	newreq -= min(9, rank) * 1000;
	if (rank > 9)
		newreq -= min(9, rank - 9) * 100;
	return newreq < 100 ? 100 : newreq;
}

function getEssenceReward() {
	return getEssenceRewardPercent() / 100.0 * gameData.essence;
}

function getEssenceRewardPercent() {
	return (((gameData.evil_perks && gameData.evil_perks.receive_essence) || 0) + 1) * 10;
}

function getEvilPerkCost(evilperknum) {
	ensureEvilPerksState();
	const currentLevels = [
		0,
		gameData.evil_perks.reduce_eye_requirement,
		gameData.evil_perks.reduce_evil_requirement,
		gameData.evil_perks.reduce_the_void_requirement,
		gameData.evil_perks.reduce_celestial_requirement,
		gameData.evil_perks.receive_essence,
		gameData.evil_perks.dark_velocity,
		gameData.evil_perks.abyssal_wisdom,
		gameData.evil_perks.void_resonance,
		gameData.evil_perks.cosmic_dominance
	];

	const lvl = currentLevels[evilperknum] || 0;
	const perkCache = evilPerkCostsCache[evilperknum];

	return perkCache ? perkCache[lvl] : Infinity;
}

function getEvilPerkRank(i) {
	ensureEvilPerksState();
	switch (i) {
		case 1: return gameData.evil_perks.reduce_eye_requirement;
		case 2: return gameData.evil_perks.reduce_evil_requirement;
		case 3: return gameData.evil_perks.reduce_the_void_requirement;
		case 4: return gameData.evil_perks.reduce_celestial_requirement;
		case 5: return gameData.evil_perks.receive_essence;
		case 6: return gameData.evil_perks.dark_velocity;
		case 7: return gameData.evil_perks.abyssal_wisdom;
		case 8: return gameData.evil_perks.void_resonance;
		case 9: return gameData.evil_perks.cosmic_dominance;
	}
	return 0;
}

function buyEvilPerk(evilperknum) {
	ensureEvilPerksState();
	let cost = getEvilPerkCost(evilperknum);
	if (gameData.evil_perks_points < cost) return;

	switch (evilperknum) {
		case 1:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.reduce_eye_requirement += 1;
			break;
		case 2:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.reduce_evil_requirement += 1;
			break;
		case 3:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.reduce_the_void_requirement += 1;
			break;
		case 4:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.reduce_celestial_requirement += 1;
			break;
		case 5:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.receive_essence += 1;
			gameData.essence += getEssenceReward();
			break;
		case 6:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.dark_velocity += 1;
			break;
		case 7:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.abyssal_wisdom += 1;
			break;
		case 8:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.void_resonance += 1;
			break;
		case 9:
			gameData.evil_perks_points -= cost;
			gameData.evil_perks.cosmic_dominance += 1;
			break;
	}
}

function hasEvilPerk(i) {
	return getEvilPerkRank(i) > 0;
}

function getAge0Requirement() {
	const eyeReq = getEyeRequirement();
	const ageMap = {
		65: 25, 60: 25, 55: 25, 50: 25, 45: 25, 40: 25,
		35: 20, 30: 20,
		25: 18,
		20: 16,
		15: 13
	};
	return ageMap[eyeReq] || 25;
}

function getAge1Requirement() {
	const eyeReq = getEyeRequirement();
	const ageMap = {
		65: 45, 60: 45, 55: 45, 50: 45,
		45: 40,
		40: 35,
		35: 30,
		30: 25,
		25: 20,
		20: 18,
		15: 14
	};
	return ageMap[eyeReq] || 45;
}
