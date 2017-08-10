export interface Boss {
    id: number;
    name: string;
    img: string;
    hp: number;
    hpMax: number;
    mp: number;
    mpMax: number;
    absorbs: number;
    reduce: number;
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