"use client"
import React, { useState } from 'react';
import Downloadicon from '@/assets/svg/downloadicon';
import AudioPlay from './audioPlay';
import { downloadAudio } from '@/api/downloadAudio';

interface Props {
    id: number;
    name: string;
    src: string;
    isPlaying: boolean;
    onPlay: (id: number) => void;
    onPause: (id: number) => void;
}

const DummyArray = [
    { id: 1, name: "Heelo The Music 1", src: "/test-audio.mp3" },
    { id: 2, name: "Heelo The Music 2", src: "/test-audio.mp3" },
    { id: 3, name: "Heelo The Music 3", src: "/test-audio.mp3" },
    { id: 4, name: "Heelo The Music 4", src: "/test-audio.mp3" },
    { id: 5, name: "Heelo The Music 5", src: "/test-audio.mp3" },
    { id: 6, name: "Heelo The Music 6", src: "/test-audio.mp3" },
    { id: 7, name: "Heelo The Music 7", src: "https://file-examples.com/storage/fe44eeb9cb66ab8ce934f14/2017/11/file_example_MP3_700KB.mp3" },
    { id: 8, name: "Heelo The Music 8", src: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" },

]



const Mediacell: React.FC<Props> = ({ id, name, src, isPlaying, onPlay, onPause }) => {

    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        try {

            if (loading) return;

            let blob = new Blob();

            setLoading(true);
            if (src.startsWith('https://')) {
                const buffer = await downloadAudio(src);
                const arrayBuffer = Uint8Array.from(buffer).buffer;
                blob = new Blob([arrayBuffer], {
                    type: "audio/mpeg",
                });
            } else {
                const response = await fetch(src, {
                    headers: {
                        method: 'GET',
                        'Content-Type': 'audio/mpeg',
                        mode: 'no-cors'
                    }
                });
                blob = await response.blob();
            }
            setLoading(false);

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${name}.mp3`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    return (
        <div key={id} className="flex gap-4 justify-between items-center">
            <p className="text-xs leading-normal text-dark-gray dark:text-darkText">Perfect {name}</p>
            <div className="flex gap-2 items-center">
                <AudioPlay id={id} src={src} isPlaying={isPlaying} onPlay={onPlay} onPause={onPause} />
                <span className="h-3 w-[1px] bg-lightLavender-gray dark:bg-lightGray"></span>
                <button onClick={handleDownload} className="flex items-center">
                    <Downloadicon />
                </button>
            </div>
        </div>
    );
};

const Mediacard = () => {
    const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number | null>(null);

    const handlePlay = (id: number) => {
        setCurrentlyPlayingId(id);
    };

    const handlePause = (id: number) => {
        if (currentlyPlayingId === id) {
            setCurrentlyPlayingId(null);
        }
    };

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-5 pb-6 xs:pl-[30px] pl-4 pr-3 rounded-2xl">
            <p className="text-xs leading-1.2 font-inter font-semibold text-heading-text dark:text-darkheading">MEDIA</p>
            <div className="mt-2 pr-4 h-[100px] flex flex-col gap-2 overflow-y-auto lightpurplescrollbar">
                {DummyArray.map((data) => (
                    <Mediacell
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        src={data.src}
                        isPlaying={currentlyPlayingId === data.id}
                        onPlay={handlePlay}
                        onPause={handlePause}
                    />
                ))}
            </div>
        </div>
    );
};

export default Mediacard;