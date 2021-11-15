import {createMutable } from 'solid-js/store'

export const funds = createMutable({
    total: 0,
    balance: 1000,
    funds: [
		{ name: "Fund A", percentage: 0, id: 1 },
		{ name: "Fund B", percentage: 0, id: 2 },
		{ name: "Fund C", percentage: 0, id: 3 },
		{ name: "Fund D", percentage: 0, id: 4 },
		{ name: "Fund E", percentage: 0, id: 5 },
	] as Fund[],
    get getFunds() {
        return this.funds;
    },
    getFund(id: number): Fund {
        return this.funds[id-1];
    },
    updateFund(payload: any) {
        const tempFunds = [...this.funds] as Fund[]
        tempFunds[payload.idx-1].percentage = payload.percentage;
        const newTotal = tempFunds.reduce((acc, fund) => acc + fund.percentage, 0);
        const remainingAmt = Number((1000 - newTotal * 1000).toFixed(2));
        if (remainingAmt < 0) {
            return;
        }
        this.funds = tempFunds;
        this.getFund(payload.idx).percentage = payload.percentage;
        this.total = Number(newTotal.toFixed(2))*1000;
        this.balance = remainingAmt;
    },
    addFundAmount(id: number, amount: number) {
        this.getFund(id).percentage = amount;
    }
})

export interface Fund {
    name: string,
    percentage: number,
    id: number
}