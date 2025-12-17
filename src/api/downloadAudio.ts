'use server'
export const downloadAudio = async (src: string) => {
    const response = await fetch(src, {
        headers: {
            method: 'GET',
            'Content-Type': 'audio/mpeg'
        }
    });
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer)
}