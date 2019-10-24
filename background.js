const translateToId = chrome.contextMenus.create({
    id: 'translateToId',
    title: 'translate to ...',
    contexts: ['all']
});

const translateFromId = chrome.contextMenus.create({
    id: 'translateFromId',
    title: 'translate from ...',
    contexts: ['all']
});

chrome.contextMenus.onClicked.addListener(info => {
    console.log(info);
});