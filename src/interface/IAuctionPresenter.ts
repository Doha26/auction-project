import { IWinnerBid } from '.';
export interface IAuctionPresenter {
  present(winnerBid: IWinnerBid): void;
}
