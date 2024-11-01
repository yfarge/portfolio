import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps,
) {
  return <MDXRemote {...props} components={{ ...(props.components || {}) }} />;
}
