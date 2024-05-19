const baseUrl = 'http://163.172.177.98:8081';

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
}

export const login = async (email: string, password: string) => {
    try {
        const result = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                ...baseHeaders
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await result.json();

        if (data.code === 400 ) {
            return "Email and password are required.";
        }
        
        return data.accessToken;
    } catch (error) {
        console.error("Error occurred while logging in:", error);
        throw error;
    }
};


export const register = async (email: string, password: string) => {
    try {
        const result = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                ...baseHeaders
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await result.json();

        console.log(data);

        return data.accessToken;
    } catch (error) {
        console.error("Error occurred while trying to register:", error);
    }
};

export const listGames = async (token: string) => {
    const result = await fetch(`${baseUrl}/game`, {
        method: 'GET',
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await result.json();
    //console.log(data);
    const createdGames = data.games.filter((game:any) => game.status === 'CREATED');
    return createdGames;
}


export const createGame = async (token: string) => {
    const result = await fetch(`${baseUrl}/game`, {
        method: 'POST',
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await result.json();
    console.log(data);
    return data;
}

export const loadGame = async (token: string, gameId: number) => {
    const result = await fetch(`${baseUrl}/game/${gameId}`, {
        method: 'get',
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await result.json();

    return data
}

export const getUserDetails = async (token: string) => {

    const result = await fetch(`${baseUrl}/user/details/me`, {
        method: "GET",
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await result.json();

    return data;
}