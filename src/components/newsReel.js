import React from "react";
import tw from "twin.macro";

import Disclaimer from "./disclaimer";
import Link from "./link";
import NewsItem from "./newsItem";

export default function NewsReel({ items }) {
  return (
    <div tw="space-y-4">
      <div tw="flex space-x-6">
        <div tw="flex-auto flex-row flex space-x-6">
          <h3 tw="text-2xl font-bold text-shade-darkest">Latest News!</h3>
          <div tw="hidden lg:block">
            <Disclaimer inline color="gray" />
          </div>
          <div tw="lg:hidden">
            <Disclaimer micro inline color="gray" />
          </div>
        </div>
        <div>
          <Link button secondary icon="right" to="/news">
            All News
          </Link>
        </div>
      </div>
      <div tw="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.edges.map(({ node }, i) => (
          <NewsItem
            {...node}
            key={node.id}
            css={[
              tw`hidden`,
              i <= 2 && tw`block`,
              i <= 3 && tw`md:block`,
              i > 3 && tw`lg:block`,
            ]}
          />
        ))}
      </div>
    </div>
  );
}
