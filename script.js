// === Gestion des modales ===
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Contenu des modales par identifiant
const modalContent = {
  conExp: `
  <div class="mission-block">
    <h3>🧭 Conseil & Accompagnement Méthodologique</h3>
    <ul>
      <li>Accompagnement technique sur les choix d’architecture, de stack et de stratégie DevOps/Cloud.</li>
      <li>Coaching d’équipes techniques, mise en place de bonnes pratiques de développement et de delivery.</li>
      <li>Rédaction de documentation technique, vulgarisation et transmission pédagogique auprès des équipes et des clients.</li>
    </ul>
  </div>
`,
  secExp: `
  <div class="mission-block">
    <h3>🔐 Sécurité Applicative (DevSecOps)</h3>
    <ul>
      <li>Audit de sécurité, durcissement des configurations, et intégration de la sécurité dans les pipelines CI/CD.</li>
      <li>Implémentation de <strong>SSO</strong>, <strong>2FA</strong>, <strong>OAuth2/OpenID Connect</strong> avec <strong>Keycloak</strong>, <strong>Auth0</strong>.</li>
      <li>Analyse de vulnérabilités avec <strong>Trivy</strong>, <strong>Snyk</strong>, <strong>OWASP ZAP</strong>.</li>
    </ul>
  </div>
`,
  infraExp: `
  <div class="mission-block">
    <h3>☁️ Infrastructure Cloud</h3>
    <ul>
      <li>Déploiement et gestion d’infrastructures sur <strong>GCP</strong>, <strong>AWS</strong> et environnements <strong>on-premise</strong>.</li>
      <li>Infrastructure as Code avec <strong>Terraform</strong>, <strong>Ansible</strong>, <strong>Pulumi</strong>.</li>
      <li>Optimisation des coûts, haute disponibilité, et sécurité des environnements cloud.</li>
    </ul>
  </div>
`,
  devOpsExp: `
  <div class="mission-block">
    <h3>⚙️ DevOps & Automatisation</h3>
    <ul>
      <li>Mise en place de pipelines <strong>CI/CD</strong> avec <strong>GitLab CI</strong>, <strong>Jenkins</strong>, <strong>GitHub Actions</strong>.</li>
      <li>Conteneurisation avec <strong>Docker</strong> et orchestration via <strong>Kubernetes</strong> (GKE, EKS, on-premise).</li>
      <li>Monitoring & alerting avec <strong>Prometheus</strong>, <strong>Grafana</strong>, <strong>ELK Stack</strong>.</li>
    </ul>
  </div>
`,
  devExp: `
  <div class="mission-block">
    <h3>💡 Développement Backend</h3>
    <ul>
      <li>Conception d’architectures robustes et scalables en <strong>Scala</strong>, <strong>Java</strong> et <strong>Python</strong>.</li>
      <li>Développement d’APIs REST/GraphQL, gestion des performances, sécurité et documentation (OpenAPI/Swagger).</li>
      <li>Intégration de bases de données relationnelles (<strong>PostgreSQL</strong>, <strong>MySQL</strong>) et NoSQL (<strong>MongoDB</strong>, <strong>Cassandra</strong>).</li>
    </ul>
  </div>
`,
  sparkCer: `
  <h3>Spark</h3>
  <img src="asserts/images/spark.png" alt="Spark" style="width:100%;max-width:800px;" />
`,
  bigCert: `
  <h3>Streaming Big Data</h3>
  <img src="asserts/images/BigData.png" alt="Streaming Big Data" style="width:100%;max-width:800px;" />
`,
  ckad: `
  <h3>CKAD – Certified Kubernetes Application Developer</h3>
  <img src="asserts/images/CKAD.jpeg" alt="Certificat CKAD" style="width:100%;max-width:800px;" />
  <p>Certification officielle de la Cloud Native Computing Foundation (CNCF) validant les compétences en conception, déploiement et gestion d’applications cloud-native sur Kubernetes.</p>
`,
  devops: `
  <div class="mission-block">
    <h3>🛠️ DevOps & CI/CD</h3>
    <ul>
      <li>Conception et mise en œuvre de pipelines CI/CD avec <strong>GitLab CI</strong> et <strong>Jenkins</strong>.</li>
      <li>Automatisation des déploiements via <strong>Ansible</strong>, <strong>Helm</strong> et <strong>GitOps (ArgoCD)</strong>.</li>
      <li>Supervision applicative et fonctionnelle avec <strong>Prometheus</strong>, <strong>Grafana</strong>, <strong>ELK Stack</strong> et <strong>Alertmanager</strong>.</li>
      <li>Gestion des secrets avec <strong>Vault</strong> et <strong>Sealed Secrets</strong>.</li>
    </ul>
  </div>
  `,
  infra: `
  <div class="mission-block">
    <h3>☁️ Infrastructure & Cloud Native</h3>
    <ul>
      <li>Déploiement et administration d’un cluster <strong>Kubernetes</strong>.</li>
      <li>Configuration avancée : <strong>RBAC</strong>, <strong>Ingress Controllers</strong>, <strong>cert-manager</strong>, <strong>network policies</strong>.</li>
      <li>Mise en place de cron jobs pour l’archivage et le transfert vers un bucket</li>
      <li>Infrastructure as Code avec <strong>Terraform</strong> et <strong>Ansible</strong>.</li>
    </ul>
  </div>
  `,
  api: `
  <div class="mission-block">
    <h3>💻 Développement Full Stack</h3>
    <ul>
      <li>Participation au développement d’une marketplace en <strong>Spring Boot</strong> (Java) et <strong>React.js</strong>.</li>
      <li>Intégration de <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>REST/GraphQL</strong>, sécurisation avec <strong>JWT</strong>.</li>
      <li>Migration vers <strong>Java 11, 17, 21</strong> avec refactoring et adaptation aux nouveautés du JDK.</li>
      <li>Tests automatisés avec <strong>JUnit</strong>, <strong>Mockito</strong>, <strong>Cypress</strong>.</li>
      <li>Développement d’API avec <strong>Scala Play Framework</strong>.</li>
      <li>Mise en place de traitements temps réel avec <strong>Scala Spark Streaming</strong> et <strong>Apache Kafka</strong>.</li>
      <li>Conception et développement d’applications en <strong>Java Spring Boot</strong> et <strong>Apache Kafka</strong>.</li>
    </ul>
  </div>
  `,
  securite: `
  <div class="mission-block">
    <h3>🔐 Sécurité Applicative (DevSecOps)</h3>
    <ul>
      <li>Implémentation d’une authentification sécurisée avec <strong>2FA</strong>.</li>
      <li>Intégration de <strong>OAuth2</strong> via <strong>Spring Security</strong>.</li>
      <li>Scan de vulnérabilités avec <strong>Trivy</strong>, <strong>Snyk</strong>, <strong>OWASP Dependency-Check</strong>.</li>
      <li>Durcissement des configurations et protection contre <strong>XSS</strong>, <strong>CSRF</strong>, <strong>CORS</strong>.</li>
    </ul>
  </div>
  `,
  chatbot: `
  <div class="mission-block">
    <h3>🤖 Intelligence Artificielle & Chatbot</h3>
    <ul>
      <li>Participation au développement d’un chatbot métier pour une compagnie d’assurance.</li>
      <li>Entraînement sur les règles métiers et les contrats.</li>
      <li>Utilisation du chatbot par les techniciens en centre d’appel (interface conversationnelle interne).</li>
      <li>Suivi des performances via dashboards analytiques (résolution, escalade, satisfaction).</li>
    </ul>
  </div>
  `,
  bigdata: `
  <div class="mission-block">
  <h3>📊 Big Data & Streaming</h3>
  <ul>
    <li>Développement de pipelines de traitement distribué avec <strong>Apache Spark</strong> (batch & streaming), en <strong>Scala</strong> pour des performances optimisées.</li>
    <li>Implémentation de flux temps réel avec <strong>Apache Kafka</strong> et <strong>Kafka Streams</strong>, incluant la gestion des topics, des partitions, et des stratégies de consommation.</li>
    <li>Modélisation et stockage des données dans des bases NoSQL comme <strong>Apache Cassandra</strong> pour la scalabilité horizontale et la haute disponibilité.</li>
    <li>Indexation et recherche full-text avec <strong>Elasticsearch</strong>, intégration dans des dashboards Kibana pour l’analyse rapide des données.</li>
    <li>Optimisation des performances via <strong>partitioning</strong>, <strong>caching</strong>, <strong>broadcast joins</strong> et <strong>tuning Spark executors</strong>.</li>
    <li>Déploiement de jobs Spark sur des clusters <strong>YARN</strong>, <strong>Mesos</strong> ou <strong>Kubernetes</strong>, avec monitoring via <strong>Spark UI</strong> et <strong>Grafana</strong>.</li>
    <li>Gestion des formats de données volumineux : <strong>Protobuf</strong>, <strong>Avro</strong>, <strong>ORC</strong>, et ingestion via <strong>Kafka Connect</strong>.</li>
    <li>Conception de dataflows robustes pour des cas d’usage tels que la détection de fraude, la recommandation produit, ou l’analyse comportementale.</li>
  </ul>
</div>
  `
};

// Ouvre la modale avec le contenu correspondant
function openModal(id) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = modalContent[id] || "<p>Contenu non disponible.</p>";
  modal.style.display = "block";
}

// Ferme la modale
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// === Surbrillance du lien actif dans le menu ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



// Ferme la modale si clic en dehors du contenu
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

