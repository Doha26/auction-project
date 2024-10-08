import { Auction, Bid } from '../domain';
import { IBidder } from '../interface';
import { IAuctionPresenter } from '../interface/IAuctionPresenter';

export class AuctionService {
  constructor(
    private auction: Auction,
    private presenter: IAuctionPresenter
  ) {}

  // Process the bids and return the auction result
  runAuction(bidders: IBidder[]): void {
    bidders.forEach((bidder) => {
      bidder.bids.forEach((amount) => {
        const bid = new Bid(bidder.name, amount);
        this.auction.addBid(bid);
      });
    });

    // Determine the winner and winning price
    const { winner, winningPrice } = this.auction.determineWinner();

    // Present the result using the presenter
    this.presenter.present({ winner, winningPrice });
  }
}
