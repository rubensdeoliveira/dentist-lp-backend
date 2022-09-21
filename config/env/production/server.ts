export default ({ env }) => {
  return {
    url: env("PUBLIC_SERVER_URL", "")
  }
};
