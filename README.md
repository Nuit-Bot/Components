# `@nuit-bot/components`

Reusable UI components for the [Nuit](https://github.com/Nuit-Bot/Nuit) Discord bot dashboard. Designed for dark-themed web UIs using OKLCH design tokens.

## Installation

```sh
npm install @nuit-bot/components
# or
bun add @nuit-bot/components
```

## Usage

```tsx
import { Button, Stack, Badge } from "@nuit-bot/components";
```

Each component imports its own CSS — your bundler (Vite, etc.) handles the `.css` imports automatically.

```tsx
import { Button } from "@nuit-bot/components";
import { ConfigPanel } from "@nuit-bot/components";
import { useModuleConfig } from "@nuit-bot/components";
import type { ModuleConfigField } from "@nuit-bot/components";
```

### Config forms

`ConfigPanel` renders a form from a module's config schema. Pair it with `useModuleConfig` for state management:

```tsx
import { ConfigPanel, useModuleConfig } from "@nuit-bot/components";
import type { ModuleConfigField } from "@nuit-bot/components";

const schema: ModuleConfigField[] = [
    { key: "channelId", label: "Channel", type: "channel", optional: true },
    { key: "message", label: "Message", type: "string", max: 500 },
];

function MyConfigPage() {
    const config = useModuleConfig({ initialConfig: {}, schema });

    return (
        <ConfigPanel
            fields={schema}
            values={config.values}
            validationErrors={config.validationErrors}
            onChange={config.onChange}
            onSave={() => { if (config.validate()) save(config.toPayload()); }}
        />
    );
}
```

## Required CSS variables

Components use CSS custom properties for theming. **You must define these on `:root`** in your app:

### Backgrounds

| Variable | Example |
|----------|---------|
| `--bg-surface` | `oklch(0.135 0.024 270)` |
| `--bg-elevated` | `oklch(0.17 0.028 270)` |
| `--bg-overlay` | `oklch(0.205 0.034 270)` |
| `--bg-hover` | `oklch(0.245 0.042 270)` |

### Accent

| Variable | Example |
|----------|---------|
| `--accent-600` | `oklch(0.48 0.185 272)` |

### Semantic colors

| Variable | Example | Used for |
|----------|---------|----------|
| `--danger` | `oklch(0.68 0.2 25)` | Errors, destructive actions |
| `--danger-subtle` | `oklch(0.68 0.2 25 / 0.15)` | Subtle danger backgrounds |
| `--warning` | `oklch(0.84 0.15 80)` | Warnings |
| `--warning-subtle` | `oklch(0.84 0.15 80 / 0.15)` | Subtle warning backgrounds |
| `--info` | `oklch(0.715 0.115 222)` | Info messages |
| `--info-subtle` | `oklch(0.715 0.115 222 / 0.15)` | Subtle info backgrounds |
| `--success-subtle` | `oklch(0.775 0.145 163 / 0.15)` | Success badges |

### Borders

| Variable | Example | Opacity |
|----------|---------|---------|
| `--border-subtle` | `oklch(1 0 0 / 0.07)` | Subtle separators |
| `--border-default` | `oklch(1 0 0 / 0.13)` | Default borders |
| `--border-strong` | `oklch(1 0 0 / 0.22)` | Focused / active |
| `--border-accent` | `oklch(0.635 0.16 272 / 0.6)` | Accent borders |

### Text

| Variable | Example | Used for |
|----------|---------|----------|
| `--text-primary` | `oklch(0.96 0.01 270)` | Headings, body |
| `--text-secondary` | `oklch(0.79 0.011 270)` | Subtle labels |
| `--text-muted` | `oklch(0.59 0.013 270)` | Placeholders, disabled |

### Other

| Variable | Example | Used for |
|----------|---------|----------|
| `--neutral-50` | `oklch(0.96 0.01 270)` | Toggle knob |

## Components

| Component | Description |
|-----------|-------------|
| `Badge` | Small label (`default` / `success` / `warning` / `danger` / `info`) |
| `Button` | Action button (`primary` / `ghost` / `danger`, loading state) |
| `Card` | Container with elevation levels 1–4 |
| `Checkbox` | Custom checkbox with label |
| `ConfigPanel` | Dynamic config form renderer (schema-driven) |
| `ConfirmationDialog` | Modal dialog with backdrop blur |
| `Container` | Centered layout wrapper (`sm` / `md` / `lg`) |
| `Divider` | Horizontal or vertical line |
| `FieldError` | Inline error message |
| `FieldLevelFeedback` | Info / warning / conflict feedback |
| `FormField` | Label + input wrapper with optional/required badges |
| `FormGroup` | Section with title and 2-column grid |
| `Input` | Text, number, password, search input |
| `Select` | Dropdown select |
| `Stack` | Flexbox layout (row/column, gap, align, justify, wrap) |
| `Textarea` | Resizable textarea |
| `Toggle` | Toggle switch |
| `UnsavedChangesIndicator` | Sticky "unsaved changes" bar |
| `useModuleConfig` | Hook for config form state (values, validation, dirty tracking) |
| `configTypes` | Shared TypeScript types (`ModuleConfigField`, `ModuleConfigResponse`, etc.) |

## Development

```sh
bun install          # install dependencies
bun run typecheck    # type-check only
bun run build        # compile TS + copy CSS to dist/
```

## Publishing

Push a tag matching `v*` — the [GitHub workflow](.github/workflows/npm-publish.yml) publishes to npm with provenance.
