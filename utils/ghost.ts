import GhostContentAPI from "@tryghost/content-api";

// Create an instance of the GhostContentAPI
const api = new GhostContentAPI({
  url: "https://cms.bluapps.xyz",
  key: process.env.NEXT_PUBLIC_CONTENT_API || "", // replace this with your API key
  version: "v5.0",
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
    }, {
      include: ["authors", "tags"]
    });
  } catch (error) {
    console.error(error);
  }
};

export const getPages = async () => {
  try {
    return await api.pages.browse({
      limit: "all",
      include: ["tags"]
    });
  } catch (error) {
    console.error(error);
  }
}

export const getPageBySlug = async (slug: string) => {
  try {
    return await api.pages.read({
      slug,
    }, {
      include: ["tags"]
    });
  } catch (error) {
    console.error(error);
  }
}