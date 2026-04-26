/**
 * FuetePVP shop — edit modal text, perks, and Stripe links here.
 * Each store card uses data-product-id matching a key under products.
 */
window.SHOP_CONFIG = {
  products: {
    'coins-500': {
      description:
        'FueteCoins are the in-game currency for the FuetePVP server. Spend them on items, perks, and cosmetic upgrades.',
      perks: [
        '500 coins credited to your account',
        'Spend in the server store',
        'Instant delivery after purchase',
        'Secure checkout',
      ],
      checkoutUrl: 'https://buy.stripe.com/3cI6oJeBRcl6gNYgze8EM02',
    },
    'coins-1000': {
      description:
        'FueteCoins are the in-game currency for the FuetePVP server. Spend them on items, perks, and cosmetic upgrades.',
      perks: [
        '1000 coins credited to your account',
        'Spend in the server store',
        'Instant delivery after purchase',
        'Secure checkout',
      ],
      checkoutUrl: 'https://buy.stripe.com/8x2aEZfFV3OAbtEfva8EM05',
    },
    'coins-2500': {
      description:
        'FueteCoins are the in-game currency for the FuetePVP server. Spend them on items, perks, and cosmetic upgrades.',
      perks: [
        '2500 coins credited to your account',
        'Spend in the server store',
        'Instant delivery after purchase',
        'Secure checkout',
      ],
      checkoutUrl: 'https://buy.stripe.com/bJe8wRctJgBm8hs1Ek8EM06',
    },
    'coins-5000': {
      description:
        'FueteCoins are the in-game currency for the FuetePVP server. Spend them on items, perks, and cosmetic upgrades.',
      perks: [
        '5000 coins credited to your account',
        'Spend in the server store',
        'Instant delivery after purchase',
        'Secure checkout',
      ],
      checkoutUrl: 'https://buy.stripe.com/9B65kFdxNgBmgNY2Io8EM07',
    },
    'exclusive-vip-february': {
      description:
        'KILLERHAWK (300MPH): widebody SUV build (Trackhawk-style). Replace copy and add checkoutUrl when ready.',
      perks: [
        'Vehicle or cosmetic (server rules)',
        'In-game delivery',
        'Edit perks in shop-config.js',
      ],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-2': {
      description:
        'F480R (300MPH): purple widebody BMW M4–style build. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-3': {
      description:
        'HYCADE URUS widebody (450MPH): premium orange Lamborghini Urus build with Hycade kit. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/aFa9AVdxN1Gs2X8ciY8EM0c',
    },
    'cars-r1-4': {
      description:
        'REBLA6GTS (300MPH): purple BMW X6 M–style build. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-5': {
      description:
        'SXR (265MPH): white sport motorcycle. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/aFacN7alB4SE55gfva8EM08',
    },
    'cars-r1-6': {
      description:
        'OBEYRS6KEY (260MPH): white RS6 Avant–style wagon with carbon hood. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/8x27sNalBcl6gNYaaQ8EM09',
    },
    'cars-r1-7': {
      description:
        'BCS_BM3N (250MPH): purple widebody BMW M3–style sedan. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/8x27sNalBcl6gNYaaQ8EM09',
    },
    'cars-r1-8': {
      description:
        'ZR390 (450MPH): yellow sports coupe (370Z-style). Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/aFa9AVdxN1Gs2X8ciY8EM0c',
    },
    'cars-r1-9': {
      description:
        'DUBMONO2 (300 MPH): purple widebody Mercedes G-Class build. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-10': {
      description:
        'JUBILEE2 (300 MPH): red widebody Enus Jubilee (Cullinan-style). Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-11': {
      description:
        'HYCADEEVO (230 MPH): grey widebody Evo X–style build. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/8x27sNalBcl6gNYaaQ8EM09',
    },
    'cars-r1-12': {
      description:
        '500 (300 MPH): red widebody Land Cruiser 300–style SUV. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-13': {
      description:
        'XLSGT (300 MPH): blue Mercedes GLC Coupe–style SUV. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-14': {
      description:
        'GCB23X7 (300 MPH): purple BMW X7–style SUV. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-15': {
      description:
        'GSTREB1 (300 MPH): grey widebody BMW X5–style SUV. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-16': {
      description:
        'REBLAX6 (300 MPH): red widebody four-door sports sedan. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-17': {
      description:
        'GT63MT (300 MPH): purple widebody Mercedes-AMG GT 4-door. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-18': {
      description:
        'VELENO (300 MPH): dark purple luxury SUV (Purosangue-style). Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-19': {
      description:
        'S1000RR (265 MPH): black BMW S1000RR–style sport bike. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/aFacN7alB4SE55gfva8EM08',
    },
    'cars-r1-21': {
      description:
        'GSL600LARTE (300 MPH): purple Mercedes-Maybach GLS 600 / Larte-style SUV. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-22': {
      description:
        'TENERE1200 (390 MPH): green adventure bike (Super Ténéré 1200–style). Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/aFa9AVdxN1Gs2X8ciY8EM0c',
    },
    'cars-r1-23': {
      description:
        'OBEYSR7 (300 MPH): purple metallic performance sedan (Audi RS4–style). Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-24': {
      description:
        '2NCSX7 (300 MPH): purple metallic BMW X5 M–style SUV with widebody styling. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'cars-r1-25': {
      description:
        'R1200GS (290 MPH): white adventure motorcycle (BMW R 1200 GS–style). Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/aFacN7alB4SE55gfva8EM08',
    },
    'cars-r1-26': {
      description:
        'GCB23X7 (300 MPH): purple metallic BMW X7–style SUV. Replace copy and add checkoutUrl when ready.',
      perks: ['Vehicle or cosmetic (server rules)', 'In-game delivery', 'Edit perks in shop-config.js'],
      checkoutUrl: 'https://buy.stripe.com/7sYeVfgJZ1Gs8hsdn28EM0b',
    },
    'unban-cheater': {
      description:
        'Appeal and processing for a ban related to cheating. Follow staff instructions after purchase. Processing time may vary.',
      perks: [
        'Case review for cheat-related bans',
        'Staff follow-up on your appeal',
        'One-time product per purchase',
        'No guarantee of unban — case dependent',
      ],
      checkoutUrl: 'https://buy.stripe.com/8x2aEZ0L1acY41cgze8EM03',
    },
    'unban-standard': {
      description:
        'Standard unban for bans that are not cheat-related. Follow staff instructions and provide any requested information after purchase.',
      perks: [
        'Review for non-cheat bans',
        'Staff follow-up on your appeal',
        'One-time product per purchase',
        'Processing time may vary',
      ],
      checkoutUrl: 'https://buy.stripe.com/fZu5kFalBfxi41cfva8EM04',
    },
    crew: {
      description:
        'Create your crew on the server: invite members, get a crew tag, and unlock crew features according to server rules.',
      perks: [
        'Crew creation slot',
        'Invite and manage members',
        'Crew tag and identity',
        'Subject to server crew rules',
      ],
      checkoutUrl: 'https://buy.stripe.com/cNi7sNdxN84Q41cbeU8EM00',
    },
    'rank-bronze': {
      perks: [
        'Access to Kit Bronze (every day)',
        '[Bronze] Title in the chat',
        'Queue priority',
        'Bronze role on Discord',
      ],
      kitContents: [
        { text: '1 Pistol.50', icon: 'images/kit-gold-pistol50.png' },
        { text: '2 Pistol', icon: 'images/WEAPON_PISTOL.png' },
        { text: '2 SNS', icon: 'images/WEAPON_SNSPISTOL.png' },
        { text: '5 Armour', icon: 'images/kit-gold-armour.png' },
        { text: '500 Ammo', icon: 'images/kit-gold-ammo.png' },
      ],
      checkoutUrl: 'https://buy.stripe.com/7sYeVf79pacYeFQ82I8EM0d',
    },
    'rank-gold': {
      perks: [
        'Access to Kit Gold (every day)',
        '[Gold] Title in the chat',
        'Queue priority',
        'Earn F-Coins from your kit',
        'Gold role on Discord',
      ],
      kitContents: [
        { text: '1 Special Carbine', icon: 'images/kit-gold-special-carbine.png' },
        { text: '1 CombatPDW', icon: 'images/kit-gold-combatpdw.png' },
        { text: '3 Pistol.50', icon: 'images/kit-gold-pistol50.png' },
        { text: '1 Pistol', icon: 'images/WEAPON_PISTOL.png' },
        { text: '600 Ammo', icon: 'images/kit-gold-ammo.png' },
        { text: '6 Armour', icon: 'images/kit-gold-armour.png' },
        { text: '10 F-Coin', icon: 'images/kit-gold-fcoin.png' },
      ],
      checkoutUrl: 'https://buy.stripe.com/cNi28talBbh2gNYbeU8EM0f',
    },
    'rank-silver': {
      perks: [
        'Access to Kit Silver (every day)',
        '[Silver] Title in the chat',
        'Queue priority',
        'Silver role on Discord',
      ],
      kitContents: [
        { text: '1 SMG', icon: 'images/kit-silver-smg.png' },
        { text: '2 Pistol.50', icon: 'images/kit-gold-pistol50.png' },
        { text: '2 Pistol', icon: 'images/WEAPON_PISTOL.png' },
        { text: '5 Armour', icon: 'images/kit-gold-armour.png' },
        { text: '500 Ammo', icon: 'images/kit-gold-ammo.png' },
      ],
      checkoutUrl: 'https://buy.stripe.com/bJe5kFfFVete2X882I8EM0e',
    },
  },
};
