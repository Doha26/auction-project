import { AuctionService } from './application';
import { Auction } from './domain/Auction';
import { DisplayAuctionPresenter } from './presenter';

// Sample Bidders (2 entry inputs : Bidder name, and his  different bids)
const bidders = [
  { name: 'A', bids: [110, 130] },
  { name: 'B', bids: [] },
  { name: 'C', bids: [125] },
  { name: 'D', bids: [105, 115, 90, 133] },
  { name: 'E', bids: [132, 135, 140] }
];

// Initialize the auction with a reserve price
const auction = new Auction(100);

// Small layer to display the result 
const presenter = new DisplayAuctionPresenter();

// Initialize the auction service
const auctionService = new AuctionService(auction, presenter);

// Run the auction and display the results
const result = auctionService.runAuction(bidders);
