# Question for AI - Obsidian Plugin

Transform highlighted text into formatted Q&A pages, perfect for AI interactions and knowledge management.

## 🚀 Features

- **One-Click Q&A Creation**: Highlight any text and instantly create a formatted question page
- **Keyboard Shortcut**: Quick access with `Cmd+Shift+Q` (Mac) or `Ctrl+Shift+Q` (Windows/Linux)
- **AI-Ready Format**: Pages are pre-formatted with Question and Answer sections
- **Preserves Formatting**: Maintains original whitespace and text formatting
- **Stay Focused**: Remain on your current page while Q&A notes are created in the background
- **Smart Organization**: All Q&A files are stored in a dedicated `AIQA` folder
- **Auto-Generated Links**: Original text is replaced with clean links to your Q&A pages

## 📖 How It Works

1. **Highlight** any text you want to ask an AI about
2. **Press `Cmd+Shift+Q`** (or use Command Palette: "Create AI Question from Highlight")
3. **Stay focused** on your current page while a formatted Q&A note is created
4. **Click the generated link** when ready to add the AI's response

### Example Output

When you highlight text like "What are the benefits of using TypeScript over JavaScript?", the plugin creates:

```markdown
# AI Q&A

**Question:** What are the benefits of using TypeScript over JavaScript?

**Answer:** 

---
*Created: 6/23/2025, 2:30:45 PM*
```

Your original text gets replaced with: `[[AIQA/Q-1719172245123.md|Q: What are the benefits of using TypeScript...]]`

## 🛠 Installation

### From GitHub Releases (Recommended)
1. Download the latest release files (`main.js`, `manifest.json`, `styles.css`)
2. Create a folder: `VaultFolder/.obsidian/plugins/question-for-ai/`
3. Place the downloaded files in this folder
4. Reload Obsidian and enable the plugin in Settings > Community Plugins

### Manual Build
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to compile the plugin
4. Copy `main.js`, `manifest.json`, and `styles.css` to your vault's plugins folder

## 🎯 Use Cases

- **Research Notes**: Convert interesting passages into questions for deeper exploration
- **Study Materials**: Transform reading highlights into Q&A format for better retention
- **Knowledge Base**: Build a searchable collection of AI-answered questions
- **Documentation**: Create FAQ sections from highlighted problems or concepts

## ⚙️ Configuration

The plugin works out of the box with no configuration needed. All Q&A files are automatically organized in the `AIQA` folder.

### Keyboard Shortcut
- **Default**: `Cmd+Shift+Q` (Mac) or `Ctrl+Shift+Q` (Windows/Linux)
- **Customize**: Settings → Hotkeys → Search for "Create AI Question from Highlight"

## 🔧 Development

This plugin is built with TypeScript and the Obsidian API.

### Setup
```bash
# Clone the repository
git clone https://github.com/davidemodesto/obsidian-question-for-ai.git

# Install dependencies
npm install

# Start development build
npm run dev
```

### Building
```bash
npm run build
```

### Automated Releases
This repository uses GitHub Actions for automated releases:

- **Build & Test**: Runs on every push/PR to validate the code
- **Release**: Automatically triggered when you push a git tag
  ```bash
  # Create and push a new version
  git tag 1.0.1
  git push origin 1.0.1
  ```
- The GitHub Action will automatically build and create a draft release with the required files

## 📝 Commands

| Command | Description | Default Hotkey |
|---------|-------------|----------------|
| `Create AI Question from Highlight` | Converts selected text into a formatted Q&A page | `Cmd+Shift+Q` (Mac)<br>`Ctrl+Shift+Q` (Windows/Linux) |

## 📁 File Structure

```
YourVault/
├── AIQA/                    # Auto-created folder for all Q&A files
│   ├── Q-1719172245123.md  # Timestamped Q&A files
│   ├── Q-1719172267891.md
│   └── ...
└── YourNotes.md            # Your original notes with Q&A links
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT License](LICENSE)

## 🐛 Issues & Feature Requests

Found a bug or have a feature idea? [Open an issue](https://github.com/davidemodesto/obsidian-question-for-ai/issues) on GitHub.

---

**Made with ❤️ for the Obsidian community**
