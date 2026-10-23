import React from "react";
import { CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";
import { soundManager } from "../utils/sound";
import { projects } from "../data/portfolioData";

export default function Projects({ onSelectProject }) {
  return (
    <div id="projects" className="projects-alternating-showcase">
      {/* Intro Header */}
      <section className="projects-intro-header-section">
        <div className="section-container">
          <div className="section-header-editorial reveal-on-scroll">
            <div className="section-label-chip">
              <span className="chip-dot"></span>
              <span>03 / SELECTED WORKS & LIVE ARCHITECTURES</span>
            </div>
            <h2 className="section-main-title">
              Engineered with purpose. <span className="serif-accent">Built for production</span>.
            </h2>
            <p className="section-desc">
              Production systems spanning 3D WebGL texture customization, multi-tenant enterprise CRM platforms, automated industrial machine vision, native field agriculture GIS, and high-volume wholesale distribution hubs.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 01: 3D Website with Mockup Pattern Application (Warm Ivory Section) */}
      <section className="project-feature-section bg-ivory text-ivory">
        <div className="section-container">
          <div className="project-editorial-row">
            {/* Details Column */}
            <div className="project-editorial-details reveal-on-scroll">
              <div className="project-meta-badge-row">
                <span className="project-index-stamp ivory">// PROJECT 01</span>
                <span className="project-category-stamp ivory">FULL STACK / 3D GRAPHICS</span>
              </div>

              <h3 className="project-headline-title ivory">
                Products, reimagined in three dimensions.
              </h3>

              <p className="project-narrative-para ivory">
                An interactive product customization engine that enables real-time 3D rotation, live pattern mapping, material reflections, multi-axis orbit controls, and high-resolution mockup texture generation directly in the browser.
              </p>

              <div className="project-highlights-list ivory">
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Multi-axis orbit controls with smooth camera damping</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Dynamic pattern layering, opacity, scaling & tinting</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Scroll-triggered interactive animations & zero-lag canvas</span>
                </div>
              </div>

              <div className="project-tech-badges-row ivory">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>WebGL / Canvas</span>
                <span>HTML5 / CSS3</span>
              </div>

              {onSelectProject && (
                <div className="project-cta-launch-row">
                  <button
                    className="btn-interactive-launch ivory"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(projects[0]);
                    }}
                  >
                    <Cpu size={15} />
                    <span>LAUNCH 3D SIMULATOR & SPECS</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>

            {/* Visual Column */}
            <div className="project-editorial-visual reveal-on-scroll delay-100">
              <div className="visual-container-frame ivory">
                <img
                  src="/assets/mockup_3d.png"
                  alt="3D Product Configurator Interface Mockup"
                  className="project-mockup-img"
                  loading="lazy"
                />
                <div className="visual-top-tag dark">
                  WEBGL & REAL-TIME SHADERS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 02: Customer Relationship Management (CRM) System (Warm Sandstone Section) */}
      <section className="project-feature-section bg-sandstone text-ivory">
        <div className="section-container">
          <div className="project-editorial-row reverse">
            {/* Visual Column */}
            <div className="project-editorial-visual reveal-on-scroll">
              <div className="visual-container-frame ivory">
                <img
                  src="/assets/crm_system.png"
                  alt="Enterprise CRM Platform Interface Mockup"
                  className="project-mockup-img"
                  loading="lazy"
                />
                <div className="visual-top-tag dark left">
                  MULTI-TENANT CLOUD ARCHITECTURE
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="project-editorial-details reveal-on-scroll delay-100">
              <div className="project-meta-badge-row">
                <span className="project-index-stamp ivory">// PROJECT 02</span>
                <span className="project-category-stamp ivory">ENTERPRISE WEB & MOBILE</span>
              </div>

              <h3 className="project-headline-title ivory">
                Operational complexity. One connected platform.
              </h3>

              <p className="project-narrative-para ivory">
                A mission-critical enterprise operations suite orchestrating multi-region workforce management, Kanban sales pipelines, automated client onboarding, and live employee GPS tracking for field personnel.
              </p>

              <div className="project-highlights-list ivory">
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Live GPS field employee tracking with location breadcrumbs</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Kanban sales pipeline with automated status follow-ups</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Role-based access control (RBAC) across web & native Android</span>
                </div>
              </div>

              <div className="project-tech-badges-row ivory">
                <span>React.js</span>
                <span>Node.js</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Android (Java)</span>
              </div>

              {onSelectProject && (
                <div className="project-cta-launch-row">
                  <button
                    className="btn-interactive-launch ivory"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(projects[1]);
                    }}
                  >
                    <Cpu size={15} />
                    <span>INSPECT CRM PIPELINE & RBAC</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 03: Real-Time Alloy Wheel Inspection System (Deep Charcoal / Obsidian Section) */}
      <section className="project-feature-section bg-obsidian text-dark">
        <div className="section-container">
          <div className="project-editorial-row">
            {/* Details Column */}
            <div className="project-editorial-details reveal-on-scroll">
              <div className="project-meta-badge-row">
                <span className="project-index-stamp gold">// PROJECT 03</span>
                <span className="project-category-stamp gold">COMPUTER VISION / EDGE AUTOMATION</span>
              </div>

              <h3 className="project-headline-title gold">
                Making invisible defects visible.
              </h3>

              <p className="project-narrative-para gold">
                Real-time optical quality inspection rig engineered for rotating automotive alloy wheels on industrial test lines, performing edge gap defect classification at sub-millisecond calculation speeds.
              </p>

              <div className="project-highlights-list gold">
                <div className="highlight-item gold">
                  <CheckCircle2 size={16} className="highlight-icon gold" />
                  <span>Contour & spoke gap obstacle recognition using OpenCV</span>
                </div>
                <div className="highlight-item gold">
                  <CheckCircle2 size={16} className="highlight-icon gold" />
                  <span>Color-coded PASS / REVIEW / FAIL optical state classification</span>
                </div>
                <div className="highlight-item gold">
                  <CheckCircle2 size={16} className="highlight-icon gold" />
                  <span>Real-time rotating camera feed frame segmentation & logging</span>
                </div>
              </div>

              <div className="project-tech-badges-row gold">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Image Processing</span>
                <span>Computer Vision</span>
                <span>Real-Time Ingestion</span>
              </div>

              {onSelectProject && (
                <div className="project-cta-launch-row">
                  <button
                    className="btn-interactive-launch gold"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(projects[2]);
                    }}
                  >
                    <Cpu size={15} />
                    <span>LAUNCH OPENCV TEST RIG & TELEMETRY</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>

            {/* Visual Column */}
            <div className="project-editorial-visual reveal-on-scroll delay-100">
              <div className="visual-container-frame dark">
                <img
                  src="/assets/alloy_inspection.png"
                  alt="Industrial Computer Vision Inspection Rig Mockup"
                  className="project-mockup-img"
                  loading="lazy"
                />
                <div className="visual-top-tag gold">
                  REAL-TIME DEFECT DETECTION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 04: Smart Irrigation Design Platform (Warm Ivory Section) */}
      <section className="project-feature-section bg-ivory text-ivory">
        <div className="section-container">
          <div className="project-editorial-row reverse">
            {/* Visual Column */}
            <div className="project-editorial-visual reveal-on-scroll">
              <div className="visual-container-frame ivory">
                <img
                  src="/assets/smart_irrigation.png"
                  alt="Smart Agriculture Telemetry and CAD Interface"
                  className="project-mockup-img"
                  loading="lazy"
                />
                <div className="visual-top-tag dark">
                  OFFLINE-FIRST ANDROID TOOL
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="project-editorial-details reveal-on-scroll delay-100">
              <div className="project-meta-badge-row">
                <span className="project-index-stamp ivory">// PROJECT 04</span>
                <span className="project-category-stamp ivory">MOBILE / FIELD ENGINEERING</span>
              </div>

              <h3 className="project-headline-title ivory">
                Precision engineering in the field.
              </h3>

              <p className="project-narrative-para ivory">
                Native Android CAD and agronomy mapping suite tailored for field technicians. Enables custom drag-and-drop pipe and sprinkler layout, hydraulic flow telemetry projections, and client PDF report synthesis in zero-signal rural environments.
              </p>

              <div className="project-highlights-list ivory">
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Drag-and-drop vector irrigation topological mapping canvas</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Mathematical flow calculation based on nozzle radius & pipe diameter</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Direct on-device vector PDF engineering document synthesis</span>
                </div>
              </div>

              <div className="project-tech-badges-row ivory">
                <span>Android Studio</span>
                <span>Java</span>
                <span>Kotlin</span>
                <span>SQLite</span>
                <span>PDF Engine</span>
              </div>

              {onSelectProject && (
                <div className="project-cta-launch-row">
                  <button
                    className="btn-interactive-launch ivory"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(projects[3]);
                    }}
                  >
                    <Cpu size={15} />
                    <span>VIEW FIELD CAD & HYDRAULIC SPECS</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 05: Product Distribution Management System (Warm Sandstone Section) */}
      <section className="project-feature-section bg-sandstone text-ivory">
        <div className="section-container">
          <div className="project-editorial-row">
            {/* Details Column */}
            <div className="project-editorial-details reveal-on-scroll">
              <div className="project-meta-badge-row">
                <span className="project-index-stamp ivory">// PROJECT 05</span>
                <span className="project-category-stamp ivory">LOGISTICS / SUPPLY CHAIN</span>
              </div>

              <h3 className="project-headline-title ivory">
                From warehouse inventory to final delivery.
              </h3>

              <p className="project-narrative-para ivory">
                Scalable wholesale distribution command center governing real-time SKU movements, batch picking routes, multi-tier dealer ledgers, automated tax-compliant invoicing, and executive sales analytics.
              </p>

              <div className="project-highlights-list ivory">
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>On-device dynamic PDF tax invoice & dispatch slip generator</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Multi-dealer ledger tracking with automated credit validations</span>
                </div>
                <div className="highlight-item ivory">
                  <CheckCircle2 size={16} className="highlight-icon ivory" />
                  <span>Warehouse inventory alerts & restocking threshold triggers</span>
                </div>
              </div>

              <div className="project-tech-badges-row ivory">
                <span>Android</span>
                <span>Java</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>REST APIs</span>
              </div>

              {onSelectProject && (
                <div className="project-cta-launch-row">
                  <button
                    className="btn-interactive-launch ivory"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(projects[4]);
                    }}
                  >
                    <Cpu size={15} />
                    <span>VIEW DISTRIBUTION & LEDGER SPECS</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>

            {/* Visual Column */}
            <div className="project-editorial-visual reveal-on-scroll delay-100">
              <div className="visual-container-frame ivory">
                <img
                  src="/assets/distribution_logistics.png"
                  alt="Wholesale Logistics and Invoice Management Dashboard"
                  className="project-mockup-img"
                  loading="lazy"
                />
                <div className="visual-top-tag dark">
                  INVENTORY & DISPATCH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
