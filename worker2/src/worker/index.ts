export interface Env {
  WORKERONE: Fetcher;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const res = await env.WORKERONE.fetch("http://WORKERONE/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "Hello lkdfjghs;lkjgdfsfdg;ljkdfgsjkl;!",
    });

    return new Response("Hello World!");
  },
};
