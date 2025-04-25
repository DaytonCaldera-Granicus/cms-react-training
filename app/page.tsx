'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Comic } from "@/types/Comic";
import ComicCard from "@/components/comic/comic";

export default function Home() {
  const [comicsData, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await fetch('/data.json');
      const rawData = await response.json();
      const data: Comic[] = rawData.map((item: any) => {
        console.log(item.publishDate);

        return {
          id: item.id,
          title: item.title,
          issueNumber: item.issueNumber,
          publishedDate: new Date(item.publishDate),
          thumbnail: item.thumbnail,
          creators: item.creators.map((creator: any) => ({ name: creator.name, role: creator.role }))
        }
      });
      console.log(data);
      setComics(data);
    }
    fetchComics();
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 185px)', gap: '20px' }}>
        {comicsData.map((comic, index) => (
          <ComicCard key={index} comic={comic} />
        ))}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
