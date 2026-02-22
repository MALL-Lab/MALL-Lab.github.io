---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order.
nav: true
nav_order: 2
---

{% capture bib_content %}{% bibliography %}{% endcapture %}

{% comment %} 
  1. CONTEOS DE TIPOS Y CALIDAD
{% endcomment %}
{% assign total = bib_content | split: 'class="bibtex-item' | size | minus: 1 %}
{% assign articles = bib_content | split: 'class="bibtex-item article' | size | minus: 1 %}
{% assign proceedings = bib_content | split: 'class="bibtex-item inproceedings' | size | minus: 1 %}
{% assign chapters = bib_content | split: 'class="bibtex-item inbook' | size | minus: 1 %}
{% assign books = bib_content | split: 'class="bibtex-item book' | size | minus: 1 %}

{% assign q1_count = bib_content | split: 'Q1' | size | minus: 1 %}
{% assign q2_count = bib_content | split: 'Q2' | size | minus: 1 %}
{% assign d1_count = bib_content | split: '<strong>D1</strong>' | size | minus: 1 %}
{% assign q1_q2_total = q1_count | plus: q2_count %}

{% comment %} 
  2. SUMATORIO DE IMPACT FACTOR (IF)
{% endcomment %}
{% assign total_if = 0.0 %}
{% assign items = bib_content | split: 'class="bibtex-item' %}
{% for item in items %}
  {% if item contains ' IF' %}
    {% assign parts = item | split: ' IF' | first | split: ' ' %}
    {% assign last_val = parts | last | plus: 0 %}
    {% assign total_if = total_if | plus: last_val %}
  {% endif %}
{% endfor %}

{% comment %} 
  3. CÁLCULO DE RATIOS DE IMPACTO
{% endcomment %}
{% if articles > 0 %}
  {% assign high_quality_ratio = q1_q2_total | times: 100 | divided_by: articles %}
{% else %}
  {% assign high_quality_ratio = 0 %}
{% endif %}

{% if q1_count > 0 %}
  {% assign d1_of_q1_ratio = d1_count | times: 100 | divided_by: q1_count %}
{% else %}
  {% assign d1_of_q1_ratio = 0 %}
{% endif %}

<div class="stats-dashboard" style="margin-bottom: 3rem; padding: 2rem; background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
  <div class="row align-items-center">
    
    <div class="col-md-4 border-right text-center">
      <h1 style="color: var(--global-theme-color); font-weight: 800; margin-bottom: 0; font-size: 3.5rem;">{{ total }}</h1>
      <p style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; font-weight: 600; opacity: 0.9; margin-bottom: 10px;">Total Publications</p>
      <div style="background: var(--global-divider-color); border-radius: 8px; padding: 8px 15px; display: inline-block;">
         <span style="font-weight: 700; font-size: 1.1rem; color: var(--global-text-color);">∑ IF: {{ total_if | round: 2 }}</span>
      </div>
    </div>

    <div class="col-md-8">
      <div style="padding-left: 1.5rem;">
        
        <div class="mb-4">
          <div class="d-flex justify-content-between" style="font-size: 0.9rem; margin-bottom: 6px; font-weight: 600;">
            <span><i class="fa-solid fa-star text-warning"></i> Q1/Q2 Journals Efficiency</span>
            <span class="text-primary">{{ high_quality_ratio }}% of Articles</span>
          </div>
          <div class="progress" style="height: 14px; background-color: var(--global-divider-color); border-radius: 20px;">
            <div class="progress-bar" role="progressbar" 
                 style="width: {{ high_quality_ratio }}%; background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); border-radius: 20px;" 
                 aria-valuenow="{{ high_quality_ratio }}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">{{ q1_q2_total }} out of {{ articles }} articles are Q1 or Q2.</small>
        </div>

        <div>
          <div class="d-flex justify-content-between" style="font-size: 0.9rem; margin-bottom: 6px; font-weight: 600;">
            <span><i class="fa-solid fa-gem" style="color: #28a745;"></i> Excellence: D1 within Q1</span>
            <span style="color: #28a745;">{{ d1_of_q1_ratio }}% ratio</span>
          </div>
          <div class="progress" style="height: 14px; background-color: var(--global-divider-color); border-radius: 20px;">
            <div class="progress-bar" role="progressbar" 
                 style="width: {{ d1_of_q1_ratio }}%; background: linear-gradient(90deg, #2ecc71 0%, #28a745 100%); border-radius: 20px;" 
                 aria-valuenow="{{ d1_of_q1_ratio }}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">{{ d1_count }} publications in the 1st Decile (D1).</small>
        </div>

      </div>
    </div>
  </div>

  <div class="row mt-4 pt-3 border-top text-center" style="font-size: 0.9rem; font-weight: 500;">
    <div class="col"><strong>{{ q1_count }}</strong> Q1 Journals</div>
    <div class="col"><strong>{{ q2_count }}</strong> Q2 Journals</div>
    <div class="col"><strong>{{ d1_count }}</strong> D1 Journals</div>
  </div>

  <div class="row mt-3 text-center" style="font-size: 0.85rem; opacity: 0.8;">
    <div class="col"><i class="fa-solid fa-book-open"></i> <strong>{{ chapters }}</strong> Book Chapters</div>
    <div class="col"><i class="fa-solid fa-book"></i> <strong>{{ books }}</strong> Books</div>
    <div class="col"><i class="fa-solid fa-users-rectangle"></i> <strong>{{ proceedings }}</strong> Conference Papers</div>
  </div>
</div>

{% include bib_search.liquid %}

<div class="publications">
  {{ bib_content }}
</div>