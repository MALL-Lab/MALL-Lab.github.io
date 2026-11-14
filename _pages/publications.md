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

<div id="pub-filters" class="pub-filters" aria-label="Filter publications by year or type"></div>

{% include bib_search.liquid %}

<div class="publications">
  {{ bib_content }}
</div>

<script>
  (function () {
    var items = document.querySelectorAll('.bibtex-item');
    if (!items.length) return;

    var yearCounts = {};
    var typeCounts = { journal: 0, conference: 0, preprint: 0 };

    function headerYearFor(it) {
      var ol = it.closest('ol');
      var cursor = ol ? ol.previousElementSibling : null;
      while (cursor) {
        if ((cursor.tagName === 'H2' || cursor.tagName === 'H3')) {
          var t = cursor.textContent.trim();
          if (/^(19|20)\d{2}$/.test(t)) return t;
        }
        cursor = cursor.previousElementSibling;
      }
      return null;
    }

    items.forEach(function (it) {
      var year = headerYearFor(it);
      if (year) {
        it.dataset.year = year;
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      }
      var type = null;
      if (it.classList.contains('article')) type = 'journal';
      else if (it.classList.contains('inproceedings')) type = 'conference';
      else if (it.classList.contains('inbook')) type = 'chapter';
      else if (it.classList.contains('book')) type = 'book';
      if (type === 'journal' && /\bPreprint\b/.test(it.textContent)) type = 'preprint';
      if (type) {
        it.dataset.type = type;
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      }
    });

    var state = { year: null, type: null };

    function applyFilter() {
      items.forEach(function (it) {
        var ok = true;
        if (state.year && it.dataset.year !== state.year) ok = false;
        if (state.type && it.dataset.type !== state.type) ok = false;
        var row = it.closest('li') || it;
        row.style.display = ok ? '' : 'none';
      });
      document.querySelectorAll('.pub-filter-chip').forEach(function (c) {
        var active = (c.dataset.year === state.year && state.year !== null) ||
                     (c.dataset.type === state.type && state.type !== null);
        c.classList.toggle('is-active', active);
      });
      // Hide year headers (h2 or h3 with year) that have no visible items beneath them
      document.querySelectorAll('h2, h3').forEach(function (h) {
        var txt = h.textContent.trim();
        if (/^(19|20)\d{2}$/.test(txt)) {
          var next = h.nextElementSibling;
          var anyVisible = false;
          while (next && next.tagName !== 'H2' && next.tagName !== 'H3') {
            if (next.querySelectorAll) {
              next.querySelectorAll('li').forEach(function (li) {
                if (li.style.display !== 'none') anyVisible = true;
              });
            }
            next = next.nextElementSibling;
          }
          h.style.display = anyVisible || (!state.year && !state.type) ? '' : 'none';
        }
      });
    }

    function makeChip(label, count, attr, value) {
      var b = document.createElement('button');
      b.className = 'pub-filter-chip';
      b.type = 'button';
      b.dataset[attr] = value;
      b.innerHTML = label + ' <span class="chip-count">' + count + '</span>';
      b.addEventListener('click', function () {
        state[attr] = state[attr] === value ? null : value;
        applyFilter();
      });
      return b;
    }

    var years = Object.keys(yearCounts).sort(function (a, b) { return b - a; });

    var filtersRoot = document.getElementById('pub-filters');
    if (filtersRoot) {
      var yrGroup = document.createElement('div');
      yrGroup.className = 'pub-filter-group';
      var yrLabel = document.createElement('span');
      yrLabel.className = 'pub-filter-group-label';
      yrLabel.textContent = 'Year';
      yrGroup.appendChild(yrLabel);
      years.slice(0, 5).forEach(function (y) { yrGroup.appendChild(makeChip(y, yearCounts[y], 'year', y)); });
      filtersRoot.appendChild(yrGroup);

      var typeGroup = document.createElement('div');
      typeGroup.className = 'pub-filter-group';
      var typeLabel = document.createElement('span');
      typeLabel.className = 'pub-filter-group-label';
      typeLabel.textContent = 'Type';
      typeGroup.appendChild(typeLabel);
      [['Journal', 'journal'], ['Conference', 'conference'], ['Preprint', 'preprint']].forEach(function (pair) {
        if (typeCounts[pair[1]]) typeGroup.appendChild(makeChip(pair[0], typeCounts[pair[1]], 'type', pair[1]));
      });
      filtersRoot.appendChild(typeGroup);
    }

  })();
</script>
