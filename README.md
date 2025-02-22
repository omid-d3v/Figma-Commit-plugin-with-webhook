# Figma Versioning Webhook Plugin

This Figma plugin automates design version logging by sending version details to a webhook. It enables tracking design updates and linking them to task management tools like Jira through automation platforms such as n8n and Zapier.

## Features
- Generates a Name version entry in Figma's version history.
- Sends version data via webhook.
- Compatible with n8n, Zapier, and Jira for automated logging.
- Stores version-related metadata in plugin data.
- Notifies users upon successful commit.

## How It Works
1. The plugin retrieves the current Figma page name.
2. The user provides details such as:
   - Changes made
   - Design link
   - Issue/task link
   - Status
3. The plugin saves this data in Figma’s plugin storage.
4. A webhook request is sent to the configured URL with the version details.
5. If the webhook request succeeds, a new version entry is created in Figma’s history.
6. The user is notified of the successful commit.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/figma-version-webhook.git
   ```
2. Open Figma and go to **Plugins** > **Development** > **Import Plugin from Manifest**.
3. Select the plugin folder.

## Configuration
Modify the webhook URL in `code.ts`:
```ts
const webhookUrl = 'https://your-webhook-url/webhook';
```

## Usage
1. Run the plugin in Figma.
2. Fill in the required fields (Changes, Design Link, Issue Link, Status).
3. Click the "Commit" button.
4. The plugin sends data to the webhook and logs the version in Figma.
5. Check your automation system (n8n, Zapier, Jira, etc.) for the logged entry.

## Webhook Payload
```json
{
  "pageName": "Page Name",
  "versionName": "Changes Description",
  "designLink": "https://figma.com/file/...",
  "issueLink": "https://jira.com/browse/...",
  "status": "In Progress"
}
```

## Integration with Jira / Task Managers
- Use **n8n** or **Zapier** to capture webhook data.
- Map the payload fields to Jira issue logs or other task management systems.

## Dependencies
- Figma Plugin API
- Webhook Endpoint (e.g., n8n, Zapier, or a custom backend)

## License
MIT License. See `LICENSE` for details.

## Contributors
- [omid dev](https://github.com/omid-d3v)

