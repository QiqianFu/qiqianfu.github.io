---
title: "About Me"
permalink: /
classes: wide
---

<span id="about-me"></span>
I'm a second-year M.S. student in Computer Science at the [University of Illinois Urbana-Champaign](https://siebelschool.illinois.edu/). I previously earned my bachelor's degree from the [ZJU-UIUC Institute](https://zjui.intl.zju.edu.cn/en).

My interests center on **Agent RL, data synthesis, and model training**. I'm particularly interested in how agents learn from long-term interactions and feedback, and how to build training data and evaluations that make their progress measurable.

At Tencent, I worked on **agent memory, cost-aware model routing, and coding-agent evaluation**, with a focus on data synthesis and reliable feedback signals. My personal projects explore decision models and desktop agents, building on my earlier research in multimodal learning and visual grounding.

## Research Projects

{% include project-list.html projects=site.data.projects.research %}

## Personal Projects

{% include project-list.html projects=site.data.projects.personal %}

## Internship Experience
{: #intern-experience }

{% for experience in site.data.experience %}
<div class="profile-experience">
  <h3>{{ experience.company }} <span>— {{ experience.role }}</span></h3>
  <p class="profile-experience__meta">{{ experience.location }} · {{ experience.dates }}</p>
  {% if experience.highlights %}
  <ul class="profile-experience__highlights">
    {% for highlight in experience.highlights %}
    <li><strong>{{ highlight.title }}:</strong> {{ highlight.description }}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}
