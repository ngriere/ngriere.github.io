import React, {useCallback, useMemo, useState} from "react";

const AerobicSpeedCalculator = () => {
    const [inputValue, setInputValue] = useState("");
    const [maxAerobicSpeed, setMaxAerobicSpeed] = useState("");
    const distances = [100, 200, 300, 400, 500, 800, 1000, 1500];

    const colorCodes = [
        "#02ff00",
        "#56ff00",
        "#80ff00",
        "#d3ff00",
        "#fdff00",
        "#ffd700",
        "#ffad00",
        "#ff8400",
        "#ff5a00",
        "#ff3000"
    ];

    const speeds = useMemo(() => {
        let speeds = [];
        for (let i = 70; i <= 115; i += 5) {
            speeds.push(i / 100);
        }
        return speeds;
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const maxSpeed = parseFloat(inputValue);
        setMaxAerobicSpeed(maxSpeed);
    }, [inputValue, setMaxAerobicSpeed]);

    const calculateTime = useCallback((distance, speed) => {
        const timeInSeconds = (distance / 1000) / (speed * maxAerobicSpeed) * 60 * 60;
        const timeInMilliseconds = timeInSeconds * 1000;
        const time =  new Date(timeInMilliseconds);
        return time.toISOString().substr(14, 8);
    }, [maxAerobicSpeed]);

    return (
        <div>
            <h2>Aerobic Speed Calculator</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Maximum Aerobic Speed (km/h):
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </label>
                <button type="submit">Calculate</button>
            </form>
            <br/>
            {maxAerobicSpeed && (
                <table>
                    <thead>
                    <tr>
                        <th>Distance (m)</th>
                        {speeds.map((speed, index) => (
                            <th key={speed} bgcolor={colorCodes[index]}>{Math.round(speed * 100)}%</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {distances.map((distance) => (
                        <tr key={distance}>
                            <td>{distance} m</td>
                            {speeds.map((speed, index) => (
                                <td key={speed} bgcolor={colorCodes[index]}>&nbsp;&nbsp;{calculateTime(distance, speed)}&nbsp;&nbsp;</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AerobicSpeedCalculator;
