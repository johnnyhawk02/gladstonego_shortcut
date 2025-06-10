let deferredPrompt;

// Check if this is running as a PWA
function isPWA() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone === true;
}

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show the install button
    document.getElementById('installButton').classList.remove('hidden');
});

// Handle install button click
document.getElementById('installButton').addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // Clear the deferredPrompt variable
        deferredPrompt = null;
        // Hide the install button
        document.getElementById('installButton').classList.add('hidden');
    } else {
        // Fallback for browsers that don't support the install prompt
        alert('To install this app:\n\n• On iOS Safari: Tap Share → Add to Home Screen\n• On Android Chrome: Tap Menu → Add to Home screen\n• On Desktop: Look for the install icon in the address bar');
    }
});

// Listen for the appinstalled event
window.addEventListener('appinstalled', (evt) => {
    console.log('App was installed');
    // Hide the install prompt
    document.getElementById('installPrompt').style.display = 'none';
});

// Hide install prompt if already installed as PWA
if (isPWA()) {
    document.getElementById('installPrompt').style.display = 'none';
}
