// import React, { useContext } from "react";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { ChatContext } from "../contexts/ChatContext";

// const DisplayChat = () => {
//   const { chatState } = useContext(ChatContext);
//   const randomNumber = Math.floor(Math.random() * 100);

//   return (
//     <div className="flex flex-col ml-1 mb-2 lg:items-center">
//       {chatState.map((chat) => (
//         <>
//           {chat?.prompt && (
//             <div
//               key={randomNumber}
//               className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#161b22] rounded-xl shadow-2xl lg:w-1/2"
//             >
//               <p className="text-wrap text-lg md:text-xl">{chat.prompt}</p>
//             </div>
//           )}
//           {chat?.text && (
//             <div
//               key={randomNumber + 1}
//               className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#161b22] rounded-xl shadow-2xl lg:w-1/2"
//             >
//               <Markdown
//                 className="gemini-response text-wrap text-lg md:text-xl"
//                 remarkPlugins={[remarkGfm]}
//               >
//                 {chat.text}
//               </Markdown>
//             </div>
//           )}
//         </>
//       ))}
//     </div>
//   );
// };
// export default DisplayChat;

import React, { useContext } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChatContext } from "../contexts/ChatContext";

const DisplayChat = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="flex flex-col ml-1 mb-2 lg:items-center">
      {chatState.map((chat, index) => (
        <React.Fragment key={index}>
          {chat?.prompt && (
            <div className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#161b22] rounded-xl shadow-2xl lg:w-1/2">
              <p className="text-wrap text-lg md:text-xl">{chat.prompt}</p>
            </div>
          )}
          {chat?.text && (
            <div className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#161b22] rounded-xl shadow-2xl lg:w-1/2">
              <Markdown
                className="gemini-response text-wrap text-lg md:text-xl"
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={okaidia}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {chat.text}
              </Markdown>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DisplayChat;
