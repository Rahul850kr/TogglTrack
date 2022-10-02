import { AddIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsFillPauseFill, BsPlayCircleFill } from "react-icons/bs";
import { useStopwatch } from "react-timer-hook";

export default function StopWatch() {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });
    return (
        <Flex style={{ textAlign: 'center' }}>

            <Box fontSize={"xl"} mr='5'>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </Box>
            <Icon as={BsPlayCircleFill} mt='1' fontSize={"25px"} onClick={start}/>
            <Box ml='5'></Box>
            <Icon as={BsFillPauseFill} mt='1' fontSize={"25px"} onClick={pause}/>
            <TimeIcon mr='6' ml='4'  mt='2' fontSize='lg' onClick={reset}/>
            {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button> */}
        </Flex>
    );
}


