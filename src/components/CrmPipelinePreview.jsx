import React, { useState } from "react";
import { Users, MapPin, CheckCircle2, TrendingUp, Bell, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";
import { soundManager } from "../utils/sound";

export default function CrmPipelinePreview() {
  const [pipeline, setPipeline] = useState([
    { id: "L-101", name: "Apex Global Tech", value: "$45,000", rep: "Alex Chen", stage: "onboarding", location: "Downtown HQ" },
    { id: "L-102", name: "Stellar Cloud Systems", value: "$28,500", rep: "Priya Nair", stage: "negotiation", location: "Tech Park 2" },
    { id: "L-103", name: "Nova Corp Logistics", value: "$62,000", rep: "Marcus Vance", stage: "qualified", location: "West Port" }
  ]);

  const [activeTab, setActiveTab] = useState("pipeline"); // "pipeline" | "gps"

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
    <div className="crm-preview-container">
      <div className="crm-preview-header">
        <div className="crm-title-meta">
          <div className="crm-badge">
            <span className="live-pulse-dot"></span>
            <span>ENTERPRISE CRM CLUSTER</span>
          </div>
          <h4>Web & Android Unified Operations Suite</h4>
        </div>

        <div className="crm-tabs">
          <button
            className={`crm-tab-btn ${activeTab === "pipeline" ? "active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveTab("pipeline");
            }}
          >
            <TrendingUp size={14} />
            <span>Lead Pipelines</span>
          </button>
          <button
            className={`crm-tab-btn ${activeTab === "gps" ? "active" : ""}`}
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
        <div className="crm-pipeline-grid">
          <div className="pipeline-column">
            <div className="column-header">
              <span className="col-title">Qualified Leads</span>
              <span className="col-badge">
                {pipeline.filter((l) => l.stage === "qualified").length}
              </span>
            </div>
            {pipeline
              .filter((l) => l.stage === "qualified")
              .map((lead) => (
                <div key={lead.id} className="lead-card">
                  <div className="lead-title-row">
                    <span className="lead-id">{lead.id}</span>
                    <span className="lead-val">{lead.value}</span>
                  </div>
                  <div className="lead-name">{lead.name}</div>
                  <div className="lead-footer">
                    <span className="lead-rep">Rep: {lead.rep}</span>
                    <button
                      className="advance-btn"
                      onClick={() => advanceStage(lead.id)}
                      title="Advance stage"
                    >
                      <span>Move</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="pipeline-column">
            <div className="column-header">
              <span className="col-title">Negotiation</span>
              <span className="col-badge">
                {pipeline.filter((l) => l.stage === "negotiation").length}
              </span>
            </div>
            {pipeline
              .filter((l) => l.stage === "negotiation")
              .map((lead) => (
                <div key={lead.id} className="lead-card highlight">
                  <div className="lead-title-row">
                    <span className="lead-id">{lead.id}</span>
                    <span className="lead-val">{lead.value}</span>
                  </div>
                  <div className="lead-name">{lead.name}</div>
                  <div className="lead-footer">
                    <span className="lead-rep">Rep: {lead.rep}</span>
                    <button
                      className="advance-btn"
                      onClick={() => advanceStage(lead.id)}
                      title="Advance stage"
                    >
                      <span>Convert</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="pipeline-column">
            <div className="column-header">
              <span className="col-title">Live Onboarding</span>
              <span className="col-badge success">
                {pipeline.filter((l) => l.stage === "onboarding").length}
              </span>
            </div>
            {pipeline
              .filter((l) => l.stage === "onboarding")
              .map((lead) => (
                <div key={lead.id} className="lead-card completed">
                  <div className="lead-title-row">
                    <span className="lead-id">{lead.id}</span>
                    <span className="lead-val">{lead.value}</span>
                  </div>
                  <div className="lead-name">{lead.name}</div>
                  <div className="lead-footer">
                    <span className="lead-rep">Rep: {lead.rep}</span>
                    <span className="status-tag success">
                      <CheckCircle2 size={12} /> Onboarded
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="crm-gps-view">
          <div className="gps-map-mockup">
            <div className="gps-radar-sweep"></div>
            <div className="gps-marker-point m1">
              <div className="marker-pulse"></div>
              <div className="marker-popup">
                <strong>Alex Chen</strong>
                <span>At: Apex Tech (On-Site)</span>
              </div>
            </div>
            <div className="gps-marker-point m2">
              <div className="marker-pulse"></div>
              <div className="marker-popup">
                <strong>Priya Nair</strong>
                <span>At: Tech Park 2 (In Transit)</span>
              </div>
            </div>
            <div className="gps-marker-point m3">
              <div className="marker-pulse"></div>
              <div className="marker-popup">
                <strong>Marcus Vance</strong>
                <span>At: West Port (Client Demo)</span>
              </div>
            </div>
          </div>
          <div className="gps-legend">
            <div className="legend-item">
              <span className="dot online"></span>
              <span>3 Agents Tracked in Real-Time via Android App</span>
            </div>
            <div className="legend-item">
              <ShieldCheck size={14} className="accent-cyan" />
              <span>Encrypted Geo-Fencing & Battery Optimization</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
