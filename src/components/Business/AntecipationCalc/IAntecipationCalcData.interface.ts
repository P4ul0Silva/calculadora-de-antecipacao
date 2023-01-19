export interface IAntecipationCalcData {

    amount: number;
    installments: number;
    mdr: number;
    days?: [number]
}

export interface IAntecipationResultData {

    [index: number]: [number];
}
