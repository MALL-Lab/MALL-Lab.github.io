---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order.
nav: true
nav_order: 2
---

{% capture bib_content %}{% bibliography %}{% endcapture %}

{% assign total = bib_content | split: 'class="bibtex-item' | size | minus: 1 %}
{% assign articles = bib_content | split: 'class="bibtex-item article' | size | minus: 1 %}
{% assign proceedings = bib_content | split: 'class="bibtex-item inproceedings' | size | minus: 1 %}
{% assign q1_count = bib_content | split: 'Q1' | size | minus: 1 %}
{% assign d1_count = bib_content | split: '<strong>D1</strong>' | size | minus: 1 %}

<div class="pub-stats">
  <div class="pub-stat">
    <div class="pub-stat-num">{{ total }}</div>
    <div class="pub-stat-lab">Total publications</div>
  </div>
  <div class="pub-stat">
    <div class="pub-stat-num">{{ articles }}</div>
    <div class="pub-stat-lab">Journal articles</div>
  </div>
  <div class="pub-stat">
    <div class="pub-stat-num">{{ q1_count }}</div>
    <div class="pub-stat-lab">In Q1 journals</div>
  </div>
  <div class="pub-stat">
    <div class="pub-stat-num">{{ d1_count }}</div>
    <div class="pub-stat-lab">In D1 journals</div>
  </div>
  <div class="pub-stat">
    <div class="pub-stat-num">{{ proceedings }}</div>
    <div class="pub-stat-lab">Conference papers</div>
  </div>
</div>

{% include bib_search.liquid %}

<div class="publications">
  {{ bib_content }}
</div>
