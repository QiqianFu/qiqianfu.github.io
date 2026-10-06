---
title: "LeetCode Agent"
description: "An AI-powered terminal companion for deliberate LeetCode practice."
permalink: /leetcode-agent/
toc: true
toc_label: "On this page"
toc_sticky: true
---

An AI-powered terminal companion for deliberate LeetCode practice — featuring intelligent spaced repetition, company-targeted problem selection, and real-time tutoring powered by DeepSeek.

[View on GitHub](https://github.com/QiqianFu/leetcode_agent){: .btn .btn--primary }

## Interactive Demos

{% include leetcode-demos.html %}

## Screenshots

Real terminal output with Rich-formatted tables, colored syntax, and structured AI responses. Select an image to view it at full size.

<figure>
  <a href="{{ '/leetcode-agent/img/demo1.png' | relative_url }}"><img src="{{ '/leetcode-agent/img/demo1.png' | relative_url }}" alt="Daily plan with review and new problems" loading="lazy"></a>
  <figcaption>Daily plan: review queue + new problem recommendations</figcaption>
</figure>

<figure>
  <a href="{{ '/leetcode-agent/img/demo2.png' | relative_url }}"><img src="{{ '/leetcode-agent/img/demo2.png' | relative_url }}" alt="AI teaching with code explanations" loading="lazy"></a>
  <figcaption>Natural language search + structured AI explanations</figcaption>
</figure>

## Architecture

| Component | Technology |
| --- | --- |
| CLI | prompt_toolkit + Rich |
| AI Agent | DeepSeek + Function Calling |
| LeetCode | GraphQL API |
| Storage | SQLite + Spaced Repetition Scheduler |

**Tech stack:** Python 3.11+, DeepSeek V4, SQLite, Rich, prompt_toolkit, LeetCode GraphQL, CodeTop API, OpenAI SDK.

[← Back to personal projects]({{ '/#personal-projects' | relative_url }})
