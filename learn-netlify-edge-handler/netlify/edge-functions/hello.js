import "https://deno.land/x/dotenv/load.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

export default () =>
  new Response(`Hello world and Hello ${config()["GREETING"]}`);
