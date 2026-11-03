
export async function onRequest(context) {
  const { env } = context;

  return Response.json({
    success: true,
    app: "DataFlux",
    backend: "online",
    database_configured: !!(
      env.SUPABASE_URL &&
      env.SUPABASE_PUBLISHABLE_KEY
    )
  });
}

