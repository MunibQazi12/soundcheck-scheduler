"use client"

import React, { FC, useRef, useEffect } from 'react';
import Playicon from '@/assets/svg/playicon';
import PauseIcon from '@/assets/svg/pauseicon';
import Downloadicon from '@/assets/svg/downloadicon';

interface Props {
    src: string;
    id: number;
    isPlaying: boolean;
    onPlay: (id: number) => void;
    onPause: (id: number) => void;
}

const AudioPlay: FC<Props> = ({ src, id, isPlaying, onPlay, onPause }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        onPlay(id);
    };

    const handlePause = () => {
        onPause(id);
    };

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play();
        } else if (!isPlaying && audioRef.current) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <div>
            {!isPlaying ? (
                <button onClick={handlePlay} type="button" className='w-4 h-4 flex justify-center items-center'>
                    <Playicon />
                </button>
            ) : (
                <button onClick={handlePause} type="button" className='w-4 h-4 flex justify-center items-center'>
                    <PauseIcon />
                </button>
            )}
            <audio ref={audioRef} src={src} />
            
        </div>
    );
};

export default AudioPlay;
