import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({ params }) {
  const item = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${item.image}`} alt={item.title} />
        <h1>{item.title}</h1>
        <time dateTime={item.date}>{item.date}</time>
      </header>
      <p>{item.content}</p>
    </article>
  );
}
