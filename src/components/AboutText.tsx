import { client } from "../../tina/__generated__/client";
import type { PageQuery } from "../../tina/__generated__/types";

export default async function AboutText() {
  const result: {
    data: PageQuery;
    variables: { relativePath: string };
    query: string;
  } = await client.queries.page({ relativePath: "bio.md" });

  const text = result.data.page.bio;
  console.log(text);

  return (
    <p>Placeholder</p>
    // <>
    //   <p>
    //     Allie Hock is a stand up comedian and documentary film producer based in
    //     Los Angeles. Her work shines a light on under-appreciated topics by
    //     using unconventional angles to draw out themes that are universally
    //     relatable.
    //   </p>
    //   <p>
    //     As a stand up comedian, Allie has performed regularly in front of
    //     sold-out crowds around Los Angeles and Ogden, Utah.
    //   </p>
    //   <p>
    //     Allie's documentary producing credits include archival-driven
    //     documentaries for CNN (The Movies, 'Tis the Season, Land of the Giants),
    //     a Disney+ documentary series following professional Japanese surfers and
    //     the Olympics (Chasing Waves), and Dave Grohl's celebrity-driven
    //     docuseries for Paramount+ (From Cradle to Stage).
    //   </p>
    //   <p>
    //     Allie ran Cross Country and Track for Michigan State University. She
    //     studied comedy at The Groundlings Theater in L.A.
    //   </p>
    // </>
  );
}
