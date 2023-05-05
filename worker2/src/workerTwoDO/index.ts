class WorkerTwoDO implements DurableObject {
  constructor(private readonly state: DurableObjectState) {}

  async fetch(request: Request): Promise<Response> {
    return new Response("Hello DO2 works", {
      status: 200,
    });
  }
}

export default WorkerTwoDO;
