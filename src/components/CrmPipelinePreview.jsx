import React, { useState } from "react";
import { MapPin, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";
import { soundManager } from "../utils/sound";

export default function CrmPipelinePreview() {
  const [pipeline, setPipeline] = useState([
    { id: "L-101", name: "Apex Global Tech", value: "$45,000", rep: "Alex Chen", stage: "onboarding", location: "Downtown HQ" },
    { id: "L-102", name: "Stellar Cloud Systems", value: "$28,500", rep: "Priya Nair", stage: "negotiation", location: "Tech Park 2" },
    { id: "L-103", name: "Nova Corp Logistics", value: "$62,000", rep: "Marcus Vance", stage: "qualified", location: "West Port" }
  ]);

  const [activeTab, setActiveTab] = useState("pipeline");

  const advanceStage = (id) => {
    soundManager.playClick();
    setPipeline((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.stage === "qualified") return { ...item, stage: "negotiation" };
          if (item.stage === "negotiation") return { ...item, stage: "onboarding" };
          return item;
        }
        return item;
      })
    );
  };

  return (
    <div className="crm-editorial-box">
      <div className="crm-top-strip">
        <div className="crm-title-left">
          <div className="crm-live-badge">
            <span className="dot-active"></span>
            <span>ENTERPRISE CRM CLUSTER</span>
          </div>
          <h4 className="crm-main-title">Operations & Lead Pipeline Architecture</h4>
        </div>

        <div className="crm-tab-selectors">
          <button
            className={`crm-mode-btn ${activeTab === "pipeline" ? "active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveTab("pipeline");
            }}
          >
            <TrendingUp size={14} />
            <span>Kanban Pipeline</span>
          </button>
          <button
            className={`crm-mode-btn ${activeTab === "gps" ? "active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveTab("gps");
            }}
          >
            <MapPin size={14} />
            <span>Field Agent GPS</span>
          </button>
        </div>
      </div>

      {activeTab === "pipeline" ? (
        <div className="crm-kanban-columns">
          {/* Column 1 */}
          <div className="kanban-col">
            <div className="col-headline">
              <span className="col-name">Qualified Leads</span>
              <span className="col-counter">{pipeline.filter((l) => l.stage === "qualified").length}</span>
            </div>
            {pipeline
              .filter((l) => l.stage === "qualified")
              .map((lead) => (
                <div key={lead.id} className="lead-white-card">
                  <div className="lead-top-row">
                    <span className="lead-code">{lead.id}</span>
                    <span className="lead-worth text-forest">{lead.value}</span>
                  </div>
                  <h5 className="lead-account-name">{lead.name}</h5>
                  <div className="lead-action-row">
                    <span className="lead-rep-name">Rep: {lead.rep}</span>
                    <button
                      className="btn-advance-lead"
                      onClick={() => advanceStage(lead.id)}
                      title="Advance to Negotiation"
                    >
                      <span>Move</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Column 2 */}
          <div className="kanban-col">
            <div className="col-headline">
              <span className="col-name">Negotiation</span>
              <span className="col-counter">{pipeline.filter((l) => l.stage === "negotiation").length}</span>
            </div>
            {pipeline
              .filter((l) => l.stage === "negotiation")
              .map((lead) => (
                <div key={lead.id} className="lead-white-card in-negotiation">
                  <div className="lead-top-row">
                    <span className="lead-code">{lead.id}</span>
                    <span className="lead-worth text-terracotta">{lead.value}</span>
                  </div>
                  <h5 className="lead-account-name">{lead.name}</h5>
                  <div className="lead-action-row">
                    <span className="lead-rep-name">Rep: {lead.rep}</span>
                    <button
                      className="btn-advance-lead"
                      onClick={() => advanceStage(lead.id)}
                      title="Convert to Onboarding"
                    >
                      <span>Convert</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Column 3 */}
          <div className="kanban-col">
            <div className="col-headline">
              <span className="col-name">Live Onboarding</span>
              <span className="col-counter success">{pipeline.filter((l) => l.stage === "onboarding").length}</span>
            </div>
            {pipeline
              .filter((l) => l.stage === "onboarding")
              .map((lead) => (
                <div key={lead.id} className="lead-white-card onboarded">
                  <div className="lead-top-row">
                    <span className="lead-code">{lead.id}</span>
                    <span className="lead-worth text-forest">{lead.value}</span>
                  </div>
                  <h5 className="lead-account-name">{lead.name}</h5>
                  <div className="lead-action-row">
                    <span className="lead-rep-name">Rep: {lead.rep}</span>
                    <span className="status-onboarded-pill">
                      <CheckCircle2 size={12} /> Onboarded
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="crm-gps-editorial-view">
          <div className="gps-map-canvas-frame">
            <div className="gps-point p1">
              <span className="pulse-point"></span>
              <div className="gps-card-popup">
                <strong>Alex Chen</strong>
                <span>Apex Tech (On-Site)</span>
              </div>
            </div>
            <div className="gps-point p2">
              <span className="pulse-point"></span>
              <div className="gps-card-popup">
                <strong>Priya Nair</strong>
                <span>Tech Park 2 (In Transit)</span>
              </div>
            </div>
            <div className="gps-point p3">
              <span className="pulse-point"></span>
              <div className="gps-card-popup">
                <strong>Marcus Vance</strong>
                <span>West Port (Client Demo)</span>
              </div>
            </div>
          </div>
          <div className="gps-footer-legend">
            <span className="legend-indicator">
              <span className="dot-green"></span>
              3 Agents Active on Android App with Background Geolocation Sync
            </span>
            <span className="legend-sec">
              <ShieldCheck size={14} className="text-cobalt" />
              AES-256 Encrypted Telemetry
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
