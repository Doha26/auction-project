import { Auction } from '../src/domain/Auction';

describe('Auction System', () => {
  let auction: Auction;

  beforeEach(() => {
    auction = new Auction(100); // Reserve price is set to 100
  });

  test('Single bidder with a bid above the reserve price wins', () => {
    auction.addBid({ bidder: 'A', amount: 150 });
    const { winner, winningPrice } = auction.determineWinner();

    expect(winner).toBe('A');
    expect(winningPrice).toBe(100); // No other valid bid, so reserve price is used
  });

  test('Multiple bidders with valid bids', () => {
    auction.addBid({ bidder: 'A', amount: 110 });
    auction.addBid({ bidder: 'B', amount: 120 });
    auction.addBid({ bidder: 'C', amount: 130 });

    const { winner, winningPrice } = auction.determineWinner();

    expect(winner).toBe('C');
    expect(winningPrice).toBe(120); // Second highest bid wins the price
  });

  test('Bid exactly at the reserve price', () => {
    auction.addBid({ bidder: 'A', amount: 100 });

    const { winner, winningPrice } = auction.determineWinner();

    expect(winner).toBe('A');
    expect(winningPrice).toBe(100); // The reserve price is the winning price
  });

  test('No bids at all', () => {
    const { winningPrice, winner } = auction.determineWinner();

    expect(winningPrice).toBe(100); // No bids, reserve price should win
    expect(winner).toBe(null); // No bids, reserve price should win
  });

  test('Bids below the reserve price', () => {
    auction.addBid({ bidder: 'A', amount: 90 });
    auction.addBid({ bidder: 'B', amount: 95 });

    const { winningPrice, winner } = auction.determineWinner();

    expect(winningPrice).toBe(100); // All bids are below the reserve price, so reserve price wins
    expect(winner).toBe(null); // No winner
  });

  test('Highest bidder wins and second-highest bid is the winning price', () => {
    auction.addBid({ bidder: 'A', amount: 110 });
    auction.addBid({ bidder: 'B', amount: 115 });
    auction.addBid({ bidder: 'C', amount: 130 });
    auction.addBid({ bidder: 'D', amount: 140 });

    const { winner, winningPrice } = auction.determineWinner();

    expect(winner).toBe('D');
    expect(winningPrice).toBe(130); // Second highest valid bid is €130
  });

  test('Multiple bids by the same bidder, only highest should count', () => {
    auction.addBid({ bidder: 'A', amount: 110 });
    auction.addBid({ bidder: 'A', amount: 150 }); // A's second bid should count
    auction.addBid({ bidder: 'B', amount: 120 });
    auction.addBid({ bidder: 'C', amount: 130 });

    const { winner, winningPrice } = auction.determineWinner();

    expect(winner).toBe('A');
    expect(winningPrice).toBe(130); // Second highest bid by C
  });
});
