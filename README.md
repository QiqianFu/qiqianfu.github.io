# Qiqian Fu — personal website

Jekyll + [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/), using the official remote theme pinned to `4.28.1`.

## Local preview

Use a current Ruby installation (Ruby 3.3 or 3.4 recommended), then:

```sh
# macOS: use Homebrew Ruby if the system Ruby is too old.
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Visit http://127.0.0.1:4000. Restart the server after editing `_config.yml`.

```sh
bundle exec jekyll build --strict_front_matter
```

## Editing content

- `_config.yml`: site identity, author avatar, social links, theme version and skin.
- `_data/navigation.yml`: main navigation.
- `index.md`: introduction and homepage sections.
- `_data/projects.yml`: research and personal projects, images, descriptions, and links.
- `_data/experience.yml`: internships.
- `leetcode-agent/index.md`: LeetCode Agent detail page.
- `_includes/leetcode-demos.html`: original terminal demo transcripts, now keyboard-accessible expandable sections.
- `assets/css/main.scss`: minimal styling on top of the upstream theme.

The original homepage content, profile links, project descriptions, images, internship dates, and terminal transcripts were retained. Personal facts are copied from the source site, not independently updated. The old `/index.html`, `/leetcode-agent/index.html`, and homepage section anchors still resolve. Jekyll generates those HTML files from Markdown.

## GitHub Pages

The repository currently publishes `main` from `/` using GitHub Pages' built-in Jekyll build. This migration supports that existing setup: no custom workflow or Pages setting change is needed. After reviewing locally, commit and push the migration to `main` to publish. A plain HTML server cannot render the Markdown/Liquid source; preview the Jekyll build instead.

The theme handles the shared navigation, author sidebar, responsive layout, SEO metadata, and “Powered by Jekyll & Minimal Mistakes” footer. To upgrade, change the pinned `remote_theme` version and rebuild.

## Previous template

The former template CSS, scripts, and sample pages remain in the repository as reference but are excluded from the published Jekyll site. Its BSD license is preserved in `LICENSE`. The upstream Minimal Mistakes theme is MIT licensed and is loaded as a dependency.
