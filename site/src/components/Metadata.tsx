import Head from "next/head";
import { useRouter } from "next/router";

interface MetadataProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Metadata({
  title,
  description,
  imageUrl,
}: MetadataProps) {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Akerselva, Friluftsmuseum, Inger Munch, Trebåtforening, Jonas Vesterhus, Travers, Michael Hermansen"
      />

      {/* Open graph */}
      <meta property="og:site_name" content="Akerselva Friluftsmuseum" />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:image" content={imageUrl} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="og:url" content={router.asPath} />
    </Head>
  );
}
