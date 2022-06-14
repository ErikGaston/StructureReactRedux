
export function useAuth() {
    const auth = localStorage.getItem("access_token");

    return auth;
}