import { Plugin, Notice } from 'obsidian';

export default class QuestionForAIPlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'create-ai-question',
			name: 'Create AI Question from Highlight',
			hotkeys: [{ modifiers: ['Mod', 'Shift'], key: 'q' }],
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

				// Replace with link
				const linkText = `[[${filename}|Q: ${sanitizedText.substring(0, 50)}${sanitizedText.length > 50 ? '...' : ''}]]`;
				editor.replaceSelection(linkText);

				new Notice(`AI Question created: ${filename}`);
			}
		});
	}
}
