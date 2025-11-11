export default function Home() {
  const whatsapp = "https://wa.me/34657294346?text=Hola%20Global%20Cadenza%20quiero%20más%20información";

  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Global Cadenza</h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "15px auto" }}>
            Acompañamos a jóvenes músicos que quieren estudiar en conservatorios y escuelas de música en Europa.
            Gestionamos tu admisión, permisos, residencia y llegada.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a href="/aplicar" className="btn btn-primary" style={{ marginRight: "12px" }}>
              Aplicar ahora
            </a>
            <a href={whatsapp} className="btn">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container section">
        <h2>Qué hacemos</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          <div className="card">
            <h3>Admisión</h3>
            <p>Documentación, portfolio y audiciones.</p>
          </div>

          <div className="card">
            <h3>Visados y permisos</h3>
            <p>Trámites legales sin complicaciones.</p>
          </div>

          <div className="card">
            <h3>Residencia</h3>
            <p>Alojamiento y primeros pasos en la ciudad.</p>
          </div>

          <div className="card">
            <h3>Acompañamiento</h3>
            <p>Tutorías, idioma e integración.</p>
          </div>
        </div>
      </section>

      {/* PASOS */}
      <section className="container section">
        <h2>Cómo funciona</h2>
        <ul className="steps" style={{ marginTop: "15px" }}>
          <li><strong>1.</strong> Evaluación gratuita.</li>
          <li><strong>2.</strong> Plan personalizado según tu perfil.</li>
          <li><strong>3.</strong> Preparación de solicitud y audiciones.</li>
          <li><strong>4.</strong> Documentación, residencia y llegada.</li>
          <li><strong>5.</strong> Seguimiento durante el primer año.</li>
        </ul>
      </section>

    </main>
  );
}
