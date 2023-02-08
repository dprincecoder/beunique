import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/router";
import { useCountdown } from "../hooks/useCountdown";
import { DateTimeDisplay } from ".";

const Countdown = ({ targetDate }) => {
  const router = useRouter();

  const { salesTimerOn, setSalesTimerOn } = useAppContext();

  const ExpiredNotice = () => {
    setSalesTimerOn(false);

    return (
      <section className="grid place-items-center">
        <span className="text-xl text-red-500 font-semibold mb-2">
          Expired!!!
        </span>
        <span className="text-[14px]">
          Please select a future date and time.
        </span>
      </section>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <section className="flex flex-row items-end justify-center space-x-3">
        {days > 0 && (
          <>
            <DateTimeDisplay
              value={days ? days : 0}
              type={"Days"}
              isDanger={days <= 3}
            />
            <span>:</span>
          </>
        )}

        {hours > 1 ? (
          <>
            <DateTimeDisplay
              value={hours ? hours : 0}
              type={"hrs"}
              isDanger={hours <= 3}
            />
            <span>:</span>
          </>
        ) : (
          <>
            <DateTimeDisplay
              value={hours ? hours : 0}
              type={"hr"}
              isDanger={hours <= 3}
            />
            <span>:</span>
          </>
        )}

        {minutes > 1 ? (
          <>
            <DateTimeDisplay
              value={minutes ? hours : 0}
              type={"mins"}
              isDanger={hours <= 3}
            />
            <span>:</span>
          </>
        ) : (
          <>
            <DateTimeDisplay
              value={minutes ? hours : 0}
              type={"min"}
              isDanger={hours <= 3}
            />
            <span>:</span>
          </>
        )}

        <DateTimeDisplay
          value={seconds ? seconds : 0}
          type={"s"}
          isDanger={hours <= 3}
        />
      </section>
    );
  };

  useEffect(() => {}, []);

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days ? days : 0}
        hours={hours ? hours : 0}
        minutes={minutes ? minutes : 0}
        seconds={seconds ? seconds : 0}
      />
    );
  }
};

export default Countdown;
