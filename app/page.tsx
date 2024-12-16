'use client'
import Image from "next/image";


export default function Home() {
  return (
    <>
      <NotificationDemo />
    </>
  );
}

const NotificationDemo = () => {

  const onShowNotification = async (e) => {
    e.preventDefault();
    const _result = await Notification.requestPermission();
    if (_result === "granted") {
      const _notification = new Notification("Hello, world!", {
        body: "Here is a notification body",
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        image: "/favicon.ico",
        vibrate: [200, 100, 200],
        tag: "notification-demo",
        renotify: true,
        requireInteraction: true,
        silent: false,
        timestamp: Date.now(),
        data: {
          url: "https://example.com",
          id: "notification-demo",
        },
        // actions: [
        //   {
        //     action: "open",
        //     title: "Open",
        //     icon: "/favicon.ico",
        //   },
        //   {
        //     action: "close",
        //     title: "Close",
        //     icon: "/favicon.ico",
        //   },
        // ],
      });

      _notification.addEventListener("click", () => {
        window.open(_notification.data.url, "_blank");
      });
    }
  }

  return (

    <div className="flex justify-center items-center h-screen">
      <a
        onClick={onShowNotification}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Show Notification
      </a>


    </div>
  )
}
