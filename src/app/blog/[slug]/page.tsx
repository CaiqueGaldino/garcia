import Link from "next/link";
import styles from "../../page.module.css";
import { posts } from "../../../data/posts";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = posts.find(p => p.slug === params.slug);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = `Olá, gostaria de agendar uma avaliação após ler o artigo "${post?.title || 'no blog'}".`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (!post) {
    return (
      <div className={styles.container} style={{ alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        <h2>Artigo não encontrado.</h2>
        <Link href="/" className={styles.btnPrimary} style={{ marginTop: '2rem' }}>Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Raquel<span className={styles.logoAccent}>Garcia</span>
          </Link>
          <nav className={styles.navLinks}>
            <Link href="/#sobre" className={styles.navLink}>Sobre</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryDesktop}>
            Agendar Consulta
          </a>
        </div>
      </header>

      <main style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: '800px', margin: '0 auto', width: '100%', padding: '8rem 2rem 4rem' }}>
        <Link href="/blog" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block', fontWeight: '500' }}>
          ← Voltar para todos os artigos
        </Link>
        
        <h1 className={styles.sectionTitle} style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <p className={styles.sectionSubtitle} style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
          {post.subtitle}
        </p>

        <div style={{ width: '100%', height: 'auto', maxHeight: '500px', position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem', backgroundColor: '#f0f0f0' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="markdown-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
          <ReactMarkdown
            components={{
              h2: ({node, ...props}) => <h2 style={{ fontFamily: 'var(--font-secondary)', fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 500 }} {...props} />,
              h3: ({node, ...props}) => <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-dark)' }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ fontWeight: 600, color: 'var(--primary)' }} {...props} />,
              img: ({node, ...props}) => (
                <span style={{ display: 'block', margin: '3rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img style={{ width: '100%', height: 'auto', display: 'block' }} {...props} />
                </span>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-secondary)', marginBottom: '1rem' }}>Gostou do conteúdo?</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Não deixe que a dor limite seus movimentos. Agende uma avaliação e descubra o plano de tratamento ideal para você.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Quero agendar minha avaliação
          </a>
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
