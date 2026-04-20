import { useEffect } from "react";

export const removeDzContainer = () => useEffect(() => {
    const observer = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        const n = node as HTMLElement;
                        if (n.matches('.dz-container')) {
                            n.style.display = 'none';
                        }
                    }
                })
            }
        }
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })


    return () => observer.disconnect();
}, [])
