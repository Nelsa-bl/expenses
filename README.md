# Expense tracking for Alasco HQ

Built using Remix - [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Background

We at Alasco have gotten bigger since we moved into our last office, and as a
real estate success software company, we want to empathise with our customers
by building our next headquarters and our software at the same time.

We have already created an internal service which is acting as a datastore for
our expense tracking, however we need some way to see these.

## Tasks

Your task is to build a UI which reads these expenses from the data store, and
shows them in a sensible format.

1. Display a list of existing expenses
   - You can retrieve these expenses from an endpoint described by `API_URL` in `app/config.ts`
   - The ID is not important for our end users
2. Display both net and gross amounts for each expense
   - The gross amount is the sum of the net and tax amounts
   - These are monetary values, so they must be formatted appropriately
3. Display a summary showing the total value of the expenses
4. Users have requested a feature to filter this list. We want to test a
   prototype where a user can "favourite" an expense, and filter the list to
   only show their favourites
   - Prototype this in memory (favourites do not have to be persisted)
   - A user can favourite an individual expense
   - A user can filter the list of expenses in two modes: "show favourited" or "show all"
