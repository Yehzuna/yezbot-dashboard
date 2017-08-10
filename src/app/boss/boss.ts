export interface Boss {
    id: number;
    name: string;
    img: string;
    hp: number;
    hpMax: number;
    mp: number;
    mpMax: number;
    absorbs: number;
    shieldCost: number;
    shieldValue: number;
    shieldAmount: number;
    blockCost: number;
    blockValue: number;
    buff: boolean;
    buffValue: number;
    critical: boolean;
    criticalValue: number;
    dodge: boolean;
    dodgeValue: number;
    subscriber: boolean;
    subscriberValue: number;
}

/*
{
    id: 0,
    name: '',
    img: '',
    hp: 1000,
    hpMax: 1000,
    mp: 100,
    mpMax: 100,
    absorbs: 0,
    shieldCost: 20,
    shieldValue: 30,
    shieldAmount: 3,
    blockCost: 40,
    blockValue: 300,
    buff: true,
    buffValue: 200,
    critical: true,
    criticalValue: 20,
    dodge: true,
    dodgeValue: 20,
    subscriber: true,
    subscriberValue: 10,
}
