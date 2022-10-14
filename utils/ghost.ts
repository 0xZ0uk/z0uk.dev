import GhostContentAPI from "@tryghost/content-api";

// Create an instance of the GhostContentAPI
const api = new GhostContentAPI({
  url: "https://cms.bluapps.xyz",
  key: process.env.NEXT_PUBLIC_CONTENT_API || "", // replace this with your API key
  version: "v5.0",
});

export const getPosts = async (limit = "all") => {
  try {
    return await api.posts.browse({
      limit,
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

export const getPostsByCategory = async (category: string) => {
  try {
    return await api.posts.browse({
      include: ["authors", "tags"],
      filter: [`tag:${category}`]
    });
  } catch (error) {
    console.error(error);
  }
}

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

export const getCategories = async () => {
  try {
    return await api.tags.browse({
      limit: "all",
    });
  } catch (error) {
    console.error(error);
  }
}

export const getCategoryBySlug = async (slug: string) => {
  try {
    return await api.tags.read({
      slug,
    }, {
      include: ["count.posts"],
    });
  } catch (error) {
    console.error(error);
  }
}