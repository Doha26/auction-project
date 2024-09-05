// src/interface/IAuctionPresenter.ts
export interface IAuctionPresenter {
    present(winner: string, winningPrice: number): void;
  }
  