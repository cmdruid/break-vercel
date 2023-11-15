# break vercel (cors)

A simple web project to demonstrate some issues with vercel, CORS, and custom headers.

## Setup

Install dependencies for server.

`yarn install`

Install dependencies for client.

`cd client && yarn install`

## Overview

The `api` folder has a simple endpoint with a recommended cors middleware. This middleware was taken from the following url:

[How can I enable CORS on Vercel?](https://vercel.com/guides/how-to-enable-cors)

You can start the vercel server using `vercel dev`.

> Note: Feel free to add / remove the cors middleware to demonstrate that it is working under normal conditions.

The `client` folder has a basic vite app that uses the `useSWR` package to fetch from the `api` endpoint.

You can start the client app using `cd client && yarn dev`

## Issue

The issue appears to be when a custom key is used in the request header.

Typically, the policy set in the `allowCors` middleware should take effect, however something within the vercel server appears to be rejecting the request before the middleware.

