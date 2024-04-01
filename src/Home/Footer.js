import React from 'react'
function Footer() {
    return (
        <div className="">
            <footer class="flex flex-col space-y-10  bg-right-bottom justify-center py-14 ">

                <nav class="flex justify-center flex-wrap gap-6 text-gray-900 font-medium">
                    <a class="hover:text-gray-700" href="#">Home</a>
                    <a class="hover:text-gray-700" href="#">About</a>
                    <a class="hover:text-gray-700" href="#">Projects</a>
                    <a class="hover:text-gray-700" href="#">Discussion</a>
                    <a class="hover:text-gray-700" href="#">Al Chatbot</a>
                    <a class="hover:text-gray-700" href="#">Contact</a>
                </nav>

                <div class="flex justify-center space-x-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                    </a>
                </div>
                <p class="text-center text-gray-900 font-medium">&copy; 2023 Company Ltd. All rights reservered.</p>
            </footer></div>
    )
}

export default Footer