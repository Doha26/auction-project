import { Bid } from ".";
import { IWinnerBid } from "../interface";

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
  determineWinner(): IWinnerBid {
    if (this.bids.length === 0) {
      return { winner: null, winningPrice: this.reservePrice }; // Reserverd price win if no winner
    }

    // Sort bids from highest to lowest
    const sortedBids = this.bids.sort((a, b) => b.amount - a.amount);

    // The highest bid determines the winner
    const winningBid = sortedBids[0];

    // Filter out bids made by the winning bidder to find the second-highest bid
    const nonWinningBids = sortedBids.filter(
      (bid) => bid.bidder !== winningBid.bidder
    );
    const secondHighestBid =
      nonWinningBids.length > 0 ? nonWinningBids[0].amount : this.reservePrice;

    return {
      winner: winningBid.bidder,
      winningPrice: secondHighestBid,
    };
  }
}
