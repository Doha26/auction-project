import { Auction } from './domain/Auction';
import { AuctionService } from './application/auction.service';
import { DisplayAuctionPresenter } from './interface/DisplayAuctionPresenter';

// Exemple d'enchérisseurs. (2 inputs en entrée : Le nom de l'enchérisseur et ses différentes enchères)
const bidders = [
  { name: 'A', bids: [110, 130] },
  { name: 'B', bids: [] },
  { name: 'C', bids: [125] },
  { name: 'D', bids: [105, 115, 90, 133] },
  { name: 'E', bids: [132, 135, 140] }
];

// Intitialisation de l'enchère avec le prix de réserve
const auction = new Auction(100);

// Petite couche pour l'affiche du résultat
const presenter = new DisplayAuctionPresenter();


const auctionService = new AuctionService(auction, presenter);

// On exécute l'encheère et on affiche le Gagnant
const result = auctionService.runAuction(bidders);
