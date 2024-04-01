import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export default function card() {

    const url = [{
        key: 1,
        title: "Web development",
        about: "Designing, building, and maintaining websites and apps. Front-end for interfaces, back-end for functionality, with databases, APIs, and security."
    },
    {
        key: 2,
        title: "Competitive Coding",
        about: "Intense programming competitions fostering problem-solving skills, algorithmic prowess, and efficient coding techniques among enthusiasts."
    },
    {
        key: 3,
        title: "Android development",
        about: "Creating mobile apps for the Android operating system, using Java or Kotlin, to reach a vast user base."
    },
    {
        key: 4,
        title: "AIML",
        about: "(Artificial Intelligence Markup Language) is used for creating chatbots and virtual assistants, enabling natural language interactions."
    },]

    return (
        <div className="pr-2 pl-2">
            <div className="flex">
                {url.map((mapp) => (
                    <Card className="w-96 border-x-2 p-4 hover:shadow-xl hover:shadow-yellow-500 hover:duration-300 border-yellow-500 hover:scale-105 duration-150">
                        <CardBody >
                            <Typography key={mapp.key} variant="h1" color="blue-gray" className="mb-2 text-2xl ">
                                {mapp.title}
                            </Typography>
                            <Typography key={mapp.key}>
                                {mapp.about}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="#" className="inline-block">
                                <Button size="sm" variant="text" className="flex items-center gap-2 hover:text-yellow-500">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>


    );
}