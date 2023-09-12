const CountdownTemplate = ({days, hours, minutes, seconds}) => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max relative left-[50px]">
    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-2">
        <span className="countdown font-mono text-5xl">
            <span style={{ "--value": days }}></span>
        </span>
        days
    </div>
    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-2">
        <span className="countdown font-mono text-5xl ">
            <span style={{ "--value": hours }}></span>
        </span>
        hours
    </div>
    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-2">
        <span className="countdown font-mono text-5xl">
            <span style={{ "--value": minutes }}></span>
        </span>
        min
    </div>
    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-2">
        <span className="countdown font-mono text-5xl">
            <span style={{ "--value": seconds }}></span>
        </span>
        sec
    </div>
</div>
  );
};

export default CountdownTemplate;
