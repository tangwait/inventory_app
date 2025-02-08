#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
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
      connectionString: "postgresql://tangwai:tangwai-examples@localhost:5432/inventory_db",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();