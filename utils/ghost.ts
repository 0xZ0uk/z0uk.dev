import GhostContentAPI from "@tryghost/content-api";

// Create an instance of the GhostContentAPI
const api = new GhostContentAPI({
  url: "https://cms.bluapps.xyz",
  key: process.env.NEXT_PUBLIC_CONTENT_API || "", // replace this with your API key
  version: "v4",
});

export const getPosts = async () => {
  try {
    return await api.posts.browse({
      limit: "all",
      include: ["authors", "tags"]
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSinglePost = async (slug: string) => {
  try {
    return await api.posts.read({
      slug,
    });
  } catch (error) {
    console.error(error);
  }
};