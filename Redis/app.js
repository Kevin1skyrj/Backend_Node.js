import { createClient } from "redis";

const client = await createClient().connect();

client.destroy()