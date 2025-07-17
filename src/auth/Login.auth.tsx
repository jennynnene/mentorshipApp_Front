// src/auth/login.auth.tsx

export interface LoginResponse {
    message: string;
    token?: string;
    user?: {
        id: number;
        email: string;
        role: string;
        firstName: string;
        lastName: string;
    };
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    try {
          const api_link= import.meta.env.VITE_API_LINK || import.meta.env.VITE_LOCALHOST
        const response = await fetch(`${api_link}/users/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error: unknown) {
        let message = 'An error occurred';
        if (error instanceof Error) {
            message = error.message;
        }
        return { message };
    }
}