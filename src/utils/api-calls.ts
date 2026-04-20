import { Movement } from "@/types/movements";

export const endpoints = {
    movements: {
        async add(userID: number, mvmt: Movement): Promise<{ mvmt: Movement }> {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userID,
                        mvmt
                    })
                })

                const data = await res.json();

                return data;
            } catch (err) {
                throw new Error('Unable to add movement')
            }
        }
    }
}
