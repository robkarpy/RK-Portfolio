import type { QueryParams } from "next-sanity";

import { client } from "./client";

export async function sanityFetch<QueryResult>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResult> {
  return client.fetch<QueryResult>(query, params, {
    next: { tags },
  });
}
