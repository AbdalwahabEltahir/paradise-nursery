# paradise-nursery
# Paradise Nursery

Paradise Nursery is a front-end shopping application for houseplants. Users can browse plants by category, add them to a shopping cart, adjust quantities, and view the total cost before checkout.

**Live demo:** https://YOUR-USERNAME.github.io/paradise-nursery/

## Features

- **Landing page** with a background image, company name, short company description, and a Get Started button
- **Product listing page** with plants grouped into three categories, each showing a thumbnail, name, and price
- **Add to Cart** button that disables after a plant is added
- **Navigation bar** on the Plants and Cart pages with links to Home, Plants, and Cart
- **Cart icon** in the header showing the total number of items, updated dynamically
- **Shopping cart page** with:
  - Thumbnail, name, unit price, and subtotal for each plant
  - Increase and decrease quantity buttons
  - Delete button for each plant
  - Total number of plants and total cost
  - Continue Shopping button (returns to the product page)
  - Checkout button (shows "Coming Soon")

## Tech Stack

- React (Vite)
- Redux Toolkit and React Redux for cart state
- CSS
- GitHub Pages for deployment

## Project Structure

```
src/
  main.jsx         Entry point, Redux Provider
  App.jsx          Landing page and page navigation
  AboutUs.jsx      Company description
  ProductList.jsx  Product listing page and navbar
  CartItem.jsx     Shopping cart page
  CartSlice.jsx    Redux slice for the cart
  store.js         Redux store
  App.css          Styles
```

## Run Locally

```bash
git clone https://github.com/YOUR-USERNAME/paradise-nursery.git
cd paradise-nursery
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```

## Author

Abdalwahab Eltahir
