---
layout: page
title: Projects
subtitle: Data science and machine learning work spanning astronomy, healthcare, and analytics
permalink: /projects/
---

A showcase of data science and machine learning work I've done outside my core research — spanning astronomy, healthcare, aviation analytics, and applied statistics. If you're looking for my [tech résumé](/cv-resume/), it's there too.

{% for project in site.data.projects %}
<div class="box project-card">
	<h3><a href="{{ project.slug | prepend: '/projects/' | append: '/' | relative_url }}">{{ project.title }}</a></h3>
	<p>{{ project.summary }}</p>
</div>
{% endfor %}
