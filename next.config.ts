import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgSite = repositoryName?.endsWith(".github.io");
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserOrOrgSite ? `/${repositoryName}` : "";
const requestedBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;
const normalizedBasePath = requestedBasePath ? `/${requestedBasePath.replace(/^\/+|\/+$/g, "")}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath || undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
