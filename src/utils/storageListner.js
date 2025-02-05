const setUpStorageListner = () => {
    window.addEventListener('storage', (event) => {
        if (event.key === 'logout') {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            
            if (isLoggedIn === 'true') {
                console.log('Detected logout from another tab. Reloading...');
                window.location.reload();
            } else {
                console.log('Not logged in on this tab. No action taken.');
            }
        }
    });
};

export default setUpStorageListner;