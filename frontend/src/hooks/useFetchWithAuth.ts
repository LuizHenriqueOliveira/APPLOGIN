import { useAuth } from '../contexts/AuthContext';

// Define the type for the fetch function if needed elsewhere
export type AuthFetch = (url: string | URL, options?: RequestInit) => Promise<Response>;

export function useAuthFetch(): AuthFetch {
    const { getToken } = useAuth();

    const authFetch: AuthFetch = async (url, options = {}) => {
        const token = getToken();
        
        // HeadersInit is a standard TypeScript type for fetch headers
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token) {
            // Using type casting or bracket notation if headers is an object literal
            (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (response.status === 401) {
            // Token expired, handle logout
            localStorage.removeItem('token');
            window.location.href = '/login';
        }

        return response;
    };

    return authFetch;
}
