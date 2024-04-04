export const isAuthenticated = () => {
    const expiry = JSON.parse(localStorage.getItem('Batman'))?.expiry
    if (expiry) {
        return new Date(expiry) > new Date();
    } else {
        return false;
    }
};

