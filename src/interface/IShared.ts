export interface IBidder { name: string; bids: number[] }
export interface IWinnerBid {
    winner: string | null;
    winningPrice: number;
  }
  