import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
    return (
        <div className="bg-neutral-800">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[url('./bg.jpeg')] bg-cover">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] hover:shadow-xl hover:shadow-yellow-500 hover:duration-200 overflow-hidden bg-purple-900"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute  inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 text-center z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Example;

const cards = [
    {
        url: "./moon.png",
        title: "Scrum Board",
        id: 1,
    },
    {
        url: "./moon.png",
        title: "Repos",
        id: 2,
    },
    {
        url: "./moon.png",
        title: "Global Chats",
        id: 3,
    },
    {
        url: "./moon.png",
        title: "Blogs",
        id: 4,
    },
    {
        url: "./moon.png",
        title: "Urgent Contact",
        id: 5,
    },
];