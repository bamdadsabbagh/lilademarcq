type ContentfulResponse<T> = {
  data: T;
}

export async function fetchContentful<Collection>(
  query: string,
  preview = false,
): Promise<Collection> {
  const f = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({query}),
    },
  );

  const response: ContentfulResponse<Collection> = await f.json();

  if (!response?.data) {
    throw new Error('No data found');
  }

  return response.data;
}
