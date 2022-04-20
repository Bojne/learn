import "https://deno.land/x/dotenv/load.ts";

export default () =>
  new Response(`Hello world and Hello ${Deno.env.get("GREETING")}`);
