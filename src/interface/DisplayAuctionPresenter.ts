// src/interface/ConsoleAuctionPresenter.ts
import chalk from "chalk";
import { IAuctionPresenter } from "./IAuctionPresenter";
import { EMOJIS } from "../utils";

export class DisplayAuctionPresenter implements IAuctionPresenter {
  present(winner: string, winningPrice: number): void {
    const { trophyEmoji, moneyBagEmoji, partyPopperEmoji } =
      EMOJIS;

    const title = chalk.bold.bgMagenta.white;
    const winnerStyle = chalk.bold.yellowBright;
    const priceStyle = chalk.bold.greenBright;
    const highlight = chalk.cyanBright;

    console.log(
      chalk.green("====================================================================")
    );
    console.log(title.blueBright("\n🏆🎉 Auction Results 🎉🏆\n"));

    console.log(
      `- ${highlight("Auction Winner:")} ${winnerStyle(
        winner
      )} ${trophyEmoji}`
    );
    console.log(
      `- ${highlight("Winning Price:")} ${priceStyle(
        `€${winningPrice} ${moneyBagEmoji}`
      )}`
    );

    console.log(
      `\n${partyPopperEmoji} Congratulations to ${winnerStyle(
        winner
      )}! You won the auction for ${priceStyle(
        `€${winningPrice}`
      )}! ${partyPopperEmoji}\n`
    );

    console.log(
      chalk.green("====================================================================")
    );
  }
}
