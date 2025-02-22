figma.showUI(__html__, { width: 400, height: 700 });
figma.ui.postMessage({ type: 'set-page-name', pageName: figma.currentPage.pageName });

figma.ui.onmessage = async (message) => {
  if (message.type === 'create-version') {
    const { page,changes, designLink, issueLink ,status} = message;

    // save the page name and version name as plugin data
    const pageName = `page: **${page}**`;
    const versionName = `Changes: \n ${changes}`;
    figma.root.setPluginData('page', pageName);
    figma.root.setPluginData('versionName', versionName);
    figma.root.setPluginData('designLink', designLink);
    figma.root.setPluginData('issueLink', issueLink);
    figma.root.setPluginData('status', status);

    // your webhook URL 
    const webhookUrl = 'https://ngrok-free.app/webhook/b9fcde90-3e53-4958-b352-933891f95220/webhook'; // آدرس وب‌هوک
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pageName,
        versionName,
        designLink,
        issueLink,
        status,
      }),
    });

    if (response.ok) {
      await new Promise(r => setTimeout(r, 1000)); // wait for 1 second
      await figma.saveVersionHistoryAsync(pageName ,versionName + "\n" + designLink +"\n"+ issueLink);
      figma.notify('🎉Commited!🎉');
    } else {
      figma.notify('Failed to call webhook.');
    }

    // close the plugin
    figma.closePlugin();
  }
};
