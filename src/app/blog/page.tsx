import Link from "next/link";
import styles from "../page.module.css";
import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Raquel<span className={styles.logoAccent}>Garcia</span>
          </Link>
          <nav className={styles.navLinks}>
            <Link href="/#sobre" className={styles.navLink}>Sobre</Link>
            <Link href="/#espaco" className={styles.navLink}>O Espaço</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '8rem 2rem 4rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block', fontWeight: '500' }}>
          ← Voltar para a página inicial
        </Link>
        
        <div className={styles.sectionHeaderCenter} style={{ marginBottom: '4rem' }}>
          <h1 className={styles.sectionTitle}>Todos os Artigos</h1>
          <p className={styles.sectionSubtitle}>
            Acompanhe nossas dicas de saúde, reabilitação e qualidade de vida.
          </p>
        </div>

        <div className={styles.grid3}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.postCard}>
              <div className={styles.postImageContainer}>
                <img src={post.image} alt={post.title} className={styles.postImage} />
              </div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postSubtitle}>{post.subtitle}</p>
                <span className={styles.postReadMore}>Ler artigo completo ➔</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.logo}>
          Raquel<span className={styles.logoAccent}>Garcia</span>
        </div>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Raquel Garcia Fisioterapia. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
