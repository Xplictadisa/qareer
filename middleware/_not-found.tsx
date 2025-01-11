const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!clerkKey) {
  throw new Error(
    'Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable.'
  );
}
