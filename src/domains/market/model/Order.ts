export class Order {
  constructor(
    public id: string,
    public marketId: string,
    public userId: string,
    public amount: number,
    public outcome: 'YES' | 'NO',
    public shares: number,
    public createdAt: Date
  ) {}

  // 计算预期收益
  calculatePotentialProfit(probability: number): number {
    if (this.outcome === 'YES') {
      return this.shares * (1 - probability) - this.amount;
    } else {
      return this.shares * probability - this.amount;
    }
  }
}