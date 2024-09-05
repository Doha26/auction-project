import { Bid } from './Bid';

export class Auction {
  private bids: Bid[] = [];

  constructor(private reservePrice: number) {}

  // Add a valid bid to the auction (only if it meets the reserve price)
  addBid(bid: Bid): void {
    if (bid.amount >= this.reservePrice) {
      this.bids.push(bid);
    }
  }

  // Determine the auction winner and the price they pay
  determineWinner(): { winner: string; winningPrice: number } {
    if (this.bids.length === 0) {
      throw new Error('No valid bids were placed.');
    }

    // Sort bids from highest to lowest
    const sortedBids = this.bids.sort((a, b) => b.amount - a.amount);

    // The highest bid determines the winner
    const winningBid = sortedBids[0];

    // Filter out bids made by the winning bidder to find the second-highest bid
    const nonWinningBids = sortedBids.filter(bid => bid.bidder !== winningBid.bidder);
    const secondHighestBid = nonWinningBids.length > 0 ? nonWinningBids[0].amount : this.reservePrice;

    return {
      winner: winningBid.bidder,
      winningPrice: secondHighestBid
    };
  }
}
