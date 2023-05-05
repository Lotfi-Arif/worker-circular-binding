class WorkerOneDO implements DurableObject {
  constructor(private readonly state: DurableObjectState) {}

  async fetch(request: Request): Promise<Response> {
    return new Response("Hello DO1 works", {
      status: 200,
    });
  }
}

export default WorkerOneDO;
