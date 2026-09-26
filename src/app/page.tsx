"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "../data/posts";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá, gostaria de agendar uma avaliação com a Dra. Raquel Garcia.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Toggle floating CTA visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className={styles.container}>
      {/* Header / Navbar */}
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            Raquel<span className={styles.logoAccent}>Garcia</span>
          </div>
          
          {/* Mobile Hamburger Button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
            <Link href="#sobre" className={styles.navLink} onClick={closeMenu}>Sobre</Link>
            <Link href="#espaco" className={styles.navLink} onClick={closeMenu}>O Espaço</Link>
            <Link href="#especialidades" className={styles.navLink} onClick={closeMenu}>Especialidades</Link>
            <Link href="#blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
            <Link href="#contato" className={styles.navLink} onClick={closeMenu}>Contato</Link>
            
            {/* Mobile Only Menu CTA */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileNavCta}>
              Agendar Avaliação Agora
            </a>
          </nav>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryDesktop}>
            Agendar Consulta
          </a>
        </div>
      </header>

      <main>
        {/* Mobile Floating CTA (Sticky Bottom) */}
        <div className={`${styles.mobileFloatingCta} ${showFloatingCta ? styles.visible : ''}`}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileFloatingBtn}>
            <span>📱</span> Agendar Avaliação
          </a>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Fisioterapia Especializada</span>
            <h1 className={styles.heroTitle}>
              Recupere seu movimento.<br />
              <i>Potencialize</i> sua vida.
            </h1>
            <p className={styles.heroDescription}>
              Uma abordagem exclusiva e personalizada para sua reabilitação, integrando fisioterapia avançada ao treinamento de força. Volte a se movimentar sem dor.
            </p>
            <div className={styles.heroButtons}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Agendar Consulta
              </a>
              <a href="#sobre" className={styles.btnSecondary}>
                Conhecer a Metodologia
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image src="/images/img1.jpeg" alt="Dra. Raquel Garcia" fill style={{ objectFit: 'cover' }} className={styles.heroImage} />
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className={styles.section}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Sobre a Dra. Raquel Garcia</h2>
            <div className={styles.sobreTextWrapper}>
              <p className={styles.sectionSubtitle}>
                Com anos de experiência em fisioterapia ortopédica e desportiva, minha missão é devolver a você a liberdade de se movimentar sem dor. Acredito em uma abordagem que vai muito além de tratar os sintomas: investigamos a causa raiz e montamos um plano de reabilitação personalizado que une terapia manual avançada e fortalecimento muscular.
              </p>
              <p className={styles.sectionSubtitle}>
                Aqui, você não é apenas mais um paciente. Cada sessão é dedicada exclusivamente à sua recuperação, seja você um atleta buscando alta performance ou alguém que deseja simplesmente acordar todos os dias sem limitações.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className={styles.sectionDark}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Benefícios do Tratamento</h2>
            <p className={styles.sectionSubtitle}>
              Mais do que tratar a dor, buscamos a causa do problema para garantir resultados duradouros e volta segura à rotina.
            </p>
          </div>
          
          <div className={styles.grid3}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>✓</div>
              <h3 className={styles.cardTitle}>Alívio Rápido e Eficaz</h3>
              <p className={styles.cardText}>
                Técnicas avançadas de terapia manual e intervenção direcionada para reduzir a dor desde a primeira sessão.
              </p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>✓</div>
              <h3 className={styles.cardTitle}>Prevenção de Lesões</h3>
              <p className={styles.cardText}>
                Fortalecimento específico e correção de movimento para garantir que o problema não retorne no futuro.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>✓</div>
              <h3 className={styles.cardTitle}>Alta Performance</h3>
              <p className={styles.cardText}>
                Otimização da biomecânica para atletas e praticantes de atividade física alcançarem seu máximo potencial.
              </p>
            </div>
          </div>
        </section>

        {/* Space Gallery Section */}
        <section id="espaco" className={styles.section}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Nosso Espaço</h2>
            <p className={styles.sectionSubtitle}>
              Reabilitação clínica completa (solo e aquática) em um só lugar.
            </p>
          </div>
          
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image src="/images/img12.jpeg" alt="Espaço da Clínica - Solo" fill style={{ objectFit: 'cover' }} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/images/img14.jpeg" alt="Espaço da Clínica - Piscina" fill style={{ objectFit: 'cover' }} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/images/img8.jpeg" alt="Espaço da Clínica - Equipamentos" fill style={{ objectFit: 'cover' }} className={styles.galleryImage} />
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section id="especialidades" className={styles.section} style={{ backgroundColor: 'var(--background)' }}>
          <div className={styles.specialtiesGrid}>
            <div className={styles.specialtiesImage}>
              <Image src="/images/img20.jpeg" alt="Atendimento Especializado Aquático" fill style={{ objectFit: 'cover' }} className={styles.heroImage} />
            </div>
            
            <div className={styles.specialtiesContentWrapper}>
              <div className={styles.sectionHeaderCenter}>
                <h2 className={styles.sectionTitle}>Especialidades</h2>
              </div>
              
              <div className={styles.specialtiesList}>
                <div className={styles.specialtyItem}>
                  <div className={styles.specialtyIcon}>◈</div>
                  <div className={styles.specialtyContent}>
                    <h3>Fisioterapia Ortopédica e Desportiva</h3>
                    <p>Reabilitação focada em atletas e praticantes de esportes, buscando o retorno seguro à prática esportiva.</p>
                  </div>
                </div>
                
                <div className={styles.specialtyItem}>
                  <div className={styles.specialtyIcon}>◈</div>
                  <div className={styles.specialtyContent}>
                    <h3>Terapia Manual Avançada</h3>
                    <p>Mobilizações e manipulações articulares para restaurar a mecânica normal e aliviar tensões musculares profundas.</p>
                  </div>
                </div>

                <div className={styles.specialtyItem}>
                  <div className={styles.specialtyIcon}>◈</div>
                  <div className={styles.specialtyContent}>
                    <h3>Liberação Miofascial</h3>
                    <p>Técnicas focadas em aliviar a dor e melhorar a mobilidade através da liberação das tensões da fáscia muscular.</p>
                  </div>
                </div>
                
                <div className={styles.specialtyItem}>
                  <div className={styles.specialtyIcon}>◈</div>
                  <div className={styles.specialtyContent}>
                    <h3>Pós-Operatório</h3>
                    <p>Protocolos seguros e baseados em evidências para garantir a melhor recuperação após cirurgias ortopédicas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog / Posts Section */}
        <section id="blog" className={styles.sectionDark}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Artigos e Dicas</h2>
            <p className={styles.sectionSubtitle}>
              Conteúdos exclusivos sobre saúde, bem-estar e reabilitação.
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
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className={styles.btnSecondary} style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Ver todos os artigos
            </Link>
          </div>
        </section>

        {/* Location / Contact */}
        <section id="contato" className={styles.section}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Agende sua Avaliação</h2>
            <p className={styles.sectionSubtitle}>
              Dê o primeiro passo para uma vida sem dor. Entre em contato conosco e marque sua consulta.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>📍</div>
                <div>
                  <h4>Endereço</h4>
                  <p>Avenida Fictícia, 1000 - Bairro Centro<br/>(Dentro da Clínica Espaço Saúde)</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>🕒</div>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Seg a Sex: 07h às 20h<br/>Sábados: 08h às 12h</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>📱</div>
                <div>
                  <h4>Contato</h4>
                  <p>(11) 99999-9999 (WhatsApp)</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>📷</div>
                <div>
                  <h4>Redes Sociais</h4>
                  <p className={styles.socialLinks}>
                    <a href="https://instagram.com/raquelgarcia.fisio" target="_blank" rel="noopener noreferrer">@raquelgarcia.fisio</a>
                    <br />
                    <a href="https://instagram.com/espacoclinica" target="_blank" rel="noopener noreferrer">@espacoclinica</a>
                  </p>
                </div>
              </div>
              
              <div className={styles.contactDesktopCtaWrapper} style={{ marginTop: '1rem' }}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{ width: '100%' }}>
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098315185966!2d-46.65427182466986!3d-23.56490656172081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714589312345!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.logo}>
          Raquel<span className={styles.logoAccent}>Garcia</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="#sobre">Sobre</a>
          <a href="#espaco">O Espaço</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#blog">Blog</a>
        </div>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Raquel Garcia Fisioterapia. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
