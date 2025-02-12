#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  creator TEXT
);

INSERT INTO items (name, creator) 
VALUES
  ('Corn', 'Tom'),
  ('Cows', 'Kenny'),
  ('Chicken', 'Cam')
ON CONFLICT (name) DO NOTHING;
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes("render.com") ? { rejectUnauthorized: false } : false,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();