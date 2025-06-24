import { Plugin, Notice } from 'obsidian';

export default class QuestionForAIPlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'create-ai-question',
			name: 'Create AI Question from Highlight',
			hotkeys: [{ modifiers: ['Ctrl', 'Shift'], key: 'q' }],
			editorCallback: async (editor, view) => {
				const selection = editor.getSelection();
				if (!selection) {
					new Notice('No text selected');
					return;
				}

				const folder = 'AIQA';
				const uniqueId = Date.now();
				const sanitizedText = selection.replace(/\[\[|\]\]/g, ''); // Remove brackets only
				const filename = `${folder}/Q-${uniqueId}.md`;

				// Ensure folder exists
				try {
					await this.app.vault.createFolder(folder);
				} catch (e) {
					// Folder exists or error ignored
				}

				// Create formatted Q&A content
				const qaContent = `# AI Q&A

**Question:** ${sanitizedText}

**Answer:** 

---
*Created: ${new Date().toLocaleString()}*`;

				// Create the new note
				await this.app.vault.create(filename, qaContent);

				// Copy question to clipboard for easy AI pasting
				await navigator.clipboard.writeText(sanitizedText);

				// Replace with formatted question and answer link
				const formattedText = `**Q:** ${sanitizedText}\n**A:** [[${filename}|View Answer]]`;
				editor.replaceSelection(formattedText);

				new Notice(`AI Question created: ${filename} (copied to clipboard)`);
			}
		});
	}
}
