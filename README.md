# Auction Project

This project simulates a second-price sealed-bid auction (Vickrey Auction) using TypeScript, following the principles of **SOLID**, **Clean Code**, and **Clean Architecture**. It allows bidders to place bids, and the highest bidder wins the auction but pays the second-highest price.

## How It Works

- **Bids** are placed by multiple bidders.
- **Reserve price**: Only bids that meet or exceed the reserve price are considered.
- **Winner**: The bidder with the highest valid bid wins.
- **Second price**: The winner pays the second-highest valid bid. If no other valid bids exist, the winner pays the reserve price.