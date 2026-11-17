/**
 * @typedef {Object} EvilPerks
 * @property {number} reduce_eye_requirement
 * @property {number} reduce_evil_requirement
 * @property {number} reduce_the_void_requirement
 * @property {number} reduce_celestial_requirement
 * @property {number} receive_essence
 */

/**
 * @typedef {Object} MetaversePerks
 * @property {boolean} auto_dark_orb
 * @property {boolean} auto_dark_shop
 * @property {boolean} auto_boost
 * @property {boolean} instant_evil
 * @property {boolean} instant_essence
 * @property {boolean} hypercube_boost
 * @property {boolean} positive_dark_mater_skills
 * @property {boolean} save_challenges
 * @property {boolean} auto_sacrifice
 * @property {boolean} double_perk_points_gain
 * @property {boolean} instant_dark_matter
 * @property {boolean} keep_dark_mater_skills
 * @property {boolean} hyper_speed
 * @property {boolean} both_dark_mater_skills
 * @property {boolean} evil_booster
 * @property {boolean} more_perk_points
 */

/**
 * @typedef {Object} GameSettings
 * @property {boolean} stickySidebar
 * @property {boolean} sidebarVisible
 * @property {boolean} EPSidebar
 * @property {number} theme
 * @property {number} currencyNotation
 * @property {number} numberNotation
 * @property {number} layout
 * @property {number} fontSize
 * @property {Tab} selectedTab
 * @property {string} settingsTab
 * @property {string} darkMatterTab
 * @property {string} metaverseTab
 * @property {boolean} enableKeybinds
 * @property {boolean} requireShiftForTooltip
 * @property {boolean} taskAnimations
 */

/**
 * @typedef {Object} GameStats
 * @property {Date} startDate
 * @property {number | null} fastest1
 * @property {number | null} fastest2
 * @property {number | null} fastest3
 * @property {number | null} fastest4
 * @property {number | null} fastestGame
 * @property {number} EvilPerSecond
 * @property {number} maxEvilPerSecond
 * @property {number} maxEvilPerSecondRt
 * @property {number} EssencePerSecond
 * @property {number} maxEssencePerSecond
 * @property {number} maxEssencePerSecondRt
 * @property {number} maxEssenceReached
 */

/**
 * @typedef {Object} GameChallenges
 * @property {number} an_unhappy_life
 * @property {number} rich_and_the_poor
 * @property {number} time_does_not_fly
 * @property {number} dance_with_the_devil
 * @property {number} legends_never_die
 * @property {number} the_darkest_time
 */

/**
 * @typedef {Object} DarkMatterShop
 * @property {number} dark_orb_generator
 * @property {number} a_deal_with_the_chairman
 * @property {number} a_gift_from_god
 * @property {number} life_coach
 * @property {number} gotta_be_fast
 * @property {boolean} a_miracle
 * @property {number} speed_is_life
 * @property {number} your_greatest_debt
 * @property {number} essence_collector
 * @property {number} explosion_of_the_universe
 * @property {number} multiverse_explorer
 */

/**
 * @typedef {Object} MetaverseModifiers
 * @property {number} boost_cooldown_modifier
 * @property {number} boost_timer_modifier
 * @property {number} boost_warp_modifier
 * @property {number} hypercube_gain_modifier
 * @property {number} evil_tran_gain
 * @property {number} essence_gain_modifier
 * @property {number} challenge_altar
 * @property {number} dark_mater_gain_modifer
 */

/**
 * @typedef {Object} GameData
 * @property {Record<string, Job | Skill>} taskData
 * @property {Record<string, Job>} jobData
 * @property {Record<string, Skill>} skillData
 * @property {Record<string, Item>} itemData
 * @property {Record<string, number>} savedMaxLevels
 * @property {Record<string, boolean>} viewedTabs
 * @property {Record<string, Requirement>} requirements
 * @property {string[]} completed_requirements
 * @property {boolean} p4
 * @property {number} coins
 * @property {number} days
 * @property {boolean} is_alive
 * @property {number} totalDays
 * @property {number} evil
 * @property {number} evil_perks_points
 * @property {EvilPerks & Record<string, number>} evil_perks
 * @property {boolean} evil_perks_keep
 * @property {number} essence
 * @property {number} dark_matter
 * @property {number} dark_orbs
 * @property {number} hypercubes
 * @property {number} perks_points
 * @property {MetaversePerks & Record<string, boolean>} perks
 * @property {boolean} paused
 * @property {boolean} timeWarpingEnabled
 * @property {number} rebirthOneCount
 * @property {number} rebirthOneTime
 * @property {number} rebirthTwoCount
 * @property {number} rebirthTwoTime
 * @property {number} rebirthThreeCount
 * @property {number} rebirthThreeTime
 * @property {number} rebirthFourCount
 * @property {number} rebirthFourTime
 * @property {number} rebirthFiveCount
 * @property {number} rebirthFiveTime
 * @property {Item | null} currentProperty
 * @property {Item[]} currentMisc
 * @property {GameSettings} settings
 * @property {GameStats & Record<string, any> } stats
 * @property {string} active_challenge
 * @property {GameChallenges & Record<string, number>} challenges
 * @property {Record<string, number>} challengeBonuses
 * @property {DarkMatterShop} dark_matter_shop
 * @property {MetaverseModifiers} metaverse
 * @property {number} realtime
 * @property {number} realtimeRun
 * @property {number} boost_cooldown
 * @property {number} boost_timer
 * @property {boolean} boost_active
 * @property {number} save_date_time
 * @property {boolean} p5
 * @property {number} game_speed
 */

/** @type {GameData & Record<string, any>} */
var gameData = {
    taskData: {},
    jobData: {},
    skillData: {},
    itemData: {},
    savedMaxLevels: {},
    viewedTabs: {},
    requirements: {},

    completed_requirements: [],

    coins: 0,
    days: 365 * 14,
    is_alive: true,
    totalDays: 0,
    evil: 0,
    evil_perks_points: 0,
    evil_perks: {
        reduce_eye_requirement: 0,
        reduce_evil_requirement: 0,
        reduce_the_void_requirement: 0,
        reduce_celestial_requirement: 0,
        receive_essence: 0,
        dark_velocity: 0,
        abyssal_wisdom: 0,
        void_resonance: 0,
        cosmic_dominance: 0
    },
    evil_perks_keep: false,
    essence: 0,
    dark_matter: 0,
    dark_orbs: 0,
    hypercubes: 0,
    perks_points: 0,

    perks: {
        auto_dark_orb: false,
        auto_dark_shop: false,
        auto_boost: false,
        instant_evil: false,
        instant_essence: false,
        hypercube_boost: false,
        positive_dark_mater_skills: false,
        save_challenges: false,
        auto_sacrifice: false,
        double_perk_points_gain: false,
        instant_dark_matter: false,
        keep_dark_mater_skills: false,
        hyper_speed: false,
        both_dark_mater_skills: false,
        evil_booster: false,
        more_perk_points: false
    },

    paused: false,
    timeWarpingEnabled: true,

    rebirthOneCount: 0,
    rebirthOneTime: 0,
    rebirthTwoCount: 0,
    rebirthTwoTime: 0,
    rebirthThreeCount: 0,
    rebirthThreeTime: 0,
    rebirthFourCount: 0,
    rebirthFourTime: 0,
    rebirthFiveCount: 0,
    rebirthFiveTime: 0,

    currentProperty: null,
    currentMisc: [],

    settings: {
        stickySidebar: true,
        sidebarVisible: true,
        EPSidebar: false,
        theme: 1,
        currencyNotation: 0,
        numberNotation: 1,
        layout: 0,
        fontSize: 3,
        selectedTab: 'jobs',
        settingsTab: 'settingsTab',
        darkMatterTab: 'shopTab',
        metaverseTab: 'metaverseTab1',
        enableKeybinds: false,
        requireShiftForTooltip: false,
        taskAnimations: true,
    },
    stats: {
        startDate: new Date(),
        fastest1: null,
        fastest2: null,
        fastest3: null,
        fastest4: null,
        fastestGame: null,
        EvilPerSecond: 0,
        maxEvilPerSecond: 0,
        maxEvilPerSecondRt: 0,
        EssencePerSecond: 0,
        maxEssencePerSecond: 0,
        maxEssencePerSecondRt: 0,
        maxEssenceReached: 0,
    },
    active_challenge: "",
    challenges: {
        an_unhappy_life: 0,
        rich_and_the_poor: 0,
        time_does_not_fly: 0,
        dance_with_the_devil: 0,
        legends_never_die: 0,
        the_darkest_time: 0,
    },
    challengeBonuses: {},
    dark_matter_shop: {
        // Upgradables.
        dark_orb_generator: 0,
        a_deal_with_the_chairman: 0,
        a_gift_from_god: 0,
        life_coach: 0,
        gotta_be_fast: 0,

        // Permanent unlocks
        a_miracle: false,

        // SKill tree
        speed_is_life: 0,
        your_greatest_debt: 0,
        essence_collector: 0,
        explosion_of_the_universe: 0,
        multiverse_explorer: 0,
    },
    metaverse: {
        boost_cooldown_modifier: 1,
        boost_timer_modifier: 1,
        boost_warp_modifier: 100,
        hypercube_gain_modifier: 1,
        evil_tran_gain: 0,
        essence_gain_modifier: 0,
        challenge_altar: 0,
        dark_mater_gain_modifer: 0,
    },

    realtime: 0.0,
    realtimeRun: 0.0,

    // new 3.0 stuff    
    boost_cooldown: 0.0,
    boost_timer: 0.0,
    boost_active: false,

    save_date_time: 0,
    p4: false,
    p5: false,
    game_speed: 0
}

var tempData = { hasError: false }

var autoBuyEnabled = true

const updateSpeed = 20
const gameTickLength = 1000 / updateSpeed // 50 ms
const saveTickLength = 3000 // 3s
const baseLifespan = 365 * 70
const baseGameSpeed = 4
const heroIncomeMult = 2.5e18

const tabToRequirementMap = {
    'evilperks': 'Evil perks',
    'challenges': 'Challenges',
    'milestones': 'Dark Matter',
    'rebirth': 'Rebirth tab',
    'darkMatter': 'Dark Matter',
    'metaverse': 'Metaverse'
}

const tabRequirementKeys = new Set(Object.values(tabToRequirementMap))


const permanentUnlocks = new Set(["Quick task display", "Evil perks", "Evil perk essence", "Evil perk essence SideBar", "Rebirth tab", "Challenges", "Milestones",
    "Dark Matter", "Dark Matter Skills", "Dark Matter Skills2",

    // sidebar resources
    "Evil info", "Essence info", "Dark Matter info", "Dark Orbs info", "Hypercubes info",

    // challenge cards
    "Challenge1", "Challenge2", "Challenge3", "Challenge4", "Challenge5", "Challenge6",

    // mataverse unlocks
    "Metaverse", "Reduce Boost Cooldown", "Increase Boost Duration", "Increase Hypercube Gain", "Gain evil at new transcension",
    "Essence gain multiplier", "Challenges are not reset", "Dark Matter gain multiplier", "Metaverse Perks", "Metaverse Perks Button", "Congratulations"])


/** 
 * Structure of a Event entity 
 * @typedef {Object} EventEntity
 * @property {string} name
 * @property {string} desc 
 * @property {string} effect
 * @property {number} mult
 * @property {string} style
 */

/** 
 * @type {Record<number, EventEntity>} 
 */
const eventsData = {
    1: { name: "Winter Wind", desc: "You're in a hurry, pal!", effect: "Time Warping x", mult: 10, style: "color-time-warping" },
    2: { name: "Claustrophobic", desc: "No more of this thing!", effect: "Essence gain x", mult: 10, style: "color-essence" },
    3: { name: "Theme park", desc: "Clowns are happy!", effect: "Happiness x", mult: 10, style: "color-happiness" },
    4: { name: "Oblivion", desc: "Get the hell out of here!", effect: "Evil gain x", mult: 10, style: "color-evil" },
    5: { name: "Treasure Goblin", desc: "Yipee!", effect: "Money gain x", mult: 10, style: "color-income" },
    6: { name: "The Darkness", desc: "No kidding", effect: "Dark Matter gain x", mult: 10, style: "color-dark-matter" }
}


/** 
 * @typedef JobBaseData
 * @property {string} name
 * @property {number} maxXp 
 * @property {number} heroxp
 * @property {number} income
 */

/** 
 * @type {Record<string, JobBaseData>} 
 */
const jobBaseData = {
    "Beggar": { name: "Beggar", maxXp: 50, income: 5, heroxp: 36 },
    "Farmer": { name: "Farmer", maxXp: 100, income: 9, heroxp: 37 },
    "Fisherman": { name: "Fisherman", maxXp: 200, income: 15, heroxp: 38 },
    "Miner": { name: "Miner", maxXp: 400, income: 40, heroxp: 39 },
    "Blacksmith": { name: "Blacksmith", maxXp: 800, income: 80, heroxp: 40 },
    "Merchant": { name: "Merchant", maxXp: 1600, income: 150, heroxp: 41 },

    "Squire": { name: "Squire", maxXp: 42, income: 5, heroxp: 51 },
    "Footman": { name: "Footman", maxXp: 1000, income: 50, heroxp: 52 },
    "Veteran footman": { name: "Veteran footman", maxXp: 10000, income: 120, heroxp: 53 },
    "Centenary": { name: "Centenary", maxXp: 100000, income: 300, heroxp: 54 },
    "Knight": { name: "Knight", maxXp: 1000000, income: 1000, heroxp: 57 },
    "Veteran Knight": { name: "Veteran Knight", maxXp: 7500000, income: 3000, heroxp: 61 },
    "Holy Knight": { name: "Holy Knight", maxXp: 4e7, income: 5000, heroxp: 64 },
    "Lieutenant General": { name: "Lieutenant General", maxXp: 1.5e8, income: 50000, heroxp: 77 },

    "Student": { name: "Student", maxXp: 1e5, income: 100, heroxp: 79 },
    "Apprentice Mage": { name: "Apprentice Mage", maxXp: 1e6, income: 1000, heroxp: 82 },
    "Adept Mage": { name: "Adept Mage", maxXp: 1e7, income: 9500, heroxp: 82 },
    "Master Wizard": { name: "Master Wizard", maxXp: 1e8, income: 70000, heroxp: 95 },
    "Archmage": { name: "Archmage", maxXp: 1e10, income: 350000, heroxp: 95 },
    "Chronomancer": { name: "Chronomancer", maxXp: 2e12, income: 1000000, heroxp: 95 },
    "Chairman": { name: "Chairman", maxXp: 2e13, income: 10000000, heroxp: 106 },
    "Imperator": { name: "Imperator", maxXp: 9e15, income: 60000000, heroxp: 129 },

    "Corrupted": { name: "Corrupted", maxXp: 1e14, income: 2.5e7, heroxp: 131 },
    "Void Slave": { name: "Void Slave", maxXp: 6.5e14, income: 2e8, heroxp: 134 },
    "Void Fiend": { name: "Void Fiend", maxXp: 1.8e16, income: 6e8, heroxp: 237 },
    "Abyss Anomaly": { name: "Abyss Anomaly", maxXp: 1.8e16, income: 1.2e9, heroxp: 237 },
    "Void Wraith": { name: "Void Wraith", maxXp: 1.8e17, income: 5e9, heroxp: 238 },
    "Void Reaver": { name: "Void Reaver", maxXp: 2.6e18, income: 2.5e10, heroxp: 238 },
    "Void Lord": { name: "Void Lord", maxXp: 2.8e19, income: 1e11, heroxp: 238 },
    "Abyss God": { name: "Abyss God", maxXp: 4e20, income: 1e12, heroxp: 250 },

    "Eternal Wanderer": { name: "Eternal Wanderer", maxXp: 5.5e19, income: 1e12, heroxp: 250 },
    "Nova": { name: "Nova", maxXp: 5.1e19, income: 3e12, heroxp: 250 },
    "Sigma Proioxis": { name: "Sigma Proioxis", maxXp: 5e20, income: 2.15e13, heroxp: 260 },
    "Acallaris": { name: "Acallaris", maxXp: 5e22, income: 2.15e14, heroxp: 263 },
    "One Above All": { name: "One Above All", maxXp: 5e27, income: 2.5e16, heroxp: 265 },

    "Snow Crash": { name: "Snow Crash", maxXp: Infinity, income: 2.5e52, heroxp: 1015 },
    "Player One": { name: "Player One", maxXp: Infinity, income: 2.5e54, heroxp: 1200 },
    "Lost in the dark": { name: "Lost in the dark", maxXp: Infinity, income: 2.5e58, heroxp: 1358 },
    "Omega": { name: "Omega", maxXp: Infinity, income: 2.5e62, heroxp: 3120 },

    // Underworld (Early/Mid-Game: alternativa rápida focada em ouro)
    "Pickpocket": { name: "Pickpocket", maxXp: 150, income: 12, heroxp: 38 },
    "Smuggler": { name: "Smuggler", maxXp: 600, income: 65, heroxp: 40 },
    "Spy": { name: "Spy", maxXp: 5000, income: 220, heroxp: 52 },
    "Assassin": { name: "Assassin", maxXp: 50000, income: 600, heroxp: 55 },
    "Syndicate Boss": { name: "Syndicate Boss", maxXp: 500000, income: 2200, heroxp: 58 },
    "Shadow King": { name: "Shadow King", maxXp: 5000000, income: 12000, heroxp: 63 },

    // Alchemy & Artificing (Mid-Game: ponte entre Blacksmith e Arcane)
    "Herb Gatherer": { name: "Herb Gatherer", maxXp: 2500, income: 180, heroxp: 42 },
    "Apothecary": { name: "Apothecary", maxXp: 25000, income: 450, heroxp: 54 },
    "Alchemist": { name: "Alchemist", maxXp: 250000, income: 1800, heroxp: 60 },
    "Golem Crafter": { name: "Golem Crafter", maxXp: 2500000, income: 8500, heroxp: 78 },
    "Grand Artificer": { name: "Grand Artificer", maxXp: 2.5e7, income: 45000, heroxp: 85 },
    "Philosopher": { name: "Philosopher", maxXp: 5e8, income: 220000, heroxp: 96 },

    // Celestial Order (Late-Game: paralelo entre Arcane e Void)
    "Acolyte": { name: "Acolyte", maxXp: 1e9, income: 300000, heroxp: 95 },
    "Cleric": { name: "Cleric", maxXp: 5e10, income: 2500000, heroxp: 100 },
    "Inquisitor": { name: "Inquisitor", maxXp: 1e12, income: 1.5e7, heroxp: 115 },
    "Archangel": { name: "Archangel", maxXp: 5e13, income: 9e7, heroxp: 130 },
    "Seraph": { name: "Seraph", maxXp: 2e15, income: 5e8, heroxp: 180 },
    "Astral Sovereign": { name: "Astral Sovereign", maxXp: 5e16, income: 3e9, heroxp: 240 },

    // Technomancy (Endgame: ponte entre Galactic Council e Metaverse Guards)
    "Scrap Tinkerer": { name: "Scrap Tinkerer", maxXp: 1e28, income: 1e18, heroxp: 300 },
    "Clockwork Engineer": { name: "Clockwork Engineer", maxXp: 1e31, income: 1e24, heroxp: 420 },
    "Aether Mechanic": { name: "Aether Mechanic", maxXp: 1e35, income: 1e32, heroxp: 580 },
    "Cyber-Mage": { name: "Cyber-Mage", maxXp: 1e40, income: 1e40, heroxp: 750 },
    "Singularity Architect": { name: "Singularity Architect", maxXp: 1e46, income: 1e48, heroxp: 920 },
}


/** 
 * @typedef SkillBaseData
 * @property {string} name
 * @property {number} maxXp 
 * @property {number} heroxp
 * @property {number} effect
 * @property {string} description
 */

/** 
 * @type {Record<string, SkillBaseData>} 
 */
const skillBaseData = {
    "Concentration": { name: "Concentration", maxXp: 100, heroxp: 36, effect: 0.01, description: "Skill XP" },
    "Productivity": { name: "Productivity", maxXp: 100, heroxp: 37, effect: 0.01, description: "Hero XP" },
    "Bargaining": { name: "Bargaining", maxXp: 100, heroxp: 38, effect: -0.01, description: "Reduced Expenses" },
    "Meditation": { name: "Meditation", maxXp: 100, heroxp: 39, effect: 0.01, description: "Happiness" },

    "Strength": { name: "Strength", maxXp: 100, heroxp: 40, effect: 0.01, description: "Military Pay" },
    "Battle Tactics": { name: "Battle Tactics", maxXp: 100, heroxp: 41, effect: 0.01, description: "Military XP" },
    "Muscle Memory": { name: "Muscle Memory", maxXp: 100, heroxp: 42, effect: 0.01, description: "Strength XP" },

    "Mana Control": { name: "Mana Control", maxXp: 100, heroxp: 46, effect: 0.01, description: "T.A.A. XP" },
    "Life Essence": { name: "Life Essence", maxXp: 100, heroxp: 82, effect: 0.01, description: "Longer Lifespan" },
    "Time Warping": { name: "Time Warping", maxXp: 100, heroxp: 82, effect: 0.01, description: "Gamespeed" },
    "Astral Body": { name: "Astral Body", maxXp: 100, heroxp: 100, effect: 0.0035, description: "Longer lifespan" },
    "Temporal Dimension": { name: "Temporal Dimension", maxXp: 100, heroxp: 115, effect: 0.006, description: "Gamespeed" },
    "All Seeing Eye": { name: "All Seeing Eye", maxXp: 100, heroxp: 120, effect: 0.0027, description: "T.A.A Pay" },
    "Brainwashing": { name: "Brainwashing", maxXp: 100, heroxp: 145, effect: -0.01, description: "Reduced Expenses" },

    "Dark Influence": { name: "Dark Influence", maxXp: 100, heroxp: 155, effect: 0.01, description: "All XP" },
    "Evil Control": { name: "Evil Control", maxXp: 100, heroxp: 156, effect: 0.011, description: "Evil Gain" },
    "Intimidation": { name: "Intimidation", maxXp: 100, heroxp: 157, effect: -0.01, description: "Reduced Expenses" },
    "Demon Training": { name: "Demon Training", maxXp: 100, heroxp: 174, effect: 0.01, description: "All XP" },
    "Blood Meditation": { name: "Blood Meditation", maxXp: 100, heroxp: 176, effect: 0.01, description: "Evil Gain" },
    "Demon's Wealth": { name: "Demon's Wealth", maxXp: 100, heroxp: 178, effect: 0.002, description: "Hero Pay" },
    "Dark Knowledge": { name: "Dark Knowledge", maxXp: 100, heroxp: 180, effect: 0.003, description: "Hero XP" },

    "Void Influence": { name: "Void Influence", maxXp: 100, heroxp: 206, effect: 0.0028, description: "All XP" },
    "Time Loop": { name: "Time Loop", maxXp: 100, heroxp: 207, effect: 0.001, description: "Gamespeed" },
    "Evil Incarnate": { name: "Evil Incarnate", maxXp: 100, heroxp: 208, effect: 0.01, description: "Skill XP" },
    "Absolute Wish": { name: "Absolute Wish", maxXp: 100, heroxp: 198, effect: 0.005, description: "Evil Gain" },
    "Void Amplification": { name: "Void Amplification", maxXp: 100, heroxp: 251, effect: 0.01, description: "The Void XP" },
    "Mind Release": { name: "Mind Release", maxXp: 100, heroxp: 251, effect: 0.0006, description: "Increased Happiness" },
    "Ceaseless Abyss": { name: "Ceaseless Abyss", maxXp: 100, heroxp: 251, effect: 0.000585, description: "Longer Lifespan" },
    "Void Symbiosis": { name: "Void Symbiosis", maxXp: 100, heroxp: 253, effect: 0.0015, description: "Skill XP" },
    "Void Embodiment": { name: "Void Embodiment", maxXp: 100, heroxp: 258, effect: 0.0025, description: "Evil Gain" },
    "Abyss Manipulation": { name: "Abyss Manipulation", maxXp: 100, heroxp: 266, effect: -0.01, description: "Reduced Expenses" },

    "Cosmic Longevity": { name: "Cosmic Longevity", maxXp: 100, heroxp: 266, effect: 0.0015, description: "Longer Lifespan" },
    "Cosmic Recollection": { name: "Cosmic Recollection", maxXp: 100, heroxp: 272, effect: 0.00065, description: "Max Lvl Multiplier" },
    "Essence Collector": { name: "Essence Collector", maxXp: 100, heroxp: 288, effect: 0.01, description: "Essence Gain" },
    "Galactic Command": { name: "Galactic Command", maxXp: 100, heroxp: 290, effect: -0.01, description: "Reduced Expenses" },

    "Yin Yang": { name: "Yin Yang", maxXp: 100, heroxp: 290, effect: 0.020, description: "Essence + Evil Gain" },
    "Parallel Universe": { name: "Parallel Universe", maxXp: 100, heroxp: 300, effect: 0.02, description: "All XP" },
    "Higher Dimensions": { name: "Higher Dimensions", maxXp: 100, heroxp: 300, effect: 0.001, description: "Longer Lifespan" },
    "Epiphany": { name: "Epiphany", maxXp: 100, heroxp: 280, effect: 0.012, description: "Galactic Council XP" },


    "Dark Prince": { name: "Dark Prince", maxXp: 100, heroxp: 1109, effect: 0.01, description: "Skill XP" },
    "Dark Ruler": { name: "Dark Ruler", maxXp: 100, heroxp: 1190, effect: 0.00003, description: "Dark Matter Gain" },
    "Immortal Ruler": { name: "Immortal Ruler", maxXp: 100, heroxp: 1200, effect: 0.01, description: "All XP" },
    "Dark Magician": { name: "Dark Magician", maxXp: 100, heroxp: 1300, effect: 0.0001, description: "Essence Gain" },
    "Universal Ruler": { name: "Universal Ruler", maxXp: 100, heroxp: 1350, effect: 1, description: "Magic XP" },
    "Blinded By Darkness": { name: "Blinded By Darkness", maxXp: 100, heroxp: 1430, effect: 1, description: "All XP" },
    // --- FUNDAMENTALS (12 novas) ---
    "Posture": { name: "Posture", maxXp: 100, heroxp: 36, effect: 0.008, description: "Skill XP" },
    "Time Management": { name: "Time Management", maxXp: 100, heroxp: 37, effect: 0.008, description: "Hero XP" },
    "Bookkeeping": { name: "Bookkeeping", maxXp: 100, heroxp: 38, effect: -0.01, description: "Reduced Expenses" },
    "Deep Breathing": { name: "Deep Breathing", maxXp: 100, heroxp: 39, effect: 0.008, description: "Happiness" },
    "Focus": { name: "Focus", maxXp: 100, heroxp: 40, effect: 0.008, description: "Fundamentals XP" },
    "Memory Palace": { name: "Memory Palace", maxXp: 100, heroxp: 42, effect: 0.009, description: "Skill XP" },
    "Haggling": { name: "Haggling", maxXp: 100, heroxp: 44, effect: -0.01, description: "Reduced Expenses" },
    "Mindfulness": { name: "Mindfulness", maxXp: 100, heroxp: 46, effect: 0.009, description: "Happiness" },
    "Discipline": { name: "Discipline", maxXp: 100, heroxp: 48, effect: 0.009, description: "Hero XP" },
    "Speed Reading": { name: "Speed Reading", maxXp: 100, heroxp: 50, effect: 0.01, description: "Fundamentals XP" },
    "Frugality": { name: "Frugality", maxXp: 100, heroxp: 52, effect: -0.01, description: "Reduced Expenses" },
    "Serenity": { name: "Serenity", maxXp: 100, heroxp: 55, effect: 0.01, description: "Happiness" },

    // --- COMBAT (12 novas) ---
    "Endurance": { name: "Endurance", maxXp: 100, heroxp: 43, effect: 0.008, description: "Strength XP" },
    "Swordsmanship": { name: "Swordsmanship", maxXp: 100, heroxp: 45, effect: 0.008, description: "Military XP" },
    "Shield Defense": { name: "Shield Defense", maxXp: 100, heroxp: 47, effect: 0.008, description: "Military Pay" },
    "Footwork": { name: "Footwork", maxXp: 100, heroxp: 49, effect: 0.009, description: "Combat XP" },
    "Weapon Mastery": { name: "Weapon Mastery", maxXp: 100, heroxp: 52, effect: 0.009, description: "Military XP" },
    "Formation": { name: "Formation", maxXp: 100, heroxp: 55, effect: 0.009, description: "Military Pay" },
    "Conditioning": { name: "Conditioning", maxXp: 100, heroxp: 58, effect: 0.01, description: "Strength XP" },
    "Parry": { name: "Parry", maxXp: 100, heroxp: 60, effect: 0.01, description: "Combat XP" },
    "War Strategy": { name: "War Strategy", maxXp: 100, heroxp: 63, effect: 0.01, description: "Military XP" },
    "Iron Body": { name: "Iron Body", maxXp: 100, heroxp: 66, effect: 0.011, description: "Military Pay" },
    "Battle Instinct": { name: "Battle Instinct", maxXp: 100, heroxp: 70, effect: 0.011, description: "Combat XP" },
    "Warlord Aura": { name: "Warlord Aura", maxXp: 100, heroxp: 75, effect: 0.012, description: "Military Pay" },

    // --- MAGIC (12 novas) ---
    "Arcane Flow": { name: "Arcane Flow", maxXp: 100, heroxp: 50, effect: 0.008, description: "Magic XP" },
    "Spellcasting": { name: "Spellcasting", maxXp: 100, heroxp: 60, effect: 0.008, description: "T.A.A. XP" },
    "Runic Lore": { name: "Runic Lore", maxXp: 100, heroxp: 70, effect: 0.0025, description: "T.A.A Pay" },
    "Mana Fountain": { name: "Mana Fountain", maxXp: 100, heroxp: 80, effect: 0.009, description: "Magic XP" },
    "Enchantment": { name: "Enchantment", maxXp: 100, heroxp: 88, effect: 0.009, description: "T.A.A. XP" },
    "Telekinesis": { name: "Telekinesis", maxXp: 100, heroxp: 94, effect: 0.003, description: "T.A.A Pay" },
    "Divination": { name: "Divination", maxXp: 100, heroxp: 102, effect: 0.005, description: "Skill XP" },
    "Alchemy Mastery": { name: "Alchemy Mastery", maxXp: 100, heroxp: 108, effect: 0.01, description: "Alchemy XP" },
    "Chrono Sense": { name: "Chrono Sense", maxXp: 100, heroxp: 114, effect: 0.004, description: "Gamespeed" },
    "Astral Projection": { name: "Astral Projection", maxXp: 100, heroxp: 122, effect: 0.003, description: "Longer Lifespan" },
    "Archmage Will": { name: "Archmage Will", maxXp: 100, heroxp: 130, effect: 0.0035, description: "T.A.A Pay" },
    "Reality Bending": { name: "Reality Bending", maxXp: 100, heroxp: 140, effect: 0.01, description: "Magic XP" },

    // --- DARK MAGIC (12 novas) ---
    "Shadow Whisper": { name: "Shadow Whisper", maxXp: 100, heroxp: 158, effect: 0.008, description: "All XP" },
    "Cursed Pact": { name: "Cursed Pact", maxXp: 100, heroxp: 160, effect: 0.009, description: "Evil Gain" },
    "Fear Aura": { name: "Fear Aura", maxXp: 100, heroxp: 162, effect: -0.01, description: "Reduced Expenses" },
    "Soul Harvest": { name: "Soul Harvest", maxXp: 100, heroxp: 165, effect: 0.01, description: "Evil Gain" },
    "Hellfire": { name: "Hellfire", maxXp: 100, heroxp: 168, effect: 0.009, description: "All XP" },
    "Demonic Pact": { name: "Demonic Pact", maxXp: 100, heroxp: 172, effect: 0.002, description: "Hero Pay" },
    "Forbidden Tome": { name: "Forbidden Tome", maxXp: 100, heroxp: 175, effect: 0.003, description: "Hero XP" },
    "Abyssal Chant": { name: "Abyssal Chant", maxXp: 100, heroxp: 182, effect: 0.011, description: "Evil Gain" },
    "Corruption": { name: "Corruption", maxXp: 100, heroxp: 186, effect: 0.009, description: "Dark Magic XP" },
    "Nether Ritual": { name: "Nether Ritual", maxXp: 100, heroxp: 190, effect: 0.012, description: "Evil Gain" },
    "Dark Sovereign": { name: "Dark Sovereign", maxXp: 100, heroxp: 196, effect: 0.0025, description: "Hero Pay" },
    "Apocalypse": { name: "Apocalypse", maxXp: 100, heroxp: 202, effect: 0.01, description: "All XP" },

    // --- VOID MANIPULATION (12 novas) ---
    "Void Step": { name: "Void Step", maxXp: 100, heroxp: 210, effect: 0.0025, description: "All XP" },
    "Null Barrier": { name: "Null Barrier", maxXp: 100, heroxp: 215, effect: 0.0005, description: "Longer Lifespan" },
    "Entropy Touch": { name: "Entropy Touch", maxXp: 100, heroxp: 222, effect: 0.008, description: "The Void XP" },
    "Rift Walking": { name: "Rift Walking", maxXp: 100, heroxp: 228, effect: 0.0008, description: "Gamespeed" },
    "Void Sight": { name: "Void Sight", maxXp: 100, heroxp: 235, effect: 0.0015, description: "Skill XP" },
    "Abyssal Echo": { name: "Abyssal Echo", maxXp: 100, heroxp: 242, effect: 0.0025, description: "Evil Gain" },
    "Oblivion Gaze": { name: "Oblivion Gaze", maxXp: 100, heroxp: 248, effect: 0.009, description: "The Void XP" },
    "Dark Rift": { name: "Dark Rift", maxXp: 100, heroxp: 254, effect: 0.0005, description: "Increased Happiness" },
    "Void Convergence": { name: "Void Convergence", maxXp: 100, heroxp: 260, effect: 0.002, description: "Skill XP" },
    "Singularity": { name: "Singularity", maxXp: 100, heroxp: 264, effect: 0.003, description: "All XP" },
    "Null Dominion": { name: "Null Dominion", maxXp: 100, heroxp: 268, effect: -0.01, description: "Reduced Expenses" },
    "Abyssal Ascension": { name: "Abyssal Ascension", maxXp: 100, heroxp: 270, effect: 0.012, description: "The Void XP" },

    // --- CELESTIAL POWERS (12 novas) ---
    "Starlight": { name: "Starlight", maxXp: 100, heroxp: 268, effect: 0.001, description: "Longer Lifespan" },
    "Nebula Weaving": { name: "Nebula Weaving", maxXp: 100, heroxp: 270, effect: 0.008, description: "Galactic Council XP" },
    "Solar Flare": { name: "Solar Flare", maxXp: 100, heroxp: 274, effect: 0.008, description: "Essence Gain" },
    "Astral Harmony": { name: "Astral Harmony", maxXp: 100, heroxp: 276, effect: 0.0008, description: "Increased Happiness" },
    "Gravity Control": { name: "Gravity Control", maxXp: 100, heroxp: 279, effect: 0.003, description: "All XP" },
    "Supernova": { name: "Supernova", maxXp: 100, heroxp: 282, effect: 0.009, description: "Essence Gain" },
    "Cosmic Awareness": { name: "Cosmic Awareness", maxXp: 100, heroxp: 285, effect: 0.002, description: "Skill XP" },
    "Quasar Pulse": { name: "Quasar Pulse", maxXp: 100, heroxp: 287, effect: 0.01, description: "Galactic Council XP" },
    "Celestial Decree": { name: "Celestial Decree", maxXp: 100, heroxp: 289, effect: -0.01, description: "Reduced Expenses" },
    "Starforging": { name: "Starforging", maxXp: 100, heroxp: 292, effect: 0.01, description: "Essence Gain" },
    "Galactic Harmony": { name: "Galactic Harmony", maxXp: 100, heroxp: 295, effect: 0.004, description: "All XP" },
    "Universal Law": { name: "Universal Law", maxXp: 100, heroxp: 298, effect: 0.012, description: "Essence Gain" },

    // --- ALMIGHTINESS (12 novas) ---
    "Omniscience": { name: "Omniscience", maxXp: 100, heroxp: 285, effect: 0.005, description: "Skill XP" },
    "Omnipotence": { name: "Omnipotence", maxXp: 100, heroxp: 292, effect: 0.015, description: "All XP" },
    "Omnipresence": { name: "Omnipresence", maxXp: 100, heroxp: 296, effect: 0.001, description: "Longer Lifespan" },
    "Creation": { name: "Creation", maxXp: 100, heroxp: 302, effect: 0.015, description: "Essence Gain" },
    "Destruction": { name: "Destruction", maxXp: 100, heroxp: 306, effect: 0.015, description: "Evil Gain" },
    "Balance": { name: "Balance", maxXp: 100, heroxp: 310, effect: 0.018, description: "Essence + Evil Gain" },
    "Transcendence": { name: "Transcendence", maxXp: 100, heroxp: 315, effect: 0.012, description: "Galactic Council XP" },
    "Infinity Spark": { name: "Infinity Spark", maxXp: 100, heroxp: 320, effect: 0.018, description: "All XP" },
    "Multiverse Sight": { name: "Multiverse Sight", maxXp: 100, heroxp: 325, effect: 0.008, description: "Skill XP" },
    "Reality Weaver": { name: "Reality Weaver", maxXp: 100, heroxp: 330, effect: 0.02, description: "Essence Gain" },
    "Eternal Flame": { name: "Eternal Flame", maxXp: 100, heroxp: 335, effect: 0.0015, description: "Longer Lifespan" },
    "Absolute Authority": { name: "Absolute Authority", maxXp: 100, heroxp: 340, effect: 0.02, description: "All XP" },

    // --- DARKNESS (12 novas) ---
    "Dark Herald": { name: "Dark Herald", maxXp: 100, heroxp: 1120, effect: 0.01, description: "Skill XP" },
    "Shadow Lord": { name: "Shadow Lord", maxXp: 100, heroxp: 1150, effect: 0.00002, description: "Dark Matter Gain" },
    "Nightmare": { name: "Nightmare", maxXp: 100, heroxp: 1180, effect: 0.01, description: "All XP" },
    "Abyssal Sovereign": { name: "Abyssal Sovereign", maxXp: 100, heroxp: 1220, effect: 0.0001, description: "Essence Gain" },
    "Eclipse": { name: "Eclipse", maxXp: 100, heroxp: 1250, effect: 0.5, description: "Magic XP" },
    "Void Emperor": { name: "Void Emperor", maxXp: 100, heroxp: 1280, effect: 0.00003, description: "Dark Matter Gain" },
    "Darkness Incarnate": { name: "Darkness Incarnate", maxXp: 100, heroxp: 1320, effect: 0.012, description: "All XP" },
    "Nether King": { name: "Nether King", maxXp: 100, heroxp: 1360, effect: 0.012, description: "Skill XP" },
    "Cosmic Shadow": { name: "Cosmic Shadow", maxXp: 100, heroxp: 1400, effect: 0.00015, description: "Essence Gain" },
    "Black Hole": { name: "Black Hole", maxXp: 100, heroxp: 1450, effect: 0.00004, description: "Dark Matter Gain" },
    "Eternal Night": { name: "Eternal Night", maxXp: 100, heroxp: 1500, effect: 1, description: "Magic XP" },
    "Omega Darkness": { name: "Omega Darkness", maxXp: 100, heroxp: 1550, effect: 1, description: "All XP" },
}


/** 
 * Structure of a Item base entity 
 * @typedef {Object} ItemBaseData
 * @property {string} name
 * @property {number} expense 
 * @property {number} effect
 * @property {number} heromult 
 * @property {number} heroeffect
 * @property {string} [description]
  */

/** 
 * @type {Record<string, ItemBaseData>} 
 */
const itemBaseData = {

    "Homeless": { name: "Homeless", expense: 0, effect: 1, heromult: 2, heroeffect: 2e6 },
    "Tent": { name: "Tent", expense: 15, effect: 1.4, heromult: 2, heroeffect: 2e7 },

    "Wooden Hut": { name: "Wooden Hut", expense: 100, effect: 2, heromult: 3, heroeffect: 2e8 },
    "Cottage": { name: "Cottage", expense: 750, effect: 3.5, heromult: 3, heroeffect: 2e9 },
    "House": { name: "House", expense: 3000, effect: 6, heromult: 4, heroeffect: 2e10 },
    "Large House": { name: "Large House", expense: 25000, effect: 12, heromult: 4, heroeffect: 2e11 },
    "Small Palace": { name: "Small Palace", expense: 300000, effect: 25, heromult: 5, heroeffect: 2e12 },
    "Grand Palace": { name: "Grand Palace", expense: 5000000, effect: 60, heromult: 5, heroeffect: 2e13 },
    "Town Ruler": { name: "Town Ruler", expense: 35000000, effect: 120, heromult: 6, heroeffect: 2e15 },
    "City Ruler": { name: "City Ruler", expense: 1.1e9, effect: 500, heromult: 7, heroeffect: 2e17 },
    "Nation Ruler": { name: "Nation Ruler", expense: 1.3e10, effect: 1200, heromult: 8, heroeffect: 2e19 },
    "Pocket Dimension": { name: "Pocket Dimension", expense: 4.9e10, effect: 5000, heromult: 9, heroeffect: 2e22 },
    "Void Realm": { name: "Void Realm", expense: 1.21e11, effect: 15000, heromult: 10, heroeffect: 2e25 },
    "Void Universe": { name: "Void Universe", expense: 2e12, effect: 30000, heromult: 11, heroeffect: 2e28 },
    "Astral Realm": { name: "Astral Realm", expense: 1.6e14, effect: 150000, heromult: 12, heroeffect: 2e31 },
    "Galactic Throne": { name: "Galactic Throne", expense: 5e15, effect: 300000, heromult: 13, heroeffect: 2e35 },
    "Spaceship": { name: "Spaceship", expense: 1e18, effect: 1500000, heromult: 15, heroeffect: 5e42 },
    "Planet": { name: "Planet", expense: 1e22, effect: 5000000, heromult: 16, heroeffect: 5e46 },
    "Ringworld": { name: "Ringworld", expense: 1e24, effect: 50000000, heromult: 17, heroeffect: 5e49 },

    // Heroic only
    "Stellar Neighborhood": { name: "Stellar Neighborhood", expense: 1e27, effect: 60000000, heromult: 17, heroeffect: 6e49, },
    "Galaxy": { name: "Galaxy", expense: 1e30, effect: 75000000, heromult: 18, heroeffect: 7.5e49 },
    "Supercluster": { name: "Supercluster", expense: 1e33, effect: 100000000, heromult: 20, heroeffect: 1e50 },
    "Galaxy Filament": { name: "Galaxy Filament", expense: 1e36, effect: 1000000000, heromult: 25, heroeffect: 1e52 },
    "Observable Universe": { name: "Observable Universe", expense: 1e39, effect: 10000000000, heromult: 30, heroeffect: 1e54 },
    "Multiverse": { name: "Multiverse", expense: 1e42, effect: 100000000000, heromult: 35, heroeffect: 1e67 },
    "Quantum World": { name: "Quantum World", expense: 1e49, effect: 1000000000000, heromult: 40, heroeffect: 1e70 },
    "Boötes Void": { name: "Boötes Void", expense: 3e74, effect: 1000000000000, heromult: 40, heroeffect: 1e80 },

    // Misc
    "Book": { name: "Book", expense: 10, effect: 1.5, description: "Skill XP", heromult: 2, heroeffect: 10 },
    "Dumbbells": { name: "Dumbbells", expense: 50, effect: 1.5, description: "Strength XP", heromult: 2, heroeffect: 10 },
    "Personal Squire": { name: "Personal Squire", expense: 200, effect: 2, description: "Hero XP", heromult: 3, heroeffect: 10 },
    "Steel Longsword": { name: "Steel Longsword", expense: 1000, effect: 2, description: "Military XP", heromult: 3, heroeffect: 10 },
    "Butler": { name: "Butler", expense: 7500, effect: 1.5, description: "Happiness", heromult: 4, heroeffect: 10 },
    "Sapphire Charm": { name: "Sapphire Charm", expense: 50000, effect: 3, description: "Magic XP", heromult: 4, heroeffect: 10 },
    "Study Desk": { name: "Study Desk", expense: 1000000, effect: 2, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Library": { name: "Library", expense: 1e7, effect: 2, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Observatory": { name: "Observatory", expense: 1.4e8, effect: 5, description: "Magic XP", heromult: 6, heroeffect: 10 },
    "Mind's Eye": { name: "Mind's Eye", expense: 3.25e9, effect: 10, description: "Fundamentals XP", heromult: 8, heroeffect: 10 },
    "Void Necklace": { name: "Void Necklace", expense: 2.8e10, effect: 3, description: "Void Manipulation XP", heromult: 10, heroeffect: 10 },
    "Void Armor": { name: "Void Armor", expense: 1.97e11, effect: 3, description: "The Void XP", heromult: 10, heroeffect: 10 },
    "Void Blade": { name: "Void Blade", expense: 5e11, effect: 3, description: "Skill XP", heromult: 11, heroeffect: 10 },
    "Void Orb": { name: "Void Orb", expense: 1.2e12, effect: 3, description: "Void Manipulation XP", heromult: 11, heroeffect: 10 },
    "Void Dust": { name: "Void Dust", expense: 2.5e13, effect: 3, description: "The Void XP", heromult: 12, heroeffect: 10 },
    "Celestial Robe": { name: "Celestial Robe", expense: 3e14, effect: 5, description: "Galactic Council XP", heromult: 12, heroeffect: 10 },
    "Universe Fragment": { name: "Universe Fragment", expense: 1.85e16, effect: 3, description: "Skill XP", heromult: 13, heroeffect: 1000000 },
    "Multiverse Fragment": { name: "Multiverse Fragment", expense: 2e17, effect: 5, description: "Happiness", heromult: 15, heroeffect: 1000000 },
    "Stairway to heaven": { name: "Stairway to heaven", expense: 1e38, effect: 10, description: "Happiness", heromult: 30, heroeffect: 1000000 },
    "Highway to hell": { name: "Highway to hell", expense: 1e42, effect: 10, description: "Evil Gain", heromult: 30, heroeffect: 1000000 },
    "Tesseract": { name: "Tesseract", expense: 1e48, effect: 1, description: "Hypercube Gain", heromult: 30, heroeffect: 10 },
    "Desintegration": { name: "Desintegration", expense: 1e55, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 100 },
    "Custom Galaxy": { name: "Custom Galaxy", expense: 1e64, effect: 1, description: "Skill XP", heromult: 30, heroeffect: 1e100 },
    "Hypersphere": { name: "Hypersphere", expense: 1e91, effect: 1, description: "Hypercube Gain", heromult: 30, heroeffect: 1e50 },
    // --- 24 NOVAS PROPRIEDADES (Properties) ---
    "Shack": { name: "Shack", expense: 35, effect: 1.7, heromult: 2, heroeffect: 6e7 },
    "Log Cabin": { name: "Log Cabin", expense: 300, effect: 2.6, heromult: 3, heroeffect: 6e8 },
    "Stone Manor": { name: "Stone Manor", expense: 12000, effect: 8.5, heromult: 4, heroeffect: 6e10 },
    "Noble Estate": { name: "Noble Estate", expense: 100000, effect: 18, heromult: 5, heroeffect: 6e11 },
    "Royal Keep": { name: "Royal Keep", expense: 1500000, effect: 40, heromult: 5, heroeffect: 6e12 },
    "Duchy": { name: "Duchy", expense: 15000000, effect: 90, heromult: 6, heroeffect: 6e14 },
    "Principality": { name: "Principality", expense: 2e8, effect: 250, heromult: 7, heroeffect: 6e16 },
    "Empire": { name: "Empire", expense: 4e9, effect: 800, heromult: 8, heroeffect: 6e18 },
    "Subspace Haven": { name: "Subspace Haven", expense: 3e10, effect: 2500, heromult: 9, heroeffect: 6e20 },
    "Dimensional Bastion": { name: "Dimensional Bastion", expense: 8e10, effect: 9000, heromult: 10, heroeffect: 6e23 },
    "Rift Citadel": { name: "Rift Citadel", expense: 6e11, effect: 22000, heromult: 11, heroeffect: 6e26 },
    "Ether Sanctum": { name: "Ether Sanctum", expense: 2e13, effect: 65000, heromult: 12, heroeffect: 6e29 },
    "Celestial Citadel": { name: "Celestial Citadel", expense: 9e14, effect: 220000, heromult: 13, heroeffect: 6e33 },
    "Star Dreadnought": { name: "Star Dreadnought", expense: 8e16, effect: 700000, heromult: 14, heroeffect: 1e39 },
    "Dyson Sphere": { name: "Dyson Sphere", expense: 1e20, effect: 3000000, heromult: 16, heroeffect: 1e45 },
    "Matrioshka Brain": { name: "Matrioshka Brain", expense: 1e23, effect: 15000000, heromult: 17, heroeffect: 1e48 },

    // Heroic only Properties (8 novas)
    "Local Group": { name: "Local Group", expense: 1e29, effect: 68000000, heromult: 18, heroeffect: 6.8e49 },
    "Virgo Supercluster": { name: "Virgo Supercluster", expense: 1e32, effect: 90000000, heromult: 19, heroeffect: 9e49 },
    "Great Attractor": { name: "Great Attractor", expense: 1e35, effect: 400000000, heromult: 22, heroeffect: 4e51 },
    "Cosmic Web": { name: "Cosmic Web", expense: 1e38, effect: 4000000000, heromult: 28, heroeffect: 4e53 },
    "Parallel Reality": { name: "Parallel Reality", expense: 1e41, effect: 40000000000, heromult: 33, heroeffect: 4e60 },
    "Omniverse": { name: "Omniverse", expense: 1e45, effect: 400000000000, heromult: 38, heroeffect: 4e68 },
    "Zero-Point Domain": { name: "Zero-Point Domain", expense: 1e60, effect: 1000000000000, heromult: 40, heroeffect: 1e75 },
    "Metaverse Core": { name: "Metaverse Core", expense: 1e85, effect: 1000000000000, heromult: 40, heroeffect: 1e85 },

    // --- 48 NOVOS ITENS (Misc) ---
    "Quill & Ink": { name: "Quill & Ink", expense: 25, effect: 1.4, description: "Skill XP", heromult: 2, heroeffect: 10 },
    "Whetstone": { name: "Whetstone", expense: 100, effect: 1.5, description: "Strength XP", heromult: 2, heroeffect: 10 },
    "Lantern": { name: "Lantern", expense: 400, effect: 1.6, description: "Hero XP", heromult: 3, heroeffect: 10 },
    "Iron Shield": { name: "Iron Shield", expense: 2500, effect: 1.8, description: "Military XP", heromult: 3, heroeffect: 10 },
    "Fine Wine": { name: "Fine Wine", expense: 15000, effect: 1.5, description: "Happiness", heromult: 4, heroeffect: 10 },
    "Merchant Ledger": { name: "Merchant Ledger", expense: 35000, effect: 1.6, description: "Fundamentals XP", heromult: 4, heroeffect: 10 },
    "Alchemy Kit": { name: "Alchemy Kit", expense: 120000, effect: 2.2, description: "Magic XP", heromult: 4, heroeffect: 10 },
    "Silver Astrolabe": { name: "Silver Astrolabe", expense: 400000, effect: 2.0, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Enchanted Quill": { name: "Enchanted Quill", expense: 2500000, effect: 2.2, description: "Magic XP", heromult: 5, heroeffect: 10 },
    "War Banner": { name: "War Banner", expense: 6000000, effect: 2.5, description: "Military XP", heromult: 5, heroeffect: 10 },
    "Arcane Focus": { name: "Arcane Focus", expense: 35000000, effect: 3.0, description: "Magic XP", heromult: 6, heroeffect: 10 },
    "Royal Feast": { name: "Royal Feast", expense: 80000000, effect: 2.0, description: "Happiness", heromult: 6, heroeffect: 10 },
    "Chronometer": { name: "Chronometer", expense: 5e8, effect: 2.5, description: "Skill XP", heromult: 7, heroeffect: 10 },
    "Crystal Ball": { name: "Crystal Ball", expense: 1.5e9, effect: 4.0, description: "Magic XP", heromult: 7, heroeffect: 10 },
    "Philosopher's Stone": { name: "Philosopher's Stone", expense: 8e9, effect: 3.0, description: "Hero XP", heromult: 8, heroeffect: 10 },
    "Shadow Cloak": { name: "Shadow Cloak", expense: 1.5e10, effect: 2.5, description: "Evil Gain", heromult: 9, heroeffect: 10 },
    "Abyssal Tome": { name: "Abyssal Tome", expense: 6e10, effect: 3.0, description: "Void Manipulation XP", heromult: 10, heroeffect: 10 },
    "Void Gauntlets": { name: "Void Gauntlets", expense: 1.2e11, effect: 3.0, description: "The Void XP", heromult: 10, heroeffect: 10 },
    "Rift Compass": { name: "Rift Compass", expense: 3e11, effect: 3.0, description: "Skill XP", heromult: 11, heroeffect: 10 },
    "Null Crown": { name: "Null Crown", expense: 8e11, effect: 3.5, description: "The Void XP", heromult: 11, heroeffect: 10 },
    "Void Crystal": { name: "Void Crystal", expense: 5e12, effect: 3.5, description: "Void Manipulation XP", heromult: 11, heroeffect: 10 },
    "Abyss Heart": { name: "Abyss Heart", expense: 8e13, effect: 4.0, description: "Evil Gain", heromult: 12, heroeffect: 10 },
    "Star Map": { name: "Star Map", expense: 1.5e14, effect: 4.0, description: "Galactic Council XP", heromult: 12, heroeffect: 10 },
    "Astral Crown": { name: "Astral Crown", expense: 1e15, effect: 4.0, description: "Happiness", heromult: 13, heroeffect: 10 },
    "Nebula Core": { name: "Nebula Core", expense: 5e15, effect: 4.5, description: "Galactic Council XP", heromult: 13, heroeffect: 10 },
    "Cosmic Pendulum": { name: "Cosmic Pendulum", expense: 5e16, effect: 3.5, description: "Skill XP", heromult: 14, heroeffect: 1000000 },
    "Galactic Scepter": { name: "Galactic Scepter", expense: 8e16, effect: 5.0, description: "Galactic Council XP", heromult: 14, heroeffect: 1000000 },
    "Infinity Prism": { name: "Infinity Prism", expense: 1e18, effect: 4.0, description: "Essence Gain", heromult: 15, heroeffect: 1000000 },
    "Dimensional Key": { name: "Dimensional Key", expense: 1e20, effect: 4.5, description: "Skill XP", heromult: 16, heroeffect: 1000000 },
    "Reality Anchor": { name: "Reality Anchor", expense: 1e23, effect: 5.0, description: "Happiness", heromult: 18, heroeffect: 1000000 },
    "Aether Engine": { name: "Aether Engine", expense: 1e26, effect: 5.0, description: "Hero XP", heromult: 20, heroeffect: 1000000 },
    "Quantum Processor": { name: "Quantum Processor", expense: 1e30, effect: 6.0, description: "Skill XP", heromult: 24, heroeffect: 1000000 },
    "Seraphic Halo": { name: "Seraphic Halo", expense: 1e35, effect: 8.0, description: "Happiness", heromult: 28, heroeffect: 1000000 },
    "Infernal Throne": { name: "Infernal Throne", expense: 1e40, effect: 8.0, description: "Evil Gain", heromult: 30, heroeffect: 1000000 },
    "Chronos Hourglass": { name: "Chronos Hourglass", expense: 1e45, effect: 1, description: "Skill XP", heromult: 30, heroeffect: 100 },
    "Hypercube Matrix": { name: "Hypercube Matrix", expense: 1e50, effect: 1, description: "Hypercube Gain", heromult: 30, heroeffect: 25 },
    "Dark Matter Reactor": { name: "Dark Matter Reactor", expense: 1e52, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 50 },
    "Singularity Engine": { name: "Singularity Engine", expense: 1e58, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 250 },
    "Essence Condenser": { name: "Essence Condenser", expense: 1e61, effect: 1, description: "Essence Gain", heromult: 30, heroeffect: 1e20 },
    "Multiverse Loom": { name: "Multiverse Loom", expense: 1e68, effect: 1, description: "Skill XP", heromult: 30, heroeffect: 1e110 },
    "Void Singularity": { name: "Void Singularity", expense: 1e72, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 1000 },
    "Astral Crucible": { name: "Astral Crucible", expense: 1e76, effect: 1, description: "Essence Gain", heromult: 30, heroeffect: 1e30 },
    "Hyperdimensional Core": { name: "Hyperdimensional Core", expense: 1e80, effect: 1, description: "Hypercube Gain", heromult: 30, heroeffect: 1e20 },
    "Omega Codex": { name: "Omega Codex", expense: 1e84, effect: 1, description: "Skill XP", heromult: 30, heroeffect: 1e125 },
    "Metaverse Conduit": { name: "Metaverse Conduit", expense: 1e88, effect: 1, description: "Hypercube Gain", heromult: 30, heroeffect: 1e35 },
    "Reality Compiler": { name: "Reality Compiler", expense: 1e95, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 1e10 },
    "Genesis Seed": { name: "Genesis Seed", expense: 1e102, effect: 1, description: "Essence Gain", heromult: 30, heroeffect: 1e45 },
    "Absolute Infinity": { name: "Absolute Infinity", expense: 1e110, effect: 1, description: "Hypercube Gain", heromult: 30, heroeffect: 1e65 },
}

/** 
 * Maps string keys to any class instance that extends the base Requirement class
 * @type {Record<string, Requirement>} 
 */
const requirementsBaseData = {
    // Categories
    "The Arcane Association": new TaskRequirement([toId(".The Arcane Association")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Galactic Council": new AgeRequirement([toId(".Galactic Council")], [{ requirement: 10000 }]),
    "The Void": new AgeRequirement([toId(".The Void")], [{ requirement: 1000 }]),
    "Void Manipulation": new AgeRequirement([toId(".Void Manipulation")], [{ requirement: 1000 }]),
    "Celestial Powers": new AgeRequirement([toId(".Celestial Powers")], [{ requirement: 10000 }]),
    "Dark Magic": new EvilRequirement([toId(".Dark Magic")], [{ requirement: 1 }]),
    "Almightiness": new EssenceRequirement([".Almightiness"], [{ requirement: 1 }]),
    "Darkness": new DarkMatterRequirement([".Darkness"], [{ requirement: 1 }]),
    "Heroic Milestones": new EssenceRequirement([toId(".Heroic Milestones")], [{ requirement: 1000000 }]),
    "Dark Milestones": new EssenceRequirement([toId(".Dark Milestones")], [{ requirement: 5e10 }]),
    "Metaverse Milestones": new EssenceRequirement([toId(".Metaverse Milestones")], [{ requirement: 1e67 }]),
    "Metaverse Guards": new EssenceRequirement([toId(".Metaverse Guards")], [{ requirement: 1e90 }]),
    "Underworld": new TaskRequirement([toId(".Underworld")], [{ task: "Beggar", requirement: 15 }, { task: "Concentration", requirement: 10 }]),
    "Alchemy & Artificing": new TaskRequirement([toId(".Alchemy & Artificing")], [{ task: "Blacksmith", requirement: 15 }, { task: "Concentration", requirement: 50 }]),
    "Celestial Order": new TaskRequirement([toId(".Celestial Order")], [{ task: "Master Wizard", requirement: 10 }, { task: "Meditation", requirement: 500 }]),
    "Technomancy": new EssenceRequirement([toId(".Technomancy")], [{ requirement: 1e45 }]),

    // Rebirth items
    "Rebirth tab": new AgeRequirement(["#rebirthTabButton"], [{ requirement: 25 }]),
    "Rebirth note 0": new AgeRequirement(["#rebirthNote0"], [{ requirement: 25 }]),
    "Rebirth note 1": new AgeRequirement(["#rebirthNote1"], [{ requirement: 45 }]),
    "Rebirth note 2": new AgeRequirement(["#rebirthNote2"], [{ requirement: 65 }]),
    "Rebirth note 3": new AgeRequirement(["#rebirthNote3"], [{ requirement: 200 }]),
    "Rebirth note 4": new AgeRequirement(["#rebirthNote4"], [{ requirement: 1000 }]),
    "Rebirth note 5": new AgeRequirement(["#rebirthNote5"], [{ requirement: 10000 }]),
    "Rebirth note 6": new TaskRequirement(["#rebirthNote6"], [{ task: "Cosmic Recollection", requirement: 1 }]),
    "Rebirth note 7": new EssenceRequirement(["#rebirthNote7"], [{ requirement: 5e10 }]),
    "Rebirth note 8": new EssenceRequirement(["#rebirthNote8"], [{ requirement: 1e67 }]),

    "Rebirth stats evil": new AgeRequirement(["#statsEvilGain"], [{ requirement: 200 }]),
    "Rebirth stats essence": new TaskRequirement(["#statsEssenceGain"], [{ task: "Cosmic Recollection", requirement: 1 }]),

    // Sidebar items
    "Evil info": new EvilRequirement(["#evilInfo"], [{ requirement: 1 }]),
    "Essence info": new EssenceRequirement(["#essenceInfo"], [{ requirement: 1 }]),
    "Dark Matter info": new DarkMatterRequirement(["#darkMatterInfo"], [{ requirement: 1 }]),
    "Dark Orbs info": new DarkOrbsRequirement(["#darkOrbsInfo"], [{ requirement: 1 }]),
    "Hypercubes info": new HypercubeRequirement(["#hypercubesInfo"], [{ requirement: 1 }]),

    // Common work
    "Beggar": new TaskRequirement([getQuerySelector("Beggar")], []),
    "Farmer": new TaskRequirement([getQuerySelector("Farmer")], [{ task: "Beggar", requirement: 10 }]),
    "Fisherman": new TaskRequirement([getQuerySelector("Fisherman")], [{ task: "Farmer", requirement: 10 }]),
    "Miner": new TaskRequirement([getQuerySelector("Miner")], [{ task: "Strength", requirement: 10 }, { task: "Fisherman", requirement: 10 }]),
    "Blacksmith": new TaskRequirement([getQuerySelector("Blacksmith")], [{ task: "Strength", requirement: 30 }, { task: "Miner", requirement: 10 }]),
    "Merchant": new TaskRequirement([getQuerySelector("Merchant")], [{ task: "Bargaining", requirement: 50 }, { task: "Blacksmith", requirement: 10 }]),

    // Military
    "Squire": new TaskRequirement([getQuerySelector("Squire")], [{ task: "Strength", requirement: 5 }]),
    "Footman": new TaskRequirement([getQuerySelector("Footman")], [{ task: "Strength", requirement: 20 }, { task: "Squire", requirement: 10 }]),
    "Veteran footman": new TaskRequirement([getQuerySelector("Veteran footman")], [{ task: "Battle Tactics", requirement: 40 }, { task: "Footman", requirement: 10 }]),
    "Centenary": new TaskRequirement([getQuerySelector("Centenary")], [{ task: "Strength", requirement: 100 }, { task: "Veteran footman", requirement: 10 }]),
    "Knight": new TaskRequirement([getQuerySelector("Knight")], [{ task: "Battle Tactics", requirement: 150 }, { task: "Centenary", requirement: 10 }]),
    "Veteran Knight": new TaskRequirement([getQuerySelector("Veteran Knight")], [{ task: "Strength", requirement: 300 }, { task: "Knight", requirement: 10 }]),
    "Holy Knight": new TaskRequirement([getQuerySelector("Holy Knight")], [{ task: "Mana Control", requirement: 500 }, { task: "Veteran Knight", requirement: 10 }]),
    "Lieutenant General": new TaskRequirement([getQuerySelector("Lieutenant General")], [{ task: "Mana Control", requirement: 1000 }, { task: "Battle Tactics", requirement: 1000 }, { task: "Holy Knight", requirement: 10 }]),

    // The Arcane Association
    "Student": new TaskRequirement([getQuerySelector("Student")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Apprentice Mage": new TaskRequirement([getQuerySelector("Apprentice Mage")], [{ task: "Mana Control", requirement: 400 }, { task: "Student", requirement: 10 }]),
    "Adept Mage": new TaskRequirement([getQuerySelector("Adept Mage")], [{ task: "Mana Control", requirement: 700 }, { task: "Apprentice Mage", requirement: 10 }]),
    "Master Wizard": new TaskRequirement([getQuerySelector("Master Wizard")], [{ task: "Mana Control", requirement: 1000 }, { task: "Adept Mage", requirement: 10 }]),
    "Archmage": new TaskRequirement([getQuerySelector("Archmage")], [{ task: "Mana Control", requirement: 1200 }, { task: "Master Wizard", requirement: 10 }]),
    "Chronomancer": new TaskRequirement([getQuerySelector("Chronomancer")], [{ task: "Mana Control", requirement: 1500 }, { task: "Meditation", requirement: 1500 }, { task: "Archmage", requirement: 25 }]),
    "Chairman": new TaskRequirement([getQuerySelector("Chairman")], [{ task: "Mana Control", requirement: 2000 }, { task: "Productivity", requirement: 2000 }, { task: "Chronomancer", requirement: 50 }]),
    "Imperator": new TaskRequirement([getQuerySelector("Imperator")], [{ task: "All Seeing Eye", requirement: 3000, herequirement: 650 }, { task: "Concentration", requirement: 3000 }, { task: "Chairman", requirement: 666 }]),

    // The Void
    "Corrupted": new AgeRequirement([getQuerySelector("Corrupted")], [{ requirement: 1000 }]),
    "Void Slave": new TaskRequirement([getQuerySelector("Void Slave")], [{ task: "Corrupted", requirement: 30 }]),
    "Void Fiend": new TaskRequirement([getQuerySelector("Void Fiend")], [{ task: "Brainwashing", requirement: 3000 }, { task: "Void Slave", requirement: 200 }]),
    "Abyss Anomaly": new TaskRequirement([getQuerySelector("Abyss Anomaly")], [{ task: "Mind Release", requirement: 3000, herequirement: 100 }, { task: "Void Fiend", requirement: 200, herequirement: 100 }]),
    "Void Wraith": new TaskRequirement([getQuerySelector("Void Wraith")], [{ task: "Temporal Dimension", requirement: 3400 }, { task: "Abyss Anomaly", requirement: 300, herequirement: 180 }]),
    "Void Reaver": new TaskRequirement([getQuerySelector("Void Reaver")], [{ task: "Void Amplification", requirement: 3400, herequirement: 180 }, { task: "Void Wraith", requirement: 250, herequirement: 125 }]),
    "Void Lord": new TaskRequirement([getQuerySelector("Void Lord")], [{ task: "Void Symbiosis", requirement: 3800, herequirement: 200 }, { task: "Void Reaver", requirement: 150 }]),
    "Abyss God": new TaskRequirement([getQuerySelector("Abyss God")], [{ task: "Void Embodiment", requirement: 4700, herequirement: 300 }, { task: "Void Lord", requirement: 750, herequirement: 125 }]),

    // Galactic Council
    "Eternal Wanderer": new AgeRequirement([getQuerySelector("Eternal Wanderer")], [{ requirement: 10000 }]),
    "Nova": new TaskRequirement([getQuerySelector("Nova")], [{ task: "Eternal Wanderer", requirement: 15 }, { task: "Cosmic Longevity", requirement: 4000, herequirement: 180 }]),
    "Sigma Proioxis": new TaskRequirement([getQuerySelector("Sigma Proioxis")], [{ task: "Nova", requirement: 200 }, { task: "Cosmic Recollection", requirement: 4500, herequirement: 350 }]),
    "Acallaris": new TaskRequirement([getQuerySelector("Acallaris")], [{ task: "Galactic Command", requirement: 5000, herequirement: 320 }, { task: "Sigma Proioxis", requirement: 1000, herequirement: 480 }]),
    "One Above All": new TaskRequirement([getQuerySelector("One Above All")], [{ task: "Meditation", requirement: 6300 }, { task: "Acallaris", requirement: 1400, herequirement: 520 }]),

    // Metaverse Guards
    "Snow Crash": new EssenceRequirement([getQuerySelector("Snow Crash")], [{ requirement: 1e90, herequirement: 1e120 }]),
    "Player One": new TaskRequirement([getQuerySelector("Player One")], [{ task: "Snow Crash", requirement: 1000, herequirement: 158000 }]),
    "Lost in the dark": new TaskRequirement([getQuerySelector("Lost in the dark")], [{ task: "Player One", requirement: 2500, herequirement: 155000 }]),
    "Omega": new TaskRequirement([getQuerySelector("Omega")], [{ task: "Lost in the dark", requirement: 25000, herequirement: 185000 }]),

    // Fundamentals
    "Concentration": new TaskRequirement([getQuerySelector("Concentration")], []),
    "Productivity": new TaskRequirement([getQuerySelector("Productivity")], [{ task: "Concentration", requirement: 5 }]),
    "Bargaining": new TaskRequirement([getQuerySelector("Bargaining")], [{ task: "Concentration", requirement: 20 }]),
    "Meditation": new TaskRequirement([getQuerySelector("Meditation")], [{ task: "Concentration", requirement: 30 }, { task: "Productivity", requirement: 20 }]),

    // Combat
    "Strength": new TaskRequirement([getQuerySelector("Strength")], []),
    "Battle Tactics": new TaskRequirement([getQuerySelector("Battle Tactics")], [{ task: "Concentration", requirement: 20 }]),
    "Muscle Memory": new TaskRequirement([getQuerySelector("Muscle Memory")], [{ task: "Concentration", requirement: 30 }, { task: "Strength", requirement: 30 }]),

    // Magic
    "Mana Control": new TaskRequirement([getQuerySelector("Mana Control")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Life Essence": new TaskRequirement([getQuerySelector("Life Essence")], [{ task: "Apprentice Mage", requirement: 10 }]),
    "Time Warping": new TaskRequirement([getQuerySelector("Time Warping")], [{ task: "Adept Mage", requirement: 10 }]),
    "Astral Body": new TaskRequirement([getQuerySelector("Astral Body")], [{ task: "Archmage", requirement: 10 }]),
    "Temporal Dimension": new TaskRequirement([getQuerySelector("Temporal Dimension")], [{ task: "Chronomancer", requirement: 25 }]),
    "All Seeing Eye": new TaskRequirement([getQuerySelector("All Seeing Eye")], [{ task: "Mana Control", requirement: 2350 }, { task: "Chairman", requirement: 100 }]),
    "Brainwashing": new TaskRequirement([getQuerySelector("Brainwashing")], [{ task: "Imperator", requirement: 100 }]),

    // Dark Magic
    "Dark Influence": new EvilRequirement([getQuerySelector("Dark Influence")], [{ requirement: 1 }]),
    "Evil Control": new EvilRequirement([getQuerySelector("Evil Control")], [{ requirement: 1 }]),
    "Intimidation": new EvilRequirement([getQuerySelector("Intimidation")], [{ requirement: 1 }]),
    "Demon Training": new EvilRequirement([getQuerySelector("Demon Training")], [{ requirement: 20 }]),
    "Blood Meditation": new EvilRequirement([getQuerySelector("Blood Meditation")], [{ requirement: 50 }]),
    "Demon's Wealth": new EvilRequirement([getQuerySelector("Demon's Wealth")], [{ requirement: 500 }]),
    "Dark Knowledge": new EvilRequirement([getQuerySelector("Dark Knowledge")], [{ requirement: 5000 }]),
    "Void Influence": new EvilRequirement([getQuerySelector("Void Influence")], [{ requirement: 50000 }]),
    "Time Loop": new EvilRequirement([getQuerySelector("Time Loop")], [{ requirement: 2500000 }]),
    "Evil Incarnate": new EvilRequirement([getQuerySelector("Evil Incarnate")], [{ requirement: 1000000000 }]),

    // Void Manipulation
    "Absolute Wish": new TaskRequirement([getQuerySelector("Absolute Wish")], [{ task: "Void Slave", requirement: 25 }, { task: "Chairman", requirement: 300 }]),
    "Void Amplification": new TaskRequirement([getQuerySelector("Void Amplification")], [{ task: "Void Slave", requirement: 100 }, { task: "Absolute Wish", requirement: 3000, herequirement: 1700 }]),
    "Mind Release": new TaskRequirement([getQuerySelector("Mind Release")], [{ task: "Void Amplification", requirement: 3000, herequirement: 100 }]),
    "Ceaseless Abyss": new TaskRequirement([getQuerySelector("Ceaseless Abyss")], [{ task: "Void Influence", requirement: 4000, herequirement: 1950 }, { task: "Abyss Anomaly", requirement: 50 }]),
    "Void Symbiosis": new TaskRequirement([getQuerySelector("Void Symbiosis")], [{ task: "Ceaseless Abyss", requirement: 3500, herequirement: 220 }, { task: "Void Reaver", requirement: 50 }]),
    "Void Embodiment": new TaskRequirement([getQuerySelector("Void Embodiment")], [{ task: "Dark Influence", requirement: 4600, herequirement: 3700 }, { task: "Void Lord", requirement: 50 }]),
    "Abyss Manipulation": new TaskRequirement([getQuerySelector("Abyss Manipulation")], [{ task: "Abyss God", requirement: 350, herequirement: 200 }, { task: "Dark Influence", requirement: 6000, herequirement: 4100 }, { task: "Void Influence", requirement: 6000, herequirement: 2600 }]),

    // Celestial Powers
    "Cosmic Longevity": new TaskRequirement([getQuerySelector("Cosmic Longevity")], [{ task: "Eternal Wanderer", requirement: 1 }]),
    "Cosmic Recollection": new TaskRequirement([getQuerySelector("Cosmic Recollection")], [{ task: "Nova", requirement: 50 }, { task: "Meditation", requirement: 4200 }, { task: "Mind Release", requirement: 900 }]),
    "Essence Collector": new TaskRequirement([getQuerySelector("Essence Collector")], [{ task: "Sigma Proioxis", requirement: 500, herequirement: 420 }, { task: "Absolute Wish", requirement: 4900, herequirement: 2900 }, { task: "Dark Knowledge", requirement: 6300, herequirement: 3400 }]),
    "Galactic Command": new TaskRequirement([getQuerySelector("Galactic Command")], [{ task: "Essence Collector", requirement: 5000, herequirement: 380 }, { task: "Bargaining", requirement: 5000 }]),

    // Essence
    "Yin Yang": new EssenceRequirement([getQuerySelector("Yin Yang")], [{ requirement: 1, herequirement: 1e12 }]),
    "Parallel Universe": new EssenceRequirement([getQuerySelector("Parallel Universe")], [{ requirement: 1, herequirement: 1e14 }]),
    "Higher Dimensions": new EssenceRequirement([getQuerySelector("Higher Dimensions")], [{ requirement: 10000, herequirement: 1e16 }]),
    "Epiphany": new EssenceRequirement([getQuerySelector("Epiphany")], [{ requirement: 30000, herequirement: 1e18 }]),

    // Darkness
    "Dark Prince": new DarkMatterRequirement([getQuerySelector("Dark Prince")], [{ requirement: 3, herequirement: 60 }]), // Skill XP
    "Dark Ruler": new DarkMatterRequirement([getQuerySelector("Dark Ruler")], [{ requirement: 10, herequirement: 100 }]), // Dark Matter Gain
    "Immortal Ruler": new DarkMatterRequirement([getQuerySelector("Immortal Ruler")], [{ requirement: 20, herequirement: 200 }]), // All XP
    "Dark Magician": new DarkMatterRequirement([getQuerySelector("Dark Magician")], [{ requirement: 30, herequirement: 500 }]), // Essence Gain
    "Universal Ruler": new DarkMatterRequirement([getQuerySelector("Universal Ruler")], [{ requirement: 40, herequirement: 1000 }]), // Magic XP
    "Blinded By Darkness": new DarkMatterRequirement([getQuerySelector("Blinded By Darkness")], [{ requirement: 50, herequirement: 10000 }]), // All XP

    // Properties
    "Homeless": new CoinRequirement([getQuerySelector("Homeless")], [{ requirement: 0 }]),
    "Tent": new CoinRequirement([getQuerySelector("Tent")], [{ requirement: 0 }]),
    "Wooden Hut": new CoinRequirement([getQuerySelector("Wooden Hut")], [{ requirement: itemBaseData["Wooden Hut"].expense * 100 }]),
    "Cottage": new CoinRequirement([getQuerySelector("Cottage")], [{ requirement: itemBaseData["Cottage"].expense * 100 }]),
    "House": new CoinRequirement([getQuerySelector("House")], [{ requirement: itemBaseData["House"].expense * 100 }]),
    "Large House": new CoinRequirement([getQuerySelector("Large House")], [{ requirement: itemBaseData["Large House"].expense * 100 }]),
    "Small Palace": new CoinRequirement([getQuerySelector("Small Palace")], [{ requirement: itemBaseData["Small Palace"].expense * 100 }]),
    "Grand Palace": new CoinRequirement([getQuerySelector("Grand Palace")], [{ requirement: itemBaseData["Grand Palace"].expense * 100 }]),
    "Town Ruler": new CoinRequirement([getQuerySelector("Town Ruler")], [{ requirement: itemBaseData["Town Ruler"].expense * 100 }]),
    "City Ruler": new CoinRequirement([getQuerySelector("City Ruler")], [{ requirement: itemBaseData["City Ruler"].expense * 100 }]),
    "Nation Ruler": new CoinRequirement([getQuerySelector("Nation Ruler")], [{ requirement: itemBaseData["Nation Ruler"].expense * 100 }]),
    "Pocket Dimension": new CoinRequirement([getQuerySelector("Pocket Dimension")], [{ requirement: itemBaseData["Pocket Dimension"].expense * 100 }]),
    "Void Realm": new CoinRequirement([getQuerySelector("Void Realm")], [{ requirement: itemBaseData["Void Realm"].expense * 100 }]),
    "Void Universe": new CoinRequirement([getQuerySelector("Void Universe")], [{ requirement: itemBaseData["Void Universe"].expense * 100 }]),
    "Astral Realm": new CoinRequirement([getQuerySelector("Astral Realm")], [{ requirement: itemBaseData["Astral Realm"].expense * 100 }]),
    "Galactic Throne": new CoinRequirement([getQuerySelector("Galactic Throne")], [{ requirement: itemBaseData["Galactic Throne"].expense * 100 }]),
    "Spaceship": new CoinRequirement([getQuerySelector("Spaceship")], [{ requirement: itemBaseData["Spaceship"].expense * 100 }]),
    "Planet": new CoinRequirement([getQuerySelector("Planet")], [{ requirement: itemBaseData["Planet"].expense * 100 }]),
    "Ringworld": new CoinRequirement([getQuerySelector("Ringworld")], [{ requirement: itemBaseData["Ringworld"].expense * 100 }]),

    // heroic only Properties
    "Stellar Neighborhood": new CoinRequirement([getQuerySelector("Stellar Neighborhood")], [{ requirement: 1e65 }]),
    "Galaxy": new CoinRequirement([getQuerySelector("Galaxy")], [{ requirement: 1e72 }]),
    "Supercluster": new CoinRequirement([getQuerySelector("Supercluster")], [{ requirement: 1e80 }]),
    "Galaxy Filament": new CoinRequirement([getQuerySelector("Galaxy Filament")], [{ requirement: 1e90 }]),
    "Observable Universe": new CoinRequirement([getQuerySelector("Observable Universe")], [{ requirement: 1e102 }]),
    "Multiverse": new CoinRequirement([getQuerySelector("Multiverse")], [{ requirement: 1e116 }]),
    "Quantum World": new CoinRequirement([getQuerySelector("Quantum World")], [{ requirement: 1e124 }]),
    "Boötes Void": new CoinRequirement([getQuerySelector("Boötes Void")], [{ requirement: 1e152 }]),

    // Misc
    "Book": new CoinRequirement([getQuerySelector("Book")], [{ requirement: 0 }]),
    "Dumbbells": new CoinRequirement([getQuerySelector("Dumbbells")], [{ requirement: itemBaseData["Dumbbells"].expense * 100 }]),
    "Personal Squire": new CoinRequirement([getQuerySelector("Personal Squire")], [{ requirement: itemBaseData["Personal Squire"].expense * 100 }]),
    "Steel Longsword": new CoinRequirement([getQuerySelector("Steel Longsword")], [{ requirement: itemBaseData["Steel Longsword"].expense * 100 }]),
    "Butler": new CoinRequirement([getQuerySelector("Butler")], [{ requirement: itemBaseData["Butler"].expense * 100 }]),
    "Sapphire Charm": new CoinRequirement([getQuerySelector("Sapphire Charm")], [{ requirement: itemBaseData["Sapphire Charm"].expense * 100 }]),
    "Study Desk": new CoinRequirement([getQuerySelector("Study Desk")], [{ requirement: itemBaseData["Study Desk"].expense * 100 }]),
    "Library": new CoinRequirement([getQuerySelector("Library")], [{ requirement: itemBaseData["Library"].expense * 100 }]),
    "Observatory": new CoinRequirement([getQuerySelector("Observatory")], [{ requirement: itemBaseData["Observatory"].expense * 100 }]),
    "Mind's Eye": new CoinRequirement([getQuerySelector("Mind's Eye")], [{ requirement: itemBaseData["Mind's Eye"].expense * 100 }]),
    "Void Necklace": new CoinRequirement([getQuerySelector("Void Necklace")], [{ requirement: itemBaseData["Void Necklace"].expense * 100 }]),
    "Void Armor": new CoinRequirement([getQuerySelector("Void Armor")], [{ requirement: itemBaseData["Void Armor"].expense * 100 }]),
    "Void Blade": new CoinRequirement([getQuerySelector("Void Blade")], [{ requirement: itemBaseData["Void Blade"].expense * 100 }]),
    "Void Orb": new CoinRequirement([getQuerySelector("Void Orb")], [{ requirement: itemBaseData["Void Orb"].expense * 100 }]),
    "Void Dust": new CoinRequirement([getQuerySelector("Void Dust")], [{ requirement: itemBaseData["Void Dust"].expense * 100 }]),
    "Celestial Robe": new CoinRequirement([getQuerySelector("Celestial Robe")], [{ requirement: itemBaseData["Celestial Robe"].expense * 100 }]),
    "Universe Fragment": new CoinRequirement([getQuerySelector("Universe Fragment")], [{ requirement: itemBaseData["Universe Fragment"].expense * 100 }]),
    "Multiverse Fragment": new CoinRequirement([getQuerySelector("Multiverse Fragment")], [{ requirement: itemBaseData["Multiverse Fragment"].expense * 100 }]),
    "Stairway to heaven": new CoinRequirement([getQuerySelector("Stairway to heaven")], [{ requirement: itemBaseData["Stairway to heaven"].expense * 100 }]),
    "Highway to hell": new CoinRequirement([getQuerySelector("Highway to hell")], [{ requirement: itemBaseData["Highway to hell"].expense * 100 }]),
    "Tesseract": new CoinRequirement([getQuerySelector("Tesseract")], [{ requirement: 1e112 }]),
    "Desintegration": new CoinRequirement([getQuerySelector("Desintegration")], [{ requirement: 1e122 }]),
    "Custom Galaxy": new CoinRequirement([getQuerySelector("Custom Galaxy")], [{ requirement: 1e134 }]),
    "Hypersphere": new CoinRequirement([getQuerySelector("Hypersphere")], [{ requirement: 1e67 }]),

    // Milestones
    "Milestones": new EssenceRequirement(["#milestonesTabButton"], [{ requirement: 1 }]),

    // Dark Matter
    "Dark Matter": new DarkMatterRequirement(["#darkMatterTabButton"], [{ requirement: 1 }]),
    "Dark Matter Skills": new EssenceRequirement(["#skillTreeTabTabButton"], [{ requirement: 1e20 }]),
    "Dark Matter Skills2": new EssenceRequirement(["#skillTreePage"], [{ requirement: 1e20 }]),

    // Evil perks
    "Evil perks": new EvilRequirement(["#evilperksTabButton"], [{ requirement: 1 }]),

    // Challenges
    "Challenges": new EvilRequirement(["#challengesTabButton"], [{ requirement: 10000 }]),
    "Challenge_an_unhappy_life": new EvilRequirement([], [{ requirement: 10000 }]),
    "Challenge_rich_and_the_poor": new EvilRequirement([], [{ requirement: 1000000 }]),
    "Challenge_time_does_not_fly": new EssenceRequirement([], [{ requirement: 10000 }]),
    "Challenge_dance_with_the_devil": new EssenceRequirement([], [{ requirement: 1e6 }]),
    "Challenge_legends_never_die": new EssenceRequirement([], [{ requirement: 2.5e7 }]),
    "Challenge_the_darkest_time": new EssenceRequirement([], [{ requirement: 1e47 }]),

    "Challenge1": new EvilRequirement(["#anUnhappyLifeChallenge"], [{ requirement: 10000 }]),
    "Challenge2": new EvilRequirement(["#theRichAndThePoorChallenge"], [{ requirement: 1000000 }]),
    "Challenge3": new EssenceRequirement(["#timeDoesNotFlyChallenge"], [{ requirement: 10000 }]),
    "Challenge4": new EssenceRequirement(["#danceWithTheDevilChallenge"], [{ requirement: 1e6 }]),
    "Challenge5": new EssenceRequirement(["#legendsNeverDieChallenge"], [{ requirement: 2.5e7 }]),
    "Challenge6": new EssenceRequirement(["#theDarkestTimeChallenge"], [{ requirement: 1e47 }]),

    // Metaverse Altars
    "Metaverse": new MetaverseRequirement(["#metaverseTabButton"], [{ requirement: 1 }]),
    "Increase Hypercube Gain": new HypercubeRequirement(["#IncreaseHypercubeGainAltar"], [{ requirement: 1 }]),
    "Reduce Boost Cooldown": new HypercubeRequirement(["#ReduceBoostCooldownAltar"], [{ requirement: 500 }]),
    "Increase Boost Duration": new HypercubeRequirement(["#IncreaseBoostDurationAltar"], [{ requirement: 2500 }]),
    "Gain evil at new transcension": new HypercubeRequirement(["#EvilAltar"], [{ requirement: 50000000 }]),
    "Essence gain multiplier": new HypercubeRequirement(["#EssenceAltar"], [{ requirement: 500000000 }]),
    "Challenges are not reset": new HypercubeRequirement(["#ChallengeAltar"], [{ requirement: 1e12 }]),
    "Dark Matter gain multiplier": new HypercubeRequirement(["#DarkMaterAltar"], [{ requirement: 1e17 }]),

    // Metaverse Perks
    "Metaverse Perks": new PerkPointRequirement(["#metaversePage2"], [{ requirement: 1 }]),
    "Metaverse Perks Button": new PerkPointRequirement(["#metaverseTab2TabButton"], [{ requirement: 1 }]),

    // ShortKeyInfo
    "keyChallenge": new EvilRequirement(["#keyChallenge"], [{ requirement: 10000 }]),
    "key1": new AgeRequirement(["#key1"], [{ requirement: 65 }]),
    "key2": new AgeRequirement(["#key2"], [{ requirement: 200 }]),
    "key3": new TaskRequirement(["#key3"], [{ task: "Cosmic Recollection", requirement: 1 }]),
    "key4": new EssenceRequirement(["#key4"], [{ requirement: 5e10 }]),
    "key5": new EssenceRequirement(["#key5"], [{ requirement: 1e90 }]),

    // Evil perks
    "Evil perk essence": new EssenceRequirement(["#evilperk5"], [{ requirement: 150000000 }]),
    "Evil perk essence SideBar": new EssenceRequirement(["#evilperkSideBar5"], [{ requirement: 150000000 }]),

    "Congratulations": new EssenceRequirement(["#Congratulations"], [{ requirement: 1e308 }]),

    // Underworld
    "Pickpocket": new TaskRequirement([getQuerySelector("Pickpocket")], [{ task: "Beggar", requirement: 15 }, { task: "Concentration", requirement: 10 }]),
    "Smuggler": new TaskRequirement([getQuerySelector("Smuggler")], [{ task: "Bargaining", requirement: 15 }, { task: "Pickpocket", requirement: 10 }]),
    "Spy": new TaskRequirement([getQuerySelector("Spy")], [{ task: "Concentration", requirement: 40 }, { task: "Smuggler", requirement: 10 }]),
    "Assassin": new TaskRequirement([getQuerySelector("Assassin")], [{ task: "Strength", requirement: 80 }, { task: "Spy", requirement: 10 }]),
    "Syndicate Boss": new TaskRequirement([getQuerySelector("Syndicate Boss")], [{ task: "Bargaining", requirement: 150 }, { task: "Assassin", requirement: 10 }]),
    "Shadow King": new TaskRequirement([getQuerySelector("Shadow King")], [{ task: "Dark Influence", requirement: 10 }, { task: "Syndicate Boss", requirement: 10 }]),

    // Alchemy & Artificing
    "Herb Gatherer": new TaskRequirement([getQuerySelector("Herb Gatherer")], [{ task: "Blacksmith", requirement: 15 }, { task: "Concentration", requirement: 50 }]),
    "Apothecary": new TaskRequirement([getQuerySelector("Apothecary")], [{ task: "Productivity", requirement: 60 }, { task: "Herb Gatherer", requirement: 10 }]),
    "Alchemist": new TaskRequirement([getQuerySelector("Alchemist")], [{ task: "Concentration", requirement: 150 }, { task: "Apothecary", requirement: 10 }]),
    "Golem Crafter": new TaskRequirement([getQuerySelector("Golem Crafter")], [{ task: "Mana Control", requirement: 300 }, { task: "Alchemist", requirement: 10 }]),
    "Grand Artificer": new TaskRequirement([getQuerySelector("Grand Artificer")], [{ task: "Productivity", requirement: 600 }, { task: "Golem Crafter", requirement: 10 }]),
    "Philosopher": new TaskRequirement([getQuerySelector("Philosopher")], [{ task: "Meditation", requirement: 1000 }, { task: "Grand Artificer", requirement: 10 }]),

    // Celestial Order
    "Acolyte": new TaskRequirement([getQuerySelector("Acolyte")], [{ task: "Master Wizard", requirement: 10 }, { task: "Meditation", requirement: 500 }]),
    "Cleric": new TaskRequirement([getQuerySelector("Cleric")], [{ task: "Mana Control", requirement: 1100 }, { task: "Acolyte", requirement: 10 }]),
    "Inquisitor": new TaskRequirement([getQuerySelector("Inquisitor")], [{ task: "Battle Tactics", requirement: 1200 }, { task: "Cleric", requirement: 10 }]),
    "Archangel": new TaskRequirement([getQuerySelector("Archangel")], [{ task: "Mana Control", requirement: 1600 }, { task: "Inquisitor", requirement: 10 }]),
    "Seraph": new TaskRequirement([getQuerySelector("Seraph")], [{ task: "Meditation", requirement: 2200 }, { task: "Archangel", requirement: 10 }]),
    "Astral Sovereign": new TaskRequirement([getQuerySelector("Astral Sovereign")], [{ task: "Mana Control", requirement: 3000 }, { task: "Seraph", requirement: 10 }]),

    // Technomancy
    "Scrap Tinkerer": new TaskRequirement([getQuerySelector("Scrap Tinkerer")], [{ task: "One Above All", requirement: 50 }]),
    "Clockwork Engineer": new TaskRequirement([getQuerySelector("Clockwork Engineer")], [{ task: "Scrap Tinkerer", requirement: 25 }]),
    "Aether Mechanic": new TaskRequirement([getQuerySelector("Aether Mechanic")], [{ task: "Clockwork Engineer", requirement: 25 }]),
    "Cyber-Mage": new TaskRequirement([getQuerySelector("Cyber-Mage")], [{ task: "Aether Mechanic", requirement: 25 }]),
    "Singularity Architect": new TaskRequirement([getQuerySelector("Singularity Architect")], [{ task: "Cyber-Mage", requirement: 25 }]),
    // --- REQUISITOS DAS 96 SKILLS ---
    // Fundamentals
    "Posture": new TaskRequirement([getQuerySelector("Posture")], [{ task: "Concentration", requirement: 10 }]),
    "Time Management": new TaskRequirement([getQuerySelector("Time Management")], [{ task: "Productivity", requirement: 10 }]),
    "Bookkeeping": new TaskRequirement([getQuerySelector("Bookkeeping")], [{ task: "Bargaining", requirement: 10 }]),
    "Deep Breathing": new TaskRequirement([getQuerySelector("Deep Breathing")], [{ task: "Meditation", requirement: 10 }]),
    "Focus": new TaskRequirement([getQuerySelector("Focus")], [{ task: "Posture", requirement: 25 }]),
    "Memory Palace": new TaskRequirement([getQuerySelector("Memory Palace")], [{ task: "Focus", requirement: 30 }]),
    "Haggling": new TaskRequirement([getQuerySelector("Haggling")], [{ task: "Bookkeeping", requirement: 30 }]),
    "Mindfulness": new TaskRequirement([getQuerySelector("Mindfulness")], [{ task: "Deep Breathing", requirement: 30 }]),
    "Discipline": new TaskRequirement([getQuerySelector("Discipline")], [{ task: "Time Management", requirement: 40 }]),
    "Speed Reading": new TaskRequirement([getQuerySelector("Speed Reading")], [{ task: "Memory Palace", requirement: 50 }]),
    "Frugality": new TaskRequirement([getQuerySelector("Frugality")], [{ task: "Haggling", requirement: 50 }]),
    "Serenity": new TaskRequirement([getQuerySelector("Serenity")], [{ task: "Mindfulness", requirement: 50 }]),

    // Combat
    "Endurance": new TaskRequirement([getQuerySelector("Endurance")], [{ task: "Strength", requirement: 15 }]),
    "Swordsmanship": new TaskRequirement([getQuerySelector("Swordsmanship")], [{ task: "Battle Tactics", requirement: 15 }]),
    "Shield Defense": new TaskRequirement([getQuerySelector("Shield Defense")], [{ task: "Footman", requirement: 10 }]),
    "Footwork": new TaskRequirement([getQuerySelector("Footwork")], [{ task: "Endurance", requirement: 25 }]),
    "Weapon Mastery": new TaskRequirement([getQuerySelector("Weapon Mastery")], [{ task: "Swordsmanship", requirement: 30 }]),
    "Formation": new TaskRequirement([getQuerySelector("Formation")], [{ task: "Shield Defense", requirement: 30 }]),
    "Conditioning": new TaskRequirement([getQuerySelector("Conditioning")], [{ task: "Muscle Memory", requirement: 40 }]),
    "Parry": new TaskRequirement([getQuerySelector("Parry")], [{ task: "Footwork", requirement: 50 }]),
    "War Strategy": new TaskRequirement([getQuerySelector("War Strategy")], [{ task: "Weapon Mastery", requirement: 60 }]),
    "Iron Body": new TaskRequirement([getQuerySelector("Iron Body")], [{ task: "Conditioning", requirement: 80 }]),
    "Battle Instinct": new TaskRequirement([getQuerySelector("Battle Instinct")], [{ task: "Parry", requirement: 100 }]),
    "Warlord Aura": new TaskRequirement([getQuerySelector("Warlord Aura")], [{ task: "War Strategy", requirement: 150 }]),

    // Magic
    "Arcane Flow": new TaskRequirement([getQuerySelector("Arcane Flow")], [{ task: "Mana Control", requirement: 25 }]),
    "Spellcasting": new TaskRequirement([getQuerySelector("Spellcasting")], [{ task: "Student", requirement: 10 }]),
    "Runic Lore": new TaskRequirement([getQuerySelector("Runic Lore")], [{ task: "Apprentice Mage", requirement: 10 }]),
    "Mana Fountain": new TaskRequirement([getQuerySelector("Mana Fountain")], [{ task: "Arcane Flow", requirement: 50 }]),
    "Enchantment": new TaskRequirement([getQuerySelector("Enchantment")], [{ task: "Spellcasting", requirement: 50 }]),
    "Telekinesis": new TaskRequirement([getQuerySelector("Telekinesis")], [{ task: "Adept Mage", requirement: 10 }]),
    "Divination": new TaskRequirement([getQuerySelector("Divination")], [{ task: "Master Wizard", requirement: 10 }]),
    "Alchemy Mastery": new TaskRequirement([getQuerySelector("Alchemy Mastery")], [{ task: "Alchemist", requirement: 10 }]),
    "Chrono Sense": new TaskRequirement([getQuerySelector("Chrono Sense")], [{ task: "Time Warping", requirement: 100 }]),
    "Astral Projection": new TaskRequirement([getQuerySelector("Astral Projection")], [{ task: "Astral Body", requirement: 100 }]),
    "Archmage Will": new TaskRequirement([getQuerySelector("Archmage Will")], [{ task: "Archmage", requirement: 25 }]),
    "Reality Bending": new TaskRequirement([getQuerySelector("Reality Bending")], [{ task: "Chairman", requirement: 25 }]),

    // Dark Magic
    "Shadow Whisper": new EvilRequirement([getQuerySelector("Shadow Whisper")], [{ requirement: 5 }]),
    "Cursed Pact": new EvilRequirement([getQuerySelector("Cursed Pact")], [{ requirement: 10 }]),
    "Fear Aura": new EvilRequirement([getQuerySelector("Fear Aura")], [{ requirement: 35 }]),
    "Soul Harvest": new EvilRequirement([getQuerySelector("Soul Harvest")], [{ requirement: 150 }]),
    "Hellfire": new EvilRequirement([getQuerySelector("Hellfire")], [{ requirement: 1000 }]),
    "Demonic Pact": new EvilRequirement([getQuerySelector("Demonic Pact")], [{ requirement: 2500 }]),
    "Forbidden Tome": new EvilRequirement([getQuerySelector("Forbidden Tome")], [{ requirement: 15000 }]),
    "Abyssal Chant": new EvilRequirement([getQuerySelector("Abyssal Chant")], [{ requirement: 100000 }]),
    "Corruption": new EvilRequirement([getQuerySelector("Corruption")], [{ requirement: 500000 }]),
    "Nether Ritual": new EvilRequirement([getQuerySelector("Nether Ritual")], [{ requirement: 10000000 }]),
    "Dark Sovereign": new EvilRequirement([getQuerySelector("Dark Sovereign")], [{ requirement: 100000000 }]),
    "Apocalypse": new EvilRequirement([getQuerySelector("Apocalypse")], [{ requirement: 5000000000 }]),

    // Void Manipulation
    "Void Step": new TaskRequirement([getQuerySelector("Void Step")], [{ task: "Corrupted", requirement: 25 }]),
    "Null Barrier": new TaskRequirement([getQuerySelector("Null Barrier")], [{ task: "Void Slave", requirement: 50 }]),
    "Entropy Touch": new TaskRequirement([getQuerySelector("Entropy Touch")], [{ task: "Void Fiend", requirement: 25 }]),
    "Rift Walking": new TaskRequirement([getQuerySelector("Rift Walking")], [{ task: "Void Step", requirement: 500 }]),
    "Void Sight": new TaskRequirement([getQuerySelector("Void Sight")], [{ task: "Abyss Anomaly", requirement: 25 }]),
    "Abyssal Echo": new TaskRequirement([getQuerySelector("Abyssal Echo")], [{ task: "Void Wraith", requirement: 25 }]),
    "Oblivion Gaze": new TaskRequirement([getQuerySelector("Oblivion Gaze")], [{ task: "Void Reaver", requirement: 25 }]),
    "Dark Rift": new TaskRequirement([getQuerySelector("Dark Rift")], [{ task: "Void Lord", requirement: 25 }]),
    "Void Convergence": new TaskRequirement([getQuerySelector("Void Convergence")], [{ task: "Void Sight", requirement: 1000 }]),
    "Singularity": new TaskRequirement([getQuerySelector("Singularity")], [{ task: "Abyss God", requirement: 50 }]),
    "Null Dominion": new TaskRequirement([getQuerySelector("Null Dominion")], [{ task: "Abyss Manipulation", requirement: 500 }]),
    "Abyssal Ascension": new TaskRequirement([getQuerySelector("Abyssal Ascension")], [{ task: "Abyss God", requirement: 200 }]),

    // Celestial Powers
    "Starlight": new TaskRequirement([getQuerySelector("Starlight")], [{ task: "Eternal Wanderer", requirement: 10 }]),
    "Nebula Weaving": new TaskRequirement([getQuerySelector("Nebula Weaving")], [{ task: "Nova", requirement: 10 }]),
    "Solar Flare": new TaskRequirement([getQuerySelector("Solar Flare")], [{ task: "Nova", requirement: 25 }]),
    "Astral Harmony": new TaskRequirement([getQuerySelector("Astral Harmony")], [{ task: "Starlight", requirement: 500 }]),
    "Gravity Control": new TaskRequirement([getQuerySelector("Gravity Control")], [{ task: "Sigma Proioxis", requirement: 25 }]),
    "Supernova": new TaskRequirement([getQuerySelector("Supernova")], [{ task: "Solar Flare", requirement: 1000 }]),
    "Cosmic Awareness": new TaskRequirement([getQuerySelector("Cosmic Awareness")], [{ task: "Acallaris", requirement: 10 }]),
    "Quasar Pulse": new TaskRequirement([getQuerySelector("Quasar Pulse")], [{ task: "Acallaris", requirement: 50 }]),
    "Celestial Decree": new TaskRequirement([getQuerySelector("Celestial Decree")], [{ task: "Galactic Command", requirement: 500 }]),
    "Starforging": new TaskRequirement([getQuerySelector("Starforging")], [{ task: "One Above All", requirement: 10 }]),
    "Galactic Harmony": new TaskRequirement([getQuerySelector("Galactic Harmony")], [{ task: "One Above All", requirement: 50 }]),
    "Universal Law": new TaskRequirement([getQuerySelector("Universal Law")], [{ task: "One Above All", requirement: 200 }]),

    // Almightiness
    "Omniscience": new EssenceRequirement([getQuerySelector("Omniscience")], [{ requirement: 10, herequirement: 1e12 }]),
    "Omnipotence": new EssenceRequirement([getQuerySelector("Omnipotence")], [{ requirement: 100, herequirement: 1e13 }]),
    "Omnipresence": new EssenceRequirement([getQuerySelector("Omnipresence")], [{ requirement: 500, herequirement: 1e14 }]),
    "Creation": new EssenceRequirement([getQuerySelector("Creation")], [{ requirement: 2500, herequirement: 1e15 }]),
    "Destruction": new EssenceRequirement([getQuerySelector("Destruction")], [{ requirement: 5000, herequirement: 1e15 }]),
    "Balance": new EssenceRequirement([getQuerySelector("Balance")], [{ requirement: 15000, herequirement: 1e16 }]),
    "Transcendence": new EssenceRequirement([getQuerySelector("Transcendence")], [{ requirement: 50000, herequirement: 1e17 }]),
    "Infinity Spark": new EssenceRequirement([getQuerySelector("Infinity Spark")], [{ requirement: 250000, herequirement: 1e18 }]),
    "Multiverse Sight": new EssenceRequirement([getQuerySelector("Multiverse Sight")], [{ requirement: 1e6, herequirement: 1e19 }]),
    "Reality Weaver": new EssenceRequirement([getQuerySelector("Reality Weaver")], [{ requirement: 1e7, herequirement: 1e20 }]),
    "Eternal Flame": new EssenceRequirement([getQuerySelector("Eternal Flame")], [{ requirement: 1e8, herequirement: 1e21 }]),
    "Absolute Authority": new EssenceRequirement([getQuerySelector("Absolute Authority")], [{ requirement: 1e9, herequirement: 1e22 }]),

    // Darkness
    "Dark Herald": new DarkMatterRequirement([getQuerySelector("Dark Herald")], [{ requirement: 5, herequirement: 75 }]),
    "Shadow Lord": new DarkMatterRequirement([getQuerySelector("Shadow Lord")], [{ requirement: 8, herequirement: 90 }]),
    "Nightmare": new DarkMatterRequirement([getQuerySelector("Nightmare")], [{ requirement: 15, herequirement: 150 }]),
    "Abyssal Sovereign": new DarkMatterRequirement([getQuerySelector("Abyssal Sovereign")], [{ requirement: 25, herequirement: 350 }]),
    "Eclipse": new DarkMatterRequirement([getQuerySelector("Eclipse")], [{ requirement: 35, herequirement: 750 }]),
    "Void Emperor": new DarkMatterRequirement([getQuerySelector("Void Emperor")], [{ requirement: 45, herequirement: 2500 }]),
    "Darkness Incarnate": new DarkMatterRequirement([getQuerySelector("Darkness Incarnate")], [{ requirement: 60, herequirement: 15000 }]),
    "Nether King": new DarkMatterRequirement([getQuerySelector("Nether King")], [{ requirement: 80, herequirement: 25000 }]),
    "Cosmic Shadow": new DarkMatterRequirement([getQuerySelector("Cosmic Shadow")], [{ requirement: 100, herequirement: 50000 }]),
    "Black Hole": new DarkMatterRequirement([getQuerySelector("Black Hole")], [{ requirement: 130, herequirement: 100000 }]),
    "Eternal Night": new DarkMatterRequirement([getQuerySelector("Eternal Night")], [{ requirement: 160, herequirement: 250000 }]),
    "Omega Darkness": new DarkMatterRequirement([getQuerySelector("Omega Darkness")], [{ requirement: 200, herequirement: 500000 }]),

    // --- REQUISITOS DAS 24 PROPRIEDADES ---
    "Shack": new CoinRequirement([getQuerySelector("Shack")], [{ requirement: itemBaseData["Shack"].expense * 100 }]),
    "Log Cabin": new CoinRequirement([getQuerySelector("Log Cabin")], [{ requirement: itemBaseData["Log Cabin"].expense * 100 }]),
    "Stone Manor": new CoinRequirement([getQuerySelector("Stone Manor")], [{ requirement: itemBaseData["Stone Manor"].expense * 100 }]),
    "Noble Estate": new CoinRequirement([getQuerySelector("Noble Estate")], [{ requirement: itemBaseData["Noble Estate"].expense * 100 }]),
    "Royal Keep": new CoinRequirement([getQuerySelector("Royal Keep")], [{ requirement: itemBaseData["Royal Keep"].expense * 100 }]),
    "Duchy": new CoinRequirement([getQuerySelector("Duchy")], [{ requirement: itemBaseData["Duchy"].expense * 100 }]),
    "Principality": new CoinRequirement([getQuerySelector("Principality")], [{ requirement: itemBaseData["Principality"].expense * 100 }]),
    "Empire": new CoinRequirement([getQuerySelector("Empire")], [{ requirement: itemBaseData["Empire"].expense * 100 }]),
    "Subspace Haven": new CoinRequirement([getQuerySelector("Subspace Haven")], [{ requirement: itemBaseData["Subspace Haven"].expense * 100 }]),
    "Dimensional Bastion": new CoinRequirement([getQuerySelector("Dimensional Bastion")], [{ requirement: itemBaseData["Dimensional Bastion"].expense * 100 }]),
    "Rift Citadel": new CoinRequirement([getQuerySelector("Rift Citadel")], [{ requirement: itemBaseData["Rift Citadel"].expense * 100 }]),
    "Ether Sanctum": new CoinRequirement([getQuerySelector("Ether Sanctum")], [{ requirement: itemBaseData["Ether Sanctum"].expense * 100 }]),
    "Celestial Citadel": new CoinRequirement([getQuerySelector("Celestial Citadel")], [{ requirement: itemBaseData["Celestial Citadel"].expense * 100 }]),
    "Star Dreadnought": new CoinRequirement([getQuerySelector("Star Dreadnought")], [{ requirement: itemBaseData["Star Dreadnought"].expense * 100 }]),
    "Dyson Sphere": new CoinRequirement([getQuerySelector("Dyson Sphere")], [{ requirement: itemBaseData["Dyson Sphere"].expense * 100 }]),
    "Matrioshka Brain": new CoinRequirement([getQuerySelector("Matrioshka Brain")], [{ requirement: itemBaseData["Matrioshka Brain"].expense * 100 }]),

    // Heroic only Properties
    "Local Group": new CoinRequirement([getQuerySelector("Local Group")], [{ requirement: 1e70 }]),
    "Virgo Supercluster": new CoinRequirement([getQuerySelector("Virgo Supercluster")], [{ requirement: 1e78 }]),
    "Great Attractor": new CoinRequirement([getQuerySelector("Great Attractor")], [{ requirement: 1e86 }]),
    "Cosmic Web": new CoinRequirement([getQuerySelector("Cosmic Web")], [{ requirement: 1e96 }]),
    "Parallel Reality": new CoinRequirement([getQuerySelector("Parallel Reality")], [{ requirement: 1e110 }]),
    "Omniverse": new CoinRequirement([getQuerySelector("Omniverse")], [{ requirement: 1e120 }]),
    "Zero-Point Domain": new CoinRequirement([getQuerySelector("Zero-Point Domain")], [{ requirement: 1e140 }]),
    "Metaverse Core": new CoinRequirement([getQuerySelector("Metaverse Core")], [{ requirement: 1e165 }]),

    // --- REQUISITOS DOS 48 ITENS MISC ---
    "Quill & Ink": new CoinRequirement([getQuerySelector("Quill & Ink")], [{ requirement: itemBaseData["Quill & Ink"].expense * 100 }]),
    "Whetstone": new CoinRequirement([getQuerySelector("Whetstone")], [{ requirement: itemBaseData["Whetstone"].expense * 100 }]),
    "Lantern": new CoinRequirement([getQuerySelector("Lantern")], [{ requirement: itemBaseData["Lantern"].expense * 100 }]),
    "Iron Shield": new CoinRequirement([getQuerySelector("Iron Shield")], [{ requirement: itemBaseData["Iron Shield"].expense * 100 }]),
    "Fine Wine": new CoinRequirement([getQuerySelector("Fine Wine")], [{ requirement: itemBaseData["Fine Wine"].expense * 100 }]),
    "Merchant Ledger": new CoinRequirement([getQuerySelector("Merchant Ledger")], [{ requirement: itemBaseData["Merchant Ledger"].expense * 100 }]),
    "Alchemy Kit": new CoinRequirement([getQuerySelector("Alchemy Kit")], [{ requirement: itemBaseData["Alchemy Kit"].expense * 100 }]),
    "Silver Astrolabe": new CoinRequirement([getQuerySelector("Silver Astrolabe")], [{ requirement: itemBaseData["Silver Astrolabe"].expense * 100 }]),
    "Enchanted Quill": new CoinRequirement([getQuerySelector("Enchanted Quill")], [{ requirement: itemBaseData["Enchanted Quill"].expense * 100 }]),
    "War Banner": new CoinRequirement([getQuerySelector("War Banner")], [{ requirement: itemBaseData["War Banner"].expense * 100 }]),
    "Arcane Focus": new CoinRequirement([getQuerySelector("Arcane Focus")], [{ requirement: itemBaseData["Arcane Focus"].expense * 100 }]),
    "Royal Feast": new CoinRequirement([getQuerySelector("Royal Feast")], [{ requirement: itemBaseData["Royal Feast"].expense * 100 }]),
    "Chronometer": new CoinRequirement([getQuerySelector("Chronometer")], [{ requirement: itemBaseData["Chronometer"].expense * 100 }]),
    "Crystal Ball": new CoinRequirement([getQuerySelector("Crystal Ball")], [{ requirement: itemBaseData["Crystal Ball"].expense * 100 }]),
    "Philosopher's Stone": new CoinRequirement([getQuerySelector("Philosopher's Stone")], [{ requirement: itemBaseData["Philosopher's Stone"].expense * 100 }]),
    "Shadow Cloak": new CoinRequirement([getQuerySelector("Shadow Cloak")], [{ requirement: itemBaseData["Shadow Cloak"].expense * 100 }]),
    "Abyssal Tome": new CoinRequirement([getQuerySelector("Abyssal Tome")], [{ requirement: itemBaseData["Abyssal Tome"].expense * 100 }]),
    "Void Gauntlets": new CoinRequirement([getQuerySelector("Void Gauntlets")], [{ requirement: itemBaseData["Void Gauntlets"].expense * 100 }]),
    "Rift Compass": new CoinRequirement([getQuerySelector("Rift Compass")], [{ requirement: itemBaseData["Rift Compass"].expense * 100 }]),
    "Null Crown": new CoinRequirement([getQuerySelector("Null Crown")], [{ requirement: itemBaseData["Null Crown"].expense * 100 }]),
    "Void Crystal": new CoinRequirement([getQuerySelector("Void Crystal")], [{ requirement: itemBaseData["Void Crystal"].expense * 100 }]),
    "Abyss Heart": new CoinRequirement([getQuerySelector("Abyss Heart")], [{ requirement: itemBaseData["Abyss Heart"].expense * 100 }]),
    "Star Map": new CoinRequirement([getQuerySelector("Star Map")], [{ requirement: itemBaseData["Star Map"].expense * 100 }]),
    "Astral Crown": new CoinRequirement([getQuerySelector("Astral Crown")], [{ requirement: itemBaseData["Astral Crown"].expense * 100 }]),
    "Nebula Core": new CoinRequirement([getQuerySelector("Nebula Core")], [{ requirement: itemBaseData["Nebula Core"].expense * 100 }]),
    "Cosmic Pendulum": new CoinRequirement([getQuerySelector("Cosmic Pendulum")], [{ requirement: itemBaseData["Cosmic Pendulum"].expense * 100 }]),
    "Galactic Scepter": new CoinRequirement([getQuerySelector("Galactic Scepter")], [{ requirement: itemBaseData["Galactic Scepter"].expense * 100 }]),
    "Infinity Prism": new CoinRequirement([getQuerySelector("Infinity Prism")], [{ requirement: itemBaseData["Infinity Prism"].expense * 100 }]),
    "Dimensional Key": new CoinRequirement([getQuerySelector("Dimensional Key")], [{ requirement: itemBaseData["Dimensional Key"].expense * 100 }]),
    "Reality Anchor": new CoinRequirement([getQuerySelector("Reality Anchor")], [{ requirement: itemBaseData["Reality Anchor"].expense * 100 }]),
    "Aether Engine": new CoinRequirement([getQuerySelector("Aether Engine")], [{ requirement: itemBaseData["Aether Engine"].expense * 100 }]),
    "Quantum Processor": new CoinRequirement([getQuerySelector("Quantum Processor")], [{ requirement: itemBaseData["Quantum Processor"].expense * 100 }]),
    "Seraphic Halo": new CoinRequirement([getQuerySelector("Seraphic Halo")], [{ requirement: itemBaseData["Seraphic Halo"].expense * 100 }]),
    "Infernal Throne": new CoinRequirement([getQuerySelector("Infernal Throne")], [{ requirement: itemBaseData["Infernal Throne"].expense * 100 }]),
    "Chronos Hourglass": new CoinRequirement([getQuerySelector("Chronos Hourglass")], [{ requirement: 1e108 }]),
    "Hypercube Matrix": new CoinRequirement([getQuerySelector("Hypercube Matrix")], [{ requirement: 1e115 }]),
    "Dark Matter Reactor": new CoinRequirement([getQuerySelector("Dark Matter Reactor")], [{ requirement: 1e118 }]),
    "Singularity Engine": new CoinRequirement([getQuerySelector("Singularity Engine")], [{ requirement: 1e126 }]),
    "Essence Condenser": new CoinRequirement([getQuerySelector("Essence Condenser")], [{ requirement: 1e130 }]),
    "Multiverse Loom": new CoinRequirement([getQuerySelector("Multiverse Loom")], [{ requirement: 1e140 }]),
    "Void Singularity": new CoinRequirement([getQuerySelector("Void Singularity")], [{ requirement: 1e146 }]),
    "Astral Crucible": new CoinRequirement([getQuerySelector("Astral Crucible")], [{ requirement: 1e152 }]),
    "Hyperdimensional Core": new CoinRequirement([getQuerySelector("Hyperdimensional Core")], [{ requirement: 1e72 }]),
    "Omega Codex": new CoinRequirement([getQuerySelector("Omega Codex")], [{ requirement: 1e160 }]),
    "Metaverse Conduit": new CoinRequirement([getQuerySelector("Metaverse Conduit")], [{ requirement: 1e78 }]),
    "Reality Compiler": new CoinRequirement([getQuerySelector("Reality Compiler")], [{ requirement: 1e170 }]),
    "Genesis Seed": new CoinRequirement([getQuerySelector("Genesis Seed")], [{ requirement: 1e180 }]),
    "Absolute Infinity": new CoinRequirement([getQuerySelector("Absolute Infinity")], [{ requirement: 1e85 }]),
}

/** @type {Record<string, string[]>} */
const jobCategories = {
    "Common work": ["Beggar", "Farmer", "Fisherman", "Miner", "Blacksmith", "Merchant"],
    "Underworld": ["Pickpocket", "Smuggler", "Spy", "Assassin", "Syndicate Boss", "Shadow King"],
    "Military": ["Squire", "Footman", "Veteran footman", "Centenary", "Knight", "Veteran Knight", "Holy Knight", "Lieutenant General"],
    "Alchemy & Artificing": ["Herb Gatherer", "Apothecary", "Alchemist", "Golem Crafter", "Grand Artificer", "Philosopher"],
    "The Arcane Association": ["Student", "Apprentice Mage", "Adept Mage", "Master Wizard", "Archmage", "Chronomancer", "Chairman", "Imperator"],
    "Celestial Order": ["Acolyte", "Cleric", "Inquisitor", "Archangel", "Seraph", "Astral Sovereign"],
    "The Void": ["Corrupted", "Void Slave", "Void Fiend", "Abyss Anomaly", "Void Wraith", "Void Reaver", "Void Lord", "Abyss God"],
    "Galactic Council": ["Eternal Wanderer", "Nova", "Sigma Proioxis", "Acallaris", "One Above All"],
    "Technomancy": ["Scrap Tinkerer", "Clockwork Engineer", "Aether Mechanic", "Cyber-Mage", "Singularity Architect"],
    "Metaverse Guards": ["Snow Crash", "Player One", "Lost in the dark", "Omega"]
}


/** @type {Record<string, string[]>} */
/** @type {Record<string, string[]>} */
const skillCategories = {
    "Fundamentals": ["Concentration", "Productivity", "Bargaining", "Meditation", "Posture", "Time Management", "Bookkeeping", "Deep Breathing", "Focus", "Memory Palace", "Haggling", "Mindfulness", "Discipline", "Speed Reading", "Frugality", "Serenity"],
    "Combat": ["Strength", "Battle Tactics", "Muscle Memory", "Endurance", "Swordsmanship", "Shield Defense", "Footwork", "Weapon Mastery", "Formation", "Conditioning", "Parry", "War Strategy", "Iron Body", "Battle Instinct", "Warlord Aura"],
    "Magic": ["Mana Control", "Life Essence", "Time Warping", "Astral Body", "Temporal Dimension", "All Seeing Eye", "Brainwashing", "Arcane Flow", "Spellcasting", "Runic Lore", "Mana Fountain", "Enchantment", "Telekinesis", "Divination", "Alchemy Mastery", "Chrono Sense", "Astral Projection", "Archmage Will", "Reality Bending"],
    "Dark Magic": ["Dark Influence", "Evil Control", "Intimidation", "Demon Training", "Blood Meditation", "Demon's Wealth", "Dark Knowledge", "Void Influence", "Time Loop", "Evil Incarnate", "Shadow Whisper", "Cursed Pact", "Fear Aura", "Soul Harvest", "Hellfire", "Demonic Pact", "Forbidden Tome", "Abyssal Chant", "Corruption", "Nether Ritual", "Dark Sovereign", "Apocalypse"],
    "Void Manipulation": ["Absolute Wish", "Void Amplification", "Mind Release", "Ceaseless Abyss", "Void Symbiosis", "Void Embodiment", "Abyss Manipulation", "Void Step", "Null Barrier", "Entropy Touch", "Rift Walking", "Void Sight", "Abyssal Echo", "Oblivion Gaze", "Dark Rift", "Void Convergence", "Singularity", "Null Dominion", "Abyssal Ascension"],
    "Celestial Powers": ["Cosmic Longevity", "Cosmic Recollection", "Essence Collector", "Galactic Command", "Starlight", "Nebula Weaving", "Solar Flare", "Astral Harmony", "Gravity Control", "Supernova", "Cosmic Awareness", "Quasar Pulse", "Celestial Decree", "Starforging", "Galactic Harmony", "Universal Law"],
    "Almightiness": ["Yin Yang", "Parallel Universe", "Higher Dimensions", "Epiphany", "Omniscience", "Omnipotence", "Omnipresence", "Creation", "Destruction", "Balance", "Transcendence", "Infinity Spark", "Multiverse Sight", "Reality Weaver", "Eternal Flame", "Absolute Authority"],
    "Darkness": ["Dark Prince", "Dark Ruler", "Immortal Ruler", "Dark Magician", "Universal Ruler", "Blinded By Darkness", "Dark Herald", "Shadow Lord", "Nightmare", "Abyssal Sovereign", "Eclipse", "Void Emperor", "Darkness Incarnate", "Nether King", "Cosmic Shadow", "Black Hole", "Eternal Night", "Omega Darkness"]
}

/** @type {Record<string, string[]>} */
const itemCategories = {
    "Properties": ["Homeless", "Tent", "Shack", "Wooden Hut", "Log Cabin", "Cottage", "House", "Stone Manor", "Large House", "Noble Estate", "Small Palace", "Royal Keep", "Grand Palace", "Duchy", "Town Ruler", "Principality", "City Ruler", "Empire", "Nation Ruler", "Subspace Haven", "Pocket Dimension", "Dimensional Bastion", "Void Realm", "Rift Citadel", "Void Universe", "Ether Sanctum", "Astral Realm", "Celestial Citadel", "Galactic Throne", "Star Dreadnought", "Spaceship", "Dyson Sphere", "Planet", "Matrioshka Brain", "Ringworld", "Stellar Neighborhood", "Local Group", "Galaxy", "Virgo Supercluster", "Supercluster", "Great Attractor", "Galaxy Filament", "Cosmic Web", "Observable Universe", "Parallel Reality", "Multiverse", "Omniverse", "Quantum World", "Zero-Point Domain", "Boötes Void", "Metaverse Core"],
    "Misc": ["Book", "Quill & Ink", "Dumbbells", "Whetstone", "Personal Squire", "Lantern", "Steel Longsword", "Iron Shield", "Butler", "Fine Wine", "Merchant Ledger", "Sapphire Charm", "Alchemy Kit", "Silver Astrolabe", "Study Desk", "Enchanted Quill", "War Banner", "Library", "Arcane Focus", "Royal Feast", "Observatory", "Chronometer", "Crystal Ball", "Mind's Eye", "Philosopher's Stone", "Shadow Cloak", "Void Necklace", "Abyssal Tome", "Void Gauntlets", "Void Armor", "Rift Compass", "Void Blade", "Null Crown", "Void Orb", "Void Crystal", "Void Dust", "Abyss Heart", "Star Map", "Celestial Robe", "Astral Crown", "Nebula Core", "Universe Fragment", "Cosmic Pendulum", "Galactic Scepter", "Multiverse Fragment", "Infinity Prism", "Dimensional Key", "Reality Anchor", "Aether Engine", "Quantum Processor", "Seraphic Halo", "Stairway to heaven", "Infernal Throne", "Highway to hell", "Chronos Hourglass", "Tesseract", "Hypercube Matrix", "Dark Matter Reactor", "Desintegration", "Singularity Engine", "Essence Condenser", "Custom Galaxy", "Multiverse Loom", "Void Singularity", "Astral Crucible", "Hyperdimensional Core", "Omega Codex", "Metaverse Conduit", "Hypersphere", "Reality Compiler", "Genesis Seed", "Absolute Infinity"]
}

const headerRowColors = {
    "Almightiness": "rgb(24, 210, 217)",
    "Celestial Powers": "rgb(213, 192, 16)",
    "Combat": "rgb(230, 57, 70)",
    "Common work": "rgb(85, 166, 48)",
    "Dark Magic": "rgb(115, 0, 15)",
    "Dark Milestones": "rgb(135, 49, 96)",
    "Darkness": "rgb(140, 106, 11)",
    "Essence Milestones": "rgb(0, 102, 255)",
    "Fundamentals": "rgb(85, 166, 48)",
    "Galactic Council": "rgb(213, 192, 16)",
    "Heroic Milestones": "rgb(255, 102, 0)",
    "Magic": "rgb(199, 21, 133)",
    "Metaverse Guards": "rgb(9, 160, 230)",
    "Metaverse Milestones": "rgb(9, 160, 230)",
    "Military": "rgb(230, 57, 70)",
    "Misc": "rgb(181, 101, 118)",
    "Misc_Auto": "rgb(245, 69, 70)",
    "Properties": "rgb(33, 158, 188)",
    "Properties_Auto": "rgb(33, 204, 94)",
    "The Arcane Association": "rgb(199, 21, 133)",
    "The Void": "rgb(118, 43, 145)",
    "Void Manipulation": "rgb(118, 43, 145)",
    "Underworld": "rgb(95, 105, 115)",
    "Alchemy & Artificing": "rgb(46, 139, 87)",
    "Celestial Order": "rgb(218, 165, 32)",
    "Technomancy": "rgb(0, 180, 216)",
}

const headerRowTextColors = {
    "Common work": "darkblue",
    "Military": "purple",
    "The Arcane Association": "magenta",
    "The Void": "white",
    "Galactic Council": "purple",
    "Fundamentals": "purple",
    "Combat": "pink",
    "Magic": "purple",
    "Dark Magic": "pink",
    "Almightiness": "purple",
    "Darkness": "gold",
    "Void Manipulation": "white",
    "Celestial Powers": "purple",
    "Properties_Auto": "purple",
    "Misc_Auto": "purple",
    "Properties": "purple",
    "Misc": "purple",
    "Essence Milestones": "purple",
    "Heroic Milestones": "purple",
    "Dark Milestones": "purple",
    "Metaverse Milestones": "purple",
    "Metaverse Guards": "purple",
}


const lightModeWarnings = [
    {
        title: "ARE YOU SURE?",
        text: "Your retinas are about to be vaporized by the power of a thousand suns."
    },
    {
        title: "FLASHBANG INCOMING!",
        text: "Are you absolutely sure you want to scorch your eyeballs?"
    },
    {
        title: "WHO HURT YOU?",
        text: "Why on earth would anyone play an incremental game in light mode?"
    },
    {
        title: "ERROR 404: SANITY NOT FOUND",
        text: "Why are you doing this to yourself? (Also, it might be extremely buggy)."
    },
    {
        title: "THE FORBIDDEN ZONE",
        text: "Bugs live here. Bright, blinding, untested bugs. Proceed at your own risk!"
    },
    {
        title: "CRIME AGAINST HUMANITY",
        text: "Light mode is highly unstable, experimental, and frankly, illegal in 50 countries."
    },
    {
        title: "VAMPIRE DETECTION TEST",
        text: "Are you trying to test your limits? Because this is going to hurt. A lot."
    },
    {
        title: "A DEVELOPER IS CRYING",
        text: "Legend says that every time someone turns on light mode, a dev cries. Do you want that?"
    },
    {
        title: "CONGRATULATIONS!",
        text: "You found the 'Flashbang' button. Ready to see the light (and literally nothing else)?"
    }
];

function getRandomWarning() {
    return lightModeWarnings[floor(random() * lightModeWarnings.length)];
}

/**
 * 
 * @param {string} taskName 
 * @returns 
 */
function getPreviousTaskInCategory(taskName) {
    var prev = ""
    for (const category in jobCategories) {
        for (const job of jobCategories[category]) {
            if (job == taskName)
                return prev
            prev = job
        }
    }

    prev = ""
    for (const category in skillCategories) {
        for (const skill of skillCategories[category]) {
            if (skill == taskName)
                return prev
            prev = skill
        }
    }

    prev = ""
    for (const category in itemCategories) {
        for (const item of itemCategories[category]) {
            if (item == taskName)
                return prev
            prev = item
        }
    }

    return prev
}

function initializeSkillBindings() {
    for (const key in gameData.skillData) {
        const skill = gameData.skillData[key]
        skill.boundEffect = skill.getEffect.bind(skill);
    }
}

function initializeItemBindings() {
    for (const key in gameData.itemData) {
        const item = gameData.itemData[key];
        item.boundEffect = item.getEffect.bind(item);
    }
}

/**
 * 
 * @param {string} skillName 
 * @returns {function}
 */
function getBindedSkillEffect(skillName) {
    return gameData.skillData[skillName].boundEffect;
}

/**
 * 
 * @param {string} itemName 
 * @returns {function}
 */
function getBindedItemEffect(itemName) {
    return gameData.itemData[itemName].boundEffect;
}

function checkRequirementInReach(currentValue, availableGain, requiredValue) {
    if (requiredValue == null) return { inReach: false, requirement: null };

    const total = currentValue + availableGain;
    return {
        inReach: total >= requiredValue,
        requirement: requiredValue
    };
}

function getNextDarkMagicRequired() {
    for (const key in gameData.taskData) {
        if (skillCategories["Dark Magic"].includes(key)) {
            const requirement = gameData.requirements[key];
            if (!requirement.completed) return requirement.requirements[0].requirement;
        }
    }
    return null;
}

function getNextDarkMatterRequired() {
    for (const key in gameData.requirements) {
        const requirement = gameData.requirements[key];
        if (requirement instanceof DarkMatterRequirement && !requirement.completed) {
            return requirement.requirements[0].requirement;
        }
    }
    return null;
}

function getNextMilestoneRequired() {
    for (const key in milestoneData) {
        const requirement = gameData.requirements[key];
        if (requirement instanceof EssenceRequirement && !requirement.completed) {
            return requirement.requirements[0].requirement;
        }
    }
    return null;
}
