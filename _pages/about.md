---
layout: about
title: About
permalink: /
subtitle: '<a href="https://www.udc.gal/" target="_blank" rel="noopener">Universidade da Coruña</a> - <a href="https://fic.udc.es/" target="_blank" rel="noopener">Facultade de Informática</a>'
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

We are a multidisciplinary team of computer scientists, biologists, and bioinformaticians using machine learning to interpret complex omic data in cancer, infection, and metabolic disease. Our work is currently supported by the national project PRECISION (PID2024-162441OA-I00), on explainable graph neural networks for triple-negative breast cancer, and by the Interreg SUDOE project RePo-SUDOE, on transnational drug repurposing infrastructure.

### Research Lines

<div class="mall-band">
  <div class="mall-band-grid">
    <button class="mall-card is-active" data-i="0" type="button" aria-controls="mall-panel">
      <div class="mall-icon mall-icon-1"><i class="ti ti-brain" aria-hidden="true"></i></div>
      <div class="mall-card-title">Explainable AI for precision oncology</div>
    </button>
    <button class="mall-card" data-i="1" type="button" aria-controls="mall-panel">
      <div class="mall-icon mall-icon-2"><i class="ti ti-pill" aria-hidden="true"></i></div>
      <div class="mall-card-title">Drug repurposing and target discovery</div>
    </button>
    <button class="mall-card" data-i="2" type="button" aria-controls="mall-panel">
      <div class="mall-icon mall-icon-3"><i class="ti ti-microscope" aria-hidden="true"></i></div>
      <div class="mall-card-title">Microbiome and host-pathogen ML</div>
    </button>
    <button class="mall-card" data-i="3" type="button" aria-controls="mall-panel">
      <div class="mall-icon mall-icon-4"><i class="ti ti-stack-2" aria-hidden="true"></i></div>
      <div class="mall-card-title">Multi-omic and multimodal integration</div>
    </button>
  </div>

  <div class="mall-panel" id="mall-panel" aria-live="polite">
    <div class="mall-desc" data-i="0">
      <span class="mall-panel-title">Explainable AI for precision oncology</span>
      <p>We develop and apply machine learning and deep learning models, together with explainable AI techniques, to interpret tumor biology from bulk and single-cell transcriptomics. Our focus is triple-negative breast cancer and other hard-to-treat subtypes, where interpretable models help identify therapeutic targets, characterize resistance mechanisms, and guide translational decisions.</p>
    </div>
    <div class="mall-desc" data-i="1" hidden>
      <span class="mall-panel-title">Drug repurposing and therapeutic target discovery</span>
      <p>We develop computational workflows for drug repurposing based on docking, pharmacogenomics, transcriptomic signatures, and structure-based target prioritization. Within the RePo-SUDOE transnational network we operate three public platforms: <a href="https://repo-edu.citic.udc.es/" target="_blank" rel="noopener">RePo-EDU</a> for educational resources and training materials, <a href="https://repo-vre.citic.udc.es/" target="_blank" rel="noopener">RePo-VRE</a> as a virtual research environment for drug repurposing, and <a href="https://repo-bot.citic.udc.es/" target="_blank" rel="noopener">RePo-BOT</a> as an automated assistant for project queries. In PRECISION we apply graph learning to prioritize novel targets and repositioning opportunities in oncology.</p>
    </div>
    <div class="mall-desc" data-i="2" hidden>
      <span class="mall-panel-title">Microbiome and host-pathogen machine learning</span>
      <p>We build ML pipelines to analyze 16S and shotgun microbiome data in inflammatory bowel disease, type 1 and type 2 diabetes, preterm birth, and vaginal microbiota. In parallel, we study antimicrobial resistance in nosocomial pathogens, with ongoing work on Acinetobacter and Klebsiella pneumoniae genomics, surveillance, and clinical outcome prediction.</p>
    </div>
    <div class="mall-desc" data-i="3" hidden>
      <span class="mall-panel-title">Multi-omic and multimodal integration</span>
      <p>We combine genomics, transcriptomics, proteomics, and single-cell data to study molecular interactions across biological layers. We also integrate medical imaging and protein structural information into the same modeling pipelines, improving diagnosis and prognostic modeling in complex diseases.</p>
    </div>
  </div>
</div>

<script>
  (function () {
    var cards = document.querySelectorAll('.mall-card');
    var descs = document.querySelectorAll('.mall-desc');
    function activate(i) {
      cards.forEach(function (c) { c.classList.toggle('is-active', +c.dataset.i === i); });
      descs.forEach(function (d) { d.hidden = +d.dataset.i !== i; });
    }
    cards.forEach(function (c) {
      c.addEventListener('mouseenter', function () { activate(+c.dataset.i); });
      c.addEventListener('focus', function () { activate(+c.dataset.i); });
      c.addEventListener('click', function () { activate(+c.dataset.i); });
    });
  })();
</script>
