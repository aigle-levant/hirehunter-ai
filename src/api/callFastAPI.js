export async function createCandidate(candidateData) {
    const response = await fetch("http://localhost:8000/api/candidates", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(candidateData),
    });

    return response.json();
}