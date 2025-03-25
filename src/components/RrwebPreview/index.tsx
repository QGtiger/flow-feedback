import { UserModel } from "@/models/UserModel";
import { Skeleton } from "antd";
import { useEffect, useRef } from "react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";

export default function RrwebPreview() {
  const { isFetchingRecordEvents, events } = UserModel.useModel();

  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPlayerRef = playerRef.current;
    if (!currentPlayerRef || events.length < 2) return;
    const player = new rrwebPlayer({
      target: currentPlayerRef,
      props: {
        events,
        autoPlay: true,
      },
    });

    return () => {
      if (currentPlayerRef) {
        player.getReplayer().destroy();
        currentPlayerRef.innerHTML = "";
      }
    };
  }, [events]);

  if (isFetchingRecordEvents || !events.length) {
    return <Skeleton active />;
  }

  return (
    <div
      ref={playerRef}
      className="flex justify-center items-center h-full w-full p-3"
    ></div>
  );
}
